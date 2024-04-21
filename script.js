let tela = 0;


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
                    tela = 1;
                    
                });
            break;
            case options:
                this.rect.addEventListener('click', () => {
                    tela = 2;

                });
            break;
        }
    }
    addToBody() {
        document.body.appendChild(this.rect);
    }
}
if(tela == 0)
{
    stars();
    const space = document.createElement('div');
    space.classList.add('space');
    document.body.appendChild(space);
    
    const credits = document.createElement('div');
    credits.classList.add('credits');
    credits.innerHTML = 'By Felpex';
    document.body.appendChild(credits);

    const character = document.querySelector('.character');
    character.style.display = 'block';
    const nave_menu = document.querySelector('.nave_menu');
    nave_menu.style.display = 'block';
    
    const rect_play = new Rect(50 + '%', 50 + '%', 'Jogar', true, false);
    rect_play.addToBody();
    const rect_options = new Rect(65 + '%', 50 + '%', 'Opções', false, true)
    rect_options.addToBody();
}

if(tela == 1)
{

}
//NÃO POSSO IR COM ESSA DE TELA, TEREI DE PENSAR EM OUTRA FORMA DE MUDAR DE TELA;
