console.log('Hola');


let suma = () => console.log(1 + 1);
suma();

function suma2() { 
    console.log(1 + 1);
}

suma2();

let resultado = 0;

function suma3() {
    return 15;
}

resultado = suma3();
let resultado2 = suma3();

console.log(resultado);
console.log(resultado2);



let resultado3 = 0;

let funcion = (param) => { 
    let trampa = "trampa";
    param = 3;
    return param;
}

resultado3 = funcion(resultado3);
funcion(resultado3);

console.log(resultado3);

let exp = 2;
let exponente = (param) => {
    return param * param;
}

console.log(exponente(exp));

console.log(exponente(10));

() => { }