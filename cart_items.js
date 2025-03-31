const products = [
    // whiskey 
    { name: "Jack Daniel's Old No. 7 Tennessee Whiskey", category: "Whisky", price: 3650, img: "https://images.gotoliquorstore.com/product/1000002500/173f123c-a3e4-4216-8e41-d001f9d8a98e_360_m.jpg" },
    { name: "Johnnie Walker Blue Label", category: "Whisky", price: 2600, img: "https://images.gotoliquorstore.com/product/1000001313/a4a07c3e-832d-4191-9952-f2c79bef5dd0_360_m.jpg" },
    { name: "Jameson Irish Whiskey", category: "Whisky", price: 5100, img: "https://images.gotoliquorstore.com/product/1000001288/b4610560-0164-4827-8e7f-9eba5a96f723_360_m.jpg" },
    { name: "Johnnie Walker Black Label 12 Year Old", category: "Whisky", price: 22000, img: "https://images.gotoliquorstore.com/product/1000002513/26b30b51-984f-4055-bbc0-fb5c6d6a11a1_360_m.jpg" },
    { name: "Crown Royal Blackberry Whiskey", category: "Whisky", price: 2700, img: "https://images.gotoliquorstore.com/product/1000061510/47831f75-f0a5-4c1b-840e-58fe7b7f47a1_360_m.jpg" },
    { name: "Glenfiddich 12 Year Old", category: "Whisky", price: 2700, img: "https://images.gotoliquorstore.com/product/1000001240/6aaf1667-e04c-4b99-990d-db618dccedee_360_m.jpg" },
    { name: "W. L. Weller Special Reserve Bourbon", category: "Whisky", price: 2700, img: "https://images.gotoliquorstore.com/product/1000001423/ada6083e-d291-49f1-892e-ac47625915a6_360_m.jpg" },
    { name: "Blanton's The Original Single Barrel Bourbon", category: "Whisky", price: 2700, img: "https://images.gotoliquorstore.com/product/1000003258/5551252b-6ca2-47c1-8ae9-2421a46e302a_360_m.jpg" },
    { name: "Maker's Mark Bourbon", category: "Whisky", price: 2700, img: "https://images.gotoliquorstore.com/product/1000001339/6be36330-12f6-4e45-b22e-b81f4c1f72ca_360_m.jpg" },
    { name: "Crown Royal Fine Deluxe Blended Canadian Whiskey", category: "Whisky", price: 2700, img: "https://images.gotoliquorstore.com/product/1000001339/6be36330-12f6-4e45-b22e-b81f4c1f72ca_360_m.jpg" },
    { name: "Eagle Rare 10 Year Old Bourbon", category: "Whisky", price: 2700, img: "https://images.gotoliquorstore.com/product/1000004846/6f317fdd-6413-4ff4-99af-52ab20752e69_360_m.jpg" },
    { name: "Woodford Reserve Bourbon", category: "Whisky", price: 2700, img: "https://images.gotoliquorstore.com/product/1000023813/9d1550e6-3e09-43a7-b8cc-0aae5dec1a87_360_m.jpg" },
    { name: "Angel's Envy Bourbon", category: "Whisky", price: 2700, img: "https://images.gotoliquorstore.com/product/1000001129/ca81bf38-4cbf-4001-a107-f0075d2abae5_360_m.jpg" },
    { name: "Crown Royal Regal Apple Whiskey", category: "Whisky", price: 2700, img: "https://images.gotoliquorstore.com/product/1000001187/48ec9291-38a0-44e3-8caa-95d1a357e70f_360_m.jpg" },
    { name: "Woodford Reserve Double Oaked Bourbon", category: "Whisky", price: 2700, img: "https://images.gotoliquorstore.com/product/1000001443/c45272dd-ac4b-4d00-9973-7c88ce80598c_360_m.jpg" },
    { name: "Fireball Cinnamon Whiskey", category: "Whisky", price: 2700, img: "https://images.gotoliquorstore.com/product/1000001232/1b183034-602f-45b1-a177-a72f3fae4ea2_360_m.jpg" },
    { name: "The Macallan Double Cask 12 Year Old", category: "Whisky", price: 2700, img: "https://images.gotoliquorstore.com/product/1000001411/51f85dbd-c715-426f-b15e-448ce4b79d1f_360_m.jpg" },
    { name: "Bushmills 10 Year Old", category: "Whisky", price: 2700, img: "https://images.gotoliquorstore.com/product/1000003264/7df93530-74a0-4755-b5ac-7f324e7ccd72_360_m.jpg" },
    { name: "The Balvenie Doublewood 12 Year Old", category: "Whisky", price: 2700, img: "https://images.gotoliquorstore.com/product/1000002889/5796d001-4a49-4642-955e-45824da812c1_360_m.jpg" },

    // vodka
    { name: "Tito's Handmade Vodka", category: "Vodka", price: 2700, img: "https://images.gotoliquorstore.com/product/1000001899/771763f2-1fbe-45a4-8312-89b7d8d9f635_360_m.jpg" },
    { name: "Ketel One Vodka", category: "Vodka", price: 2700, img: "https://images.gotoliquorstore.com/product/1000001646/b6e77374-59dd-42d5-944a-9af76319e940_360_m.jpg" },
    { name: "Grey Goose Vodka", category: "Vodka", price: 2700, img: "https://images.gotoliquorstore.com/product/1000003346/43dece5e-4772-4df1-9103-c64fb1a3132f_360_m.jpg" },
    { name: "Absolut Vodka", category: "Vodka", price: 2700, img: "https://images.gotoliquorstore.com/product/1000001495/22af298b-c867-41c4-8cc3-2bee562385b7_360_m.jpg" },
    { name: "Smirnoff No. 21 Vodka", category: "Vodka", price: 2700, img: "https://images.gotoliquorstore.com/product/1000002558/d97920a4-5315-47d5-bf1c-1a4e6d3f16ad_360_m.jpg" },
    { name: "Reyka Vodka", category: "Vodka", price: 2700, img: "https://images.gotoliquorstore.com/product/1000007037/618fbb80-eff1-451f-bb88-dba0ec67f24f_360_m.jpg" },
    { name: "Skyy Vodka", category: "Vodka", price: 2700, img: "https://images.gotoliquorstore.com/product/1000001802/56b200f3-fefa-47a8-ba23-fafa400deaf4_360_m.jpg" },
    { name: "New Amsterdam Pink Whitney Vodka", category: "Vodka", price: 2700, img: "https://images.gotoliquorstore.com/product/1000009295/3b62c6a5-5f9c-48c5-abb1-2771f85b3e7e_360_m.jpg" },
    { name: "Ketel One Botanical Grapefruit and Rose Vodka", category: "Vodka", price: 2700, img: "https://images.gotoliquorstore.com/product/1000001641/56b06ce0-af6e-4a5c-b927-9a8a7ee91f80_360_m.jpg" },
    { name: "McCormick Vodka", category: "Vodka", price: 2700, img: "https://images.gotoliquorstore.com/product/1000001660/f3137cce-9ae6-43e9-917e-1b4fab3abf32_360_m.jpg" },
    { name: "Ciroc Limited Edition Honey Melon", category: "Vodka", price: 2700, img: "https://images.gotoliquorstore.com/product/1000048355/935faa7e-8cc9-4f54-9831-ac4a8d90fc88_360_m.jpg" },
    { name: "New Amsterdam 80 Proof Vodka", category: "Vodka", price: 2700, img: "https://images.gotoliquorstore.com/product/1000001668/d4a8dce9-ccc0-4aa4-8ff5-6a7ae9bc5bf1_360_m.jpg" },
    { name: "Skol Vodka", category: "Vodka", price: 2700, img: "https://images.gotoliquorstore.com/product/1000001786/f79836f4-30a6-41f4-8432-ae63fb429d09_360_m.jpg" },
    { name: "Smirnoff Pink Lemonade Vodka", category: "Vodka", price: 2700, img: "https://images.gotoliquorstore.com/product/1000026055/2e163624-ae3f-4821-9c2d-c1cf2ead0ac2_360_m.jpg" },
    { name: "Svedka Vodka", category: "Vodka", price: 2700, img: "https://images.gotoliquorstore.com/product/1000001860/3147b39b-2b5e-4dd6-adb6-d50cc46af292_360_m.jpg" },
    { name: "Taaka Vodka", category: "Vodka", price: 2700, img: "https://images.gotoliquorstore.com/product/1000009434/d53395a0-f853-4251-9721-be184744484e_360_m.jpg" },
    { name: "Ciroc Vodka", category: "Vodka", price: 2700, img: "https://images.gotoliquorstore.com/product/1000001575/4c61220f-61ac-499b-8e62-a9ffa6764cec_360_m.jpg" },
    { name: "Deep Eddy Lemon Vodka", category: "Vodka", price: 2700, img: "https://images.gotoliquorstore.com/product/1000001588/38f6fd6b-a1ed-4504-8023-36c3036482bd_360_m.jpg" },
    { name: "Three Olives Bubble Vodka", category: "Vodka", price: 2700, img: "https://images.gotoliquorstore.com/product/1000001866/6071b2c4-3e9d-402a-828a-68e0a71fc009_360_m.jpg" },
    { name: "Crystal Head Vodka", category: "Vodka", price: 2700, img: "https://images.gotoliquorstore.com/product/1000003041/93421f0c-836f-46a9-a6e9-e82a44081ec3_360_m.jpg" },
    
    // gin
    { name: "Bombay Dry Gin ", category: "Gin", price: 4300, img: "https://images.gotoliquorstore.com/product/1000000685/1c87d58c-b9cd-47b3-be83-a682d87df45f_360_m.jpg" },
    { name: "Sipsmith London Dry Gin", category: "Gin", price: 4300, img: "https://images.gotoliquorstore.com/product/1000012251/5e05f40f-cafb-4b3e-b87c-9cd5bf4ac85f_360_m.jpg" },
    { name: "Fords Gin", category: "Gin", price: 4300, img: "https://images.gotoliquorstore.com/product/1000012242/273ffa5d-ae07-40bc-934e-1c5644e17922_360_m.jpg" },
    { name: "Gordon's Gin", category: "Gin", price: 4300, img: "https://images.gotoliquorstore.com/product/1000001986/fcfa81ae-ec9a-42c8-9e05-52ea83b28cc7_360_m.jpg" },
    { name: "New Amsterdam Gin", category: "Gin", price: 4300, img: "https://images.gotoliquorstore.com/product/1000000702/ed2e004e-9da5-419d-b958-ba1d50bab1e7_360_m.jpg" },
    { name: "Tanqueray No. Ten Gin", category: "Gin", price: 4300, img: "https://images.gotoliquorstore.com/product/1000002893/66f96fd0-c279-4e76-8858-e9f3ca0954a8_360_m.jpg" },
    { name: "Tanqueray Sevilla Orange Gin", category: "Gin", price: 4300, img: "https://images.gotoliquorstore.com/product/1000026031/5190b4ce-80e3-48fe-a1f3-dde204fe5a40_360_m.jpg" },
    { name: "Brooklyn Gin", category: "Gin", price: 4300, img: "https://images.gotoliquorstore.com/product/1000024929/49a30844-4984-4f09-999c-b3f800378171_360_m.jpg" },
    { name: "CH Distillery Key Gin", category: "Gin", price: 4300, img: "https://images.gotoliquorstore.com/product/1000012201/354b4dfa-8046-4d5b-be39-9352dda8affa_360_m.jpg" },
    { name: "Bombay Sapphire East Gin", category: "Gin", price: 4300, img: "https://images.gotoliquorstore.com/product/1000000686/545ab3df-ac9b-4071-89b3-3f45b1ac5629_360_m.jpg" },
    
    // rum
    { name: "Sailor Jerry Spiced Rum", category: "Rum", price: 3200, img: "https://images.gotoliquorstore.com/product/1000001995/b51ba30f-8a8f-4472-a90d-656903a3216d_360_m.jpg" },
    { name: "Bacardi Gold Rum", category: "Rum", price: 3200, img: "https://images.gotoliquorstore.com/product/1000000563/42bdc001-12be-41f5-b2de-f6473d66085d_360_m.jpg" },
    { name: "Ron Zacapa Centenario Sistema Solera 23 Year Old Rum", category: "Rum", price: 3200, img: "https://images.gotoliquorstore.com/product/1000003445/9f49c88b-d58b-466e-ad3e-b0d1242d7afc_360_m.jpg" },
    { name: "Captain Morgan Original Spiced Rum", category: "Rum", price: 3200, img: "https://images.gotoliquorstore.com/product/1000000609/cd5541b0-e378-4607-b5e1-b322052b94ad_360_m.jpg" },
    { name: "Blackheart Toasted Coconut Rum", category: "Rum", price: 3200, img: "https://images.gotoliquorstore.com/product/1000028012/6226f01f-a5d3-4d0f-9563-bc565720eb64_360_m.jpg" },
    { name: "Appleton Estate 8 Year Old Reserve", category: "Rum", price: 3200, img: "https://images.gotoliquorstore.com/product/1000021351/b0de3144-3678-4f94-a97f-422b6cad3c74_360_m.jpg" },
    { name: "Flor de Cana Centenario 12 Year Old Rum", category: "Rum", price: 3200, img: "https://images.gotoliquorstore.com/product/1000013306/7073e2dd-6b1e-4714-81d0-86351d693bc4_360_m.jpg" },
    { name: "Flor de Cana 18 Year Old Rum", category: "Rum", price: 3200, img: "https://images.gotoliquorstore.com/product/1000021968/98909573-f4fa-4a5e-93f3-20813082ae6a_360_m.jpg" },
    { name: "Old Monk XXX 7 Year Old Rum", category: "Rum", price: 3200, img: "https://images.gotoliquorstore.com/product/1000007678/0b778c05-bf07-4490-a16b-8740db801e94_360_m.jpg" },
    { name: "RumHaven Coconut Rum Gift Set with Tiki Mug", category: "Rum", price: 3200, img: "https://images.gotoliquorstore.com/product/1000021399/a4f6a697-fc64-4d05-944d-cf1056f779dd_360_m.jpg" },
    
    

    // beer
    { name: "Budweiser", category: "Beer", price: 3120, img: "https://images.gotoliquorstore.com/product/1000000182/5b2326d7-c8ba-477d-a7fb-7df4e12dde39_360_m.jpg" },
    { name: "Corona Extra", category: "Beer", price: 4300, img: "https://images.gotoliquorstore.com/product/1000000120/1d998181-43f7-40b2-a8fc-ad61193ef80a_360_m.jpg" },
    { name: "Corona Premium", category: "Beer", price: 4300, img: "https://images.gotoliquorstore.com/product/1000000131/29ca9f3f-c254-4edc-b569-7e2f3d4a393d_360_m.jpg" },
    { name: "Corona Light", category: "Beer", price: 4300, img: "https://images.gotoliquorstore.com/product/1000000130/c3eba262-8e19-4194-ab77-80b3a1d5f823_360_m.jpg" },
    { name: "Kingfisher", category: "Beer", price: 4300, img: "https://images.gotoliquorstore.com/product/1000007203/a411223f-a06e-4740-baa4-df00459689a6_360_m.jpg" },
    { name: "Michelob Ultra", category: "Beer", price: 3120, img: "https://images.gotoliquorstore.com/product/1000000279/0dcfb3ac-cd82-481f-9a55-2def073e942c_360_m.jpg" },
    { name: "Michelob Ultra Pure Gold", category: "Beer", price: 3120, img: "https://images.gotoliquorstore.com/product/1000000288/86d0b724-9229-4132-b41b-9ad9cd21fb77_360_m.jpg" },
    { name: "Bud Light Lime", category: "Beer", price: 4300, img: "https://images.gotoliquorstore.com/product/1000000044/d641fedc-c52b-457f-9960-c6db2ff744fd_360_m.jpg" },
    { name: "Founders Porter", category: "Beer", price: 4300, img: "https://images.gotoliquorstore.com/product/1000002288/f0298bf7-3c30-47f5-bac3-ee2f6f71a9d9_360_m.jpg" },
    { name: "Champale Golden", category: "Beer", price: 4300, img: "https://images.gotoliquorstore.com/product/1000037094/039c272a-8dee-4b9b-8923-b53a9f2afdad_360_m.jpg" },
    { name: "Yuengling Traditional Lager", category: "Beer", price: 4300, img: "https://images.gotoliquorstore.com/product/1000004302/63c61286-de6a-43fd-9ee6-50dc88c314df_360_m.jpg" },
    { name: "Bell's Oberon Ale", category: "Beer", price: 4300, img: "https://images.gotoliquorstore.com/product/1000000018/95aad1b0-3c3b-477e-9384-42e60f0bc384_360_m.jpg" },
    { name: "Samuel Adams OctoberFest", category: "Beer", price: 4300, img: "https://images.gotoliquorstore.com/product/1000000409/4837eea3-4bf2-4e39-8e71-91b0c1ee5e95_360_m.jpg" },
    { name: "REDD's Apple Ale", category: "Beer", price: 4300, img: "https://images.gotoliquorstore.com/product/1000000388/7fc510e9-24e9-4a30-b070-6c15cad077fc_510_m.jpg" }

];

