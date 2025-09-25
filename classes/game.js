import { Quiz } from "./quiz.js"; 
import { Character } from "./char.js";
import { Question } from "./option.js";

 export class Game {
    constructor() {
        this.characters = [];
        this.quiz = null;
        this.currentPage = 'welcome-page';
        this.initialize();
    }

    initialize() {
        this.createCharacters();
        this.createQuestions();
        this.setupEventListeners();
    }

    createCharacters() {
        this.characters = [
            new Character(
                "Ignis, o Senhor das Chamas",
                "Fogo",
                "Um guerreiro impetuoso que domina o poder destrutivo e purificador do fogo. Líder nato, enfrenta desafios de frente com coragem e determinação inabaláveis.",
                ["Corajoso e determinado", "Líder natural", "Protetor dos inocentes", "Temperamento forte", "Leal aos amigos"],
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3CradialGradient id='fire' cx='50%25' cy='50%25'%3E%3Cstop offset='0%25' stop-color='%23ff4757'/%3E%3Cstop offset='100%25' stop-color='%23c44569'/%3E%3C/radialGradient%3E%3C/defs%3E%3Ccircle cx='100' cy='100' r='90' fill='url(%23fire)'/%3E%3Cpath d='M100 40 L120 80 L160 80 L130 110 L140 150 L100 130 L60 150 L70 110 L40 80 L80 80 Z' fill='%23fff' opacity='0.8'/%3E%3C/svg%3E",
                "#ff4757"
            ),
            new Character(
                "Aqua, a Guardiã dos Mares",
                "Água",
                "Uma sábia curandeira que flui como a água, adaptando-se às circunstâncias. Possui empatia profunda e habilidade de trazer paz aos conflitos através da compreensão.",
                ["Empática e compreensiva", "Habilidades de cura", "Adaptável às situações", "Pacificadora natural", "Intuitiva"],
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3CradialGradient id='water' cx='50%25' cy='50%25'%3E%3Cstop offset='0%25' stop-color='%233742fa'/%3E%3Cstop offset='100%25' stop-color='%232f3542'/%3E%3C/radialGradient%3E%3C/defs%3E%3Ccircle cx='100' cy='100' r='90' fill='url(%23water)'/%3E%3Cpath d='M100 50 Q80 70 80 90 Q80 110 100 130 Q120 110 120 90 Q120 70 100 50' fill='%23fff' opacity='0.8'/%3E%3Ccircle cx='70' cy='120' r='15' fill='%23fff' opacity='0.6'/%3E%3Ccircle cx='130' cy='120' r='15' fill='%23fff' opacity='0.6'/%3E%3C/svg%3E",
                "#3742fa"
            ),
            new Character(
                "Terra, o Protetor Ancestral",
                "Terra",
                "Um guardião sábio e resistente como as montanhas. Protetor da natureza e guardião de antigos segredos, oferece estabilidade e força para aqueles que buscam orientação.",
                ["Protetor da natureza", "Sábio e experiente", "Confiável e leal", "Resistente e forte", "Guardião de segredos"],
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3CradialGradient id='earth' cx='50%25' cy='50%25'%3E%3Cstop offset='0%25' stop-color='%235f27cd'/%3E%3Cstop offset='100%25' stop-color='%23341f97'/%3E%3C/radialGradient%3E%3C/defs%3E%3Ccircle cx='100' cy='100' r='90' fill='url(%23earth)'/%3E%3Cpolygon points='100,60 80,100 120,100' fill='%23fff' opacity='0.8'/%3E%3Cpolygon points='100,100 70,140 130,140' fill='%23fff' opacity='0.6'/%3E%3Cpolygon points='100,140 85,160 115,160' fill='%23fff' opacity='0.4'/%3E%3C/svg%3E",
                "#5f27cd"
            ),
            new Character(
                "Ventus, o Andarilho dos Ventos",
                "Ar",
                "Um espírito livre que dança com o vento. Criativo e visionário, busca constantemente novas experiências e conhecimentos, inspirando outros com sua energia contagiante.",
                ["Espírito aventureiro", "Criativo e inovador", "Comunicativo e carismático", "Livre e independente", "Visionário"],
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3CradialGradient id='air' cx='50%25' cy='50%25'%3E%3Cstop offset='0%25' stop-color='%2300d2d3'/%3E%3Cstop offset='100%25' stop-color='%23006ba6'/%3E%3C/radialGradient%3E%3C/defs%3E%3Ccircle cx='100' cy='100' r='90' fill='url(%23air)'/%3E%3Cpath d='M60 90 Q100 70 140 90 Q100 110 60 90' fill='%23fff' opacity='0.8'/%3E%3Cpath d='M70 110 Q100 90 130 110 Q100 130 70 110' fill='%23fff' opacity='0.6'/%3E%3Cpath d='M80 130 Q100 110 120 130 Q100 150 80 130' fill='%23fff' opacity='0.4'/%3E%3C/svg%3E",
                "#00d2d3"
            )
        ];
    }

    createQuestions() {
        const questions = [
            new Question(1, "Em uma situação de perigo, qual seria sua primeira reação?", [
                { text: "Enfrento o perigo de frente com coragem", scores: [3, 1, 2, 0] },
                { text: "Procuro uma solução pacífica e diplomática", scores: [0, 3, 1, 2] },
                { text: "Analiso a situação antes de agir", scores: [1, 2, 3, 0] },
            ]),
            new Question(2, "Qual ambiente você prefere para relaxar?", [
                { text: "Uma fogueira aconchegante numa noite estrelada", scores: [3, 0, 1, 2] },
                { text: "A beira de um lago tranquilo", scores: [1, 3, 2, 0] },
                { text: "Uma floresta densa e antiga", scores: [0, 1, 3, 2] },
            ]),
            new Question(3, "Como você lida com conflitos entre amigos?", [
                { text: "Defendo minha posição com firmeza", scores: [3, 0, 2, 1] },
                { text: "Procuro entender ambos os lados", scores: [1, 3, 0, 2] },
                { text: "Ofereço conselhos baseados na experiência", scores: [0, 2, 3, 1] },
            ]),
            new Question(4, "Qual é seu maior medo?", [
                { text: "Não conseguir proteger quem amo", scores: [3, 2, 1, 0] },
                { text: "Causar sofrimento aos outros", scores: [1, 3, 0, 2] },
                { text: "Perder minhas raízes e tradições", scores: [0, 1, 3, 2] },
            ]),
            new Question(5, "Em um grupo, você geralmente é:", [
                { text: "O líder que toma as decisões", scores: [3, 0, 2, 1] },
                { text: "O mediador que resolve conflitos", scores: [0, 3, 1, 2] },
                { text: "O conselheiro que orienta o grupo", scores: [1, 2, 3, 0] },
            ]),
            new Question(6, "Qual atividade mais desperta seu interesse?", [
                { text: "Treinar habilidades de combate", scores: [3, 0, 1, 2] },
                { text: "Estudar artes de cura e medicina", scores: [0, 3, 2, 1] },
                { text: "Explorar ruínas antigas", scores: [1, 0, 3, 2] },
            ]),
            new Question(7, "Como você vê mudanças em sua vida?", [
                { text: "Encaro como desafios a serem superados", scores: [3, 1, 0, 2] },
                { text: "Me adapto naturalmente às circunstâncias", scores: [1, 3, 2, 0] },
                { text: "Prefiro estabilidade e tradição", scores: [0, 1, 3, 2] },
            ]),
            new Question(8, "Seu objetivo de vida é:", [
                { text: "Proteger os inocentes e fazer justiça", scores: [3, 2, 1, 0] },
                { text: "Trazer paz e harmonia ao mundo", scores: [1, 3, 0, 2] },
                { text: "Preservar conhecimentos e tradições", scores: [0, 1, 3, 2] },
            ]),
            new Question(9, "Em momentos de estresse, você:", [
                { text: "Fico mais determinado e focado", scores: [3, 0, 2, 1] },
                { text: "Busco acalmar-me e pensar claramente", scores: [0, 3, 1, 2] },
                { text: "Procuro apoio em valores sólidos", scores: [1, 2, 3, 0] },
            ]),
            new Question(10, "Qual poder elemental mais atrai você?", [
                { text: "Controlar chamas purificadoras", scores: [3, 0, 1, 2] },
                { text: "Manipular correntes de água curativa", scores: [0, 3, 2, 1] },
                { text: "Comandar a força da terra", scores: [2, 1, 3, 0] },
            ])
        ];

        questions[1].options.push({ text: "Busco liberdade para encontrar nova perspectiva", scores: [2, 0, 1, 3] });
        questions[2].options.push({ text: "No topo de uma montanha com vista infinita", scores: [2, 0, 1, 3] });
        questions[3].options.push({ text: "Trago novas ideias para resolver o problema", scores: [2, 1, 0, 3] });
        questions[4].options.push({ text: "Ficar preso sem poder explorar o mundo", scores: [2, 1, 0, 3] });
        questions[5].options.push({ text: "O visionário que traz novas perspectivas", scores: [2, 1, 0, 3] });
        questions[6].options.push({ text: "Viajar e conhecer novas culturas", scores: [2, 1, 0, 3] });
        questions[7].options.push({ text: "Vejo como oportunidades de crescimento", scores: [0, 2, 1, 3] });
        questions[8].options.push({ text: "Inspirar outros a alcançarem seus sonhos", scores: [2, 1, 0, 3] });
        questions[9].options.push({ text: "Procuro novas perspectivas e soluções", scores: [2, 1, 0, 3] });
        questions[9].options.push({ text: "Voar livre com o poder do vento", scores: [1, 2, 0, 3] });

        this.quiz = new Quiz(questions);
    }

    setupEventListeners() {
        const startBtn = document.getElementById('start-quiz-btn');

        if (startBtn) {
            startBtn.addEventListener('click', () => {
                this.showPage('quiz-page');
                this.displayCurrentQuestion();
            });
        }  
        const optionButtons = document.querySelectorAll('.option-btn');
        optionButtons.forEach((btn, index) => {
            btn.addEventListener('click', () => this.selectOption(index));
        });

        document.getElementById('prev-question-btn').addEventListener('click', () => {
            this.previousQuestion();
        });

        document.getElementById('next-question-btn').addEventListener('click', () => {
            this.nextQuestion();
        });

        document.getElementById('finish-quiz-btn').addEventListener('click', () => {
            this.calculateResult();
            this.showPage('result-page');
            this.displayResult();
        });

        document.getElementById('restart-quiz-btn').addEventListener('click', () => {
            this.restartGame();
        });

        document.getElementById('share-result-btn').addEventListener('click', () => {
            this.shareResult();
        });
    }

    showPage(pageId) {
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });

        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.add('active');
            this.currentPage = pageId;
        }
    }    
    displayCurrentQuestion() {
        const question = this.quiz.getCurrentQuestion();

        document.getElementById('question-text').textContent = question.text;

        const optionButtons = document.querySelectorAll('.option-btn');
        question.options.forEach((option, index) => {
            if (optionButtons[index]) {
                optionButtons[index].textContent = option.text;
                optionButtons[index].style.display = 'block';
            }
        });

        for (let i = question.options.length; i < optionButtons.length; i++) {
            optionButtons[i].style.display = 'none';
        }

        this.updateProgress();

        this.updateNavigation();

        const savedAnswer = this.quiz.getAnswer(this.quiz.currentQuestionIndex);
        if (savedAnswer !== undefined) {
            this.selectOption(savedAnswer, false);
        } else {
            this.clearSelection();
        }
    }

    selectOption(optionIndex, saveAnswer = true) {
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.classList.remove('selected');
        });

        const selectedButton = document.querySelector(`[data-option="${optionIndex}"]`);
        if (selectedButton) {
            selectedButton.classList.add('selected');
        }

        if (saveAnswer) {
            this.quiz.addAnswer(this.quiz.currentQuestionIndex, optionIndex);
            this.updateProgress();
            this.updateNavigation();
        }
    }

    clearSelection() {
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.classList.remove('selected');
        });
    }

    nextQuestion() {
        if (this.quiz.nextQuestion()) {
            this.displayCurrentQuestion();
        }
    }

    previousQuestion() {
        if (this.quiz.previousQuestion()) {
            this.displayCurrentQuestion();
        }
    }

    updateProgress() {
        const progress = this.quiz.getProgress();
        document.querySelector('.progress-fill').style.width = `${progress}%`;
        document.getElementById('current-question').textContent = this.quiz.currentQuestionIndex + 1;
    }

    updateNavigation() {
        const prevBtn = document.getElementById('prev-question-btn');
        const nextBtn = document.getElementById('next-question-btn');
        const finishBtn = document.getElementById('finish-quiz-btn');

        prevBtn.disabled = !this.quiz.hasPreviousQuestion();

        const currentAnswer = this.quiz.getAnswer(this.quiz.currentQuestionIndex);
        const hasAnswer = currentAnswer !== undefined;

        if (this.quiz.currentQuestionIndex === this.quiz.questions.length - 1) {
            nextBtn.style.display = 'none';
            finishBtn.style.display = hasAnswer ? 'block' : 'none';
        } else {
            nextBtn.style.display = hasAnswer ? 'block' : 'none';
            nextBtn.disabled = !hasAnswer;
            finishBtn.style.display = 'none';
        }
    }

    calculateResult() {
        this.characters.forEach(character => character.resetScore());

        this.quiz.answers.forEach((answerIndex, questionIndex) => {
            const question = this.quiz.questions[questionIndex];
            const option = question.getOption(answerIndex);

            if (option) {
                option.scores.forEach((score, characterIndex) => {
                    if (this.characters[characterIndex]) {
                        this.characters[characterIndex].addScore(score);
                    }
                });
            }
        });

        this.winnerCharacter = this.characters.reduce((prev, current) => {
            return (current.score > prev.score) ? current : prev;
        });
    }

    displayResult() {
        const character = this.winnerCharacter;

        document.getElementById('character-name').textContent = character.name;
        document.getElementById('character-element').textContent = `Elemento: ${character.element}`;
        document.getElementById('character-element').style.backgroundColor = character.elementColor;
        document.getElementById('character-description').textContent = character.description;
        document.getElementById('character-score').textContent = character.score;

        const characterImg = document.getElementById('character-img');
        characterImg.src = character.imageSrc;
        characterImg.alt = character.name;
        characterImg.style.borderColor = character.elementColor;

        const traitsList = document.getElementById('character-traits-list');
        traitsList.innerHTML = '';
        character.traits.forEach(trait => {
            const li = document.createElement('li');
            li.textContent = trait;
            traitsList.appendChild(li);
        });

        document.querySelector('.result-content').classList.add('bounce-in');
    }

    restartGame() {
        this.quiz.reset();
        this.characters.forEach(character => character.resetScore());
        this.showPage('welcome-page');
    }

    shareResult() {
        const character = this.winnerCharacter;
        const shareText = `Descobri que sou ${character.name} no Reino dos Elementos! 🔥💧🌍💨 Elemento: ${character.element}. Que personagem você seria?`;

        if (navigator.share) {
            navigator.share({
                title: 'Reino dos Elementos - Resultado',
                text: shareText,
                url: window.location.href
            });
        } else {
            navigator.clipboard.writeText(shareText).then(() => {
                alert('Resultado copiado para a área de transferência!');
            });
        }
    }
}
