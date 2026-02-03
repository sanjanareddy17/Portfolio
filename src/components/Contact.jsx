import { motion } from 'framer-motion';

const Contact = ({ data }) => {
    return (
        <section id="contact" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto', marginBottom: '100px' }}>
            <div>
                <p style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: '16px', marginBottom: '20px' }}>What's Next?</p>
                <h2 style={{ fontSize: 'clamp(40px, 5vw, 60px)', marginBottom: '10px', color: 'var(--text-primary)' }}>Get In Touch</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '18px', marginBottom: '50px' }}>
                    I am currently open to new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
                </p>
                <a href={`mailto:${data.email}`} className="btn-primary" style={{ fontSize: '16px', padding: '1.25rem 2rem' }}>
                    Say Hello
                </a>

                <div style={{ marginTop: '50px', color: 'var(--text-secondary)' }}>
                    <p style={{ marginBottom: '10px' }}>{data.email}</p>
                    <p>{data.phone}</p>
                </div>

                <div style={{ marginTop: '100px', display: 'flex', justifyContent: 'center', gap: '20px', fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)' }}>
                    <p>Designed & Built by {data.name}</p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
