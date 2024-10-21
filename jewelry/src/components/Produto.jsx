import React from 'react';
import styles from './Produto.module.css';
import { useParams } from 'react-router-dom';
import produtosData from '../jsons/produtos.json';
import Head from './Head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const Produto = () => {
  const { id } = useParams(); // Obtém o ID do produto a partir da URL
  const [produto, setProduto] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [fotoAtiva, setFotoAtiva] = React.useState(0);

  React.useEffect(() => {
    // Verifica se o ID está presente
    if (!id) {
      setError('ID do produto não encontrado.');
      setLoading(false);
      return;
    }

    try {
      const produtoEncontrado = produtosData.find((produto) => produto.id === id);
      if (!produtoEncontrado) {
        throw new Error('Produto não encontrado');
      }
      setProduto(produtoEncontrado);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [id]);

  function handleClick(index) {
    setFotoAtiva(index);
  }

  if (error) return <p>{error}</p>;

  if (loading) return <div className="loading">Carregando...</div>;

  if (produto === null) return null;

  return (
    <section className={`${styles.produto} animeLeft`}>
      <Head title={`Ada | ${produto.nome}`} description={`Página informações individuais de ${produto.nome}.`} />
      <div className={`${styles.imagesDisplay}`}>
        <img id="destaque" src={produto.fotos[fotoAtiva].src} alt="Imagem em destaque do produto." />
        <div className={styles.wrapper}>
          {produto.fotos.map((foto, index) => (
            <button key={index} onClick={() => handleClick(index)}>
              <img src={foto.src} alt={foto.titulo} className={styles.inativas} />
            </button>
          ))}
        </div>
      </div>
      <aside>
        <h1>{produto.nome}</h1>
        <span className={styles.preco}>R$ {produto.preco}</span>
        <p className={styles.descricao}>{produto.descricao}</p>
        <a href={`/comprar/${produto.id}`}>Compre Aqui</a>
      </aside>
    </section>
  );
};

export default Produto;
