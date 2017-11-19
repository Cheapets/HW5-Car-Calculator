function calculations() {
    var months = document.getElementById("months");
    var gasprice = document.getElementById("gasprice");
  
/*
  Here we are getting the input variables from the form. The table present will store the values in
  the following "price#" variables.
*/
    var car_price1 = document.getElementById("price1");
    var car_price2 = document.getElementById("price2");
    var car_price3 = document.getElementById("price3");
    var car_price4 = document.getElementById("price4");
/*
  Here we are getting the input variables from the form. The table present will store the values in
  the following "mpg#" variables. Essentially the samething as above.
*/
    var mpg1 = document.getElementById("mpg1");
    var mpg2 = document.getElementById("mpg2");
    var mpg3 = document.getElementById("mpg3");
    var mpg4 = document.getElementById("mpg4");
  
    value11 = "$" + Math.round(car_price1.value/months.value)/100 + "/mo, $" + parseFloat(gasprice.value/mpg1.value).toFixed(2) + "/mi ";
    value12 = "$" + Math.round(car_price1.value/months.value)/100 + "/mo, $" + parseFloat(gasprice.value/mpg2.value).toFixed(2) + "/mi ";
    value13 = "$" + Math.round(car_price1.value/months.value)/100 + "/mo, $" + parseFloat(gasprice.value/mpg3.value).toFixed(2) + "/mi ";
    value14 = "$" + Math.round(car_price1.value/months.value)/100 + "/mo, $" + parseFloat(gasprice.value/mpg4.value).toFixed(2) + "/mi ";
  
    value21 = "$" + Math.round(car_price2.value/months.value)/100 + "/mo, $" + parseFloat(gasprice.value/mpg1.value).toFixed(2) + "/mi ";
    value22 = "$" + Math.round(car_price2.value/months.value)/100 + "/mo, $" + parseFloat(gasprice.value/mpg2.value).toFixed(2) + "/mi ";
    value23 = "$" + Math.round(car_price2.value/months.value)/100 + "/mo, $" + parseFloat(gasprice.value/mpg3.value).toFixed(2) + "/mi ";
    value24 = "$" + Math.round(car_price2.value/months.value)/100 + "/mo, $" + parseFloat(gasprice.value/mpg4.value).toFixed(2) + "/mi ";
  
    value31 = "$" + Math.round(car_price3.value/months.value)/100 + "/mo, $" + parseFloat(gasprice.value/mpg1.value).toFixed(2) + "/mi ";
    value32 = "$" + Math.round(car_price3.value/months.value)/100 + "/mo, $" + parseFloat(gasprice.value/mpg2.value).toFixed(2) + "/mi ";
    value33 = "$" + Math.round(car_price3.value/months.value)/100 + "/mo, $" + parseFloat(gasprice.value/mpg3.value).toFixed(2) + "/mi ";
    value34 = "$" + Math.round(car_price3.value/months.value)/100 + "/mo, $" + parseFloat(gasprice.value/mpg4.value).toFixed(2) + "/mi ";
  
    value41 = "$" + Math.round(car_price4.value/months.value)/100 + "/mo, $" + parseFloat(gasprice.value/mpg1.value).toFixed(2) + "/mi ";
    value42 = "$" + Math.round(car_price4.value/months.value)/100 + "/mo, $" + parseFloat(gasprice.value/mpg2.value).toFixed(2) + "/mi ";
    value43 = "$" + Math.round(car_price4.value/months.value)/100 + "/mo, $" + parseFloat(gasprice.value/mpg3.value).toFixed(2) + "/mi ";
    value44 = "$" + Math.round(car_price4.value/months.value)/100 + "/mo, $" + parseFloat(gasprice.value/mpg4.value).toFixed(2) + "/mi ";
  
  
    document.getElementById("content_table").rows[1].cells[2].innerHTML =  value11;
    document.getElementById("content_table").rows[1].cells[3].innerHTML =  value12;
    document.getElementById("content_table").rows[1].cells[4].innerHTML =  value13;
    document.getElementById("content_table").rows[1].cells[5].innerHTML =  value14;
  
    document.getElementById("content_table").rows[2].cells[2].innerHTML =  value21;
    document.getElementById("content_table").rows[2].cells[3].innerHTML =  value22;
    document.getElementById("content_table").rows[2].cells[4].innerHTML =  value23;
    document.getElementById("content_table").rows[2].cells[5].innerHTML =  value24;
  
    document.getElementById("content_table").rows[3].cells[2].innerHTML =  value31;
    document.getElementById("content_table").rows[3].cells[3].innerHTML =  value32;
    document.getElementById("content_table").rows[3].cells[4].innerHTML =  value33;
    document.getElementById("content_table").rows[3].cells[5].innerHTML =  value34;
  
    document.getElementById("content_table").rows[4].cells[2].innerHTML =  value41;
    document.getElementById("content_table").rows[4].cells[3].innerHTML =  value42;
    document.getElementById("content_table").rows[4].cells[4].innerHTML =  value43;
    document.getElementById("content_table").rows[4].cells[5].innerHTML =  value44;
  }
  