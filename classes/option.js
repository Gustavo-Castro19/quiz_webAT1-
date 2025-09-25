export class Question {
    constructor(id, text, options) {
        this.id = id;
        this.text = text;
        this.options = options; 
    }

    getOption(optionIndex) {
        return this.options[optionIndex] || null;
    }

    getAllOptions() {
        return this.options;
    }
}
