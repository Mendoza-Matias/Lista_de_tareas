# Configuraciones

### Handlebars configuracion de temprates

```js
app.set('views',path.join(__dirname,'views'))

app.engine('.hbs', engine({
    defaultLayout:'home',
    layoutsDir:path.join(app.get('views'),'layouts'),
    extname:'.hbs'
    
}));
app.set('view engine', '.hbs');

```