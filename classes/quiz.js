export class Quiz {
    constructor(questions) {
        this.questions = questions;
        this.currentQuestionIndex = 0;
        this.answers = [];
    }

    getCurrentQuestion() {
        return this.questions[this.currentQuestionIndex];
    }

    nextQuestion() {
        if (this.hasNextQuestion()) {
            this.currentQuestionIndex++;
            return true;
        }
        return false;
    }

    previousQuestion() {
        if (this.hasPreviousQuestion()) {
            this.currentQuestionIndex--;
            return true;
        }
        return false;
    }

    hasNextQuestion() {
        return this.currentQuestionIndex < this.questions.length - 1;
    }

    hasPreviousQuestion() {
        return this.currentQuestionIndex > 0;
    }

    isComplete() {
        return this.answers.length === this.questions.length;
    }

    addAnswer(questionIndex, optionIndex) {
        this.answers[questionIndex] = optionIndex;
    }

    getAnswer(questionIndex) {
        return this.answers[questionIndex];
    }

    reset() {
        this.currentQuestionIndex = 0;
        this.answers = [];
    }

    getProgress() {
        return Math.round((this.answers.filter(answer => answer !== undefined).length / this.questions.length) * 100);
    }
}
