// ==========================================
// MY ORDERS - ORDERS.JS
// ==========================================


// Get orders from localStorage

let orders = JSON.parse(localStorage.getItem("orders")) || [];

let container = document.getElementById("orders");


// ==========================================
// ADD CSS
// ==========================================

let style = document.createElement("style");

style.innerHTML = `

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: Arial, sans-serif;
    background: linear-gradient(135deg, #fff5f7, #f7e4e9);
    color: #3d2929;
}


/* HEADER */

.header {
    background: #f3c6d3;
    padding: 22px 50px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    box-shadow: 0 3px 12px rgba(0,0,0,0.12);
}

.header h1 {
    margin: 0;
    color: #5a3e36;
    font-size: 30px;
}

.header a {
    text-decoration: none;
    background: #5a3e36;
    color: white;

    padding: 11px 20px;
    border-radius: 6px;

    font-size: 14px;

    transition: 0.3s;
}

.header a:hover {
    background: #8b4513;
}


/* ORDERS CONTAINER */

#orders {
    width: 90%;
    max-width: 1000px;
    margin: 40px auto;
}


/* ORDER CARD */

.order {
    background: rgba(255,255,255,0.95);

    display: flex;
    align-items: center;

    gap: 28px;

    padding: 22px;
    margin-bottom: 25px;

    border-radius: 14px;

    box-shadow: 0 5px 20px rgba(90,62,54,0.12);

    border: 1px solid #f0d9df;

    transition: 0.3s;
}

.order:hover {
    transform: translateY(-3px);

    box-shadow: 0 8px 25px rgba(90,62,54,0.18);
}


/* PRODUCT IMAGE */

.order img {
    width: 180px;
    height: 180px;

    object-fit: cover;

    border-radius: 10px;

    border: 1px solid #ead1d7;

    background: #fafafa;
}


/* DETAILS */

.details {
    flex: 1;
}

.details h2 {
    margin: 0 0 10px;

    color: #5a3e36;

    font-size: 24px;
}

.details p {
    color: #777;

    font-size: 15px;

    margin: 8px 0;
}

.price {
    color: #9b5c68;

    font-size: 20px;

    margin: 15px 0;
}


/* BUTTONS */

.details button {
    border: none;

    padding: 10px 16px;

    margin-right: 8px;

    border-radius: 6px;

    cursor: pointer;

    font-size: 14px;

    transition: 0.25s;
}


/* RETURN */

.return-btn {
    background: #d994aa;
    color: white;
}

.return-btn:hover {
    background: #c77c95;
}


/* CANCEL */

.cancel-btn {
    background: #d9534f;
    color: white;
}

.cancel-btn:hover {
    background: #c9302c;
}


/* REMOVE */

.remove-btn {
    background: #555;
    color: white;
}

.remove-btn:hover {
    background: #333;
}


/* EMPTY */

.empty {
    background: white;

    text-align: center;

    padding: 70px 20px;

    border-radius: 14px;

    box-shadow: 0 5px 20px rgba(90,62,54,0.12);
}

.empty h2 {
    color: #5a3e36;

    margin-bottom: 10px;
}

.empty p {
    color: #777;
}


/* MOBILE */

@media (max-width: 650px) {

    .header {
        padding: 18px 20px;
    }

    .header h1 {
        font-size: 22px;
    }

    .header a {
        padding: 9px 12px;
        font-size: 12px;
    }

    .order {
        flex-direction: column;
        align-items: flex-start;
    }

    .order img {
        width: 100%;
        height: 240px;
    }

    .details {
        width: 100%;
    }

    .details button {
        margin-bottom: 8px;
    }
}

`;

document.head.appendChild(style);


// ==========================================
// DISPLAY ORDERS
// ==========================================

function renderOrders() {

    container.innerHTML = "";


    // No orders

    if (orders.length === 0) {

        container.innerHTML = `

            <div class="empty">

                <h2>No Orders Yet</h2>

                <p>
                    Your placed products will appear here.
                </p>

            </div>

        `;

        return;
    }


    // Display products

    orders.forEach(function(item, index) {

        container.innerHTML += `

            <div class="order">

                <img
                    src="${item.image}"
                    alt="${item.name}"
                >


                <div class="details">

                    <h2>
                        ${item.name}
                    </h2>


                    <p>
                        ${item.description || ""}
                    </p>


                    <h3 class="price">
                        ${item.price || ""}
                    </h3>


                    <button
                        class="return-btn"
                        onclick="returnProduct(${index})">

                        Return

                    </button>


                    <button
                        class="cancel-btn"
                        onclick="cancelOrder(${index})">

                        Cancel Order

                    </button>


                    <button
                        class="remove-btn"
                        onclick="removeOrder(${index})">

                        Remove

                    </button>

                </div>

            </div>

        `;

    });

}


// ==========================================
// RETURN PRODUCT
// ==========================================

function returnProduct(index) {

    if (!orders[index]) {
        return;
    }


    localStorage.setItem(
        "returnProduct",
        JSON.stringify(orders[index])
    );


    localStorage.setItem(
        "returnIndex",
        index
    );


    window.location.href = "return.html";

}


// ==========================================
// CANCEL ORDER
// ==========================================

function cancelOrder(index) {

    if (!orders[index]) {
        return;
    }


    // Save selected order index

    localStorage.setItem(
        "cancelIndex",
        index
    );


    // Open cancel page

    window.location.href = "cancle.html";

}


// ==========================================
// REMOVE ORDER
// ==========================================

function removeOrder(index) {

    if (!orders[index]) {
        return;
    }


    let answer = confirm(
        "Are you sure you want to remove this order?"
    );


    if (answer) {

        orders.splice(index, 1);


        localStorage.setItem(
            "orders",
            JSON.stringify(orders)
        );


        renderOrders();

    }

}


// ==========================================
// START
// ==========================================

renderOrders();
