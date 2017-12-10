class AddressForm {
    constructor() {
    }

    load () {
        return this.html = `
            <div class="text-center m-btm-lg">
                <h3>Where is your garden?</h3>
                <p>We will find the perfect designer for you in your area.</p>
            </div>
            <div class="flex center">
                <form id="address-form" class="five">
                    <div class="flex">
                        <input name="address" class="inpt block m-btm-md four col" type="text" placeholder="Street address" />
                        <input name="zip" class="inpt block m-btm-md one col" type="text" placeholder="ZIP" />
                    </div>
                    <button id="address-button" type="submit" class="button button-primary button-lg">Next</button>
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
        spruceAPI.updateUser({ userId: currentUser.uid, data: formData }).then((user) => {
            router.navigate("garden")
        })
    }
}