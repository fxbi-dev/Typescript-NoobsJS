// Ejemplo 2: Clases, Interfaces y Tipos
// Ejecuta 'yarn build:e2' para compilar

// Las clases son similares a las clases de ES6
class ClaseEjemplo {
  // Puede tener un constructor con atributos opcionales y obligatorios
  constructor(attr0: string, attr1?: string) {
    // attr0 es obligatorio,
    // attr1 es opcional y, por ende, puede ser undefined
  }

  // Los miembros de las clases tienen modificadores de acceso
  // Estos son eliminados al compilar

  // public: Puede ser utilizado por cualquier instancia de la clase desde fuera de la clase
  public method0() {}

  // protected: Puede ser utilizado por la clase y cualquier clase que extienda esta
  protected method1() {}

  // private: Sólo puede ser utilizado dentro de esta clase
  private method2() {}
}

// Las interfaces sólo se utilizan para delimitar un tipo en TypeScript, desaparecen al compilar
interface IEjemplo {
  member0: number
  member1: string
  member3: boolean
  member4?: any[] // Este método es opcional debido al ? al final del nombre
}

// Este ejemplo es del tipo IEjemplo, desaparecido en la compilación
const ejemploInterfaz: IEjemplo = {
  member0: 0,
  member1: 'valor',
  member3: true,
}

// Los tipos son similares a las interfaces, funcionan como alias para englobar tipos
// También desaparecen en tiempo de compilación
type Tipo = {
  prop0: number
  prop1: string
  prop2: boolean
  prop3?: any[]
}

// Este ejemplo es del tipo Tipo, desaparecido en la compilación
const ejemploTipo: Tipo = {
  prop0: 0,
  prop1: 'string',
  prop2: false,
  prop3: [],
}
