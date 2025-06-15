//---- global ----
const savedLang = localStorage.getItem('selectedLanguage');
const langDiv = document.getElementById('selected-lang');
const languages = document.querySelectorAll('.language-menu a');

// ---- theme change ----
const switchThemeBtn = document.getElementById('theme-switch');

switchThemeBtn.addEventListener('change', () => {
  document.body.classList.toggle('dark', switchThemeBtn.checked);
  localStorage.setItem('theme', switchThemeBtn.checked ? 'dark' : 'light');
});

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
  switchThemeBtn.checked = true;
}
// ---- theme change ----

//---- skills ----
const skills = {
  techSkills: [
    { name: 'HTML', level: 2, role: ['frontend'] },
    { name: 'CSS', level: 1, role: ['frontend'] },
    { name: 'JavaScript', level: 3, role: ['frontend', 'backend'] },
    { name: 'C#', level: 2, role: ['backend'] },
    { name: '.NET', level: 2, role: ['backend'] },
  ],
  softSkills: {
    en: [
      { name: 'Communication', level: 3, role: ['softskills'] },
      { name: 'Team work', level: 3, role: ['softskills'] },
      { name: 'Commitment', level: 3, role: ['softskills'] },
    ],
    pt: [
      { name: 'Comunicação', level: 3, role: ['softskills'] },
      { name: 'Trabalho em equipe', level: 3, role: ['softskills'] },
      { name: 'Comprometimento', level: 3, role: ['softskills'] },
    ],
  },
};

const skillsContainer = document.getElementById('skill-list-container');
const skillBtns = document.querySelectorAll('.skill-btn');
let selectedRole = 'all';

const getCurrentLanguage = () => {
  return langDiv.classList.contains('lang-pt') ? 'pt' : 'en';
};

const getSoftSkills = (language) => {
  return language === 'pt' ? skills.softSkills.pt : skills.softSkills.en;
};

const getFilteredSkills = (roleFilter, language) => {
  if (roleFilter === 'softskills') {
    return getSoftSkills(language);
  }
  if (roleFilter === 'all') {
    return [...skills.techSkills, ...getSoftSkills(language)];
  }
  return skills.techSkills.filter((skill) => skill.role.includes(roleFilter));
};

const observeSkillBars = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target
            .querySelectorAll('.segment.filled')
            .forEach((segment) => {
              const delay = parseInt(segment.dataset.delay, 10) || 0;
              setTimeout(() => segment.classList.add('animate'), delay);
            });
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  document
    .querySelectorAll('.skill-bar')
    .forEach((bar) => observer.observe(bar));
};

//skill filter
const filterSkills = (roleFilter, language) => {
  skillsContainer.innerHTML = '';
  const filteredSkills = getFilteredSkills(roleFilter, language);

  //create html/node tree for skills
  filteredSkills.forEach((skill) => {
    const skillDiv = document.createElement('div');
    skillDiv.className = 'skill';

    const name = document.createElement('p');
    name.classList = 'skill-name';
    name.innerText = skill.name;

    const levelBar = document.createElement('div');
    levelBar.className = 'skill-bar';

    for (let i = 1; i <= 3; i++) {
      const segment = document.createElement('div');
      segment.className = 'segment';

      if (i <= skill.level) {
        segment.classList.add('filled');

        segment.dataset.delay = (i - 1) * 600;
      }

      levelBar.appendChild(segment);
    }

    skillDiv.appendChild(name);
    skillDiv.appendChild(levelBar);
    skillsContainer.appendChild(skillDiv);
  });

  //loads skill animation when skill section is in view
  observeSkillBars();
};

skillBtns.forEach((button) => {
  button.addEventListener('click', () => {
    selectedRole = button.id.toLowerCase();
    filterSkills(selectedRole, getCurrentLanguage());
  });
});

filterSkills('all', savedLang);
//---- skills ----

