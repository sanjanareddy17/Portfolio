import { motion } from 'framer-motion';

const Skills = ({ data }) => {
    return (
        <section id="skills">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
                    <h2 className="section-title">Skills</h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                    {Object.entries(data).map(([category, skills], index) => (
                        <div key={index}>
                            <h3 style={{ fontSize: '18px', color: 'var(--text-primary)', marginBottom: '15px', borderBottom: '1px solid var(--bg-tertiary)', paddingBottom: '10px' }}>{category}</h3>
                            <ul style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', fontSize: '14px' }}>
                                {skills.map((skill, i) => (
                                    <li key={i} style={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
                                        <span style={{ color: 'var(--accent)', marginRight: '10px', fontSize: '12px' }}>▹</span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
