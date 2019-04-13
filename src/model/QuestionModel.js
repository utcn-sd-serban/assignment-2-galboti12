import { EventEmitter } from "events";

class QuestionModel extends EventEmitter {
    constructor() {
        super();
        this.state = {
            questions: [
                {
                    id: 1,
                    author: "boti",
                    title: "Is there a way to loop through all elements of a vector in parallel in C++? ",
                    text: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
                    time: "2019-03-11 19:11:22",
                    tags: ["mytag", "omg", "asd", "qweert"],
                    answerIds: [1,2]
                },
                {
                    id: 2,
                    author: "admin",
                    title: "How do I build a mixed java/scala project which uses java annotation code generation?",
                    text: "I am creating a mixed scala + java project where the java code uses java annotations for java code generation.                    The java code generation is a requirement of the library I am using (truffle) I have created both an sbt and mill project with separate modules for the java and scala, but when the java is compiled, both build tools produce the following warning:[warn] Could not determine source for class",
                    time: "2019-03-21 19:11:22",
                    tags: ["mytag", "lol", "asd"],
                    answerIds: [2,3]
                },
                {
                    id: 3,
                    author: "who2321",
                    title: "How to control multiple form fields with similar js codes?",
                    text: "I wan to format user input to match money format with js; but I don't know how to apply js codes to more than one filed in a single form. Example of the code i want to ex",
                    time: "2019-04-11 19:14:22",
                    tags: ["mytag", "omg", "lol"],
                    answerIds: [1]
                }
            ],
            newQuestion: {
                id: 0,
                author: "boit_55",
                title: "",
                text: "",
                time: "",
                tags: "",
                answerIds: []
            },
            nextId: 4
        };
    }

    addQuestion = (title, text, tags) => {
        this.state = {
            ...this.state,
            questions: [{
                ...this.state.newQuestion,
                id: this.state.nextId,
                title, text, tags, time: new Date().toLocaleString()
            }].concat(this.state.questions),
            nextId: this.state.nextId + 1
        };
        console.log("QuestionModel addQuestion");
        this.emit("change", this.state);
    }

    changeNewQuestionProperty(property, value) {
        this.state = {
            ...this.state,
            newQuestion: {
                ...this.state.newQuestion,
                [property]: value
            }
        };
        this.emit("change", this.state);
    }
}

const questionModel = new QuestionModel();

export default questionModel;