export default function ProductCard({ name, image }) {
  return (
    <div className="card">
      <div className="card-body">
        <img src={image} className="card-img product-image" alt={name} />
      </div>
      <div className="card-footer">
        <h4 className="product-name">{name}</h4>
      </div>
    </div>
  );
}
