module.exports = (sequelize, DataTypes) =>
    sequelize.define('User', {
        userId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        firstname: {
            type: DataTypes.STRING,
        },
        lastname: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.TEXT,
        },
        token: {
            type: DataTypes.TEXT,
        },
        authLevel: {
            type: DataTypes.INTEGER,
        }
    },{
        timestamps: false,
    })

    

    