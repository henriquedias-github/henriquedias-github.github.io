



carregar()


function carregar() {

  fetch('assets/js/data/database.json') // Pesquisa o arquivo JSON na sua pasta
    .then(response => response.json()) // Se haver resposta, ele converte o arquivo JSON e JSON para o JS lê.
      .then(tortas => { // tortas é uma variável que terá a propriedade de pegar com ela, valores dos elemntos no JSON.

                        
                           const principal = document.querySelector("#global-container");  
                           
                        
            tortas.map(torta => {

                                    
            const modeloTitulo = document.createElement("div");
            modeloTitulo.className = "maincontent-torta";

                  const SubmodeloTitulo = document.createElement("div");
                  SubmodeloTitulo.className = "content-name-torta";

                  modeloTitulo.appendChild(SubmodeloTitulo);
                  
                        const modelo = document.createElement("p");
                        modelo.className = "model";
                        modelo.textContent = torta.modelo

                        const sabor = document.createElement("p");
                        sabor.className = "title-name-torta";
                        sabor.textContent = torta.sabor

                              SubmodeloTitulo.appendChild(modelo);
                              SubmodeloTitulo.appendChild(sabor);

                        const contentImg = document.createElement("div");
                        contentImg.className = "content-image-val";

                        const imagem = document.createElement("img");
                        imagem.className = "img-torta";
                        imagem.src = torta.imagem

                              contentImg.appendChild(imagem)
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
                        kiloTorta.textContent = torta.peso


                        const serve = document.createElement("li");
                        serve.className = "pessoas-torta";
                        serve.textContent = torta.pessoas

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
                        valLiquidaTorta.textContent = torta.liquida

                              livaltort.appendChild(valLiquidaTorta);

                        const valMt = document.createElement("li");

                              valPessoasTortas.appendChild(valMt);

                        const valMoneyTorta = document.createElement("p");
                        valMoneyTorta.className = "val-money-torta";
                        valMoneyTorta.textContent = torta.preco

                              valMt.appendChild(valMoneyTorta);






                  
            principal.appendChild(modeloTitulo);
                  

            })
      })
}





































// carregar()
// function carregar() {

//   fetch('assets/js/data/database.json') // Pesquisa o arquivo JSON na sua pasta
//     .then(response => response.json()) // Se haver resposta, ele converte o arquivo JSON e JSON para o JS lê.
//       .then(tortas => { // tortas é uma variável que terá a propriedade de pegar com ela, valores dos elemntos no JSON.

//                         // Acessando a div principal
//                            const principal = document.getElementById("container");                         
//             tortas.map(torta => {

//                                     // Criando a div "content-name-torta"
//                                     const contentNameTorta = document.createElement("div");
//                                     contentNameTorta.className = "content-name-torta";

//                                     // Criando os parágrafos "model" e "title-name-torta"
//                                     const modelP = document.createElement("p");
//                                     modelP.className = "model";
//                                     modelP.textContent = torta.modelo

//                                     const titleNameTortaP = document.createElement("p");
//                                     titleNameTortaP.className = "title-name-torta";
//                                     titleNameTortaP.textContent = torta.sabor

//                                     // Adicionando os parágrafos à div "content-name-torta"
//                                     contentNameTorta.appendChild(modelP);
//                                     contentNameTorta.appendChild(titleNameTortaP);

//                                     // Criando a div "content-image-val"
//                                     const contentImageVal = document.createElement("div");
//                                     contentImageVal.className = "content-image-val";

//                                     // Criando a tag de imagem
//                                     const imgTorta = document.createElement("img");
//                                     imgTorta.src = torta.imagem; // Aqui você pode ajustar o caminho dinâmico se necessário
//                                     imgTorta.className = "img-torta";

//                                     // Criando a div "kilomoney.torta-n3"
//                                     const kilomoneyTortaN3 = document.createElement("div");
//                                     kilomoneyTortaN3.className = "kilomoney.torta-n3";

//                                     // Criando a div "peso-torta"
//                                     const pesoTorta = document.createElement("div");
//                                     pesoTorta.className = "peso-torta";

//                                     // Criando a lista "kilo-pessoas-torta"
//                                     const kiloPessoasTorta = document.createElement("ul");
//                                     kiloPessoasTorta.className = "kilo-pessoas-torta";

//                                     // Criando os itens de lista dentro de "kilo-pessoas-torta"
//                                     const liKiloTorta = document.createElement("li");
//                                     const kiloTortaP = document.createElement("p");
//                                     kiloTortaP.className = "kilo-torta";
//                                     kiloTortaP.textContent = torta.peso;

//                                     liKiloTorta.appendChild(kiloTortaP);

//                                     const liPessoasTorta = document.createElement("li");
//                                     const pessoasTortaP = document.createElement("p");
//                                     pessoasTortaP.className = "pessoas-torta";
//                                     pessoasTortaP.textContent = torta.pessoas

//                                     liPessoasTorta.appendChild(pessoasTortaP);

//                                     // Adicionando os itens à lista "kilo-pessoas-torta"
//                                     kiloPessoasTorta.appendChild(liKiloTorta);
//                                     kiloPessoasTorta.appendChild(liPessoasTorta);

//                                     // Adicionando a lista "kilo-pessoas-torta" à div "peso-torta"
//                                     pesoTorta.appendChild(kiloPessoasTorta);

//                                     // Criando a div "content-money-torta"
//                                     const contentMoneyTorta = document.createElement("div");
//                                     contentMoneyTorta.className = "content-money-torta";

//                                     // Criando a lista "val-pessoas-torta"
//                                     const valPessoasTorta = document.createElement("ul");
//                                     valPessoasTorta.className = "val-pessoas-torta";

//                                     // Criando os itens de lista dentro de "val-pessoas-torta"
//                                     const liValLiquidaTorta = document.createElement("li");
//                                     const valLiquidaTortaP = document.createElement("p");
//                                     valLiquidaTortaP.className = "val-liquida-torta";
//                                     valLiquidaTortaP.textContent = torta.liquida
//                                     liValLiquidaTorta.appendChild(valLiquidaTortaP);


//                                     const liValMoneyTorta = document.createElement("li");
//                                     const valMoneyTortaP = document.createElement("p");
//                                     valMoneyTortaP.className = "val-money-torta";
//                                     valMoneyTortaP.textContent = torta.preco
//                                     liValMoneyTorta.appendChild(valMoneyTortaP);

//                                     // Adicionando os itens à lista "val-pessoas-torta"
//                                     valPessoasTorta.appendChild(liValLiquidaTorta);
//                                     valPessoasTorta.appendChild(liValMoneyTorta);

//                                     // Adicionando a lista "val-pessoas-torta" à div "content-money-torta"
//                                     contentMoneyTorta.appendChild(valPessoasTorta);

//                                     // Adicionando as divs "peso-torta" e "content-money-torta" à div "kilomoney.torta-n3"
//                                     kilomoneyTortaN3.appendChild(pesoTorta);
//                                     kilomoneyTortaN3.appendChild(contentMoneyTorta);

//                                     // Adicionando a imagem e a div "kilomoney.torta-n3" à div "content-image-val"
//                                     contentImageVal.appendChild(imgTorta);
//                                     contentImageVal.appendChild(kilomoneyTortaN3);

//                                     // Finalmente, adicionando todas as divs ao container principal
//                                     principal.appendChild(contentNameTorta);
//                                     principal.appendChild(contentImageVal);




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
















