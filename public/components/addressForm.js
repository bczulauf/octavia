class AddressForm {
    constructor() {
    }

    load () {
        return this.html = `
            <div class="text-center m-btm-lg">
                <h3>Where is your garden?</h3>
            </div>
            <div class="flex center">
                <form id="address-form" class="five">
                    <input name="zip" class="inpt block m-btm-lg five text-center" required type="text" placeholder="ZIP" />
                    <div class="flex center">
                        <button id="address-button" type="submit" class="button button-primary button-lg">Next</button>
                    </div>
                </form>
            </div>`
    }

    show (el) {
        const div = this.el = document.createElement("div")
        div.className = "container"
        div.innerHTML = this.html
        el.appendChild(div)
    }

    postShow() {
        document.getElementById("address-form").addEventListener("submit", this.handler.bind(this), false)
        document.getElementById("address-button").addEventListener("touchend", this.handler.bind(this), false)
    }

    handler (evt) {
        evt.preventDefault()
        const formData = Util.getFormData(new FormData(evt.target))
        evt.preventDefault()
        sessionStorage.setItem("gardenLocation",  Util.getFormData(new FormData(this.formElem)).budget)
        router.navigate("gardenForm")
    }
}