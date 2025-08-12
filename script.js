// ---- data ----
const myName = 'Gabriel Marques';
const myAge = '28';
const companies = [
  'dti digital',
  'Four - Buy Now Pay Later',
  'Catalde Technology',
  'Secretaria de Estado de Governo - SEGOV | MG',
];
const university = 'Centro Universitario UNA';

const data = {
  skills: {
    title: ['Skills', 'Habilidades'],
    techSkills: [
      { name: 'HTML', level: 2, role: ['frontend'] },
      { name: 'CSS', level: 2, role: ['frontend'] },
      { name: 'React', level: 1, role: ['frontend'] },
      { name: 'Material UI', level: 1, role: ['frontend'] },
      { name: 'Tailwind CSS', level: 1, role: ['frontend'] },

      { name: 'JavaScript', level: 2, role: ['frontend', 'backend'] },
      { name: 'TypeScript', level: 2, role: ['frontend', 'backend'] },
      { name: 'Node.js', level: 2, role: ['backend'] },
      { name: 'C#', level: 2, role: ['backend'] },
      { name: '.NET | .NET Core', level: 2, role: ['backend'] },
      { name: 'SQL', level: 2, role: ['backend'] },
      { name: 'EF Core', level: 1, role: ['backend'] },
      { name: 'ASP.NET Core MVC', level: 1, role: ['backend'] },
      { name: 'Dapper ORM', level: 1, role: ['backend'] },

      { name: 'Git', level: 2, role: ['devops'] },
      { name: 'Azure DevOps', level: 2, role: ['devops'] },
      { name: 'Azure Portal', level: 1, role: ['devops'] },
      { name: 'PostgreSql', level: 1, role: ['devops'] },
      { name: 'MySQL', level: 1, role: ['devops'] },
      { name: 'MSSQL', level: 1, role: ['devops'] },
      { name: 'MongoDB', level: 1, role: ['devops'] },
      { name: 'Docker', level: 1, role: ['devops'] },
      { name: 'Scrum', level: 1, role: ['devops'] },
      { name: 'BitBucket', level: 1, role: ['devops'] },

      { name: 'WebDriverIO', level: 2, role: ['test'] },
      { name: 'xUnit', level: 1, role: ['test', 'backend'] },
      { name: 'Moq', level: 1, role: ['test', 'backend'] },
      { name: 'NSubstitute', level: 1, role: ['test', 'backend'] },
      { name: 'Jest', level: 1, role: ['test', 'frontend'] },
      { name: 'React Testing Library', level: 1, role: ['test', 'frontend'] },
      { name: 'Mocha', level: 1, role: ['test'] },
      { name: 'Appium', level: 1, role: ['test'] },
      { name: 'Chai', level: 1, role: ['test'] },

      { name: 'Visual Studio', level: 3, role: ['tools'] },
      { name: 'VS Code', level: 3, role: ['tools'] },
      { name: 'Postman', level: 2, role: ['tools'] },
      { name: 'Insomnia', level: 2, role: ['tools'] },
      { name: 'BrowserStack', level: 2, role: ['tools'] },
      { name: 'Jira', level: 1, role: ['tools', 'devops'] },
      { name: 'Figma', level: 1, role: ['tools'] },
    ],
    softSkills: {
      en: [
        { name: 'Communication', level: 3, role: ['softskills'] },
        { name: 'Team work', level: 3, role: ['softskills'] },
        { name: 'Commitment', level: 3, role: ['softskills'] },
        { name: 'Flexibility', level: 3, role: ['softskills'] },
        { name: 'Autonomy', level: 3, role: ['softskills'] },
        { name: 'Creativity', level: 2, role: ['softskills'] },
        { name: 'Inovation', level: 3, role: ['softskills'] },
        { name: 'Time management', level: 2, role: ['softskills'] },
      ],
      pt: [
        { name: 'Comunicação', level: 3, role: ['softskills'] },
        { name: 'Trabalho em equipe', level: 3, role: ['softskills'] },
        { name: 'Comprometimento', level: 3, role: ['softskills'] },
        { name: 'Flexibilidade', level: 3, role: ['softskills'] },
        { name: 'Autonomia', level: 3, role: ['softskills'] },
        { name: 'Criatividade', level: 2, role: ['softskills'] },
        { name: 'Inovação', level: 3, role: ['softskills'] },
        { name: 'Gestão de tempo', level: 2, role: ['softskills'] },
      ],
    },
  },
  projects: [
    {
      title: 'eLoad - Gestão de Carga de Treino',
      type: 'Freelance',
      url: 'https://eload.com.br/',
      description: {
        en: `Monolithic ASP.NET Core MVC application to monitor and evaluate athletes' performance,facilitating analysis, helping to make decisions forupcoming training sessions, improving athletes' performance and preventing injuries.`,
        pt: `Aplicativo monolito, ASP.NET Core MVC, para monitorar e avaliar o desempenho dos atletas, facilitando a análise, ajudando a tomar decisões paraas próximas sessões de treinamento, melhorando o desempenhodos atletas e prevenindo lesões.`,
      },
      imageUrl: './resources/eload.ico',
    },
  ],

  email: 'gabriel.marquesesouza@outlook.com',
  phone: '+55 (31) 99662-5317',
  address: {
    city: 'Contagem',
    state: 'Minas Gerais',
    country: {
      pt: 'Brasil',
      en: 'Brazil',
    },
  },
  translations: {
    en: {
      home: 'Home',
      about: 'About Me',
      education: 'Education/Professional',
      skills: 'Skills',
      projects: 'Projects',
      getInTouch: 'Get In Touch',
      heroSection: {
        intro: "Hi, I'm Gabriel Marques",
        firstParagraph:
          'Software Engineer passionate about building scalable, high-quality functional applications,',
        secondParagraph:
          'always focused on delivering to users a great user experience.',
        scroll: 'Scroll For More Info',
      },
      personalInfoText: [myName, 'Software Engineer', `${myAge} Years`],
      aboutMeText: [
        "I'm a Software Engineer with a foundation and focus in full-stack development, and a passion for creating beautiful, maintainable, secure, and performance-oriented applications.",
        "With hands-on experience working on national and international teams and projects, I've worked with technologies such as .NET, React, TypeScript, Docker, and Azure — both on the frontend and backend.",
        'I enjoy working at the intersection of development, design, and product, utilizing data and metrics to inform decisions that yield the best possible user experience.',
        'Along with development roles, my career also led me to work as a QA engineer, where I was at the forefront of automation initiatives that boosted deployment quality, and I have since then switched back to development, which is my truly passion - to build useful software always giving my best technical and collaborative abilities.',
        "I also hold a bachelor's degree in Law, and I'm currently pursuing a degree in Computer Science, continuously learning and enjoying turning complex challenges into clean, efficient solutions.",
      ],
      xpSection: {
        headings: ['Professional Experience', 'Education'],
        jobs: [
          {
            job: 'Software Engineer',
            company: companies[3],
            summary: 'Fullstack Development - PHP, VueJS',
            date: 'Jun/2025 - Current',
          },
          {
            job: 'Software Engineer',
            company: companies[0],
            summary: 'Fullstack Development - React, .NET',
            date: 'Oct/2024 - Mai/2025',
          },
          {
            job: 'QA Engineer',
            company: companies[1],
            summary:
              'Manual tester - exploratory, regression, onDB - and Lead Automation Engineer - WebDriverIO, Appium, NodeJs',
            date: 'Dec/2022 - Feb/2024',
          },
          {
            job: 'Software Engineer',
            company: companies[2],
            summary: 'Backend Development - .NET, .NET Core, C#',
            date: 'Aug/2021 - Dec/2022',
          },
        ],
        graduations: [
          {
            university: university,
            graduation: "Bachelor's degree, Computer Science",
            gradDate: '2024 - 2027',
          },
          {
            university: university,
            graduation: "Bachelor's degree, Law",
            gradDate: '2016 - 2021',
          },
        ],
      },
      contactForm: {
        headings: [
          "Let's work together",
          "Fill the form bellow and soon I'll get back to you:",
        ],
        placeHolders: {
          name: 'First and last name',
          email: 'Email address',
          subject: 'Subject',
          message: 'Type your message here',
          buttons: ['Send Email', 'Send Message'],
        },
      },
    },
    pt: {
      home: 'Inicio',
      about: 'Sobre',
      education: 'Formação/Profissional',
      skills: 'Habilidades',
      projects: 'Projetos',
      getInTouch: 'Fale Comigo',
      heroSection: {
        intro: 'Olá, sou o Gabriel Marques',
        firstParagraph:
          'Engenheiro de Software focado em construir soluções escaláveis, com alta qualidade e funcionais,',
        secondParagraph:
          'sempre focado em entregar para os usuários uma ótima experiência.',
        scroll: 'Role para mais informações',
      },
      personalInfoText: [myName, 'Engenheiro de Software', `${myAge} Anos`],
      aboutMeText: [
        'Sou um desenvolvedor de software focado no desenvolvimento full-stack e uma paixão por criar aplicações bonitas, manuteníveis, seguras e com bom desempenho.',
        'Com experiência prática trabalhando em equipes e projetos nacionais e internacionais, trabalhei com tecnologias como .NET, React, TypeScript, Docker e Azure, tanto no front-end quanto no back-end.',
        'Gosto de trabalhar em conjunto com os times de design e produto, utilizando dados e métricas para orientar decisões que gerem a melhor experiência possível para o usuário.',
        'Juntamente com as funções de desenvolvimento, minha carreira também me levou a trabalhar como engenheiro de qualidade (QA), onde estive na vanguarda da automação dos testes, melhorando a qualidade final do produto. Desde então, voltei a trabalhar com desenvolvimento, que é minha verdadeira paixão: criar software útil, sempre dando o melhor de mim em termos de habilidades técnicas e de colaboração.',
        'Também sou bacharel em Direito e atualmente estou me formando em Ciência da Computação, aprendendo continuamente e gostando de transformar desafios complexos em soluções limpas e eficientes.',
      ],
      xpSection: {
        headings: ['Experiência Profissional', 'Educação'],
        jobs: [
          {
            job: 'Software Engineer',
            company: companies[3],
            summary: 'Desenvolvimento FullStack - PHP, VueJS',
            date: 'Jun/2025 - Atual',
          },
          {
            job: 'Engenheiro de Software',
            company: companies[0],
            summary: 'Desenvolvimento FullStack - React, .NET',
            date: 'Out/2024 - Mai/2025',
          },
          {
            job: 'Engenheiro QA',
            company: companies[1],
            summary:
              'Testes manuais - exploratórios, regressão, onDB - e responsável pelos testes automatizados - WebDriverIO, Appium, NodeJs',
            date: 'Dez/2022 - Fev/2024',
          },
          {
            job: 'Engenheiro de Software',
            company: companies[2],
            summary: 'Desenvolvimento Backend - .NET, .NET Core, C#',
            date: 'Ago/2021 - Dez/2022',
          },
        ],
        graduations: [
          {
            university: university,
            graduation: 'Bacharel, Ciência da Computação',
            gradDate: '2024 - 2027',
          },
          {
            university: university,
            graduation: 'Bacharel, Direito',
            gradDate: '2016 - 2021',
          },
        ],
      },
      contactForm: {
        headings: [
          'Vamos trabalhar juntos',
          'Preencha o formulário abaixo, e em breve retornarei seu contato:',
        ],
        placeHolders: {
          name: 'Nome e sobrenome',
          email: 'Email',
          subject: 'Assunto',
          message: 'Digite sua mensagem aqui',
          buttons: ['Enviar Email', 'Enviar Mensagem'],
        },
      },
    },
  },
};
// ---- data ----

