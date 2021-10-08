import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "Anna Frank Diary",
    description:
      "Is a book of the written by Anna Frank while she was hiding from nazis during the Second World War",
  },
  {
    id: "p2",
    price: 10,
    title: "The Hobbit",
    description: "The story of the adventures of Bilbo Baggins",
  },
  {
    id: "p3",
    price: 7,
    title: "Harry Potter",
    description: "The story of the wizard Harry Potter",
  },
];

const Products = () => ( 
  <section className={classes.products}>
    <h2>Buy your favorite products</h2>
    <ul>
      {DUMMY_PRODUCTS.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />
      ))}
    </ul>
  </section>
);

export default Products;
