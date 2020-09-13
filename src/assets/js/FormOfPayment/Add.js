

function submitFormOfPayment() {

    let code = document.getElementById('input_code_form_of_Payment').value;
    let description = document.getElementById('input_description_form_of_Payment').value;
    let FormOfPayment = {
        code,
        description
    }
    if(validateFormOfPayment(FormOfPayment)){
        registerFormOfPayment(FormOfPayment);
    } 

    return false;
}


const validateFormOfPayment = (FormOfPayment) => {
    const { code, description } = FormOfPayment;
    const idMessageCode = 'message_code_form_of_payment';
    const idMessageDescription = 'message_description_form_of_payment';
    const idInputCode = 'input_code_form_of_Payment';
    const idInputDescription = 'input_description_form_of_Payment';

    if (!code) {
        paintBorder(idInputCode);
        writeMessage(idMessageCode, 'Código é Obrigatório');
        return false;
    }
    if (code.length < 2 || code.length > 5) {
        paintBorder(idInputCode);
        writeMessage(idMessageCode, 'código deve possuir entre 2 e 5 cartactéres');
        return false;
    }
    clearBorder(idInputCode);
    clearMessage(idMessageCode);

    if (!description) {
        paintBorder(idInputDescription);
        writeMessage(idMessageDescription,'Descrição é Obrigatório' );
        return false;
    }
  
    if (description.length < 3) {
        paintBorder(idInputDescription);
        writeMessage(idMessageDescription,'descrição deve possuir ao menos 3 caractéres!');
        return false;
    }
    clearBorder(idInputDescription);
    clearMessage(idMessageDescription);
    return true;
}
const paintBorder = id => {
    document.getElementById(id).style.border = '1px solid #d9534f';
}
const clearBorder = id => {
    document.getElementById(id).style.border = '1px solid #ccc';
}
const  writeMessage = (id, message) => {
    document.getElementById(id).innerHTML = message;
}
const clearMessage = (id) => {
    document.getElementById(id).innerHTML = '';
}

const registerFormOfPayment = (FormOfPayment) => {
    const ADD_FORM_OF_PAYMENT = 'ADD_FORM_OF_PAYMENT';
    let result = ipcRenderer.sendSync(ADD_FORM_OF_PAYMENT, FormOfPayment);
    if (!result.error) {
        alert('Adicionado com sucesso!')
    } else {
        alert(result.message);
    }
    clearFormOfPayment();
    goToFormOfPayment();
}

const clearFormOfPayment = () => {
    document.getElementById('input_code_form_of_Payment').value = '';
    document.getElementById('input_description_form_of_Payment').value = '';
}