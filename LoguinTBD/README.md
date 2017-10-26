Version Alfa/Omega/Beta/Sampaoli edition v0.1
Para lograr arrancar correctamente el front se debe instalar las dependencias con npm, realizando los siguientes comandos
- npm install (en carpeta Loguin TBD)
- npm install d3 (en la misma carpeta para instalar las dependencias de d3 [Añadir luego al package.json])
- npm install en la carpeta server (Esto unicamente para levantar la API de prueba con un simple usuario "gonto" "gonto", para futuro, se eliminaria esta parte para simplemente responder a la API generada por nosotros)


Una vez instalada todas las dependencias, arrancar los siguientes comandos
- nodejs server/server.js 
- npm run dev (ambos en la carpeta donde se encuentra el archivo webpack.config.js)

Con esto se levantaria la aplicación en los puertos 3001 (para el API) y 8080 para la pagina web, para cambiar el puerto de la API añadir al comando nodejs server/server.js PORT=XXXX con la direccion del puerto deseado.
Para la pagina web entrar al archivo "package.json" y añadir en la linea 6 (o en la variable dev) añadir --port XXXX con la direccion del puerto deseado quedandode la siguiente manera
- "dev": "webpack-dev-server --inline --hot --port 7070"

Preguntar por como utilizar el .gitignore (recordatorio felipe)