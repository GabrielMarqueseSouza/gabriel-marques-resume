//translations
const myName = 'Gabriel Marques';
const email = 'gabriel.marquesesouza@outlook.com';
const myAge = '28';
const translations = {
    en: {
        home: 'Home',
        about: 'About Me',
        education: 'Education/Professional',
        skills: 'Skills',
        projects: 'Projects',
        getInTouch: 'Get In Touch',
        personalInfoText: [
            myName,
            "Software Developer",
            `${ myAge } Years`, ,
            email
        ],
        aboutMeText: [
            "I'm a Software Developer with a foundation and focus in full - stack development, and a passion for creating beautiful, maintainable, secure, and performance- oriented applications.",
            "With hands-on experience working on national and international teams and projects, I've worked with technologies such as .NET, React, TypeScript, Docker, and Azure — both on the frontend and backend.",
            "I enjoy working at the intersection of development, design, and product, utilizing data and metrics to inform decisions that yield the best possible user experience.",
            "Along with development roles, my career also led me to work as a QA engineer, where I was at the forefront of automation initiatives that boosted deployment quality, and I have since then switched back to development, which is my truly passion - to build useful software always giving my best technical and collaborative skills.",
            "I also hold a bachelor's degree in Law, and I'm currently pursuing a degree in Computer Science, continuously learning and enjoying turning complex challenges into clean, efficient solutions."
        ]
    },
    pt: {
        home: 'Inicio',
        about: 'Sobre',
        education: 'Formação/Profissional',
        skills: 'Habilidades',
        projects: 'Projetos',
        getInTouch: 'Fale Comigo',
        personalInfoText: [
            myName,
            "Desenvolvedor de Software",
            `${ myAge } Anos`,
            email
        ],
        aboutMeText: [
            "Sou um desenvolvedor de software com base e foco em desenvolvimento full-stack e uma paixão por criar aplicativos bonitos, fáceis de manter, seguros e orientados ao desempenho.",
            "Com experiência prática trabalhando em equipes e projetos nacionais e internacionais, trabalhei com tecnologias como .NET, React, TypeScript, Docker e Azure, tanto no front-end quanto no back-end.",
            "Gosto de trabalhar na interseção de desenvolvimento, design e produto, utilizando dados e métricas para informar decisões que geram a melhor experiência possível para o usuário.",
            "Juntamente com as funções de desenvolvimento, minha carreira também me levou a trabalhar como engenheiro de controle de qualidade, onde estive na vanguarda das iniciativas de automação que aumentaram a qualidade da implantação. Desde então, voltei a trabalhar com desenvolvimento, que é minha verdadeira paixão: criar software útil, sempre dando o melhor de mim em termos de habilidades técnicas e de colaboração.",
            "Também sou bacharel em Direito e atualmente estou me formando em Ciência da Computação, aprendendo continuamente e gostando de transformar desafios complexos em soluções limpas e eficientes."
        ]
    },
};

const navHome = document.getElementById('nav-home');
const navAbout = document.getElementById('nav-about');
const navEducation = document.getElementById('nav-education');
const navSkills = document.getElementById('nav-skills');
const navProjects = document.getElementById('nav-projects');
const navContact = document.getElementById('nav-contactme');

const aboutMe = document.getElementById('aboutme');
const personalInfoText = document.getElementById('personalInfoText');

const setLanguage = (language) => {
    aboutMe.innerHTML = '';
    personalInfoText.innerHTML = '';

    if (language === 'pt') {
        navHome.innerText = translations.pt.home;
        navAbout.innerText = translations.pt.about;
        navEducation.innerText = translations.pt.education;
        navSkills.innerText = translations.pt.skills;
        navProjects.innerText = translations.pt.projects;
        navContact.innerText = translations.pt.getInTouch;

        translations.pt.aboutMeText.forEach(p => {
            const pTag = document.createElement('p');
            pTag.textContent = p.trim();
            aboutMe.appendChild(pTag);
        });

        translations.pt.personalInfoText
            .forEach(p => {
                const pTag = document.createElement('p');
                pTag.textContent = p.trim();
                personalInfoText.appendChild(pTag);
            });
    } else {
        navHome.innerText = translations.en.home;
        navAbout.innerText = translations.en.about;
        navEducation.innerText = translations.en.education;
        navSkills.innerText = translations.en.skills;
        navProjects.innerText = translations.en.projects;
        navContact.innerText = translations.en.getInTouch;

        translations.en.aboutMeText.forEach(p => {
            const pTag = document.createElement('p');
            pTag.textContent = p.trim();
            aboutMe.appendChild(pTag);
        });

        translations.en.personalInfoText
            .forEach(p => {
                const pTag = document.createElement('p');
                pTag.textContent = p.trim();
                personalInfoText.appendChild(pTag);
            });
    }
};

const langDiv = document.getElementById('selected-lang');
const langOptions = document.querySelectorAll('.language-menu a');

langOptions.forEach((langOpt) => {
    langOpt.addEventListener('click', (e) => {
        e.preventDefault();

        const lang = langOpt.id;

        langDiv.classList.remove('lang-pt', 'lang-en');
        langDiv.classList.add(`lang-${ lang }`);

        setLanguage(lang);

        localStorage.setItem('selectedLanguage', lang);
    });
});

const savedLang = localStorage.getItem('selectedLanguage');

if (savedLang) {
    setLanguage(savedLang);
    langDiv.classList.add(`lang-${ savedLang }`);
}
//translations

//theme change
const switchThemeBtn = document.getElementById('theme-switch');

switchThemeBtn.addEventListener('change', () => {
    document.body.classList.toggle('dark', switchThemeBtn.checked);
    localStorage.setItem('theme', switchThemeBtn.checked ? 'dark' : 'light');
});

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    switchThemeBtn.checked = true;
}
//theme change
