const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection/connections');

class FutureTrips extends Model {}

FutureTrips.init(
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
        }
},
{
    sequelize
}
)

module.exports = FutureTrips;