// ---------------- global -------------------
const savedLang = localStorage.getItem('selectedLanguage');
const langDiv = document.getElementById('selected-lang');
const languages = document.querySelectorAll('.language-menu a');
const langMenu = document.querySelector('.language-menu');
let selectedRole = 'all';

const breakHeading = () => {
  const heading = document.querySelector('.profession-container h2');
  if (!heading) return;

  const words = heading.textContent.trim().split(' ');

  if (words.length >= 2) {
    heading.innerHTML = `${words[0]}<br>${words.slice(1).join(' ')}`;
  }
};

const breakFormText = () => {
  const formText = document.querySelector('.contact-text p');
  if (!formText) return;

  const words = formText.textContent.trim().split(' ');

  const firstPart = words.slice(0, 6).join(' ');
  const secondPart = words.slice(6).join(' ');

  formText.innerHTML = `${firstPart}<br>${secondPart}`;
};

const getTextTheme = () => {
  const theme = localStorage.getItem('theme');

  return theme === 'dark' ? 'text-white-gradient' : 'text-black-gradient';
};

const getCurrentLanguage = () => {
  return langDiv.classList.contains('lang-pt') ? 'pt' : 'en';
};

const createElement = (el) => {
  const element = document.createElement(el);
  return element;
};

const createElements = (elList) => {
  const elements = elList.map((el) => {
    return document.createElement(el);
  });

  return elements;
};

