const { FormOfPaymentRepository } = require('../repository/FormOfPaymentRepository')
const response = require('./response');
const { GET_ALL_FORM_OF_PAYMENT, ADD_FORM_OF_PAYMENT } = require('../Actions/FormOfPaymentActions');

const FormOfPaymentServices = ipcMain => {
    
    ipcMain.on(ADD_FORM_OF_PAYMENT, async (event, args) => {
        let result;
        try {
            result = response(false, await new FormOfPaymentRepository().create(args), '');
        } catch (error) {
            result = response(true, null, error);
        }
        event.returnValue = result;
    });

    ipcMain.on(GET_ALL_FORM_OF_PAYMENT, async (event) => {
        let result;
        try {
            result = response(false, await new FormOfPaymentRepository().getAll(), '');
        } catch (error) {
            result = response(true, null, error);
        }

        event.returnValue = result;
    });
}
module.exports = { FormOfPaymentServices };