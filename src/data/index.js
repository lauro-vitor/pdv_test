const {FormOfPaymentRepository} = require('./repository/FormOfPaymentRepository');
const sequelize = require('./Factory/SequelizeFactory');

(async () => {
    let FormOfPayment = {
    
       code: 'cc',
       description: 'cartão de crédito'
    }
    try {
       console.log( await new FormOfPaymentRepository().create(FormOfPayment))
    } catch (error) {
        console.log(error)
    }
})();