class WelcomePage {
    constructor() {
    }

    load(options) {
        const uid = options.params[1]
        return firebase.firestore().collection("users").doc(uid).get().then((doc) => {
            return this.html = `
                <div class="flex center">
                    <div class="eight">
                        <h3 class="text-center">
                            <span class="capitalize">${doc.data().name}</span>, meet your stylist.
                        </h3>
                        <p class="text-center">You have been matched with <span class="bold capitalize">${doc.data().stylist}</span></p>
                        <p class="m-btm-lg text-center"><span class="capitalize">${doc.data().stylist}</span> will pick 3 different pieces just for you. Look for an email soon with a link to see your items.</p>
                    </div>
                </div>
                `
        })
    }

    show(el) {
        const div = this.el = document.createElement("div")
        div.className = "container"
        div.innerHTML = this.html
        el.appendChild(div)
    }
}