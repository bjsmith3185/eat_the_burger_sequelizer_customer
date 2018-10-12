module.exports = function (sequelize, DataTypes) {


    var Customers = sequelize.define("Customers", {


        customer_name: {
            type: DataTypes.STRING,
            // allowNull: false,
            // validate: {
            //     len: [1,140]
            // }
        },
    });

    // Customers.associate = function(models) {
    //     // Associating Author with Posts
    //     // When an Author is deleted, also delete any associated Posts
    //     Customers.hasMany(models.Burgers, {
  
    //     });
    //   };


    return Customers;
};
