class AboutPage {
    constructor() {}

    load() {
        return this.html = `
            <div class="splash flex center align-center m-btm-lg">
                <div class="six">
                    <h2>
                        A better way to design your garden.
                    </h2>
                </div>
            </div>
            <div class="container">
                <p>
                    Whether you want a few perfect pots or a breezy backyard oasis, Garden Spruce makes it easy to create your dream garden.
                </p>
            </div>
            `
    }

    show(el) {
        const div = this.el = document.createElement("div")
        div.innerHTML = this.html
        el.appendChild(div)
    }
}