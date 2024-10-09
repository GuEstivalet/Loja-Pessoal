import React from 'react';

const Head = ({ title, description }) => {
  React.useEffect(() => {
    document.title = title;

    // Procura pela meta tag de descrição
    let metaDescription = document.querySelector('meta[name="description"]');

    // Se não existir, cria uma nova meta tag
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }

    // Define o conteúdo da descrição
    metaDescription.setAttribute('content', description);
  }, [title, description]); // Usar diretamente title e description

  return null; // Retorna null já que o componente não precisa renderizar nada visualmente
};

export default Head;
