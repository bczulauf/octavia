class LogoutPage {
    constructor() {}

    load() {
        return spruceAPI.logoutUser().then(() => {
            return this.html = `
                <h2>
                    You are logged out.
                </h2>
                <a href="#home">Take me to the home page!</a>
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