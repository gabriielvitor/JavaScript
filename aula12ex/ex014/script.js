function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var sad = window.document.getElementById('educ')
    var data = new Date()
    var hora = data.getHours()
    

    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'imagens/manha.png'
        document.body.style.background = '#AFC0C9'
        sad.innerHTML = 'Bom dia!!'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#724506'
        sad.innerHTML = 'Boa tarde!!'
    } else {
        //BOA NOITE
        img.src = 'imagens/noite.png'
        document.body.style.background = '#071738'
        sad.innerHTML = 'Boa noite!!'
    }
}