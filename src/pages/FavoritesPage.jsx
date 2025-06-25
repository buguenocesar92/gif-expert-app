import { useFavorites } from '../context/FavoritesContext';
import { GifItem } from '../components/GifItem';

export const FavoritesPage = () => {
  
  const { favorites, clearFavorites, favoritesCount } = useFavorites();

  return (
    <div>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '20px' 
      }}>
        <h1>Mis Favoritos ({favoritesCount})</h1>
        
        {favoritesCount > 0 && (
          <button 
            onClick={clearFavorites}
            style={{
              padding: '8px 16px',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            🗑️ Limpiar Favoritos
          </button>
        )}
      </div>

      <hr />

      {favoritesCount === 0 ? (
        <div style={{ textAlign: 'center', padding: '40px' }}>
          <h3>No tienes favoritos aún</h3>
          <p>Agrega algunos gifs a tus favoritos haciendo clic en el corazón ❤️</p>
        </div>
      ) : (
        <ol>
          {favorites.map((gif) => (
            <GifItem key={gif.id} {...gif} />
          ))}
        </ol>
      )}
    </div>
  );
}; 