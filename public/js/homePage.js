class HomePage {
    constructor() {}

    load() {
        return this.html = `
            <div class="flex center m-btm-md">
                <div class="twelve motif" style="background-image: url(imgs/motif4.png)"></div>
            </div>
            <div class="flex center">
                <div class="twelve">
                    <div class="m-btm-md text-center logo">Garden Spruce</div>
                    <h2 class="text-center">Love your garden</h2>
                    <p class="text-center m-btm-lg text-blurb">
                        Work with an amazing local garden designer, starting at just $149.
                    </p>
                </div>
            </div>
            <div class="flex center m-btm-lg">
                <a href="" id="start-button" class="button button-primary button-lg m-btm-lg">Get Started</a>
            </div>
            <div class="flex center no-wrap m-btm-md">
                    <div class="two col frame" style="background-image: url(imgs/one.jpg)"></div>
                    <div class="two col frame" style="background-image: url(imgs/two.jpg)"></div>
                    <div class="two col frame" style="background-image: url(imgs/garden6.jpg)"></div>
                    <div class="two col frame" style="background-image: url(imgs/four.jpg)"></div>
                    <div class="two col frame" style="background-image: url(imgs/five.jpg)"></div>
                    <div class="two col frame" style="background-image: url(imgs/six.jpg)"></div>
                    <div class="two col frame" style="background-image: url(imgs/garden1.jpg)"></div>
                    <div class="two col frame" style="background-image: url(imgs/garden2.jpg)"></div>
                    <div class="two col frame" style="background-image: url(imgs/garden3.jpg)"></div>
                    <div class="two col frame" style="background-image: url(imgs/garden4.jpg)"></div>
            </div>
            <div class="flex center tan">
                <div class="twelve">
                    <h3 class="text-center m-btm-md m-top-lg">How Garden Spruce works</h3>
                    <div class="flex m-btm-lg">
                        <div class="seven m-btm-lg">
                            <div class="flex align-center m-btm-md">
                                <div class="num col">1</div>
                                <p class="six">You tell us about you, your style, and your needs.</p>
                            </div>
                            <div class="flex align-center m-btm-md">
                                <div class="num col">2</div>
                                <p class="six">We match you with a wonderfully talented garden designer in your area.</p>
                            </div>
                            <div class="flex align-center m-btm-md">
                                <div class="num col">3</div>
                                <p class="six">You get a complimentary consult and custom proposal.</p>
                            </div>
                            <div class="flex align-center m-btm-md">
                                <div class="num col">4</div>
                                <p class="six">You purchase a design package and receive a design and plant list.</p>
                            </div>
                            <div class="flex align-center m-btm-md">
                                <div class="num col">5</div>
                                <p class="six">We help you manage and execute your design from plant purchases to implementation.</p>
                            </div>
                        </div>
                        <div class="col one"></div>
                        <div class="col four h-four center-img frame-border" style="background-image: url(imgs/flowers.jpg)"></div>
                    </div>
                </div>
            </div>
            <div class="wrapper">
                <div class="container">
                    <h3 class="text-center m-btm-md">Pricing</h3>
                    <div class="flex text-center">
                        <div class="col four price-box">
                            <h3 class="m-btm-md">Mini design</h3>
                            <h4 class="m-btm-md">$149</h4>
                            <p class="m-btm-lg">Get a quick design sketch for a single space.</p>
                            <div class="flex center">
                                <a href="" id="start-button" class="button button-secondary button-lg">Select mini</a>
                            </div>
                        </div>
                        <div class="col four price-box">
                            <h3 class="m-btm-md">Full design</h3>
                            <h4 class="m-btm-md">$499</h4>
                            <p class="m-btm-lg">Get a full garden design and complete product list.</p>
                            <div class="flex center">
                                <a href="" id="start-button" class="button button-secondary button-lg">Select full</a>
                            </div>
                        </div>
                        <div class="col four price-box">
                            <h3 class="m-btm-md">Consult</h3>
                            <h4 class="m-btm-md">Free</h4>
                            <p class="m-btm-lg">Get a complementary in-person consultation.</p>
                            <div class="flex center">
                                <a href="" id="start-button" class="button button-secondary button-lg">Select consult</a>
                            </div>
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