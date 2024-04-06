import createItemList from "./components/itemList.js";

class APP {
  constructor() {
    createItemList();
  }

}

document.addEventListener("DOMContentLoaded", () => {
  new APP();
});
