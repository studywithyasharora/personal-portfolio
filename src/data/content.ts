/**
 * ─────────────────────────────────────────────────────────────
 *  SINGLE SOURCE OF TRUTH FOR ALL PORTFOLIO CONTENT
 *  Edit anything here (name, links, bio, projects, experience,
 *  skills) and the whole site updates.
 * ─────────────────────────────────────────────────────────────
 */
import type {
  Certification,
  ExperienceItem,
  NavLink,
  ProcessStep,
  Project,
  SideProject,
  SkillCategory,
  Stat,
  Trait } from
'../types/content';

export const siteConfig = {
  name: 'Yash Arora',
  initials: 'YA',
  headline: 'AI / ML Engineer · Applied AI & Generative AI · Full-Stack Delivery',
  tagline:
  'I ship applied ML and Generative AI systems end to end: train, evaluate, containerize, deploy.',
  altHeadline: 'AI Consultant · Technology Analyst',
  location: 'Delhi, India',
  openTo: ['Bengaluru', 'Hyderabad', 'Mumbai', 'NCR', 'Remote'],
  email: 'yasharora9934@gmail.com',
  /**
   * Contact form delivery. Get a free access key at https://web3forms.com
   * (enter your email, the key arrives in your inbox) and paste it here.
   * Leave empty to fall back to opening the visitor's email app.
   */
  web3formsKey: '',
  phone: '+91 93414 44246',
  linkedinUrl: 'https://www.linkedin.com/in/yash-arora-0407ar',
  linkedinLabel: 'linkedin.com/in/yash-arora-0407ar',
  githubUrl: 'https://github.com/studywithyasharora',
  githubLabel: 'github.com/studywithyasharora',
  resumeUrl: "/Yash_Arora_Resume_AI_Engineer.pdf",

  // TODO: Replace with actual profile photo
  profilePhoto: "/ChatGPT_Image_Sep_30,_2026,_06_18_34_PM.png",

  seo: {
    title: 'Yash Arora | AI / ML Engineer · Applied & Generative AI',
    description:
    'Yash Arora ships applied ML and Generative AI systems end-to-end: AWS-deployed ML pipelines, hybrid-retrieval RAG, and computer vision models at 92-96% accuracy.'
  }
};

export const navLinks: NavLink[] = [
{ id: 'about', label: 'About' },
{ id: 'impact', label: 'Impact' },
{ id: 'experience', label: 'Experience' },
{ id: 'projects', label: 'Projects' },
{ id: 'skills', label: 'Skills' },
{ id: 'contact', label: 'Contact' }];


/** Rotates in the hero, under the name */
export const heroRoles: string[] = [
'AI / ML Engineer',
'Applied AI & Generative AI',
'Full-Stack ML Delivery',
'AI Consultant',
'Technology Analyst'];


export const heroStats: Stat[] = [
{ value: 0, text: 'AWS', label: 'Deployed ML pipeline' },
{ value: 96, rangeStart: 92, suffix: '%', label: 'CV model accuracy' },
{ value: 30, prefix: '~', suffix: '%', label: 'RAG hallucination cut' },
{ value: 1500, suffix: '+', label: 'Learners enabled' }];


export const about = {
  heading: 'I sit between the model and the meeting room.',
  paragraphs: [
  'B.Tech AI graduate (2025) who ships applied ML and Generative AI systems end to end: train, evaluate, containerize, deploy. My production work includes an AWS-deployed scoring service with MLflow, DVC and GitHub Actions, a hybrid BM25 + dense RAG pipeline that cut unsupported answers by ~30% on a held-out set, and CV models at 92-96% accuracy served through FastAPI and Flask.',
  'I’m just as comfortable explaining model risk and rollout to non-technical stakeholders. That skill was sharpened by designing AI curriculum, training teachers and reaching 1,500+ learners across 20+ schools.'],

  traits: [
  {
    title: 'Ships end-to-end systems',
    body: 'From training and evaluation to Docker, CI/CD and a live AWS endpoint. Full ownership, no hand-offs.'
  },
  {
    title: 'Explains model risk clearly',
    body: 'Wrote evaluation rubrics adopted by Scale AI’s annotation team; translates failure modes into decisions stakeholders can make.'
  },
  {
    title: 'Builds enablement at scale',
    body: 'K-12 AI curriculum live in 5+ partner schools, 8 applied-ML bootcamps and 10+ GenAI webinars for 300+ attendees.'
  }] as
  Trait[]
};