// ---- projects ----
const projects = [
  {
    title: 'eLoad - Gestão de Carga de Treino',
    description: {
      en: `Application to monitor and evaluate athletes' performance,
      facilitating analysis, helping to make decisions for
      upcoming training sessions, improving athletes' performance 
      and preventing injuries.`,
      pt: `Aplicativo para monitorar e avaliar o desempenho dos atletas, 
      facilitando a análise, ajudando a tomar decisões para
      as próximas sessões de treinamento, melhorando o desempenho
      dos atletas e prevenindo lesões.`,
    },
    imageUrl: './resources/brasil.svg',
  },
];

const projectsContainer = document.querySelector('.project-container');
const renderProjects = (language) => {
  projectsContainer.innerHTML = '';

  projects.forEach((project) => {
    const item = document.createElement('div');
    item.className = 'project-item';

    const imageTag = document.createElement('img');
    imageTag.className = 'project-logo';
    imageTag.src = project.imageUrl;

    const title = document.createElement('p');
    title.classList = 'project-title';
    title.innerText = project.title;

    const description = document.createElement('p');
    description.classList = 'project-description';
    description.innerText =
      language === 'pt' ? project.description.pt : project.description.en;

    item.appendChild(imageTag);
    item.appendChild(title);
    item.appendChild(description);
    projectsContainer.appendChild(item);
  });
};

renderProjects(savedLang);
// ---- projects ----

