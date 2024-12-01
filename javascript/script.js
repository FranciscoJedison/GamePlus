document.getElementById('searchForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    
    const query = document.getElementById('searchInput').value;
    document.getElementById('result').innerHTML = 'Buscando...';

    try {
        // Simulando uma busca com API (aqui você pode adicionar sua lógica de requisição)
        const response = await fetch(`https://api.exemplo.com/search?q=${query}`);
        const data = await response.json();
        
        // Exibindo o resultado (você pode personalizar esta lógica)
        document.getElementById('result').innerHTML = `Resultados encontrados: ${data.resultados}`;
    } catch (error) {
        document.getElementById('result').innerHTML = 'Erro ao buscar, tente novamente.';
        console.error('Erro:', error);
    }
});
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});



const searchBar = document.getElementById("search-bar");
const productItems = document.querySelectorAll(".product-item");

// Função para filtrar os itens da lista com base no termo de pesquisa
function filterProducts(searchTerm) {
    productItems.forEach(item => {
        // Verifica se o termo de pesquisa está presente no texto do item
        if (item.textContent.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.style.display = "block"; // Mostra o item
        } else {
            item.style.display = "none"; // Oculta o item
        }
    });
}

// Evento para capturar a digitação na barra de pesquisa
searchBar.addEventListener("input", (e) => {
    filterProducts(e.target.value);
});

//função para embaralhar a lista de produtos
function embaralharProdutos() {
    const lista = document.getElementById('product-grid');
    const produtos = Array.from(lista.children);
    
    // Embaralha a lista de produtos
    produtos.sort(() => Math.random() - 0.5);
    
    // Reanexa os produtos embaralhados ao elemento pai
    produtos.forEach(produto => lista.appendChild(produto));
}

// Chama a função para embaralhar os produtos ao carregar a página
window.onload = embaralharProdutos;
document.addEventListener('DOMContentLoaded', embaralharProdutos);


//carousel com autoslide
let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    function updateCarousel() {
        const offset = -currentIndex * (100 / 3); // Calcula o deslocamento baseado em 3 imagens visíveis
        document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
    }

    function autoSlide() {
        currentIndex = (currentIndex + 1) % (totalItems - 2); // Muda de 0 a (totalItems - 3) para evitar ultrapassar
        updateCarousel();
    }

    // Inicia o auto slide a cada 3 segundos
    setInterval(autoSlide, 3000);









document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('product-item');
    const productDetails = {
    1: { nome: 'Cyberpunk 2077', descricao: 'Ação', preco: 199.90 },
    2: { nome: 'Persona 5', descricao: 'RPG', Preço: 250 },
    3: { nome: 'Final Fantasy 16', Descrição: 'Aventura', Preco: 299.90 },
    4: { nome: 'Monster Hunter World', Descrição: 'Ação', Preco: 129.90 }
    };
    
    const product = productDetails[productId];
    if (product) {
    document.getElementById('car-details').innerHTML = `
    <p>Nome: ${product.nome}</p>
    <p>Modelo: ${product.descricao}</p>
    <p>Ano: ${product.preco}</p>
    
    `;
    }
    });

// Função para abrir o modal
function abrirModal() {
    document.getElementById("meuModal").style.display = "block";
}

// Função para fechar o modal
function fecharModal() {
    document.getElementById("meuModal").style.display = "none";
}

