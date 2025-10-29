import { Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Apex Runner Tee',
    color: 'Onyx Black',
    price: 48,
    badge: 'Bestseller',
  },
  {
    id: 2,
    name: 'Motion Track Pants',
    color: 'Carbon Grey',
    price: 78,
    badge: 'New',
  },
  {
    id: 3,
    name: 'Prime Training Hoodie',
    color: 'Deep Slate',
    price: 96,
  },
  {
    id: 4,
    name: 'Velocity Court Shoes',
    color: 'Core Black / Volt',
    price: 120,
  },
];

export default function ProductShowcase() {
  return (
    <section id="shop" className="relative bg-black py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Featured</h2>
            <p className="mt-2 text-zinc-400">Curated performance essentials.</p>
          </div>
          <a href="#" className="text-emerald-400 hover:text-emerald-300 font-medium">View all</a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <article key={p.id} className="group relative rounded-xl overflow-hidden bg-zinc-900/60 border border-white/5">
              <div className="aspect-square bg-gradient-to-br from-zinc-900 to-zinc-800" />
              {p.badge && (
                <span className="absolute left-3 top-3 rounded-full bg-emerald-500 px-2.5 py-1 text-xs font-medium text-black">
                  {p.badge}
                </span>
              )}
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold group-hover:text-emerald-400 transition-colors">{p.name}</h3>
                  <div className="flex items-center gap-1 text-amber-400">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-xs text-zinc-400">4.8</span>
                  </div>
                </div>
                <p className="mt-1 text-sm text-zinc-400">{p.color}</p>
                <div className="mt-3 flex items-center justify-between">
                  <p className="text-white font-semibold">${p.price}</p>
                  <button className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white hover:bg-white/10">
                    Add to bag
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
