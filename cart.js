function addToCart(button)
{
    let product = button.closest(".collection");

    let name = product.querySelector("h3").innerText;
    let description = product.querySelectorAll("p")[0].innerText;
    let price = product.querySelectorAll("p")[1].innerText;
    let image = product.querySelector("img").src;

    let item = {
        name: name,
        description: description,
        price: price,
        image: image
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(item);

    localStorage.setItem("cart", JSON.stringify(cart));

    window.location.href = "cart.html";
}

function addToWishlist(icon)
{
    let product = icon.closest(".collection");

    let name = product.querySelector("h3").innerText;
    let description = product.querySelectorAll("p")[0].innerText;
    let price = product.querySelectorAll("p")[1].innerText;
    let image = product.querySelector("img").src;

    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    wishlist.push({
        name: name,
        description: description,
        price: price,
        image: image
    });

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    icon.classList.remove("fa-regular");
    icon.classList.add("fa-solid");

    alert("Added to Wishlist");
}

function buyNow(button)
{
    let product = button.closest(".collection");

    let name = product.querySelector("h3").innerText;
    let description = product.querySelectorAll("p")[0].innerText;
    let price = product.querySelectorAll("p")[1].innerText;
    let image = product.querySelector("img").src;

    let item = {
        name: name,
        description: description,
        price: price,
        image: image
    };

    localStorage.setItem("buyNowItem", JSON.stringify(item));

    window.location.href = "buynow.html";
}

