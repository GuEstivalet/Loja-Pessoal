import React from 'react';

const Head = ({ title, description }) => {
  React.useEffect(() => {
    document.title = title;

    let metaDescription = document.querySelector('meta[name="description"]');

    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }

    // Define o conteúdo da descrição
    metaDescription.setAttribute('content', description);
  }, [title, description]); // Usar diretamente title e description

  return null;
};

export default Head;