const itemsPerPage = 12;
let currentPage = 1;
let filteredProducts = products;

// Function to display products
function displayProducts() {
    const productContainer = document.getElementById("product-container");
    if (!productContainer) return; // Ensure element exists
    productContainer.innerHTML = "";

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

    paginatedProducts.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>₹ ${product.price}</p>
            <button class="add-to-cart" onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
        `;
        productContainer.appendChild(productDiv);
    });

    document.getElementById("pageNumber").innerText = currentPage;
}

// Cart Management Functions
function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

// Update cart count in navbar
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    if (document.getElementById("cart-count")) {
        document.getElementById("cart-count").innerText = cartCount;
    }
}

// Pagination controls
document.getElementById("nextPage")?.addEventListener("click", () => {
    if (currentPage < Math.ceil(filteredProducts.length / itemsPerPage)) {
        currentPage++;
        displayProducts();
    }
});

document.getElementById("prevPage")?.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        displayProducts();
    }
});

// Filtering products
function filterByCategory(category) {
    filteredProducts = category === "All" ? products : products.filter(p => p.category === category);
    currentPage = 1;
    displayProducts();
}

// Event listener for category filtering
document.querySelectorAll(".categories li").forEach(category => {
    category.addEventListener("click", () => {
        filterByCategory(category.innerText);
    });
});

// Initial Load
document.addEventListener("DOMContentLoaded", () => {
    displayProducts();
    updateCartCount();
});
