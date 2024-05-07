import { FunctionComponent } from "react";
import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import Container from "../components/Container";
import FrameComponent1 from "../components/FrameComponent1";
import ProductsContainer from "../components/ProductsContainer";
import FrameComponent from "../components/FrameComponent";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import styles from "./Home.module.css";

const Home: FunctionComponent = () => {
  return (
    <div className={styles.home}>
      <section className={styles.functionContainer}>
        <Header />
        <HeroBanner />
      </section>
      <section className={styles.containerParent}>
        <Container />
        <FrameComponent1 />
        <ProductsContainer />
        <FrameComponent />
        <Testimonials />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
