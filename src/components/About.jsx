import { motion } from 'framer-motion';

const About = ({ data }) => {
    return (
        <section id="about">
            <div>
                <h2 className="section-title">About Me</h2>

                <div style={{ maxWidth: '800px' }}>
                    <div>
                        <p style={{ marginBottom: '15px', color: 'var(--text-secondary)' }}>
                            Hello! My name is Sanjana and I enjoy creating things that live on the cloud. My interest in data engineering started back in 2020 when I decided to try analyzing large datasets — turns out creating efficient pipelines taught me a lot about <span className="highlight">scalable architecture</span>.
                        </p>
                        <p style={{ marginBottom: '15px', color: 'var(--text-secondary)' }}>
                            Fast-forward to today, and I’ve had the privilege of working at an <span className="highlight">advertising agency</span>, a <span className="highlight">start-up</span>, a <span className="highlight">huge corporation</span>, and a <span className="highlight">student-led design studio</span>. My main focus these days is building accessible, inclusive products and digital experiences at <span className="highlight">MetLife</span>.
                        </p>
                        <p style={{ marginBottom: '15px', color: 'var(--text-secondary)' }}>
                            I am also a Microsoft Azure Associate certified professional with a Master's degree in Computer Science.
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
