


 // Seleciona o elemento com o ID 'header' e armazena na variável 'header'
const header = document.getElementById('header');

// Seleciona o elemento com o ID 'back_button' e armazena na variável 'togglebutton'
const togglebutton = document.getElementById('back_button');

// Função que será executada toda vez que a página for rolada (scroll)
window.onscroll = () => {
    
    // Verifica se a página foi rolada para baixo (window.scrollY > 0)
    if (window.scrollY > 0) {
        // Adiciona a classe 'headerTop' ao elemento 'header' para aplicar o estilo desejado
        header.classList.add('headerTop');
        
        // Adiciona a classe 'show-button' ao elemento 'togglebutton' para mostrar o botão
        togglebutton.classList.add('show-button');
    } else {
        // Remove a classe 'headerTop' do elemento 'header' se a página voltar ao topo
        header.classList.remove('headerTop');
        
        // Remove a classe 'show-button' do elemento 'togglebutton' para ocultar o botão
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
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  