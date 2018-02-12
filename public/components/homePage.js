class HomePage {
    constructor() {}

    load() {
        return this.html = `
            <div class="container">
                <div class="flex center">
                    <div class="twelve">
                        <div class="m-btm-lg m-top-lg text-center logo">Garden Spruce</div>
                        <h2 class="text-center">Fall in love with your garden.</h2>
                        <p class="text-center m-btm-lg text-blurb">
                            Work with an amazing local garden designer, starting at just $149.
                        </p>
                    </div>
                </div>
                <div class="flex center m-btm-lg">
                    <a href="#addressForm" id="start-button" class="button button-primary button-lg m-btm-lg">Get Started</a>
                </div>
                <div class="flex center no-wrap m-btm-lg">
                    <div class="twelve flex">
                        <div class="four h-four center-img col" style="background-image: url(imgs/garden1.jpg)"></div>
                        <div class="eight col">
                            <div class="flex m-btm-md">
                                <div class="two h-two center-img col" style="background-image: url(imgs/one.jpg)"></div>
                                <div class="two h-two center-img col" style="background-image: url(imgs/two.jpg)"></div>
                                <div class="two h-two center-img col" style="background-image: url(imgs/five.jpg)"></div>
                                <div class="two h-two center-img col" style="background-image: url(imgs/four.jpg)"></div>
                            </div>
                            <div class="flex">
                                <div class="two h-two center-img col" style="background-image: url(imgs/garden2.jpg)"></div>
                                <div class="two h-two center-img col" style="background-image: url(imgs/garden3.jpg)"></div>
                                <div class="two h-two center-img col" style="background-image: url(imgs/garden4.jpg)"></div>
                                <div class="two h-two center-img col" style="background-image: url(imgs/garden5.jpg)"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex center tan m-btm-lg">
                    <div class="twelve">
                        <h3 class="text-center m-btm-lg m-top-lg">How Garden Spruce works</h3>
                        <div class="flex center">
                            <div class="seven m-btm-lg col">
                                <div class="flex align-center m-btm-lg">
                                    <div class="num col">1</div>
                                    <div class="six col">
                                        <h4>You tell us about you.</h4>
                                        <p>We learn about your style and needs and match you with a wonderfully talented garden designer in your area.</p>
                                    </div>
                                </div>
                                <div class="flex align-center m-btm-lg">
                                    <div class="num col">2</div>
                                    <div class="six col">
                                        <h4>Get a complimentary consult.</h4>
                                        <p>You meet with your designer either in-person or over the phone and your designer will create a custom proposal for your project.</p>
                                    </div>
                                </div>
                                <div class="flex align-center m-btm-lg">
                                    <div class="num col">3</div>
                                    <div class="six col">
                                        <h4>Purchase a design package</h4>
                                        <p>You pick the design package that is right for you.</p>
                                    </div>
                                </div>
                                <div class="flex align-center m-btm-lg">
                                    <div class="num col">4</div>
                                    <div class="six col">
                                        <h4>Excecute with ease.</h4>
                                        <p>We help you manage and execute your design from plant purchases to implementation.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex center">
                    <div class="twelve">
                        <h3 class="text-center m-btm-md">Pricing</h3>
                        <div class="flex text-center">
                            <div class="col four price-box m-btm-md">
                                <h3 class="m-btm-md">Mini design</h3>
                                <h4 class="m-btm-md">$149</h4>
                                <p class="m-btm-lg">Get a quick design sketch for a single space.</p>
                                <div class="flex center">
                                    <a href="#addressForm" id="start-button" class="button button-secondary button-lg">Select mini</a>
                                </div>
                            </div>
                            <div class="col four price-box m-btm-md">
                                <h3 class="m-btm-md">Full design</h3>
                                <h4 class="m-btm-md">$499</h4>
                                <p class="m-btm-lg">Get a full garden design and complete product list.</p>
                                <div class="flex center">
                                    <a href="#addressForm" id="start-button" class="button button-secondary button-lg">Select full</a>
                                </div>
                            </div>
                            <div class="col four price-box m-btm-md">
                                <h3 class="m-btm-md">Consult</h3>
                                <h4 class="m-btm-md">Free</h4>
                                <p class="m-btm-lg">Get a complementary in-person consultation.</p>
                                <div class="flex center">
                                    <a href="#addressForm" id="start-button" class="button button-secondary button-lg">Select consult</a>
                                </div>
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