export const basePath = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

export const profile = {
  shortName: "AJAY",
  name: "Ajay Madana",
  fullName: "Balaji Ajay Kumar Madana",
  email: "ajaymadana2126@gmail.com",
  phone: "+1 240-879-8242",
  location: "College Park, Maryland",
  resume: "resume.pdf",
  links: {
    linkedin: "https://linkedin.com/in/ajaymadana126",
    github: "https://github.com/Ajay0612",
    email: "mailto:ajaymadana2126@gmail.com",
  },
  heroMeta: ["Based in College Park, MD", "Open to opportunities", "Data / Product / AI"],
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
];

export const heroSnapshot = {
  label: "Work Snapshot",
  timeframe: "Data / AI / Business",
  summary:
    "A portfolio centered on analytical systems: validated healthcare data, ecommerce growth diagnosis, AI evaluation, and efficient LLM fine-tuning.",
  metrics: [
    { value: "19.4M", label: "Medicare claims analyzed" },
    { value: "$23.1M", label: "Ecommerce revenue opportunity" },
    { value: "52.9%", label: "LLM Exact Match" },
  ],
  focus: ["Healthcare analytics", "Product metrics", "Applied AI", "Cloud data systems"],
};

export const capabilities = [
  {
    number: "01",
    title: "Analytics",
    text: "Define metrics, validate data quality, find patterns, and turn analysis into clear recommendations.",
  },
  {
    number: "02",
    title: "Product",
    text: "Work with funnels, cohorts, retention, experimentation, and product metrics to explain behavior.",
  },
  {
    number: "03",
    title: "Machine Learning",
    text: "Build and evaluate predictive workflows for classification, segmentation, and model comparison.",
  },
  {
    number: "04",
    title: "Applied AI",
    text: "Evaluate AI systems, RAG workflows, fine-tuning pipelines, and reliability trade-offs.",
  },
];

export const experiences = [
  {
    company: "YugaSys - HeiBuddy",
    role: "AI Product & Data Analyst Intern",
    period: "Jun 2026 - Present",
    location: "Remote",
    summary: "Building measurement and QA practices for AI product architecture and system reliability.",
    highlights: [
      "Translated planned AI architecture into measurable QA checks across policy routing, DAG dependencies, asynchronous MCP tool execution, audit logs, and observability.",
      "Built a spreadsheet-based QA tracker categorizing defects across feature, severity, frequency, and user impact.",
      "Used a 250 ms Graph RAG timeout target to evaluate fallback behavior and reliability trade-offs.",
    ],
    technologies: ["AI Evaluation", "Graph RAG", "MCP", "QA", "Product Analytics", "Observability"],
  },
  {
    company: "SAP",
    role: "Intern - Team Lead",
    period: "Mar 2024 - Apr 2024",
    location: "Bangalore, India",
    summary: "Led a small intern project team building a cloud-backed spend-analysis workflow.",
    highlights: [
      "Led a small intern project team building an OCR-powered spend-analysis workflow.",
      "Used AWS S3, Textract, and DynamoDB to process sample receipt data.",
      "Benchmarked approximately 40% improvement in sample receipt-processing time compared with manual review.",
      "Designed sustainability scoring based on classified purchased items.",
    ],
    technologies: ["AWS S3", "AWS Textract", "DynamoDB", "OCR", "Data Analysis"],
  },
];

