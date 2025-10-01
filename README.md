# Reino dos Elementos - Sistema Web de Descoberta de Personagens

##  Descrição

Sistema Web interativo que permite ao usuário descobrir qual personagem ele seria no universo fictício "Reino dos Elementos" através de um questionário personalizado.

##  Universo Fictício: Reino dos Elementos

No **Reino dos Elementos**, quatro forças primordiais moldam civilizações inteiras. Cada habitante possui uma conexão especial com um dos elementos: Fogo, Água, Terra ou Ar.

###  Personagens Principais

1. **Ignis, o Senhor das Chamas** (Fogo)
   - Guerreiro impetuoso que domina o poder destrutivo e purificador do fogo
   - Líder nato, corajoso e protetor

2. **Aqua, a Guardiã dos Mares** (Água) 
   - Sábia curandeira que flui como a água
   - Empática, adaptável e pacificadora

3. **Terra, o Protetor Ancestral** (Terra)
   - Guardião sábio e resistente como as montanhas
   - Protetor da natureza e guardião de antigos segredos

4. **Ventus, o Andarilho dos Ventos** (Ar)
   - Espírito livre que dança com o vento
   - Criativo, visionário e aventureiro

##  Funcionalidades

### 1. Página Inicial
- Apresentação do universo fictício "Reino dos Elementos"
- Descrição dos personagens e elementos
- Convite para participar do questionário

### 2. Questionário Interativo
- **10 perguntas** com múltiplas escolhas
- **3 opções por pergunta** 
- Sistema de pontuação oculto para cada personagem
- Barra de progresso visual
- Navegação entre perguntas (anterior/próxima)
- Validação de respostas

### 3. Sistema de Resultado
- Cálculo automático da pontuação total
- Exibição do personagem com maior pontuação
- Informações detalhadas:
  - Nome e elemento do personagem
  - Descrição e características
  - Pontuação obtida
  - Avatar visual
- Opção para reiniciar o jogo
- Funcionalidade de compartilhamento



##  Como Usar
**pre-requisitos** : node.js e npm instalados, navegador moderno (chrome, firefox, edge, etc...), acesso a um emulador-terminal(powershell, bash, zsh, etc... )
1. Após instalar esse repositorio via git, curl ou opção de baixar por zip, rode na pasta onde foi instalado:

```console
foo@bar:~$npm install  
```
2. Depois do npm terminar a instalação use: 

```console
foo@bar:~$npm start  
```
3. Com tudo ordenado a aplicação abrirá no seu PORT 8080 jogue o link que aparecer na tela no seu browser de preferência.

4. Após terminar o uso não esqueca de no seu terminar encerrar o servidor no console: 

```console
foo@bar: <CTRL-C>  
```
## Como Jogar
1. Leia a apresentação do Reino dos Elementos
2. Clique em "Iniciar Jornada" 
3. Responda todas as 10 perguntas
4. Veja seu resultado e descubra seu personagem!
5. (opcionalmente) compartilhe seu resultado pelo botão de compartilhar !!!
6. Use "Jogar Novamente" para reiniciar



## 📂 Estrutura de Arquivos

```
web_at/
├── index.html          # Estrutura HTML principal
├── img/                # pasta com imagens utilizadas em svg 
├── styles.css          # Estilos e design responsivo  
├── main.js             # Lógica de inicialização 
├── classes/            # Pasta com os arquivos .js que definem a classe 
│   ├── game.js         # Classe que controla a lógica do jogo
│   ├── option.js       # Classe que define opções/perguntas
│   ├── quiz.js         # Classe que define comportamento de quiz
│   └── char.js         # Classe que define comportamento de personagem 
└── README.md           # Documentação do projeto
```

