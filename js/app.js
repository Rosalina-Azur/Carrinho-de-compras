let total;
limpar();

function adicionar() {

    
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorProduto = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;

    let preço = quantidade * valorProduto;

    let carrinho = document.getElementById('lista-produtos');

    carrinho.innerHTML = carrinho.innerHTML + ` <section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">R$${preço}</span>
        </section>`;
        
    total = total + preço;

    let totalCarrinho = document.getElementById('valor-total');
    totalCarrinho.innerHTML = `R$${total}`;
    document.getElementById('quantidade').value = '0';

}
function limpar() {
    total = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$0';
}