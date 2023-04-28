import InfoPanel from "./infopanel.js";
import Jatekter from "./jatekter.js";
$(function () {
    new Jatekter()
    new InfoPanel()
    const jatekter = new Jatekter();
    console.log(jatekter.infoPanel.getP1Elem());
});
