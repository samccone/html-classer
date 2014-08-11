# html-classer

Add html classes to every dom node in a fragment.

    npm i html-classer

### Using

```js
require('html-classer')(fs.readFileSync("wow.html", 'utf8'), {
  klass: "tom-jones"
})
```

> Turns

```html
<p>
<b> ok </b>
</p>
```

**Into**

```html
<p class='tom-jones'>
<b class='tom-jones'> ok </b>
</p>
```

### API

* Options

  * html classer takes a single key value pair of klass: 'class-name'
