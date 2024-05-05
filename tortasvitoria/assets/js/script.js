


const header = document.getElementById('header');
window.onscroll = ()=>{
if(window.scrollY > 0){
  header.classList.add('headerTop');
}
else{
  header.classList.remove('headerTop');
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
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  