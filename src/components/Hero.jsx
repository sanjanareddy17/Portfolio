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
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: '16px', marginBottom: '20px' }}
            >
                Hi, my name is
            </motion.p>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                style={{ fontSize: 'clamp(40px, 8vw, 80px)', fontWeight: 'bold', color: '#e6f1ff', marginBottom: '10px' }}
            >
                {data.name}.
            </motion.h1>

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                style={{ fontSize: 'clamp(30px, 7vw, 70px)', fontWeight: 'bold', color: 'var(--text-secondary)', marginBottom: '30px' }}
            >
                I build things with data.
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                style={{ maxWidth: '540px', fontSize: '18px', color: 'var(--text-secondary)', marginBottom: '50px' }}
            >
                I am a data engineer specializing in building scalable ETL pipelines and cloud-based analytics solutions. Currently, I'm focused on delivering data warehousing solutions for enterprise clients at <span style={{ color: 'var(--accent)' }}>MetLife</span>.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
            >
                <a href="#experience" className="btn-primary">
                    Check out my work!
                </a>
            </motion.div>
        </section>
    );
};

export default Hero;
