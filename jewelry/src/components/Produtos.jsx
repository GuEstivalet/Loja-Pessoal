import React from 'react';
import styles from "./Produtos.module.css";
import { Link } from "react-router-dom";
import Head from './Head';
import produtosData from "../jsons/produtos.json";

const Produtos = () => {
  const [produtos, setProdutos] = React.useState([]);

  React.useEffect(() => {
    setProdutos(produtosData);
  }, []);

  if (!produtos.length) return null;

  return (
    <div className={`${styles.produtos} animeLeft`}>
      <Head title={`Ada | Produtos`} description={`Área de produtos`} />
      {produtos.map((produto) => (
        <Link to={`produto/${produto.id}`} key={produto.id}>
          <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
          <h1 className={styles.nome}>{produto.nome}</h1>
        </Link>
      ))}
    </div>
  );
};

export default Produtos;
