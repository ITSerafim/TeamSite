import Module from "./core/module.js";
import serviceCard from "./components/serviceCard.js";
import aboutCompanyText from "./components/aboutCompanyText.js";
import { serviceCardList } from "./data/serviceCardList.js";
import { aboutCompanyTextList } from "./data/aboutCompanyTextList.js";

function __init__() {
  new Module("div", "service-list").createComponents(
    serviceCardList,
    serviceCard
  );
  new Module("div", "about-company-text__list").createComponents(
    aboutCompanyTextList,
    aboutCompanyText,
    "p"
  );
}

__init__();
