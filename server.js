const soap = require('soap');
const urlRequest = 'https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl';

soap.createClient(urlRequest, (error, client) => {
    if (error) {
        console.log(error)
    } else {
        client.consultaCEP({
            cep: '58704260'
        }, (error, response) => {
            console.log(response)
        })
    }
})