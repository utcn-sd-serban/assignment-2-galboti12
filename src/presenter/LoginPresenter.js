import userModel from "../model/UserModel";

class LoginPresenter {
    onChange(property, value) {
        userModel.changeNewUserProperty(property, value);
    }
    onLogin(username, password) {
        console.log("LoginPresenter onLogin");
        var user = userModel.state.users.find(user =>
            (user.username === username && user.password === password));
        if (user !== undefined) {
            userModel.changeNewUserProperty("username", "");
            userModel.changeNewUserProperty("password", "");
            userModel.login(user);
            window.location.assign("#/");
        }
        else alert("Wrong username or password!");
    }
}

const loginPresenter = new LoginPresenter();
export default loginPresenter;