export default function createItemList() {
  const div = document.createElement("div");
  div.setAttribute("id", "itemList");
  div.innerText = "This is where the item list will go";
  document.body.append(div);
}
