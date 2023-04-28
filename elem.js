class Elem {
    #allapot;
    constructor(id, szuloElem) {
        this.id = id;
        this.#allapot = true;
        szuloElem.append(`
            <div class="elem"><p>&nbsp</p></div>
         `);
        this.divElem = $("article div:last-child");
        this.pElem = this.divElem.children("p")
        this.divElem.on("click", () => {
            if (this.#allapot) {
                this.esemenyTriger();
            }
            this.#allapot = false;
        });

    }
    setElem(ertek) {
        this.pElem.html(ertek);
    }
    esemenyTriger() {
        const esemeny = new CustomEvent("elemKivalasztas", {
            detail: this

        });
        window.dispatchEvent(esemeny);
    }

}
export default Elem;