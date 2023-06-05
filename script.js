var archivo, video;

function comenzar(){
    archivo = document.getElementById('archivo');
    video = document.getElementById('video');
    addEventListener('change', procesar, false);
}

function procesar(e){
    var miVideo = e.target.files[0];
    var lector = new FileReader(); 
    lector.onprogress=(alert('Cargando vídeo'));
    lector.onloadend = function(e){
        document.getElementById('video').src = e.target.result;
    };
    lector.readAsDataURL(miVideo);
    document.getElementById('contenedorVideo').style.visibility = 'visible';
    document.getElementById('contenedorCarga').style.visibility = 'hidden';
    document.getElementById('titulo').innerHTML= 'Reproductor de vídeo'; 
}