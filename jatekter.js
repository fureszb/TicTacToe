import Elem from "./elem.js";
import InfoPanel from "./infopanel.js";

class Jatekter {
  #lepes
  constructor() {
    this.#lepes = 0;
    const szuloElem = $("article");
    const asideElem = $("aside");
    asideElem.appendTo(szuloElem);
    const infoPanel = new InfoPanel(asideElem);
    for (let index = 0; index < 9; index++) {
      const Elem1 = new Elem(index, szuloElem);
    }
    $(window).on("elemKivalasztas", (event) => {
      console.log(event.detail);
      if (this.#lepes % 2 == 0) {
        event.detail.setElem("X");
        infoPanel.setP1Elem("Az O jön");
      } else {
        event.detail.setElem("O");
        infoPanel.setP1Elem("Az X jön");
      }
      this.#lepes++;
    });
  }
}

export default Jatekter;
