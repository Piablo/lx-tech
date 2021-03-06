module.exports = (sequelize, DataTypes) =>
    sequelize.define('Task', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        label: {
            type: DataTypes.TEXT,
        },
        status: {
            type: DataTypes.STRING,
        },
        isOpen: {
            type: DataTypes.BOOLEAN,
        },
        type: {
            type: DataTypes.STRING,
        },
        dateTimeLogged:{
            type: DataTypes.STRING,
        },
        dateTimeStarted:{
            type: DataTypes.STRING,
        },
        dateTimeComplete:{
            type: DataTypes.STRING,
        },
        ticketNumber:{
            type: DataTypes.STRING,
        },
        logs:{
            type: DataTypes.TEXT,
        },

    },{
        timestamps: false,
    })

    

    