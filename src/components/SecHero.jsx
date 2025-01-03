import React from 'react';
import styles from './SecHero.module.css';

const SecHero = () => {
  return (
    <section className={styles.secHero}>
        <img src='/assets/image-logo.png' alt="Imagem de uma mulher atras de uma parede de papel reasgada por ela." />
        <div>
          <h1>Novos tempos, novos lançamentos</h1>
          <p>Às vezes você precisa dar um pequeno grande passo para provar a si mesma que não há limites para quem acredita em seu próprio potencial.</p>
          <a href="/">Confira novos lançamentos</a> 
        </div>
    </section>
  );
};

export default SecHero;
