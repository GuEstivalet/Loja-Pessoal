
import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./NotFound.module.css"

const NotFound = () => {

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className={styles.notfound}>
        <img src='src/assets/image-error.jpg' alt="Imagem ilustrativa. Página de erro."/>
        <div className={styles.text}>
        <h1>Página não encontrada</h1>
        <p>A URL que você tentou acessar não existe.</p>
        <Link to="/">Voltar para a página inicial</Link>
        </div>
    </div>
  );
};

export default NotFound;
