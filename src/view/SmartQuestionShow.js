import React, { Component } from "react";
import questionModel from "../model/QuestionModel";
import answerModel from "../model/AnswerModel";
import stackoverflowPresenter from "../presenter/StackoverflowPresenter";
import Question from "./Question";
import AnswerList from "./AnswerList";
import CreateAnswer from "./CreateAnswer";
import createAnswerPresenter from "../presenter/CreateAnswerPresenter";

const mapModelStateToComponentState = (modelState, answerModelState, props) => ({
    question: modelState.questions.find(q => q.id == props.match.params.id),
    answers: answerModelState.answers.filter(a => modelState.questions.find(q => q.id == props.match.params.id).answerIds.indexOf(a.id) > -1),
    newAnswer: answerModelState.newAnswer
})

export default class SmartQuestionListByText extends Component {
    constructor(props) {
        super(props);
        this.state = mapModelStateToComponentState(questionModel.state, answerModel.state, props);
        this.listener = (modelState, answerModelState) => this.setState(mapModelStateToComponentState(modelState, answerModelState, this.props));
        questionModel.addListener("change", this.listener);
    }

    componentDidUpdate(prev) {
        if (prev.match.params.id !== this.props.match.params.id) {
            this.setState(mapModelStateToComponentState(questionModel.state, answerModel.state, this.props));
        }
    }

    componentWillUnmount() {
        questionModel.removeListener("change", this.listener);
    }

    render() {
        return (
            <div>
                <Question
                    question={this.state.question}
                    searchByTag={stackoverflowPresenter.onSearchByTag} />
                <CreateAnswer text={this.state.newAnswer.text}
                    onCreate={createAnswerPresenter.onCreate}
                    onChange={createAnswerPresenter.onChange} />
                <AnswerList answers={this.state.answers} />
            </div>
        );
    }
}