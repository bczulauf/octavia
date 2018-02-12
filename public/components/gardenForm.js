class GardenForm {
    constructor() {
        this.tasks = ["plants", "fence/wall", "pots", "water feature", "vegetable bed", "lawn", "deck", "play area"]
    }

    load () {
        return this.html = `
            <div class="text-center m-btm-lg">
                <h3>Tell us about your design tasks.</h3>
            </div>
            <div class="flex center">
                <form id="garden-form" class="twelve">
                    <div class="flex m-btm-lg radio-buttons">
                        ${this.tasks.map((task) => `<input type="checkbox" class="radio-input" id="${task.split(' ').join('-')}" name="room" value="${task}" /><label for="${task.split(' ').join('-')}" class="radio-label radio-border three h-one col flex align-center center">${task}</label>`).join("")}
                    </div>
                    <div class="flex center">
                        <button id="garden-button" type="submit" class="button button-primary button-lg">Next</button>
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
        document.getElementById("garden-form").addEventListener("submit", this.handler.bind(this), false)
        document.getElementById("garden-button").addEventListener("touchend", this.handler.bind(this), false)
    }

    handler (evt) {
        evt.preventDefault()
        const formData = Util.getFormData(new FormData(evt.target))
        const str = formData ? JSON.stringify(formData) : ""

        sessionStorage.setItem("gardenTasks", str)
        router.navigate("styleForm")
    }
}