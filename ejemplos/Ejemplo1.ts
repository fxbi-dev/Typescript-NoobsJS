// Ejemplo 1: Declaración básica de tipos
// Ejecuta 'yarn build:e1' para compilar

// La constante holaMundo está explícitamente declarada como string e inicializado con un
// string.
let holaMundo: string = 'Hola Mundo'

// También pueden declararse variables y escribirse despues
let holaMundo2: number
holaMundo2 = 2

// Pueden declararse variables y constantes con inicializacion
// Y el compilador igual asumirá el tipo
let holaMundo3 = true // holaMundo3 es de tipo boolean

// Cuando se declaran constantes, para typescript, el tipo de dato es igual al
// valor de la constante
const holaMundoConst = 'Hola mundo constante' // El tipo de dato es "Hola mundo constante"

// Existe el tipo de dato 'any' que hace que la variable sea igual a una de javascript
// quitándole la gracia a typescript :C
// Es útil en casos donde no sabemos que tipo de dato tendrá la variable
// En ningun caso deja de ser tipo any
let holaMundoAny: any
holaMundoAny = 'Hola Mundo any'
holaMundoAny = 5
holaMundoAny = false
holaMundoAny = { tipo: 'El que sea' }
holaMundoAny = ['En serio', 'El que sea', 5]
holaMundoAny = () => 'Incluidas funciones'
