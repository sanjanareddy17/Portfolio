import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Folder, ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';

const Projects = ({ data }) => {
    const [expandedProject, setExpandedProject] = useState(0);

    return (
        <section id="projects">
            <div>
                <h2 className="section-title">Personal Projects</h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {data.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            style={{
                                backgroundColor: 'var(--bg-secondary)',
                                padding: '2.5rem',
                                borderRadius: '4px',
                                transition: 'var(--transition)',
                                border: '1px solid var(--bg-tertiary)'
                            }}
                        >
                            {/* Header */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', alignItems: 'flex-start' }}>
                                <div style={{ flex: 1 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                                        <Folder size={40} color="var(--accent)" />
                                        <h3 style={{ fontSize: '28px', margin: 0, color: 'var(--text-primary)' }}>
                                            {project.title}
                                        </h3>
                                    </div>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: '1.6', margin: 0 }}>
                                        {project.description}
                                    </p>
                                </div>
                                <div style={{ display: 'flex', gap: '15px', marginLeft: '20px' }}>
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            style={{ color: 'var(--text-secondary)', transition: 'var(--transition)' }}
                                            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                                            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                                        >
                                            <Github size={24} />
                                        </a>
                                    )}
                                    <a
                                        href="#"
                                        style={{ color: 'var(--text-secondary)', transition: 'var(--transition)' }}
                                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
                                        onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                                    >
                                        <ExternalLink size={24} />
                                    </a>
                                </div>
                            </div>

                            {/* Tech Stack */}
                            <div style={{ marginBottom: '1.5rem' }}>
                                <ul style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '12px',
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '13px',
                                    color: 'var(--accent)',
                                    padding: 0,
                                    listStyle: 'none'
                                }}>
                                    {project.tech.map((t, i) => (
                                        <li
                                            key={i}
                                            style={{
                                                backgroundColor: 'rgba(100, 255, 218, 0.1)',
                                                padding: '5px 12px',
                                                borderRadius: '3px'
                                            }}
                                        >
                                            {t}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Expandable Details */}
                            {project.details && (
                                <>
                                    <button
                                        onClick={() => setExpandedProject(expandedProject === index ? -1 : index)}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                            background: 'none',
                                            border: 'none',
                                            color: 'var(--accent)',
                                            fontFamily: 'var(--font-mono)',
                                            fontSize: '14px',
                                            cursor: 'pointer',
                                            padding: '8px 0',
                                            transition: 'var(--transition)'
                                        }}
                                    >
                                        {expandedProject === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                        {expandedProject === index ? 'Hide Details' : 'View Detailed Methodology & Results'}
                                    </button>

                                    <AnimatePresence>
                                        {expandedProject === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                style={{ overflow: 'hidden' }}
                                            >
                                                <div style={{
                                                    marginTop: '1.5rem',
                                                    paddingTop: '1.5rem',
                                                    borderTop: '1px solid var(--bg-tertiary)'
                                                }}>
                                                    <ul style={{ color: 'var(--text-secondary)', margin: 0 }}>
                                                        {project.details.map((detail, detailIndex) => (
                                                            <li
                                                                key={detailIndex}
                                                                style={{
                                                                    marginBottom: '15px',
                                                                    position: 'relative',
                                                                    paddingLeft: '20px',
                                                                    fontSize: '15px',
                                                                    lineHeight: '1.7'
                                                                }}
                                                            >
                                                                <span style={{
                                                                    position: 'absolute',
                                                                    left: 0,
                                                                    color: 'var(--accent)',
                                                                    fontWeight: 'bold'
                                                                }}>▹</span>
                                                                <strong style={{ color: 'var(--text-primary)' }}>
                                                                    {detail.split(':')[0]}:
                                                                </strong>
                                                                {detail.substring(detail.indexOf(':') + 1)}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
