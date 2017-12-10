class FirebaseAPI {
    constructor (firebase) {
        this.firebase = firebase
        this.db = firebase.firestore()
    }

    // Users
    addUser (options) {
        const email = options.email
        const firstName = options.firstName

        return firebase.auth().createUserWithEmailAndPassword(email, options.password)
            .then((user) => user.updateProfile({ displayName: firstName }))
            .then(() => {
                const uid = currentUser.uid

                return this.db.collection('users').doc(uid).set({
                    firstName: firstName,
                    lastName: options.lastName,
                    email: email,
                    group: options.group
                })
            })
    }

    loginUser (options) {
        return firebase.auth().signInWithEmailAndPassword(options.email, options.password)
    }

    updateUser (options) {
        return this.db.collection("users").doc(options.userId).update(options.data)
    }

    logoutUser() {
        return firebase.auth().signOut()
    }

    // Messages
    addMessage (options) {
        return this.db.collection("messages").add({
            clientId: options.clientId,
            authorName: options.authorName,
            authorId: options.authorId,
            message: options.message,
            date: new Date(),
            timestamp: this.firebase.firestore.FieldValue.serverTimestamp()
        })
    }
}