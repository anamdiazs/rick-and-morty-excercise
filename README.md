# rick-and-morty-excercise
Rick and Morty Next 13 Frontend that Implements an Express js Server for the backend

El proyecto consiste en la creación de una Single Page Application que consume los datos de una API creada dentro de un servidor de Express. 

¿Cómo correr el proyecto?

** Requisitos previos: Tener instalado Node js **

PARA EL BACKEND:

1. Acceder a la carpeta de rick-and-morty-server y correr el comando:
  npm install 

2. Una vez que los módulos están instalados correr el proyecto con el comando:

  npm run dev

PARA EL FRONTEND:

1. Acceder a la carpeta de rick-and-morty-app y correr el comando:
  npm install 

2. Una vez que los módulos están instalados correr el proyecto con el comando:

  npm run dev

3. Abrir en nuestro navegador la dirección:
  
  http://localhost:3000 



La carpeta correspondiente al backend es la siguiente: rick-and-morty-server.
Incluye la implementación de un servidor de Node Js bajo el framework de Express, además se hizo uso de TypeScript y un módulo de npm llamado Nodemon para escuchar los cambios del servidor en tiempo real.

En el archivo de index.ts se encuentra la lógica del proyecto. 
Como primer paso se importan los módulos a utilizar y se declara el puerto en el que vamos a estar escuchando nuestro servidor.
Mediante el uso de TypeScript se define una interfaz "Character" que cuenta con elementos como: id, nombre y la imagen del humano correspondiente. 

Además se autoriza cors para poder acceder a la API de manera local, ya que nuestro frontend se encuentra en la ruta: http://localhost:3000

Posteriormente mediante el uso de AXIOS una librería  de Cliente HTTP basado en promesas que nos ayuda a identificar de manera sencilla cuando un request no puede ser procesado. A continuación especificamos los parámetros que queremos regresar en la API que  posteriormente utilizaremos en nuestro frontend '/characters' y posteriormente hacemos el POST a la API de Graph QL con Rick and Morty. 

Regresando así en el Frontend la respuesta en formato JSON. 

A su vez se incluye un bloque try/catch para la validación de errores. 

La carpeta correspondiente al Frontend es la siguiente:  rick-and-morty-app

Esta carpeta incluye el proyecto en Next js 13, dentro de la carpeta app se encuentra la carpeta src.
La carpeta src incluye la página principal en la que se hará la carga de nuestros componentes.

Dentro de src/components encontramos un archivo de Characters, siendo este nuestro archivo principal que se encarga de recuperar los datos una vez que cargue la página haciendo uso del hook useEffect. 

Lo que realmente sucede es que se ejecuta la función getCharacterData() al cargar la página por primera vez (Para esto ya debemos estar corriendo el folder de backend) mediante el uso del hook useState vamos a guardar los datos una vez que se haya procesado de manera correcta el request.

Posteriormente hacemos el renderizado de los datos guardados en characterData haciendo uso del método .map que nos renderiza cada componente del arreglo en un elemento de tipo CharacterCard. 

Finalmente debemos exportar el componente e importarlo en nuestra page.tsx para cargar nuestro listado de humanos en Rick and Morty!!

PD. El proyecto es responsivo, de manera que se puede ver en pantallas móviles y web.

