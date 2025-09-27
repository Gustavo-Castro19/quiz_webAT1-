import { Quiz } from "./quiz.js";
import { Character } from "./char.js";
import { Question } from "./option.js";

export class Game {
    constructor() {
        this.characters = [];
        this.quiz = null;
        this.currentPage = 'welcome-page';
        this.winnerCharacter = null;
        this.initialize();
    }

    initialize() {
        this.createCharacters();
        this.createQuestions();
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
        let idx_count=1;
        const questions = [
            new Question(idx_count, "Em uma situação de perigo, qual seria sua primeira reação?", [
                { text: "Enfrento o perigo de frente com coragem", scores: [3, 1, 2, 0] },
                { text: "Procuro uma solução pacífica e diplomática", scores: [0, 3, 1, 2] },
                { text: "Analiso a situação antes de agir", scores: [1, 2, 3, 0] },
            ]),
            new Question(idx_count++, "Qual ambiente você prefere para relaxar?", [
                { text: "Uma fogueira aconchegante numa noite estrelada", scores: [3, 0, 1, 2] },
                { text: "A beira de um lago tranquilo", scores: [1, 3, 2, 0] },
                { text: "Uma floresta densa e antiga", scores: [0, 1, 3, 2] },
            ]),
            new Question(idx_count++, "Como você lida com conflitos entre amigos?", [
                { text: "Defendo minha posição com firmeza", scores: [3, 0, 2, 1] },
                { text: "Procuro entender ambos os lados", scores: [1, 3, 0, 2] },
                { text: "Ofereço conselhos baseados na experiência", scores: [0, 2, 3, 1] },
            ]),
            new Question(idx_count++, "Qual é seu maior medo?", [
                { text: "Não conseguir proteger quem amo", scores: [3, 2, 1, 0] },
                { text: "Causar sofrimento aos outros", scores: [1, 3, 0, 2] },
                { text: "Perder minhas raízes e tradições", scores: [0, 1, 3, 2] },
            ]),
            new Question(idx_count++, "Em um grupo, você geralmente é:", [
                { text: "O líder que toma as decisões", scores: [3, 0, 2, 1] },
                { text: "O mediador que resolve conflitos", scores: [0, 3, 1, 2] },
                { text: "O conselheiro que orienta o grupo", scores: [1, 2, 3, 0] },
            ]),
            new Question(idx_count++, "Qual atividade mais desperta seu interesse?", [
                { text: "Treinar habilidades de combate", scores: [3, 0, 1, 2] },
                { text: "Estudar artes de cura e medicina", scores: [0, 3, 2, 1] },
                { text: "Explorar ruínas antigas", scores: [1, 0, 3, 2] },
            ]),
            new Question(idx_count++, "Como você vê mudanças em sua vida?", [
                { text: "Encaro como desafios a serem superados", scores: [3, 1, 0, 2] },
                { text: "Me adapto naturalmente às circunstâncias", scores: [1, 3, 2, 0] },
                { text: "Prefiro estabilidade e tradição", scores: [0, 1, 3, 2] },
            ]),
            new Question(idx_count++, "Seu objetivo de vida é:", [
                { text: "Proteger os inocentes e fazer justiça", scores: [3, 2, 1, 0] },
                { text: "Trazer paz e harmonia ao mundo", scores: [1, 3, 0, 2] },
                { text: "Preservar conhecimentos e tradições", scores: [0, 1, 3, 2] },
            ]),
            new Question(idx_count++, "Em momentos de estresse, você:", [
                { text: "Fico mais determinado e focado", scores: [3, 0, 2, 1] },
                { text: "Busco acalmar-me e pensar claramente", scores: [0, 3, 1, 2] },
                { text: "Procuro apoio em valores sólidos", scores: [1, 2, 3, 0] },
            ]),
            new Question(idx_count++, "Qual poder elemental mais atrai você?", [
                { text: "Controlar chamas purificadoras", scores: [3, 0, 1, 2] },
                { text: "Manipular correntes de água curativa", scores: [0, 3, 2, 1] },
                { text: "Comandar a força da terra", scores: [2, 1, 3, 0] },
            ])
        ];
        idx_count=1;
        questions[idx_count].options.push({ text: "Busco liberdade para encontrar nova perspectiva", scores: [2, 0, 1, 3] });
        questions[idx_count++].options.push({ text: "No topo de uma montanha com vista infinita", scores: [2, 0, 1, 3] });
        questions[idx_count++].options.push({ text: "Trago novas ideias para resolver o problema", scores: [2, 1, 0, 3] });
        questions[idx_count++].options.push({ text: "Ficar preso sem poder explorar o mundo", scores: [2, 1, 0, 3] });
        questions[idx_count++].options.push({ text: "O visionário que traz novas perspectivas", scores: [2, 1, 0, 3] });
        questions[idx_count++].options.push({ text: "Viajar e conhecer novas culturas", scores: [2, 1, 0, 3] });
        questions[idx_count++].options.push({ text: "Vejo como oportunidades de crescimento", scores: [0, 2, 1, 3] });
        questions[idx_count++].options.push({ text: "Inspirar outros a alcançarem seus sonhos", scores: [2, 1, 0, 3] });
        questions[idx_count++].options.push({ text: "Procuro novas perspectivas e soluções", scores: [2, 1, 0, 3] });
        questions[idx_count++].options.push({ text: "Voar livre com o poder do vento", scores: [1, 2, 0, 3] });

        this.quiz = new Quiz(questions);
    }

    getCurrentQuestion() {
        return this.quiz.getCurrentQuestion();
    }

    getAnswer(questionIndex) {
        return this.quiz.getAnswer(questionIndex);
    }

    selectOption(optionIndex) {
        this.quiz.addAnswer(this.quiz.currentQuestionIndex, optionIndex);
    }

    nextQuestion() {
        return this.quiz.nextQuestion();
    }

    previousQuestion() {
        return this.quiz.previousQuestion();
    }

    getProgress() {
        return this.quiz.getProgress();
    }

    hasPreviousQuestion() {
        return this.quiz.hasPreviousQuestion();
    }

    hasNextQuestion() {
        return this.quiz.currentQuestionIndex < this.quiz.questions.length - 1;
    }

    isLastQuestion() {
        return this.quiz.currentQuestionIndex === this.quiz.questions.length - 1;
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
        this.winnerCharacter = this.characters.reduce((prev, current) =>
            (current.score > prev.score) ? current : prev
        );
    }

    getWinnerCharacter() {
        return this.winnerCharacter;
    }

    restartGame() {
        this.quiz.reset();
        this.characters.forEach(character => character.resetScore());
        this.winnerCharacter = null;
    }

    getShareText() {
        const character = this.winnerCharacter;
        if (!character) return "";
        return `Descobri que sou ${character.name} no Reino dos Elementos! 🔥💧🌍💨 Elemento: ${character.element}. Que personagem você seria?`;
    }
}
