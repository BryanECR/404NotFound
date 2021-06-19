timeout()
function timeout(){
    setTimeout(function(){
        cambioDeImagen();
        timeout();
    }, 1000)
}

function cambioDeImagen(){
    var image = document.getElementById('Bobesponja');
        if(image.src.match("img/imagen1")){
            image.src = "img/imagen.png";
        }else{
            image.src = "img/imagen1.png";
        }
}