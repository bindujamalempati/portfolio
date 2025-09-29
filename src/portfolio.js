/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import vocalmateImg from "./assets/images/voice.png";
import pdfImg from "./assets/images/generative.png";
import bookstoreImg from "./assets/images/book.png";

/**********************
 * Splash Screen
 **********************/
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000,
};

/**********************
 * Greeting / Summary
 **********************/
const illustration = { animated: true };

const greeting = {
  username: "Binduja Malempati",
  title: "Hello, I'm Binduja Malempati",
  subTitle: emoji(
    "Graduate in Data Science | Software Engineer | AI & Backend Systems Enthusiast"
  ),
  resumeLink: process.env.PUBLIC_URL + "/bindujaresume.pdf",
  displayGreeting: true,
};

/**********************
 * Social Links
 **********************/
const socialMediaLinks = {
  github: "https://github.com/bindujamalempati",
  linkedin: "https://www.linkedin.com/in/bindujamalempati/",
  gmail: "malempatibinduja54@gmail.com",
  display: true,
};

/**********************
 * Skills
 **********************/
const skills = {
  data: [
    {
      title: "Backend & Systems",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building fault-tolerant backend services in Python, C++, and Java",
        "⚡ Designing REST APIs with Flask, FastAPI, and Django",
        "⚡ Real-time communication with WebSockets, Firebase, and multithreading",
      ],
      softwareSkills: [
        { skillName: "Python", fontAwesomeClassname: "logos:python" },
        { skillName: "C++", fontAwesomeClassname: "logos:c-plusplus" },
        { skillName: "Java", fontAwesomeClassname: "logos:java" },
        { skillName: "FastAPI", fontAwesomeClassname: "simple-icons:fastapi" },
        { skillName: "Flask", fontAwesomeClassname: "cib:flask" },
        { skillName: "Node.js", fontAwesomeClassname: "logos:nodejs" },
      ],
    },
    {
      title: "AI & Data Science",
      fileName: "DataScienceImg",
      skills: [
        "⚡ GPU-accelerated ML workflows with RAPIDS, PyTorch, and TensorFlow",
        "⚡ NLP, time-series anomaly detection, and recommendation systems",
        "⚡ Building large-scale pipelines using Spark, Dask, and SQL optimizations",
      ],
      softwareSkills: [
        { skillName: "PyTorch", fontAwesomeClassname: "logos:pytorch" },
        { skillName: "TensorFlow", fontAwesomeClassname: "logos:tensorflow" },
        { skillName: "RAPIDS", fontAwesomeClassname: "simple-icons:nvidia" },
        { skillName: "Spark", fontAwesomeClassname: "logos:apachespark" },
        { skillName: "PostgreSQL", fontAwesomeClassname: "logos:postgresql" },
      ],
    },
    {
      title: "Cloud & DevOps",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Deploying containerized apps with Docker & Kubernetes",
        "⚡ Building CI/CD pipelines with GitHub Actions and Jenkins",
        "⚡ Using AWS and GCP for scalable infrastructure",
      ],
      softwareSkills: [
        { skillName: "AWS", fontAwesomeClassname: "logos:aws" },
        { skillName: "GCP", fontAwesomeClassname: "logos:google-cloud" },
        { skillName: "Docker", fontAwesomeClassname: "logos:docker" },
        { skillName: "Kubernetes", fontAwesomeClassname: "logos:kubernetes" },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
        },
      ],
    },
  ],
};

/**********************
 * Education
 **********************/
const degrees = {
  degrees: [
    {
      title: "University at Buffalo (SUNY)",
      subtitle: "M.S. in Data Science",
      logo_path: "buffalo.jpg",
      alt_name: "SUNY Buffalo",
      duration: "2024 - 2025",
      descriptions: [
        "⚡ Coursework: Distributed Systems, Advanced ML, SQL Optimization, Statistical Analysis",
        "⚡ Research: Time-series anomaly detection and NLP pipelines on GPUs",
      ],
    },
    {
      title: "GITAM University",
      subtitle: "B.Tech in Computer Science",
      logo_path: "gitam.jpg",
      alt_name: "GITAM",
      duration: "2019 - 2023",
      descriptions: [
        "⚡ Built strong foundation in Computer Science, Data Structures, and Algorithms",
        "⚡ Developed multiple academic projects in software engineering",
      ],
    },
  ],
};

/**********************
 * Skill Bars
 **********************/
