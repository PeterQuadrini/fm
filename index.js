var w = window.innerWidth;
var h = window.innerHeight;
container();

function buttonClick() {
    console.log('ciao')
    document.getElementById("modalC").style.display = 'none';
    document.getElementById("html-body").style.display = 'inline-block';
    var video = document.getElementById("video");
    video.addEventListener('click', function () {
        console.log('ciiii')
        document.getElementsByTagName('body')[0].style.overflowY = 'auto'
        video.play()
    })
    video.click()
    console.log('video', video)
}

function container() {
    var container = document.getElementById("container");
    var containerIn = document.getElementById("container-in");
    var logline = document.getElementById("logline");
    logline.style.height = h+'px'
    if (w/h > 16/9) {
        console.log('MAGGIORE')
        const tenVH = (10*h)/100
        containerIn.style.height = (h - tenVH) + 'px'
    } else {
        console.log('MINORE')
        containerIn.style.width = w + 'px'
    }
    var works = document.getElementById("works");
    var workItem = document.getElementsByClassName('work-item')
    container.style.width = w+'px';
    works.style.width = window.innerWidth+'px';
    console.log('workitem', workItem)
    const divider = window.innerWidth > 1032
        ? 2
        : window.innerWidth < 1032 && window.innerWidth > 630
            ? 2
            : 1
    Object.keys(workItem).forEach(item => {
        workItem[item].style.width = (window.innerWidth / divider)+'px'
        workItem[item].style.height = ((window.innerWidth / divider) * 9 ) / 16+'px'
    })
}

const header = document.getElementById("header");

/*     window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }); */



    /* function submit() {
        Email.send({
            Host: 'smtp.elasticemail.com 2525',
            Username: 'website.portfolio.info@gmail.com',
            Password: '69729EC67F1AD0085D12A4EC1E187340DD38',
            To: 'website.portfolioco.info@gmail.com',
            From: 'website.portfolioco.info@gmail.com',
            Subject: 'TEST',
            Body: 'Test'
        }).then( message => alert(message) )
    } */