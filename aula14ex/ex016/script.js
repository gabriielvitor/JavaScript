function contar() {
    var ini = window.document.getElementById('txti')
    var fim = window.document.getElementById('txtf')
    var passo = window.document.getElementById('txtp')
    let res = window.document.getElementById('res')

    

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert(`[ERRO] Os dados estão incorretos`)
        res.innerHTML = `Imposível contar!`
    } else {
        res.innerHTML = 'Contando: <br> '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        
        if (p <= 0) {
                window.alert(`Passo inválido! Considerando PASSO 1`)
                p = 1
            }

        if (i < f) {
            // Crescernte
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}` 
            }
            res.innerHTML += `\u{1F3C1}`
        } else {
            // Regressiva
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
        }

    }
}