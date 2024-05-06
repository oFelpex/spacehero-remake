function changeMouse() {
    const input = document.querySelector('.switch_crosshair input');
    const switch_crosshair_label = document.querySelector('.switch_crosshair');
    const crosshair = document.getElementById('crosshair');
    const container_crosshair = document.getElementById('containerForTheCrosshair');
    switch_crosshair_label.style.top = 0 + '%';

    input.addEventListener('change', function() {
    if (this.checked) {
        // Se o switch estiver ativado
        switch_crosshair_label.style.cursor = 'none';
        container_crosshair.style.cursor = 'none';
        crosshair.style.display = 'block';
        const rects = document.querySelectorAll('.rect_menu');
        rects.forEach(rects => {
             rects.style.cursor = 'none';
        });
    } else {
        // Se o switch estiver desativado
        switch_crosshair_label.style.cursor = 'pointer';
        container_crosshair.style.cursor = 'default';
        crosshair.style.display = 'none';
        const rects = document.querySelectorAll('.rect_menu');
        rects.forEach(rects => {
             rects.style.cursor = 'pointer';
        });
    }
});
}

var rect_back_to_menu;
function rectForOptions() {
    const container_crosshair = document.getElementById('containerForTheCrosshair');
    rect_back_to_menu = new Rect (120 + '%', 25 + '%', 'Voltar', false, false, true)
    container_crosshair.appendChild(rect_back_to_menu.rect);
}
rectForOptions();

function optionsScreen() {
    changeMouse();

    textAim = document.querySelector('.option_text_crosshair');
    textAim.style.display = 'flex';

    rect_back_to_menu.rect.style.top = 65 + '%';
    const switch_crosshair_label = document.querySelector('.switch_crosshair');
    switch_crosshair_label.style.display = 'block';

    const options_background = document.createElement('div');
    options_background.classList.add('space');
    document.body.appendChild(options_background);
}

function removeTela1() {
    const space = document.querySelector('.space');
    space.remove();

    textAim = document.querySelector('.option_text_crosshair');
    textAim.style.display = 'none';

    rect_play.rect.style.top = 50 + '%';
    rect_options.rect.style.top = 65 + '%';
    rect_back_to_menu.rect.style.top = 120 + '%';

    const switch_crosshair_label = document.querySelector('.switch_crosshair');
    switch_crosshair_label.style.top = 120 + '%';

}