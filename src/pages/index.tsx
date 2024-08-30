import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Shopify Product Grid</title>
        <meta name="description" content="Shopify Product Grid" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Hero />
        <ProductGrid />
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 text-center">
          &copy; 2024 My Store. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
