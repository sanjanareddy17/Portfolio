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
        </section>
    );
};

export default Hero;
