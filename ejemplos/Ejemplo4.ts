// Ejemplo 4: Genéricos
// Ejecuta 'yarn build:e4' para compilar

// Los tipos con genéricos nos permiten fabricar tipos con base a otros
// Un ejemplo es una solicitud web con una cabecera común

// El tipo T es un genérico que se asigna al miembro `data`
interface WebResponse<T = any> {
  statusCode: 200 | 201 | 204 | 400 | 401 | 403 | 404 | 500 // Códigos comunes
  success: boolean
  data: T
}

// Ahora podemos declarar una interfaz con la respuesta de una solicitud
interface LoginResponse {
  user: string
  token: string
  expires: Date
}

// De esta manera, todas las variables de tipo WebResponse tienen los miembros
// succesCode, success y data. Por default, data es de tipo `any`

// Al pasarle una tipo a nuestro genérico, el tipo data (que es el que implementa el tipo del genérico)
// se vuelve de ese tipo.
// La manera de implementarlo es la siguiente
const response: WebResponse<LoginResponse> = {
  statusCode: 201,
  success: true,
  data: {
    user: 'Admin',
    token: 'token',
    expires: new Date(),
  },
}
// Así, data tiene los miembros user, token y expires
