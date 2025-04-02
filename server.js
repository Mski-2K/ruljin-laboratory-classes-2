/*
  📦 Dependy the Importer  
  Zaimportuj wszystkie wymagane moduły: path, express, body-parser, logger oraz routing.  
*/
const config = require("./config");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("./utils/logger");
const productRouter = require("./routing/product");
const logoutRouter = require("./routing/logout");
const killRouter = require("./routing/kill");
const homeRouter = require("./routing/home");
const { STATUS_CODE } = require("./constants/statusCode");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  const {method, url} = req;
  console.log(logger.getInfoLog(method, url));
  next();
});

app.use('/product', productRouter);

app.use('/logout', logoutRouter);

app.use('/kill', killRouter);

app.use('/', homeRouter);

// app.use((req, res) => {
//   res.status(404).render("404 - Not Found");
// });


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