import Dissertation from "../assets/dissertationFrontPage.png"
import PortfolioWebsite from "../assets/portfolioWebsite.png"
import GymCorp from "../assets/gymCorp.png"
import DataMining from "../assets/weka.png"
import NewsAggregator from "../assets/newsAggregator.png"
import Crawler from "../assets/crawler.png"
import Graphics2 from "../assets/graphicsCwk2.png"
import Graphics1 from "../assets/graphicsCWK1.png"
import ROS from "../assets/ROS.png"
import QTvideoPlayer from "../assets/qtVideoPlayer.png"
import WebServices from "../assets/webServices.png"
import aiDecisionTrees from "../assets/aiSearchTrees.png"
import networkAuction from "../assets/networksAuction.png"

export const ProjectList = [
    {
        id:1,
        name: "Dissertation",
        image: Dissertation,
        description: ['My dissertion was an academic research project where I investigated solutions to the N-Body problem', 'These methods were then implemented in software, using C++ and SDL, in order to produce visual simulations of these different methods','Evaluations of these methods were then carried and, subsequently, improvements were made using techniques such as parallel programming techniques'],
        skills: ['Research','Technical Writing','C++','Parallel Programming','Unit Testing','Integration Testing']
    },
    {
        id:2,
        name: "Sports Centre Booking System",
        image: GymCorp,
        description: ['Part of a development team that oversaw the development of a booking system for a sports centre','During this project, we utilised a full stack developement approach by using a range of technologies such as JavaScript, React, Node.js, Express.js and MongoDB','We developed customer and management interfaces to provide a seamless user interface that allows users to book activities, track reservations and view upcoming activities','In order to aid development, we applied a Scrum methodology to break the project down into sprints and delivered a minimum viable product at the end of each sprint','We managed our source code by using Git version control to follow a structured, feature branch workflow, which allowed us to efficiently distribute tasks among developers'],
        skills: ['React','Express','Node','MongoDB','Git','Agile Development','UML']
    },
    {
        id:3,
        name: "Portfolio Web App",
        image: PortfolioWebsite,
        description:['Developed a dynamic and responsive portfolio web app using React.','This React app allows me to showcase my software projects in a user friendly way by utilising interactive navigation and responsive design in order to allow for optimal viewing on various devices.','By choosing to use a React application, the app focuses on modularity and reusability through the use of React components to simplifiy development'],
        skills: ['React', 'JavaScript', 'Responsive Design', 'Web Development']
    },
    {
        id:4,
        name: "Web Crawler",
        image: Crawler,
        description:['Designed and implemented a web crawler and search tool.','The web crawler starts at a base URL and constructs an inverted index based on the scraped information, which can be queried by users','The crawler is designed to use a recurisive strategy to navigate web pages and update the inverted index that stores scraped information','Users are able to use a search tool which ranks results based on relevance using multiple factors such as term frequency and proximity','This project was developed using Python and employed libraries like "requests", "BeautifulSoup" and "nltk"'],
        skills: ['Web Crawling', 'Python', 'Data Structures', 'Text Processing', 'Search Algorithms']
    },
    {
        id:5,
        name: "RESTful API News Aggregator",
        image: NewsAggregator,
        description:['Responsible for developing a RESTful API for news aggregation, which utilises the Django framework for server-side and Python for client-side development','The API supports user authentication, news story creation, retrieval and deletion','The system adheres to HTTP status codes for clear client-server side communication','The Python client application allows users to interact with the API through a command line interface, which provides functionalities such as logging in, posting news stories, retrieving filtered news stories and listing different news services'],
        skills: ['RESTful API Development','Django','Python','Client-Server Communication','Database Design']
    },
    {
        id:6,
        name: "AI: Decision Trees",
        image: aiDecisionTrees,
        description:['Developed Python functions which perform various tasks regarding decision trees and data sets','Designed system to take a "csv" dataset and learn a decision tree from it in order to predict specified values','Calulated the error ratio to evalute the performance of the decision tree','Split data into training and test sets to avoid overfitting','Pruned the trees to eliminate nodes that are unnecessary','Used statistical models to determine if tree requires further pruning'],
        skills: ['Python','Decision Trees','Pruning','Datasets']
    },
    {
        id:7,
        name: "Robot Operating System (ROS)",
        image: ROS,
        description:['Part of a development team responsible for designing and implementing a robotic system capable of autonomous navigation and measurement tasks.','The robot is programmed to locate specific modules in a spaceship, identify windows in the module, stich images of the windows together and calculate distances using computer vision techniques','We utilised a blob detector to identify planetary bodies, such as Earth and Moon, and applied Euclidean distance calculations for accurate measurements','The implementation included several performance tests, focusing on metrics such as the speed of entering modules, correct identification of safe modules, and precise distance calculations'],
        skills: ['Robotic Design and Development','ROS','Computer Vision','Image Processing','Autonomous Navagation']
    },
    {
        id:8,
        name: "Network based Auction System",
        image:networkAuction,
        description:['Developed a Client-Server application that served as a auction system','The server application continuously runs and manages a fixed thread pool for up to 30 connections','Communication between client and server application is established using sockets and TCP protocols','Created a custom communication protocol for interaction between the server and clients','Clients are able to list items, make bids on items and receive appropriate responses'],
        skills: ['Java','Network Protocols']
    },
    {
        id:9,
        name: "Data Mining",
        image: DataMining,
        description:['Collaborated as part of a project to develop a research proposal that involves the use of data mining','Our proposal was titled: "Detecting Social Media Posts Which Contribute to Unconscious Sexism"','Utilised different APIs (such as the "Twitter" API) to obtain a dataset','Used tools such as Sketch Engine and Weka','Compared and contrasted different classifiers to determine which would be best for our data'],
        skills: ['Weka','Sketch Engine']
    },
    {
        id:10,
        name: "Qt: Media Player",
        image: QTvideoPlayer,
        description:['Part of a development team that produced a video player and editor using the Qt framework','Primary aim was to create a user friendly and interactive tool','We utilised Agile development cycles to create several iterations of a minimal viable product','Our final iteration included features such as a responsive mobile UI, video playback, editing capabilities and accessibility features such as brightness/contrast control, colour schemes, full screen and tooltips'],
        skills: ['Qt Framework','C++','UI Design','Video Processing','Agile Development']
    },
    {
        id:11,
        name: "Serverless Computing and FaaS",
        image: WebServices,
        description:['Created an Azure based solution for managing and analysing sensor data. The system is split into three separate components','Data Generation Function: An Azure function in Python that generates sensor data and writes it to an Azure SQL database. Function accepts an HTTP request as input and stores the data','Data Retrieval and Analysis Function: Also implemented as an Azure function, this component reads sensor data from the Azure SQL database and calculates statistics for the data','Realisitic Scenario Implementation: Final component integrates the two previous components into a realistic scenario. The data generation function is triggered by a timer, simulating regular data collection by sensors every minute. The statistics function is triggered by changes in the SQL database, ensuring real-time updates and analysis as new data is inserted'],
        skills: ['Azure Functions','Azure SQL Database','Python','Serverless Architecture','HTTP Requests and Responses','Data Analysis']
    },
    {
        id:12,
        name:"2D Graphics",
        image: Graphics1,
        description:[
            'Implemented fundamental 2D graphics operations including pixel manipulation, line drawing, and triangle rendering',
            'Developed efficient algorithms for drawing lines and triangles, ensuring they scale with O(N) complexity',
            'Implemented barycentric interpolation for smooth color transitions in triangles',
            'Created image blitting functionality with alpha masking for sprite rendering',
            'Designed and implemented comprehensive test cases for line and triangle drawing algorithms',
            'Conducted performance benchmarks to compare different implementation strategies for line drawing and image blitting'
        ],
        skills: ['C++', '2D Graphics Algorithms', 'Performance Benchmarking', 'Unit Testing']
    },
    {
        id:13,
        name:"3D Graphics",
        image: Graphics2,
        description:[
            'Developed an OpenGL-based 3D renderer with a terrain model and custom space vehicle',
            'Implemented 3D transformations, perspective projection, and a first-person camera',
            'Created texture mapping, lighting models, and instancing for efficient rendering',
            'Added features like vehicle animation, multiple camera modes, and a split-screen view',
            'Developed a particle system for vehicle exhaust'
        ],
        skills: [
            'OpenGL', 'GLSL', 'C++', '3D Graphics Programming', 
            '3D Math', 'Shader Development', 'Texture Mapping', 
            'Lighting Models', 'Animation', 'Particle Systems',
        ]
    }
]