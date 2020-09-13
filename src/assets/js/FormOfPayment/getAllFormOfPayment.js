
(async () => {
    let result = ipcRenderer.sendSync('GET_ALL_FORM_OF_PAYMENT');
    if (!result.error) {
        const { data } = result;
        const tableBody = document.getElementById('tableBody');
        tableBody.innerHTML = '';
        if (Array.isArray(data)) {
            data.map(formOfPayment => {
                tableBody.innerHTML += `
                    <tr id="${formOfPayment.id}">
                        <td>${formOfPayment.code}</td>
                        <td>${formOfPayment.description}</td>
                        <td>
                            <a href="#" class="link_table"><i class="fas fa-edit"></i></a>
                            <a href="#" class="link_table"><i class="fas fa-trash"></i></a>
                        </td>
                    </tr>
                `;
            });
        }
    }
})();