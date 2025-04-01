
// Database service to handle all database operations
const dbService = {
    db: new DatabaseConnection(dbConfig),
    
    init() {
        this.db.connect();
        console.log("Database service initialized");
    },
    
    async getProducts(category = null) {
        let sql = "SELECT * FROM products";
        if (category && category !== "All") {
            sql += " WHERE category = ?";
            return await this.db.query(sql, [category]);
        }
        return await this.db.query(sql);
    },
    
    async addToCart(userId, productId, quantity) {
        const sql = "INSERT INTO cart (user_id, product_id, quantity, added_date) VALUES (?, ?, ?, NOW())";
        return await this.db.query(sql, [userId, productId, quantity]);
    },
    
    async getCartItems(userId) {
        const sql = `
            SELECT p.name, p.price, c.quantity 
            FROM cart c
            JOIN products p ON c.product_id = p.product_id
            WHERE c.user_id = ?
        `;
        return await this.db.query(sql, [userId]);
    }
};

// Initialize database connection when page loads
document.addEventListener("DOMContentLoaded", () => {
    dbService.init();
    // Load products from "database"
    loadProductsFromDatabase();
});

// Function to load products from database
async function loadProductsFromDatabase() {
    try {
        filteredProducts = await dbService.getProducts(currentCategory || "All");
        displayProducts();
        console.log("Products loaded from database successfully");
    } catch (error) {
        console.error("Error loading products:", error);
        // Fallback to local data in case of database connection issues
        filteredProducts = products;
        displayProducts();
    }
}

// Modified filter function to use database
async function filterByCategory(category) {
    currentCategory = category;
    try {
        filteredProducts = await dbService.getProducts(category);
    } catch (error) {
        console.error("Error filtering products:", error);
        filteredProducts = category === "All" 
            ? products 
            : products.filter(p => p.category === category);
    }
    currentPage = 1;
    displayProducts();
}

// Modified cart function to use database
async function addToCart(name, price) {
    // In a real app, we'd have user authentication and real user IDs
    const userId = 1001; // Demo user ID
    const productId = products.findIndex(p => p.name === name) + 1;
    
    try {
        await dbService.addToCart(userId, productId, 1);
        console.log(`Product ${name} added to cart in database`);
        
        // Update local cache to reflect database changes
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const existingItem = cart.find(item => item.name === name);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ name, price, quantity: 1 });
        }
        
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();
    } catch (error) {
        console.error("Error adding to cart:", error);
        alert("Could not add item to cart. Please try again.");
    }
}