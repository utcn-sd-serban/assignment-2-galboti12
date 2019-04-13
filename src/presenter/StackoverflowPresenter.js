import userModel from "../model/UserModel";

class StackoverflowPresenter {
    onCreateQuestion() {
        window.location.assign("#/create-question");
    }
    onCreateUser() {
        window.location.assign('#/sign-up');
    }
    onLogin() {
        window.location.assign('#/login');
    }
    onLogout() {
        console.log("LogoutPresenter onLogout");
        userModel.logout();
    }
    onSearchByTag(tag) {
        console.log("searchByTag" + tag);
        window.location.assign('#/filter-by-tag/' + tag);
    }
    onChangeSearchText(property, value) {
        userModel.changeNewUserProperty(property, value);
    }
    onSearchByText(text) {
        console.log("searchByText" + text);
        window.location.assign('#/filter-by-text/' + text);
    }
    onClickQuestion(id) {
        console.log("clicked Question with id " + id);
        window.location.assign('#/show-question/' + id);
    }
}

const stackoverflowPresenter = new StackoverflowPresenter();

export default stackoverflowPresenter;