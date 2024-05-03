function changeMouse() {
    const container = document.getElementById('containerForTheAim');
    let cursorVisible = false;
    switch(cursorVisible) {
        case true:
            container.style.cursor = 'none';
            break;
        case false:
            container.style.cursor = 'default';
            break;
    }
}

function rectForOptions() {
    const container = document.getElementById('containerForTheAim');
    const rect_back_to_menu = new Rect (65 + '%', 25 + '%', 'Voltar', false, false, true)
    container.appendChild(rect_back_to_menu.rect);
}

function optionsScreen() {
    const options_background = document.createElement('div');
    options_background.classList.add('space');
    document.body.appendChild(options_background);
    rectForOptions();
}

function removeTela1() {
    const space = document.querySelector('.space');
    space.remove();

    const rects = document.querySelectorAll('.rect_menu');
    rects.forEach(rects => {
        rects.remove();
    });
}