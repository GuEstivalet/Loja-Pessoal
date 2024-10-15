import React from 'react';
import styles from './Produto.module.css';
import { useParams } from 'react-router-dom';
import produtosData from '../jsons/produtos.json';
import Head from './Head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';


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

    // Simula a busca dos dados do produto
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

  const handleProximaFoto = () => {
    setFotoAtiva((fotoAtiva + 1) % produto.fotos.length); // Vai para a próxima foto
  };

  const handleFotoAnterior = () => {
    setFotoAtiva((fotoAtiva - 1 + produto.fotos.length) % produto.fotos.length); // Volta para a foto anterior
  };

  if (error) return <p>{error}</p>;

  if (loading) return <div className="loading">Carregando...</div>;

  if (produto === null) return null;

  return (
    <section className={`${styles.produto} animeLeft`}>    
      <Head title={`Ada | ${produto.nome}`} description={`Página de um produto específico.`} />
      <div className={`${styles.imagesDisplay}`}>
        {produto.fotos.map((foto,index) => (
          <img key={foto.src} src={foto.src} alt={foto.titulo}  className={`${ index === fotoAtiva ? styles.ativa : ''}`}/>
        ))}
        <button onClick={handleFotoAnterior}><FontAwesomeIcon icon={faChevronRight} /></button>
        <button onClick={handleProximaFoto}><FontAwesomeIcon icon={faChevronLeft} /></button>
      </div>
      <div>
        <h1>{produto.nome}</h1>
        <span className={styles.preco}>R$ {produto.preco}</span>
        <p className={styles.descricao}>{produto.descricao}</p>
      </div>
    </section>
  );
};

export default Produto;
