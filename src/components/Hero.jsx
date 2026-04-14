import { motion } from 'framer-motion';

const Hero = ({ data }) => {
    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: '0'
        }}>
            <div className="about-grid" style={{ width: '100%' }}>
                <div>
                    <p style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: '16px', marginBottom: '20px' }}>
                        Hi, my name is
                    </p>

                    <h1 style={{ fontSize: 'clamp(40px, 8vw, 80px)', fontWeight: 'bold', color: '#e6f1ff', marginBottom: '10px' }}>
                        {data.name}.
                    </h1>

                    <h2 style={{ fontSize: 'clamp(30px, 7vw, 70px)', fontWeight: 'bold', color: 'var(--text-secondary)', marginBottom: '30px' }}>
                        I build things with data.
                    </h2>

                    <p style={{ maxWidth: '540px', fontSize: '18px', color: 'var(--text-secondary)', marginBottom: '50px' }}>
                        {data.role} specializing in designing, developing, and optimizing scalable data pipelines and cloud architectures. Currently, I'm focused on engineering end-to-end data workflows at <span style={{ color: 'var(--accent)' }}>CVS Pharmacy</span>.
                    </p>

                    <div>
                        <a href="#experience" className="btn-primary">
                            Check out my work!
                        </a>
                    </div>
                </div>

                {/* Profile Image container (Original colors) */}
                <div style={{ position: 'relative', maxWidth: '350px', width: '100%', margin: '0 auto' }}>
                    <div style={{
                        position: 'relative',
                        borderRadius: '4px',
                        zIndex: 1,
                        transition: 'var(--transition)',
                        cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translate(-4px, -4px)';
                        e.currentTarget.nextSibling.style.transform = 'translate(8px, 8px)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translate(0px, 0px)';
                        e.currentTarget.nextSibling.style.transform = 'translate(15px, 15px)';
                    }}
                    >
                        <img 
                            src="/profile.jpg" 
                            alt="Sanjana Reddy Profile" 
                            style={{
                                width: '100%',
                                height: '100%',
                                aspectRatio: '1 / 1',
                                objectFit: 'cover',
                                borderRadius: '4px',
                                transition: 'var(--transition)',
                                display: 'block'
                            }}
                        />
                    </div>
                    {/* Interactive Frame behind the image */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        border: '2px solid var(--accent)',
                        borderRadius: '4px',
                        transform: 'translate(15px, 15px)',
                        zIndex: 0,
                        transition: 'var(--transition)'
                    }}></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
