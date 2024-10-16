import React from 'react'
import styles from './SecHero.module.css'

const SecHero = () => {
  return (
    <section>
        <img src='src/assets/hero-section.jpg'/>
        <div className={styles.sec-hero}>
            <h1>Limitless</h1>
            <p>As vezes você precisa dar um pequeno grande passo para provar a si mesma que não há limites para quem acredita em seu próprio potencial.</p>
            <a href="">Confira novos lançamentos</a> 
        </div>
    </section>
  )
}

export default SecHero
