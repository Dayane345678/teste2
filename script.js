// A const precisa ser definida com o ID correto do elemento <audio> no HTML.
// O ID no seu HTML é 'musicaGame', mas no seu JS original era 'msuicadeFundo'. 
// Vou usar 'musicaGame' aqui, assumindo que você corrigiu o HTML.

// 1. Definições de Elementos de Áudio
// Certifique-se de que os IDs 'musicaGame' e 'musica2' existam no seu HTML.
const musicaDeFundo = document.getElementById('musicadeFundo');
const musica2 = document.getElementById('musica2'); // Assumindo que você tem um <audio id="musica2">
// const musica7 = document.getElementById('musica7'); // Removido, pois o uso era incerto/não mapeado

let musicaIniciada = false;

// 2. Função principal para Iniciar/Pausar a Música de Fundo
function iniciaMusica() {
    // 2.1 Lógica de PAUSE (quando a música já está tocando)
    if (musicaIniciada) {
        musicaDeFundo.pause();
        console.log("Música de fundo pausada.");
        musicaIniciada = false;
        
        // Se você queria tocar musica2 aqui, ela também precisa ser corrigida (ver abaixo)
        
    // 2.2 Lógica de PLAY (quando a música está pausada/parada)
    } else {
        musicaDeFundo.volume = 0.5; // Configura o volume

        // O método .play() retorna uma Promise, que deve ser tratada corretamente.
        const promise = musicaDeFundo.play();

        if (promise !== undefined) {
            promise.then(() => { // Corrigido: 'promise.then(() => {' e removido o ')' extra
                musicaIniciada = true;
                console.log('Música de fundo iniciada.');
            }).catch(error => { // Corrigido: 'error =>'
                console.log('A reprodução automática foi impedida: ', error);
                // Você pode adicionar um alerta para o usuário clicar em algo se isso acontecer
            });
        }
    }
}

// 3. Evento de Teclado (Barra de Espaço)
document.addEventListener('keydown', (event) => {
    if (event.key === ' ') { // Corrigido: operador de comparação '==='
        event.preventDefault(); // Impede que a barra de espaço role a página
        iniciaMusica();
    }
});

// 4. Lógica de Áudio com Timeout
setTimeout(() => {
    // É uma boa prática verificar se o elemento existe antes de tentar manipulá-lo
    if (musica2) {
        musica2.volume = 0.5;
        // O método .play() deve ser tratado com Promise também, se possível.
        const promise2 = musica2.play();

        if (promise2 !== undefined) {
            promise2.then(() => {
                console.log("Música 2 executada após 5 segundos!");
            }).catch(error => {
                 console.log('A reprodução da Música 2 foi impedida: ', error);
            });
        } else {
            console.log("Tentando tocar Música 2...");
        }
    } else {
        console.log("Erro: O elemento de áudio 'musica2' não foi encontrado no HTML.");
    }
}, 5000);
