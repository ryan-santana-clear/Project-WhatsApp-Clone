const firebase = require('firebase');
require('firebase/firestore');

export class Firebase {

    constructor(){

        this.init();

    }

    init(){

        const firebaseConfig = {
            apiKey: "AIzaSyBsyQKf_0wPDFvtRyH5CMjiFGULGdzzl4g",
            authDomain: "project-clone-whatsapp.firebaseapp.com",
            projectId: "project-clone-whatsapp",
            storageBucket: "project-clone-whatsapp.appspot.com",
            messagingSenderId: "726106886989",
            appId: "1:726106886989:web:38443592d083611669dd04"
        };
        
        if (!this._initialized) {
            // Initialize Firebase
            const app = initializeApp(firebaseConfig);
            
                firebase.firestore().settings({
                    timestampsInSnapshots: true
                });
            
            this._initialized = true;
        }

    }

    static db(){

        return firebase.firestore();

    }

    static hd(){

        return firebase.storage();

    } 


}