function cancelOrder() {

    let reason = document.getElementById("reason").value;


    if (reason === "") {

        alert("Please select a reason.");

        return;

    }


    // Get existing orders

    let orders =
        JSON.parse(localStorage.getItem("orders")) || [];


    // Get selected order index

    let index =
        localStorage.getItem("cancelIndex");


    if (index !== null) {

        orders.splice(Number(index), 1);

    }


    // Save updated orders

    localStorage.setItem(
        "orders",
        JSON.stringify(orders)
    );


    // Remove temporary data

    localStorage.removeItem("cancelIndex");


    alert("Order cancelled successfully!");


    window.location.href = "orders.html";

}


function goBack() {

    window.location.href = "orders.html";

}
