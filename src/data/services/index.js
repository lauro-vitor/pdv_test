const { ipcMain} = require('electron');

const {FormOfPaymentServices} = require('./FormOfPaymentServices');
FormOfPaymentServices(ipcMain);

module.exports = {ipcMain};