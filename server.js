/*
  📦 Dependy the Importer  
  Zaimportuj wszystkie wymagane moduły: path, express, body-parser, logger oraz routing.  
*/
const config = require("./config");
const { requestRouting } = require("./routing/routing");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("./utils/logger");
const productRoutes = require("./routing/product");
const logoutRoutes = require("./routing/logout");
// const killRoutes = require("./routing/kill");
const homeRoutes = require("./routing/home");
const { STATUS_CODE } = require("./constants/statusCode");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  const {method, url} = req;
  console.log(logger.getInfoLog(method, url));
  next();
});

app.use('/product', (req, res, next) => {
  productRoutes.productRouting(req, res);
  next();
});

app.use('/logout', (req, res, next) => {
  const {method} = req;
  logoutRoutes.logoutRouting(method, res);
  next();
});

// app.use('/kill', (req, res, next) => {
//   killRoutes.killRouting(req, res);
//   next();
// });

app.use('/', (req, res, next) => {
  const {method} = req;
  homeRoutes.homeRouting(method, res);
  next();
});

app.

app.listen(config.PORT, () => {
  console.log(`Example app listening on port ${config.PORT}`)
});

/*
  🏗 Structo the Builder  
  Utwórz instancję aplikacji express i zapisz ją w stałej app.  
*/
/*
  🏗 Structo the Builder  
  Zarejestruj middleware body-parser do parsowania ciał formularzy. 
*/
/*
  🏗 Structo the Builder  
  Dodaj middleware logujący informacje o każdym przychodzącym żądaniu.  
*/
/*
  🏗 Structo the Builder  
  Zarejestruj middleware obsługujące poszczególne ścieżki.  
*/
/*
  🏗 Structo the Builder  
    Obsłuż stronę 404 – zwróć plik 404.html i zaloguj błąd.   
*/
/*
  🏗 Structo the Builder  
    Uruchom serwer i nasłuchuj na porcie z config.js.    
*/