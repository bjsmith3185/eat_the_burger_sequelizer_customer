# eat_the_burger_sequelizer_customer

this app uses node.js, express.js, express-handlebars, sequelize and JAWSdb.

use the link, https://secure-meadow-72669.herokuapp.com/ 

this app uses 2 tables created by sequelize-cli. 
    - Burgers and Customers


the user will be promped to enter a customer name first
    - if no name is entered an alert will tell the user to enter a valid name.

    (the customer name is stored in a table "Customers")

the user will then enter the name of the burger they would like to create
    - the user will select a customer from the drop-down list to assign the burger to.

    (the burger created will be stored in a table "burgers" as well as the associated customerID)
    (all customer names are added to the drop down menu once they are created)


the burger created with the customer name are displayed under the "burgers ready to eat" section.
    - to eat the burger click the "devour" button
    (this will update the "devoured" status to "true")

The burger that was devoured will now be displayed under the "burgers devoured" section with the customer name.


Enjoy