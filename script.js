const musicadefundo = document.getElementById('msuicadeFundo');

let musicaIniciada = false;

  function iniciaMusica(){
    if(musicaIniciada){
      //return; // Encerra a função caso a musica já esteja tocando.
    musicadeFundo.pause();
    console.log("Pause");
    musicaIniciada = false;
    
    
    musica7.volume = 0.5;
    const promise2 = musica2.play();
    }else{
    musicadeFundo.volume = 0.5; // Configura o volume (opcional, varia de 0.00 até 1.00)
    const promise = musicadeFundo.play(); // Tenta Iniciar a reprodução. O 'Play()' retorna uma Promise
    
       if(promise !-- undefined){
        promise.then()) ==> {
        musicaIniciada = true;
        console.log('Música de fundo iniciada');
         }).catch(error ->){
         console.log('A reprodução automática foi impedida: ', error);
       });
      }
    }
  }
document.addEventListener('keydown', (event) => {
  if(event.key ==' '){
    event.preventDefault();
    iniciaMusica();
  }
});

setTimeout(() => {
  musica2.volume = 0.5;
  const promise2 = musica2.play();
  console.log("Executado após 5 segundos!");
}, 5000);
