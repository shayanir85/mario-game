const btn_start = document.getElementById('btn-start');
const start_menu = document.getElementById('start-menu');
const Game = document.getElementById('Game');
const body = document.body;
const character = document.getElementById('mario');
let timer = 0;
var x = 20;
let moving = false;
btn_start.addEventListener('click', () => {
    start_menu.classList.add('animate__animated');
    start_menu.classList.add('animate__fadeOut');
    setTimeout(() => {
        Game.classList.add('show')
        Game.classList.add('animate__animated');
        Game.classList.add('animate__fadeIn');
    }, 400)
});
function walkRight(step) {
    x += step;
}
function walkLeft(step) {
    x -= step;
}

body.addEventListener('keydown', (event) => {
    const btn = event.keyCode;
    const arrow_up = 38;
    const arrow_down = 40;
    const arrow_left = 37;
    const arrow_right = 39;
    timer++;
    switch (btn) {
        case arrow_up:
            console.log('Arrow Up Pressed');
            character.classList.add('jump');
            character.src = '../img/mario-jump.png';
            break;
        case arrow_down:
            console.log('Arrow Down Pressed');
            character.src = '../img/mario-sit.png';
            break;
        case arrow_left:
            console.log('Arrow left Pressed');
            if (timer > 5) {
                character.classList.add('flip');
                walkLeft(5);
                character.style.left = x + 'px';

                if (!moving) {
                    character.src = '../img/mario-walk.gif';
                    moving = true;
                }
            }

            break;
        case arrow_right:
            console.log('Arrow right Pressed');
            if (timer > 5) {
                character.classList.remove('flip');
                walkRight(5);
                character.style.left = x + 'px';

                if (!moving) {
                    character.src = '../img/mario-walk.gif';
                    moving = true;
                }
            }
            break;
    }
});
body.addEventListener('keyup', (event) => {
    const btn = event.keyCode;
    const arrow_up = 38;
    const arrow_down = 40;
    const arrow_left = 37;
    const arrow_right = 39;

    switch (btn) {
        case arrow_up:
            setTimeout(() => {
                character.classList.remove('jump');
            }, 500);
        case arrow_down:
            character.src = '../img/mario-idle.png';
            break;
        case arrow_left:
            if (moving) {
                character.src = '../img/mario-idle.png';
                moving = false;
            }
            break;
        case arrow_right:
            if (moving) {
                character.src = '../img/mario-idle.png';
                moving = false;
            }
            break;
    }
});