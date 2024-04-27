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
class Clouds{
    constructor(topContainer, leftContainer, animation, animationDuration, 
        top1, left1, height1, width1, 
        top2, left2, height2, width2, 
        top3, left3, height3, width3){
        this.containerClouds = document.createElement('div');
        this.containerClouds.classList.add('containerClouds');
        this.containerClouds.style.top = topContainer;
        this.containerClouds.style.left = leftContainer;
        this.containerClouds.style.animation = animation;
        this.containerClouds.style.animationDuration = animationDuration;

        this.cloud1 = document.createElement('div');
        this.cloud1.classList.add('clouds');
        this.cloud1.style.top = top1;
        this.cloud1.style.left = left1;
        this.cloud1.style.height = height1;
        this.cloud1.style.width = width1;
        this.containerClouds.appendChild(this.cloud1);

        this.cloud2 = document.createElement('div');
        this.cloud2.classList.add('clouds');
        this.cloud2.style.top = top2;
        this.cloud2.style.left = left2;
        this.cloud2.style.height = height2;
        this.cloud2.style.width = width2;
        this.containerClouds.appendChild(this.cloud2);

        this.cloud3 = document.createElement('div');
        this.cloud3.classList.add('clouds');
        this.cloud3.style.top = top3;
        this.cloud3.style.left = left3;
        this.cloud3.style.height = height3;
        this.cloud3.style.width = width3;
        this.containerClouds.appendChild(this.cloud3);
        
    }

}
function clouds() {
    for(i=0; i<5; i++){
        const cloudsGenerator = new Clouds(
        
        Math.random()*75+'%',
        Math.floor(Math.random() * (-25 - (-75)) + (-75))+'%',
        'goLeft 5s linear infinite',
        Math.floor(Math.random() * (100 - 50) + 50)+'s', 
        Math.floor(Math.random() * (60 - 50) + 50) +'%',
        Math.floor(Math.random() * (30 - 5) + 5) +'%',
        Math.floor(Math.random() * (40 - 35) + 35) +'%',
        Math.floor(Math.random() * (70 - 60) + 60) +'%',

        Math.floor(Math.random() * (40 - 30) + 30) +'%',
        Math.floor(Math.random() * (30 - 5) + 5) +'%',
        Math.floor(Math.random() * (50 - 35) + 35) +'%',
        Math.floor(Math.random() * (50 - 40) + 40) +'%',
        
        Math.floor(Math.random() * (20 - 5) + 5) +'%',
        Math.floor(Math.random() * (50 - 5) + 5) +'%',
        Math.floor(Math.random() * (50 - 35) + 35) +'%',
        Math.floor(Math.random() * (40 - 20) + 20) +'%'
    );
    document.body.appendChild(cloudsGenerator.containerClouds);
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

        const rect_border = document.createElement('div');
        rect_border.classList.add('rect_menu_border');
        rect_border.style.top = top;
        rect_border.style.left = left;
        document.body.appendChild(rect_border);

        this.rect.addEventListener('mouseenter', () => {
            this.rect.style.animation = 'rainbow_border 5s ease-in-out infinite';
            rect_border.style.animation = 'rainbow_border 5s ease-in-out infinite';
            
            });
            this.rect.addEventListener('mouseleave', () => {
            this.rect.style.animation = 'none';
            rect_border.style.animation = 'none';
              
        });
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
        rects.remove();
    });
    const rects_border = document.querySelectorAll('.rect_menu_border');
    rects_border.forEach(rects_border => {
        rects_border.remove();
    });
    const character = document.querySelector('.character');
    character.remove();
    const nave_menu = document.querySelector('.nave_menu');
    nave_menu.remove();

    const stars = document.querySelectorAll('.stars');
    stars.forEach(stars => {
        stars.remove();
    });

    const allClouds = document.querySelectorAll('.containerClouds');
    allClouds.forEach(allClouds => {
        allClouds.remove();
    });
}
function initialScreen() {
    stars();
    clouds();

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



