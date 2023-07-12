let items = [];

document.querySelector('input[type=submit]').addEventListener('click', () => {
    var nomeProduto = document.querySelector('input[name=nome-Produto]');
    var precoProduto = document.querySelector('input[name=price]');
    var quantidadeProduto = document.querySelector('input[name=quantidade-Produto]');

    items.push ({
        nome: nomeProduto.value,
        quantidade: quantidadeProduto.value,
        valor: precoProduto.value * quantidadeProduto.value,
    });

    let listaProdutos = document.querySelector('.lista-cada-produtos');
    let soma = 0;

    listaProdutos.innerHTML = "";
    items.map(function(val) {
        soma+=parseFloat(val.valor);

        listaProdutos.innerHTML += `
        <div class="list-cada-produtos">
            <h3 class="pricing-produto">`+val.nome+`</h3>
            <h3 class="pricing-produto">`+val.quantidade+`</h3>
            <h3 class="pricing-produto">R$ `+val.valor+`</h3>     
        </div>

        `
    });

    soma = soma.toFixed(2);

    nomeProduto.value = "";
    precoProduto.value = "";
    quantidadeProduto.value = "";

    let elementoSoma = document.querySelector('.lista-soma h1');
    elementoSoma.innerHTML = 'Total R$ ' +soma;
});

document.querySelector('button[name=limpar]').addEventListener('click', () => {
    items = [];

    document.querySelector('.lista-cada-produtos').innerHTML = "";
    document.querySelector('.lista-soma h1').innerHTML = "Total: R$ 0";
});