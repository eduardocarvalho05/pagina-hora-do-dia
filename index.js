function carregar() {
    let msg = window.document.getElementById(`msg`)
    let img = window.document.getElementById(`imagem`)
    let data = new Date()
    let hora = data.getHours()
    // let hora = 20
    if (hora > 0 && hora < 12) {
        //Bom dia
        msg.innerHTML = `Bom dia! Agora são ${hora} horas.`
        img.src = `./img/fotomanha.jpeg`
        document.body.style.background = `#e2cd9f`
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde
        msg.innerHTML = `Boa tarde! Agora são ${hora} horas.`
        img.src = `./img/fototarde.jpeg`
        document.body.style.background = `#b9846f`
    } else {
        // Boa noite
        msg.innerHTML = `Boa noite! Agora são ${hora} horas.`
        img.src = `./img/fotonoite.jpeg`
        document.body.style.background = `#515154`
    }
}

















