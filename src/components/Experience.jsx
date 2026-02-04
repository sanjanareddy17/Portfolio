import { motion } from 'framer-motion';

const Experience = ({ data }) => {
    return (
        <section id="experience" style={{ maxWidth: '900px' }}>
            <div>
                <h2 className="section-title">Client Projects & Experience</h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                    {data.map((job, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            style={{
                                backgroundColor: 'var(--bg-secondary)',
                                padding: '2rem',
                                borderRadius: '4px',
                                borderLeft: '3px solid var(--accent)',
                                transition: 'var(--transition)'
                            }}
                        >
                            {/* Header */}
                            <div style={{ marginBottom: '1.5rem' }}>
                                <h3 style={{ fontSize: '24px', fontWeight: 500, marginBottom: '8px' }}>
                                    {job.role} <span className="highlight">@ {job.company}</span>
                                </h3>
                                <div style={{
                                    display: 'flex',
                                    gap: '1rem',
                                    alignItems: 'center',
                                    flexWrap: 'wrap'
                                }}>
                                    <p style={{
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '13px',
                                        color: 'var(--accent)',
                                        margin: 0
                                    }}>
                                        {job.period}
                                    </p>
                                    <span style={{ color: 'var(--text-secondary)' }}>•</span>
                                    <p style={{
                                        fontSize: '14px',
                                        color: 'var(--text-secondary)',
                                        fontStyle: 'italic',
                                        margin: 0
                                    }}>
                                        {job.description}
                                    </p>
                                </div>
                            </div>

                            {/* Highlights */}
                            <ul style={{ color: 'var(--text-secondary)', margin: 0 }}>
                                {job.highlights.map((point, pointIndex) => (
                                    <li
                                        key={pointIndex}
                                        style={{
                                            marginBottom: '12px',
                                            position: 'relative',
                                            paddingLeft: '20px',
                                            fontSize: '15px',
                                            lineHeight: '1.6'
                                        }}
                                    >
                                        <span style={{
                                            position: 'absolute',
                                            left: 0,
                                            color: 'var(--accent)',
                                            fontWeight: 'bold'
                                        }}>▹</span>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
