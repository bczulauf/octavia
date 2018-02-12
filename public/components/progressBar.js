class ProgressBar {
    constructor(options) {
        this.index = options.index
        this.range = 5
    }

    load() {
        return this.html = `
            <div class="flex m-btm-lg m-top-lg center">
                <div class="flex twelve">
                    ${this.generateProgressBar()}
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

    generateProgressBar() {
        let str = ""
        for (let i = 0; i < this.range; i++) {
            str = str + `<div class="progress-span ${this.index > i ? "progress" : ""}"></div>`
        }
        return str
    }

    remove() {
        this.el.remove()
    }
}