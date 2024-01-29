import './card.css'
// eslint-disable-next-line react/prop-types
const Card = ({thumbnail,title,description,price}) => {
  return (
    
      <div className="product-card">
        <div className="badge">Hot</div>
        <div className="product-tumb">
          <img src={thumbnail} alt="" />
        </div>
        <div className="product-details">
          <h4>
            <a href="">{title}</a>
          </h4>
          <p>
         {description}
          </p>
          <div className="product-bottom-details">
            <div className="product-price">
            $ {price}
            </div>
            <div className="product-links">
              <a href="">
                <i className="fa fa-heart"></i>
              </a>
              <a href="">
                <i className="fa fa-shopping-cart"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Card;
