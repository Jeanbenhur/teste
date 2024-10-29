

function saveTransaction() {
    showLoading();
    const dados = createTransaction();

    firebase.firestore()
    .collection('dadosdoaluno')
    .add(dados)
    .then(() => {
        hideLoading();
        window.location.href = "/ambiente.html";
    })
    .catch((error) => {
        hideLoading();
        console.error('erro ao salvar ',error);
        alert('erro ao salvar');
    })
}

function createTransaction(){
    return{
        nomedoaluno: form.nomedoaluno().value,
        datadenascimento: form.datadenascimento().value,
        Naturalidade: form.Naturalidade().value,
        cpf: form.cpf().value,
        rg: form.rg().value,
        nomedopai: form.nomedopai().value,
        cpfpai: form.cpfpai().value,
        nomemae: form.nomemae().value,
        cpfmae: form.cpfmae().value,
        endereco: form.endereco().value,
        numerotelefone: form.numerotelefone().value,
        tiposanguineo: form.tiposanguineo().value,
        alergia: form.alergia().value,
        numerodamatricula: form.numerodamatricula().value,
        cid: form.cid().value,
        user: {
            uid: firebase.auth().currentUser.uid ? firebase.auth().currentUser.uid : null
        }       
    };
}

const form = {

nomedoaluno: () => document.getElementById('nomedoaluno'),
datadenascimento: () => document.getElementById('date'),
Naturalidade: () => document.getElementById('Naturalidade'),
cpf: () => document.getElementById('cpf'),
rg: () => document.getElementById('rg'),
nomedopai: () => document.getElementById('nomedopai'),
cpfpai: () => document.getElementById('cpfpai'),
nomemae: () => document.getElementById('nomemae'),
cpfmae: () => document.getElementById('cpfmae'),
endereco: () => document.getElementById('endereco'),
numerotelefone: () => document.getElementById('num_telefone'),
tiposanguineo: () => document.getElementById('bloodtype'),
alergia: () => document.getElementById('alergia'),
numerodamatricula: () => document.getElementById('num_matricula'),
cid: () => document.getElementById('cid'),
saveButton: ()=> document.getElementById('saveButton'),
}