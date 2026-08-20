// Get wishlist from localStorage
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

let container = document.getElementById("wishlistItems");

// Display Wishlist
function displayWishlist()
{
    container.innerHTML = "";

    if(wishlist.length === 0)
    {
        container.innerHTML = `
            <div class="empty">
                <i class="fa-solid fa-heart-crack"></i>
                <h2>Your Wishlist is Empty</h2>
                <p>Add your favourite products to the wishlist.</p>
            </div>
        `;
        return;
    }

    wishlist.forEach(function(item, index)
    {
        container.innerHTML += `
            <div class="collection">
                <img src="${item.image}" alt="${item.name}">

                <h3>${item.name}</h3>

                <p>${item.description}</p>

                <p>${item.price}</p>

                <div class="buttons">

                    <button class="cart-btn" onclick="moveToCart(${index})">
                        <i class="fa-solid fa-cart-shopping"></i>
                        Add to Cart
                    </button>

                    <button class="remove-btn" onclick="removeWishlist(${index})">
                        <i class="fa-solid fa-trash"></i>
                        Remove
                    </button>

                </div>
            </div>
        `;
    });
}

// Remove Product
function removeWishlist(index)
{
    wishlist.splice(index, 1);

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    displayWishlist();
}

// Move Product to Cart
function moveToCart(index)
{
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(wishlist[index]);

    localStorage.setItem("cart", JSON.stringify(cart));

    wishlist.splice(index, 1);

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    displayWishlist();
}

// Load Wishlist
displayWishlist();