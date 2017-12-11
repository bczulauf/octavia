class PortfolioPage {
    constructor() {}

    load() {
        return this.html = `
            <div class="container">
                <h3 class="text-center m-btm-lg">Our portfolio</h3>
                <div class="flex">
                    <div class="eight col">
                        <img src="imgs/port1.jpg" class="eight"/>
                    </div>
                    <div class="four col">
                        <h4 class="m-btm-sm">Modern Social</h4>
                        <p class="p-serif">A full garden redesign transforms a backyard into a place to enjoy and entertain all year long.</p>
                    </div>
                </div>
            </div>
            `
    }

    show(el) {
        const div = this.el = document.createElement("div")
        div.innerHTML = this.html
        el.appendChild(div)
    }
}