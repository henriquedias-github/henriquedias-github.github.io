
// Função que será chamada no evento 'Load'
function verificarLocalStorageComJSON() {
      // Obtemos as chaves do LocalStorage
      const chavesLocalStorage = Object.keys(localStorage);
    
      // Faz a requisição para o arquivo JSON
      fetch('assets/js/data/database.json')
        .then(response => response.json())
        .then(tortas => {
          // Filtra as tortas do JSON que possuem id correspondente no localStorage
          const tortasFiltradas = tortas.filter(torta => chavesLocalStorage.includes(torta.id));
    
          // Chama a função para gerar os cards apenas das tortas filtradas
          carregarTortasFiltradas(tortasFiltradas);
        });
    }
    
    // Função que carrega os cards das tortas filtradas
    function carregarTortasFiltradas(tortas) {
      const principal = document.querySelector("#global-container");
    
      // Limpa o conteúdo existente para não duplicar os cards
      principal.innerHTML = '';
    
      // Mapeia e cria os elementos HTML com base nas tortas filtradas
      tortas.map(torta => {
        const modeloTitulo = document.createElement("div");
        modeloTitulo.className = "maincontent-torta";
    
        const SubmodeloTitulo = document.createElement("div");
        SubmodeloTitulo.className = "content-name-torta";
        modeloTitulo.appendChild(SubmodeloTitulo);
        
        const modelo = document.createElement("p");
        modelo.className = "model";
        modelo.textContent = torta.modelo;
    
        const sabor = document.createElement("p");
        sabor.className = "title-name-torta";
        sabor.textContent = torta.sabor;
    
        SubmodeloTitulo.appendChild(modelo);
        SubmodeloTitulo.appendChild(sabor);
    
        const contentImg = document.createElement("div");
        contentImg.className = "content-image-val";
    
        const imagem = document.createElement("img");
        imagem.className = "img-torta";
        imagem.src = torta.imagem;
    
        contentImg.appendChild(imagem);
        modeloTitulo.appendChild(contentImg);
    
        const kilomoney = document.createElement("div");
        kilomoney.className = "kilomoney.torta-n3";
        contentImg.appendChild(kilomoney);
    
        const pesoTorta = document.createElement("div");
        pesoTorta.className = "peso-torta";
        kilomoney.appendChild(pesoTorta);
    
        const kilopt = document.createElement("ul");
        pesoTorta.appendChild(kilopt);
    
        const kiloTorta = document.createElement("li");
        kiloTorta.className = "kilo-torta";
        kiloTorta.textContent = torta.peso;
    
        const serve = document.createElement("li");
        serve.className = "pessoas-torta";
        serve.textContent = torta.pessoas;
    
        kilopt.appendChild(kiloTorta);
        kilopt.appendChild(serve);
    
        const contentMoneyTorta = document.createElement("div");
        contentMoneyTorta.className = "content-money-torta";
        kilomoney.appendChild(contentMoneyTorta);
    
        const valPessoasTortas = document.createElement("ul");
        valPessoasTortas.className = "val-pessoas-torta";
        contentMoneyTorta.appendChild(valPessoasTortas);
    
        const livaltort = document.createElement("li");
        valPessoasTortas.appendChild(livaltort);
    
        const valLiquidaTorta = document.createElement("p");
        valLiquidaTorta.className = "val-liquida-torta";
        valLiquidaTorta.textContent = torta.liquida;
        livaltort.appendChild(valLiquidaTorta);
    
        const valMt = document.createElement("li");
        valPessoasTortas.appendChild(valMt);
    
        const valMoneyTorta = document.createElement("p");
        valMoneyTorta.className = "val-money-torta";
        valMoneyTorta.textContent = torta.preco;
        valMt.appendChild(valMoneyTorta);
    
        principal.appendChild(modeloTitulo);
      });
    }
    
    // Chame essa função no evento 'Load' da página
    window.addEventListener("load", verificarLocalStorageComJSON);
    














// window.onload = function() {
//       // Captura o número total de chaves no localStorage
//       var totalChaves = localStorage.length;
  
//       // Cria um array para armazenar os valores das variáveis
//       var variaveis = [];
  
//       // Itera por cada chave no localStorage
//       for (var i = 0; i < totalChaves; i++) {
//           // Captura a chave no índice atual
//           var chave = localStorage.key(i);
          
//           // Armazena o valor da chave em uma variável dinamicamente
//           window['variavel_' + i] = localStorage.getItem(chave);
          
//           // Adiciona ao array o nome da variável e o valor correspondente
//           variaveis.push('variavel_' + i + ': ' + window['variavel_' + i]);
          
//           // Exibe no console a chave e o valor correspondente
//           console.log("Chave: " + chave + " | Valor: " + window['variavel_' + i]);
//       }
  
