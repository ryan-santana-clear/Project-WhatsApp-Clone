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
        
        if (!window._initializedFirebase){
            // Initialize Firebase
            firebase.initializeApp(firebaseConfig);
            
                firebase.firestore().settings({
                    timestampsInSnapshots: true
                });
                if(firebase){
                    console.log("Firebase Status: Running");
                }
            window._initializedFirebase = true;
        }

    }

    static db(){

        return firebase.firestore();

    }

    static hd(){

        return firebase.storage();

    } 

    initAuth(){

        return new Promise((s, f)=>{

           /* let provider = new firebase.auth.GoggleAuthProvider();*/
            const provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider)
            .then(result => {

                let token = result.credential.accessToken;
                let user = result.user;

                s({
                    user, 
                    token
                });

            })
            .catch(err=>{
                f(err);
            });

        });

    }

}