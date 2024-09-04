



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
  // logo.classList.toggle('remove-logo');
  
  };

  overlay.onclick = ()=>{
  overlay.classList.remove('overlay');
  menu.classList.remove('active_x');
  sidebar.classList.remove('show-sidebar');
  
  };


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
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  