const getTheme = () => {
  return localStorage.getItem('theme');
};

const systemPrefersDark = window.matchMedia(
  '(prefers-color-scheme: dark)'
).matches;

const switchThemeBtn = document.getElementById('theme-switch');

const userTheme = getTheme();
if (userTheme === 'dark' || (!userTheme && systemPrefersDark)) {
  document.body.classList.add('dark');
  switchThemeBtn.checked = true;
}

switchThemeBtn.addEventListener('change', () => {
  document.body.classList.toggle('dark', switchThemeBtn.checked);
  localStorage.setItem('theme', switchThemeBtn.checked ? 'dark' : 'light');

  document.body.classList.add('fade-theme');
  setTimeout(() => {
    document.body.classList.remove('fade-theme');
  }, 700);

  getHeroText(getCurrentLanguage());
  getAboutMeText(getCurrentLanguage());
  getPersonalInfoText(getCurrentLanguage());
  filterSkills(selectedRole, getCurrentLanguage());
  renderProjects(getCurrentLanguage());
  getContactFormText(getCurrentLanguage());
  setFooterText(getCurrentLanguage());
  setExperienceSection(getCurrentLanguage(), getTextTheme());
  setContactInfo(getCurrentLanguage());
});

const generateStars = () => {
  const starsContainer = document.getElementById('stars-container');
  const stars = Math.floor((window.innerWidth * window.innerHeight) / 20000);

  const newStars = [];

  for (let i = 0; i < stars; i++) {
    newStars.push({
      id: i,
      size: Math.random() * 1 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: Math.random() * 0.5 + 0.5,
      animationDuration: Math.random() * 5 + 2,
    });
  }

  newStars.forEach((star) => {
    const newStar = document.createElement('div');
    newStar.className = 'star';
    newStar.setAttribute('id', star.id);
    newStar.style.width = `${star.size}px`;
    newStar.style.height = `${star.size}px`;
    newStar.style.left = `${star.x}%`;
    newStar.style.top = `${star.y}%`;
    newStar.style.opacity = star.opacity;
    newStar.style.animation = `fadeIn ${star.animationDuration}s linear infinite`;

    starsContainer.appendChild(newStar);
  });
};

