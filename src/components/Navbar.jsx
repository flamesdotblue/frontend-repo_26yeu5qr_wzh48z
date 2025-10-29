import { useState } from 'react';
import { Menu, Search, ShoppingBag } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              className="md:hidden p-2 rounded-md hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
            >
              <Menu className="h-5 w-5 text-white" />
            </button>
            <a href="#" className="flex items-center gap-2">
              <span className="inline-block h-8 w-8 rounded-sm bg-gradient-to-br from-emerald-500 to-emerald-700" />
              <span className="text-white font-semibold tracking-widest uppercase">Volt Athletics</span>
            </a>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#collections" className="text-sm text-zinc-300 hover:text-white transition-colors">Collections</a>
            <a href="#men" className="text-sm text-zinc-300 hover:text-white transition-colors">Men</a>
            <a href="#women" className="text-sm text-zinc-300 hover:text-white transition-colors">Women</a>
            <a href="#new" className="text-sm text-zinc-300 hover:text-white transition-colors">New Arrivals</a>
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden md:flex items-center gap-2 text-zinc-300 hover:text-white">
              <Search className="h-5 w-5" />
              <span className="text-sm">Search</span>
            </button>
            <button className="relative p-2 rounded-md hover:bg-white/5">
              <ShoppingBag className="h-5 w-5 text-white" />
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-emerald-500 text-white text-xs grid place-items-center">2</span>
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden border-t border-white/10 py-3">
            <div className="grid gap-2">
              <a href="#collections" className="text-sm text-zinc-300 hover:text-white transition-colors">Collections</a>
              <a href="#men" className="text-sm text-zinc-300 hover:text-white transition-colors">Men</a>
              <a href="#women" className="text-sm text-zinc-300 hover:text-white transition-colors">Women</a>
              <a href="#new" className="text-sm text-zinc-300 hover:text-white transition-colors">New Arrivals</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
