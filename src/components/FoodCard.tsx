type FoodCardProps = {
  name: string;
  price: number;
  image: string;
  onAdd: () => void;
};

function FoodCard({ name, price, image, onAdd }: FoodCardProps) {
  return (
    <div className="food-card">
      <img src={image} alt={name} />

      <h3>{name}</h3>

      <p>Rp {price.toLocaleString("id-ID")}</p>

      <button onClick={onAdd}>
        Add to Cart
      </button>
    </div>
  );
}

export default FoodCard;