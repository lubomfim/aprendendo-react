# O que estou aprendendo em fundamentos

- O build procura o arquivo index.js.

## Índice

- [React-dom](#React-dom)
- [JSX](#JSX)
- [Referenciando arquivo CSS](#Referenciando-um-arquivo-CSS)
- [Criando nosso primeiro componente](#Criando-nosso-primeiro-componente)
- [Componente com propriedade](#Componente-com-propriedade)
- [React Fragment](#React-Fragment)
- [Uso de Classes](#Uso-de-classe)
- [props.children](#propschildren)
- [Estilizando](#Style)
- [Componentes filhos](#Componentes-filhos)
- [Criando uma lista](#Criando-uma-lista)
- [Desafios](#Desafios)

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
- Quando utilizamos a extensão .jsx, facilita o trabalho com o React, pois a IDE conseguirá indicar possíveis soluções em situações de erro, mas caso queiramos trabalhar com .js, não tem problema.

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

```javascript
ReactDom.render(
  <React.Fragment>
    <Comp />
    <ComParametro titulo="Alunos" nome="Pedro Silva" nota="9" />
    <Fragmento />
  </React.Fragment>,
  document.getElementById("root")
);
```

### Uso de classe

- No React utilizamos o atributo classe como className, diferente do html, que é apenas class.

```javascript
import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="Card">
      <div className="Title">Contéudo</div>
      <div className="Content">{props.titulo}</div>
    </div>
  );
};

export default Card;
```

### props.children

- Com props.children, você consegue pegar o filho do componente que está em App.js. Por exemplo, o filho do primeiro "<Card />" é o "<Sortear />", do segundo é "<Fragmento />".

```javascript
import React from "react";

import Comp from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento.jsx";
import Sortear from "./components/basicos/SorteiarNumero";
import Card from "./components/layout/Card";

const App = (props) => (
  <div id="app">
    <h1>Fundamentos React</h1>
    <Card titulo="Sorteio número aleatório">
      <Sortear min={0} max={60} />
    </Card>
    <Card titulo="React.Fragment">
      <Fragmento />
    </Card>
    <Card titulo="Situação do aluno">
      <ComParametro titulo="Alunos" nome="Pedro Silva" nota="9" />
    </Card>
    <Card titulo="Primeiro componente">
      <Comp />
    </Card>
  </div>
);

export default App;
```

```javascript
import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="Card">
      <div className="Title">{props.titulo}</div>
      <div className="Content">{props.children}</div>
    </div>
  );
};

export default Card;
```

### Style

- Para estilizarmos, utilizamos o atributo style dentro do componente, assim:

```javascript
import "./App.css";
import React from "react";

import Comp from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento.jsx";
import Sortear from "./components/basicos/SorteiarNumero";
import Card from "./components/layout/Card";

const App = (props) => (
  <div id="app">
    <h1>Fundamentos React</h1>
    <div className="container">
      <Card titulo="#04 Sorteio número aleatório" color="lightblue">
        <Sortear min={0} max={60} />
      </Card>
      <Card titulo="#03 React.Fragment" color="lightyellow">
        <Fragmento />
      </Card>
      <Card titulo="#02 Situação do aluno" color="lightgreen">
        <ComParametro titulo="Alunos" nome="Pedro Silva" nota="9" />
      </Card>
      <Card titulo="#01 Primeiro componente" color="orange">
        <Comp />
      </Card>
    </div>
  </div>
);

export default App;
```

```javascript
import React from "react";
import "./Card.css";

const Card = (props) => {
  const style = {
    backgroundColor: props.color || "#F00",
    borderColor: props.border || "white",
  };
  return (
    <div className="Card" style={style}>
      <div className="Title">{props.titulo}</div>
      <div className="Content">{props.children}</div>
    </div>
  );
};

export default Card;
```

- Nesse exemplo, a cor foi passada pela props color e no componente filho é feito a verificação se essa props existe, caso não, ele tem uma cor padrão estabelecida.

### Componentes filhos

- As propriedades não passam de pai para filho de forma automatica, é necessário deixar isso explicito no código.

App.jsx:

```javascript
import "./App.css";
import React from "react";

import Comp from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento.jsx";
import Sortear from "./components/basicos/SorteiarNumero";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";

const App = (props) => (
  <div id="app">
    <h1>Fundamentos React</h1>
    <div className="container">
      <Card titulo="#05 Componentes com filho" color="pink">
        <Familia sobrenome="Ferreira" />
      </Card>
      <Card titulo="#04 Sorteio número aleatório" color="lightblue">
        <Sortear min={0} max={60} />
      </Card>
      <Card titulo="#03 React.Fragment" color="lightyellow">
        <Fragmento />
      </Card>
      <Card titulo="#02 Situação do aluno" color="lightgreen">
        <ComParametro titulo="Alunos" nome="Pedro Silva" nota="9" />
      </Card>
      <Card titulo="#01 Primeiro componente" color="orange">
        <Comp />
      </Card>
    </div>
  </div>
);

export default App;
```

Familia.jsx:

```javascript
import React from "react";
import FamiliaMembro from "./FamiliaMebro";

const Familia = (props) => {
  return (
    <div>
      <FamiliaMembro nome="Pedro" sobrenome={props.sobrenome} />
      <FamiliaMembro nome="Maria" {...props} />
      <FamiliaMembro nome="Lucia" sobrenome="Silva" />
    </div>
  );
};

export default Familia;
```

FamiliaMembro.jxs:

```javascript
import React from "react";

const FamiliaMembro = (props) => {
  return (
    <div>
      {props.nome} <strong>{props.sobrenome}</strong>
    </div>
  );
};

export default FamiliaMembro;
```

- Caso não tenhamos acesso as propriedades do elemento pai, será necessário realizar a seguinte função:

```javascript
import React, { cloneElement } from "react";

const Familia = (props) => {
  return (
    <div>
      {React.Children.map(props.children, (child, i) =>
        cloneElement(child, { ...props, key: i })
      )}
    </div>
  );
};

export default Familia;
```

### Criando uma lista

```javascript
import React from "react";
import alunos from "../../data/alunos";

const ListaAlunos = (props) => {
  const lis = alunos.map((aluno) => {
    const aprovacao = aluno.nota < 5 ? "Reprovado" : "Aprovado";
    return (
      <li key={aluno.id} style={{ marginBottom: "10px" }}>
        {aluno.id}
        {")"} {aluno.nome} tem a nota: <strong>{aluno.nota}</strong> e está <strong>{aprovacao}</strong>
      </li>
    );
  });
  return (
    <div>
      <ul style={{ listStyle: "none" }}>{lis}</ul>
    </div>
  );
};

export default ListaAlunos;
```

```javascript
const Lista = [
  { id: 1, nome: "Ana", nota: 9.2 },
  { id: 2, nome: "Pedro", nota: 8 },
  { id: 3, nome: "Roger", nota: 5.5 },
  { id: 4, nome: "Batiti", nota: 2 },
  { id: 5, nome: "Leonardo", nota: 5 },
  { id: 6, nome: "Adriana", nota: 8.7 },
  { id: 7, nome: "Rubens", nota: 10 },
  { id: 8, nome: "Marcella", nota: 9 },
  { id: 9, nome: "Douglas", nota: 6 },
  { id: 10, nome: "Felippe", nota: 3.2 },
  { id: 11, nome: "Eduardo", nota: 5.4 },
];

export default Lista;
```

### Renderização Condicional

- Nesse parte, criamos um componente que valida com dicionais se a propriedade existe ou não. Fizemos isso de duas maneiras, sendo a primeira validando com ternario diretamente no componente. A outra é criando um arquivo js, que leva uma função que retorna as propriedades do filhos caso existe a propriedade no pai.

```javascript
import React from "react";

const ParOuImpar = (props) => {
  const isPar = props.numero % 2 === 0;
  return <div>{isPar ? <span>Par</span> : <span>Ímpar</span>}</div>;
};

export default ParOuImpar;
```

```javascript
const Se = (props) => {
  if (props.test) {
    return props.children;
  } else {
    return false;
  }
};

export default Se;
```

### Comunicação direta

- A comunicação direta é feita por meio das props. Quando passandos as propriedades de pai para filho por meio de props. Como foi feito até agora nos exercicíos.

### Comunicação indireta

- Quando não há uma referência do filho no pai e o filho precisa acessar as propriedades do pai.
- No exercício, utilizamos uma função no elemento pai e ela é chamada ao clicar no button do elemento filho.

Pai

```javascript
import React from "react";
import IndiretaFilho from "./IndiretaFilho";

const IndiretaPai = (props) => {
  function fornecerInformacoes(nome, idade, nerd) {
    console.log(nome, idade, nerd);
  }

  return (
    <div>
      <div>Pai</div>
      <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
    </div>
  );
};

export default IndiretaPai;
```

Filho

```javascript
import React from "react";

const IndiretaFilho = (props) => {
  return (
    <div>
      <div>Filho</div>
      <button onClick={(e) => props.quandoClicar("João", 53, true)}>
        Fornecer Informações
      </button>
    </div>
  );
};

export default IndiretaFilho;
```

- E essa comunicação pode ser feita de outra forma, com estados.

### Comunicação com estados

- Até a versão 16.8, não era possível ter estados em componentes funcionais. Apenas em componentes de classe.
- A partir do useState podemos utilizar estados no nosso componente. useState retorna um array, sendo o primeiro elemento o valor e a segunda é uma função utilizada para alterar o valor.

```javascript
import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

const IndiretaPai = (props) => {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState(0);
  const [nerd, setNerd] = useState(false);

  function fornecerInformacoes(nome, idade, nerd) {
    setNome(nome);
    setIdade(idade);
    setNerd(nerd);
  }

  return (
    <div>
      <div>Pai</div>
      <div>{nome}</div>
      <div>{idade}</div>
      <div>{nerd ? "Vdd" : ""}</div>
      <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
    </div>
  );
};

export default IndiretaPai;
```

Filho

```javascript
import React from "react";

const IndiretaFilho = (props) => {
  const gerarIdade = parseInt(Math.random() * 20) + 50;
  const gerarNerd = () => Math.random() > 0.5;

  return (
    <div>
      <div>Filho</div>
      <button
        onClick={(_) => props.quandoClicar("João", gerarIdade, gerarNerd)}
      >
        Fornecer Informações
      </button>
    </div>
  );
};

export default IndiretaFilho;
```

### Componentes Controlados

- Entradas como "<input />" controlam o valor de si próprio e ele mesmo salvo o seu valor. E é indicado que esses elementos sejam controlados pelo React e para isso acontecer, podemos guardar a entrada do úsuario no seu estado sempre que ocorrem uma mudança. No exemplo a seguir, foi utilizado o evento onChange no input para que sempre que houver uma mudança na sua entrada, ele chame a função que atualiza o estado do elemento.
- Se você quer que esse input seja apenas de leitura, deve adicionar um readOnly.
- Com componentes controlados, você consegue controlar o valor do estado do elemento.
- Se passarmos undefined como valor, ele deixa de ser controlado e avisar erro.

```javascript
import React, { useState } from "react";
import "./Input.css";

const Input = (props) => {
  const [valor, setValor] = useState("inicial");

  function mudarValor(e) {
    setValor(e.target.value);
  }
  return (
    <div className="input">
      <input value={valor} onChange={mudarValor} />
      <input value={valor} readOnly />
      <input value={undefined} />
    </div>
  );
};

export default Input;
```

### Componentes baseados em classe

- Componentes criados com a sintaxe de classe do ES6.
- Você possuí todos os métodos de ciclos de vidas.

```javascript
import React, { Component } from "react";

class Contador extends Component {
  render() {
    return <div>Olá</div>;
  }
}

export default Contador;
```

- setState é utilizado para alterar o state inicial
- nem sempre o this aponta para o objeto atual e é disponibilizado diversas maneiras de apontar o this para o objeto correto. São elas:

```javascript
// usando constructor

class Testando extends Component {
  constructor(props) {
    super(props)

    this.funcao = this.funcao.bind(this)
  }
}

// usando arrow function no corpo do componente - a mais simples :)

funcao = () => { this.setState([/* código */]) }

// usando arrow function na chamada da função

funcao() { this.setState ({/* código */})}

<button onClick={_ => this.funcao()}><button/>

```

## Desafios

### Número Aleatório

- Criar um componente que sorteie um número entre um máximo e um mínimo.

Resolução:

```javascript
import React from "react";

import Comp from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento.jsx";
import Sortear from "./components/basicos/SorteiarNumero";

const App = (props) => (
  <div id="app">
    <h1>Fundamentos React</h1>
    <Sortear min={1} max={60} />
    <Fragmento />
    <ComParametro titulo="Alunos" nome="Pedro Silva" nota="9" />
    <Comp />
  </div>
);

export default App;
```

```javascript
import React from "react";

const Sortear = (props) => {
  const { min, max } = props;
  const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <div>
      <h2>Valor Aleatório</h2>
      <p>
        <strong>Valor Mínimo: </strong>
        {min}
      </p>
      <p>
        <strong>Valor Máximo: </strong>
        {max}
      </p>
      <p>
        <strong>Valor Sorteado: </strong>
        {numeroAleatorio}
      </p>
    </div>
  );
};

export default Sortear;
```

### Criando uma tabela

- O desafio era criar uma tabela a partir de um arquivo javascript com uma lista:

```javascript
import "./TabelaProdutos.css";
import produtos from "../../data/produtos";
import React from "react";

const TabelaProduto = (props) => {
  const tr = produtos.map((elemento) => {
    return (
      <tr key={elemento.id}>
        <td>{elemento.id}</td>
        <td>{elemento.nome}</td>
        <td>{`${elemento.preco.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}`}</td>
      </tr>
    );
  });
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>{tr}</tbody>
    </table>
  );
};

export default TabelaProduto;
```

```javascript
const produtos = [
  { id: 1, preco: 200, nome: "Escrivaninha" },
  { id: 2, preco: 4000, nome: "Celular" },
  { id: 3, preco: 6000, nome: "Notebook Gamer" },
  { id: 4, preco: 140, nome: "Display Celular" },
  { id: 5, preco: 50, nome: "Carregador" },
  { id: 6, preco: 25, nome: "Caderno 25 matérias" },
  { id: 7, preco: 420, nome: "Caixa de agua" },
  { id: 8, preco: 20, nome: "Cimento" },
  { id: 9, preco: 7.5, nome: "Capinha de Celular" },
  { id: 10, preco: 1000, nome: "Celular Android" },
  { id: 11, preco: 2.0, nome: "Bala" },
];

export default produtos;
```
