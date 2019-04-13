import { EventEmitter } from "events";

class UserModel extends EventEmitter {
    constructor() {
        super();
        this.state = {
            users: [
                {
                    id: 1,
                    username: "boti",
                    password: "pass",
                    is_admin: false
                },
                {
                    id: 2,
                    username: "root",
                    password: "toor",
                    is_admin: true
                }
            ],
            newUser: {
                id: 3,
                username: "",
                password: "",
                is_admin: false,
                searchText : ""
            },
            loggedInUser: {
                id: -1,
                username: "",
                password: "",
                is_admin: false,
            },
            nextId: 3
        };
    }

    addUser = (username, password) => {
        this.state = {
            ...this.state,
            users: this.state.users.concat([{
                ...this.state.newUser,
                id: this.state.nextId,
                username, password
            }]),
            nextId: this.state.nextId
        };
        console.log("UserModel addUser");
        this.emit("change", this.state);
    }

    changeNewUserProperty(property, value) {
        this.state = {
            ...this.state,
            newUser: {
                ...this.state.newUser,
                [property]: value
            }
        };
        this.emit("change", this.state);
    }

    login(user) {
        this.state = {
            ...this.state,
            loggedInUser: user
        }
        console.log("loggedin " + this.state.loggedInUser.id);
        this.emit("change", this.state);
    }

    logout() {
        this.state = {
            ...this.state,
            loggedInUser: {
                ...this.state.loggedInUser,
                id: -1,
                username: "",
                password: "",
                is_admin: false}
        }
        console.log("logged out");
        this.emit("change", this.state);
    }


}

const userModel = new UserModel();
export default userModel;