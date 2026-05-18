const dashboardImage =
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80";
const sqlImage =
  "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=900&q=80";
const machineLearningImage =
  "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=900&q=80";
const analyticsImage =
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80";
const healthcareImage =
  "https://images.unsplash.com/photo-1581093458791-9d15482442f6?auto=format&fit=crop&w=900&q=80";

export const Bio = {
  name: "Kemboi K. David",
  roles: [
    "Data Analyst",
    "Business Analyst",
    "Aspiring Data Engineer",
  ],
  headline: "",
  specialties: ["SQL", "BigQuery", "Power BI", "Machine Learning", "Data Visualization"],
  description:
    "I build analytics dashboards, SQL reporting workflows, and business intelligence solutions that turn operational data into decisions. My work spans sportsbook KPIs, healthcare analytics, cloud data workflows, and machine learning projects.",
  github: "https://github.com/davido200",
  resume:
    "https://drive.google.com/file/d/1xzuuNBtKR5q8FbBRBIrIQea5Yis_chUC/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/davidkemboi",
  twitter: "https://twitter.com/@daviskyms2",
  email: "Dkemboi888@gmail.com",
  phone: "+254 724 006 182",
};

export const skills = [
  {
    title: "Data Analysis & Business Intelligence",
    skills: [
      { name: "SQL" },
      { name: "Excel" },
      { name: "Power BI" },
      { name: "Looker Studio" },
      { name: "Data Visualization" },
      { name: "Dashboard Development" },
      { name: "Reporting & KPI Analysis" },
      { name: "Business Performance Analysis" },
    ],
  },
  {
    title: "Data Analytics Techniques",
    skills: [
      { name: "Cohort Analysis" },
      { name: "Retention & Churn Analysis" },
      { name: "Funnel Analysis" },
      { name: "Customer Segmentation (RFM)" },
      { name: "Customer Lifetime Value (CLV)" },
      { name: "A/B Testing" },
      { name: "Hypothesis Testing" },
      { name: "Exploratory Data Analysis (EDA)" },
    ],
  },
  {
    title: "Programming & Analytics Tools",
    skills: [
      { name: "Python" },
      { name: "Pandas" },
      { name: "NumPy" },
      { name: "Scikit-learn" },
      { name: "Jupyter Notebook" },
    ],
  },
  {
    title: "Machine Learning",
    skills: [
      { name: "Linear Regression" },
      { name: "Classification" },
      { name: "Feature Engineering" },
      { name: "Predictive Analytics" },
      { name: "Model Evaluation" },
    ],
  },
  {
    title: "Frontend & Development",
    skills: [
      { name: "React" },
      { name: "JavaScript" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    title: "Professional Skills",
    skills: [
      { name: "Problem Solving" },
      { name: "Analytical Thinking" },
      { name: "Data Storytelling" },
      { name: "Stakeholder Communication" },
      { name: "Presentation Skills" },
      { name: "Attention to Detail" },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    role: "Data Analyst",
    company: "Sportserve",
    location: "Nairobi County",
    date: "Jul 2025 - Present",
    desc: [
      "Analyze large-scale games and player data using advanced SQL queries and BI tools (e.g., Looker Studio) to build dashboards tracking key KPIs such as Turnover, Gross Gaming Revenue (GGR), Net Revenue, Bonuses, and Player Activity.",
      "Translate complex analytical findings into clear, actionable insights for non-technical stakeholders through reports, dashboards, and presentations, enabling data-driven decision-making in sportsbook operations.",
      "Extract data from proprietary back-office and sportsbook platforms, applying data cleansing and transformation techniques including deduplication, null handling, schema normalization, and standardization.",
      "Conduct regular data quality audits on reporting outputs, identifying and resolving discrepancies in betting data (e.g., stakes, wins, losses, bonuses) to maintain high data accuracy and regulatory compliance.",
      "Work closely with BI, QA, Marketing, and Operations teams to validate data consistency between front-end sportsbook systems and back-office reports, ensuring reliable KPI reporting for internal and external stakeholders.",
      "Document business processes, data definitions, KPIs, and reporting logic to improve transparency, consistency, and knowledge sharing across analytics and operations teams.",
      "Deliver ad-hoc analyses related to sportsbook performance, regulatory reporting, and operational investigations, providing timely insights under tight deadlines.",
    ],
  },
  {
    id: 1,
    role: "Data Analyst",
    company: "AMREF Kenya",
    location: "Turkana County",
    date: "Nov 2024 - Mar 2025",
    desc: [
      "Delivered health program analytics that improved data-driven decision-making across the HSS directorate.",
      "Implemented data quality checks and validation workflows that reduced reporting errors by 30%.",
      "Built Power BI dashboards and ETL pipelines that reduced data processing time by 50%.",
      "Trained staff on reporting tools and data interpretation, improving team data proficiency by 35%.",
    ],
  },
  {
    id: 2,
    role: "Data Analyst | Consultant",
    company: "Consultant",
    location: "Nakuru",
    date: "Sep 2023 - Nov 2024",
    desc: [
      "Extracted, cleaned, and transformed client datasets, improving data consistency by 65%.",
      "Developed Tableau and Power BI dashboards for operational reporting and executive decision support.",
      "Built automation tools that reduced repetitive reporting tasks and improved analytics turnaround time.",
      "Used SQL, Pandas, and NumPy to prepare analysis-ready datasets and deliver actionable reports.",
    ],
  },
  {
    id: 3,
    role: "Data Analyst Attachment",
    company: "Murang'a County Health",
    location: "Murang'a County",
    date: "May 2019 - Apr 2020",
    desc: [
      "Maintained 90%+ data accuracy through structured extraction, cleaning, and validation processes.",
      "Created BI documentation, training materials, and reporting templates for hospital metrics.",
      "Analyzed healthcare datasets to support hospital management and operational planning.",
    ],
  },
];

export const education = [
  {
    id: 0,
    school: "Turing College - Lithuania",
    date: "2024",
    grade: "Distinction",
    desc: "Certificate in Data Analytics",
    degree: "Certificate in Data Analytics",
  },
  {
    id: 1,
    school: "Mount Kenya University - Thika, Kenya",
    date: "2020 - 2024",
    grade: "Second Class Upper Division",
    desc: "Bachelor of Business Information Technology",
    degree: "Bachelor of Business Information Technology",
  },
  {
    id: 2,
    school: "Mount Kenya University - Thika, Kenya",
    date: "2018 - 2019",
    grade: "Credit",
    desc: "Diploma in Business Information Technology",
    degree: "Diploma in Business Information Technology",
  },
];

export const projectFilters = [
  "All",
  "SQL",
  "Dashboards",
  "Machine Learning",
  "Data Engineering",
  "React",
];

export const projects = [
  {
    id: 1,
    title: "Subscribers Retention Cohort Analysis",
    date: "2025",
    description:
      "Analyzes subscriber retention by cohort to identify churn points and engagement trends.",
    image: analyticsImage,
    tags: ["SQL", "Google Sheets", "Cohort Analysis", "Retention"],
    metrics: ["Weekly cohorts", "Retention trend analysis", "Churn visibility"],
    category: "SQL",
    featured: true,
    github: "https://github.com/davido200/Cohort-Analysis-for-Subscribers",
    webapp: "https://github.com/davido200/Cohort-Analysis-for-Subscribers",
    challenge:
      "Retention behavior was difficult to compare across signup periods and customer segments.",
    solution:
      "Built cohort tables to measure active users over time and highlight where engagement dropped.",
    result:
      "Made retention patterns easier to interpret for lifecycle, product, and marketing decisions.",
  },
  {
    id: 2,
    title: "House Price Prediction using Machine Learning",
    date: "2025",
    description:
      "Predicts Boston house prices using regression modeling, feature preparation, and model evaluation.",
    image: machineLearningImage,
    tags: ["Python", "Pandas", "Scikit-learn", "Regression"],
    metrics: ["Regression model", "Feature engineering", "RMSE evaluation"],
    category: "Machine Learning",
    featured: true,
    github: "https://github.com/davido200/Boston-House-Price-Prediction-using-Linear-Regression",
    webapp: "https://github.com/davido200/Boston-House-Price-Prediction-using-Linear-Regression",
    challenge:
      "The goal was to estimate housing prices from multiple structured variables rather than relying on manual judgement.",
    solution:
      "Prepared the dataset, trained a linear regression model, and evaluated prediction error with standard ML metrics.",
    result:
      "Produced a practical pricing model workflow that demonstrates supervised learning fundamentals.",
  },
  {
    id: 3,
    title: "BigQuery Sales Performance Analysis",
    date: "2025",
    description:
      "Uses advanced SQL in BigQuery to analyze Adventure Works sales, customers, and product performance.",
    image: sqlImage,
    tags: ["BigQuery", "SQL", "CTEs", "Window Functions"],
    metrics: ["Advanced SQL", "Sales trends", "Customer analysis"],
    category: "Data Engineering",
    featured: true,
    github: "https://github.com/davido200/Adventure_Work-Analysis---Advance-Database-Big-Query-",
    webapp: "https://github.com/davido200/Adventure_Work-Analysis---Advance-Database-Big-Query-",
    challenge:
      "Sales data needed structured querying to uncover product, customer, and geographic performance trends.",
    solution:
      "Used CTEs, joins, aggregations, and window functions in BigQuery to answer business questions.",
    result:
      "Delivered reusable SQL analysis outputs for sales performance and customer behavior reporting.",
  },
  {
    id: 4,
    title: "Customer Segmentation & RFM Dashboard",
    date: "2025",
    description:
      "Segments customers by recency, frequency, and monetary value to support retention and revenue strategy.",
    image: dashboardImage,
    tags: ["Power BI", "RFM", "Customer Analytics", "Dashboards"],
    metrics: ["Customer segments", "Revenue groups", "Retention insights"],
    category: "Dashboards",
    github: "https://github.com/davido200/Customer-Segmentation-RFM-Analysis",
    webapp: "https://github.com/davido200/Customer-Segmentation-RFM-Analysis",
    challenge:
      "Customer value and engagement levels were hidden in transaction-level data.",
    solution:
      "Calculated RFM scores and visualized segments in Power BI for easier business interpretation.",
    result:
      "Highlighted priority customer groups for targeted retention and revenue actions.",
  },
  {
    id: 5,
    title: "A/B Testing for Marketing Campaigns",
    date: "2025",
    description:
      "Evaluates fast-food promotion campaigns using hypothesis testing and sales performance analysis.",
    image: analyticsImage,
    tags: ["Python", "Statistics", "A/B Testing", "ANOVA"],
    metrics: ["Campaign comparison", "ANOVA testing", "Recommendation output"],
    category: "Machine Learning",
    github: "https://github.com/davido200/A-B-Testing",
    webapp: "https://github.com/davido200/A-B-Testing",
    challenge:
      "Marketing teams needed evidence on which promotion produced stronger sales results.",
    solution:
      "Cleaned campaign data, visualized sales trends, and ran statistical tests to compare promotions.",
    result:
      "Identified stronger campaign options and converted analysis into marketing recommendations.",
  },
  {
    id: 6,
    title: "Health Centre Performance Analysis",
    date: "2024",
    description:
      "Analyzes healthcare center performance, patient interactions, and financial indicators for operations teams.",
    image: healthcareImage,
    tags: ["Python", "Pandas", "NumPy", "Healthcare Analytics"],
    metrics: ["Patient trends", "Financial analysis", "Operational insights"],
    category: "SQL",
    github: "https://github.com/davido200/Penda-Health-Centre-Analysis",
    webapp: "https://github.com/davido200/Penda-Health-Centre-Analysis",
    challenge:
      "Healthcare data needed cleaning and analysis before it could support operational decisions.",
    solution:
      "Prepared the data in Python and analyzed patient, center, and financial performance indicators.",
    result:
      "Generated clearer views of center performance and operational improvement opportunities.",
  },
  {
    id: 7,
    title: "Call Centre & HR Dashboard",
    date: "2024",
    description:
      "Visualizes call center service performance and HR metrics for operational monitoring.",
    image:
      "https://user-images.githubusercontent.com/56026296/226416896-b1f2c175-52f9-4623-a81d-ff6df9b8f4da.png",
    tags: ["Power BI", "Excel", "Dashboard", "Operations"],
    metrics: ["Call performance", "HR tracking", "Service insights"],
    category: "Dashboards",
    github: "https://github.com/davido200/Call-Center-Dashboard-Excel",
    webapp: "https://github.com/davido200/Call-Center-Dashboard-Excel",
    challenge:
      "Service and HR metrics were difficult to compare from raw spreadsheets.",
    solution:
      "Built dashboard views for call volume, service status, and workforce indicators.",
    result:
      "Improved visibility into operational workload and support team performance.",
  },
  {
    id: 8,
    title: "Restaurant Customer Behavior Analysis",
    date: "2024",
    description:
      "Uses SQL Server to analyze customer purchases, menu preferences, and spending behavior.",
    image: sqlImage,
    tags: ["SQL Server", "Customer Analytics", "Queries"],
    metrics: ["Purchase patterns", "Menu insights", "Customer spend"],
    category: "SQL",
    github: "https://github.com/davido200/CUSTOMER-BEHAVIOUR-ANALYSIS-SQL-Server-",
    webapp: "https://github.com/davido200/CUSTOMER-BEHAVIOUR-ANALYSIS-SQL-Server-",
    challenge:
      "Restaurant transaction data needed SQL analysis to explain buying behavior.",
    solution:
      "Wrote SQL queries to answer questions on orders, spending, and menu item preference.",
    result:
      "Summarized customer behavior insights that can guide menu and loyalty decisions.",
  },
  {
    id: 9,
    title: "React Portfolio Website",
    date: "2026",
    description:
      "A responsive React portfolio presenting analytics experience, projects, resume, and contact workflows.",
    image: analyticsImage,
    tags: ["React", "JavaScript", "Styled Components", "UI"],
    metrics: ["Responsive layout", "Project filtering", "Recruiter-focused UI"],
    category: "React",
    github: "https://github.com/davido200/David_Portfolio",
    webapp: "https://davido200.github.io/David_Portfolio/",
    challenge:
      "The portfolio needed a clearer structure for recruiters reviewing analytics and BI work.",
    solution:
      "Organized project content, strengthened the hero message, and improved component-level presentation.",
    result:
      "Created a more focused portfolio experience for data analyst and BI analyst opportunities.",
  },
];

export const githubStats = [
  { label: "Repositories", value: "20+" },
  { label: "Core Stack", value: "SQL, Python, BI" },
  { label: "Project Focus", value: "Analytics + ML" },
];

export const TimeLineData = [
  { year: 2019, text: "Started healthcare data analytics" },
  { year: 2021, text: "Expanded into consulting and BI reporting" },
  { year: 2024, text: "Completed data analytics certification" },
  { year: 2025, text: "Focused on sportsbook analytics and KPI reporting" },
];
