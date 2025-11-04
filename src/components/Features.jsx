import { CheckCircle2, Headphones, Smartphone, Bot, Clock, CreditCard } from 'lucide-react';

const features = [
  {
    icon: Headphones,
    title: 'Natural phone conversations',
    desc: 'Understands accents, interrupts politely, and confirms details like a real host.'
  },
  {
    icon: Smartphone,
    title: 'SMS confirmation & links',
    desc: 'Sends confirmations, menus, and payment links via text to reduce no‑shows.'
  },
  {
    icon: Bot,
    title: 'Menu & allergen intelligence',
    desc: 'Answers menu questions, allergens, hours, parking, and more from your data.'
  },
  {
    icon: Clock,
    title: 'Smart routing & hours',
    desc: 'After-hours voicemail, peak-time triage, and instant handoff to staff when needed.'
  },
  {
    icon: CreditCard,
    title: 'Order & deposit capture',
    desc: 'Takes takeout orders or deposits for large parties with secure PCI flows.'
  },
  {
    icon: CheckCircle2,
    title: 'Works with your tools',
    desc: 'Integrates with popular reservation and POS systems to keep everything in sync.'
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Built for busy restaurants</h2>
          <p className="mt-3 text-slate-600">Everything you need to answer every call, reduce interruptions, and give guests a five‑star experience.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-black/[0.06] bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-11 w-11 rounded-lg bg-gradient-to-tr from-violet-500 via-fuchsia-500 to-amber-400 text-white flex items-center justify-center">
                <f.icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
