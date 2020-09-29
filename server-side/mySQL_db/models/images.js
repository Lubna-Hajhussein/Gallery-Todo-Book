module.exports = (sequelize, DataTypes) => {
    //the first argument in define is the table name
    const Image = sequelize.define("Image",{

        url:{
            type:DataTypes.STRING,
            allowNull:false
        }
    })
    return Image
}