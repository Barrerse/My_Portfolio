import pro1 from "../assets/Tabl.png"
import pro2 from "../assets/Employee Tracker.png"
import pro3 from "../assets/SQL_backend.png"
import pro4 from "../assets/JATE_PWA.png"
import pro5 from "../assets/MovieTimeMachine.png"
import pro6 from "../assets/Project-Gamelist.PNG"

const ProjectCardData = [
    {
        imgsrc: pro1,
        title: "Tabl - Full Stack MERN Application",
        text: "This is a full stack application made using the MERN stack. This application helps the user browse through boardgames and purchase them using Stripe. It uses MongoDB, Express.js, React.js, Node.js, and Stripe.",
        view: "https://limitless-sea-74669.herokuapp.com/",
        repo: "https://github.com/Barrerse/Table"
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