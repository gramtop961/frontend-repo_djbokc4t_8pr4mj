import TopBar from './components/TopBar';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <TopBar />
      <main>
        <Hero />
        <Features />
        <Showcase />
      </main>
      <footer className="border-t border-black/[0.06] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} Aura AI for Restaurants</span>
          <div className="flex items-center gap-4">
            <a href="#features" className="hover:text-slate-900">Features</a>
            <a href="#case" className="hover:text-slate-900">Case Study</a>
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
