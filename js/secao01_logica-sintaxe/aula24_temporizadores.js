// TEMPORIZADORES: setTimeout e setInterval

// setTimeout() -> Executa uma vez após o tempo (em milissegundos)
// Quando usar? -> Quando quiser atrasar a execução de uma ação

setTimeout(() => {
    console.log("Executou depois de 2 segundos")
  }, 2000) // 2000ms = 2s
  

// setInterval() -> Executa SEMPRE a cada intervalo
// Quando usar? -> Para repetir uma ação várias vezes até que pare
  
let cont = 0;
  
const intervalo = setInterval(() => {
    cont++;
    console.log("Executando... " + cont)
  
    if (cont === 3) {
      clearInterval(intervalo); // Para o intervalo
      console.log("Parou o intervalo")
    }
}, 1000) // 1000ms = 1s