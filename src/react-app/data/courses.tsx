import pyicon from "@/icons/icons8-python.svg";
import javaicon from "@/icons/icon_java.svg";
import aimlicon from "@/icons/icons8-ai-100.png";

// import { Code, Brain, Zap, Palette, Video, BarChart2 } from 'lucide-react';

export interface Course {
  id:number,
  category: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  icon: React.ReactNode;
  features: string[];
  featured: boolean;
  status: "Upcoming" | "Running" | "Completed";
}

export const allCourses: Course[] = [
  {
    id:1,
    category: "Programming",
    title: "45 Days of Python Mastery Course",
    description: "Learn Python from scratch to advanced in just 45 days with real-world projects, problem-solving, and DSA essentials—perfectly designed for career and interview preparation.",
    duration: "45 Days",
    level: "Beginner to Advanced",
    icon: <img src={pyicon} alt="Python Icon" className="w-18 h-18" />,
    features: [
      "Core Python + OOPs",
      "5+ Hands-on Projects for GitHub & LinkedIn",
      "Data Structures & Algorithms",
      "50+ Coding Problems (HackerRank, LeetCode)",
      "Industry-Level Certification"
    ],
    featured: true,
    status: "Running"
  },
  {
    id:2,
    category: "Programming",
    title: "45 Days of Java Mastery Course",
    description: "Master Java programming in 45 days, from fundamentals to advanced topics. This course is packed with practical projects and problem-solving to get you job-ready.",
    duration: "45 Days",
    level: "Beginner to Advanced",
    icon: <img src={javaicon} alt="Java Icon" className="w-12 h-12" />,
    features: [
      "Core Java + OOPs",
      "Spring Boot & RESTful APIs",
      "Data Structures & Algorithms",
      "50+ Coding Problems",
      "Build & Deploy 3+ Projects"
    ],
    featured: true,
    status: "Upcoming"
  },
  {
    id:3,
    category: "Programming",
    title: "75 Days of AI & Machine Learning Mastery Course",
    description: "Learn Artificial Intelligence and Machine Learning from basics to advanced with real-world applications, hands-on projects, and interview preparation. Perfect for students and professionals aiming for AI/ML careers.",
    duration: "10 Weeks",
    level: "Beginner to Advanced",
    icon: <img src={aimlicon} alt="AI & ML Icon" className="w-12 h-12" />, // replace aiMlIcon with your PNG/SVG
    features: [
      "Python for AI & ML",
      "Mathematics for ML (Linear Algebra, Probability, Statistics)",
      "Supervised & Unsupervised Learning Algorithms",
      "Deep Learning with TensorFlow & PyTorch",
      "5+ AI/ML Hands-on Projects for GitHub & LinkedIn",
      "50+ Practice Problems (Kaggle, LeetCode ML problems)",
      "Industry-Level Certification"
    ],
    featured: true,
    status: "Upcoming"
  },  
  // {
  //   category: "Web Development",
  //   title: "Full-Stack Web Development with MERN",
  //   description: "Become a full-stack developer by mastering the MERN (MongoDB, Express, React, Node.js) stack. Build and deploy complex web applications from scratch.",
  //   duration: "90 Days",
  //   level: "Intermediate",
  //   icon: <Zap className="w-8 h-8" />,
  //   features: [
  //     "React for Frontend",
  //     "Node.js & Express for Backend",
  //     "MongoDB for Database",
  //     "State Management with Redux",
  //     "Authentication & Authorization"
  //   ],
  //   featured: true,
  //   status: "Upcoming"
  // },
  // {
  //   category: "Data Science",
  //   title: "Data Science with Python",
  //   description: "Dive into the world of data science. Learn to analyze data, create beautiful visualizations, and build predictive models using Python, Pandas, and Scikit-learn.",
  //   duration: "60 Days",
  //   level: "Intermediate",
  //   icon: <BarChart2 className="w-8 h-8" />,
  //   features: [
  //     "Data Analysis with Pandas",
  //     "Data Visualization with Matplotlib & Seaborn",
  //     "Machine Learning with Scikit-learn",
  //     "Real-world Case Studies",
  //     "Final Capstone Project"
  //   ],
  //   featured: false,
  //   status: "Upcoming"
  // },
  // {
  //   category: "Creative",
  //   title: "UI/UX Design with Figma",
  //   description: "Learn to design beautiful and user-friendly interfaces with Figma. This course covers the entire design process, from wireframing to prototyping.",
  //   duration: "30 Days",
  //   level: "Beginner",
  //   icon: <Palette className="w-8 h-8" />,
  //   features: [
  //     "Design Principles & Theories",
  //     "Wireframing & Prototyping",
  //     "Creating Design Systems",
  //     "User Research & Testing",
  //     "Portfolio Building"
  //   ],
  //   featured: false,
  //   status: "Upcoming"
  // },
];
