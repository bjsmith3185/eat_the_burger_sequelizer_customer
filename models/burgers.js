module.exports = function (sequelize, DataTypes) {


    var Burgers = sequelize.define("Burgers", {


        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1,140]
            }
        },

        // customer_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
            
        // },
        
        devoured: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        }

    });

    Burgers.associate = function(models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Burgers.belongsTo(models.Customers)
            // {
            // include: [{model: Owner}]
            // }

      };
    



    return Burgers;
};
