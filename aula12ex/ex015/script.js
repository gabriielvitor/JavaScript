function verificar() {
    var data = new Date() //Data atual
    var ano = data.getFullYear() //Pegar ano atual
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        //IDADE HOMEM
        if (fsex[0].checked) {
            genero = 'Homem'

            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src','imagens/foto-bebe-m.jpg')
            } else if (idade >= 10 && idade < 20) {
                //JOVEM
                img.setAttribute('src', 'imagens/foto-jovem-m.jpg')
            } else if (idade >= 20 && idade < 50) {
                //ADULTO
                img.setAttribute('src', 'imagens/foto-adulto-m.jpg')
            } else {
                //IDOSO
                img.setAttribute('src', 'imagens/foto-idoso-m.jpg')
            }

            //IDADE MULHER
        } else if (fsex[1].checked) {
            genero = 'Mulher'

            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', 'imagens/foto-bebe-f.jpg')
            } else if (idade >= 10 && idade < 20) {
                //JOVEM
                img.setAttribute('src', 'imagens/foto-jovem-f.jpg')
            } else if (idade >= 20 && idade < 50) {
                //ADULTO
                img.setAttribute('src', 'imagens/foto-adulto-f.jpg')
            } else {
                //IDOSO
                img.setAttribute('src', 'imagens/foto-idoso-f.jpg')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}