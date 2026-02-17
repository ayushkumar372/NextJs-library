export default function EcommercePage() {
  const products = [
    { name: "Wireless Headphones", price: "$129.99", rating: 4.5, reviews: 128, tag: "Best Seller" },
    { name: "Smart Watch Pro", price: "$299.99", rating: 4.8, reviews: 89, tag: "New" },
    { name: "Laptop Stand", price: "$49.99", rating: 4.2, reviews: 256, tag: null },
    { name: "Mechanical Keyboard", price: "$159.99", rating: 4.7, reviews: 312, tag: "Popular" },
    { name: "USB-C Hub", price: "$39.99", rating: 4.3, reviews: 178, tag: null },
    { name: "Monitor Light Bar", price: "$69.99", rating: 4.6, reviews: 95, tag: "New" },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-foreground">E-Commerce Example</h1>
      <p className="mt-3 text-muted">
        Product listing with filters and cards.
      </p>

      <div className="mt-8 lg:grid lg:grid-cols-[240px_1fr] lg:gap-8">
        {/* Filters Sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-20 space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-foreground">Category</h3>
              <div className="mt-2 space-y-1">
                {["All Products", "Audio", "Wearables", "Accessories", "Peripherals"].map((cat, i) => (
                  <button
                    key={cat}
                    className={`block w-full rounded-lg px-3 py-1.5 text-left text-sm ${
                      i === 0 ? "bg-primary/10 font-medium text-primary" : "text-muted hover:bg-secondary"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">Price Range</h3>
              <div className="mt-2 space-y-1">
                {["Under $50", "$50 - $100", "$100 - $200", "Over $200"].map((range) => (
                  <label key={range} className="flex items-center gap-2 text-sm text-muted">
                    <input type="checkbox" className="h-4 w-4 rounded accent-primary" />
                    {range}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">Rating</h3>
              <div className="mt-2 space-y-1">
                {[4, 3, 2].map((stars) => (
                  <label key={stars} className="flex items-center gap-2 text-sm text-muted">
                    <input type="radio" name="rating" className="h-4 w-4 accent-primary" />
                    {stars}+ Stars
                  </label>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm text-muted">Showing {products.length} products</p>
            <select className="rounded-lg border border-border bg-card px-3 py-1.5 text-sm text-foreground">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Rating</option>
            </select>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div key={product.name} className="group rounded-xl border border-border bg-card transition-all hover:shadow-lg">
                <div className="relative flex h-48 items-center justify-center rounded-t-xl bg-gradient-to-br from-secondary to-secondary/50">
                  {product.tag && (
                    <span className="absolute left-3 top-3 rounded-full bg-primary px-2 py-0.5 text-[10px] font-medium text-white">
                      {product.tag}
                    </span>
                  )}
                  <div className="h-20 w-20 rounded-lg bg-card shadow-sm" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground group-hover:text-primary">
                    {product.name}
                  </h3>
                  <div className="mt-1 flex items-center gap-1">
                    <span className="text-sm text-yellow-500">
                      {"★".repeat(Math.floor(product.rating))}
                    </span>
                    <span className="text-xs text-muted">
                      ({product.reviews})
                    </span>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-lg font-bold text-foreground">
                      {product.price}
                    </span>
                    <button className="rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-white hover:bg-primary-dark">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
