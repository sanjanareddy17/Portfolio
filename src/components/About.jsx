import { motion } from 'framer-motion';

const About = ({ data }) => {
    return (
        <section id="about">
            <div>
                <h2 className="section-title">About Me</h2>

                <div style={{ maxWidth: '800px' }}>
                    <div>
                        <p style={{ marginBottom: '15px', color: 'var(--text-secondary)' }}>
                            {data.summary}
                        </p>
                        
                        <p style={{ marginBottom: '15px', color: 'var(--text-secondary)' }}>Here are a few technologies I’ve been working with recently:</p>
                        <ul style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                            gap: '10px',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '13px',
                            color: 'var(--text-secondary)'
                        }}>
                            {['Azure Data Factory', 'Apache Spark', 'Python', 'AWS Glue', 'Snowflake', 'Databricks'].map(tech => (
                                <li key={tech} style={{ position: 'relative', paddingLeft: '20px' }}>
                                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>▹</span> {tech}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
