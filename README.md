# Reino dos Elementos - Sistema Web de Descoberta de Personagens

## 📝 Descrição

Sistema Web interativo que permite ao usuário descobrir qual personagem ele seria no universo fictício "Reino dos Elementos" através de um questionário personalizado.

## 🌟 Universo Fictício: Reino dos Elementos

No **Reino dos Elementos**, quatro forças primordiais moldam civilizações inteiras. Cada habitante possui uma conexão especial com um dos elementos: Fogo, Água, Terra ou Ar.

### 🔥 Personagens Principais

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

## 🚀 Funcionalidades

### 1. Página Inicial
- Apresentação do universo fictício "Reino dos Elementos"
- Descrição dos personagens e elementos
- Convite para participar do questionário

### 2. Questionário Interativo
- **10 perguntas** com múltiplas escolhas
- **3-4 opções por pergunta** (algumas perguntas têm opção extra)
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

## 🛠️ Tecnologias Utilizadas

### HTML5
- Estrutura semântica
- Múltiplas seções (páginas)
- Elementos de formulário interativos

### CSS3
- Design responsivo
- Animações e transições
- Gradientes e efeitos visuais
- Grid e Flexbox para layout
- Media queries para diferentes dispositivos

### JavaScript ES6+
- **Orientação a Objetos** com classes:
  - `Character`: Representa um personagem
  - `Question`: Representa uma pergunta
  - `Quiz`: Gerencia o questionário
  - `Game`: Controla todo o jogo
- **Manipulação do DOM**
- **Event Listeners** para interações
- **Estruturas condicionais** e **loops**
- **Arrays e objetos** para dados
- **Arrow functions** e funções tradicionais

## 📋 Requisitos Atendidos

✅ **Interação com o DOM**: Recuperação e atualização de dados do HTML
✅ **Event Listeners**: Cliques, botões e ações do usuário  
✅ **Funções**: Básicas e arrow functions
✅ **Estruturas condicionais**: if/else, operador ternário
✅ **Laços de repetição**: forEach, for loops
✅ **Arrays e objetos**: Manipulação de dados estruturados
✅ **Orientação a objetos**: Classes e métodos
✅ **10 perguntas** com sistema de pontuação
✅ **3+ opções por pergunta**
✅ **Sistema de pontuação** oculto
✅ **Cálculo de resultado** baseado em pontuação
✅ **Página de resultado** com detalhes do personagem
✅ **Funcionalidade de restart**

## 🎯 Como Usar

1. Abra o arquivo `index.html` no navegador
2. Leia a apresentação do Reino dos Elementos
3. Clique em "Iniciar Jornada" 
4. Responda todas as 10 perguntas
5. Veja seu resultado e descubra seu personagem!
6. Use "Jogar Novamente" para reiniciar

## 📱 Design Responsivo

O sistema se adapta a diferentes tamanhos de tela:
- **Desktop**: Layout em grid com design completo
- **Tablet**: Ajustes de espaçamento e tamanho
- **Mobile**: Layout em coluna única otimizado

## 🎨 Características Visuais

- **Tema**: Místico/fantástico com elementos naturais
- **Cores**: Gradientes representando os elementos
- **Animações**: Transições suaves e efeitos hover
- **Tipografia**: Hierarquia clara e legibilidade
- **Avatares**: SVGs personalizados para cada personagem

## 📂 Estrutura de Arquivos

```
web_at/
├── index.html          # Estrutura HTML principal
├── styles.css          # Estilos e design responsivo  
├── script.js           # Lógica JavaScript OOP
└── README.md          # Documentação do projeto
```

## 🧪 Sistema de Pontuação

Cada opção de pergunta possui pontuação específica para cada personagem:
- **Pontuação máxima**: 30 pontos (3 pontos × 10 perguntas)
- **Pontuação mínima**: 0 pontos
- **Cálculo**: Soma das pontuações de todas as respostas
- **Resultado**: Personagem com maior pontuação total

## 🌐 Compatibilidade

- ✅ Chrome 80+
- ✅ Firefox 75+  
- ✅ Safari 13+
- ✅ Edge 80+
- ✅ Dispositivos móveis (iOS/Android)

---

**Desenvolvido como projeto acadêmico demonstrando conhecimentos em HTML, CSS e JavaScript com foco em orientação a objetos e interação DOM.**