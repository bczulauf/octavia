class ProgressBar {
    constructor(options) {
        this.index = options.index
        this.range = 3
    }

    load() {
        return this.html = `
            <div class="text-center m-btm-md m-top-md">Step ${this.index} of ${this.range}</div>
            <div class="flex m-btm-lg">
                ${this.generateProgressBar()}
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