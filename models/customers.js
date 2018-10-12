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

 
    Customers.associate = function(models) {
        
        Customers.hasMany(models.Burgers, {
  
        });
      };

    return Customers;
};
