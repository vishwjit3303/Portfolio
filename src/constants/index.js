import {
   linkedin, github, ecommerce, linkedin1, github1, shoppingcart, tutionapp, raysmusk, library, phonebook, jobportal, carsales, studentactivity, tutionapp1,tutionapp2,tutionapp3, jobportal1, jobportal2, jobportal3,  raysmusk1,  raysmusk2,  raysmusk3, library1,library2,library3,shoppingcart1, shoppingcart2, shoppingcart3, phonebook1, phonebook2,phonebook3, studentactivity1, studentactivity2, studentactivity3, ecommerce1, ecommerce2, ecommerce3, responsive, react, fullstack, android_studio,
  jdbc,
  maven,
  tomcat,
  rest_api,
  tailwind_css,
  carsales1,
  carsales2,
  carsales3,
} from '../assets';

const social = [
  {
    id: 1,
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/dktevishwajeetpawar/',
    icon: linkedin,
    icon1: linkedin1,
  },

  {
    id: 5,
    name: 'Github',
    url: 'https://github.com/vishwjit3303',
    icon: github,
    icon1: github1,
  },
];

const technologies = [
  // Programming Languages
  {
    stack: ['languages', 'all'],
    name: 'Java',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  },
  {
    stack: ['languages', 'all'],
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg',
  },
  {
    stack: ['languages', 'all'],
    name: 'C',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
  },
  {
    stack: ['languages', 'all'],
    name: 'C++',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
  },
  {
    stack: ['languages', 'all'],
    name: 'SQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  },

  // Front-End
  {
    stack: ['frameworks', 'all'],
    name: 'HTML5',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg',
  },
  {
    stack: ['frameworks', 'all'],
    name: 'CSS3',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg',
  },
  {
    stack: ['frameworks', 'all'],
    name: 'Bootstrap',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg',
  },
  {
    stack: ['frameworks', 'all'],
    name: 'Tailwind CSS',
    icon: tailwind_css,
  },
  {
    stack: ['frameworks', 'all'],
    name: 'React.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    stack: ['frameworks', 'all'],
    name: 'Material UI',
    icon: 'https://cdn.worldvectorlogo.com/logos/material-ui.svg',
  },

  // Back-End
  {
    stack: ['frameworks', 'all'],
    name: 'JSP',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  },
  {
    stack: ['frameworks', 'all'],
    name: 'Servlets',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  },
  {
    stack: ['frameworks', 'all'],
    name: 'Spring Framework',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
  },
  {
    stack: ['frameworks', 'all'],
    name: 'Spring Boot',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
  },

  // Database
  {
    stack: ['tools', 'all'],
    name: 'MySQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  },
  {
    stack: ['tools', 'all'],
    name: 'Hibernate (JPA)',
    icon: 'https://cdn.iconscout.com/icon/free/png-256/hibernate-4-569282.png',
  },
  {
    stack: ['tools', 'all'],
    name: 'JDBC',
    icon: jdbc,
  },

  // Tools & IDEs
  {
    stack: ['tools', 'all'],
    name: 'Eclipse',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg',
  },
  {
    stack: ['tools', 'all'],
    name: 'IntelliJ IDEA',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg',
  },
  {
    stack: ['tools', 'all'],
    name: 'Android Studio',
    icon: android_studio,
  },

  // Version Control
  {
    stack: ['tools', 'all'],
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg',
  },
  {
    stack: ['tools', 'all'],
    name: 'GitHub',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  },

  // Build Tools
  {
    stack: ['tools', 'all'],
    name: 'Maven',
    icon: maven,
  },

  // Other
  {
    stack: ['tools', 'all'],
    name: 'Tomcat Server',
    icon: tomcat,
  },
  {
    stack: ['tools', 'all'],
    name: 'REST APIs',
    icon: rest_api,
  },
];

const projects = [
  {
    id: 1,
    name: 'E Commerce App',
    desc: 'The E CommerceA full-stack e-commerce application featuring a React frontend with Redux and a Spring Boot backend, integrated with MySQL for managing authentication, products, users, and admin tasks using JWT for security.',
    tech: ['React', 'Redux', 'Spring Boot', 'MySQL','JWT'],
    img: ecommerce,
    carousel: [ecommerce1, ecommerce2, ecommerce3],
    source_link: 'https://github.com/vishwjit3303/e-commerce',
    live_link: 'https://vp-ecommerce-ten.vercel.app/',
  },
  {
    id: 2,
    name: 'Car Sales Web Application',
    desc: 'A Java-based Car Sales Web Application built with Servlets, JSP, and MySQL, enabling users to browse cars, manage brands/models via an admin dashboard, and complete purchases on a Tomcat server.',
   tech: ['Java', 'JSP', 'MySQL', 'Apache Tomcat'],
    img: carsales,
    carousel: [carsales1, carsales2, carsales3],
    source_link: 'https://github.com/vishwjit3303/Car-Sales-Web-Application',
  },
  {
    id: 3,
    name: 'Shopping Cart Management System',
    desc: 'A Java-based Shopping Cart Management System using Servlets, JSP, and JDBC with MySQL, enabling user authentication, product browsing, cart operations, and order management in an MVC architecture. Snapshots include the admin dashboard, car listings, and purchase flow.',
    tech: ['Java', 'JSP', 'JDBC', 'MySQL'],
    img: shoppingcart,
    carousel: [shoppingcart1, shoppingcart2, shoppingcart3],
    source_link: 'https://github.com/vishwjit3303/Shopping-Cart-Management-System-JSP',
  },
  {
    id: 4,
    name: 'PhoneBook Application',
    desc: 'A web-based PhoneBook Application built with Servlet and JSP, enabling secure user authentication, session-based contact management, and data integrity using MySQL.',
    tech: ['Java', 'JSP', 'Servlet', 'MySQL', 'Apache Tomcat'],
    img: phonebook,
    carousel: [phonebook1, phonebook2,phonebook3],
    source_link: 'https://github.com/vishwjit3303/Phone-Book-JSP-Project',
  },
  {
    id: 5,
    name: 'Student Record and Activity Tracking System',
    desc: 'A web-based Student Record and Activity Tracking System that manages student records, tracks activities, and generates reports for educational institutions with a user-friendly interface.',
    tech: ['JSP','HTML','CSS','JavaScript','SQL',],
    img: studentactivity,
    carousel: [studentactivity1,studentactivity2, studentactivity3],
    source_link: 'https://github.com/vishwjit3303/Student-Record-and-Activity-Tracking-System',
  },
  {
    id: 6,
    name: 'Book Library Management',
    desc: 'A web-based Book Library Management System built with Java Servlets and JDBC, enabling efficient management of books, borrowers, and users with MySQL database integration.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Servlets', 'MySQL'],
    img: library,
    carousel: [library1, library2, library3],
    source_link: 'https://github.com/vishwjit3303/Library-management-using-servlet',
  },
  {
    id: 7,
    name: 'RAYSMUSK WIRETECH PRIVATE LIMITED - Corporate Website',
    desc: 'A modern, responsive corporate website for RAYSMUSK WIRETECH PRIVATE LIMITED, featuring wire harnesses and control boxes with a product gallery, contact form, Google Maps, and Firebase authentication.',
    tech: ['React.js', 'Tailwind CSS','Firebase'],
    img: raysmusk,
    carousel: [ raysmusk1, raysmusk2,  raysmusk3],
    source_link: 'https://github.com/vishwjit3303/RaysMusk-React',
    live_link: 'https://www.raysmusk.com/',
  },
  {
    id: 8,
    name: "Job Portal React App",
    desc: "A modern job portal web application built with React and TypeScript, enabling users to browse, filter, sort, and apply for jobs while tracking applications with a responsive, dark mode-supported interface.",
    tech: ['React', 'TypeScript'],
    img: jobportal,
    carousel: [jobportal1, jobportal2, jobportal3],
    source_link: 'https://github.com/Rhaegar121/React-Group-Project',
  },
  {
    id: 9,
    name: 'Tution Android App ',
    desc: 'Archer InfoTech is an Android app for browsing programming courses, managing profiles, registering for classes, and handling payments, using SQLite for efficient local data storage.',
    tech: ['Java', 'SQLite','Android Studio'],
    img: tutionapp,
    carousel: [tutionapp1, tutionapp2, tutionapp3],
    source_link: 'https://github.com/vishwjit3303/ArI_Android_Projects/tree/main/Batch%201/Vishwajeet/Project%201%20using%20SQLite',
  },
];



const services = [
  {
    id: 1,
    icon: responsive,
    title: 'Responsive Design',
    text: 'I specialize in creating websites that are not just visually stunning but also highly adaptable. My responsive designs ensure that your site looks and works perfectly on any device, providing an exceptional user experience regardless of screen size.',
  },
  {
    id: 2,
    icon: react,
    title: 'Front-end Development',
    text: 'I breathe life into your creative ideas by translating them into captivating web interfaces. Using the latest frontend technologies and best practices, I build engaging, user-friendly websites that leave a lasting impression.',
  },
  {
    id: 3,
    icon: fullstack,
    title: 'Back-end Development',
    text: 'My backend development expertise forms the backbone of your web application. I design and build robust, efficient, and secure server-side solutions that handle data management and business logic seamlessly, ensuring your website functions flawlessly.',
  },
];

const navLinks = [
  {
    id: 1,
    name: 'About',
    url: '/#about',
  },
  {
    id: 2,
    name: 'Service',
    url: '/#service',
  },
  {
    id: 3,
    name: 'Work',
    url: '/#work',
  },
  {
    id: 4,
    name: 'Contact',
    url: '/#contact',
  },
];

export {
  technologies, projects, social, services, navLinks,
};
