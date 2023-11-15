// import components
import Hero from "../../components/hero/Hero.jsx";
import ProductCard from "../../components/productCard/productCard.jsx";
import Loader from "../../components/loader/Loader.jsx";
// import styles
import "./home.css";
// import react hook
import { useEffect, useState } from "react";
// import dependencies
import axios from "axios";
// import layout
import LoggedLayout from "../../layouts/LoggedLayout.jsx";

const Home = () => {
  // update website title
  document.title = 'Sin Nombre Shop | Juan Vidal';

  // product state
  const [products, setProducts] = useState([]);
  // loading state
  const [loading, setLoading] = useState(false);

  // get data from api
  useEffect(() => {
    setLoading(true);

    // function that render teh api data
    const renderData = async () => {
      try {
        const res = await axios.get('https://fakestoreapi.com/products');
        setLoading(false);
        setProducts(res.data);

      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    // calling the function
    renderData();
  }, []);


  return (
    <LoggedLayout>
        <Hero />
        <section className="home-about">
          <div className="home-about-container container">
            <h3>Sobre Nosotros</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
              voluptatem dignissimos vel temporibus corporis rerum ullam sequi
              unde commodi molestias, dicta praesentium esse consectetur odit,
              voluptate deleniti reiciendis totam inventore dolorem aspernatur
              omnis? Nemo, exercitationem. Accusamus voluptatibus aliquam, quas
              commodi est nobis recusandae laboriosam voluptas facere asperiores
              nemo! Alias simpedit beatae exercitationem quas quia est architecto,
              cumque excepturi et repellat, tempore in! At commodi odit officiis
              tempora veritatis nostrum expedita nam similique voluptate sint nisi
              magnam sequi voluptatem in quia, atque iusto exercitationem fugiat.
              Minus molestias tenetur aspernatur voluptatibus, quaerat, autem
              necessitatibus quibusdam reiciendis, molestiae iste in ea
              consectetur eius?
            </p>
          </div>
            </section>
            {/* SHOWIGN PRODUCTS */}
        <section className="products-home" id="productos">
          <h3>Productos</h3>
            {
              loading ? (
                  <div className="loader-container">
                    <Loader/>
                  </div>
                ) : (
                  <div className="products-container container">
                    {
                      products.map(product => (    
                        <ProductCard
                        productUrl={product.id}
                        key={product.id}
                        product={product}  
                        />
                        ))
                      }
                  </div>
                )
            }
        </section>
      </LoggedLayout>
  );
};

export default Home;