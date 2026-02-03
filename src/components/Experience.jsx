import { useState } from 'react';
import { motion } from 'framer-motion';

const Experience = ({ data }) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section id="experience" style={{ maxWidth: '700px' }}>
            <div>
                <h2 className="section-title">Where I've Worked</h2>

                <div style={{ display: 'flex', flexDirection: 'row', gap: '2rem' }}>
                    {/* Tabs */}
                    <div style={{ position: 'relative' }}>
                        <div
                            style={{
                                position: 'absolute',
                                top: activeTab * 42,
                                left: 0,
                                width: '2px',
                                height: '42px',
                                backgroundColor: 'var(--accent)',
                                transition: 'var(--transition)'
                            }}
                        />
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            {data.map((job, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveTab(index)}
                                    style={{
                                        padding: '0 20px',
                                        height: '42px',
                                        textAlign: 'left',
                                        backgroundColor: activeTab === index ? 'rgba(17, 34, 64, 0.5)' : 'transparent',
                                        color: activeTab === index ? 'var(--accent)' : 'var(--text-secondary)',
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '13px',
                                        width: '140px',
                                        transition: 'var(--transition)',
                                        border: 'none',
                                        borderLeft: `2px solid ${activeTab === index ? 'transparent' : 'var(--bg-tertiary)'}`
                                    }}
                                >
                                    {job.company}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Content */}
                    <div style={{ flex: 1 }}>
                        <h3 style={{ fontSize: '22px', fontWeight: 500, marginBottom: '5px' }}>
                            {data[activeTab].role} <span className="highlight">@ {data[activeTab].company}</span>
                        </h3>
                        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '25px' }}>
                            {data[activeTab].period}
                        </p>
                        <ul style={{ color: 'var(--text-secondary)' }}>
                            {data[activeTab].highlights.map((point, index) => (
                                <li key={index} style={{ marginBottom: '10px', position: 'relative', paddingLeft: '20px', fontSize: '15px' }}>
                                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>▹</span>
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
