$( document ).ready(function() {

  
    
        $("#submit-customer").on("click", function(event) {
          event.preventDefault();
    
        //   $("#eat-button").show();
        //   $("#customer-btn").hide();
    
          var customer = $("#customer_name").val().trim();
        //   console.log(customer);
    
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
            var burger = $("#burger").val().trim();
            var customerId = $(".customerSelect").attr("data-customer");

            console.log(burger +"  " + customerId)

            var data = {
                burger: $("#burger").val().trim(),
                customer_id: $(".customerSelect").attr("data-customerID")
            }

            console.log(data)
            $.ajax("/api/burger/add", {
                type: "post",
                data: data
              }).then(
                function() {
                  location.reload();
                }
              );
        })
    
    
        // $(".eat-burger").on("click", function(event) {
        //   var id = $(this).attr("data-id");
    
        //   var data = {
        //     devoured: true
        //   }
    
        //   $.ajax("/api/update/" + id, {
        //     type: "PUT",
        //     data: data
        //   }).then(
        //     function() {
        //       location.reload();
        //     }
        //   );
        // });
    

        // Getting jQuery references to the post body, title, form, and author select
//   var bodyInput = $("#body");
//   var titleInput = $("#title");
//   var cmsForm = $("#cms");
//   var customer = $("#customer");
//   // Adding an event listener for when the form is submitted
//   $(cmsForm).on("submit", handleFormSubmit);
//   // Gets the part of the url that comes after the "?" (which we have if we're updating a post)
//   var url = window.location.search;
//   var postId;
//   var authorId;
//   // Sets a flag for whether or not we're updating a post to be false initially
//   var updating = false;

//   // If we have this section in our url, we pull out the post id from the url
//   // In '?post_id=1', postId is 1
//   if (url.indexOf("?post_id=") !== -1) {
//     postId = url.split("=")[1];
//     getPostData(postId, "post");
//   }
//   // Otherwise if we have an author_id in our url, preset the author select box to be our Author
//   else if (url.indexOf("?author_id=") !== -1) {
//     authorId = url.split("=")[1];
//   }

//   // Getting the authors, and their posts
 

//   // A function for handling what happens when the form to create a new post is submitted
//   function handleFormSubmit(event) {
//     event.preventDefault();
//     // Wont submit the post if we are missing a body, title, or author
//     if (!titleInput.val().trim() || !bodyInput.val().trim() || !authorSelect.val()) {
//       return;
//     }
//     // Constructing a newPost object to hand to the database
//     var newPost = {
//       title: titleInput
//         .val()
//         .trim(),
//       body: bodyInput
//         .val()
//         .trim(),
//       AuthorId: authorSelect.val()
//     };

//     // If we're updating a post run updatePost to update a post
//     // Otherwise run submitPost to create a whole new post
//     if (updating) {
//       newPost.id = postId;
//       updatePost(newPost);
//     }
//     else {
//       submitPost(newPost);
//     }
//   }

//   // Submits a new post and brings user to blog page upon completion
//   function submitPost(post) {
//     $.post("/api/posts", post, function() {
//       window.location.href = "/blog";
//     });
//   }

//   // Gets post data for the current post if we're editing, or if we're adding to an author's existing posts
//   function getPostData(id, type) {
//     var queryUrl;
//     switch (type) {
//     case "post":
//       queryUrl = "/api/posts/" + id;
//       break;
//     case "author":
//       queryUrl = "/api/authors/" + id;
//       break;
//     default:
//       return;
//     }
//     $.get(queryUrl, function(data) {
//       if (data) {
//         console.log(data.AuthorId || data.id);
//         // If this post exists, prefill our cms forms with its data
//         titleInput.val(data.title);
//         bodyInput.val(data.body);
//         authorId = data.AuthorId || data.id;
//         // If we have a post with this id, set a flag for us to know to update the post
//         // when we hit submit
//         updating = true;
//       }
//     });
//   }

  // A function to get Authors and then render our list of Authors
  var customer = $("#customer");

  getCustomers();


  function getCustomers() {
    $.get("/api/customers", renderCustomerList);
  }
  // Function to either render a list of authors, or if there are none, direct the user to the page
  // to create an author first
  function renderCustomerList(data) {
    // if (!data.length) {
    // //   window.location.href = "/customer";
    //   console.log("no customers")
    // }
    console.log(data)
    // $(".hidden").removeClass("hidden");
    var rowsToAdd = [];
    for (var i = 0; i < data.length; i++) {
      rowsToAdd.push(createCustomerRow(data[i]));
    }

    console.log(rowsToAdd)
    // customer.empty();
    // console.log(rowsToAdd);
    // console.log(customer);
    customer.append(rowsToAdd);
    // // customer.val(authorId);
  }

  // Creates the author options in the dropdown
  function createCustomerRow(customer) {
    var listOption = $("<option>");
    listOption.addClass("customerSelect");
    listOption.attr("data-customerID", customer.id);
    listOption.text(customer.customer_name);
    return listOption;
  }

  // Update a given post, bring user to the blog page when done
//   function updatePost(post) {
//     $.ajax({
//       method: "PUT",
//       url: "/api/posts",
//       data: post
//     })
//       .then(function() {
//         window.location.href = "/blog";
//       });
//   }
  
      });
      