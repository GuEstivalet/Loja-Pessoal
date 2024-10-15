import React from 'react';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Importa o ícone do WhatsApp
import { faInstagram } from '@fortawesome/free-brands-svg-icons'; // Importa o ícone do Instagram
import { faPix } from '@fortawesome/free-brands-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <section className={styles.footer}>
      <h1>Todos direitos reservados.</h1>
      <FontAwesomeIcon icon={faWhatsapp} />
      <FontAwesomeIcon icon={faInstagram} />
      <div>
        <h2>Aceitamos dinheiro, pix e cartões de crédito</h2>
      <FontAwesomeIcon icon={faCreditCard} />
      <FontAwesomeIcon icon={faPix} />
      </div>
    </section>
  );
}

export default Footer;