export const projects = [
  {
    number: "01",
    name: "Medicare Spend Intelligence",
    category: "Healthcare Analytics",
    description:
      "Analyzed large-scale Medicare provider spending to identify cost drivers, utilization patterns, billing anomalies, and savings opportunities.",
    scale: "2022-2023 Medicare data across 19.4M provider claims.",
    result:
      "$3.5-4.0B in potential annual savings opportunities identified through outlier, specialty-drug growth, and geographic variation analysis.",
    metrics: [
      { value: "19.4M", label: "Provider claims" },
      { value: "$182.8B", label: "Payments analyzed" },
      { value: "99.9%", label: "Financial integrity" },
    ],
    details: [
      "Advanced SQL analysis across cost drivers, utilization, billing anomalies, and geographic variation.",
      "Data-quality validation reached 100% completeness before findings were translated into recommendations.",
    ],
    technologies: ["PostgreSQL", "SQL", "Data Quality", "Healthcare Analytics"],
  },
  {
    number: "02",
    name: "From Clicks to Cash",
    category: "Ecommerce Analytics",
    description:
      "Consulting-style analysis of ecommerce growth bottlenecks across cancellations, average order value, customer retention, and repeat purchases.",
    scale: "Approximately 125K ecommerce orders.",
    result: "$23.1M annual revenue opportunity identified and translated into a prioritized growth roadmap.",
    metrics: [
      { value: "~125K", label: "Orders analyzed" },
      { value: "$23.1M", label: "Revenue opportunity" },
      { value: "SQL", label: "Window functions" },
    ],
    details: [
      "Used cohort analysis, retention analysis, and revenue leakage analysis to isolate growth bottlenecks.",
      "Delivered Tableau dashboards for product, growth, and operations decision-making.",
    ],
    technologies: ["SQL", "PostgreSQL", "Tableau", "Cohort Analysis"],
  },
  {
    number: "03",
    name: "Efficient LLM Fine-Tuning for Math Reasoning",
    category: "Applied AI / LLM Engineering",
    description:
      "Fine-tuned Microsoft Phi-2 on GSM8K using parameter-efficient techniques to improve mathematical reasoning while reducing GPU memory requirements.",
    scale: "2.7B parameter Phi-2 model fine-tuned on GSM8K.",
    result: "Trained 0.06% of parameters, reduced VRAM from about 10GB to about 4GB, and reached 52.9% Exact Match.",
    metrics: [
      { value: "2.7B", label: "Phi-2 model" },
      { value: "0.06%", label: "Parameters trained" },
      { value: "52.9%", label: "Exact Match" },
    ],
    details: [
      "Used 4-bit NF4 QLoRA with Hugging Face Transformers, PEFT, LoRA, bitsandbytes, and PyTorch.",
      "Designed an error-driven training dataset, ran hyperparameter sweeps, and compared ablation results.",
    ],
    technologies: ["Python", "PyTorch", "Hugging Face", "QLoRA", "PEFT"],
  },
  {
    number: "04",
    name: "Bank Customer Churn Prediction",
    category: "Machine Learning",
    description:
      "Built a supervised machine-learning system for identifying banking customers at risk of churn and translating model output into actionable risk segments.",
    scale: "Approximately 10,000 banking customers.",
    result: "Compared model families and translated predictions into low, medium, and high churn-risk segments.",
    metrics: [
      { value: "10K", label: "Customers" },
      { value: "4", label: "Model families" },
      { value: "3", label: "Risk segments" },
    ],
    details: [
      "Compared Logistic Regression, Random Forest, SVM, and XGBoost for churn classification.",
      "Used SMOTE and ADASYN to handle class imbalance before evaluating churn-risk outputs.",
    ],
    technologies: ["Python", "scikit-learn", "XGBoost", "SMOTE"],
  },
  {
    number: "05",
    name: "OCR-Powered Sustainable Spending",
    category: "Cloud & Data Systems",
    description:
      "Cloud-based receipt-processing and sustainability analysis prototype developed during the SAP internship.",
    scale: "Prototype workflow for OCR receipt extraction and item classification.",
    result: "Benchmarked approximately 40% improvement in sample receipt-processing time compared with manual review.",
    metrics: [
      { value: "40%", label: "Processing lift" },
      { value: "AWS", label: "Cloud pipeline" },
      { value: "OCR", label: "Receipt extraction" },
    ],
    details: [
      "Used AWS S3, AWS Textract, and DynamoDB for receipt extraction and storage.",
      "Classified purchased items and converted sustainable item percentages into a user-facing score.",
    ],
    technologies: ["AWS", "Textract", "DynamoDB", "OCR"],
  },
];

export const metrics = [
  { value: "19.4M", label: "Claims analyzed" },
  { value: "$182.8B", label: "Healthcare payments" },
  { value: "$23.1M", label: "Revenue opportunity" },
  { value: "52.9%", label: "LLM Exact Match" },
];

export const skillGroups = [
  {
    name: "Data & BI",
    skills: ["SQL", "Tableau", "Excel", "Power Query", "DAX", "KPI Dashboards", "Data Visualization"],
  },
  {
    name: "Python & Machine Learning",
    skills: ["Python", "Pandas", "NumPy", "scikit-learn", "XGBoost", "Regression", "Classification", "EDA"],
  },
  {
    name: "Analytics",
    skills: [
      "Cohort Analysis",
      "A/B Testing",
      "Data Quality",
      "Time-Series Forecasting",
      "Product Metrics",
      "Revenue Analytics",
    ],
  },
  {
    name: "AI",
    skills: ["RAG", "AI Evaluation", "Hugging Face", "QLoRA", "PEFT", "Graph RAG", "LLM Fine-Tuning"],
  },
  {
    name: "Data & Cloud",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redshift", "DynamoDB", "AWS S3", "AWS Textract"],
  },
  {
    name: "Engineering",
    skills: ["Git", "Docker", "Requirement Analysis", "Stakeholder Communication", "Storytelling with Data"],
  },
];

export const education = [
  {
    school: "University of Maryland, College Park",
    degree: "Master of Science in Data Science",
    period: "Expected May 2027",
    gpa: "4.0",
    details: ["BigThinkAI", "Big Data Systems", "Algorithms for Data Science", "Data Representation & Modelling"],
  },
  {
    school: "Amrita Vishwa Vidyapeetham",
    degree: "B.Tech in Computer Science",
    period: "2021-2025",
    gpa: "8.2",
    details: [
      "Data Structures & Algorithms",
      "Machine Learning",
      "Deep Learning",
      "Business Analytics",
      "Time Series Forecasting",
      "Data Science",
    ],
  },
];

export const certifications = [
  "Fine-Tuning Language Models - Hugging Face",
  "Machine Learning, Data Science and Generative AI with Python - Udemy",
  "Complete Data Structures and Algorithms Course in Python - Udemy",
];
