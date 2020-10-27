module.exports = (sequelize, DataTypes) =>
    sequelize.define('Slide', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        parentId: {
            type: DataTypes.INTEGER,
        },
        slideType: {
            type: DataTypes.TEXT,
        },
        timing: {
            type: DataTypes.TEXT,
        },
        path: {
            type: DataTypes.TEXT,
        }
    },{
        timestamps: false,
    })

    

    