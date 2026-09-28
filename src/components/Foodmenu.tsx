import FoodCard from "./FoodCard";

type Food = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type FoodMenuProps = {
  foods: Food[];
  onAdd: (food: Food) => void;
};

function Foodmenu({ foods, onAdd }: FoodMenuProps) {
  return (
    <section id="menu">
      <h2>Our Menu</h2>

      <div className="food-list">
        {foods.map((food) => (
          <FoodCard
            key={food.id}
            name={food.name}
            price={food.price}
            image={food.image}
            onAdd={() => onAdd(food)}
          />
        ))}
      </div>
    </section>
  );
}

export default Foodmenu;