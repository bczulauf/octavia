class Header {
    constructor() {}

    load() {
        return this.html = `
            <div class="container flex header-content">
                <a href="#home" class="header-logo">Garden Spruce</a>
                <a href="#about" class="header-link align-right">About Us</a>
                <a href="#portfolio" class="header-link">Portfolio</a>
                ${!currentUser ? `<a href="#login" class="header-link">Login</a>` : `<a href="#chat" class="header-link">${currentUser.email}</a><a href="#logout" class="header-link">Logout</a>`}
            </div>`
    }

    show(el) {
        const header = this.el = document.createElement("header")
        header.className = "header"
        header.innerHTML = this.html
        el.appendChild(header)
    }

    remove() {
        this.el.remove()
    }
}