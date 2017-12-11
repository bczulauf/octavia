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
                <h3 class="text-center">Our goal</h3>
                <div class="flex center m-btm-lg">
                    <p class="seven">
                        We started Garden Spruce to make it simple and affordable to get a beautifully designed garden. Whether you want a few perfect pots or a breezy backyard oasis, Garden Spruce makes it easy to create your dream garden.
                    </p>
                </div>
                <h3 class="text-center">Our story</h3>
                <div class="flex center m-btm-lg">
                    <p class="seven">
                        Founder Octavia Chambliss created Garden Spruce to make garden design more accessible. She spent over twenty years working as a garden designer in Seattle before launching Garden Spruce in 2017.
                    </p>
                </div>
                <h3 class="text-center">Our designers</h3>
                <div class="flex center">
                    <p class="seven">
                        We have partnered with Seattle's top garden design talent and provide them with the tools, management, and clients to help them build their brands and grow their businesses.
                    </p>
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