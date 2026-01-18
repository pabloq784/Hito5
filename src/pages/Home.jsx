import Header from "../components/Header.jsx";
import CardPizza from "../components/CardPizza.jsx";
import { useCart } from "../context/CartContext";

const Home = () => {
  const { addToCart } = useCart();

  return (
    <>
      <Header />

      <div className="container py-5">
        <div className="d-flex justify-content-between flex-wrap gap-4">

          <CardPizza
            id="p001"
            name="Napolitana"
            price={5950}
            ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
            img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
            onAdd={() =>
              addToCart({
                id: "p001",
                name: "Napolitana",
                price: 5950,
                img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c",
              })
            }
          />

          <CardPizza
            id="p002"
            name="Española"
            price={6950}
            ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
            img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"
            onAdd={() =>
              addToCart({
                id: "p002",
                name: "Española",
                price: 6950,
                img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab",
              })
            }
          />

          <CardPizza
            id="p003"
            name="Pepperoni"
            price={6950}
            ingredients={["mozzarella", "pepperoni", "orégano"]}
            img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"
            onAdd={() =>
              addToCart({
                id: "p003",
                name: "Pepperoni",
                price: 6950,
                img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3",
              })
            }
          />

        </div>
      </div>
    </>
  );
};

export default Home;