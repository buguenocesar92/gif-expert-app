import { useFavorites } from '../context/FavoritesContext';

export const GifItem = ({ id, title, url }) => {
  
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  
  const isCurrentlyFavorite = isFavorite(id);
  
  const handleFavoriteClick = () => {
    const gifData = { id, title, url };
    
    if (isCurrentlyFavorite) {
      removeFromFavorites(id);
    } else {
      addToFavorites(gifData);
    }
  };

  return (
    <li key={id} style={{ position: 'relative' }}>
      <img src={url} alt={title} />
      
      <button
        onClick={handleFavoriteClick}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: 'rgba(255, 255, 255, 0.9)',
          border: 'none',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          fontSize: '20px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
        }}
        title={isCurrentlyFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
      >
        {isCurrentlyFavorite ? '❤️' : '🤍'}
      </button>
      
      <p>{title}</p>
    </li>
  )
}
