export class Character {
    constructor(name, element, description, traits, imageSrc, elementColor) {
        this.name = name;
        this.element = element;
        this.description = description;
        this.traits = traits;
        this.imageSrc = imageSrc;
        this.elementColor = elementColor;
        this.score = 0;
    }

    addScore(points) {
        this.score += points;
    }

    resetScore() {
        this.score = 0;
    }

    getFormattedInfo() {
        return {
            name: this.name,
            element: this.element,
            description: this.description,
            traits: this.traits,
            imageSrc: this.imageSrc,
            elementColor: this.elementColor,
            score: this.score
        };
    }
}
