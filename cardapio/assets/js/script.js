


// const content_absolute = document.getElementById('content_absolute');
// window.addEventListener('scroll', function() {
//   if (window.scrollY > 20) { // Se rolou mais que 62px
//     content_absolute.classList.add('content-absolute');
//   } else {
//     content_absolute.classList.remove('content-absolute')
//   }
// });





const header = document.getElementById('header');
const togglebutton = document.getElementById('back_button');


window.onscroll = () => {
    
    if (window.scrollY > 0) {
       
        header.classList.add('headerTop');
        togglebutton.classList.add('show-button');

    } else {
        
        header.classList.remove('headerTop');
        togglebutton.classList.remove('show-button');
    }
}





const menu = document.getElementById('menuBtn'); // mt = menu transform
const sidebar = document.getElementById('menu_mobile'); // sidebar = menu lateral
const overlay = document.getElementById('overlay'); // 

  menu.onclick = ()=>{
  overlay.classList.toggle('overlay');
  menu.classList.toggle('active_x');
  sidebar.classList.toggle('show-sidebar');
  };

  overlay.onclick = ()=>{
  overlay.classList.remove('overlay');
  menu.classList.remove('active_x');
  sidebar.classList.remove('show-sidebar');
  };




// Função para manipular alertas e redirecionamento
function manipularAlerta(condicao, botaoId, iconeFecharId, alertaId, link) {
    const botao = document.getElementById(botaoId);
    const iconeFechar = document.getElementById(iconeFecharId);
    const alerta = document.getElementById(alertaId);

    botao.addEventListener('click', function(evento) {
        if (condicao === 1) {
            window.location.href = link;
        } else {
            evento.preventDefault(); 
            alerta.classList.add('show-button-plus');
            iconeFechar.classList.add('show-close-icon');
        }
    });

    iconeFechar.onclick = () => {
        iconeFechar.classList.remove('show-close-icon');
        alerta.classList.remove('show-button-plus');
    };
}

// Configuração dos botões com suas condições e links específicos
const condicaoMorango = 1;
const condicaoChocolate = 1;
const condicaoChocolateBranco = 1;
const condicaoBemCasado = 0;
const condicaoPrestigio = 1;
const condicaoDoceDeLeite = 0;
const condicaoMaracuja = 0;
const condicaoLimao = 1;

manipularAlerta(condicaoMorango, 'btn_ver_mais', 'close_icon', 'main_alert_exclamation', '/cardapio/'); // Link1 'http://meulink/'
manipularAlerta(condicaoChocolate, 'btn_ver_mais2', 'close_icon2', 'main_alert_exclamation2', '/cardapio/'); // Link2 'http://meulink/'
manipularAlerta(condicaoChocolateBranco, 'btn_ver_mais3', 'close_icon3', 'main_alert_exclamation3', '/cardapio/'); // Link3 'http://meulink/'
manipularAlerta(condicaoBemCasado, 'btn_ver_mais4', 'close_icon4', 'main_alert_exclamation4', '/cardapio/'); // Link4 'http://meulink/'
manipularAlerta(condicaoPrestigio, 'btn_ver_mais5', 'close_icon5', 'main_alert_exclamation5', '/cardapio/'); // Link5 'http://meulink/'
manipularAlerta(condicaoDoceDeLeite, 'btn_ver_mais6', 'close_icon6', 'main_alert_exclamation6', '/cardapio/'); // Link6 'http://meulink/'
manipularAlerta(condicaoMaracuja, 'btn_ver_mais7', 'close_icon7', 'main_alert_exclamation7', '/cardapio/'); // Link7 'http://meulink/'
manipularAlerta(condicaoLimao, 'btn_ver_mais8', 'close_icon8', 'main_alert_exclamation8', '/cardapio/'); // Link8 'http://meulink/'



  
//   --------------------------------------------------------------------------------------
//   function ativarElemento(elementoAtivo) {
//     const todosElementos = [trad, art, male, female, sale, resale, cake];

