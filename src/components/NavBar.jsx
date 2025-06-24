import { Link } from 'react-router-dom'

export const NavBar = () => {
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