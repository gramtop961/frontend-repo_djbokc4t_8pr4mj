import { Phone, Mail, Rocket } from 'lucide-react';

export default function TopBar() {
  return (
    <header className="w-full bg-white/70 backdrop-blur border-b border-black/[0.06] sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-violet-500 via-fuchsia-500 to-amber-400 flex items-center justify-center text-white shadow-sm">
            <Rocket size={18} />
          </div>
          <span className="font-semibold text-slate-900 tracking-tight">Aura AI for Restaurants</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          <a href="#features" className="hover:text-slate-900">Features</a>
          <a href="#case" className="hover:text-slate-900">Case Study</a>
          <a href="#pricing" className="hover:text-slate-900">Pricing</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
        </nav>
        <div className="hidden sm:flex items-center gap-3 text-sm">
          <a href="mailto:hello@aura.rest" className="flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-slate-100 text-slate-700"><Mail size={16}/> hello@aura.rest</a>
          <a href="tel:+1234567890" className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-900 text-white hover:bg-slate-800"><Phone size={16}/> Book a demo</a>
        </div>
      </div>
    </header>
  );
}
