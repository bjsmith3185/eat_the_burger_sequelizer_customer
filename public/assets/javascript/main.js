$( document ).ready(function() {

    
        $("#submit-customer").on("click", function(event) {
          event.preventDefault();
     
          var customer = $("#customer_name").val().trim();

          if(!customer >= 1) {
            alert("please enter a valid name");
            return;
          }
   
          var data = {
            customer_name: customer
          }
          console.log(data)
          $.ajax("/api/customer/add", {
            type: "post",
            data: data
          }).then(
            function() {
              location.reload();
            }
          );
    
        })

  
        $("#submit-order").on("click", function(event){
          event.preventDefault();
          var burgerName = $("#burger").val().trim();
          if(!burgerName >=1) {
            alert("please enter a valid burger name.");
          }

          var data = {
              burger: $("#burger").val().trim(),
              customer_id: $(".customerSelect").attr("data-customerID")
          }

          $.ajax("/api/burger/add", {
              type: "post",
              data: data
            }).then(
              function() {
                location.reload();
              }
            );
      })
    
    
        $(".eat-burger").on("click", function(event) {
          var id = $(this).attr("data-id");
    
          var data = {
            devoured: true
          }
    
          $.ajax("/api/update/" + id, {
            type: "PUT",
            data: data
          }).then(
            function() {
              location.reload();
            }
          );
        });
    

  // A function to get Customers and then render our list of Customers
  var customer = $("#customer");

  getCustomers();


  function getCustomers() {
    $.get("/api/customers", renderCustomerList);
  }
  
  function renderCustomerList(data) {
    
       var rowsToAdd = [];
    for (var i = 0; i < data.length; i++) {
      rowsToAdd.push(createCustomerRow(data[i]));
    }
 
    customer.append(rowsToAdd);

  }

  // Creates the customer options in the dropdown
  function createCustomerRow(customer) {
    var listOption = $("<option>");
    listOption.addClass("customerSelect");
    listOption.attr("data-customerID", customer.id);
    listOption.text(customer.customer_name);
    return listOption;
  }
 
  
      });
      