//---- translations ----
const myName = 'Gabriel Marques';
const myAge = '28';
const email = 'gabriel.marquesesouza@outlook.com';
const phone = '+55 (31) 99662-5317';
const address = {
  city: 'Contagem',
  state: 'Minas Gerais',
  country: {
    pt: 'Brasil',
    en: 'Brazil',
  },
};
const myCity = 'Contagem';
const translations = {
  en: {
    home: 'Home',
    about: 'About Me',
    education: 'Education/Professional',
    skills: 'Skills',
    projects: 'Projects',
    getInTouch: 'Get In Touch',
    personalInfoText: [myName, 'Software Engineer', `${myAge} Years`],
    aboutMeText: [
      "I'm a Software Developer with a foundation and focus in full - stack development, and a passion for creating beautiful, maintainable, secure, and performance- oriented applications.",
      "With hands-on experience working on national and international teams and projects, I've worked with technologies such as .NET, React, TypeScript, Docker, and Azure — both on the frontend and backend.",
      'I enjoy working at the intersection of development, design, and product, utilizing data and metrics to inform decisions that yield the best possible user experience.',
      'Along with development roles, my career also led me to work as a QA engineer, where I was at the forefront of automation initiatives that boosted deployment quality, and I have since then switched back to development, which is my truly passion - to build useful software always giving my best technical and collaborative skills.',
      "I also hold a bachelor's degree in Law, and I'm currently pursuing a degree in Computer Science, continuously learning and enjoying turning complex challenges into clean, efficient solutions.",
    ],
  },
  pt: {
    home: 'Inicio',
    about: 'Sobre',
    education: 'Formação/Profissional',
    skills: 'Habilidades',
    projects: 'Projetos',
    getInTouch: 'Fale Comigo',
    personalInfoText: [myName, 'Engenheiro de Software', `${myAge} Anos`],
    aboutMeText: [
      'Sou um desenvolvedor de software com base e foco em desenvolvimento full-stack e uma paixão por criar aplicativos bonitos, fáceis de manter, seguros e orientados ao desempenho.',
      'Com experiência prática trabalhando em equipes e projetos nacionais e internacionais, trabalhei com tecnologias como .NET, React, TypeScript, Docker e Azure, tanto no front-end quanto no back-end.',
      'Gosto de trabalhar na interseção de desenvolvimento, design e produto, utilizando dados e métricas para informar decisões que geram a melhor experiência possível para o usuário.',
      'Juntamente com as funções de desenvolvimento, minha carreira também me levou a trabalhar como engenheiro de controle de qualidade, onde estive na vanguarda das iniciativas de automação que aumentaram a qualidade da implantação. Desde então, voltei a trabalhar com desenvolvimento, que é minha verdadeira paixão: criar software útil, sempre dando o melhor de mim em termos de habilidades técnicas e de colaboração.',
      'Também sou bacharel em Direito e atualmente estou me formando em Ciência da Computação, aprendendo continuamente e gostando de transformar desafios complexos em soluções limpas e eficientes.',
    ],
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

const getNavBarText = (language) => {
  navHome.innerText =
    language === 'pt' ? translations.pt.home : translations.en.home;
  navAbout.innerText =
    language === 'pt' ? translations.pt.about : translations.en.about;
  navEducation.innerText =
    language === 'pt' ? translations.pt.education : translations.en.education;
  navSkills.innerText =
    language === 'pt' ? translations.pt.skills : translations.en.skills;
  navProjects.innerText =
    language === 'pt' ? translations.pt.projects : translations.en.projects;
  navContact.innerText =
    language === 'pt' ? translations.pt.getInTouch : translations.en.getInTouch;
};

const getAboutMeText = (language) => {
  language === 'pt'
    ? translations.pt.aboutMeText.forEach((p) => {
        const pTag = document.createElement('p');
        pTag.innerText = p.trim();
        aboutMe.appendChild(pTag);
      })
    : translations.en.aboutMeText.forEach((p) => {
        const pTag = document.createElement('p');
        pTag.innerText = p.trim();
        aboutMe.appendChild(pTag);
      });
};

const getPersonalInfoText = (language) => {
  language === 'pt'
    ? translations.pt.personalInfoText.forEach((p) => {
        const pTag = document.createElement('p');
        pTag.innerText = p.trim();
        personalInfoText.appendChild(pTag);
      })
    : translations.en.personalInfoText.forEach((p) => {
        const pTag = document.createElement('p');
        pTag.innerText = p.trim();
        personalInfoText.appendChild(pTag);
      });
};

const setLanguage = (language) => {
  aboutMe.innerHTML = '';
  personalInfoText.innerHTML = '';

  getNavBarText(language);
  getAboutMeText(language);
  getPersonalInfoText(language);
};

languages.forEach((language) => {
  language.addEventListener('click', (e) => {
    e.preventDefault();

    const lang = language.id;

    langDiv.classList.remove('lang-pt', 'lang-en');
    langDiv.classList.add(`lang-${lang}`);

    setLanguage(lang);
    filterSkills(selectedRole, getCurrentLanguage());
    setContactInfo(getCurrentLanguage());
    renderProjects(getCurrentLanguage());

    localStorage.setItem('selectedLanguage', lang);
  });
});

//---- contact info ----
const contactSection = document.querySelector('.available-contacts');

const generateTagsForContactInfo = () => {
  const divider = document.createElement('div');
  divider.className = 'divider';
  const icon = document.createElement('div');
  icon.className = 'icon';

  const textContainer = document.createElement('div');
  textContainer.className = 'text-container';

  return [divider, icon, textContainer];
};

const getPhoneInfo = (language) => {
  [divider, icon, textContainer] = generateTagsForContactInfo();
  const phoneSection = document.createElement('div');
  phoneSection.className = 'phone';

  const phoneNumber = document.createElement('p');
  phoneNumber.innerText = phone;
  const phoneText = document.createElement('p');
  phoneText.innerText = language === 'pt' ? 'Telefone' : 'Phone';

  textContainer.appendChild(phoneText);
  textContainer.appendChild(phoneNumber);

  icon.innerHTML = `<svg
                  fill="#000000"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 455.731 455.731"
                  xml:space="preserve"
                  data-darkreader-inline-fill=""
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <g>
                      <path
                        d="M228.071,95.321c-72.877,0-132.167,59.29-132.167,132.167c0,25.393,7.217,50.052,20.869,71.311l3.281,5.109l-12.855,45.658 l47.238-12.16l4.872,2.975c20.654,12.609,44.432,19.274,68.762,19.274c72.877,0,132.166-59.29,132.166-132.167 S300.948,95.321,228.071,95.321z M309.117,268.109l-1.649,7.702c-1.86,8.69-7.021,16.377-14.508,21.166 c-9.453,6.047-21.706,9.016-37.28,4.612c-48.333-13.667-75.667-45.667-90.333-65.667c-14.667-20-20.333-40-16.667-56.333 c2.459-10.954,10.465-19.359,15.472-23.708c2.453-2.13,5.635-3.214,8.878-3.037l10.328,0.563c2.034,0.111,3.828,1.367,4.629,3.24 l15.045,35.201c0.804,1.881,0.465,4.055-0.872,5.602l-13.096,15.15c-1.062,1.228-1.247,2.978-0.499,4.419 c17.248,33.224,48.682,46.389,58.066,49.687c1.599,0.562,3.371,0.031,4.407-1.312l13.703-17.764 c1.524-1.976,4.211-2.636,6.477-1.591l34.905,16.089C308.398,263.177,309.641,265.661,309.117,268.109z"
                      ></path>
                      <path
                        style="fill: none"
                        d="M0,0v455.731h455.731V0H0z M228.071,386.655c-27.347,0-54.125-7-77.814-20.292L68.494,387.41l22.323-79.284 c-14.355-24.387-21.913-52.134-21.913-80.638c0-87.765,71.402-159.167,159.167-159.167s159.166,71.402,159.166,159.167 C387.237,315.253,315.836,386.655,228.071,386.655z"
                      ></path>
                    </g>
                  </g>
                    </svg>`;

  phoneSection.appendChild(icon);
  phoneSection.appendChild(textContainer);
  phoneSection.appendChild(divider);
  contactSection.appendChild(phoneSection);
};

const getEmailInfo = () => {
  [divider, icon, textContainer] = generateTagsForContactInfo();
  const emailSection = document.createElement('div');
  emailSection.className = 'email';

  const emailText = document.createElement('p');
  emailText.innerText = 'Email';
  const emailAddress = document.createElement('p');
  emailAddress.innerText = email;

  textContainer.appendChild(emailText);
  textContainer.appendChild(emailAddress);

  icon.innerHTML = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                   <path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z"/>
                      </svg>`;

  emailSection.appendChild(icon);
  emailSection.appendChild(textContainer);
  emailSection.appendChild(divider);
  contactSection.appendChild(emailSection);
};

const getAddressInfo = (language) => {
  [divider, icon, textContainer] = generateTagsForContactInfo();
  const addressSection = document.createElement('div');
  addressSection.className = 'address';

  const city = document.createElement('p');
  city.innerText = `${address.city}, ${address.state}`;

  const country = document.createElement('p');
  country.innerText =
    language === 'pt' ? address.country.pt : address.country.en;

  textContainer.appendChild(city);
  textContainer.appendChild(country);

  icon.innerHTML = `<svg viewBox="0 0 32 32"
    style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
    version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
    xmlns:serif="http://www.serif.com/" xmlns:xlink="http://www.w3.org/1999/xlink">
  <g id="Layer1">
  <path d="M16,2c-6.071,0 -11,4.929 -11,11c0,2.778 1.654,6.081 3.699,9.019c2.939,4.224 6.613,7.707 6.613,7.707c0.386,0.365 0.99,0.365 1.376,-0c0,-0 3.674,-3.483 6.613,-7.707c2.045,-2.938 3.699,-6.241 3.699,-9.019c0,-6.071 -4.929,-11 -11,-11Zm0,5.5c-3.036,0 -5.5,2.464 -5.5,5.5c0,3.036 2.464,5.5 5.5,5.5c3.036,-0 5.5,-2.464 5.5,-5.5c0,-3.036 -2.464,-5.5 -5.5,-5.5Zm0,2c1.932,0 3.5,1.568 3.5,3.5c0,1.932 -1.568,3.5 -3.5,3.5c-1.932,-0 -3.5,-1.568 -3.5,-3.5c0,-1.932 1.568,-3.5 3.5,-3.5Z"/>
  </g>
                        </svg>`;

  addressSection.appendChild(icon);
  addressSection.appendChild(textContainer);
  contactSection.appendChild(addressSection);
};

const setContactInfo = (language) => {
  contactSection.innerHTML = '';

  getPhoneInfo(language);
  getEmailInfo();
  getAddressInfo(language);
};

setContactInfo(savedLang);
//---- contact info ----

if (savedLang) {
  setLanguage(savedLang);
  langDiv.classList.add(`lang-${savedLang}`);
  filterSkills(selectedRole, savedLang);
}
//---- translations ----
