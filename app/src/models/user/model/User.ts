import UserInterface from "../interfaces/UserInterface";

class User implements UserInterface{
    constructor(id: number, firstName: string, lastName: string){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    id: number;
    firstName: string;
    lastName: string;
}

const user1 = new User(1, "Juan Pablo", "Tututi");
const user2 = new User(2, "Yumil", "Flores");
const user3 = new User(3, "Gabriel", "Osorno");

const users = [user1, user2, user3];

export const findAll = () => {
    return users;
}

export default User;