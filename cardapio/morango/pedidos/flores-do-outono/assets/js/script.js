//==================================================================================================================
// Código que carrega a cestinha e verifica se nela há itens, caso não houver, a cestinha não é carregada.

function verificarCestinha() {
    // Verifica se existe uma key 'cestinha' no localStorage com o valor 'ativa'
    if (localStorage.getItem('cestinha') === 'ativa') {
      // Seleciona o elemento da cestinha
      const cestinhaElement = document.getElementById('cestinha');
      
      // Remove a classe 'hidden' para exibir a cestinha
      cestinhaElement.classList.remove('hidden');
      
      // Chama a função para somar os valores do localStorage e atualizar o contador
      atualizarIconNumber();
    }
  }
  
  // Função para somar valores no localStorage, exceto a chave 'ativa'
  function atualizarIconNumber() {
    let somaTotal = 0;
  
    // Itera sobre todas as chaves no localStorage
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
  
      // Ignora a chave 'ativa' e tenta converter o valor para número
      if (key !== 'cestinha' && !isNaN(value)) {
        somaTotal += parseInt(value, 10); // Converte para número e soma
      }
    }
  
    // Seleciona o elemento com id 'icon_number' e insere o valor no <span>
    const iconNumberElement = document.querySelector('#icon_number span');
    iconNumberElement.textContent = somaTotal;
  }
  
  // Chama a função para verificar a key ao carregar a página
  window.onload = verificarCestinha;
//==================================================================================================================


//==================================================================================================================
// Função para adicionar a classe 'hidden' e limpar o localStorage
function removerCar() {
    // Seleciona o elemento com id 'cestinha'
    const cestinhaElement = document.getElementById('cestinha');
    
    // Adiciona a classe 'hidden' para ocultar o elemento
    cestinhaElement.classList.add('hidden');
    
    // Limpa todo o localStorage
    localStorage.clear();
  }
  
  // Adiciona um event listener para o botão com id 'remove-car'
  document.getElementById('remove-car').addEventListener('click', removerCar);
  //==================================================================================================================


//==================================================================================================================
// Função genérica para capturar o clique e aplicar as mudanças
function handleItemClick(idElemento) {
    document.getElementById(idElemento).addEventListener('click', function(event) {
        event.preventDefault(); // Evita o comportamento padrão do link

        // Verifica se já existe um valor no LocalStorage para este ID
        let valorAtual = localStorage.getItem(idElemento);

        // Se não houver valor, define como 0, caso contrário, converte o valor armazenado para número
        valorAtual = valorAtual ? parseInt(valorAtual) : 0;

        // Incrementa o valor
        valorAtual += 1;

        // Atualiza o LocalStorage com o novo valor
        localStorage.setItem(idElemento, valorAtual);

        // Atualiza o valor global dentro do <span> (contagem total)
        let valorGlobal = parseInt(document.querySelector('#icon_number span').textContent);
        valorGlobal += 1;
        document.querySelector('#icon_number span').textContent = valorGlobal;

        // Remove a classe 'hidden' da div cestinha e adiciona a animação 'animate__shakeX'
        let cestinha = document.getElementById('cestinha');
        if (cestinha.classList.contains('hidden')) {
            cestinha.classList.remove('hidden');
        }
        cestinha.classList.add('animate__shakeX');

        // Verifica se a variável global é 1 ou maior
        if (valorGlobal >= 1) {
            // Adiciona no LocalStorage a chave 'Cestinha' com o valor 'ativa'
            localStorage.setItem('cestinha', 'ativa');
        }
    });
}

// Aplicando a função a todos os IDs mencionados
handleItemClick('m-flores-do-outono');
handleItemClick('c-cafe-dourado');
handleItemClick('cb-flores-salmao');
handleItemClick('bc-tradicional-m1');
handleItemClick('p-flocos-neve');
handleItemClick('dl-dunas-areia');
handleItemClick('marac-tradicional-m1');
handleItemClick('limao-m1');
//==================================================================================================================
//<!-- Cestinha --------------------------------------------------->
//<div id="cestinha" class="car animate__animated hidden">
  //<div id="icon-click" class="icon-container">
    //<div id="icon_number" class="icon-number"><span>0</span></div>
  //</div>
    //<i class='bx bx-basket'></i>
//</div>
//<!---------------------------------------------------------------->
//==================================================================================================================





$('#tel_zap').mask('(00) 90000-0000');



function contarCaracteres(textarea) {
    const maxLength = 500;
    const caracteresRestantes = maxLength - textarea.value.length;
    document.getElementById("contador").textContent = caracteresRestantes + " caracteres restantes";
}



