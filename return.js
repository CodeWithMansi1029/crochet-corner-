let orders = JSON.parse(localStorage.getItem("orders")) || [];

let index = localStorage.getItem("returnIndex");

let product = orders[index];

document.getElementById("product-box").innerHTML = `
    <img src="${product.image}">
    
    <div class="product-details">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p>${product.price}</p>
    </div>
`;


function submitReturn()
{
    let reason = document.getElementById("reason").value;
    let comment = document.getElementById("comment").value;

    if(reason == "Select Reason")
    {
        alert("Please select return reason");
        return;
    }

    let returnData = {
        product: product,
        reason: reason,
        comment: comment
    };

    localStorage.setItem("returnRequest", JSON.stringify(returnData));

    alert("Return request submitted");

    window.location.href="orders.html";
}