module.exports = (sequelize, DataTypes) => {
    //the first argument in define is the table name
    const Todo = sequelize.define("Todo",{
        text:{
            type:DataTypes.STRING,
            allowNull:false
        }
    })
    return Todo
}