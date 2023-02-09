function carregar(){
    let msg = document.querySelector('#msg')
    let img = document.querySelector('#img')
    let data = new Date()
    let horas = data.getHours()
    

   
    if(horas >= 4 && horas <= 12){
        img.src = './img/fotomanha.jpg'
        document.body.style.background = '#E9C575'
        msg.innerHTML = `Agora são ${horas} horas da manhã.`
    }

    else if (horas >= 0 ){
        img.src = './img/fotomadrugada.jpg'
        document.body.style.background = '#161830'
        msg.innerHTML = `Agora são ${horas} hora da manhã.`

    }

    else if(horas >= 2 && horas < 4 ){
        img.src = './img/fotomadrugada.jpg'
        document.body.style.background = '#161830'
        msg.innerHTML = `Agora são ${horas} horas da manhã.`
    }
    else if (horas > 12 && horas < 18){
        img.src = './img/fototarde.jpg'
        document.body.style.background = '#C36B48'
    }
    else{
         img.src = './img/fotonoite.jpg'
         document.body.style.background = '#040618'
         msg.innerHTML = `Agora são ${horas} horas da noite.`
    }    


}