generateStars();

// ---------------- global -------------------

// ---- navbar ----
const navHome = document.getElementById('nav-home');
const navAbout = document.getElementById('nav-about');
const navEducation = document.getElementById('nav-education');
const navSkills = document.getElementById('nav-skills');
const navProjects = document.getElementById('nav-projects');
const navContact = document.getElementById('nav-contactme');
const navLinks = document.querySelectorAll('.navbar-container a');
const menuToggle = document.querySelector('.menu-toggle');
const navbarContainer = document.querySelector('.navbar-container');

menuToggle.addEventListener('click', () => {
  navbarContainer.classList.toggle('open');
});

let temporarilyDisableObserver = false;
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    temporarilyDisableObserver = true;

    setTimeout(() => {
      temporarilyDisableObserver = false;
    }, 500);

    navLinks.forEach((l) => l.classList.remove('active'));
    link.classList.add('active');

    navbarContainer.classList.remove('open');
  });
});

const getNavBarText = (language) => {
  const translations =
    language === 'pt' ? data.translations.pt : data.translations.en;

  navHome.innerText = translations.home;
  navAbout.innerText = translations.about;
  navEducation.innerText = translations.education;
  navSkills.innerText = translations.skills;
  navProjects.innerText = translations.projects;
  navContact.innerText = translations.getInTouch;
};

const sections = document.querySelectorAll('.content-container > section');
const observeSections = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (temporarilyDisableObserver) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === entry.target.id) {
              link.classList.add('active');
            }
          });
        }
      });
    },
    { threshold: 0.5 }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
};
observeSections();
// ---- navbar ----

