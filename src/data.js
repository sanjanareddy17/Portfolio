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
      tech: ["Python", "Scikit-learn", "XGBoost", "Pandas", "Matplotlib"],
      description: "A machine learning system analyzing 8,000+ customer records to predict churn with 87% accuracy.",
      details: [
        "Performed data preprocessing (imputation, encoding, scaling) and exploratory analysis to identify key churn drivers.",
        "Trained and evaluated Logistic Regression, Random Forest, and XGBoost models using cross-validation.",
        "Visualized results with confusion matrices and ROC curves to provide actionable retention strategies."
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
