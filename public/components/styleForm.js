class StyleForm {
    constructor() {
        this.items = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"]
    }

    load() {
        return this.html = `
            <div class="flex center">
                <div class="twelve">
                    <h3 class="text-center m-btm-lg">
                        I like these garden styles...
                    </h3>
                    <form id="style-form">
                        <div class="flex m-btm-lg">
                            ${this.items.map((item) => `<input type="checkbox" class="radio-input" id="${item}" name="decor" value="${item}" /><label for="${item}" class="radio-label three col"><div class="full h-three center-img" style="background-image: url(imgs/style/${item}.jpg)"></div></label>`).join("")}
                        </div>
                        <div class="flex center">
                            <button type="submit" id="style-button" class="button button-primary button-lg">Next</button>
                        </div>
                    </div>
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

    postShow() {
        this.formElem = document.getElementById("style-form")
        this.formElem.addEventListener("submit", this.handler.bind(this), false)
        document.getElementById("style-button").addEventListener("touchend", this.handler.bind(this), false)
    }

    handler (evt) {
        evt.preventDefault()
        const formData = Util.getFormData(new FormData(this.formElem)).decor
        const str = formData ? JSON.stringify(formData) : ""

        sessionStorage.setItem("gardenStyle", JSON.stringify(formData))
        router.navigate("budgetForm")
    }
}