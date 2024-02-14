import { sofia, god, cnc } from "../assets/images";
import {
    spaceship,
    contact,
    css,
    express,
    git,
    github,
    gitlab,
    html,
    javascript,
    linkedin,
    mongodb,
    mui,
    nodejs,
    todo,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    typescript,
    vue,
    vite,
    rockpaperscissors,
    nasa

} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: vue,
        name: "VUE",
        type: "Frontend",
    },
    {
        imageUrl: vite,
        name: "VITE",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: gitlab,
        name: "GitLab",
        type: "Version Control",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },

    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },

];

export const experiences = [
    {
        title: "Software Developer",
        company_name: "Sofia Digital",
        icon: sofia,
        iconBg: "#000",
        date: "Sept 2022 - Present",
        points: [
            "Developing, refactoring and maintaining web-based television applications, using Vue.js, Express.js, PHP and JavaScript to deliver highquality user experiences.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Successfully refactored an application to a new framework in Vue.js, significantly enhancing its performance and scalability.",
            "Communicated with customers to gather and incorporate their feedback and requirements, ensuring the delivery of tailored and effective application solutions.",
        ],
    },
    {
        title: "Frontend Developer",
        company_name: "G.O.D.",
        icon: god,
        iconBg: "#B4D5F3",
        date: "Jan 2022 - Sept 2022",
        points: [
            "Contributing to an open-source decision-making app.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Technologies/frameworks used: React, TypeScript, Sass, Node, Docker, MongoDB",
        ],
    },
    {
        title: "CNC Machinist / Programmer",
        company_name: "Metal Industry",
        icon: cnc,
        iconBg: "#b7e4c7",
        date: "2008 - 2022",
        points: [
            "From 2008 to 2022, my CNC Machinist and Programming experience honed a keen eye for detail in machine programming, a skill directly transferable to the IT sector.",
            "This background uniquely blends technical precision with a strong understanding of complex programming.",
        ],
    },
    
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Portfolio',
        description: 'In this project, I constructed a responsive 3D animated portfolio website leveraging the synergies between React, React Fiber, Three.js, and Tailwind CSS. This fusion of technologies allowed me to create an immersive, interactive web experience that showcases my technical prowess and creative vision.',
        link: 'https://github.com/daniel-takacs/portfolio_24',
    },
    {
        iconUrl: todo,
        theme: 'btn-back-red',
        name: 'Full-Stack Todo Application',
        description: 'This MEVN Stack Todo Application with CRUD operations is a dynamic web app that combines Vue.js for the frontend and Express.js for the backend, with MongoDB Atlas for data storage. It allows users to manage their daily tasks through functionalities to add, delete, and mark tasks as completed. Deployed on Heroku, it exemplifies a modern, full-stack development workflow, offering a responsive and user-friendly interface across various devices.',
        link: 'https://github.com/daniel-takacs/todo_vue',
    },
    {
        iconUrl: spaceship,
        theme: 'btn-back-blue',
        name: '3d Spaceship game',
        description: 'This game is a Unity-based 3D spaceship game that offers an immersive experience of space exploration and race. This project highlights my game development capabilities, including 3D graphics, gameplay mechanics, and physics-based controls.',
        link: 'https://github.com/daniel-takacs/spaceship-game',
    },
    {
        iconUrl: rockpaperscissors,
        theme: 'btn-back-green',
        name: 'Rock Paper Scissors',
        description: 'This Rock Paper Scissors React App offers a digital twist on the classic game, featuring a simple, intuitive UI for battling an AI opponent. Built with React, it tracks scores and round outcomes, providing a fun and engaging experience across all devices.',
        link: 'https://github.com/daniel-takacs/rps',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Arch Studio multipage website',
        description: 'Built a multipage website with React, Styled Components and Sass. Used React hooks for navigation bar. Implemented a location map to the contact page, used Leaflet for this. Contact form validated with JS.',
        link: 'https://github.com/daniel-takacs/arch-studio-multi-page-website',
    },
    {
        iconUrl: nasa,
        theme: 'btn-back-black',
        name: 'Astronomy Picture of the Day',
        description: 'Built a responsive Web App with React that fetch each day different picture with brief explanation.',
        link: 'https://github.com/daniel-takacs/APOD-APP',
    },
];