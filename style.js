//
//  
// This function, named 'checkout', calculates the total cost of purchased items  
// based on their quantities and individual prices, then displays the total cost in an alert box.  
function checkout() {    
    // Retrieve the quantities of products A, B, and C from their respective input elements.  
    // If the input is not a valid integer, default to 0.  
    var quantityA = parseInt(document.getElementById('quantityA').value) || 0;    
    var quantityB = parseInt(document.getElementById('quantityB').value) || 0;    
    var quantityC = parseInt(document.getElementById('quantityC').value) || 0;    
        
    // Define the prices of products A, B, and C.  
    var priceA = 100;  // Price of Product A  
    var priceB = 200;  // Price of Product B  
    var priceC = 300;  // Price of Product C  
        
    // Calculate the total cost by multiplying each product's quantity by its price,  
    // then summing up the results.  
    var total = (quantityA * priceA) + (quantityB * priceB) + (quantityC * priceC);    
        
    // Display the total cost in an alert box.  
    alert('Total: $' + total);    
        
}

//
document.getElementById('registerForm').addEventListener('submit', function(event) {  
    event.preventDefault(); 
  
    let username = document.getElementById('username').value;  
    let password = document.getElementById('password').value;  
  
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  
    console.log("Stored user name:" + localStorage.getItem("username"));
    console.log("Stored password:" + localStorage.getItem("password"));
    
    alert('Registration successful! Please log in.');
    window.location.href = 'login.html'; 
  });

  

//
document.getElementById('loginForm').addEventListener('submit', function(event) {    
    event.preventDefault(); 
  
    let username = document.getElementById('username').value;    
    let password = document.getElementById('password').value;    
  
    let storedUsername = localStorage.getItem("username");  
    let storedPassword = localStorage.getItem("password");  
  
    if (username === storedUsername && password === storedPassword) {    
        window.location.href = 'cart.html'; 
    } else {    
        alert('Invalid username or password. Please try again.');    
    }    
});