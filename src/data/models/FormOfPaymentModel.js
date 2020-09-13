const {DataTypes, Model} = require('sequelize');
const sequelize = require('../Factory/SequelizeFactory');

class FormOfPaymentModel extends Model {
}
FormOfPaymentModel.init({
    code: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    description:{
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'FormOfPayment'
});

module.exports = {FormOfPaymentModel};