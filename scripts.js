Leno

function checkout() {      
    // Retrieve the quantities of products A, B, C, and D from their respective input elements.  
    // If the input is not a valid integer, default to 0.  
    var quantityA = parseInt(document.getElementById('quantityA').value) || 0;      
    var quantityB = parseInt(document.getElementById('quantityB').value) || 0;      
    var quantityC = parseInt(document.getElementById('quantityC').value) || 0;      
    var quantityD = parseInt(document.getElementById('quantityD').value) || 0;      
  
    // Define the prices of products A, B, C, and D.  
    var priceA = 100;  // Price of Product A  
    var priceB = 200;  // Price of Product B  
    var priceC = 300;  // Price of Product C  
    var priceD = 400;  // Price of Product D  
  
    // Calculate the total cost by multiplying each product's quantity by its price,  
    // then summing up the results.  
    var total = (quantityA * priceA) + (quantityB * priceB) + (quantityC * priceC) + (quantityD * priceD);  
  
    // Display the total cost and item details in the order summary div.  
    var orderSummary = '';  
    if (quantityA > 0) orderSummary += `Product A: ${quantityA} x $100 = $${quantityA * priceA}<br>`;  
    if (quantityB > 0) orderSummary += `Product B: ${quantityB} x $200 = $${quantityB * priceB}<br>`;  
    if (quantityC > 0) orderSummary += `Product C: ${quantityC} x $300 = $${quantityC * priceC}<br>`;  
    if (quantityD > 0) orderSummary += `Product D: ${quantityD} x $400 = $${quantityD * priceD}<br>`;  
    orderSummary += `<b>Total: $${total}</b>`;  
  
    document.getElementById('orderSummary').innerHTML = orderSummary;  
  
    // Optionally, you can also show an alert with the total cost.  
    // alert('Total: $' + total);  
}