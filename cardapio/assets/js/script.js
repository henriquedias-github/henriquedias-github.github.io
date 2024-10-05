
// Função para reaplicar a classe 'fixed' à div com classe 'car'
function fixarCar() {
    const carElement = document.getElementById('car');

    // Verifica se a classe .car tem a propriedade position: fixed
    if (window.getComputedStyle(carElement).position !== 'fixed') {
        // Reaplica a propriedade position: fixed com left e top corretos
        carElement.style.position = 'fixed';
        carElement.style.top = '90%'; // Mantém o valor top conforme especificado
        carElement.style.left = '85.2%'; // Mantém o valor left conforme especificado
        carElement.style.zIndex = '999'; // Garante que a div fique acima dos outros elementos
    }
}

// Evento para monitorar o scroll e manter a div fixa
window.addEventListener('scroll', function() {
    fixarCar(); // Chamando a função para garantir o fixed durante o scroll
});





// Função para verificar se o elemento está visível na tela
function elementoVisivel(elem) {
    const posicao = elem.getBoundingClientRect();
    return posicao.top >= 0 && posicao.bottom <= (window.innerHeight || document.documentElement.clientHeight);
}

// Função para adicionar a classe 'animado' aos botões quando visíveis
window.addEventListener('scroll', function() {
    const botoes = document.querySelectorAll('.btn-pedido'); // Seleciona todos os elementos com a classe 'btn_pedido'

    botoes.forEach(function(botao) {
        if (elementoVisivel(botao)) {
            botao.classList.add('animate__bounce'); // Adiciona a animação quando o botão estiver visível
        }
    });
});




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
  togglebutton.classList.remove('show-button')
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
            alerta.classList.toggle('show-button-plus');
            iconeFechar.classList.toggle('show-close-icon');
        }
    });

    iconeFechar.onclick = () => {
        iconeFechar.classList.remove('show-close-icon');
        alerta.classList.remove('show-button-plus');
    };
}

// Configuração dos botões com suas condições e links específicos
const condicaoMorango = 0;
const condicaoChocolate = 0;
const condicaoChocolateBranco = 0;
const condicaoBemCasado = 0;
const condicaoPrestigio = 0;
const condicaoDoceDeLeite = 0;
const condicaoMaracuja = 0;
const condicaoLimao = 0;

manipularAlerta(condicaoMorango, 'btn_ver_mais', 'close_icon', 'main_alert_exclamation', '/cardapio/'); // Link1 'http://meulink/'
manipularAlerta(condicaoChocolate, 'btn_ver_mais2', 'close_icon2', 'main_alert_exclamation2', '/cardapio/'); // Link2 'http://meulink/'
manipularAlerta(condicaoChocolateBranco, 'btn_ver_mais3', 'close_icon3', 'main_alert_exclamation3', '/cardapio/'); // Link3 'http://meulink/'
manipularAlerta(condicaoBemCasado, 'btn_ver_mais4', 'close_icon4', 'main_alert_exclamation4', '/cardapio/'); // Link4 'http://meulink/'
manipularAlerta(condicaoPrestigio, 'btn_ver_mais5', 'close_icon5', 'main_alert_exclamation5', '/cardapio/'); // Link5 'http://meulink/'
manipularAlerta(condicaoDoceDeLeite, 'btn_ver_mais6', 'close_icon6', 'main_alert_exclamation6', '/cardapio/'); // Link6 'http://meulink/'
manipularAlerta(condicaoMaracuja, 'btn_ver_mais7', 'close_icon7', 'main_alert_exclamation7', '/cardapio/'); // Link7 'http://meulink/'
manipularAlerta(condicaoLimao, 'btn_ver_mais8', 'close_icon8', 'main_alert_exclamation8', '/cardapio/'); // Link8 'http://meulink/'



  



//================================================================================================================================
    // MENU SCROLL HORIZONTAL - uptodate 1.0.0.0

function ativarElemento(elementoAtivo) {
    const todosElementos = [todas, trad, art, male, female, inf, sale, resale, cake];
  
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
  todas.onclick = () => ativarElemento(todas);
  trad.onclick = () => ativarElemento(trad);
  art.onclick = () => ativarElemento(art);
  male.onclick = () => ativarElemento(male);
  female.onclick = () => ativarElemento(female);
  inf.onclick = () => ativarElemento(inf);
  sale.onclick = () => ativarElemento(sale);
  resale.onclick = () => ativarElemento(resale);
  cake.onclick = () => ativarElemento(cake);
//================================================================================================================================





