// Get products from checkout or Buy Now

let cartItems = JSON.parse(localStorage.getItem("checkoutItems")) || [];
let buyNowItem = JSON.parse(localStorage.getItem("buyNowItem"));

let products = [];

if (cartItems.length > 0) {
    products = cartItems;
}
else if (buyNowItem) {
    products = [buyNowItem];
}

let product = document.getElementById("productDetails");

// Display Products

if (products.length > 0)
{
    products.forEach(function(item)
    {
        product.innerHTML += `
            <div class="product">
                <img src="${item.image}">
                <h2>${item.name}</h2>
                <p>${item.description}</p>
                <p class="price">${item.price}</p>
            </div>
        `;
    });
}
else
{
    product.innerHTML = "<h2>No Product Selected</h2>";
}


// Place Order
function placeOrder()
{
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    let payment = document.getElementById("payment").value;

    if(name == "" || phone == "" || address == "" || payment == "Select Payment Method")
    {
        alert("Please fill all the details.");
        return;
    }

    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    products.forEach(function(item)
    {
        orders.push(item);
    });

    localStorage.setItem("orders", JSON.stringify(orders));

    localStorage.removeItem("cart");
    localStorage.removeItem("checkoutItems");
    localStorage.removeItem("buyNowItem");

    alert("Order Placed Successfully!");

    window.location.href = "orders.html";
}