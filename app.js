const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabItems = $$(".tab-item");
const tabPanes = $$(".tab-pane");
const tabLine = $(".line");

const tabActive = $(".tab-item.active");

tabLine.style.left = tabActive.offsetLeft + "px";
tabLine.style.width = tabActive.offsetWidth + "px";

tabItems.forEach((tabItem, index) => {
  tabItem.onclick = () => {
    $(".tab-item.active").classList.remove("active");
    $(".tab-pane.active").classList.remove("active");

    tabItem.classList.add("active");
    tabPanes[index].classList.add("active");

    tabLine.style.left = tabItem.offsetLeft + "px";
    tabLine.style.width = tabItem.offsetWidth + "px";
  };
});
