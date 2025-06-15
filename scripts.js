import { data } from './data.js';

// ---------------- global -------------------
const savedLang = localStorage.getItem('selectedLanguage');
const langDiv = document.getElementById('selected-lang');
const languages = document.querySelectorAll('.language-menu a');

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

const switchThemeBtn = document.getElementById('theme-switch');

switchThemeBtn.addEventListener('change', () => {
  document.body.classList.toggle('dark', switchThemeBtn.checked);
  localStorage.setItem('theme', switchThemeBtn.checked ? 'dark' : 'light');
});

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
  switchThemeBtn.checked = true;
}
// ---------------- global -------------------

// ---- navbar ----
const navHome = document.getElementById('nav-home');
const navAbout = document.getElementById('nav-about');
const navEducation = document.getElementById('nav-education');
const navSkills = document.getElementById('nav-skills');
const navProjects = document.getElementById('nav-projects');
const navContact = document.getElementById('nav-contactme');

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
// ---- navbar ----

// ---- hero ----
const hero = document.getElementById('hero');
const getHeroText = (language) => {
  hero.innerHTML = '';
  const [h3, firstP, secondP, scroll, scrollP, arrow, arrowSvg] =
    createElements(['h3', 'p', 'p', 'div', 'p', 'div', 'svg']);

  const translations =
    language === 'pt'
      ? data.translations.pt.heroSection
      : data.translations.en.heroSection;

  h3.innerText = translations.intro;
  firstP.innerText = translations.firstParagraph;
  secondP.innerText = translations.secondParagraph;
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
  hero.appendChild(firstP);
  hero.appendChild(secondP);
  hero.appendChild(scroll);
};

getHeroText(savedLang);
// ---- hero ----

// ---- about ----
const aboutMe = document.getElementById('aboutme');
const personalInfoText = document.getElementById('personalInfoText');
const getAboutMeText = (language) => {
  language === 'pt'
    ? data.translations.pt.aboutMeText.forEach((p) => {
        const pTag = createElement('p');
        pTag.innerText = p.trim();
        aboutMe.appendChild(pTag);
      })
    : data.translations.en.aboutMeText.forEach((p) => {
        const pTag = createElement('p');
        pTag.innerText = p.trim();
        aboutMe.appendChild(pTag);
      });
};

const getPersonalInfoText = (language) => {
  language === 'pt'
    ? data.translations.pt.personalInfoText.forEach((p) => {
        const pTag = createElement('p');
        pTag.innerText = p.trim();
        personalInfoText.appendChild(pTag);
      })
    : data.translations.en.personalInfoText.forEach((p) => {
        const pTag = createElement('p');
        pTag.innerText = p.trim();
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

  translations.jobs.forEach((job) => {
    const [card, role, company, summary, date] = createElements([
      'article',
      'p',
      'p',
      'p',
      'p',
    ]);

    card.className = 'card';

    role.className = 'role';
    role.innerText = job.job;

    company.className = 'company';
    company.innerText = job.company;

    summary.className = 'role-summary';
    summary.innerText = job.summary;

    date.className = 'start-end-date';
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

  translations.graduations.forEach((grad) => {
    const [card, university, graduation, date] = createElements([
      'article',
      'p',
      'p',
      'p',
    ]);

    card.className = 'card';

    university.className = 'university';
    university.innerText = grad.university;

    graduation.className = 'graduation-field';
    graduation.innerText = grad.graduation;

    date.className = 'graduation-date';
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
const skillBtns = document.querySelectorAll('.skill-btn');
const skillHeader = document.querySelector('#skills h3');
let selectedRole = 'all';

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
    { threshold: 0.4 }
  );

  document
    .querySelectorAll('.skill-bar')
    .forEach((bar) => observer.observe(bar));
};

const filterSkills = (roleFilter, language) => {
  skillsContainer.innerHTML = '';
  skillBtns[0].innerHTML = language === 'pt' ? 'Todas' : 'All';
  skillHeader.innerHTML =
    language === 'pt' ? data.skills.title[1] : data.skills.title[0];

  const filteredSkills = getFilteredSkills(roleFilter, language);

  //create html/node tree for skills
  filteredSkills.forEach((skill) => {
    const [skillDiv, name, levelBar] = createElements(['div', 'p', 'div']);

    skillDiv.className = 'skill';

    name.classList = 'skill-name';
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

skillBtns.forEach((button) => {
  button.addEventListener('click', () => {
    selectedRole = button.id.toLowerCase();
    filterSkills(selectedRole, getCurrentLanguage());
  });
});

filterSkills('all', savedLang);
// ---- skills ----

// ---- projects ----
const projectsHeader = document.querySelector('#projects h3');
const projectsContainer = document.querySelector('.project-container');
const renderProjects = (language) => {
  projectsContainer.innerHTML = '';
  projectsHeader.innerHTML = language === 'pt' ? 'Projetos' : 'Projects';

  data.projects.forEach((project) => {
    const [item, imageTag, title, description] = createElements([
      'div',
      'img',
      'p',
      'p',
    ]);

    item.className = 'project-item';

    imageTag.className = 'project-logo';
    imageTag.src = project.imageUrl;

    title.classList = 'project-title';
    title.innerText = project.title;

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

// ---- contact ----
const getContactFormText = (language) => {
  const translations =
    language === 'pt'
      ? data.translations.pt.contactForm
      : data.translations.en.contactForm;

  const contactFormText = document.querySelector('.contact-text');
  contactFormText.children[0].innerText = translations.headings[0];
  contactFormText.children[1].innerText = translations.headings[1];

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

  buttons.children[2].innerText = translations.placeHolders.buttons[1];
};

getContactFormText(savedLang);

// -- available contacts --
const contactSection = document.querySelector('.available-contacts');

const generateTagsForContactInfo = () => {
  const [divider, icon, textContainer] = createElements(['div', 'div', 'div']);

  divider.className = 'divider';
  icon.className = 'icon';

  textContainer.className = 'text-container';

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
                   <path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z"/>
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
// -- available contacts --

// ---- contact ----

const setLanguage = (language) => {
  aboutMe.innerHTML = '';
  personalInfoText.innerHTML = '';

  getNavBarText(language);
  getAboutMeText(language);
  getPersonalInfoText(language);
  getHeroText(language);
  setExperienceSection(language);
  getContactFormText(language);
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
    getHeroText(getCurrentLanguage());
    setExperienceSection(getCurrentLanguage());
    getContactFormText(getCurrentLanguage());

    localStorage.setItem('selectedLanguage', lang);
  });
});

if (savedLang) {
  setLanguage(savedLang);
  langDiv.classList.add(`lang-${savedLang}`);
  filterSkills(selectedRole, savedLang);
}
