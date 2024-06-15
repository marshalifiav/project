// NewsItem.js
import React from 'react';

const NewsItem = ({ title, category, description, keywords }) => {
  return (
    <div className="news-item">
      <h2>{title ? title : 'Judul tidak tersedia'}</h2>
      <p><strong>Kategori:</strong> {category ? category : 'Kategori tidak tersedia'}</p>
      <p>{description}</p>
      <p><strong>Keywords:</strong> {keywords.join(', ')}</p>
    </div>
  );
};

export default NewsItem;