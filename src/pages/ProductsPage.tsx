import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Category } from '../types/product';
import { products as allProducts, CATEGORIES } from '../components/sections/productsSection/ProductData';
import { fadeIn } from '../assets/animations/productAnimation';
import { PageHeader } from '../components/sections/productsSection/ProductHeader';
import { CategoryFilter } from '../components/sections/productsSection/CategoryFilter';
import { FeaturedProduct } from '../components/sections/productsSection/FeaturedProduct';
import { ProductGrid } from '../components/sections/productsSection/ProductGrid';
import Footer from '../components/layout/Footer';
import { Helmet } from 'react-helmet-async';

interface ProductsPageProps {
  onProductClick?: (productId: string) => void;
}

const ProductsPage: React.FC<ProductsPageProps> = ({ onProductClick }) => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  // Derive filtered lists
  const filteredProducts =
    activeCategory === 'All'
      ? allProducts
      : allProducts.filter((p) => p.category === activeCategory);

  const featuredProduct = filteredProducts.find((p) => p.featured);
  const otherProducts = filteredProducts.filter((p) => !p.featured);

  // Precompute counts for each category
  const counts: Partial<Record<Category, number>> = {
    All: allProducts.length,
  };
  CATEGORIES.forEach((cat) => {
    if (cat !== 'All') {
      counts[cat] = allProducts.filter((p) => p.category === cat).length;
    }
  });

  const handleExplore = (product: { id: string }) => {
    onProductClick?.(product.id);
  };

  return (
    <>
    <Helmet>
        <title>Products Vynho</title>
        <meta
          name="description"
          content="The products vynho created so far."
        />
      </Helmet>
    
    <div>
      {/* Subtle grid background */}
      <div
        className="fixed inset-0 z-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Top radial glow */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-225 h-125 bg-cyan-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10">
        <section className="max-w-7xl mx-auto px-6 py-26 md:py-26">
          <PageHeader
          
            title="Products"
            subtitle="Six purpose-built AI products that work beautifully alone and powerfully together. Pick one, or deploy the full suite."
            badge={{
              text: `${allProducts.length} products · All on one platform`,
            }}
          />

          <div className="mb-5">
            <CategoryFilter
              categories={CATEGORIES}
              active={activeCategory}
              onChange={setActiveCategory}
              counts={counts}
            />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {featuredProduct && (
                <div className="mb-5">
                  <FeaturedProduct
                    product={featuredProduct}
                    onPrimaryAction={handleExplore}
                    onSecondaryAction={handleExplore}
                  />
                </div>
              )}

              <ProductGrid products={otherProducts} onExplore={handleExplore} />

              {filteredProducts.length === 0 && (
                <div className="py-20 text-center text-zinc-500">
                  No products in this category.
                </div>
              )}
            </motion.div>
          </AnimatePresence>
          
        </section>
      </div>
      <Footer/>
    </div>
    </>
  );
};

export default ProductsPage;
