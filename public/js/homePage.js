class HomePage {
    constructor() {}

    load() {
        return this.html = `
            <div class="container">
                <div class="flex">
                    <div class="col five m-top-lg">
                        <h2 class="m-btm-md">Your partner in garden design.</h2>
                        <p class="m-btm-md">
                            Garden Spruce is the simple, affordable design service that will make you fall in love with your garden.
                        </p>
                        <a href="${currentUser ? "#chat" : "#signup"}" id="start-button" class="button button-primary button-lg">${currentUser ? "Go to Dashboard" : "Get Started"}</a>
                    </div>
                    <div class="col one"></div>
                    <div class="col six">
                        <div class="flex">
                            <div class="col three">
                                <img src="imgs/garden1.jpg" class="three m-btm-md" />
                                <img src="imgs/garden3.jpg" class="three" />
                            </div>
                            <div class="col three">
                                <img src="imgs/garden4.jpg" class="three m-btm-md" />
                                <img src="imgs/garden5.jpg" class="three m-btm-md" />
                                <img src="imgs/garden7.jpg" class="three" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="wrapper tan">
                <div class="container">
                    <h3 class="text-center m-btm-md">How it works</h3>
                    <div class="flex m-btm-md">
                        <div class="col six">
                            <img src="imgs/design2.jpg" class="six" />
                        </div>
                        <div class="col six home-info-box">
                            <div class="home-num">1</div>
                            <h4 class="m-btm-sm">Book a consultation</h4>
                            <p class="text-color-md p-serif">
                                Based on the project details you provide, we will hand select one of our designers to meet with you for a complimentary consult.
                            </p>
                        </div>
                    </div>
                    <div class="flex m-btm-md">
                        <div class="col six home-info-box">
                            <div class="home-num">2</div>
                            <h4 class="m-btm-sm">Buy design time</h4>
                            <p class="text-color-md p-serif">
                                After reviewing your free custom proposal from your designer, you can book design time at $80/hr to execute your project.
                            </p>
                        </div>
                        <div class="col six">
                            <img src="imgs/design.jpg" />
                        </div>
                    </div>
                    <div class="flex">
                        <div class="col six">
                            <img src="imgs/design3.jpg" class="six" />
                        </div>
                        <div class="col six home-info-box">
                            <div class="home-num">3</div>
                            <h4 class="m-btm-sm">Design and execute</h4>
                            <p class="text-color-md p-serif">
                                Depending on your scope of work, your designer will provide design plans, pick plants and hardscape, source materials, and manage contractors and installation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="wrapper gray">
                <div class="container">
                    <h3 class="text-center m-btm-md">Pricing</h3>
                    <div class="flex text-center">
                        <div class="col four price-box">
                            <h4 class="m-btm-sm">Free</h4>
                            <p class="text-color-lt p-serif">Get a free in-person design consultation with an emerging design talent.</p>
                        </div>
                        <div class="col four price-box">
                            <h4 class="m-btm-sm">$80/hr</h4>
                            <p class="text-color-lt p-serif">Book time with your designer at $80/hr.</p>
                        </div>
                        <div class="col four price-box">
                            <h4 class="m-btm-sm">25%</h4>
                            <p class="text-color-lt p-serif">Get an average of a 25% discount off retail plants.</p>
                        </div>
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

    remove() {
        this.el.remove()
    }
}