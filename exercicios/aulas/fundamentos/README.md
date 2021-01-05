# O que estou aprendendo em fundamentos

## React-dom

- Utilizado para renderizar algo na tela;
- O metodo render() - ele recebe dois parametros. O primeiro parametro é o que você quer renderizar, o segundo é onde você quer renderizar.
- A div root é onde inserimos os elementos

```javascript
import ReactDom from "react-dom";

const el = document.getElementById("root");
ReactDom.render("Olá React", el);
```
