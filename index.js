var w = window.innerWidth;
var h = window.innerHeight;
init();
container();

function init() {
    var list = document.getElementById("list");
    var dropdown = document.getElementById("dropdown");
    if(window.innerWidth < 600) {
        list.style.display = 'none'
        dropdown.style.display = 'inline-block'
    } else {
        dropdown.style.display = 'none'
        list.style.display = 'flex'
    }
}

function container() {
    var container = document.getElementById("container");
    var box = document.getElementById("box");
    var works = document.getElementById("works");
    var workItem = document.getElementsByClassName('work-item')
    container.style.height = window.innerHeight+'px';
    box.style.height = window.innerHeight+'px';
    works.style.width = window.innerWidth+'px';
    console.log('workitem', workItem)
    const divider = window.innerWidth > 1032
        ? 3
        : window.innerWidth < 1032 && window.innerWidth > 630
            ? 2
            : 1
    Object.keys(workItem).forEach(item => {
        workItem[item].style.width = (window.innerWidth / divider)+'px'
        workItem[item].style.height = (window.innerWidth / divider)+'px'
    })
}

const header = document.getElementById("header");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });

const scrollButton = document.getElementById("scrollbutton");

scrollButton.addEventListener("click", () => {
    const headerHeight = document.getElementById("container").offsetHeight;
    window.scrollBy(0, headerHeight);
});