/** Order matters: the first two render large in the Impact bento */
export const metrics: Stat[] = [
{
  value: 1500,
  suffix: '+',
  label: 'Learners reached',
  context: '600+ sessions across 20+ schools',
  viz: { kind: 'dots', count: 150, caption: 'Each dot is 10 learners' }
},
{
  value: 30,
  prefix: '~',
  suffix: '%',
  label: 'Fewer unsupported RAG answers',
  context: '200-question held-out evaluation set',
  viz: {
    kind: 'compare',
    baseline: 'No retrieval (baseline)',
    result: 'Hybrid BM25 + dense RAG',
    resultValue: 70,
    caption: 'Unsupported answers, baseline indexed to 100'
  }
},
{
  value: 96,
  rangeStart: 92,
  suffix: '%',
  label: 'CV model accuracy',
  context: '92% CNN up to 96.3% ResNet',
  viz: { kind: 'ring', value: 96, caption: 'Best model: ResNet on PlantVillage, +4 pp vs VGG16' }
},
{
  value: 94,
  suffix: '%',
  label: 'Drowsiness detection accuracy',
  context: 'At <100 ms on a laptop CPU',
  viz: { kind: 'ring', value: 94, caption: 'YOLOv5 fine-tuned on 5,000 annotated images' }
},
{
  value: 3,
  suffix: '×',
  label: 'Programme scale',
  context: 'Training portal vs. in-person only',
  viz: { kind: 'multiply', factor: 3, caption: 'In-person sessions vs. with the portal' }
},
{
  value: 50,
  prefix: '~',
  suffix: '%',
  label: 'Teacher onboarding time cut',
  context: 'Handbooks, lesson plans and rubrics',
  viz: { kind: 'reduce', before: 'Before', after: 'With handbooks', afterValue: 50, caption: 'Onboarding time, before = 100' }
},
{
  value: 60,
  prefix: '~',
  suffix: '%',
  label: 'Admin overhead cut',
  context: 'Spreadsheets replaced by a Django LMS',
  viz: { kind: 'reduce', before: 'Spreadsheets', after: 'Django LMS', afterValue: 40, caption: 'Admin effort, before = 100' }
},
{
  value: 20,
  suffix: '+',
  label: 'Partner schools',
  context: 'Across the Reboot Robotics programme',
  viz: { kind: 'grid', count: 20, caption: 'One square per school' }
}];


export const experience: ExperienceItem[] = [
{
  id: 'pyxis',
  role: 'AI/ML Education Specialist',
  company: 'Pyxis Blu',
  location: 'Ranchi',
  period: 'Jan 2026 to Present',
  current: true,
  bullets: [
  'Designed and shipped a K-12 AI & robotics curriculum now live in 5+ partner schools; structured handbooks and rubrics cut teacher onboarding time ~50%.',
  'Built an internal training portal (recordings, quizzes, progress tracking) used by 20+ teachers, scaling programme reach 3× beyond in-person sessions with full-stack product ownership.'],

  tags: ['Curriculum design', 'Full-stack', 'Enablement']
},
{
  id: 'sharda',
  role: 'AI Trainer',
  company: 'Sharda Global School',
  location: 'Ranchi',
  period: 'Jul 2025 to Dec 2025',
  bullets: [
  'Authored 12+ AI/ML learning modules (Scratch AI, Teachable Machine, Arduino) across 6 grade levels for 200+ students. Adopted as the school’s official AI programme, raising project completion by 40%.',
  'Coached 5 students to district-level science fair wins with AI-based environmental sensing and image classification projects.'],

  tags: ['Teachable Machine', 'Arduino', 'Mentoring']
},
{
  id: 'reboot',
  role: 'AI Trainer & Robotics Engineer (LMS Owner)',
  company: 'Reboot Robotics Academy',
  location: 'Ranchi',
  period: 'Nov 2024 to Mar 2025',
  bullets: [
  'Designed and shipped a full-stack LMS from scratch (Django + MySQL + Bootstrap), cutting administrative overhead ~60% by replacing spreadsheet workflows with auth, CRUD and reporting.',
  'Led 8 applied-ML bootcamps where 30+ learners shipped a first deployed model; contributed to 600+ sessions across 20+ schools reaching 1,500+ students.'],

  tags: ['Django', 'MySQL', 'Bootcamps']
},
{
  id: 'yhils',
  role: 'AI/ML Intern',
  company: 'YHils Ed-Tech',
  location: 'Remote',
  period: 'Feb to Mar 2024',
  bullets: [
  'Trained CNN/ANN image models (TensorFlow, scikit-learn) to 92% test accuracy; automated augmentation pipelines on 10,000+ images, cutting training time ~25%.',
  'Delivered weekly model performance dashboards that surfaced data drift early and enabled 2× faster iteration for the research team.'],

  tags: ['TensorFlow', 'CNNs', 'Data drift']
},
{
  id: 'scale',
  role: 'AI Model Evaluator (Freelance)',
  company: 'Scale AI',
  location: 'Remote',
  period: 'Oct 2023 to Feb 2024',
  bullets: [
  'Reviewed 500+ model outputs across code generation, reasoning and safety tasks; rated responses and flagged policy violations.',
  'Developed evaluation rubrics later adopted by the broader annotation team; contributed to content-safety pipelines across 1,000+ tasks.'],

  tags: ['LLM evaluation', 'Safety', 'Rubric design']
},
{
  id: 'gdsc',
  role: 'ML Associate Executive',
  company: 'Google Developer Student Club (GDSC)',
  location: 'Ranchi',
  period: 'Aug 2023 to Aug 2024',
  bullets: [
  'Hosted 10+ ML/GenAI webinars (Transformers, LLMs) for 300+ attendees; co-organized an inter-college AI hackathon (120+ participants) as lead technical judge.',
  'Mentored 50+ developers through weekly coding sprints; 15+ secured their first AI/data internships.'],

  tags: ['Community', 'GenAI', 'Mentorship']
}];