//       // Exibe todas as variáveis geradas no console
//       // console.log("Todas as variáveis geradas:", variaveis.join(", "));
  
//   };
  





// carregar()


// function carregar() {

//   fetch('assets/js/data/database.json') // Pesquisa o arquivo JSON na sua pasta
//     .then(response => response.json()) // Se haver resposta, ele converte o arquivo JSON e JSON para o JS lê.
//       .then(tortas => { // tortas é uma variável que terá a propriedade de pegar com ela, valores dos elemntos no JSON.

                        
//                            const principal = document.querySelector("#global-container");  
                           
                        
//             tortas.map(torta => {


//                   //if

                                    
//             const modeloTitulo = document.createElement("div");
//             modeloTitulo.className = "maincontent-torta";

//                   const SubmodeloTitulo = document.createElement("div");
//                   SubmodeloTitulo.className = "content-name-torta";

//                   modeloTitulo.appendChild(SubmodeloTitulo);
                  
//                         const modelo = document.createElement("p");
//                         modelo.className = "model";
//                         modelo.textContent = torta.modelo

//                         const sabor = document.createElement("p");
//                         sabor.className = "title-name-torta";
//                         sabor.textContent = torta.sabor

//                               SubmodeloTitulo.appendChild(modelo);
//                               SubmodeloTitulo.appendChild(sabor);

//                         const contentImg = document.createElement("div");
//                         contentImg.className = "content-image-val";

//                         const imagem = document.createElement("img");
//                         imagem.className = "img-torta";
//                         imagem.src = torta.imagem

//                               contentImg.appendChild(imagem)
//                               modeloTitulo.appendChild(contentImg);

//                         const kilomoney = document.createElement("div");
//                         kilomoney.className = "kilomoney.torta-n3";

//                               contentImg.appendChild(kilomoney);

//                         const pesoTorta = document.createElement("div");
//                         pesoTorta.className = "peso-torta";

//                               kilomoney.appendChild(pesoTorta);

//                         const kilopt = document.createElement("ul");

//                               pesoTorta.appendChild(kilopt);

//                         const kiloTorta = document.createElement("li");
//                         kiloTorta.className = "kilo-torta";
//                         kiloTorta.textContent = torta.peso


//                         const serve = document.createElement("li");
//                         serve.className = "pessoas-torta";
//                         serve.textContent = torta.pessoas

//                               kilopt.appendChild(kiloTorta);
//                               kilopt.appendChild(serve);

//                         const contentMoneyTorta = document.createElement("div");
//                         contentMoneyTorta.className = "content-money-torta";

//                               kilomoney.appendChild(contentMoneyTorta);

//                         const valPessoasTortas = document.createElement("ul");
//                         valPessoasTortas.className = "val-pessoas-torta";

//                               contentMoneyTorta.appendChild(valPessoasTortas);

//                         const livaltort = document.createElement("li");

//                               valPessoasTortas.appendChild(livaltort);

//                         const valLiquidaTorta = document.createElement("p");
//                         valLiquidaTorta.className = "val-liquida-torta";
//                         valLiquidaTorta.textContent = torta.liquida

//                               livaltort.appendChild(valLiquidaTorta);

//                         const valMt = document.createElement("li");

//                               valPessoasTortas.appendChild(valMt);

//                         const valMoneyTorta = document.createElement("p");
//                         valMoneyTorta.className = "val-money-torta";
//                         valMoneyTorta.textContent = torta.preco

//                               valMt.appendChild(valMoneyTorta);






                  
//             principal.appendChild(modeloTitulo);
                  

//             })
//       })
// }





//==================================================================================================================
const header = document.getElementById('header');
const togglebutton = document.getElementById('back_button');
const removeAnimate = document.getElementById('cestinha');


window.onscroll = () => {  
    
    if (window.scrollY > 0) {
       
        header.classList.add('headerTop');
        togglebutton.classList.add('show-button');
        removeAnimate.classList.remove('animate__shakeX');

    } else {
        
        header.classList.remove('headerTop');
        togglebutton.classList.remove('show-button');
    }
}
//==================================================================================================================







//==================================================================================================================
const menu = document.getElementById('menuBtn'); // mt = menu transform
const sidebar = document.getElementById('menu_mobile'); // sidebar = menu lateral
const overlay = document.getElementById('overlay'); // 

  menu.onclick = ()=>{
  overlay.classList.toggle('overlay');
  menu.classList.toggle('active_x');
  sidebar.classList.toggle('show-sidebar');
  togglebutton.classList.remove('show-button')
  };

  overlay.onclick = ()=>{
  overlay.classList.remove('overlay');
  menu.classList.remove('active_x');
  sidebar.classList.remove('show-sidebar');
  };
//==================================================================================================================
















