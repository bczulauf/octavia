class UserForm {
    constructor() {}

    load() {
        return this.html = `
            <h3 class="text-center m-btm-lg">
                Sign up and meet your garden designer!
            </h3>
            <div class="flex center">
                <div class="six">
                    <form id="user-form">
                        <div class="text-center"><b>Name</b></div>
                        <input type="text" class="inpt block six m-btm-lg text-center col" name="name" placeholder="Your name" required/>
                        <div class="text-center"><b>Email</b></div>
                        <input type="email" class="inpt block six m-btm-lg text-center col" name="email" placeholder="Email" required/>
                        <div class="text-center"><b>Password</b></div>
                        <input type="password" class="inpt block six m-btm-lg text-center col" name="password" placeholder="Password" required/>
                        <div class="flex center">
                            <button type="submit" class="button button-primary button-lg" id="user-button">Sign up</button>
                        </div>
                    </form>
                </div>
            </div>
            `
    }

    show(el) {
        const div = this.el = document.createElement("div")
        div.className = "container"
        div.innerHTML = this.html
        el.appendChild(div)
    }

    postShow() {
        this.formElem = document.getElementById("user-form")
        this.formElem.addEventListener("submit", this.handler.bind(this), false)
        document.getElementById("user-button").addEventListener("touchend", this.handler.bind(this), false)
    }

    handler (evt) {
        evt.preventDefault()
        const formData = Util.getFormData(new FormData(this.formElem))
        const email = formData.email

        firebase.auth().createUserWithEmailAndPassword(email, formData.password).then((firebaseUser) => {
            const uid = this.uid = firebaseUser.uid
            const stylist = "octavia"

            return firebase.firestore().collection('users').doc(uid).set({
                uid: uid,
                name: formData.name,
                email: email,
                stylist: stylist,
                status: "1",
                created: firebase.firestore.FieldValue.serverTimestamp()
            })
        })
        .then((snapshot) => {
            return firebase.firestore().collection("onboards").doc(this.uid).set({
                uid: this.uid,
                budget: sessionStorage.getItem("gardenBudget"),
                zip: sessionStorage.getItem("gardenZip"),
                style: sessionStorage.getItem("gardenStyle") && JSON.parse(sessionStorage.getItem("gardenStyle")) || "",
                tasks: sessionStorage.getItem("gardenTasks") && JSON.parse(sessionStorage.getItem("gardenTasks")) || ""
            })
        })
        .then(() => sessionStorage.clear())
        .then(() => {
            return router.navigate("welcome/" + this.uid)
        })
        .catch(function(error) {
            alert(error.message)
        })
    }

    remove() {
        this.el.remove()
    }
}