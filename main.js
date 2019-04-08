// Write your JavaScript here
document.getElementById("calculate-change").onclick = function() {
 
      var received = document.getElementById("amount-received").value;
      var due = document.getElementById("amount-due").value;
      var total = received - due;
      var change = total.toFixed(2);

      var dollars = 0;
      var quarters = 0;
      var dimes = 0;
      var nickels = 0;
      var pennies = 0;
  
     dollars = Math.floor(change/1);
     change = (change % 1);
      document.getElementById("dollars-output").innerText = dollars;

     quarters = Math.floor(change/.25);
     change = (change % .25);
      document.getElementById("quarters-output").innerText = quarters;

     dimes = Math.floor(change/.10);
     change = (change % .10);
      document.getElementById("dimes-output").innerText = dimes;
     
     nickels = Math.floor(change/.05);
     change = (change % .05);
      document.getElementById("nickels-output").innerText = nickels;
      
     pennies = Math.floor(change/.01);
     change = (change % .01);
      document.getElementById("pennies-output").innerText = pennies; 
    };