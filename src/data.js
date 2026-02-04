export const resumeData = {
  personal: {
    name: "Sanjana Reddy",
    role: "Data Engineer",
    email: "ch.sanjanareddy7@gmail.com",
    phone: "+1(872) 221-8379",
    linkedin: "www.linkedin.com/in/sanjana-reddy-dataengineer",
    summary: "Microsoft Azure Associate certified Data Engineer with 4 years of experience and a Master's in Computer Science. Specialized in building scalable ETL pipelines, data warehousing, and cloud-based analytics solutions for enterprise clients like MetLife, Deloitte, and Novartis.",
    location: "United States"
  },
  experience: [
    {
      company: "MetLife",
      role: "Data Engineer",
      period: "Jan 2025 - Present",
      description: "Insurance Data Modernization & Analytics Platform",
      highlights: [
        "Designed and developed end-to-end ETL pipelines using Azure Data Factory to extract insurance policy data from multiple source systems, including SQL Server, legacy mainframe systems, and third-party REST APIs, enabling centralized data analysis.",
        "Built complex data transformation logic using PySpark in Azure Databricks to clean, validate, and enrich data by implementing strict business rules and joining multiple sources, resulting in comprehensive datasets.",
        "Created and optimized star-schema dimensional data models in Azure Synapse Analytics, featuring fact tables for policy transactions and dimensions for products/customers, which significantly improved query performance for Power BI.",
        "Implemented a robust data quality framework with automated validation rules (row counts, null checks, data types) to ensure accuracy and consistency before production loading.",
        "Collaborated with business analysts and domain experts to translate requirements into technical solutions, while proactively monitoring pipelines via Azure Monitor to resolve bottlenecks and ensure reliability."
      ]
    },
    {
      company: "Deloitte",
      role: "Data Engineer",
      period: "Dec 2023 - Nov 2024",
      description: "Cloud Data Warehouse & Analytics Solution (AWS)",
      highlights: [
        "Developed scalable ETL workflows using AWS Glue to ingest financial transaction data from Amazon RDS, S3 data lakes, and on-premise Oracle databases into Amazon Redshift.",
        "Automated incremental data processing and partitioning strategies, reducing load times and utilizing Lambda/CloudWatch for event-driven monitoring and error logging.",
        "Designed optimized Redshift schemas with distribution and sort keys tailored to specific query patterns, enhancing performance for analytical dashboards.",
        "Created Python scripts with Boto3 for automated file validation and data archival, reducing manual intervention and improving operational efficiency.",
        "Documented comprehensive technical specifications (lineage, logic, dependencies) and provided ongoing support to BI teams for troubleshooting and optimization."
      ]
    },
    {
      company: "Novartis",
      role: "Data Engineer",
      period: "June 2020 - Aug 2022",
      description: "Customer Analytics & Real-Time Data Streaming Platform",
      highlights: [
        "Developed batch pipelines using Azure Data Factory to integrate customer and sales data from Salesforce, e-commerce sites, and marketing APIs into Azure SQL Database.",
        "Performed extensive T-SQL and Python-based data cleansing to remove duplicates, handle missing values, and standardize formats for high-quality downstream reporting.",
        "Created efficient database views and stored procedures to calculate key metrics (CLV, purchase frequency) for executive dashboards.",
        "Orchestrated complex workflows with ADF triggers and dependency management, ensuring reliable execution and implementing retry logic for fault tolerance.",
        "Participated in data modeling sessions to design normalized and denormalized schemas that supported both transactional processing and analytical reporting."
      ]
    }
  ],
  projects: [
    {
      title: "Telecom Customer Churn Prediction",
      tech: ["Python", "Scikit-learn", "XGBoost", "Pandas", "Matplotlib", "Seaborn", "NumPy"],
      description: "An end-to-end machine learning pipeline that predicts customer churn with 87% accuracy, helping telecom companies identify at-risk customers and implement targeted retention strategies.",
      github: "https://github.com/sanjanareddy17/telecom-churn-prediction",
      details: [
        "Dataset & Problem: Analyzed a dataset of 8,000+ customer records with 20+ features including demographics, account information, and service usage patterns to predict customer churn behavior.",
        "Data Preprocessing: Handled missing values using median/mode imputation, encoded categorical variables with one-hot encoding, and applied StandardScaler for feature normalization to ensure optimal model performance.",
        "Exploratory Data Analysis: Conducted comprehensive EDA using Pandas and Seaborn to identify key churn drivers such as contract type, tenure, monthly charges, and customer service interactions, revealing that month-to-month contracts had 3x higher churn rates.",
        "Feature Engineering: Created derived features including customer lifetime value (CLV), average monthly spend ratio, and service usage intensity scores to capture complex customer behavior patterns.",
        "Model Development: Implemented and compared three algorithms - Logistic Regression (baseline: 76% accuracy), Random Forest (83% accuracy), and XGBoost (87% accuracy with AUC-ROC of 0.91).",
        "Model Optimization: Performed hyperparameter tuning using GridSearchCV with 5-fold cross-validation, optimizing learning rate, max depth, and min_child_weight for XGBoost to prevent overfitting.",
        "Evaluation & Insights: Achieved precision of 0.84 and recall of 0.89, with confusion matrix analysis showing the model correctly identified 89% of churners. Feature importance analysis revealed contract type, tenure, and monthly charges as top predictors.",
        "Business Impact: Developed actionable retention strategies based on model predictions, including targeted offers for high-risk customers and contract incentives, potentially reducing churn by 25-30%."
      ]
    }
  ],
  skills: {
    "Cloud Platforms": ["Azure (Data Factory, Synapse, Databricks, Blob Storage)", "AWS (S3, Redshift, Glue, Lambda, EMR)", "GCP (BigQuery, Dataflow)"],
    "Big Data": ["Apache Spark", "PySpark", "Hadoop", "Kafka", "Hive", "Airflow"],
    "Languages": ["Python", "SQL", "Scala", "Java", "Shell Scripting"],
    "Databases": ["SQL Server", "PostgreSQL", "Snowflake", "MongoDB", "Cosmos DB", "Oracle"],
    "DevOps & Tools": ["Git", "Docker", "Kubernetes", "CI/CD", "Terraform", "Jenkins", "Jira"]
  },
  education: [
    {
      degree: "Master of Science in Computer Science",
      year: "2023"
    },
    {
      degree: "Bachelor of Technology in Computer Science",
      year: "2020"
    }
  ]
};
