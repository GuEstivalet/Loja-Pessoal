import React from 'react';
import styles from './Produto.module.css';
import { useParams } from 'react-router-dom';
import produtosData from '../jsons/produtos.json';
import Head from './Head';

const Produto = () => {
  const { id } = useParams(); // Obtém o ID do produto a partir da URL
  const [produto, setProduto] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

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

  if (error) return <p>{error}</p>;

  if (loading) return <div className="loading">Carregando...</div>;

  if (produto === null) return null;

  return (
    <section className={`${styles.produto} animeLeft`}>    
      <Head title={`Ada | ${produto.nome}`} description={`Página de um produto específico.`} />
      <div>
        {produto.fotos.map((foto) => (
          <img key={foto.src} src={foto.src} alt={foto.titulo} />
        ))}
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
