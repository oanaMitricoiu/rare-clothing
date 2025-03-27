import "./category-item.scss"
const CategoryItem = ({category:{title,id,imageUrl}}) => {
    return (
        <div  className="category-container">
       <div className="background-image" style={{
        backgroundImage:`url(${imageUrl})`
       }}/>
        <div className="category-body-container">
          <h2>{title}</h2>
          <p>Buy now</p>
        </div>
      </div>
    )
}

export default CategoryItem;