
function semThis(){
    const array = [1, 2, 3, 4, 5];
    const arrayx2 = array.map((item) => item * 2);
    console.log("Exemplo sem This ", arrayx2);
}

function comThis(){

    const orange = {
    price: 2,
}

const apple = {
    price: 1.5,
}

function mapArray(){
    const array = [1, 2, 3, 4, 5];

    const arrayXprice = array.map(function(item) {
        return item * this.price;
    }, apple);

    console.log("Exemplo com this",arrayXprice);
}

mapArray();

}

comThis();