// vamos criar um objeto para conseguir manipular as variaveis com mais facilidade
const catalogo = [
    {
        id: 1, 
        nome: "AMINO POWDER",
        marca: "POWERSUPS",
        preco: 67.50,
        Imagem: "amino.png", 
    },
    {
        id: 2,
        nome: "ARGININA",
        marca: "POWERSUPS",
        preco: 30,
        Imagem: "arginina.png", 
    },
    {
        id: 3, 
        nome: "CREATINA",
        marca: "POWERSUPS",
        preco: 100,
        Imagem: "creatina.png", 
    },
    {
        id: 4,
        nome: "CREME DE AVELA",
        marca: "POWERSUPS",
        preco: 45,
        Imagem: "cremedeavela.png",
    },
    {
        id: 5,
        nome: "HAZE",
        marca: "POWERSUPS",
        preco: 105, 
        Imagem: "haze.png",
    },
    {
        id: 6,
        nome: "INSANITY",
        marca: "POWERSUPS",
        preco: 100,
        Imagem: "insanity.png"
    },
    {
        id: 7,
        nome: "MULTIVITAMINICO",
        marca: "POWERSUPS",
        preco: 45,
        Imagem: "multi.png"
    },
    {
        id: 8, 
        nome: "WHEY PROTEIN 80%",
        marca: "POWERSUPS",
        preco: 99,
        Imagem: "whey.png"
    }

]
// Aqui nos podemos deixar em um laço para conseguir acessar todos os produtos ao mesmo momento
// Nao tendo que criar um produto por um 
for (const produtoCatalogo of catalogo){
    const cartaoProduto = `<div id="card-produto1">
<img src="img/${produtoCatalogo.Imagem}" alt="Produto 1 do powersups.">
<p>${produtoCatalogo.marca}</p>
<P>${produtoCatalogo.nome}</P>
<p>${produtoCatalogo.preco}</p>
<button>Adicionar ao carrinho</button>
</div>`; 

// Aqui estamos acessando o HTML atraves do javascript
document.getElementById("containter-produto").innerHTML += cartaoProduto; 
};


