// Ejemplo 3: Union y Disyunción de tipos
// Ejecuta 'yarn build:e3' para compilar

// En TypeScript se pueden declarar variables que pueden tener distintos tipos de dato
// a la vez, lo que nos permite utilizar la misma declaración para distintos
// propósitos
// Este valor puede determinarse por el flujo de ejecución

// Para el ejemplo, declaramos una interfaz
interface IMultipleType {
  value: string
}

// La variable puede recibir valores string o IMultipleType, pero esto no determina su tipo
let multipleTypes: string | IMultipleType

multipleTypes = 'string' // Se le puede asignar un valor string
console.log(multipleTypes.length) // Para este punto, la variable es string, por lo tanto tiene el miembro `length`

// Aún así, la variable fue declarada como tipo string o IMultipleType, así que se le puede asignar algo de ese tipo
multipleTypes = { value: 'string' }
console.log(multipleTypes.value) // Ahora es de tipo IMultipleType, por lo tanto tiene el miembro `value`

// Dentro de funciones, los tipos pueden ser inferidos por condicionales
const funcMultipleTypes = (arg: string | IMultipleType) => {
  if (typeof arg === 'string') {
    arg.length // Para este punto, arg es string
  } else {
    arg.value // Para este punto, arg es IMultipleType
  }
}

// De igual manera, un parámetro o miembro opcional es una disyunción con `undefiend`
const getLength = (arg?: string) => {
  // arg es de tipo string o undefined
  if (arg) {
    // Para este punto, arg es de tipo string solamente, por lo que puede acceder al miemgro `length`
    return arg.length
  }
  return 0
}

// Las uniones de tipos, al contrario que las disyunciones, nos sirven para tener múltiples
// tipos en la misma variable a la vez.

// También podemos unir tipos estáticos para remarcar que sólo se pueden utilizar algunos valores

let fruit: 'Apple' | 'Mango' | 'Watermelon' // La variable fruit sólo puede tener uno de esos valores
fruit = 'Apple'
fruit = 'Mango'
fruit = 'Watermelon'

// Para este ejemplo, vamos a declarar otra interfaz
interface IMultipleType2 {
  otherValue: string
}

// Declaramos una variable que una los tipos IMultipleType y IMultipleType2
let union: IMultipleType & IMultipleType2 = {
  value: 'value',
  otherValue: 'otherValue',
}

// La variable union tiene los miembros de IMultipleType y IMultipleType2 a la vez
