class DesignPage {
    constructor() {}

    load() {
        return this.html = `
            <h2>
                Your designs.
            </h2>
            <p>You don't have any designs at this time. <a href="#chat">Return to chat!</a></p>
            `
    }

    show(el) {
        const div = this.el = document.createElement("div")
        div.className = "container"
        div.innerHTML = this.html
        el.appendChild(div)
    }
}