export const projects: Project[] = [
{
  id: 'exam-pipeline',
  title: 'Student Exam Performance Prediction',
  liveUrl: 'https://spi.yasharora.online/predictdata',
  category: 'MLOps / Production ML',
  year: '2026',
  summary:
  'End-to-end pipeline predicting student exam performance, covering model development, experimentation, versioning, containerization and cloud deployment. Benchmarked scikit-learn, XGBoost and CatBoost with MLflow, versioned data and models with DVC + DagsHub, and deployed a Flask scoring service to AWS via GitHub Actions CI/CD.',
  highlight: 'End-to-end MLOps pipeline with automated AWS deployment',
  pipeline: ['Train', 'Track', 'Version', 'Containerize', 'Deploy'],
  metric: { display: 'AWS', label: 'CI/CD on every push' },
  tags: ['Python', 'scikit-learn', 'XGBoost', 'CatBoost', 'Flask', 'Docker', 'AWS', 'MLflow', 'DVC', 'DagsHub', 'GitHub Actions'],
  image: "/214365dd-8365-42c5-ac69-0a8718b54815.jpg",

  imageAlt: 'Abstract visualization of connected pipeline stages',
  githubUrl: 'https://github.com/studywithyasharora/Exam-performance-prediction-'
},
{
  id: 'rag-chatbot',
  title: 'RAG Chatbot with Hybrid Retrieval',
  category: 'Generative AI / RAG',
  year: 'May 2024',
  summary:
  'Crawls web content, chunks documents, stores embeddings in ChromaDB and generates grounded answers with GPT-4. Hybrid BM25 + dense retrieval handles both keyword and semantic queries; evaluated on a 200-question held-out set against a no-retrieval baseline.',
  highlight: 'Hybrid retrieval with measurable reduction in unsupported answers',
  pipeline: ['Crawler', 'Chunker', 'ChromaDB', 'GPT-4'],
  metric: { display: '~30%', label: 'fewer unsupported answers' },
  tags: ['Python', 'LangChain', 'ChromaDB', 'BM25', 'OpenAI Embeddings', 'GPT-4', 'BeautifulSoup'],
  image: "/90019319-dfcc-4463-b34f-458c8b964f71.jpg",

  imageAlt: 'Abstract visualization of vector embeddings and document retrieval',
  githubUrl: 'https://github.com/studywithyasharora/rag-chatbot',
  related: { label: 'RAG PDF Chat', url: 'https://github.com/studywithyasharora/rag-pdf-chat' }
},
{
  id: 'potato-classifier',
  title: 'Potato Disease Classifier',
  category: 'Computer Vision / Deep Learning',
  year: 'Mar 2024',
  summary:
  'ResNet-based CNN trained with augmentation on PlantVillage (10,000+ images), beating a VGG16 baseline by 4 pp. Served through a Dockerized FastAPI inference service with a React image-upload interface. The entire stack starts with one docker-compose up.',
  highlight: '96.3% test accuracy with containerized full-stack inference',
  metric: { display: '96.3%', label: 'test accuracy · 3 classes' },
  tags: ['Python', 'TensorFlow', 'ResNet', 'FastAPI', 'Docker', 'React'],
  image: "/aa2434ad-9c7b-46c8-a23a-1846ebeb1e03.jpg",

  imageAlt: 'Potato leaf with a detection box around a disease lesion',
  githubUrl: 'https://github.com/studywithyasharora/Potato-Disease-Classification'
},
{
  id: 'drowsiness-detector',
  title: 'Real-Time Drowsiness Detector',
  category: 'Computer Vision / Real-Time AI',
  year: 'Aug 2024',
  summary:
  'Custom YOLOv5 model fine-tuned on 5,000 annotated images. OpenCV handles the live webcam feed, and an audio alert fires after two consecutive frames of detected eye closure.',
  highlight: '94% detection accuracy with sub-100 ms CPU inference',
  metric: { display: '94%', label: 'accuracy at <100 ms on CPU' },
  tags: ['Python', 'YOLOv5', 'OpenCV', 'Flask', 'Roboflow', 'Transfer Learning'],
  image: "/8725b4af-3e92-4c1b-8c45-69b2c72742b2.jpg",

  imageAlt: 'Driver’s face with computer-vision tracking boxes around the eyes'
}];


