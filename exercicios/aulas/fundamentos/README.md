# O que estou aprendendo em fundamentos

- O build procura o arquivo index.js.

## Índice

- [React-dom]()
- [JSX]()
- [Referenciando arquivo CSS]()
- [Criando nosso primeiro componente]()
- [Componente com propriedade]()

## Aulas

### React-dom

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

### JSX

- Sintaxe JSX, parece html, mas é código javascript que será renderizado no HTML.
- Sempre importar o react quando for usar sintaxe JSX.
- Quando utilizamos a extensão .jsx, facilita o trabalho com o React, pois a IDE conseguirá indiciar possíveis soluções e caso de erro, mas caso queiramos trabalhar com .js, não tem problema.

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

### Referenciando um arquivo CSS

- Criamos um arquivo CSS com o mesmo nome do arquivo JSX/JS, assim, será mais fácil a criação de componentes.

```javascript
import "./index.css"; // import relativo, pois só precisamos do arquivo
import ReactDom from "react-dom";
import React from "react";
```

### Criando nosso primeiro componente

- Criamos uma pasta chamada 'components' dentro de src, depois criamos uma subpasta chamada 'basicos'. Utilizamos essas estrutura para organizar melhor, já que trabalharemos com muitos componentes.
- É recomendado nomear os componentes com uma letra maiúscula. Pois, no JSX, as letras minúsculas são consideradas tags, e não, componentes.
- Exportamos nosso componente com 'export default' e importamos dentro do index.js.
- Nesses exemplos, temos componentes funcionais, ou seja, são baseados em funções.
- Renderizamos nosso componente dessa forma:

O nome da função não influencia na exportação, pois utilizaremos o nome da variável da importação (não estamos utilizando <strong>JSX</strong> ainda, o arquivo é js):

```javascript
export default function Primeiro() {
  return "Primeiro Componente";
}
```

No index.js:

```javascript
import "./index.css"; // import relativo, pois só precisamos do arquivo
import ReactDom from "react-dom";
import React from "react";

import Comp from "./components/basicos/Primeiro";

ReactDom.render(
  <div>
    <Comp />
  </div>,
  document.getElementById("root")
);
```

Quando temos mais de um elemento, é comum colocarmos dentro de uma expressão demilitada por parênteses (Utilizando <strong>JSX</strong>):

```javascript
import React from "react";

export default function Primeiro() {
  const msg = "Seja bem vinde!";
  return (
    <div>
      <h2>Primeiro Componente</h2>
      <p>{msg}</p>
    </div>
  );
}
```

### Componente com propriedade

- Propriedades são somente leituras, ou seja, não podemos alterar os valores das propriedades. Podemos tratar o valor em uma nova variavel.
- Passamos as propriedades na chamada do componente no index.js, como o exemplo:

```javascript
import "./index.css"; // import relativo, pois só precisamos do arquivo
import ReactDom from "react-dom";
import React from "react";

import Comp from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";

ReactDom.render(
  <div className="app">
    <Comp />
    <ComParametro titulo="Alunos" nome="Pedro Silva" nota="9" />
  </div>,
  document.getElementById("root")
);
```

- E o componente recebe as propriedades como argumentos da função(que é um objeto) e acessamos ela dessa forma:

```javascript
import React from "react";

export default function ComParametro(props) {
  const status = props.nota >= 7 ? "Aprovado" : "Recuperação";
  return (
    <div>
      <h2>{props.titulo}</h2>
      <p>
        {props.nome}, sua nota é {props.nota} e você está {status}
      </p>
    </div>
  );
}
```

```javascript
// Pedro Silva, sua nota é 9 e você está Aprovado
```

### React Fragment

- É utilizado para rederizarmos mais de um elemento sem que precisemos encapsular eles em uma tag.
- Caso não utilizemos uma tag ou o React.Fragment, retornará um erro sobre isso.
