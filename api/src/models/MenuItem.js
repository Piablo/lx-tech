module.exports = (sequelize, DataTypes) =>
    sequelize.define('MenuItem', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        label: {
            type: DataTypes.STRING,
        },
        level: {
            type: DataTypes.INTEGER,
        },
        parentId: {
            type: DataTypes.INTEGER,
        },
        order: {
            type: DataTypes.INTEGER,
        }
    },{
        timestamps: false,
    })

    

    