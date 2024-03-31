import './ThumbnailItem.css'

function ThumbnailItem({image, onClick}) {
    return (
      <>
        <li className="thumbnail-container">
          <button onClick={onClick}>
            <img
              src={image.thumbnailUrl}
              alt={image.thumbnailAltText}
              style={{paddingRight: 10}}
            />
          </button>
        </li>
      </>
    )
  }
  
  export default ThumbnailItem
  