## Estrutura de pastas

### ASSETS

Como o nome diz, contém ativos do nosso projeto. Consiste em imagens e arquivos de estilo. Aqui podemos armazenar nossos estilos globais. Estamos centralizando o projeto para que possamos armazenar os estilos baseados em página ou em componentes aqui. Mas podemos até manter o estilo de acordo com a pasta de páginas ou pasta de componentes também. Mas isso depende do conforto do desenvolvedor.

### COMPONENTES

Componentes são os blocos de construção de qualquer projeto react. Esta pasta consiste em uma coleção de componentes da interface do usuário como botões, modais, entradas, carregador, etc., que podem ser usados ​​em vários arquivos do projeto. Cada componente deve consistir em um arquivo de teste para fazer um teste de unidade, pois será amplamente utilizado no projeto.

### PAGES

Os arquivos na pasta pages indicam a rota do aplicativo react. Cada arquivo nesta pasta contém sua rota. Uma página pode conter sua subpasta. Cada página tem seu estado e geralmente é usada para chamar uma operação assíncrona. Geralmente consiste em vários componentes agrupados

### ROUTES

Esta pasta consiste em todas as rotas da aplicação. Consiste em rotas privadas, protegidas e de todos os tipos. Aqui podemos até chamar nossa sub-rota.

### SERVICE

Esta pasta será adicionada a configuração do axios ou outra biblioteca que possamos consumir uma API, também pode ser criados separadamente arquivos para cada rota consumida na API e suas respectivas configurações

### UTILS

A pasta utils consiste em algumas funções usadas repetidamente que são comumente usadas no projeto. Ele deve conter apenas funções e objetos comuns do js, ​​como opções suspensas, condição regex, formatação de dados etc.
