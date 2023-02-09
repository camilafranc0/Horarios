function carregar(){
    let msg = document.querySelector('#msg')
    let img = document.querySelector('#img')
    let data = new Date()
    let horas = data.getHours()
    
      

    msg.innerHTML = `Agora são ${horas} horas.`

    if(horas > 0 && horas <= 12){
        img.src = './img/fotomanha.jpg'
        document.body.style.background = '#E9C575'
    }
    else if (horas > 12 && horas < 18){
        img.src = './img/fototarde.jpg'
        document.body.style.background = '#C36B48'
    }
    else{
         img.src = './img/fotonoite.jpg'
         document.body.style.background = '#02030C'
    }    


}