const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Programming",
      progressPercentage: "90%",
      subSkills: [
        { name: "Python", progressPercentage: "90%" },
        { name: "C", progressPercentage: "80%" },
        { name: "C++", progressPercentage: "70%" },
        { name: "Java", progressPercentage: "60%" },
        { name: "CUDA", progressPercentage: "60%" },
      ],
    },
    {
      Stack: "AI & ML Systems",
      progressPercentage: "85%",
      subSkills: [
        { name: "PyTorch", progressPercentage: "85%" },
        { name: "TensorFlow", progressPercentage: "75%" },
        { name: "HuggingFace", progressPercentage: "70%" },
        { name: "LangChain", progressPercentage: "70%" },
        { name: "RAPIDS cuDF/cuML", progressPercentage: "65%" },
        { name: "Vector DBs (FAISS, Pinecone, pgvector)", progressPercentage: "70%" },
        { name: "MLOps (MLflow, W&B)", progressPercentage: "60%" },
      ],
    },
    {
      Stack: "Backend & Systems",
      progressPercentage: "80%",
      subSkills: [
        { name: "FastAPI", progressPercentage: "85%" },
        { name: "Flask", progressPercentage: "80%" },
        { name: "Django", progressPercentage: "75%" },
        { name: "Node.js", progressPercentage: "70%" },
        { name: "Multithreading", progressPercentage: "65%" },
      ],
    },
    {
      Stack: "Database",
      progressPercentage: "95%",
      subSkills: [
        { name: "SQL", progressPercentage: "90%" },
        { name: "PostgreSQL", progressPercentage: "85%" },
        { name: "MongoDB", progressPercentage: "80%" },
        { name: "Firebase", progressPercentage: "75%" },
      ],
    },
    {
      Stack: "Cloud",
      progressPercentage: "90%",
      subSkills: [
        { name: "AWS", progressPercentage: "80%" },
        { name: "GCP", progressPercentage: "70%" },
        { name: "Vertex AI", progressPercentage: "60%" },
        { name: "Docker", progressPercentage: "85%" },
        { name: "Kubernetes", progressPercentage: "75%" },
      ],
    },
    {
      Stack: "Frontend",
      progressPercentage: "80%",
      subSkills: [
        { name: "JavaScript", progressPercentage: "60%" },
        { name: "React", progressPercentage: "70%" },
        { name: "HTML/CSS", progressPercentage: "80%" },
      ],
    },
  ],
  displayCodersrank: false,
};

/**********************
 * Work Experience
 **********************/
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Graduate Research Assistant (DS Lab)",
      company: "University at Buffalo",
      companylogo: require("./assets/images/buffalo.jpg"),
      date: "Mar 2024 – Apr 2025",
      desc:
        "Conducted research on time-series anomaly detection and forecasting using LSTM & transformer architectures",
      descBullets: [
        "Preprocessed and curated large-scale datasets (sensor, financial, system logs)",
        "Built end-to-end model training and evaluation pipelines using PyTorch, NumPy, and Pandas",
        "Accelerated ML workloads using GPU-based optimization and parallelization techniques",
        "Collaborated with faculty and PhD students; presented findings in lab seminars",
      ],
    },
    {
      role: "Software Engineer",
      company: "Incture Technologies",
      companylogo: require("./assets/images/incture.jpg"),
      date: "Mar 2023 – Sept 2023",
      desc:
        "Developed backend microservices for unstructured feedback processing using Python & Apache Spark",
      descBullets: [
        "Designed REST APIs and message queues",
        "Implemented multithreaded modules to improve throughput and reduce latency",
        "Containerized services using Docker and configured CI/CD pipelines via Jenkins",
        "Collaborated with cross-functional teams to integrate modules",
      ],
    },
    {
      role: "Data Scientist Intern",
      company: "Phoenix Global",
      companylogo: require("./assets/images/phoenix.jpeg"),
      date: "Jun 2022 – Dec 2022",
      desc:
        "Built predictive models for business metrics (e.g. churn, conversion) using logistic regression, XGBoost, and neural networks",
      descBullets: [
        "Engineered features from transactional and behavioral data",
        "Conducted A/B tests and statistical analysis to validate model performance",
        "Deployed model endpoints using Flask and Docker to serve real-time predictions",
        "Produced dashboards and reports (Matplotlib, Seaborn, PowerBI)",
      ],
    },
  ],
};

/**********************
 * Open Source
 **********************/
const openSource = {
  showGithubProfile: "true",
  display: true,
};

/**********************
 * Projects
 **********************/
const bigProjects = {
  title: "Projects",
  subtitle: "Some of the cool stuff I've worked on",
  projects: [
    {
      image: vocalmateImg,
      projectName: "VocalMate – Voice-Enabled Task Manager",
      projectDesc:
        "Multimodal productivity app that captures tasks via live speech or audio uploads. Uses speech-to-text pipelines and integrates with Google Calendar API for real-time task scheduling.",
      footerLink: [
        { name: "GitHub Repo", url: "https://github.com/bindujamalempati/VocalMate" },
      ],
    },
    {
      image: pdfImg,
      projectName: "Generative PDF AI",
      projectDesc:
        "AI-powered PDF assistant built with LLMs. Supports question answering and content summarization over PDFs using LangChain, HuggingFace models, and vector databases.",
      footerLink: [
        { name: "GitHub Repo", url: "https://github.com/bindujamalempati/GenerativepdfAI" },
      ],
    },
    {
      image: bookstoreImg,
      projectName: "Bookstore Analytics Dashboard",
      projectDesc:
        "Interactive data dashboard for analyzing book sales, customer trends, and inventory. Built with Flask APIs, PostgreSQL backend, and Streamlit/Power BI for visualization.",
      footerLink: [
        { name: "GitHub Repo", url: "https://github.com/bindujamalempati/bookstore-dashboard" },
      ],
    },
  ],
  display: true,
};

/**********************
 * Resume
 **********************/
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true,
};

/**********************
 * Contact
 **********************/
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "7163804028",
  email_address: "malempatibinduja54@gmail.com",
};

const isHireable = true;

/**********************
 * Aliases required by template
 **********************/
const skillsSection = skills;
const educationInfo = degrees;
const achievementSection = { display: false };
const blogSection = { display: false };
const talkSection = { display: false };
const podcastSection = { display: false };
const twitterDetails = { userName: "", display: false };

/**********************
 * Exports
 **********************/
export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skills,
  skillsSection,
  degrees,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection,
};
