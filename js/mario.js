const btn_start = document.getElementById('btn-start');
const start_menu = document.getElementById('start-menu');
const Game = document.getElementById('Game');
const body = document.body;
const character = document.getElementById('mario');
let timer = 0;
var x = 20;
var y = 20;
let jumping = false;
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
function walk(step) {
    x += step;
}
const KeyStats = {
    left: false,
    right: false,
    up: false,
    down: false
};
body.addEventListener('keydown', (event) => {
    const btn = event.keyCode;
    const arrow_up = 38;
    const arrow_down = 40;
    const arrow_left = 37;
    const arrow_right = 39;
    timer++;
    switch (btn) {
        case arrow_up:
            KeyStats.up = true
            break;
        case arrow_down:
            KeyStats.down = true
            break;
        case arrow_left:
            KeyStats.left = true
            break;
        case arrow_right:
            KeyStats.right = true
            break;
    }
    // switch (btn) {
    //     case arrow_up:
    //         if (!jumping) {
    //             console.log('Arrow Up Pressed');
    //             character.src = '../img/mario-jump.png';
    //             character.style.bottom = (y + 350) + 'px'
    //             character.style.width = 61 + 'px';
    //             jumping = true;
    //             setTimeout(() => {
    //                 character.style.bottom = (250) + 'px'
    //                 y = 20;
    //                 setTimeout(() => {
    //                     character.style.width = 50 + 'px';
    //                     character.src = '../img/mario-idle.png';
    //                     jumping = false;
    //                 }, 200)
    //             }, 500);

    //         }
    //         break;
    //     case arrow_down:
    //         console.log('Arrow Down Pressed');
    //         character.src = '../img/mario-sit.png';
    //         break;
    //     case arrow_left:
    //         console.log('Arrow left Pressed');

    //         character.classList.add('flip');
    //         walk(-5);
    //         character.style.left = x + 'px';

    //         if (!moving) {
    //             character.src = '../img/mario-walk.gif';
    //             moving = true;

    //         }

    //         break;
    //     case arrow_right:
    //         console.log('Arrow right Pressed');

    //         character.classList.remove('flip');
    //         walk(5);
    //         character.style.left = x + 'px';

    //         if (!moving) {
    //             character.src = '../img/mario-walk.gif';
    //             moving = true;
    //         }

    //         break;
    // }
});
body.addEventListener('keyup', (event) => {
    const btn = event.keyCode;
    const arrow_up = 38;
    const arrow_down = 40;
    const arrow_left = 37;
    const arrow_right = 39;

    switch (btn) {
        case arrow_up:
            break;
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