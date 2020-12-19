import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Anand Kumar | DL and Web Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Anand Kumar',
  subtitle: 'I am a Machine Learning and Web Developer',
  cta: '',
};
//The software of your thoughts
// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '" KEEP LEARNING AND MAKE YOUR WORK SPEAK FOR YOURSELF"   - I LIVE BY THIS RULE ',
  paragraphTwo: 'Hi There ! Anand this side. I am a Junior at NIT Hamirpur, Himachal Pradesh, India pursuing my Dual Degree (BTech + MTech) in CSE. I am an AI enthusiast and a Web Developer. I mostly deal in the fields of Machine Learning, Deep Learning, Computer Vision and Web Development in Flask.',
  paragraphThree: 'I am a geek. I love life and computers and everything in between. Driven by passion and enthusiam I have worked on various DL, and Web projects at my previous internship at Mavoix Solutions Pvt. Ltd, Bangalore. Wanna know more about my projects ? Have a look below :)',
  resume: 'https://drive.google.com/file/d/1f3GQJc4XYTLi40pv_jXBDx0Lkz1_UO-P/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'AI Quadruped Bot ',
    info: 'A Quadruped Bot is a 4 legged bot. It is made of 3D printed anatomy and has 12 Degree of Freedoms. We used SG90 servo motors to give each node a 90 degree of movements. The bot is based on Arduino Uno and has the code for forward, backward, left, right, sit, stand and even hand shake movement by calibrating the values of easch servo.',
    info2: "It uses google's speech_recognition library to recognize audio and openCV to detect an object's movement and with the help of serial communication the bot moves accordingly.",
    url : 'https://drive.google.com/drive/folders/1wFSwNbHquq3OYhIbhwhG1ok1Zk67U0ec?usp=sharing',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Motion Controlled Game',
    info: 'This game is an obstacle avoiding game made on processing IDE in Java in which user has two option that it jump or duck the incoming obstacles. It has been interfaced with motion detector using socket communication between python and processing.',
    info2: 'Motion detector is made using openCV that uses webcam to get the frames and detects the object and tracks it. In low lighting one can put their palm in front of webcam to detect it. If the palm is slided up then the player will jump and if the palm is slided down then the player will duck.',
    url: 'https://github.com/anandxkumar/Motion_Controlled_Game',
    repo: "https://github.com/anandxkumar/Motion_Controlled_Game", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Maze Solver Using Reinforcement Learning',
    info: "Developed a maze using tinker library and used reinforcement learning to solve the maze. Used Bellman's equation for learning and updating Q table",
    info2: '',
    url: '',
    repo: 'https://github.com/anandxkumar/Maze_Solver_Using_Reinforcement_Learning', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Blogging App Using Flask',
    info: 'Blogging, app made using Flask. First it includes Account creation and login authorization. Then a particular user can add blogs and can modify or delete it.',
    info2: 'User can change his/her profile pic and a normal user (without login) can browse over any blog post.',
    url: 'http://pipebombx9.pythonanywhere.com/',
    repo: 'https://github.com/anandxkumar/User_Blogs_FlaskApp', // if no repo, the button will not show up
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
      url: 'https://www.linkedin.com/in/anand-kumar-83896717a/',
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
