class Footer {
    constructor() {}

    load() {
        return this.html = `
            <div class="container flex footer-content">
                <div class="footer-logo">Garden Spruce</div>
                <div class="align-right"></div>
            </div>`
    }

    show(el) {
        const footer = this.el = document.createElement("div")
        footer.className = "footer"
        footer.innerHTML = this.html
        el.appendChild(footer)
    }

    remove() {
        this.el.remove()
    }
}