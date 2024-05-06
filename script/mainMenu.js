function aimFollowMouse() {
    const crosshair = document.getElementById('crosshair');
    const container = document.getElementById('containerForTheCrosshair');
    container.addEventListener('mousemove', (event) => {
        const mouseX = event.clientX - container.offsetLeft;
        const mouseY = event.clientY - container.offsetTop;

        crosshair.style.left = mouseX + 'px';
        crosshair.style.top = mouseY + 'px';
    });
}
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
function randomColorForShootingStar() {
    let num = Math.floor((Math.random() * 4) + 1);
    let color = '';
    switch(num) {
        case 1:
            color = 'blue';
            break;
        case 2:
            color = 'red';
            break;
        case 3:
            color = 'yellow';
            break;
        case 4:
            color = 'purple';
            break;
    }
    return color;
}
class ShootingStars {
    constructor(shootingStars_COLOR, shootingStars_COLOR_blur, top, left, rotate) {
        this.shootingStar = document.querySelector(shootingStars_COLOR);
        this.shootingStar.style.top = top;
        this.shootingStar.style.left = left;
        this.shootingStar.style.rotate = rotate;

        this.shootingStar_blur = document.querySelector(shootingStars_COLOR_blur);
        this.shootingStar_blur.style.top = top;
        this.shootingStar_blur.style.left = left;
        this.shootingStar_blur.style.rotate = rotate;
    }
    addToBody() {
        document.body.appendChild(this.shootingStar, this.shootingStar_blur);

    }
}
function randomShootingStars(color) { 
    let top = (Math.random() * (window.innerHeight-400));
    let left = (Math.random() * window.innerWidth);
    const shootingStarInstance = new ShootingStars (
        '.shootingStars_' + color,
        '.shootingStars_' + color + '_blur',
        top + 'px',
        left + 'px',
        (Math.random() * 90) +'deg'
    );
    shootingStarInstance.shootingStar_blur.style.top = top-8 + 'px';
    shootingStarInstance.shootingStar_blur.style.left = left-4 + 'px';
    shootingStarInstance.addToBody();

    setTimeout(() => {
        shootingStarInstance.shootingStar.style.top = -100+'%';
        shootingStarInstance.shootingStar_blur.style.top = -100+'%';
    }, 900);
}
function charAndSpaceship() 
{
    const character = document.createElement('img');
    character.src = 'assets/menu/character.gif';
    character.classList.add('character');
    document.body.appendChild(character);
    const nave_menu = document.createElement('img');
    nave_menu.src = 'assets/menu/nave_menu.png';
    nave_menu.classList.add('nave_menu');
    document.body.appendChild(nave_menu);
}
class Clouds{
    constructor(topContainer, leftContainer, animation, animationDuration, 
        top1, left1, height1, width1, opacity1,
        top2, left2, height2, width2, opacity2,
        top3, left3, height3, width3, opacity3){
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
        this.cloud1.style.opacity = opacity1;
        this.containerClouds.appendChild(this.cloud1);

        this.cloud2 = document.createElement('div');
        this.cloud2.classList.add('clouds');
        this.cloud2.style.top = top2;
        this.cloud2.style.left = left2;
        this.cloud2.style.height = height2;
        this.cloud2.style.width = width2;
        this.cloud2.style.opacity = opacity2;
        this.containerClouds.appendChild(this.cloud2);

        this.cloud3 = document.createElement('div');
        this.cloud3.classList.add('clouds');
        this.cloud3.style.top = top3;
        this.cloud3.style.left = left3;
        this.cloud3.style.height = height3;
        this.cloud3.style.width = width3;
        this.cloud3.style.opacity = opacity3;
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
        Math.floor(Math.random() * (100 - 50) + 50) +'%',

        Math.floor(Math.random() * (40 - 30) + 30) +'%',
        Math.floor(Math.random() * (30 - 5) + 5) +'%',
        Math.floor(Math.random() * (50 - 35) + 35) +'%',
        Math.floor(Math.random() * (50 - 40) + 40) +'%',
        Math.floor(Math.random() * (100 - 50) + 50) +'%',
        
        Math.floor(Math.random() * (20 - 5) + 5) +'%',
        Math.floor(Math.random() * (50 - 5) + 5) +'%',
        Math.floor(Math.random() * (50 - 35) + 35) +'%',
        Math.floor(Math.random() * (40 - 20) + 20) +'%',
        Math.floor(Math.random() * (100 - 50) + 50) +'%'
    );
    document.body.appendChild(cloudsGenerator.containerClouds);
}
}
class Rect {
    constructor(top, left, rect_text, play, options, backToMenu) {
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
            case backToMenu:
                this.rect.addEventListener('click', () => {
                    removeTela1();
                    initialScreen();
                });
        }
    }
}

var rect_play;
var rect_options;
function rectsForMenu()
{
    const container = document.getElementById('containerForTheCrosshair');
    rect_play = new Rect(50 + '%', 50 + '%', 'Jogar', true, false);
    container.appendChild(rect_play.rect);

    rect_options = new Rect(65 + '%', 50 + '%', 'Opções', false, true)
    container.appendChild(rect_options.rect);
}
rectsForMenu();

function removeTela0()
{
    const space = document.querySelector('.space');
    space.remove();

    const credits = document.querySelector('.credits');
    credits.remove();
    
    rect_back_to_menu.rect.style.top = 65 + '%';
    rect_play.rect.style.top = 120 + '%';
    rect_options.rect.style.top = 120 + '%';

    const character = document.querySelector('.character');
    character.remove();
    const nave_menu = document.querySelector('.nave_menu');
    nave_menu.remove();

    const stars = document.querySelectorAll('.stars');
    stars.forEach(stars => {
        stars.remove();
    });

    const shootingStars = document.querySelectorAll('.shootingStars');
    shootingStars.forEach(shootingStars => {
        shootingStars.remove();
    });

    const allClouds = document.querySelectorAll('.containerClouds');
    allClouds.forEach(allClouds => {
        allClouds.remove();
    });
}
function initialScreen() {
    aimFollowMouse();
    stars();
    clouds(); 
    
    setInterval(() => {
        randomShootingStars(randomColorForShootingStar());
    }, 4000);
    
    const space = document.createElement('div');
    space.classList.add('space');
    document.body.appendChild(space);
    
    const credits = document.createElement('div');
    credits.classList.add('credits');
    credits.innerHTML = 'By Felpex';
    document.body.appendChild(credits);

    charAndSpaceship();
}
initialScreen();



