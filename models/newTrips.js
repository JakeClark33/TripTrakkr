const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../connection/connections');

class NewTrips extends Model {}

NewTrips.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: false,
            model: 'comment',
            key: 'id'
        },

        
            
        
},
{
    sequelize
}
)

module.exports = NewTrips;