// Seleciona os elementos
const minusBtn = document.getElementById('minus');
const addDiv = document.getElementById('add');
const plusBtn = document.getElementById('plus');

const unitDiv = document.getElementById('unit');
const subPriceDiv = document.getElementById('sub_price');
const totalPriceDiv = document.getElementById('total_price');

const plusAnimation = document.getElementById('anime_total')

// Converte o conteúdo da div 'add' e outras em números
let valor = parseInt(addDiv.innerText);
let unit = parseInt(unitDiv.innerText);
const subPrice = parseInt(subPriceDiv.innerText);

// Função para atualizar o valor de 'unit' e 'total_price'
function atualizarValores() {
    unit = valor; // Atualiza a div 'unit' com o valor da div 'add'
    unitDiv.innerText = unit;

    // Multiplica unit pelo sub_price e atualiza o total_price
    const totalPrice = unit * subPrice;
    totalPriceDiv.innerText = totalPrice;
}

// Evento de clique para subtração
minusBtn.addEventListener('click', function() {
    
    if (valor > 1) {
        valor--;
        addDiv.innerText = valor;
        atualizarValores(); // Atualiza as outras divs 
    }

    plusAnimation.classList.toggle('animate__bounce')
    

});

// Evento de clique para adição
plusBtn.addEventListener('click', function() {

    valor++;
    addDiv.innerText = valor;
    atualizarValores(); // Atualiza as outras divs

    plusAnimation.classList.toggle('animate__bounce')
    
});





const removeShare = document.getElementById("share_icon");
const removeCalcButtons = document.getElementById("calc_buttons");
const removePriceTotal = document.getElementById("price_total");
// ===============================================================
const formContainer = document.getElementById("form_container");
const formContainerResumo = document.getElementById("container_resumo");

document.getElementById("proximo").addEventListener("click", function() {

    if (formContainer) {
      // Adiciona a classe que faz a animação de saída
      formContainer.classList.add("animate__fadeOutDown");
  
      // Depois de 500ms (a duração da transição), oculta o elemento com display: none
      setTimeout(function() {
        formContainer.classList.add("hide");
      }, 500); // Tempo que coincide com a duração da transição no CSS
    }

    removeShare.classList.add("hidden");
    removeCalcButtons.classList.add("hidden");
    removePriceTotal.classList.add("hidden");

    formContainerResumo.classList.remove("hidden");
    formContainerResumo.classList.add("animate__backInUp");
    
  });



//   const BtnVoltar = document.getElementById("voltarForm");

//   BtnVoltar.onclick = ()=>{
//     formContainerResumo.classList.add('hidden');
//     formContainer.classList.add('show');
//     };







// =========================================================================================================


document.getElementById('proximo').addEventListener('click', function() {
    // Captura dos valores do formulário
    const nome = document.getElementById('text_nome').value.trim();
    const zap = document.getElementById('tel_zap').value.trim();
    const categoria = document.getElementById('op-categoria').value;
    const data = document.getElementById('date_data').value;
    const pessoa = document.getElementById('text_pessoa').value.trim();
    const hora = document.getElementById('time_hora').value;
    const comentarios = document.getElementById('comentarios').value.trim();

    // Validação dos campos obrigatórios
    if (!nome) {
        alert('Por favor, preencha o campo "Nome".');
        window.location.href = ""; // Redireciona ou recarrega a página
        return;
    }
    if (!zap) {
        alert('Por favor, preencha o campo "Whatsapp".');
        window.location.href = ""; // Redireciona ou recarrega a página
        return;
    }
    if (!categoria) {
        alert('Por favor, selecione uma categoria.');
        window.location.href = ""; // Redireciona ou recarrega a página
        return;
    }
    if (!data) {
        alert('Por favor, selecione uma data.');
        window.location.href = ""; // Redireciona ou recarrega a página
        return;
    }
    if (!pessoa) {
        alert('Por favor, preencha o campo "Entregador".');
        window.location.href = ""; // Redireciona ou recarrega a página
        return;
    }
    if (!hora) {
        alert('Por favor, selecione um horário.');
        window.location.href = ""; // Redireciona ou recarrega a página
        return;
    }

    // Se todos os campos obrigatórios forem preenchidos
    const tipoTorta = document.getElementById('tipo_torta').textContent;
    const unit = document.getElementById('unit').textContent;
    const totalPrice = document.getElementById('total_price').textContent;

    // Inserção nos spans de resumo
    document.getElementById('descrResumo').textContent = tipoTorta;
    document.getElementById('unitResumo').textContent = unit;
    document.getElementById('moneyResumo').textContent = totalPrice;
    document.getElementById('userResumo').textContent = nome;
    document.getElementById('waNumberResumo').textContent = zap;
    document.getElementById('categoriaResumo').textContent = categoria;
    document.getElementById('dateResumo').textContent = data;
    document.getElementById('nameResumo').textContent = pessoa;
    document.getElementById('timeResumo').textContent = hora;
    document.getElementById('descricaoResumo').textContent = comentarios;

    // Lógica para ocultar o elemento de observação
    const observacaoResumo = document.getElementById('observacaoResumo');

    if (comentarios === "") {
        observacaoResumo.style.display = "none"; // Oculta o elemento
    } else {
        observacaoResumo.style.display = "block"; // Mostra o elemento, se os comentários estiverem preenchidos
        observacaoResumo.style.textAlign = "center"; // Centraliza o texto
    }

    // Remover a classe 'hidden' para mostrar o container de resumo
    document.getElementById('container_resumo').classList.remove('hidden');
});



    
// Constante para o botão de envio
const enviarProdutoBtn = document.getElementById('enviarProduto');

