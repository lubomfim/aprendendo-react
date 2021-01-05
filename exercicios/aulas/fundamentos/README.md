# O que estou aprendendo em fundamentos

## React-dom

- Utilizado para renderizar algo na tela;
- O metodo render() recebe dois parâmetros. O primeiro parâmetro é o que você quer renderizar, o segundo é onde você quer renderizar;
- A div de classe root é onde inserimos os elementos;
- Nesse exemplo, não é utilizado React, e sim, o React-dom e pegamos o elemento com Javascript junto:

```javascript
import ReactDom from "react-dom";

const el = document.getElementById("root");
ReactDom.render("Olá React", el);
```

E uma outra forma de realizar isso:

```javascript
import ReactDom from "react-dom";

ReactDom.render("Olá React", document.getElementById("root"));
```

## JSX

- Sintaxe JSX, parece html, mas é código javascript que será renderizado no HTML.
- Sempre importar o react quando for usar sintaxe JSX.

```javascript
import ReactDom from "react-dom";
import React from "react";

ReactDom.render(<div>Olá React</div>, document.getElementById("root"));
```

Exemplo utilizando JSX utilizando uma variavel:

```javascript
import ReactDom from "react-dom";
import React from "react";

const tag = <strong>Olá React!</strong>;

ReactDom.render(<div>{tag}</div>, document.getElementById("root"));
```

## Referenciando um arquivo CSS
