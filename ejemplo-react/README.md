# Ejemplo React Typescript

Este ejemplo fue creado con `create-react-app`

```bash
create-react-app ejemplo-react --typescript
```

El argumento `--typescript` sirve para configurar el proyecto para funcionar con typescript por default en lugar de utilizar javascript.

Antes de comenzar a utilizar el proyecto de cualquier manera, hay que instalar las dependencias con `npm install`

El proyecto se ejecuta en modo desarrollo de la misma manera, utilizando `npm start`. Al ejecutarlo en este modo, **no** se creará ningún output de compilado.

Al compilar el proyecto para producción con `npm run build`, se crean los archivos javascript correspondientes para ser ejecutado directamente por el navegador.

---

## Dependencias

Todas las dependencias de tipos correspondientes a node, react, react-dom y jest se agregan de manera automática. Sin embargo, como en cualquier proyecto de typescript, se deben agregar manualmente las librerías de tipos de cada una de las dependencias que agregues. Normalmente estas dependencias tienen el prefijo `@types/` seguido del nombre del paquete.