// Fechar o modal quando o usuário clica fora do conteúdo
window.onclick = function(event) {
    const modal = document.getElementById("meuModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
const produtos = [
    {
        id: 1,
        nome: "Cyberpunk 2077",
        descricao: "Cyberpunk 2077 is a 2020 action role-playing game developed by the Polish studio CD Projekt Red, and published by CD Projekt, and based on Mike Pondsmith's Cyberpunk tabletop game series. The plot is set in the fictional metropolis of Night City, California, within the dystopian Cyberpunk universe.",
        imagem: "imagens/cyberpunk2077.png"
    },
    {
        id: 2,
        nome: "Persona 5 Royal",
        descricao: "Persona is a RPG series set in modern-day Japan that is acclaimed for its narrative style of confronting everyday realities such as forging friendships and romances, alongside supernatural and paranormal themes, including uncovering and solving mysterious rumors and various urban legends.",
        imagem: "imagens/p5royal.png"
    },
    {
        id: 3,
        nome: "Final Fantasy 16",
        descricao: "Final Fantasy XVI is a 2023 action role-playing game developed and published by Square Enix. The sixteenth main installment in the Final Fantasy series, it was released for the PlayStation 5 in June 2023, with a Windows version released in September 2024.",
        imagem: "imagens/ff16.png"
    },
    {
        id: 4,
        nome: "Monster Hunter World",
        descricao: "Monster Hunter: World is a 2018 action role-playing game developed and published by Capcom. The fifth mainline installment in the Monster Hunter series, it was released worldwide for PlayStation 4 and Xbox One in January 2018, with a Windows version following in August 2018.",
        imagem: "imagens/mhworld.png"
    },
    {
        id: 5,
        nome: "Monster Hunter Rise",
        descricao: "Monster Hunter Rise is a 2021 action role-playing game developed and published by Capcom for the Nintendo Switch. It was released worldwide in March 2021, with a Windows port released in January 2022 and ports for PlayStation 4, PlayStation 5, Xbox One, and Xbox Series X/S were released in January 2023.",
        imagem: "imagens/mhrise1.png"
    },
    {
        id: 6,
        nome: "Elden Ring",
        descricao: "Elden Ring é um jogo eletrônico de RPG de ação, jogado de uma perspectiva em terceira pessoa e apresenta elementos semelhantes aos encontrados em seus antecessores, a série Souls, além de Bloodborne e Sekiro: Shadows Die Twice, com uma jogabilidade focada em combate e exploração.",
        preco: "R$ 100,00"
    },
    {
        id: 7,
        nome: "Produto 3",
        descricao: "Descrição do Produto 3",
        preco: "R$ 100,00"
    },
    {
        id: 8,
        nome: "Produto 3",
        descricao: "Descrição do Produto 3",
        preco: "R$ 100,00"
    },
    {
        id: 9,
        nome: "Produto 3",
        descricao: "Descrição do Produto 3",
        preco: "R$ 100,00"
    },
    {
        id: 10,
        nome: "Produto 3",
        descricao: "Descrição do Produto 3",
        preco: "R$ 100,00"
    },
    {
        id: 11,
        nome: "Produto 3",
        descricao: "Descrição do Produto 3",
        preco: "R$ 100,00"
    },
    {
        id: 12,
        nome: "Produto 3",
        descricao: "Descrição do Produto 3",
        preco: "R$ 100,00"
    },
    {
        id: 13,
        nome: "Produto 3",
        descricao: "Descrição do Produto 3",
        preco: "R$ 100,00"
    },
    {
        id: 14,
        nome: "Produto 3",
        descricao: "Descrição do Produto 3",
        preco: "R$ 100,00"
    },
    {
        id: 15,
        nome: "Produto 3",
        descricao: "Descrição do Produto 3",
        preco: "R$ 100,00"
    },
    {
        id: 16,
        nome: "Produto 3",
        descricao: "Descrição do Produto 3",
        preco: "R$ 100,00"
    },
    {
        id: 17,
        nome: "Produto 3",
        descricao: "Descrição do Produto 3",
        preco: "R$ 100,00"
    },
    {
        id: 18,
        nome: "Produto 3",
        descricao: "Descrição do Produto 3",
        preco: "R$ 100,00"
    },
    {
        id: 19,
        nome: "Produto 3",
        descricao: "Descrição do Produto 3",
        preco: "R$ 100,00"
    },
    {
        id: 20,
        nome: "Produto 3",
        descricao: "Descrição do Produto 3",
        preco: "R$ 100,00"
    },
    {
        id: 21,
        nome: "Produto 3",
        descricao: "Descrição do Produto 3",
        preco: "R$ 100,00"
    }
];

// Função para abrir o modal e exibir os dados do produto
function abrirModal(produtoId) {
    // Encontrando o produto pelo ID
    const produto = produtos.find(p => p.id === produtoId);

    if (produto) {
        // Atualizando o conteúdo do modal com os atributos do produto
        document.getElementById("produtoNome").innerText = produto.nome;
        document.getElementById("produtoDescricao").innerText = produto.descricao;
        document.getElementById("produtoImagem").src = produto.imagem;

        // Exibindo o modal
        document.getElementById("meuModal").style.display = "block";
    }
}

// Função para fechar o modal
function fecharModal() {
    document.getElementById("meuModal").style.display = "none";
}

// Fechar o modal quando o usuário clica fora do conteúdo
window.onclick = function(event) {
    const modal = document.getElementById("meuModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//funções do carrinho
document.addEventListener("DOMContentLoaded", () => {
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
  
    // Carrega o carrinho do localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    // Atualiza o carrinho na interface e no localStorage
    function updateCart() {
      // Limpa o conteúdo atual
      cartItemsContainer.innerHTML = "";
      let total = 0;
  
      // Atualiza cada item no carrinho
      cart.forEach((item, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - R$ ${item.price.toFixed(2)} x ${item.quantity}`;
        
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remover";
        removeButton.onclick = () => removeFromCart(index);
        listItem.appendChild(removeButton);
  
        cartItemsContainer.appendChild(listItem);
        total += item.price * item.quantity;
      });
  
      cartTotal.textContent = total.toFixed(2);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  
    // Função para adicionar um item ao carrinho
    function addToCart(product) {
      const existingProductIndex = cart.findIndex(item => item.id === product.id);
      if (existingProductIndex > -1) {
        // Se o produto já está no carrinho, incrementa a quantidade
        cart[existingProductIndex].quantity += 1;
      } else {
        // Adiciona o produto como um novo item no carrinho
        cart.push({ ...product, quantity: 1 });
      }
      updateCart();
    }
  
    // Função para remover um item do carrinho
    function removeFromCart(index) {
      cart.splice(index, 1);
      updateCart();
    }
  
    // Event listeners para os botões "Adicionar ao carrinho"
    document.querySelectorAll(".add-to-cart").forEach(button => {
      button.addEventListener("click", () => {
        const productElement = button.closest(".product-item");
        const product = {
          id: productElement.getAttribute("data-id"),
          name: productElement.getAttribute("data-name"),
          price: parseFloat(productElement.getAttribute("data-price"))
        };
        addToCart(product);
      });
    });
  
    // Inicializa o carrinho exibido
    updateCart();
  });
  

  $("#telefone, #celular").mask("(00) 0000-0000");


  let cart = [];

function addToCart(id, name, price, description) {
    const quantity = document.querySelector(`.product[data-id="${id}"] input`).value;
    const product = { id, name, price, description, quantity: parseInt(quantity) };
    const existingProductIndex = cart.findIndex(item => item.id === id);

    if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantity += product.quantity;
    } else {
        cart.push(product);
    }

    alert(`${name} adicionado ao carrinho.`);
}

function finalizePurchase() {
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'checkout.php';

    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = 'cart';
    input.value = JSON.stringify(cart);

    form.appendChild(input);
    document.body.appendChild(form);
    form.submit();
}