const myName = 'Gabriel Marques';
const myAge = '28';
const companies = [
  'dti digital',
  'Four - Buy Now Pay Later',
  'Catalde Technology',
];
const university = 'Centro Universitario UNA';

export const data = {
  skills: {
    title: ['Skills', 'Habilidades'],
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
  },
  projects: [
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
            company: companies[0],
            summary: 'Fullstack Development - React and .NET',
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
            job: 'Engenheiro de Software',
            company: companies[0],
            summary: 'Fullstack Development - React, .NET',
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
