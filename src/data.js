export const resumeData = {
  personal: {
    name: "Sanjana Reddy",
    role: "Data Engineer",
    email: "sanjanachreddy99@gmail.com",
    phone: "(708) 303-8486",
    linkedin: "www.linkedin.com/in/sreddy9917077",
    summary: "Data Engineer with 3+ years of experience designing, developing, and optimizing scalable solutions. Microsoft Azure Associate Developer certified professional with hands-on expertise in designing and implementing data pipelines, ETL processes, and cloud-based data solutions. Experienced in working with enterprise clients including PWC, Rocket Mortgage to deliver data warehousing and analytics solutions. Skilled in AWS and Azure cloud platforms, big data technologies, SQL, Python, and data modeling. Strong problem-solving abilities with focus on delivering quality data solutions that support business decision-making.",
    location: "United States"
  },
  experience: [
    {
      company: "CVS Pharmacy",
      role: "Cloud Data Engineer",
      period: "September 2024 - Present",
      description: "USA",
      highlights: [
        "Engineered end-to-end ELT pipelines using PySpark, Databricks, and Airflow to orchestrate daily ingestion and transformation of pharmacy claims, prescription, and inventory datasets into the AWS S3 data lake, while leading the cloud migration of legacy Oracle ETL workflows to AWS Glue and Redshift deploying Lambda and Step Functions to automate event-driven reconciliation between claims adjudication systems and the enterprise data warehouse.",
        "Designed scalable Snowflake data models using star schema and dimensional patterns for retail and pharmacy datasets applying clustering keys, materialized views, and warehouse right-sizing to surface pharmacy KPIs including fill rates, adherence trends, and formulary utilization empowering BI teams with trusted, self-serve data access while partnering with data science to productionize PySpark feature engineering pipelines on Databricks for patient risk and adherence prediction models.",
        "Implemented real-time pharmacy transaction streaming using Apache Kafka to feed fraud detection and inventory alerting systems and developed a reusable data quality framework using Great Expectations and PySpark to enforce validation rules, normalize NDC codes, member IDs, and drug classification fields across disparate pharmacy source systems.",
        "Built a centralized observability layer for Airflow pipelines using AWS CloudWatch and PagerDuty, engineered CDC-based incremental load strategies in AWS DMS to improve data freshness, and implemented column-level data lineage and metadata management using Apache Atlas across HIPAA-regulated datasets to support audit readiness and governance compliance."
      ]
    },
    {
      company: "Rocket Mortgage",
      role: "Site Reliability Engineer",
      period: "January 2024 - August 2024",
      description: "Detroit, MI",
      highlights: [
        "Designed and implemented scalable, secure, and cost-effective infrastructure on AWS, supporting data architecture strategies for high-volume ingestion, processing, and storage.",
        "Developed and optimized ETL pipelines, ensuring seamless data integration using AWS services such as Lambda, and S3 while maintaining compliance with data governance and security policies.",
        "Created Python scripts using Boto3 SDK and PySpark to automate data processing tasks including file validation, data format conversions, error handling, and data archival to S3, reducing manual intervention and improving operational efficiency of the data platform.",
        "Designed optimized database schemas in Amazon Redshift by defining distribution keys, sort keys, and compression encodings based on query patterns and data characteristics, resulting in improved query performance for analytical workloads and reporting dashboards."
      ]
    },
    {
      company: "PWC",
      role: "Associate",
      period: "June 2020 - July 2022",
      description: "India",
      highlights: [
        "Collaborated with clients to gather detailed project requirements, conducted thorough analyses to identify key insights, and engaged with agile teams to prioritize feature requests ensuring clear alignment with objectives while contributing to responsive, user-friendly web development efforts.",
        "Leveraged company tools and technologies to assess workflow quality, troubleshoot issues, and automate repetitive tasks, significantly enhancing the accuracy and reliability of project deliverables across teams.",
        "Performed extensive data transformation and cleansing using Python scripts to standardize customer information, remove duplicates, handle missing values, validate data formats, and apply business rules ensuring high-quality data for downstream reporting and analysis.",
        "Created optimized database views, stored procedures, and functions in Azure SQL Database to aggregate and prepare data for Power BI dashboards, implementing logic to calculate key metrics such as customer lifetime value, purchase frequency, and product performance."
      ]
    }
  ],
  projects: [
    {
      title: "Telecommunication Customer Churn Prediction System",
      tech: ["Python", "Pandas", "Scikit-learn", "Logistic Regression", "Decision Trees", "Random Forest", "XGBoost"],
      description: "Machine learning model to predict customer churn in telecommunications industry achieving 87% prediction accuracy.",
      github: "https://github.com/sanjanareddy17",
      details: [
        "Built comprehensive machine learning model to predict customer churn in telecommunications industry using Python, Pandas, and Scikit-learn libraries, analyzing dataset of customer records and achieving 87% prediction accuracy.",
        "Performed extensive data preprocessing and feature engineering including handling missing values through imputation techniques, encoding categorical variables, and scaling numerical features.",
        "Trained and evaluated multiple machine learning classification models including Logistic Regression, Decision Trees, Random Forest, and XGBoost, using cross-validation techniques and comparing models based on accuracy, precision, recall, and F1-score metrics."
      ]
    }
  ],
  skills: {
    "Cloud Platforms": ["Microsoft Azure (Data Factory, Synapse Analytics, Databricks, Data Lake Storage, Blob Storage, HDInsight)", "AWS (S3, Redshift, Glue, EMR, Lambda)", "Google Cloud Platform (BigQuery, Cloud Storage, Dataflow)"],
    "Big Data Technologies": ["Apache Spark", "Hadoop", "Kafka", "Hive", "HBase", "Airflow", "Databricks", "PySpark", "Spark SQL"],
    "Programming Languages": ["Python", "SQL", "Scala", "Java", "Shell Scripting", "PL/SQL"],
    "Databases": ["SQL Server", "PostgreSQL", "MySQL", "Oracle", "MongoDB", "Cassandra", "Snowflake", "Azure SQL Database", "Cosmos DB"],
    "ETL/Data Integration": ["Azure Data Factory", "Talend", "Informatica", "dbt", "Azure Synapse Pipelines"],
    "Data Visualization": ["Power BI", "Tableau", "Looker", "Azure Analysis Services"],
    "Machine Learning & AI": ["Scikit-learn", "TensorFlow", "PyTorch", "Azure Machine Learning", "MLflow", "Predictive Modeling", "Classification", "Regression"],
    "DevOps & Tools": ["Git", "Azure DevOps", "Jenkins", "Docker", "Kubernetes", "CI/CD Pipelines", "Terraform", "Jira", "Agile/Scrum"]
  },
  education: [
    {
      degree: "Master’s in Computer Science",
      school: "Governors State University, USA",
      year: "Aug 2022 - Dec 2023"
    },
    {
      degree: "Bachelor’s in Computer Science",
      school: "JNTUH, India",
      year: "Jun 2016 - Oct 2020"
    }
  ],
  certifications: [
    "Microsoft Azure Associate Developer"
  ]
};
