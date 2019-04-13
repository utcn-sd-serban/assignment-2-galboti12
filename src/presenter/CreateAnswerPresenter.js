import answerModel from "../model/AnswerModel";

class CreateAnswerPresenter {
    onCreate() {
        console.log("CreateAnswerPresenter onCreate");
        answerModel.addAnswer(answerModel.state.newAnswer.text);
        answerModel.changeNewAnswerProperty("text", "");
        //window.location.assign("#/show-question/" + questionId);
    }
    onChange(property, value) {
        answerModel.changeNewAnswerProperty(property, value);
    }
}

const createAnswerPresenter = new CreateAnswerPresenter();

export default createAnswerPresenter;