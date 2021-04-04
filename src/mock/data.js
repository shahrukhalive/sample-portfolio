import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
    title: '', // e.g: 'Name | Developer'
    lang: '', // e.g: en, es, fr, jp
    description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
    title: '',
    name: 'Shahrukh Mujawar',
    subtitle: 'Web developer',
    cta: '',
};

// ABOUT DATA
export const aboutData = {
    img: 'profile.jpg',
    paragraphOne: ' Web Development enthusiast,likes to build web applications.',
    paragraphTwo: 'Programming Languages: Nodejs | Python',
    paragraphThree: 'Web Frameworks: Reactjs | ExpressJs',
    paragraphFour: 'Databases: MongoDb | MySql',
    resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [{
        id: nanoid(),
        img: 'netfy.png',
        title: 'Netfy',
        info: 'Clone of Netflix | Tools and Technologies: Js,HTML,CSS | Web Framework: ReactJs | Used third party API to manage the movie databases.',
        info2: '',
        url: 'https://netflix-clone-5e2b0.web.app/',
        repo: 'https://github.com/shahrukhalive/netfy', // if no repo, the button will not show up
    },
    {
        id: nanoid(),
        img: 'e-commerce.png',
        title: 'e-commerce website',
        info: 'E-commerce website | Add to Basket and Checkout Function | Used React Router,Materialize CSS,React Hooks',
        info2: '',
        url: '',
        repo: 'https://github.com/shahrukhalive/e-commerce', // if no repo, the button will not show up
    },
    {
        id: nanoid(),
        img: 'back-end.png',
        title: 'backend service',
        info: ' REST API for managing the genres of the movies | REST API for managing  customers | Databases: MongoDB | CRUD operations ',
        info2: '',
        url: '',
        repo: 'https://github.com/shahrukhalive/Rest-API', // if no repo, the button will not show up
    },
];

// CONTACT DATA
export const contactData = {
    cta: 'Phone: +91-8605578814',
    btn: 'iamshahrukh18@gmail.com',
    email: '',
};

// FOOTER DATA
export const footerData = {
    networks: [

        {
            id: nanoid(),
            name: 'linkedin',
            url: 'https://www.linkedin.com/feed/?trk=homepage-basic_google-one-tap-submit',
        },
        {
            id: nanoid(),
            name: 'github',
            url: 'https://github.com/shahrukhalive',
        },
    ],
};

// Github start/fork buttons
export const githubButtons = {
    isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};