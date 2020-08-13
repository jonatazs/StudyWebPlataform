//procurar o botão
document.querySelector("#add-time")
    //quando clicar no botao
    .addEventListener("click", cloneField)


//executar ação
function cloneField() {
    //duplicate fields
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)
        //limpar os campos

    //para cada campo limpar
    const fields = newFieldContainer.querySelectorAll("input")
    fields.forEach(function(field) {
        //pegar o field atual e limpa
        field.value = ""
    })



    //colocar na pagina, onde?
    document.querySelector("#schedule-items").appendChild(newFieldContainer)

}