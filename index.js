var w = window.innerWidth;
var h = window.innerHeight;
init();
container();

function init() {
    document.body.style.overflowY = 'hidden'
    var modal = document.getElementById("modalC");
    var modalH1 = document.getElementById("modal-h1");
    var modalP = document.getElementById("modal-p");
    var vh = 100/h
    modalH1.style.fontSize = 25*vh + 'vh'
    modalP.style.fontSize = 15*vh + 'vh'
    var modalContainer = document.getElementById("modal-container");
    modal.style.width = w + 'px'
    modal.style.height = h + 'px'
    modalContainer.style.height = h/3 + 'px'
    modalContainer.style.maxWidth = w * 3/4 + 'px'
    modalContainer.style.minWidth = w * 2/5 + 'px'
    console.log('modal', modal)
   /*  var list = document.getElementById("list");
    var dropdown = document.getElementById("dropdown");
    if(window.innerWidth < 600) {
        list.style.display = 'none'
        dropdown.style.display = 'inline-block'
    } else {
        dropdown.style.display = 'none'
        list.style.display = 'flex'
    } */
}

function buttonClick() {
    console.log('ciao')
    document.getElementById("modalC").style.display = 'none';
    document.getElementById("html-body").style.display = 'inline-block';
    var video = document.getElementById("video");
    video.addEventListener('click', function () {
        console.log('ciiii')
        document.body.style.overflowY = 'auto'
        video.play()
    })
    video.click()
    console.log('video', video)
}

function container() {
    var container = document.getElementById("container");
    var works = document.getElementById("works");
    var workItem = document.getElementsByClassName('work-item')
    container.style.width = w+'px';
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