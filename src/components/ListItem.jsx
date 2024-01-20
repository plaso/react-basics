const ListItem = ({ onClick, title, description, image }) => {
  const clickFn = () => onClick(title)

  return (
    <div className="card">
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>

        <button className="btn btn-primary" onClick={clickFn} >Click me!</button>
      </div>
    </div>
  )
}

export default ListItem;