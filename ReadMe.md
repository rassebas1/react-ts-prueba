- implementacion de proxy para el servicio de clash of clans
code: usando el clash-of-clans-api con node, usando express se adjunta el codigo:


const express = require("express");
const axios = require("axios");
const cors = require("cors");
const clashApi = require("clash-of-clans-api");

const app = express();
app.use(cors());
 let client = clashApi({
   token: COC_API_TOKEN,  Optional, can also use COC_API_TOKEN env variable
 });

 async function searchClan(searchValue) {
   return client
     .clans()
     .withLimit(30)
     .withName(searchValue)
     .fetch()
     .then((response) => {
       return response;
     })
     .catch((error) => {
       console.error(error);
       return error;
     });
 }
 async function showClan() {
   return client
     .clans()
     .withWarFrequency("always")
     .withMinMembers(25)
     .withLimit(30)
     .fetch()
     .then((response) => {
       return response;
     })
     .catch((err) => {
       return err;
     });
 }

 app.get("/", (req, res) => {
   console.log(req.params);
   try {
     showClan().then((response) => {
       res.send(response);
     });
   } catch (error) {
     res.send(error);
   }
 });  end of app.get
 app.get("/:name", (req, res) => {
   console.log(req.params);
   try {
     searchClan(req.params.name).then((response) => {
       res.send(response);
     });
   } catch (error) {
     res.send(error);
   }
 });  end of app.get
 app.listen(5000, () => {
   console.log("Server started on port 5000");
 });

se utiliza .env para el puerto de la express, se implementa en VITE_MY_PROXY
VITE_API_KEY para la llave,
VITE_API_URL es "https://api.clashofclans.com/v1"

-- Test
copiar repositorio, ir al directorio, ajustar .env.
crear un projecto de node.js adjuntar el codigo mostrado anteriormente y ejectutar, (node o nodemon)
finalmente en la carpeta del proyecto,
ejecutar :
npm install

npm run buil

y para pureba, 
npm run dev.


