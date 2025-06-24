
export const GifItem = ({ id, title, url }) => {
  return (
    <>
    <li key={id}>
        <img src={url} alt={title} />
        <p>{title}</p>
    </li>
    </>
    
  )
}
