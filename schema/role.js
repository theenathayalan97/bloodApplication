module.exports = (database, Sequelize) => {

    const Role = database.define("role", {
        role_name: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        },
        CreateBy: {
            type: Sequelize.DATE
        }
    },
        {

            timeStamps: true

        }

    );



    return Role;

}; 