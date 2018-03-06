export class WindowControll {
    static instance: WindowControll
    private windows: NodeListOf<Element>
    private currentWindow: Element

    constructor() {
        if (WindowControll.instance)
            return WindowControll.instance
        this.windows = document.querySelectorAll('div.window')
        this.openByElement(this.windows[0])
        return WindowControll.instance || (WindowControll.instance = this)
    }

    closeAll() {
        this.windows.forEach(el => el.classList.remove('open'))
    }

    openByElement(element: Element) {
        this.closeAll()
        this.currentWindow = element
        element.classList.add('open')
    }

    open(querySelector: string) {
        return this.openByElement(document.querySelector(querySelector))
    }
}