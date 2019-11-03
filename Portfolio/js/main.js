//functions of hover
function mOver(element) {
    element.style.opacity = "0.7";
};

function mOut(element) {
    element.style.opacity = "1";
};

// button
function buttonOver(element){
    element.style.background = "#39baec";
};

function buttonOut(element){
    element.style.background = "#3da2ca";
};

//links to projects

function toMovieSite(){
    window.open("http://eg4off.zzz.com.ua/");
};

function toShopSite(){
    window.open("http://4etveroff.zzz.com.ua/");
};

function mouseOver(element){
    element.style.cursor = "pointer";
};

//change language

var header = document.getElementById("header");
var mainIntro = document.getElementById("mainIntro");
var aboutMe = document.getElementById("aboutMe");
var mySkills = document.getElementById("mySkills");
var myWorks = document.getElementById("myWorks");
var contact = document.getElementById("contact");
var social = document.getElementById("social");

function changeLanguageEn(){
    header.innerHTML = `
    <ul>
        <li><a href="#main">Home</a></li>
        <li><a href="#about">About me</a></li> 
        <li><a href="#skills">Skills</a></li>
        <li><a href="#works">Portfolio</a></li>
        <li><a href="#contact">Contacts</a></li>
        <li  class="language" ><a href="#" id="en" onclick="changeLanguageEn()">En&nbsp;</a><a href="#" id="ua" onclick="changeLanguageUa()">&nbsp;Ua</a></li>
    </ul>`;
mainIntro.innerHTML = `
        <div>
        <h1 id="main">Hello. My name is <span>Eugene Chetverov.</span></h1>
        <h2>I’m - junior Front-end developer.</h2>
        <h3>On this site you’ll be able to view my  <a href="https://drive.google.com/file/d/1AHlTsY4XHbKif8LiOP39M-FRZQvORWaf/view?usp=sharing" id="res">resume</a> and get acquainted with my works.</h3>
        </div>
        <a href="#works"><button onmouseover="buttonOver(this)" onmouseout="buttonOut(this)" id="about">View my work</button></a>
        `;
aboutMe.innerHTML = `
    <h2>About me</h2>
    <div class="introduction">
        <i>
            <p>
            I’m just starting my full-fledged journey into Front-end, so I have not enough experience on real projects. However, I can easily make up for the lack of experience with my perseverance, ability to learn quickly and the thirst for development. 
            </p>
            <p>
            I am a cheerful person with clear life guidelines. I value honesty, responsibility and sense of humor in people (and how is it without it?)).
            <a id="scills">I have experience</a> of successfully managing a team, setting specific tasks to achieve a common goal.
            </p>
            <p>
            I hope to work in a friendly team under the guidance of real professionals.
            </p>
        </i>
    </div>
`;
mySkills.innerHTML = `
    <h2>My skills</h2>
    <h3>Courses:</h3>
    <div class="education">
        <div class="courses">
            <img src="img/htmlcss.jpg" class="description">
            <h4 class="description">ITEA Certificate of completion HTML&CSS</h4>
        </div>
        <div class="courses">
            <img src="img/jsbase.jpg" class="description">
            <h4 class="description" id="works">ITEA Certificate of completion Java Script Base</h4>
        </div>
        <div class="courses">
            <img src="img/jsadv.jpg" class="description">
            <h4 class="description">ITEA Certificate of completion Java Script Advanced</h4>
        </div>
    </div>
`;
myWorks.innerHTML = `
    <h2>Here are examples of my work</h2>
    <h4>All the work was done completely from scratch (the date of completion of the last: 06.06.2019 )</h4>
    <div>
        <div class="examples" onclick="toMovieSite()" onmouseover="mouseOver(this)"">
            <img src="img/NS.png">
            <h4 class="description">Trilogy of Night Shyamalan</h4>
        </div>
        <div class="examples" onclick="toShopSite()" onmouseover="mouseOver(this)"">
            <img src="img/TS.png">
            <h4 class="description">T-shirt shop</h4>
        </div>
    </div>
`;
contact.innerHTML = `Contacts`;
social.innerHTML = `
    <h2>Find me on social networks</h2>
    <a href="https://www.facebook.com/profile.php?id=100011103131492" onmouseover="mOver(this)" onmouseout="mOut(this)"><img src="img/f.png"></a>
    <a href="https://www.linkedin.com/in/eugen-chetverov-800631185/" onmouseover="mOver(this)" onmouseout="mOut(this)"><img src="img/in.png"></a>
    <a href="https://t.me/EugenChetverov"><img src="img/t.png" onmouseover="mOver(this)" onmouseout="mOut(this)"></a>
`
};