// ---- hero ----
const hero = document.getElementById('hero');
const getHeroText = (language) => {
  hero.innerHTML = '';
  const [h3, paragraph, scroll, scrollP, arrow, arrowSvg] = createElements([
    'h3',
    'p',
    'p',
    'div',
    'p',
    'div',
    'svg',
  ]);

  const translations =
    language === 'pt'
      ? data.translations.pt.heroSection
      : data.translations.en.heroSection;

  h3.innerText = translations.intro;
  paragraph.className = getTextTheme();

  paragraph.innerText = `${translations.firstParagraph} ${translations.secondParagraph}`;
  scrollP.innerText = translations.scroll;

  scroll.className = 'scroll-down';
  arrow.className = 'arrow';
  arrowSvg.innerHTML = `<svg viewBox="0 0 30 30 " 
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M 5.21875 6.6875 L 3.78125 8.09375 L 16 20.3125 L 28.21875 8.09375 L 26.78125 6.6875 L 16 17.46875 Z M 5.21875 13.6875 L 3.78125 15.09375 L 16 27.3125 L 28.21875 15.09375 L 26.78125 13.6875 L 16 24.46875 Z"
              />
            </svg>`;

  arrow.appendChild(arrowSvg);
  scroll.appendChild(scrollP);
  scroll.appendChild(arrow);

  hero.appendChild(h3);
  hero.appendChild(paragraph);
  hero.appendChild(scroll);
};

getHeroText(savedLang);
// ---- hero ----

// ---- about ----
const personalInfoText = document.getElementById('personalInfoText');
const aboutMe = document.getElementById('aboutme');

const createParagraphs = (paragraph, className) => {
  const pTag = createElement('p');

  if (className) {
    pTag.className = className;
  }

  pTag.innerText = paragraph.trim();
  return pTag;
};

const getAboutMeText = (language) => {
  aboutMe.innerHTML = '';

  language === 'pt'
    ? data.translations.pt.aboutMeText.forEach((p) => {
        const pTag = createParagraphs(p, getTextTheme());

        aboutMe.appendChild(pTag);
      })
    : data.translations.en.aboutMeText.forEach((p) => {
        const pTag = createParagraphs(p, getTextTheme());

        aboutMe.appendChild(pTag);
      });
};

const getPersonalInfoText = (language) => {
  personalInfoText.innerHTML = '';

  language === 'pt'
    ? data.translations.pt.personalInfoText.forEach((p) => {
        const pTag = createParagraphs(p, getTextTheme());
        personalInfoText.appendChild(pTag);
      })
    : data.translations.en.personalInfoText.forEach((p) => {
        const pTag = createParagraphs(p, getTextTheme());
        personalInfoText.appendChild(pTag);
      });
};
// ---- about ----

// ---- experience ----
const experience = document.getElementById('experience');
const professionContainer = document.querySelector('.profession-container');
const educationContainer = document.querySelector('.education-container');

const getExperience = (language) => {
  const translations =
    language === 'pt'
      ? data.translations.pt.xpSection
      : data.translations.en.xpSection;

  const header = createElement('h2');
  header.innerText = translations.headings[0];

  professionContainer.appendChild(header);

  const theme = getTextTheme();

  translations.jobs.forEach((job) => {
    const [card, role, company, summary, date] = createElements([
      'article',
      'p',
      'p',
      'p',
      'p',
    ]);

    card.className = 'card';

    role.className = `role ${theme}`;
    role.innerText = job.job;

    company.className = `company ${theme}`;
    company.innerText = job.company;

    summary.className = `role-summary ${theme}`;
    summary.innerText = job.summary;

    date.className = `start-end-date ${theme}`;
    date.innerText = job.date;

    card.appendChild(role);
    card.appendChild(company);
    card.appendChild(summary);
    card.appendChild(date);

    professionContainer.appendChild(card);
  });

  experience.appendChild(professionContainer);
};

