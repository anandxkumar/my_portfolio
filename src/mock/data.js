import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Anand Kumar | Software Engineer | Open Source Developer | Data Scientist', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Anand Kumar',
  subtitle: 'I am a Software Engineer | Open Source Developer | Data Scientist',
  cta: '',
};
// The software of your thoughts
// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '"JUST HAVE A DREAM AND EVERYTHING WILL BE SORTED"  :) ',
  paragraphTwo:
    "I'm a Software Engineer with experience across numerous domains and technologies. I believe Software Development is the means through which I can do what I love the most i.e. bringing new and exciting ideas into the world. My key strength is problem solving, and I believe there are so many exciting problems yet to be solved with the help of technology.",
  paragraphThree:
    'I have worked for companies like Goldman Sachs, Red Hat, Google Summer of Code, and various fast-paced International Startups, with strong hold on Python, Go, C++, Java, Full Stack Development, DevOps, Data Science, Data Analytics, Deep Learning. I have been responsible for performance improvement (upto 40x), code improvement, new model creations and implementation of proof of concept projects.',
  resume: 'https://drive.google.com/drive/folders/1phcx7PyrIfsuFxSTVaNrhbdGXabr0Z4G?usp=sharing', // if no resume, the button will not show up
};
// EXPERIENCE DATA
export const experiencesData = [
  {
    id: nanoid(),
    img: 'rh.png',
    title: 'Red Hat',
    info:
      "Software Engineer Intern at the world's biggest Enterprise Open-Source Organization. Currently working on Tekton - A Kubernetes-based CI/CD Pipeline using Go Lang. Also working on OpenShift, downstream version of Tekton.",
    info2: '',
    url: 'https://www.redhat.com/en',
    repo: 'https://github.com/tektoncd/pipeline', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Goldman_Sachs_Blue_Box.png',
    title: 'Goldman Sachs',
    info:
      "Software Engineer Intern at one the world's biggest Financial Service Firm. Restructured Data Model of Guidance Panel of the COBN portal by combining all data models into a single data model and parsed data using Sybase SQL, Reladomo ORM, Java.",
    info2:
      'Created REST API to fetch guidance from the new data model and used Redux-Saga to update the states on frontend based on React JS. Modernized Frontend by adding new features like adding tabs, collapse sections to make guidance panel more structured and easier for users to navigate through it.',
    url: 'https://www.goldmansachs.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'GSoC.png',
    title: 'Google Summer of Code',
    info:
      'I was an Open Source Developer at Google Summer of Code 2021 as part of OpenAstronomy organization. I developed an optimum Lineshape solution for Radis Radiation increasing performance by 40x times for infrared spectrum calculation by writing 4200+ lines of code.',
    info2:
      'Identified bottlenecks in current implementation by creating a self made Profiler that stores and prints the parameters, steps along their value and calculation time respectively. Derived/Verified the exact time complexity of all methods by running 50+ benchmarks and analyzing it using Tableau, Bokeh and MatplotLib. You can check out my whole summary of my GSoC journey by clicking the `See Live` button.',
    url: 'https://anandkumar-blog.netlify.app/',
    repo: 'https://github.com/radis/radis/projects/5', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'radis_ico.png',
    title: 'Radis',
    info:
      'Project Maintainer at Radis Open-Source organization with 150+ stars. Successfully Mentored 4 projects under Google Summer of Code 2022, performed code reviews, resolved issues, and guided mentees throughout the program',
    info2:
      'Became 3rd highest contributor with 130+ commits. Published a new version on PyPI and drafted a new release on GitHub.',
    url: 'https://github.com/radis/radis/graphs/contributors',
    repo: 'https://radis.readthedocs.io/en/latest/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '1607792959340.jpeg',
    title: 'Bookscribs, USA',
    info:
      'Data Science Intern at Bookscribs, a US based Startup. Worked on budget prediction model using 7 different parameters of a movie script based on its story adaptation. Preprocessed 560+ data, trained model using different loss functions using scipy optimize library (rosa) and custom Root Mean Square Error function, and compared performance with baseline method.',
    info2:
      'Annotated over 1500+ sentences for 10 Cinematic Syntax Assimilation Parameters for different indicators analyzing Sentimentality with respect to CSA parameter.',
    url: 'https://bookscribs.com/',
    repo: 'https://github.com/nlpsandbox', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Pikkal-Logo-Rectangle-Black.png',
    title: 'Pikkal & Co, Singapore',
    info:
      "I'm a former Data Analyst Intern at Pikkal & Co, Singapore where I made diverse Visualizations and Data Analysis primarily based on 1 Million+ podcasts data using Tableau to derive relation of Cadence(Constistency) of episodes of a PodcastS. Built a prototype model for AWS Transcribe using Django and examined AWS Codeguru’s compatibility with the existing codebase.",
    info2:
      'Improved features of App2 Website; Increased accuracy/performance of NLP model by 15% by using new Web Scraping technique. See my report by clicking on `Optimizing Podcast Cadence` buy clicking See Live button.',
    url: 'https://www.notion.so/3-Optimizing-Podcast-Cadence-e949b765feea4a4598f54fab6d6d611f',
    repo: 'https://www.pikkal.com/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'mavoix.png',
    title: 'Mavoix Solutions Private Limited',
    info:
      "I'm a former Deep Learning Intern at Mavoix Solutions Private Limited, Bangalore where Introduced 3 OCR models using PyTesseract, Google Vision and AWS Textract for extracting various blood tests and their values from CBC reports, Urine tests, etc. ",
    info2:
      'Designed a web scraper for searching websites and extracting Causes, Symptoms, Treatment, and Diagnoses of any disease and also finding medicines for the same. Devised recommendation system in which we will get 3 inputs from the user, find abnormalities and give suggestions accordingly.',
    url: 'https://mavoix.in/',
    repo: '', // if no repo, the button will not show up
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

// EXPERIENCE DATA
export const achievementsData = [
  {
    id: nanoid(),
    img: 'DSC_0683.JPG',
    title: 'Best Technical Team Award - Hack 4.0',
    info:
      'Secured 1st position in Technical Team Category at HACK 4.0 Hackathon. Presented an AI based Quadruped-Bot in a team of 3 where I leaded the team of 3 in the Hack 4.0 Hackathon conducted by Computer Science Engineers Community, NIT Hamirpur, India.',
    info2: '',
    url: 'https://github.com/anandxkumar/quadruped_bot',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'IMG_20200306_230449.jpg',
    title: 'Semi-Finalist at HackOverflow 3.0',
    info:
      'Semi-Finalist at HackOverflow 3.0 Hackathon. Presented the AI based Quadruped-Bot in a team of 4 where I leaded the team of 4 in the HackOverflow 3.0 Hackathon conducted by Chandigarh University, India.',
    info2: '',
    url: 'https://drive.google.com/file/d/1epxLpR1YtpnhbmYiL4VcyJEyepu-P5Ue/view?usp=sharingt',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'DSC_0025.JPG',
    title: 'AI-Bot Workshop',
    info:
      'Mentored 300+ students at AI Bot Workshop, NIT Hamirpur and gave presentation on AI where 60+ teams were able to complete their AI based obstacle avoidance bot which was based on Node MCU, bluetooth module (controlled via Mobile App), chassis and 2 tyres.',
    info2: '',
    repo: '', // if no repo, the button will not show up
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
