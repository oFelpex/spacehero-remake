//Menu principal:
function CrosshairFollowMouse() {
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
function addToBody_CharAndSpaceshipToBody() 
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
function addToBody_moon_mainMenu() {
    const moon = document.createElement('img');
    moon.src = 'assets/menu/moon_mainMenu.png';
    moon.classList.add('moon_mainMenu');
    document.body.appendChild(moon);

    setTimeout(() => {
        moon.remove();
        setTimeout(() => {
            document.body.appendChild(moon);
        }, 10000)
    }, 120000);
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
        
        //4 parâmetros para o container das nuvens
        Math.random()*75+'%',
        Math.floor(Math.random() * (-25 - (-75)) + (-75))+'%',
        'goLeft 5s linear infinite',
        Math.floor(Math.random() * (100 - 50) + 50)+'s', 

        //5 Parâmetros para a Cloud1
        Math.floor(Math.random() * (60 - 50) + 50) +'%',
        Math.floor(Math.random() * (30 - 5) + 5) +'%',
        Math.floor(Math.random() * (40 - 35) + 35) +'%',
        Math.floor(Math.random() * (70 - 60) + 60) +'%',
        Math.floor(Math.random() * (100 - 50) + 50) +'%',

        //5 Parâmetros para a Cloud2
        Math.floor(Math.random() * (40 - 30) + 30) +'%',
        Math.floor(Math.random() * (30 - 5) + 5) +'%',
        Math.floor(Math.random() * (50 - 35) + 35) +'%',
        Math.floor(Math.random() * (50 - 40) + 40) +'%',
        Math.floor(Math.random() * (100 - 50) + 50) +'%',
        
        //5 Parâmetros para a Cloud3
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
                    removeOfBody_mainMenu();
                    gameScreen();
                });
            break;
            case options:
                this.rect.addEventListener('click', () => {
                    removeOfBody_mainMenu();
                    optionsScreen();
                });
            break;
            case backToMenu:
                this.rect.addEventListener('click', () => {
                    removeOfBody_options();
                    mainMenu();
                });
        }
    }
}
function rectsForMenu() {
    const container_crosshair = document.getElementById('containerForTheCrosshair');
    
    const rectPlay = new Rect('50%', '50%', 'Jogar', true, false);
    container_crosshair.appendChild(rectPlay.rect);
    
    const rectOptions = new Rect('65%', '50%', 'Opções', false, true);
    container_crosshair.appendChild(rectOptions.rect);

    return {rectPlay, rectOptions};
}
const {rectPlay, rectOptions} = rectsForMenu();

function removeOfBody_mainMenu()
{
    rectPlay.rect.style.top = 120 + '%';
    rectOptions.rect.style.top = 120 + '%';

    const allDivs_mainMenu = document.querySelectorAll('.space, .moon_mainMenu, .credits, .character, .nave_menu');
    allDivs_mainMenu.forEach(allDivs_mainMenu => {
        allDivs_mainMenu.remove();
    })
    const allObjects_mainMenu = document.querySelectorAll('.containerClouds, .shootingStars, .stars');
    allObjects_mainMenu.forEach(allObjects_mainMenu => {
        allObjects_mainMenu.remove();
    });
}
function mainMenu() {
    CrosshairFollowMouse();
    stars();
    clouds(); 
    addToBody_moon_mainMenu();
    
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

    addToBody_CharAndSpaceshipToBody();
}
mainMenu();
//Fim do mainMenu;

//Opções:
function rectForOptions() {
    const container_crosshair = document.getElementById('containerForTheCrosshair');
    const rectBackToMenu = new Rect (120 + '%', 25 + '%', 'Voltar', false, false, true);
    rectBackToMenu.rect.addEventListener('click', () => {
        rectBackToMenu.rect.style.top = 120 + '%';
    });
    container_crosshair.appendChild(rectBackToMenu.rect);
    
    return {rectBackToMenu};
}
const {rectBackToMenu} = rectForOptions();

function changeMouse() {
    const input = document.querySelector('.switch_crosshair input');
    const switch_crosshair_label = document.querySelector('.switch_crosshair');
    const crosshair = document.getElementById('crosshair');
    const container_crosshair = document.getElementById('containerForTheCrosshair');
    switch_crosshair_label.style.top = 0 + '%';

    input.addEventListener('change', function() {
        if (this.checked) {
            //Se o switch estiver ativado
            switch_crosshair_label.style.cursor = 'none';
            container_crosshair.style.cursor = 'none';
            crosshair.style.display = 'block';
            const rects = document.querySelectorAll('.rect_menu');
            rects.forEach(rects => {
                rects.style.cursor = 'none';
            });
        } else {
            //Se o switch estiver desativado
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
function optionsScreen() {
    changeMouse();

    textCrosshair = document.querySelector('.option_text_crosshair');
    textCrosshair.style.display = 'flex';

    rectBackToMenu.rect.style.top = 65 + '%';
    const switch_crosshair_label = document.querySelector('.switch_crosshair');
    switch_crosshair_label.style.display = 'block';

    const options_background = document.createElement('div');
    options_background.classList.add('space');
    document.body.appendChild(options_background);
}
function removeOfBody_options() {
    //Devo mudar no futuro, não quero o msm background do menu nas opções:
    const space = document.querySelector('.space');
    space.remove();

    textCrosshair = document.querySelector('.option_text_crosshair');
    textCrosshair.style.display = 'none';

    rectPlay.rect.style.top = 50 + '%';
    rectOptions.rect.style.top = 65 + '%';

    const switch_crosshair_label = document.querySelector('.switch_crosshair');
    switch_crosshair_label.style.top = 120 + '%';

}
//Fim das opções;

//Inicia o jogo:
function gameScreen() {
    alert('game');
}
//Fim do jogo;