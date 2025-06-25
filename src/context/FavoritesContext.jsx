import { createContext, useContext, useState } from 'react';

// 1. Crear el contexto
const FavoritesContext = createContext();

// 2. Hook personalizado para usar el contexto
export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  
  if (!context) {
    throw new Error('useFavorites debe ser usado dentro de FavoritesProvider');
  }
  
  return context;
}

// 3. Provider del contexto
export const FavoritesProvider = ({ children }) => {
  
  const [favorites, setFavorites] = useState([]);

  // Agregar a favoritos
  const addToFavorites = (gif) => {
    // Verificar si ya existe
    const exists = favorites.find(fav => fav.id === gif.id);
    
    if (!exists) {
      setFavorites([...favorites, gif]);
      console.log('Gif agregado a favoritos:', gif.title);
    }
  };

  // Remover de favoritos
  const removeFromFavorites = (gifId) => {
    setFavorites(favorites.filter(fav => fav.id !== gifId));
    console.log('Gif removido de favoritos');
  };

  // Verificar si está en favoritos
  const isFavorite = (gifId) => {
    return favorites.some(fav => fav.id === gifId);
  };

  // Limpiar todos los favoritos
  const clearFavorites = () => {
    setFavorites([]);
  };

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    clearFavorites,
    favoritesCount: favorites.length
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}; 