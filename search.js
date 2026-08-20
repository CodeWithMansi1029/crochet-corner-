// ==========================================
// SEARCH PRODUCTS
// ==========================================

function searchProducts(event) {

    // Run search only when Enter is pressed
    if (event.key !== "Enter") {
        return;
    }

    const searchInput = document.getElementById("searchBar");

    if (!searchInput) {
        return;
    }

    const searchText = searchInput.value.trim().toLowerCase();

    // If search box is empty
    if (searchText === "") {
        alert("Please enter a product name to search.");
        return;
    }


    // ==========================================
    // PRODUCT SEARCH
    // ==========================================

    const products = {

        "keychain": "keychain.html",
        "keychains": "keychain.html",

        "top": "top.html",
        "tops": "top.html",

        "bag": "bags.html",
        "bags": "bags.html",

        "flower": "flower.html",
        "flowers": "flower.html",
        "bouquet": "flower.html",

        "home decor": "homedecor.html",
        "homedecor": "homedecor.html",

        "gift": "gift.html",
        "gifts": "gift.html",

        "soft toy": "Softtoys.html",
        "soft toys": "Softtoys.html",
        "teddy": "Softtoys.html",

        "hair": "hair.html",
        "hair accessory": "hair.html",
        "hair accessories": "hair.html",

        "hat": "hat.html",
        "hats": "hat.html",

        "sweater": "sweater.html",
        "sweaters": "sweater.html",

        "scarf": "scarf.html",
        "scarfs": "scarf.html"
    };


    // ==========================================
    // EXACT SEARCH
    // ==========================================

    if (products[searchText]) {

        window.location.href = products[searchText];

        return;
    }


    // ==========================================
    // PARTIAL SEARCH
    // ==========================================

    for (let product in products) {

        if (product.includes(searchText)) {

            window.location.href = products[product];

            return;
        }
    }


    // ==========================================
    // PRODUCT NOT FOUND
    // ==========================================

    alert(
        "Product not found.\n\n" +
        "Try searching for:\n" +
        "Keychain, Top, Bag, Flower, Gift, Teddy, Hair, Hat, Sweater or Scarf."
    );

    searchInput.focus();
}