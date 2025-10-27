const musicadeFundo = document.getElementById('musicadeFundo');
let musicaIniciada = false;


function iniciaMusica(){
  if(musicaIniciada){
    //return; // encerra a função caso a musica ja esteja tocando 
    musicaFundo.pause();
    console.log('pause');
    musicaIniciada = false
      }else{
      musicadeFundo.volume = 0.5; // configura o volume varia de  0 a 1 
      const promise = musicadeFundo.play(); // tenta iniciar a reprodução. o play () retorna uma promise
        if(promise !== undefined){
         promise.then(() => {
         musicaIniciada = true;
        console.log('música de fundo iniciada.');
        }).catch(error => {
         console.log'A reprodução automática foi impedida:',error);
        });
        }
      }
}

document.addEventListener('keydown', (event) => {
  if (event.key == ' '){
    event.preventDefault();
    iniciaMusica();
  }
}); 

