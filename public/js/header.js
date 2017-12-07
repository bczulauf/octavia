class Header {
    constructor() {}

    load() {
        return this.getUser()
        .then((user) => {
            return this.html = `
                <div class="container flex header-content">
                    <a href="#home" class="header-logo">Garden Spruce</a>
                    <a href="#about" class="header-link align-right">About Us</a>
                    <a href="#portfolio" class="header-link">Portfolio</a>
                    ${!user ? `<a href="#login" class="header-link">Login</a>` : `<div class="header-user">${user.email}</div><a href="#logout" class="header-link">Logout</a>`}
                </div>`
        })
    }

    show(el) {
        const header = this.el = document.createElement("header")
        header.className = "header"
        header.innerHTML = this.html
        el.appendChild(header)
    }

    getUser () {
        return new Promise((resolve, reject) => {
            const unsubscribe = firebase.auth().onAuthStateChanged( (user) => {
                firebase.auth().onAuthStateChanged((user) => {
                    resolve(user)
                })
                unsubscribe()
            })
        })
    }

    remove() {
        this.el.remove()
    }
}