export const selectedProjects: SideProject[] = [
{
  id: 'crewai',
  title: 'Multi-Agent AI Systems with CrewAI',
  category: 'Generative AI / AI Agents',
  description:
  'Multi-agent workflows where specialized agents split complex tasks into independent roles and coordinate their outputs. Practical agent orchestration for LLM-powered work.',
  tech: ['Python', 'CrewAI', 'Generative AI', 'AI Agents'],
  githubUrl: 'https://github.com/studywithyasharora/Multi-AI-Agent-Systems-with-crewAI'
},
{
  id: 'churn',
  title: 'Customer Churn Prediction',
  category: 'Machine Learning / Deep Learning',
  description:
  'ANN-based system to identify customers at risk of leaving, covering data preparation, modeling, training, evaluation and visualization of churn factors.',
  tech: ['Python', 'TensorFlow', 'NumPy', 'Matplotlib', 'ANN'],
  githubUrl: 'https://github.com/studywithyasharora/machine-learning-projects'
},
{
  id: 'fraud',
  title: 'Fraud Detection',
  category: 'Machine Learning',
  description:
  'Classification workflow that prepares transaction data and evaluates models on distinguishing fraudulent activity from legitimate behavior.',
  tech: ['Python', 'Machine Learning', 'Jupyter'],
  githubUrl: 'https://github.com/studywithyasharora/Fraud-Detection'
},
{
  id: 'lunar-lander',
  title: 'Lunar Lander (Reinforcement Learning)',
  category: 'Reinforcement Learning',
  description:
  'RL agent that learns a landing control policy through rewards over successive episodes, built during Andrew Ng’s machine learning coursework.',
  tech: ['Python', 'TensorFlow', 'Reinforcement Learning'],
  githubUrl: 'https://github.com/studywithyasharora/Machine-Learning-lab-Andrew-ng-'
},
{
  id: 'esp32',
  title: 'ESP32 Voice-Controlled LED',
  category: 'Embedded Systems / IoT',
  description:
  'Smartphone speech-to-text commands sent over Bluetooth to an ESP32, which interprets them and drives a connected LED.',
  tech: ['C++', 'ESP32', 'Bluetooth'],
  githubUrl: 'https://github.com/studywithyasharora/ESP32-Voice-Controlled-LED-using-Bluetooth'
},
{
  id: 'gesture-car',
  title: 'Gesture-Controlled Robotic Car',
  category: 'Robotics / Embedded Systems',
  description:
  'micro:bit tilt gestures translated into directional commands for an L298N-driven robotic car, enabling wireless control.',
  tech: ['micro:bit', 'L298N', 'Robotics', 'Embedded Systems'],
  githubUrl: 'https://github.com/studywithyasharora/Gesture-control-car-using-microbit'
}];


