import { ResumeData } from './types';

export const resumeData: ResumeData = {
  name: "Akanksha Verma",
  title: "Machine Learning Engineer & Software Developer",
  status: "Open to Work: ML / AI / SDE Roles",
  contact: {
    phone: "+91-8528602066",
    email: "akanksha.verma@iitkgp.ac.in",
    linkedin: "www.linkedin.com/in/akanksha-verma-52bb57301",
    github: "github.com/vakanksha98",
    location: "Kharagpur, India"
  },
  education: [
    {
      institution: "Indian Institute of Technology, Kharagpur",
      degree: "M.Tech in Computer Science and Data Processing",
      year: "2026",
      score: "CGPA: 7.60/10"
    },
    {
      institution: "Mahatma Gandhi Kashi Vidyapith University",
      degree: "Master of Science in Mathematics",
      year: "2021",
      score: "82.2%"
    }
  ],
  skills: [
    {
      category: "Core",
      items: ["Python", "C++", "SQL", "Data Structures"]
    },
    {
      category: "AI & ML",
      items: ["PyTorch", "TensorFlow", "Transformers", "LLM Fine-tuning", "NLP", "Computer Vision"]
    },
    {
      category: "Data Science",
      items: ["Pandas", "NumPy", "Scikit-Learn", "XGBoost", "Feature Engineering"]
    },
    {
      category: "Dev Tools",
      items: ["Git", "Linux", "Docker", "VS Code", "Jupyter"]
    }
  ],
  projects: [
    {
      title: "Fine-Tuning LLMs for Domain Specifics",
      tech: "PyTorch, HuggingFace, LoRA",
      date: "Jul 2025 - Present",
      points: [
        "Implemented LoRA, PEFT, and QLoRA fine-tuning techniques on GPT-2 and LLaMA-2.",
        "Reduced training costs by 60% while optimizing model performance for NLP tasks."
      ],
      githubUrl: "https://github.com/vakanksha98/fine-tuning-llm"
    },
    {
      title: "Brain Tumor Classification",
      tech: "TensorFlow, CNN, PSO",
      date: "Aug - Nov 2025",
      points: [
        "Architected a 5-block CNN achieving 75% accuracy.",
        "Optimized using Particle Swarm Optimization (PSO) outperforming Adam (F1: 0.76 vs 0.74)."
      ],
      githubUrl: "https://github.com/vakanksha98/brain-tumor-classification"
    },
    {
      title: "CLTV Prediction & Churn Analytics",
      tech: "XGBoost, Random Forest",
      date: "Jun - Aug 2025",
      points: [
        "Built end-to-end CLTV system using RFM analysis on 276K+ transactions.",
        "Developed churn prediction models achieving AUC > 0.85."
      ],
      githubUrl: "https://github.com/vakanksha98/cltv-prediction"
    },
    {
      title: "Rainfall Prediction Model",
      tech: "Scikit-Learn, GridSearchCV",
      date: "Aug - Nov 2024",
      points: [
        "Developed production-ready model with 80% test accuracy using GridSearchCV.",
        "Handled class imbalance through strategic down-sampling techniques."
      ],
      githubUrl: "https://github.com/vakanksha98/rainfall-prediction"
    }
  ],
  experience: [
    {
      role: "Machine Learning Intern",
      company: "IIT Kharagpur (Dept. of Mathematics)",
      location: "Kharagpur, India",
      date: "Jun 2025 - Aug 2025",
      points: [
        "Engineered CLTV prediction system using RFM and probabilistic models on 276K+ transactions.",
        "Built churn prediction models using Random Forest and XGBoost achieving AUC > 0.85."
      ]
    },
    {
      role: "Teaching Assistant - Optimization Lab",
      company: "IIT Kharagpur",
      location: "Kharagpur, India",
      date: "Aug 2025 - Nov 2025",
      points: [
        "Mentored 100+ students in advanced optimization algorithms including linear programming."
      ]
    }
  ],
  achievements: [
    {
      title: "GATE 2024 - AIR 299",
      description: "Mathematics (IISc Bangalore)"
    },
    {
      title: "CSIR-NET JRF 2024 - AIR 137",
      description: "Junior Research Fellowship"
    },
    {
      title: "CSIR-NET 2023 - AIR 90",
      description: "Assistant Professor Eligibility"
    }
  ],
  coursework: [
    "DSA",
    "Machine Learning",
    "DBMS",
    "OOP",
    "Linear Algebra",
    "Graph Theory"
  ]
};