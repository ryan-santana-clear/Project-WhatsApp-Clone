import { ClassEvent } from "../util/ClassEvent";
import firebase from "./../util/Firebase";

export class User extends ClassEvent {

    static getRef(){

        return firebase.db().collection('/users');

    }

    static findByEmail(email){

        return User.getRef().doc(email);

    }

}