export const skills: SkillCategory[] = [
{
  name: 'Machine Learning & Deep Learning',
  note: 'Classical ML through deep vision models',
  icon: 'brain',
  items: ['Python', 'scikit-learn', 'XGBoost', 'CatBoost', 'TensorFlow', 'PyTorch', 'OpenCV', 'YOLOv5', 'Hugging Face', 'NumPy', 'Pandas']
},
{
  name: 'LLMs & Generative AI',
  note: 'Retrieval, agents and evaluation',
  icon: 'sparkles',
  items: ['LangChain', 'RAG pipelines', 'Hybrid retrieval (BM25 + dense)', 'ChromaDB', 'Pinecone', 'OpenAI API', 'LLMs', 'Prompt engineering', 'CrewAI']
},
{
  name: 'MLOps & Cloud',
  note: 'Reproducible, versioned, deployed',
  icon: 'cloud',
  items: ['Docker', 'docker-compose', 'AWS EC2', 'Elastic Beanstalk', 'ECR', 'SageMaker', 'MLflow', 'DVC', 'DagsHub', 'GitHub Actions CI/CD']
},
{
  name: 'Backend & Full-Stack',
  note: 'APIs and product surfaces',
  icon: 'server',
  items: ['FastAPI', 'Flask', 'Django', 'REST APIs', 'React', 'SQL', 'MySQL', 'Git']
},
{
  name: 'Languages',
  note: 'Daily drivers and systems',
  icon: 'code',
  items: ['Python', 'JavaScript', 'SQL', 'C++', 'Bash']
}];


export const education = {
  degree: 'B.Tech, Artificial Intelligence',
  school: 'Sarala Birla University',
  location: 'Ranchi',
  period: 'Apr 2021 to May 2025',
  grade: 'SGPA 7.25',
  coursework: ['Deep Learning', 'NLP', 'Computer Vision', 'Data Structures', 'Cloud Computing']
};

export const certifications: Certification[] = [
{ name: 'Machine Learning Specialization', issuer: 'Stanford / DeepLearning.AI', year: '2023' },
{ name: 'Machine Learning with Python', issuer: 'IBM / Coursera', year: '2023' },
{ name: 'Multi AI Agent Systems with CrewAI', issuer: 'CrewAI / DeepLearning.AI', year: '2024' },
{ name: 'Meta Front-End Developer Professional Certificate', issuer: 'Meta / Coursera', year: '2024' }];


export const processSteps: ProcessStep[] = [
{
  id: 'train',
  title: 'Train',
  icon: 'train',
  body: 'Benchmark scikit-learn, XGBoost and CatBoost on tabular data; fine-tune ResNet and YOLOv5 for vision.',
  proof: '96.3% ResNet · 94% YOLOv5'
},
{
  id: 'evaluate',
  title: 'Evaluate',
  icon: 'evaluate',
  body: 'Held-out sets, honest baselines and written rubrics, so a number means something to the people deciding.',
  proof: '200-question RAG eval · ~30% fewer unsupported answers'
},
{
  id: 'containerize',
  title: 'Containerize',
  icon: 'container',
  body: 'Docker and docker-compose packaging, experiments tracked in MLflow, data and models versioned with DVC + DagsHub.',
  proof: 'Full stack up with one docker-compose up'
},
{
  id: 'deploy',
  title: 'Deploy',
  icon: 'deploy',
  body: 'GitHub Actions CI/CD to AWS, serving models behind FastAPI and Flask endpoints.',
  proof: 'Auto-deploys to AWS on every push to main'
}];


/** Scrolling tech ribbon under the hero */
export const marqueeTech: string[] = [
'Python',
'PyTorch',
'TensorFlow',
'scikit-learn',
'XGBoost',
'YOLOv5',
'Hugging Face',
'LangChain',
'ChromaDB',
'Pinecone',
'OpenAI API',
'CrewAI',
'Docker',
'AWS',
'MLflow',
'DVC',
'GitHub Actions',
'FastAPI',
'Flask',
'Django',
'React'];


export const contact = {
  heading: 'Let’s build AI that actually ships.',
  body: 'Hiring for an ML Engineer, Applied AI or GenAI role? Need someone to scope, build and explain an AI system for your team? I reply within a day.'
};