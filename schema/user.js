module.exports = (database, Sequelize) => {

    const User = database.define("user", {

        user_name: {
            type: Sequelize.STRING,
            allowNull: false
        },

        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        phone: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        address: {
            type: Sequelize.STRING,
            allowNull: false
        },
        current_city: {
            type: Sequelize.STRING,
            allowNull: false
        },
        blood_group: {
            type: Sequelize.STRING,
            allowNull: false
        },
        last_donate_date: {
            type: Sequelize.STRING
        },
        DOB: {
            type: Sequelize.DATE
        },
        role: {
            type: Sequelize.STRING
        }
    },
        {

            timeStamps: true

        }

    );



    return User;

}; 