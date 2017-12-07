class FirebaseAPI {
    constructor (firebase) {
        this.firebase = firebase
        this.db = firebase.firestore()
    }
}