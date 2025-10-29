import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full bg-black" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/60 via-black/40 to-black" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-wider text-emerald-400">
            New Drop
            <span className="h-1 w-1 rounded-full bg-emerald-400 animate-pulse" />
          </p>
          <h1 className="mt-6 text-5xl sm:text-6xl font-extrabold tracking-tight text-white">
            Precision Engineered Performance Wear
          </h1>
          <p className="mt-6 text-lg text-zinc-300">
            Minimalist silhouettes. Technical fabrics. Built for training, competition, and everyday movement.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#shop"
              className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-5 py-3 font-medium text-black hover:bg-emerald-400 transition-colors"
            >
              Shop Collection
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#explore"
              className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-5 py-3 font-medium text-white hover:bg-white/10 transition-colors"
            >
              Explore
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
