import pro1 from "../assets/Coding Quiz.png"
import pro2 from "../assets/Employee Tracker.png"
import pro3 from "../assets/SQL_backend.png"
import pro4 from "../assets/JATE_PWA.png"
import pro5 from "../assets/MovieTimeMachine.png"
import pro6 from "../assets/Project-Gamelist.PNG"

const ProjectCardData = [
    {
        imgsrc: pro1,
        title: "Coding Quiz Web Application",
        text: "This is a timed coding quiz with multiple-choice questions. This app runs in the browser and features dynamically updated HTML and CSS powered by JavaScript code. It has a clean, polished, and responsive user interface.",
        view: "https://barrerse.github.io/Code-Quiz/",
        repo: "https://github.com/Barrerse/Code-Quiz"
    },
    {
        imgsrc: pro2,
        title: "Employee Tracker SQL Database",
        text: "This is a command-line application that allows the user to view and manage the departments, roles, and employees in their company. It uses node, inquirer, and MySQL.",
        view: "https://www.youtube.com/watch?v=7D_YrpfXxZ8",
        repo: "https://github.com/Barrerse/SQL-Employee-Tracker"
    },
    {
        imgsrc: pro3,
        title: "SQL Backend for E-Commerce Site",
        text: "This is the back end for an e-commerce site. It uses the latest technologies so that the company can compete with other e-commerce companies. It uses Express.js API and Sequelize to interact with a MySQL database.",
        view: "https://www.youtube.com/watch?v=Jigo3qVPKhU",
        repo: "https://github.com/Barrerse/-Ecommerce-BackEnd"
    },
    {
        imgsrc: pro4,
        title: "Progressive Web Application - JATE",
        text: "This is a progressive web application that allows the user to track their budget. It uses a service worker, indexedDB, and manifest to allow the user to use the application offline. It also uses a web manifest to allow the user to install the application on their device.",
        view: "https://peaceful-plains-18287.herokuapp.com/",
        repo: "https://github.com/Barrerse/PWA_TextEditor"
    },
    {
        imgsrc: pro5,
        title: "Movie Time Machine",
        text: "This is a web application that allows the user to search for movies. It uses the OMDB API to retrieve movie information. It will help you pick a random movie and greet you with a random movie quote. It also uses local storage to store any persistent data.",
        view: "https://graciaan.github.io/Class-Project-1/",
        repo: "https://github.com/graciaan/Class-Project-1"
    },
    {
        imgsrc: pro6,
        title: "The Game List",
        text: "Project GameList is a full-stack web application that combines a robust back end with a user-friendly front end. It allows users to create an account, search for games, and add them to their personal game list. It uses the RAWG API to retrieve game information. It also uses a MySQL database to store user information and game data.",
        view: "https://project-gamelist.herokuapp.com/",
        repo: "https://github.com/MartinCespedes/project-gamelist"
    }
];

export default ProjectCardData;