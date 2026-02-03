import { motion } from 'framer-motion';
import { Folder, ExternalLink, Github } from 'lucide-react';

const Projects = ({ data }) => {
    return (
        <section id="projects">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="section-title">Some Things I've Built</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '15px' }}>
                    {data.map((project, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -7 }}
                            style={{
                                backgroundColor: 'var(--bg-secondary)',
                                padding: '2rem 1.75rem',
                                borderRadius: '4px',
                                transition: 'var(--transition)',
                                height: '100%'
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '35px', alignItems: 'center' }}>
                                <Folder size={40} color="var(--accent)" />
                                <div style={{ display: 'flex', gap: '10px' }}>
                                    <a href="#" style={{ color: 'var(--text-secondary)' }}><Github size={20} /></a>
                                    <a href="#" style={{ color: 'var(--text-secondary)' }}><ExternalLink size={20} /></a>
                                </div>
                            </div>

                            <h3 style={{ fontSize: '22px', marginBottom: '10px' }}>
                                <a href="#" style={{ textDecoration: 'none', color: 'var(--text-primary)' }} className="project-title-link">
                                    {project.title}
                                </a>
                            </h3>

                            <div style={{ color: 'var(--text-secondary)', fontSize: '15px', marginBottom: '20px' }}>
                                <p>{project.description}</p>
                            </div>

                            <ul style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '10px',
                                fontFamily: 'var(--font-mono)',
                                fontSize: '12px',
                                color: 'var(--text-secondary)',
                                marginTop: 'auto'
                            }}>
                                {project.tech.map((t, i) => <li key={i}>{t}</li>)}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;
