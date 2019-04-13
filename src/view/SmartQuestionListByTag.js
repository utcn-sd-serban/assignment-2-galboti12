import React, { Component } from "react";
import questionModel from "../model/QuestionModel";
import QuestionList from "./QuestionList";
import stackoverflowPresenter from "../presenter/StackoverflowPresenter";

const mapModelStateToComponentState = (modelState, props) => ({
    questions: modelState.questions.filter(question => question.tags.includes(props.match.params.tag))
})

export default class SmartQuestionListByTag extends Component {
    constructor(props) {
        super(props);
        this.state = mapModelStateToComponentState(questionModel.state, props);
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState, this.props));
        questionModel.addListener("change", this.listener);
    }

    componentDidUpdate(prev) {
        if (prev.match.params.tag !== this.props.match.params.tag) {
            this.setState(mapModelStateToComponentState(questionModel.state, this.props));
        }
    }

    componentWillUnmount() {
        questionModel.removeListener("change", this.listener);
    }

    render() {
        return (
            <QuestionList
                onClickQuestion={stackoverflowPresenter.onClickQuestion}
                questions={this.state.questions}
                searchByTag={stackoverflowPresenter.onSearchByTag}
                tagSearch={"Questions tagged with: " + this.props.match.params.tag} />
        );
    }
}