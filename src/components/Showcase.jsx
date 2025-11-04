import { Star, Check, Quote, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

function CaseStudyCard() {
  return (
    <div id="case" className="rounded-2xl border border-black/[0.06] bg-white p-8 shadow-sm">
      <div className="flex items-center gap-2 text-amber-500">
        <Star fill="#f59e0b" stroke="#f59e0b" />
        <span className="font-semibold">Case Study • Coastal Bistro</span>
      </div>
      <p className="mt-4 text-slate-900 text-lg font-medium">
        62% fewer missed calls, +18% more weeknight covers in 30 days.
      </p>
      <p className="mt-2 text-slate-600">
        Aura answered 1,420 calls last month, booked 312 reservations, and sent 480 SMS confirmations. Staff interruptions during service dropped dramatically.
      </p>
      <div className="mt-4 flex items-center gap-2 text-slate-700">
        <Quote size={16} className="opacity-60" />
        <em>“It feels like a patient, knowledgeable host who never gets flustered.”</em>
        <span className="opacity-60">— GM, Coastal Bistro</span>
      </div>
    </div>
  );
}

function Pricing() {
  const tiers = [
    { name: 'Starter', price: '$149/mo', features: ['Up to 1 location', '1k minutes included', 'Basic call flows', 'Email support'] },
    { name: 'Growth', price: '$349/mo', features: ['Up to 3 locations', '5k minutes included', 'Reservations & orders', 'Priority support'] },
    { name: 'Scale', price: 'Custom', features: ['Unlimited locations', 'Custom flows & integrations', 'Dedicated success manager', 'SLA & compliance'] },
  ];

  return (
    <div id="pricing" className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {tiers.map((t) => (
        <div key={t.name} className="rounded-2xl border border-black/[0.06] bg-white p-6 shadow-sm">
          <div className="flex items-baseline justify-between">
            <h3 className="text-lg font-semibold text-slate-900">{t.name}</h3>
            <div className="text-xl font-bold text-slate-900">{t.price}</div>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            {t.features.map((f) => (
              <li key={f} className="flex items-start gap-2"><Check className="mt-0.5 text-emerald-500" size={16} /> {f}</li>
            ))}
          </ul>
          <a href="#contact" className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-slate-900 text-white px-4 py-2.5 hover:bg-slate-800">Get started</a>
        </div>
      ))}
    </div>
  );
}

function ContactForm() {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    setStatus(`Thanks, ${name}! We’ll reach out shortly.`);
    e.currentTarget.reset();
  };

  return (
    <div id="contact" className="rounded-2xl border border-black/[0.06] bg-white p-8 shadow-sm">
      <h3 className="text-xl font-semibold text-slate-900">Talk to our team</h3>
      <p className="mt-1 text-slate-600 text-sm">Tell us about your restaurant and we’ll set up a tailored demo.</p>
      <form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 gap-4">
        <input name="name" required placeholder="Your name" className="w-full rounded-md border border-black/[0.08] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500/40" />
        <input name="restaurant" required placeholder="Restaurant name" className="w-full rounded-md border border-black/[0.08] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500/40" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input name="email" type="email" required placeholder="Email" className="w-full rounded-md border border-black/[0.08] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500/40" />
          <input name="phone" type="tel" placeholder="Phone (optional)" className="w-full rounded-md border border-black/[0.08] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500/40" />
        </div>
        <textarea name="message" rows={4} placeholder="What are you hoping to improve?" className="w-full rounded-md border border-black/[0.08] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500/40" />
        <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-900 text-white px-5 py-3 hover:bg-slate-800">
          <Mail size={18} /> Request demo
        </button>
        {status && <p className="text-emerald-600 text-sm">{status}</p>}
      </form>
      <div className="mt-4 text-sm text-slate-600 flex items-center gap-4">
        <span className="inline-flex items-center gap-2"><Phone size={16}/> +1 (234) 567-8901</span>
        <span className="inline-flex items-center gap-2"><Mail size={16}/> hello@aura.rest</span>
      </div>
    </div>
  );
}

export default function Showcase() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-8">
            <CaseStudyCard />
            <Pricing />
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
