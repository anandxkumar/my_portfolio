import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Anand Kumar | Data Scientist | Open Source Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Anand Kumar',
  subtitle: 'I am a Data Scientist and an Open Source Developer',
  cta: '',
};
// The software of your thoughts
// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '"JUST HAVE A DREAM AND EVERYTHING WILL SORTED"  :) ',
  paragraphTwo:
    'Hi There! Anand this side. I am a Final Year student at NIT Hamirpur, Himachal Pradesh, India pursuing my Dual Degree (BTech + MTech) in CSE. I am an AI enthusiast and a Open Source Developer. I mostly deal in the fields of Data Analytics, Deep Learning, Computer Vision and Web Development (Flask, Django).',
  paragraphThree:
    "I am a geek. I love life, computers and everything in between. I'm a Open Source Developer at GSoC'21 and a former Data Anaylst Intern at Pikkal & Co, Singapore. Driven by passion and enthusiam I have worked on various DL, and Web projects.",
  resume: 'https://drive.google.com/drive/folders/1phcx7PyrIfsuFxSTVaNrhbdGXabr0Z4G?usp=sharing', // if no resume, the button will not show up
};
// EXPERIENCE DATA
export const experiencesData = [
  {
    id: nanoid(),
    img: 'GSoC.png',
    title: 'Google Summer of Code',
    info:
      'I was an Open Source Developer at Google Summer of Code 2021 as part of OpenAstronomy organization. I developed an optimum Lineshape solution for Radis Radiation increasing performance by 40x times for infrared spectrum calculation by writing 4200+ lines of code.',
    info2:
      'Identified bottlenecks in current implementation by creating a self made Profiler that stores and prints the parameters, steps along their value and calculation time respectively. Derived/Verified the exact time complexity of all methods by running 50+ benchmarks and analyzing it using Tableau, Bokeh and MatplotLib.',
    url: 'https://anandkumar-blog.netlify.app/',
    repo: 'https://github.com/radis/radis/projects/5', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Pikkal-Logo-Rectangle-Black.png',
    title: 'Pikkal & Co, Singapore',
    info:
      "I'm a Made diverse Visualizations and Data Analysis primarily based on 1 Million+ podcasts data using Tableau. Built a prototype model for AWS Transcribe using Django and examined AWS Codeguru’s compatibility with the existing codebase.",
    info2:
      'Improved features of App2 Website; Increased accuracy/performance of NLP model by 15% by using new Web Scraping technique.',
    url: 'https://drive.google.com/drive/folders/1f3nedxXq539PweeTqBRpRR1kEg_USWMC?usp=sharing',
    repo: 'https://github.com/anandxkumar/Motion_Controlled_Game', // if no repo, the button will not show up
  },
];

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'AI Quadruped Bot ',
    info:
      'A Quadruped Bot is a 4 legged bot. It is made of 3D printed anatomy and has 12 Degree of Freedoms. We used SG90 servo motors to give each node a 90 degree of movements. The bot is based on Arduino Uno and has the code for forward, backward, left, right, sit, stand and even hand shake movement by calibrating the values of easch servo.',
    info2:
      "It uses google's speech_recognition library to recognize audio and openCV to detect an object's movement and with the help of serial communication the bot moves accordingly.",
    url: 'https://drive.google.com/drive/folders/1wFSwNbHquq3OYhIbhwhG1ok1Zk67U0ec?usp=sharing',
    repo: 'https://github.com/anandxkumar/quadruped_bot', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.PNG',
    title: 'Motion Controlled Game',
    info:
      'This game is an obstacle avoiding game made on processing IDE in Java in which user has two option that it jump or duck the incoming obstacles. It has been interfaced with motion detector using socket communication between python and processing.',
    info2:
      'Motion detector is made using openCV that uses webcam to get the frames and detects the object and tracks it. In low lighting one can put their palm in front of webcam to detect it. If the palm is slided up then the player will jump and if the palm is slided down then the player will duck.',
    url: 'https://drive.google.com/drive/folders/1f3nedxXq539PweeTqBRpRR1kEg_USWMC?usp=sharing',
    repo: 'https://github.com/anandxkumar/Motion_Controlled_Game', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.png',
    title: 'Blogging App Using Flask',
    info:
      'Blogging, app made using Flask. First it includes Account creation and login authorization. Then a particular user can add blogs and can modify or delete it.',
    info2:
      'User can change his/her profile pic and a normal user (without login) can browse over any blog post.',
    url: 'http://pipebombx9.pythonanywhere.com/',
    repo: 'https://github.com/anandxkumar/User_Blogs_FlaskApp', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project4.png',
    title: 'Maze Solver Using Reinforcement Learning',
    info:
      "Developed a maze using tinker library and used reinforcement learning to solve the maze. Used Bellman's equation for learning and updating Q table",
    info2:
      'User can customize the maze accordingly, and the RL algo will try to find the shortest path under 100 epochs.',
    url: 'https://drive.google.com/drive/folders/1xTqGyASJbTIq_kwfeYm9ZH2JEPgvrWU3?usp=sharing',
    repo: 'https://github.com/anandxkumar/Maze_Solver_Using_Reinforcement_Learning', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'anandkumar26sep00@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/anandxkumar',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/anandxkumar',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
