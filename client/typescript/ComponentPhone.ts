export class ComponentPhone {
    private firstElementItem: HTMLDivElement;
    private firstElementInputPhone: HTMLInputElement;
    private addButton: HTMLButtonElement;

    constructor(
        private elementRoot: HTMLDivElement
    ) {
        this.firstElementItem = <HTMLDivElement>elementRoot.querySelector('div.item')
        this.firstElementInputPhone = <HTMLInputElement>this.firstElementItem.querySelector('input[name=number]')
        this.addButton = <HTMLButtonElement>elementRoot.querySelector('button.button-add')
        this.atachEvents()
    }

    private atachEvents() {
        this.addButton.addEventListener('click', ev => {
            var itemCloned = <HTMLDivElement>this.firstElementItem.cloneNode(true)
            this.elementRoot.insertBefore(itemCloned, this.firstElementItem)
            this.firstElementInputPhone.value = ""
            var button = <HTMLButtonElement>itemCloned.querySelector('button.button-add')
            button.className = ""
            button.innerText = "-"
            button.addEventListener('click', ev => {
                ev.target.closest('div.item').remove()
            })
        })
    }
}