const getEducation = (language) => {
  const translations =
    language === 'pt'
      ? data.translations.pt.xpSection
      : data.translations.en.xpSection;

  const header = createElement('h2');
  header.innerText = translations.headings[1];

  educationContainer.appendChild(header);

  const theme = getTextTheme();

  translations.graduations.forEach((grad) => {
    const [card, university, graduation, date] = createElements([
      'article',
      'p',
      'p',
      'p',
    ]);

    card.className = 'card';

    university.className = `university ${theme}`;
    university.innerText = grad.university;

    graduation.className = `graduation-field ${theme}`;
    graduation.innerText = grad.graduation;

    date.className = `graduation-date ${theme}`;
    date.innerText = grad.gradDate;

    card.appendChild(university);
    card.appendChild(graduation);
    card.appendChild(date);

    educationContainer.appendChild(card);
  });

  experience.appendChild(educationContainer);
};

const setExperienceSection = (language) => {
  experience.innerHTML = '';
  professionContainer.innerHTML = '';
  educationContainer.innerHTML = '';

  getExperience(language);
  getEducation(language);
};

setExperienceSection(savedLang);

// ---- experience ----

// ---- skills ----
const skillsContainer = document.getElementById('skill-list-container');
const skillBtns = document.querySelectorAll('.btn');
const skillHeader = document.querySelector('#skills h3');

skillBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    skillBtns.forEach((btn) => btn.classList.remove('active'));
    btn.classList.add('active');

    selectedRole = btn.id.toLowerCase();
    filterSkills(selectedRole, getCurrentLanguage());
  });
});

const getSoftSkills = (language) => {
  return language === 'pt'
    ? data.skills.softSkills.pt
    : data.skills.softSkills.en;
};

const getFilteredSkills = (roleFilter, language) => {
  if (roleFilter === 'softskills') {
    return getSoftSkills(language);
  }
  if (roleFilter === 'all') {
    return [...data.skills.techSkills, ...getSoftSkills(language)];
  }
  return data.skills.techSkills.filter((skill) =>
    skill.role.includes(roleFilter)
  );
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
    { threshold: 0.5 }
  );

  document
    .querySelectorAll('.skill-bar')
    .forEach((bar) => observer.observe(bar));
};

