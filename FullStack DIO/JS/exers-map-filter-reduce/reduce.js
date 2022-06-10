function exemplo1(){
    const array = [1,2,3,4,5];
    const soma = array.reduce((acc, item) => acc + item);
    console.log(soma)
}

function exemplo2(){

    const products = [
        {
            name: "mouse",
            price: 200.0,
        },
        {
            name: "computer",
            price: 5000.0,
        },
        {
            name: "keyboard",
            price: 150.0,
        },
        {
            name: "headset",
            price: 210.0,
        },
    ];

    function balance(products, balance){
        return products.reduce(((balance, product) => balance - product.price), balance);
    }

    console.log(`Seu saldo final é de ${balance(products, 6000)} reais`);
    console.log(products)
}

exemplo2();