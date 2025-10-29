export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-block h-8 w-8 rounded-sm bg-gradient-to-br from-emerald-500 to-emerald-700" />
              <span className="text-white font-semibold tracking-widest uppercase">Volt Athletics</span>
            </div>
            <p className="mt-3 text-sm text-zinc-400 max-w-sm">
              Elevated performance wear born from a relentless pursuit of simplicity, comfort, and speed.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:col-span-2">
            <div>
              <h4 className="text-white font-medium">Shop</h4>
              <ul className="mt-3 space-y-2">
                <li><a className="text-sm text-zinc-400 hover:text-white" href="#">Men</a></li>
                <li><a className="text-sm text-zinc-400 hover:text-white" href="#">Women</a></li>
                <li><a className="text-sm text-zinc-400 hover:text-white" href="#">Accessories</a></li>
                <li><a className="text-sm text-zinc-400 hover:text-white" href="#">Sale</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium">Help</h4>
              <ul className="mt-3 space-y-2">
                <li><a className="text-sm text-zinc-400 hover:text-white" href="#">Shipping</a></li>
                <li><a className="text-sm text-zinc-400 hover:text-white" href="#">Returns</a></li>
                <li><a className="text-sm text-zinc-400 hover:text-white" href="#">Contact</a></li>
                <li><a className="text-sm text-zinc-400 hover:text-white" href="#">Stores</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between border-t border-white/10 pt-6">
          <p className="text-xs text-zinc-500">© {new Date().getFullYear()} Volt Athletics. All rights reserved.</p>
          <div className="mt-3 sm:mt-0 flex items-center gap-6 text-xs text-zinc-500">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
