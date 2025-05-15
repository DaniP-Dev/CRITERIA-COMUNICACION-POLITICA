import React from 'react';

const HeroSection = () => {
    return (
        <div>
            <section style={{ padding: '4rem 2rem', textAlign: 'center', background: '#f5f6fa' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Bem-vindo à Hero Section</h1>
                <p style={{ fontSize: '1.25rem', color: '#555', marginBottom: '2rem' }}>
                    Esta é uma seção de destaque genérica para apresentar sua aplicação ou serviço.
                </p>
                <button style={{
                    padding: '0.75rem 2rem',
                    fontSize: '1rem',
                    background: '#007bff',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                }}>
                    Saiba Mais
                </button>
            </section>
        </div>
    );
};

export default HeroSection;