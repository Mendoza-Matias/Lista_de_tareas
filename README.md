# Configuraciones

### Handlebars configuracion de temprates

```js
//handlebar
app.engine('.hbs', engine({
  extname:'.hbs' //Le asigno el nombre a mis archivos
}));
app.set('view engine', '.hbs');

```
### Ruta donde quiero que lea mi archivo

```js
//Le indico la ruta en la cual se encuentran mis vistas
app.set('views',path.join(__dirname,'views'))
```
