class Stars {
    constructor(size, top, left){
        this.stars = document.createElement('div');
        this.stars.classList.add('stars');
        this.stars.style.height = size;
        this.stars.style.width = size;
        this.stars.style.top = top;
        this.stars.style.left = left;
    }
    addToBody() {
        document.body.appendChild(this.stars);
    }
} 
function stars() 
{   
    for(let i=0; i<100; i++){
        const star = new Stars(
            Math.random()*5 + 'px',
            Math.floor(Math.random()*window.innerHeight) + 'px',
            Math.floor(Math.random()*window.innerWidth) + 'px'
        );
        star.addToBody();
    }

}
function charAndSpaceship() 
{
    const character = document.querySelector('.character');
    character.style.display = 'block';
    const nave_menu = document.querySelector('.nave_menu');
    nave_menu.style.display = 'block';
}

class Rect {
    constructor(top, left, rect_text, play, options) {
        this.rect = document.createElement('div');
        this.rect.classList.add('rect_menu');
        this.rect.style.top = top;
        this.rect.style.left = left;
        this.rect.innerHTML = rect_text;
        play; options;

        switch (true) {
            case play:
                this.rect.addEventListener('click', () => {
                    removeTela0();
                    gameScreen();
                });
            break;
            case options:
                this.rect.addEventListener('click', () => {
                    removeTela0();
                    optionsScreen();
                });
            break;
        }
    }
    addToBody() {
        document.body.appendChild(this.rect);
    }
}
function rectsForMenu()
{
    const rect_play = new Rect(50 + '%', 50 + '%', 'Jogar', true, false);
    rect_play.addToBody();

    const rect_options = new Rect(65 + '%', 50 + '%', 'Opções', false, true)
    rect_options.addToBody();
}
function removeTela0()
{
    const space = document.querySelector('.space');
    space.remove();

    const credits = document.querySelector('.credits');
    credits.remove();

    const rects = document.querySelectorAll('.rect_menu');
    rects.forEach(rects => {
        rects.style.display = 'none';
    });

    const character = document.querySelector('.character');
    character.style.display = 'none';
    const nave_menu = document.querySelector('.nave_menu');
    nave_menu.style.display = 'none';

    const stars = document.querySelectorAll('.stars');
    stars.forEach(stars => {
        stars.style.display = 'none';
    });
}
function initialScreen() {
    stars();
    const space = document.createElement('div');
    space.classList.add('space');
    document.body.appendChild(space);
    
    const credits = document.createElement('div');
    credits.classList.add('credits');
    credits.innerHTML = 'By Felpex';
    document.body.appendChild(credits);


    charAndSpaceship();
    rectsForMenu();
}
initialScreen();
function gameScreen() {
    alert('game');
}
function optionsScreen() {
    alert('options');
}

