import { Link } from 'react-router-dom'
import { useFavorites } from '../context/FavoritesContext'

export const NavBar = () => {
  
  const { favoritesCount } = useFavorites();
  
  return (
    <nav style={{
      display: 'flex',
      gap: '20px',
      padding: '20px',
      backgroundColor: '#f0f0f0',
      borderBottom: '2px solid #ddd',
      marginBottom: '20px'
    }}>
      <Link 
        to="/" 
        style={{
          textDecoration: 'none',
          padding: '10px 15px',
          backgroundColor: '#007bff',
          color: 'white',
          borderRadius: '5px'
        }}
      >
        🏠 Inicio
      </Link>
      
      <Link 
        to="/favorites" 
        style={{
          textDecoration: 'none',
          padding: '10px 15px',
          backgroundColor: '#dc3545',
          color: 'white',
          borderRadius: '5px',
          position: 'relative'
        }}
      >
        ❤️ Favoritos
        {favoritesCount > 0 && (
          <span style={{
            position: 'absolute',
            top: '-8px',
            right: '-8px',
            backgroundColor: '#ffc107',
            color: '#000',
            borderRadius: '50%',
            padding: '2px 6px',
            fontSize: '12px',
            fontWeight: 'bold'
          }}>
            {favoritesCount}
          </span>
        )}
      </Link>
      
      <Link 
        to="/about" 
        style={{
          textDecoration: 'none',
          padding: '10px 15px',
          backgroundColor: '#28a745',
          color: 'white',
          borderRadius: '5px'
        }}
      >
        ℹ️ Acerca de
      </Link>
    </nav>
  )
} 