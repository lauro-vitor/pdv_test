const { ipcRenderer } = require('electron');
var $ = require('jQuery');
const PATH_FORM_OF_PAYMENT = './src/views/FormOfPayment/index.html';

function requestHtml(url) {
    $.ajax({
        method: 'GET',
        url: url,
        success: function (data) {
            document.getElementById('app').innerHTML = data;
        }
    });
}

function goToFormOfPayment() {
    requestHtml(PATH_FORM_OF_PAYMENT);
    $.getScript('./src/assets/js/FormOfPayment/getAllFormOfPayment.js');
}
const functions = [
    () => {
        goToFormOfPayment();
    },
    () => {
        console.log('termos de pagamento')
    },
    () => {
        console.log('Caixa')
    },
    () => {
        console.log('Adminstrativo')
    },
    () => {
        console.log('informações')
    },
    () => {
        console.log('Configurações')
    },
];

(() => {
    let navItemClass = document.getElementsByClassName('navEvent');
    for (let i = 0; i < navItemClass.length; i++) {
        navItemClass[i].addEventListener('click', () => {
            functions[i]();
        });
    }
})();
