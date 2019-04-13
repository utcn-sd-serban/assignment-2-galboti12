import { EventEmitter } from "events";

class AnswerModel extends EventEmitter {
    constructor() {
        super();
        this.state = {
            answers: [
                {
                    id: 1,
                    author: "answerer_55",
                    text: "You can bind a click event handler to it using the standard DOM APIs (or a library that abstracts them such as YUI or jQuery).",
                    time: "4/13/2019, 3:04:12 PM"
                },
                {
                    id: 2,
                    author: "answerer_55",
                    text: "place the text in a span or other element with a class <span class=yourClass>text</span> and then use javascript to add an event listener (preferably at the end of your html. for brevity, I'll demonstrate with jQuery, though it could be done with native javascript.",
                    time: "4/13/2019, 3:04:12 PM"
                },
                {
                    id: 3,
                    author: "answerer_55",
                    text: "The 2019 Stack Overflow Developer Survey Results Are In",
                    time: "4/13/2019, 3:04:12 PM"
                }
                
            ],
            newAnswer: {
                id: 0,
                author: "answerer_55",
                text: "",
                time: ""
            },
            nextId: 4
        };
    }

    addAnswer = (text) => {
        this.state = {
            ...this.state,
            answers: [{
                ...this.state.newAnswer,
                id: this.state.nextId,
                text, time: new Date().toLocaleString()
            }].concat(this.state.answers),
            nextId: this.state.nextId + 1
        };
        console.log("AnswerModel addAnswer");
        this.emit("change", this.state);
    }

    changeNewAnswerProperty(property, value) {
        this.state = {
            ...this.state,
            newAnswer: {
                ...this.state.newAnswer,
                [property]: value
            }
        };
        this.emit("change", this.state);
    }
}

const answerModel = new AnswerModel();

export default answerModel;