import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.25),rgba(14,165,233,0.12),transparent_60%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-28">
        <div className="max-w-2xl">
          <span className="inline-flex items-center px-2.5 py-1.5 rounded-full text-xs font-medium bg-white/70 backdrop-blur border border-black/[0.06] text-slate-700 shadow-sm">AI Voice Agent for Restaurants</span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Answer every call, take orders, and book tables — instantly.
          </h1>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Aura handles phone calls, reservations, and FAQs with natural, human-like conversation. Reduce missed calls and delight guests 24/7 while your team focuses on service.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-900 text-white px-5 py-3 hover:bg-slate-800 shadow">
              Book a live demo <ArrowRight size={18} />
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-md px-5 py-3 bg-white/80 backdrop-blur border border-black/[0.06] text-slate-800 hover:bg-white">
              Explore features
            </a>
          </div>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm text-slate-600">
            <div><span className="text-2xl font-semibold text-slate-900">24/7</span><div>Availability</div></div>
            <div><span className="text-2xl font-semibold text-slate-900">60%+</span><div>Call deflection</div></div>
            <div><span className="text-2xl font-semibold text-slate-900">90 sec</span><div>Avg setup time</div></div>
            <div><span className="text-2xl font-semibold text-slate-900">4.9/5</span><div>Caller satisfaction</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
