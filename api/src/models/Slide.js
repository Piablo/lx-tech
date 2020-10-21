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
        timing: {
            type: DataTypes.TEXT,
        }
    },{
        timestamps: false,
    })

    

    