// Função para capturar dados e enviar via WhatsApp
function enviarWhatsApp() {
    // Captura das variáveis
    const compradorResumo = document.getElementById('compradorResumo').innerText; // Capturando compradorResumo
    const titleResumo = document.getElementById('titleResumo').innerText;
    const qtdResumo = document.getElementById('qtdResumo').innerText;
    const unitResumo = document.getElementById('unitResumo').innerText;
    const valorResumo = document.getElementById('valorResumo').innerText;
    const moneyResumo = 'R$ ' + document.getElementById('moneyResumo').innerText + ',00';
    const saborResumo = document.getElementById('saborResumo').innerText;
    const descrResumo = document.getElementById('descrResumo').innerText;
    const userResumo = document.getElementById('userResumo').innerText;
    const whatsappResumo = document.getElementById('whatsappResumo').innerText;
    const waNumberResumo = document.getElementById('waNumberResumo').innerText;
    const confeitariaResumo = document.getElementById('confeitariaResumo').innerText;
    const categoriaResumo = document.getElementById('categoriaResumo').innerText;
    const reservaResumo = document.getElementById('reservaResumo').innerText;
    const dateResumo = document.getElementById('dateResumo').innerText;
    const horarioResumo = document.getElementById('horarioResumo').innerText;
    const timeResumo = document.getElementById('timeResumo').innerText;
    const entregadorResumo = document.getElementById('EntregadorResumo').innerText;
    const nameResumo = document.getElementById('nameResumo').innerText;
    const observacaoResumo = document.getElementById('observacaoResumo').innerText;
    const descricaoResumo = document.getElementById('descricaoResumo').innerText;

    // Saudação personalizada com a variável userResumo
    const saudacao = `Olá! Me chamo: *${userResumo}* e gostaria de fazer um pedido!`;


// Verificação para não incluir 'descricaoResumo' na mensagem se estiver vazia
let observacaoParte = "";

if (descricaoResumo.trim() !== "") {
    observacaoParte = `\n\nObservações:\n\n *${descricaoResumo}*`;
}

// Formatação das informações para o WhatsApp
// const mensagem = `${saudacao}\n\n*${titleResumo}*\n\n*${qtdResumo}* ${unitResumo}\n*${valorResumo}* ${moneyResumo}\n*${saborResumo}* ${descrResumo}\n*${compradorResumo}* ${userResumo}\n*${whatsappResumo}* ${waNumberResumo}\n*${confeitariaResumo}* ${categoriaResumo}\n*${reservaResumo}* ${dateResumo}\n*${horarioResumo}* ${timeResumo}\n*${entregadorResumo}* ${nameResumo}${observacaoParte}`;
const mensagem = `${saudacao}\n\n*${titleResumo}*\n\n ${qtdResumo} *${unitResumo}*\n ${valorResumo} *${moneyResumo}*\n ${saborResumo} *${descrResumo}*\n ${compradorResumo} *${userResumo}*\n ${whatsappResumo} *${waNumberResumo}*\n ${confeitariaResumo} *${categoriaResumo}*\n ${reservaResumo} *${dateResumo}*\n ${horarioResumo} *${timeResumo}*\n ${entregadorResumo} *${nameResumo}*${observacaoParte}`;

// Formatação da URL para envio via WhatsApp
const url = `https://wa.me/5581982265010?text=${encodeURIComponent(mensagem)}`;
window.open(url, '_blank');

}

// Adicionando evento de clique ao botão 
enviarProdutoBtn.addEventListener('click', enviarWhatsApp);



// =========================================================================================================
    



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
// const BtnProximo = document.getElementById('proximo'); //  

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
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  