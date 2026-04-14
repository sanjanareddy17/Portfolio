import { motion } from 'framer-motion';

const Education = ({ education, certifications }) => {
    return (
        <section id="education" style={{ maxWidth: '900px' }}>
            <div>
                <h2 className="section-title">Education & Certifications</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {/* Education */}
                    <div>
                        <h3 style={{ fontSize: '20px', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Education</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    style={{
                                        backgroundColor: 'var(--bg-secondary)',
                                        padding: '1.5rem',
                                        borderRadius: '4px',
                                        borderLeft: '3px solid var(--accent)'
                                    }}
                                >
                                    <h4 style={{ fontSize: '18px', marginBottom: '8px', color: 'var(--text-primary)' }}>{edu.degree}</h4>
                                    <p style={{ color: 'var(--text-secondary)', marginBottom: '4px' }}>{edu.school}</p>
                                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--accent)', margin: 0 }}>{edu.year}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications */}
                    <div>
                        <h3 style={{ fontSize: '20px', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Certifications</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {certifications.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        padding: '1rem',
                                        backgroundColor: 'var(--bg-secondary)',
                                        borderRadius: '4px',
                                    }}
                                >
                                    <span style={{ color: 'var(--accent)', marginRight: '15px', fontSize: '18px' }}>✧</span>
                                    <span style={{ color: 'var(--text-primary)' }}>{cert}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
