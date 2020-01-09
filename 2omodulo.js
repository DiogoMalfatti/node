
// 0- obter um usuario
// 1- obter um numero de telefone de um usuario a partir de seu id
// 2- obter o endereço do usuario a partir de seu id

function getUsuario( ) {
    setTimeout(function(){
        return {
            id: 1,
            nome: Diogo,
            dataNascimento: new Date()
        }
    }, 1000)
}

function getTelefone(idUsuario) {

}

function getEndereco(idUsuario) {

}

const usuario = getUsuario();
const telefone = getTelefone(usuario.id);

console.log("usuario", usuario);