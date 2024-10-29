

function logout() {
    firebase.auth().signOut().then(() => {
        window.location.href = "index.html";
    }).catch(() => {
        alert('ERRO AO FAZER O LOGOUT');
    })
}

function addaluno(){
    window.location.href = "paghome/cad_aluno.html"
}

firebase.auth().onAuthStateChanged(user =>{
    if(user){
        user.getIdToken().then(token => console.log(token));
        
    }
})