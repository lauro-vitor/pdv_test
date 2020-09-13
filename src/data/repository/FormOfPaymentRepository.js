const { Dao } = require('./Dao');
const { FormOfPaymentModel } = require('../models/FormOfPaymentModel');

class FormOfPaymentRepository extends Dao {
    constructor() {
        super(FormOfPaymentModel);
    }
}

module.exports = { FormOfPaymentRepository };