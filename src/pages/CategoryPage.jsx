import { useParams, Link } from 'react-router-dom';
import { GifGrid } from '../components/GifGrid';

export const CategoryPage = () => {
  
  // useParams extrae el parámetro de la URL
  const { categoryName } = useParams();

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <Link 
          to="/" 
          style={{
            textDecoration: 'none',
            padding: '8px 16px',
            backgroundColor: '#6c757d',
            color: 'white',
            borderRadius: '4px',
            fontSize: '14px'
          }}
        >
          ← Volver al inicio
        </Link>
      </div>

      <h1>Categoría: {categoryName}</h1>
      <hr />
      
      <GifGrid category={categoryName} />
    </div>
  )
} 