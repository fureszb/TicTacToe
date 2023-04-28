class InfoPanel {
    constructor(szuloElem) {
      const infoPanelDiv = $("<div>");
      const p1 = $("<p id='p1'>").text("asd");
      const p2 = $("<p>").text("asd");
      const p3 = $("<p>").text("asd");
      infoPanelDiv.append(p1, p2, p3);
      $(szuloElem).append(infoPanelDiv);
      //meg kell fogni p tageket
      this.p1Elem = $(szuloElem).find("#p1");
    }
    setP1Elem(ertek) {
      this.p1Elem.html(ertek);
    }
  }
  export default InfoPanel;
  