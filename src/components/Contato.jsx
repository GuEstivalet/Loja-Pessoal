import React from 'react'
import styles from './Contato.module.css';
import Head from './Head'

const Contato = () => {

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title="Ada | Contato" description='Entre em contato' />
      <img src='src/assets/image-contato.jpg' alt="imagem"/>
      <div>
      <h1>Entre em contato.</h1>
      <ul className={styles.dados}>
        <li>adaofficialloja@gmail.com</li>
        <li>(53) 9982-0595</li>
      </ul>
      </div>
    </section>
  )
}

export default Contato