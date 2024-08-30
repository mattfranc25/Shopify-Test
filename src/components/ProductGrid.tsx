import React, { useState, useEffect } from 'react';
import { fetchProducts, Product } from '../lib/shopify';
import ProductCard from './ProductCard';

const ProductGrid: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts()
      .then(setProducts)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const itemsPerPage = page === 1 ? 8 : 7;
  const displayedProducts = products.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#7AA65A94] mb-8">Featured Collection</h2>
        {loading ? (
          <p className="text-center">Loading products...</p>
        ) : displayedProducts.length === 0 ? (
          <p className="text-center">No products available.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {displayedProducts.map((product) => (
              product.images.edges?.[0]?.node.originalSrc ? (
                <ProductCard key={product.id} product={product} />
              ) : null
            ))}
          </div>
        )}

        <div className="flex justify-center mt-8">
          {page > 1 && (
            <button
              onClick={() => setPage(page - 1)}
              className="bg-gray-200 p-2 rounded-full mr-4"
            >
              ←
            </button>
          )}
          {products.length > itemsPerPage * page && (
            <button
              onClick={() => setPage(page + 1)}
              className="bg-gray-200 p-2 rounded-full"
            >
              →
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