const filterSkills = (roleFilter, language) => {
  skillsContainer.innerHTML = '';
  skillBtns[0].innerHTML = language === 'pt' ? 'Todas' : 'All';
  skillBtns[3].innerHTML = 'DevOps | Database';
  skillBtns[4].innerHTML = language === 'pt' ? 'Teste' : 'Testing';
  skillBtns[6].innerHTML = language === 'pt' ? 'Ferramentas' : 'Tools';
  skillHeader.innerHTML =
    language === 'pt' ? data.skills.title[1] : data.skills.title[0];

  const filteredSkills = getFilteredSkills(roleFilter, language);

  //create html/node tree for skills
  filteredSkills.forEach((skill) => {
    const [skillDiv, name, levelBar] = createElements(['div', 'p', 'div']);

    skillDiv.className = 'skill';

    name.className = `skill-name ${getTextTheme()}`;
    name.innerText = skill.name;

    levelBar.className = 'skill-bar';

    for (let i = 1; i <= 3; i++) {
      const segment = createElement('div');
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

filterSkills('all', savedLang);
// ---- skills ----

// ---- projects ----
const projectsHeader = document.querySelector('#projects h3');
const projectsContainer = document.querySelector('.project-container');
const renderProjects = (language) => {
  projectsContainer.innerHTML = '';
  projectsHeader.innerHTML = language === 'pt' ? 'Projetos' : 'Projects';

  data.projects.forEach((project) => {
    const [item, imageTag, title, iconSvg, description] = createElements([
      'div',
      'img',
      'p',
      'div',
      'p',
    ]);

    item.className = 'project-item';

    imageTag.className = 'project-logo';
    imageTag.src = project.imageUrl;

    title.className = `project-title ${getTextTheme()}`;
    title.innerHTML = `${project.title} - ${project.type}`;

    iconSvg.innerHTML = `
      <a href=${project.url} target="_blank">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_429_11072)">
            <path d="M11 3.99994H4V17.9999C4 19.1045 4.89543 19.9999 6 19.9999H18C19.1046 19.9999 20 19.1045 20 17.9999V12.9999"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path d="M9 14.9999L20 3.99994"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path d="M15 3.99994H20V8.99994"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </svg>
      </a>`;

    description.classList = `project-description ${getTextTheme()}`;
    description.innerText =
      language === 'pt' ? project.description.pt : project.description.en;

    item.appendChild(imageTag);
    item.appendChild(title);
    item.appendChild(iconSvg);
    item.appendChild(description);
    projectsContainer.appendChild(item);
  });
};

renderProjects(savedLang);
// ---- projects ----

// ---- contact ----
const getContactFormText = (language) => {
  const textTheme = getTextTheme();
  const translations =
    language === 'pt'
      ? data.translations.pt.contactForm
      : data.translations.en.contactForm;

  const contactFormText = document.querySelector('.contact-text');
  contactFormText.children[0].innerText = translations.headings[0];
  contactFormText.children[1].innerText = translations.headings[1];
  contactFormText.children[1].className = textTheme;

  const nameEmail = document.querySelectorAll('.name-email input');
  nameEmail[0].placeholder = translations.placeHolders.name;
  nameEmail[1].placeholder = translations.placeHolders.email;

  const subject = document.querySelector('.subject input');
  subject.placeholder = translations.placeHolders.subject;

  const message = document.querySelector('.message textarea');
  message.placeholder = translations.placeHolders.message;

  const buttons = document.querySelector('.contact-btns');
  buttons.children[0].innerText = translations.placeHolders.buttons[0];

  buttons.children[1].innerText = language === 'pt' ? 'ou' : 'or';
  buttons.children[1].className = textTheme;

  buttons.children[2].innerText = translations.placeHolders.buttons[1];
};

getContactFormText(savedLang);

// -- available contacts --
const contactSection = document.querySelector('.available-contacts');

const generateTagsForContactInfo = () => {
  const [divider, icon, textContainer] = createElements(['div', 'div', 'div']);

  divider.className = 'divider';
  icon.className = 'icon';
  textContainer.className = `text-container ${getTextTheme()}`;

  return [divider, icon, textContainer];
};

const getPhoneInfo = (language) => {
  const [divider, icon, textContainer] = generateTagsForContactInfo();
  const [phoneSection, phoneNumber, phoneText] = createElements([
    'div',
    'p',
    'p',
  ]);

  phoneSection.className = 'phone';
  phoneNumber.innerText = data.phone;
  phoneText.innerText = language === 'pt' ? 'Telefone' : 'Phone';

  textContainer.appendChild(phoneText);
  textContainer.appendChild(phoneNumber);

  icon.innerHTML = `<svg
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
  const [divider, icon, textContainer] = generateTagsForContactInfo();
  const [emailSection, emailText, emailAddress] = createElements([
    'div',
    'p',
    'p',
  ]);

  emailSection.className = 'email';
  emailText.innerText = 'Email';
  emailAddress.innerText = data.email;

  textContainer.appendChild(emailText);
  textContainer.appendChild(emailAddress);

  icon.innerHTML = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5
                    7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099
                    6.75H5.68986L11.9999 12.4864L18.3099 6.75Z"/>
                    </svg>`;

  emailSection.appendChild(icon);
  emailSection.appendChild(textContainer);
  emailSection.appendChild(divider);
  contactSection.appendChild(emailSection);
};

const getAddressInfo = (language) => {
  const [divider, icon, textContainer] = generateTagsForContactInfo();
  const [addressSection, city, country] = createElements(['div', 'p', 'p']);

  addressSection.className = 'address';

  city.innerText = `${data.address.city}, ${data.address.state}`;

  country.innerText =
    language === 'pt' ? data.address.country.pt : data.address.country.en;

  textContainer.appendChild(city);
  textContainer.appendChild(country);

  icon.innerHTML = `<svg viewBox="0 0 32 32"
                    style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
                    version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
                    xmlns:serif="http://www.serif.com/" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g id="Layer1">
                    <path d="M16,2c-6.071,0 -11,4.929 -11,11c0,2.778 1.654,6.081 3.699,9.019c2.939,
                    4.224 6.613,7.707 6.613,7.707c0.386,0.365 0.99,0.365 1.376,-0c0,-0 3.674,-3.483 6.613,
                    -7.707c2.045,-2.938 3.699,-6.241 3.699,-9.019c0,-6.071 -4.929,-11 -11,-11Zm0,5.5c-3.036,
                    0 -5.5,2.464 -5.5,5.5c0,3.036 2.464,5.5 5.5,5.5c3.036,-0 5.5,-2.464 5.5,-5.5c0,-3.036 -2.464,
                    -5.5 -5.5,-5.5Zm0,2c1.932,0 3.5,1.568 3.5,3.5c0,1.932 -1.568,3.5 -3.5,3.5c-1.932,-0 -3.5,
                    -1.568 -3.5,-3.5c0,-1.932 1.568,-3.5 3.5,-3.5Z"/>
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
// -- available contacts --
// ---- whatsapp and email buttons ----
const form = document.querySelector('[data-form]');
const inputs = document.querySelectorAll('[data-form-input]');
const formBtns = form.querySelectorAll('[data-form-btn]');

const checkFormValidity = () => {
  const allFilled = Array.from(inputs).every(
    (input) => input.value.trim() !== ''
  );

  formBtns.forEach((button) => (button.disabled = !allFilled));
};

checkFormValidity();

inputs.forEach((input) => input.addEventListener('input', checkFormValidity));

function sendMessage(channel) {
  const name = document.querySelector('[name="fullname"]').value;
  const email = document.querySelector('[name="email"]').value;
  const subject = document.querySelector('[name="subject"]').value;
  const message = document.querySelector('[name="message-description"]').value;

  const language = getCurrentLanguage();

  let formattedMessage = '';
  if (language === 'pt') {
    formattedMessage = `Olá! Me chamo ${name}!\nMeu email é ${email}\nQuero falar sobre ${subject}\n${message}`;
  } else {
    formattedMessage = `Hi! My name is ${name}!\nMy email is ${email}\nI wish to talk about ${subject}\n${message}`;
  }

  const encodedMessage = encodeURIComponent(formattedMessage);

  if (channel === 'email') {
    sendEmail(encodedMessage, subject);
  } else {
    sendWhatsAppMessage(encodedMessage);
  }
}

function sendWhatsAppMessage(message) {
  const phoneNumber = '5531996625317';
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

  // Open the WhatsApp URL in a new window or tab
  window.open(whatsappURL, '_blank');
}

function sendEmail(body, subject) {
  const mailtoLink = `mailto:${data.email}?subject=${encodeURIComponent(
    subject
  )}&body=${body}`;

  window.location.href = mailtoLink;
}
// ---- whatsapp and email ----
// ---- contact ----

// ---- footer ----
const setFooterText = (language) => {
  const text =
    language === 'pt' ? 'Todos os direitos reservados' : 'All Rights Reserved';

  const footer = document.querySelector('footer');
  footer.className = getTextTheme();
  footer.children[0].innerText = `2025, Gabriel Marques. ${text}.`;
};
// ---- footer ----

const setLanguage = (language) => {
  aboutMe.innerHTML = '';
  personalInfoText.innerHTML = '';

  getNavBarText(language);
  getAboutMeText(language);
  getPersonalInfoText(language);
  getHeroText(language);
  setExperienceSection(language);
  getContactFormText(language);
  setFooterText(language);
};

if (!savedLang) {
  savedLang = 'pt';
  localStorage.setItem('selectedLanguage', savedLang);
} else {
  setLanguage(savedLang);
  langDiv.classList.add(`lang-${savedLang}`);
  filterSkills(selectedRole, savedLang);
}

langMenu.addEventListener('click', (e) => {
  if (e.target.closest('a')) return;

  langMenu.classList.toggle('open');
});

languages.forEach((language) => {
  language.addEventListener('click', (e) => {
    e.preventDefault();

    const lang = language.id;

    langDiv.classList.remove('lang-pt', 'lang-en');
    langDiv.classList.add(`lang-${lang}`);

    langMenu.classList.remove('open');

    setLanguage(lang);
    filterSkills(selectedRole, getCurrentLanguage());
    setContactInfo(getCurrentLanguage());
    renderProjects(getCurrentLanguage());
    getHeroText(getCurrentLanguage());
    setExperienceSection(getCurrentLanguage());
    getContactFormText(getCurrentLanguage());

    localStorage.setItem('selectedLanguage', lang);
  });
});

if (window.innerWidth <= 667) {
  breakHeading();

  breakFormText();
}
