# REACT
Puntos fuertes en relación a otros como Angular (creado por google) o Vue
- Es más flexible que los frameworks como Angular o Vue
- El manejo de los estados y ciclo de vida es más evidente y comprensible
- Trabajar con components es Unidireccionalidad de los datos (One-way data binding): En React, los datos fluyen en una sola dirección, desde el componente principal hacia los componentes secundarios. Esto hace que sea más fácil rastrear el flujo de datos y entender cómo los cambios en el estado afectan a la interfaz de usuario.
- Es declarativa
- El STATE es un {} del component de React
- Usa un Virtual DOM para ser matchear exactamente solo lo que debe cambiar
- Usamos Components en React. De clase (con this y props por defecto) y Funcionales
- Principio de responsabilidad única
- JSX <-> Extensión -> de buena práctica para los components 

Y de por sí otros frameworks como Next o Gatsby usan React


# React intro - armar base de trabajo en diez pasos

### Para utilizar CRA debemos: npx create-react-app nombre-de-tu-proyecto
### Para utilizar VITE debemos:  npm create vite o npm create vite@latest my-react-app

1. Creamos carpeta
```
  client
____|
```

2. Inicializamos el package.json
```bash
npm init
```

3. instalamos webpack
```bash
npm i -D webpack webpack-cli
```
4. instalamos React
```bash
npm i react react-dom react-scripts
```
5. instalamos babel y sus dependencias
```bash
npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader
```
6. Creamos la carpeta public y dentro de esta el index.html
```
public --> index.html
```

7. Creamos la carpeta src y dentro nuestros archivos index.js y app.js
```
src --> index.js y app.js
```

8. En el index.html creamos el div raíz
```js
<div id="root"></div>
```

9. En index.js creamos el ReactDOM conectado al root del html
```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <App/>
)
```

10. En nuestro primer componente App iniciamos nuestro job in React
Select rfc (react funcional component) para obtener el molde de nuestro primer component

## Incorporar WEBPACK
Para usar WEBPACK con components de REACT debemos usar en:
```
archivo -> webpack.config.js
```
```js
const path = require( 'path');
const source = path.resolve(__dirname, 'src');

module.exports = {
  context: __dirname,
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components'),
    },
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  }
}
```
Agregar los scripts -> ejecutar React y a futuro para ejecutar webPack
```json
"start": "react-scripts start",
"build": "webpack"
```

### Recordar que, la CARPETA components debe:
```
La carpeta COMPONENTS debe ser hermana del archivo app.js como index.js para
que React no tenga conflicto al conectar los components con el componente padre App
```

### Para ERROR de babel
```bash
npm i @babel/plugin-proposal-private-property-in-object
```

### esbuild de VITE

 La biblioteca relacionada con esbuild es "vite". Vite es un entorno de desarrollo rápido que utiliza esbuild como su compilador subyacente para lograr un rendimiento excepcional durante el desarrollo y la construcción de proyectos. La versión específica que estás utilizando es "^4.4.5". Puedes encontrar más información sobre esbuild en la documentación oficial de Vite: https://vitejs.dev/guide/why.html#esbuild

esbuild puede desempeñar un papel similar a la combinación de Webpack y Babel, pero con un enfoque diferente y con un rendimiento significativamente mejor en muchos casos.

### ESLint <-> es un anti DRY

ESLint, es una herramienta de linting para JavaScript y JSX. El linting es el proceso de analizar el código fuente en busca de patrones que podrían indicar errores, posibles problemas, o simplemente prácticas de codificación que se deben seguir. ESLint se utiliza comúnmente en proyectos para mantener un código consistente y de alta calidad.