class BudgetForm {
    constructor() {
        this.budget = ["Below $2k", "$2-10k", "$10-25k", "over $25k"]
    }

    load(options) {
        return this.html = `
            <div class="flex center">
                <div class="twelve">
                    <h3 class="text-center m-btm-lg">
                        What is your budget?
                    </h3>
                    <form id="budget-form">
                        <div class="flex m-btm-md radio-buttons">
                            ${this.budget.map((amt) => `<input type="radio" class="radio-input" id="${amt.split(' ').join('-')}" name="room" value="${amt}" /><label for="${amt.split(' ').join('-')}" class="radio-label radio-border three h-one col flex align-center center">${amt}</label>`).join("")}
                        </div>
                        <div class="flex center">
                            <button type="submit" class="button button-primary button-lg right" id="budget-button">Next</button>
                        </div>
                    </form>
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
        this.formElem = document.getElementById("budget-form")
        this.formElem.addEventListener("submit", this.handler.bind(this), false)
        document.getElementById("budget-button").addEventListener("touchend", this.handler.bind(this), false)
    }

    handler (evt) {
        evt.preventDefault()
        sessionStorage.setItem("gardenBudget",  Util.getFormData(new FormData(this.formElem)).budget)
        router.navigate("userForm")
    }

    remove() {
        this.el.remove()
    }
}