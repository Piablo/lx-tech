module.exports = (sequelize, DataTypes) =>
    sequelize.define('User', {
        userId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.TEXT,
        },
        token: {
            type: DataTypes.TEXT,
        }
    },{
        timestamps: false,
    })

    

    