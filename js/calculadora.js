export const sumar = (a, b) => a + b;

export const restar = (a, b) => a - b;

export const multiplicar = (a, b) => {
    return b === 0 || a === 0 ? 0 : new Array(b).fill(a).reduce(sumar)
}

export const dividir = (a, b) => {
    return b === 0 ? 'Ideterminación matemática' : b > 1 ? [...Array(a).keys()].reduce((acc, num) => multiplicar(num, b) <= a ? sumar(acc, 1) : acc, -1) : a;
}