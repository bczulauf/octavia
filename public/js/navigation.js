class Navigation {
    constructor(options) {
        this.links = options.links
        this.selectedLink = options.selectedLink
    }

    load() {
        return this.html = `${this.links.map((link) => `<a href="#${link.url}" class="nav-link ${link.url === this.selectedLink ? "nav-link-selected" : ""}">${link.name}</a>`).join("")}`
    }

    show(el) {
        const div = this.el = document.createElement("div")
        div.classList = "nav container"
        div.innerHTML = this.html
        el.appendChild(div)
    }

    remove() {
        this.el.remove()
    }
}