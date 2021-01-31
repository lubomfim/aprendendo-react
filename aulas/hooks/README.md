# Aprendendo Hooks

- O React Hooks chegaram na versão v16.8 do React e com ele, trouxe funcionalidades para trabalharmos com componentes funcionais. É sempre preferivel que trabalhemos com componentes funcionais, pois o uso da função é mais simples/enxuta, além de se aproximar bastante de como trabalhamos com JS puro.

## useState()

- Antes dos hooks, não conseguiamos trabalhar com estados em componentes funcionais. Apenas era possível receber dados pelas propriedades.
- Com o useState() conseguimos trabalhar com estados dentro do componente funcional.

Primeiro, devemos importar o useState():

```javascript
import React, { useState } from "react";
```

Depois, podemos definir o estado com essa sintaxe:

- O argumento do useState representa o valor inicial.
- Ao chamar useState(), ele retorna um array. Sendo o índice 0 o valor atual e o segundo, uma função que altera o valor atual.

```js
const [valorAtual, setValorAtual] = useState(0);
```

No exemplo a seguir, utilizamos para adicionar ou reduzir o valor do estados ao clicar nos botões:

- O span recebe o valor atual e ao clicarmos nos botões, ele atualiza o valor atual chamando a função setValorAtual e passando a operação como argumento.

```js
<div className="center">
  <span className="text">{valorAtual}</span>
  <div>
    <button className="btn" onClick={() => setValorAtual(valorAtual - 1)}>
      -1
    </button>
    <button className="btn" onClick={() => setValorAtual(valorAtual + 1)}>
      +1
    </button>
  </div>
</div>
```

Temos outra forma de realizar isso, passando uma função dentro do setValorAtual, que recebe o valor atual e você poderá trabalhar esse valor. Dessa forma:

- O argumento current representa o valor atual.

```js
<button
  className="btn"
  onClick={() => setValorAtual((current) => current + 1000)}
>
  +1000
</button>
```

Caso precisemos controlar o estado de um input:

```js
<input type="text" className="input" value={nomeAtual} onChange={e => setNomeAtual(e.target.value)}/>
<span>{nomeAtual}</span>
```

## useEffect()

- Permite executar efeitos colaterais em componentes funcionais! Ou seja, quando você modifica algo e isso gera um efeito colateral, uma mudança. Podemos utilizar essa mudança para alimentar ou modificar outros elementos.
- O useEffect recebe dois paramentros, o primeiro é uma função(callback) que será chamada quando o valor alterar e o segundo parametro é o valor que será assistido.

Nesse exemplo, acompanhamos o valor de number e caso ele seja maior que cinco, mudamos o titulo da página para "Eita!!!":

```javascript
useEffect(
  function () {
    if (number > 5) {
      document.title = "Eita!!!";
    } else {
      document.title = "React App";
    }
  },
  [number]
);
```
