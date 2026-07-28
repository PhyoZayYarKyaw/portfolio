// =============================================
// Portfolio Data — Phyo Zay Yar Kyaw
// =============================================

export const personal = {
  name: 'Phyo Zay Yar Kyaw',
  title: 'Full Stack Software Engineer',
  subtitle: 'Cloud-Native & AI Developer',
  tagline: 'Building scalable cloud-native solutions with FastAPI, AWS & Angular',
  location: 'Yangon, Myanmar',
  email: 'kophyozayarkyaw@gmail.com',
  phone: '09-788420307',
  github: 'https://github.com/PhyoZayYarKyaw',
  linkedin: 'https://www.linkedin.com/in/phyo-zay-yar-kyaw-a9b894189',
  resumeUrl: 'https://drive.google.com/uc?export=download&id=1EW058LRcZsf9iHNkn6NWkzLN9jvbaL0J',
  avatar: null,
  bio: `Full Stack Software Engineer with 2 years of experience developing cloud-native web applications using Python, FastAPI, AWS Lambda, AWS SAM, Angular, and PostgreSQL. Experienced in designing scalable REST APIs, automating business workflows, and building enterprise solutions for real-time data management.`,
  bioExtended: `Passionate about Artificial Intelligence, Machine Learning, and cloud technologies, with a strong commitment to continuous learning and delivering impactful software solutions. Seeking opportunities to contribute technical expertise while growing as an AI and Cloud Engineer.`,
};

export const education = [
  {
    degree: 'Bachelor of Computer Science (B.C.Sc)',
    institution: 'University of Computer Studies, Magway',
    year: '2015 – 2024',
    description: 'Focused on software engineering, algorithms, databases, and distributed systems.',
  },
];

export const experience = [
  {
    id: 'mit-2024',
    role: 'Full Stack Developer',
    company: 'Myanmar Information Technology',
    period: '06/2024 – Present',
    location: 'Yangon, Myanmar',
    type: 'Full-time',
    highlights: [
      'Designed and developed a cloud-native Energy Management System (EMS) supporting real-time monitoring of telecom tower infrastructure.',
      'Built scalable REST APIs using FastAPI and AWS Lambda with AWS SAM for serverless architecture.',
      'Developed responsive Angular dashboards for monitoring, reporting, and data management.',
      'Implemented bulk CSV import/export tools, reducing manual data processing significantly.',
      'Integrated approval workflows and automated task assignment to improve operational efficiency.',
      'Collaborated with cross-functional teams to deliver features aligned with business requirements.',
    ],
    technologies: ['FastAPI', 'AWS Lambda', 'AWS SAM', 'Angular', 'PostgreSQL', 'Python', 'Docker'],
  },
];

export const projects = [
  {
    id: 'apollo-ems',
    title: 'Energy Management System (Apollo)',
    category: 'Cloud & Enterprise',
    description:
      'Cloud-native EMS for monitoring and managing energy data from mobile phone tower sites. Features live data monitoring, automated task assignment, structured approval workflows, and robust data import/export tools. Enables daily/monthly reporting for internal and client use.',
    highlights: [
      'Real-time energy data monitoring from 100+ tower sites',
      'Serverless REST APIs with AWS Lambda & SAM',
      'Angular dashboards with dynamic charts and reports',
      'Bulk CSV import/export with validation',
      'Automated approval workflows',
    ],
    technologies: ['Python', 'FastAPI', 'AWS Lambda', 'AWS SAM', 'Angular', 'PostgreSQL'],
    color: 'from-indigo-500 to-purple-600',
    icon: '⚡',
    featured: true,
  },
  {
    id: 'student-management',
    title: 'Student Management System',
    category: 'Full Stack Web',
    description:
      'Full-stack student management system using Django and React for efficient student record management. Implements secure REST APIs, responsive CRUD operations, and CSV/Excel import-export with data validation and intelligent update functionality.',
    highlights: [
      'Secure Django REST Framework APIs',
      'React frontend with responsive UI',
      'CSV/Excel import-export with validation',
      'Intelligent deduplication on import',
      'CRUD for students, courses, and grades',
    ],
    technologies: ['Python', 'Django', 'Django REST Framework', 'React', 'MySQL'],
    color: 'from-cyan-500 to-blue-600',
    icon: '🎓',
    featured: true,
  },
  {
    id: 'library-management',
    title: 'Library Management System',
    category: 'Desktop Application',
    description:
      'Desktop-based Library Management System using C# and Windows Forms to automate book management, member registration, inventory tracking, and reporting. Integrated barcode scanning and Crystal Reports for operational efficiency.',
    highlights: [
      'Book inventory & member registration',
      'USB Barcode scanner integration',
      'Crystal Reports for detailed reporting',
      'Borrow/return tracking system',
      'SQL Server / SQLite database backend',
    ],
    technologies: ['C#', 'Windows Forms', 'SQL Server', 'SQLite', 'Crystal Reports'],
    color: 'from-emerald-500 to-teal-600',
    icon: '📚',
    featured: false,
  },
  {
    id: 'credit-system',
    title: 'University Student Credit System',
    category: 'Web Application',
    description:
      'Credit management system for university students built with pure PHP, featuring robust data import/export capabilities. Enables seamless bulk data handling via CSV format with advanced import update logic to modify existing student credit records without duplication.',
    highlights: [
      'Designed for university student credit tracking',
      'CSV-based bulk import/export for student records',
      'Import update to overwrite/merge existing entries',
      'Error handling & data validation mechanisms',
      'Pure PHP, no frameworks — lightweight & efficient',
    ],
    technologies: ['PHP', 'MySQL', 'CSV Processing', 'HTML', 'CSS'],
    color: 'from-orange-500 to-red-600',
    icon: '💳',
    featured: false,
  },
];

export const skills = [
  {
    category: 'Cloud & DevOps',
    icon: '☁️',
    color: 'from-sky-500 to-blue-600',
    items: ['AWS Lambda', 'AWS SAM', 'Docker', 'Serverless Architecture', 'REST API Design'],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    color: 'from-violet-500 to-purple-600',
    items: ['FastAPI', 'Django', 'Django REST Framework', 'PHP', 'C#', 'Python'],
  },
  {
    category: 'Frontend',
    icon: '🎨',
    color: 'from-pink-500 to-rose-600',
    items: ['Angular', 'React', 'TypeScript', 'HTML5', 'CSS3', 'JavaScript'],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    color: 'from-emerald-500 to-green-600',
    items: ['PostgreSQL', 'MySQL', 'SQL Server', 'SQLite'],
  },
  {
    category: 'Tools & Methods',
    icon: '🔧',
    color: 'from-amber-500 to-orange-600',
    items: ['Git', 'GitHub', 'Postman', 'Visual Studio', 'VS Code', 'Agile'],
  },
  {
    category: 'AI & ML',
    icon: '🤖',
    color: 'from-indigo-500 to-cyan-600',
    items: ['Machine Learning Fundamentals', 'Data Processing', 'AI/ML Concepts'],
  },
];

export const softSkills = [
  { name: 'Problem Solving', level: 95 },
  { name: 'Analytical Thinking', level: 92 },
  { name: 'Team Collaboration', level: 90 },
  { name: 'Communication', level: 85 },
  { name: 'Adaptability', level: 93 },
  { name: 'Continuous Learning', level: 98 },
];

export const languages = [
  { name: 'Burmese', level: 'Native', percent: 100 },
  { name: 'English', level: 'Intermediate', percent: 65 },
];

export const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];