function changeLanguageUa(){
    header.innerHTML = `
        <ul>
            <li><a href="#main">Головна</a></li>
            <li><a href="#about">Про мене</a></li> 
            <li><a href="#scills">Навички</a></li>
            <li><a href="#works">Портфоліо</a></li>
            <li><a href="#contact">Контакти</a></li>
            <li  class="language" ><a href="#" id="en" onclick="changeLanguageEn()">En&nbsp;</a><a href="#" id="ua" onclick="changeLanguageUa()">&nbsp;Ua</a></li>
        </ul>`;
    mainIntro.innerHTML = `
            <div>
            <h1 id="main">Привіт. Мене звати <span>Євген Четверов.</span></h1>
            <h2>Я - junior Front-end developer.</h2>
            <h3>На цьому сайті ви зможете переглянути моє  <a href="https://drive.google.com/file/d/1AHlTsY4XHbKif8LiOP39M-FRZQvORWaf/view?usp=sharing" id="res">резюме</a> та ознайомитися з моїми роботами.</h3>
            </div>
            <a href="#works"><button onmouseover="buttonOver(this)" onmouseout="buttonOut(this)" id="about">Переглянути мої роботи</button></a>
            `;
    aboutMe.innerHTML = `
        <h2>Про мене</h2>
        <div class="introduction">
            <i>
                <p>
                Я тільки починаю свій повний надій шлях у Front-end, тому досвіду над реальними проектами у мене недостатньо. Проте відсутність досвіду я легко компенсую своєю наполегливістю, вмінням швидко навчатися та жагою розвитку.                </p>
                <p>
                Я - життєрадісна людина, з чіткими життєвими орієнтирами. В людях ціную чесність, відповідальність та почуття гумору (а як без нього?))
                <a id="scills">Маю досвід</a> успішного керування колективом, постановки конкретних задач для досягнення спільної мети.
                </p>
                <p>
                Сподіваюся працювати в дружному колективі під керивництвом справжніх професіоналів.
                </p>
            </i>
        </div>
    `;
    myScills.innerHTML = `
        <h2>Мої навички</h2>
        <h3>Курси:</h3>
        <div class="education">
            <div class="courses">
                <img src="img/htmlcss.jpg" class="description">
                <h4 class="description">ITEA Certificate of completion HTML&CSS</h4>
            </div>
            <div class="courses">
                <img src="img/jsbase.jpg" class="description">
                <h4 class="description" id="works">ITEA Certificate of completion Java Script Base</h4>
            </div>
            <div class="courses">
                <img src="img/jsadv.jpg" class="description">
                <h4 class="description">ITEA Certificate of completion Java Script Advanced</h4>
            </div>
        </div>
    `;
    myWorks.innerHTML = `
        <h2>Тут представлені приклади моїх виконаних робіт
        </h2>
        <h4>Всі роботи були зроблені повністю вручну з нуля (дата виконання останньої: 06.06.2019)
        </h4>
        <div>
            <div class="examples" onclick="toMovieSite()" onmouseover="mouseOver(this)"">
                <img src="img/NS.png">
                <h4 class="description">Trilogy of Night Shyamalan</h4>
            </div>
            <div class="examples" onclick="toShopSite()" onmouseover="mouseOver(this)"">
                <img src="img/TS.png">
                <h4 class="description">T-shirt shop</h4>
            </div>
        </div>
    `;
    contact.innerHTML = `Контакти`;
    social.innerHTML = `
        <h2>Знайти мене в соціальних мережах
        </h2>
        <a href="https://www.facebook.com/profile.php?id=100011103131492" onmouseover="mOver(this)" onmouseout="mOut(this)"><img src="img/f.png"></a>
        <a href="https://www.linkedin.com/in/eugen-chetverov-800631185/" onmouseover="mOver(this)" onmouseout="mOut(this)"><img src="img/in.png"></a>
        <a href="https://t.me/EugenChetverov"><img src="img/t.png" onmouseover="mOver(this)" onmouseout="mOut(this)"></a>
    `
};





