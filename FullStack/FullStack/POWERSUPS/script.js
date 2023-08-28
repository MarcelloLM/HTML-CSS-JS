const catalogo = [
    {
        id: 1, 
        nome: "AMINO POWDER",
        marca: "POWER SUPS",
        preco: 67.50,
        Imagem: "amino.png", 
    },
    {
        id: 2,
        nome: "ARGININA",
        marca: "POWER SUPS",
        preco: 30,
        Imagem: "arginina.png", 
    },
    {
        id: 3, 
        nome: "CREATINA",
        marca: "POWER SUPS",
        preco: 100,
        Imagem: "creatina.png", 
    },
    {
        id: 4,
        nome: "CREME DE AVELA",
        marca: "POWER SUPS",
        preco: 45,
        Imagem: "cremedeavela.png",
    },
    {
        id: 5,
        nome: "HAZE",
        marca: "POWER SUPS",
        preco: 105, 
        Imagem: "haze.png",
    },
    {
        id: 6,
        nome: "INSANITY",
        marca: "POWER SUPS",
        preco: 100,
        Imagem: "insanity.png"
    },
    {
        id: 7,
        nome: "MULTIVITAMINICO",
        marca: "POWER SUPS",
        preco: 45,
        Imagem: "multi.png"
    },
    {
        id: 8, 
        nome: "WHEY PROTEIN 80%",
        marca: "POWER SUPS",
        preco: 99,
        Imagem: "whey.png"
    }

]

for (const produtoCatalogo of catalogo){
    const cartaoProduto = `<div id="card-produto1">
<img src="img/${produtoCatalogo.Imagem}" alt="Produto 1 do powersups.">
<p>${produtoCatalogo.marca}</p>
<P>${produtoCatalogo.nome}</P>
<p>${produtoCatalogo.preco}</p>
<button>Adicionar ao carrinho</button>
</div>`; 

document.getElementById("containter-produto").innerHTML += cartaoProduto; 
};


