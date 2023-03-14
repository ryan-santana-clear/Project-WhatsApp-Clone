import firebase from "./../util/Firebase";
import { Model } from "./Model";

export class User extends Model {

    constructor(id){

        super();

        if (id) this.getById(id);

    }

    get name() { return this._data.name; }
    set name(value) { this._data.name = value; }

    get email() { return this._data.name; }
    set email(value) { this._data.name = value; }

    get photo() { return this._data.name; }
    set photo(value) { this._data.name = value; }


    getById(id){
        
        return new Promisse((s,f)=>{

            User.findByEmail(id).onSnapshot(doc=>{

                this.fromJSON(doc.data());

                s(doc);

            });

        });

    }

    save(){

        return User.findByEmail(this.email).set(this.toJSON());

    }

    static getRef(){

        return firebase.db().collection('/users');

    }

    static findByEmail(email){

        return User.getRef().doc(email);

    }

}