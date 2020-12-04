perecl = document.querySelector("#pereClue").style;
svet = document.querySelector('#trapezoid').style;
golub = document.querySelector('#golub').style;
krol = document.querySelector('#krol').style;
sasha = document.querySelector('#clac');
pocus = document.querySelectorAll('.pocus');


let pre = true
change = () => {
    if (pre) {
        golub.bottom = '30vh';
        krol.bottom = '15vh';
        pre = false;
    } else {
        golub.bottom = '15vh';
        krol.bottom = '30vh';
        pre = true;
    }
}

sasha.addEventListener('click', change)

clearBack = () => {
    a = document.querySelector("#main").style;
    a.transition = 'top 1s cubic-bezier(0, 0, 1, 1)';
    a.top = '-100%';
    setTimeout(func = () => {
        document.querySelectorAll('.lamp').forEach(element => {
            element.style.display = 'block';
        });
    }, 400);
}

pressed = true;

clicka = () => {
    console.log(1);
    if (pressed) {
        pocus.forEach(element => {
            element.style.display = 'block';
        });
        svet.opacity = '0.5';
        pressed = false;

    } else {
        pocus.forEach(element => {
            element.style.display = 'none';
        });
        golub.bottom = '20vh';
        krol.bottom = '20vh';
        pressed = true;
        svet.opacity = '.0';
    }

}

mdown = () => {
    perecl.top = '7vh';
}

mup = () => {
    perecl.top = '10vh';
}

document.querySelectorAll('.lamp').forEach(element => {
    element.addEventListener('click', clicka);
    element.addEventListener('mousedown', mdown);
    element.addEventListener('mouseup', mup);
})


b = document.createElement('div');
b.innerHTML = 'Postavte 5 pggsta';
b.classList.add('easter');
document.querySelector('main').appendChild(b)

easterEgg = document.querySelector('#easterEgg');
easterEgg.onclick = () => {

    easterEgg.style.transform = 'scale(1,1)';
    easterEgg.addEventListener('dblclick', () => {
        document.querySelector('.easter').style.display = 'block';
    })
}



trig = true;
document.addEventListener('keydown', (event) => {
        if (event.altKey && event.ctrlKey) {
            if (trig) {
                easterEgg.style.display = 'block';
                trig = false;
            } else {
                easterEgg.style.display = 'none';
                easterEgg.style.transform = 'scale(-1,1)';
                document.querySelector('.easter').style.display = 'none';
                trig = true;
            }
        }
    })
    // document.addEventListener('keyup', show(event))