//     // Remove a classe 'active-yellow' de todos os elementos e adiciona 'active-white'
//     todosElementos.forEach(elemento => {
//         elemento.classList.remove('active-yellow');
//         elemento.classList.add('active-white');
//     });

//     // Adiciona a classe 'active-yellow' apenas ao elemento clicado
//     elementoAtivo.classList.add('active-yellow');
// }

//         trad.onclick = () => ativarElemento(trad);
//         art.onclick = () => ativarElemento(art);
//         male.onclick = () => ativarElemento(male);
//         female.onclick = () => ativarElemento(female);
//         sale.onclick = () => ativarElemento(sale);
//         resale.onclick = () => ativarElemento(resale);
//         cake.onclick = () => ativarElemento(cake);
        
//   --------------------------------------------------------------------------------------



function ativarElemento(elementoAtivo) {
  const todosElementos = [trad, art, male, female, sale, resale, cake];

  // Remove a classe 'active-yellow' de todos os elementos e adiciona 'active-white'
  todosElementos.forEach(elemento => {
      elemento.classList.remove('active-yellow');
      elemento.classList.add('active-white');
  });

  // Adiciona a classe 'active-yellow' apenas ao elemento clicado
  elementoAtivo.classList.add('active-yellow');

  // Espaço para adicionar/remover classe em outro elemento específico
  const outroElemento = document.getElementById('idElemento'); // Substitua 'idElemento' pelo ID do elemento que deseja modificar
  if (outroElemento) {
      // Exemplo de adicionar uma classe
      outroElemento.classList.add('minha-classe'); // Substitua 'minha-classe' pelo nome da classe que deseja adicionar

      // Exemplo de remover uma classe
      // outroElemento.classList.remove('minha-classe'); // Substitua 'minha-classe' pelo nome da classe que deseja remover
  }
}

// Associa a função ativarElemento a todos os botões
trad.onclick = () => ativarElemento(trad);
art.onclick = () => ativarElemento(art);
male.onclick = () => ativarElemento(male);
female.onclick = () => ativarElemento(female);
sale.onclick = () => ativarElemento(sale);
resale.onclick = () => ativarElemento(resale);
cake.onclick = () => ativarElemento(cake);








// ScrollReveal().reveal('#morango',{
// origin: 'left',
// duration: 2000,
// distance: '25%',
// })

// ScrollReveal().reveal('#chocolate',{
// origin: 'right',
// duration: 2000,
// distance: '25%',
// })

// ScrollReveal().reveal('#chocolate_branco',{
// origin: 'left',
// duration: 2000,
// distance: '25%',
// })

// ScrollReveal().reveal('#bem_casado',{
// origin: 'right',
// duration: 2000,
// distance: '25%',
// })

// ScrollReveal().reveal('#prestigio',{
// origin: 'left',
// duration: 2000,
// distance: '25%',
// })

// ScrollReveal().reveal('#doce_de_leite',{
// origin: 'right',
// duration: 2000,
// distance: '25%',
// })
  
// ScrollReveal().reveal('#maracuja',{
// origin: 'left',
// duration: 2000,
// distance: '25%',
// })  

// ScrollReveal().reveal('#limao',{
// origin: 'right',
// duration: 2000,
// distance: '25%',
// }) 
  
  
  //   ScrollReveal().reveal('#cta',{
  // origin: 'left',
  // duration: 2000,
  // distance: '25%',
  // })
  
  // ScrollReveal().reveal('#banner-image',{
  // origin: 'bottom',
  // duration: 2000,
  // distance: '25%',
  // })
  
  // ScrollReveal().reveal('#banner_image_responsive',{
  // origin: 'right',
  // duration: 2000,
  // distance: '25%',
  // })
  
  // ScrollReveal().reveal('#cta_buttons',{
  // origin: 'right',
  // duration: 2000,
  // distance: '30%',
  // })
  
  // ScrollReveal().reveal('.social-media-buttons',{
  // origin: 'left',
  // duration: 2000,
  // distance: '30%',
  // })
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  