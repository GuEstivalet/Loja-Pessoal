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
      <h1>Conheça nossas redes sociais</h1>
      <a href='https://wa.me/5553999820595/?text=Olá, vim pelo site! Pode me ajudar??'><FontAwesomeIcon className={styles.icon} icon={faWhatsapp} /></a>
      <a href='https://www.instagram.com/adalojaoficial/'><FontAwesomeIcon className={styles.icon} icon={faInstagram} /></a>
      <h2>Aceitamos dinheiro, pix e cartões de crédito</h2>
      <FontAwesomeIcon className={styles.icon} icon={faCreditCard} />
      <FontAwesomeIcon className={styles.icon} icon={faPix} />
    </section>
  );
}

export default Footer;
