import React, { useState } from 'react'

export default function App() {
  const [lang, setLang] = useState('FR') // FR first, EN after
  const [mobileOpen, setMobileOpen] = useState(false)
  const t = (fr, en) => (lang === 'FR' ? fr : en)

  const navItems = [
    { id: 'home', fr: 'Accueil', en: 'Home' },
    { id: 'about', fr: 'À propos', en: 'About' },
    { id: 'services', fr: 'Services', en: 'Services' },
    { id: 'process', fr: 'Parcours', en: 'Process' },
    { id: 'faq', fr: 'FAQ', en: 'FAQ' },
    { id: 'contact', fr: 'Contact', en: 'Contact' },
  ]

  return (
    <div className="w-full min-h-screen bg-gray-50 text-gray-800 font-sans scroll-smooth">
      {/* Header */}
      <header className="flex justify-between items-center px-4 md:px-8 py-4 border-b border-gray-300 bg-white sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded hover:bg-gray-100"
            aria-label="Open menu"
            onClick={() => setMobileOpen(v => !v)}
          >
            <div className="space-y-1.5">
              <span className="block h-0.5 w-6 bg-gray-800"></span>
              <span className="block h-0.5 w-6 bg-gray-800"></span>
              <span className="block h-0.5 w-6 bg-gray-800"></span>
            </div>
          </button>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide cursor-pointer hover:text-green-700 transition">
            CANINEO
          </h1>
        </div>

        <nav className="hidden md:flex space-x-8 text-lg">
          {navItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="hover:text-green-700 transition-colors duration-200"
              onClick={() => setMobileOpen(false)}
            >
              {t(item.fr, item.en)}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-3 md:space-x-4">
          <button onClick={() => setLang(lang === 'EN' ? 'FR' : 'EN')} className="border px-3 py-1 rounded hover:bg-gray-100 transition">
            {lang === 'EN' ? 'FR' : 'EN'}
          </button>
          <a href="#contact" className="bg-green-600 text-white px-4 md:px-5 py-2 rounded hover:bg-green-700 transition">
            {t('Réserver', 'Book a consultation')}
          </a>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-80 max-w-[85%] bg-white shadow-xl p-6 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold">CANINEO</span>
              <button aria-label="Close menu" className="h-10 w-10 grid place-items-center rounded hover:bg-gray-100" onClick={() => setMobileOpen(false)}>
                <span className="sr-only">Close</span>
                <div className="rotate-45 text-2xl leading-none">+</div>
              </button>
            </div>
            <div className="flex flex-col gap-4">
              {navItems.map(item => (
                <a key={item.id} href={`#${item.id}`} className="text-lg py-2 border-b border-gray-200" onClick={() => setMobileOpen(false)}>
                  {t(item.fr, item.en)}
                </a>
              ))}
            </div>
            <div className="mt-auto flex items-center justify-between gap-3">
              <button onClick={() => setLang(lang === 'EN' ? 'FR' : 'EN')} className="border px-3 py-1 rounded hover:bg-gray-100">
                {lang === 'EN' ? 'FR' : 'EN'}
              </button>
              <a href="#contact" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700" onClick={() => setMobileOpen(false)}>
                {t('Réserver', 'Book')}
              </a>
            </div>
          </div>
        </div>
      )}

      {/* HERO */}
      <section id="home" className="flex flex-col items-center justify-center text-center py-28 bg-gradient-to-b from-green-50 to-white">
        <div className="relative w-11/12 md:w-3/4 lg:w-1/2 h-96 bg-gray-300 flex items-center justify-center mb-6 rounded-2xl shadow-inner overflow-hidden">
          <span className="text-gray-500 text-sm">[Dresseur·e + Labrador / Trainer + Labrador]</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 leading-tight">
          {t('Renforcez le lien avec votre chien, une patte à la fois', 'Building better bonds, one paw at a time')}
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-xl">
          {t('Dressage canin bilingue dans la grande région de Montréal.', 'Professional bilingual dog training across Greater Montréal.')}
        </p>
        <div className="space-x-4">
          <a href="#contact" className="bg-green-700 text-white px-8 py-3 rounded-lg text-lg hover:bg-green-800 transition">
            {t('Commencez', 'Start your training')}
          </a>
          <a href="#services" className="border border-green-700 text-green-700 px-8 py-3 rounded-lg text-lg hover:bg-green-50 transition">
            {t('Voir les services', 'View services')}
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-4 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="h-72 bg-gray-300 rounded-2xl grid place-items-center text-sm text-gray-500">[Portrait Constance Vale]</div>
          <div>
            <h3 className="text-3xl font-bold mb-3">{t('À propos du dresseur', 'About the Trainer')}</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              {t(
                'Chez Canineo, nous croyons qu’un chien épanoui commence par une relation solide avec son humain. Notre mission : vous aider à guider et comprendre votre compagnon par des méthodes positives, cohérentes et adaptées.',
                'At Canineo, we believe a well-balanced dog begins with a strong bond between dog and human. Our mission is to help you guide and understand your companion through positive, consistent, and personalized methods.'
              )}
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Constance Vale</strong> — {t('fondatrice et éducatrice canine', 'Founder & Head Trainer')}. {t(
                'Spécialiste du comportement canin : chiots, chiens réactifs/agressifs et chiens d’assistance.',
                'Canine-behavior specialist: puppies, reactive/aggressive dogs, and service dogs.'
              )}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {t(
                'Nous intervenons à domicile et en milieu public dans la grande région de Montréal (Rive-Sud, Rive-Nord, Estrie).',
                'We work in-home and in public settings across Greater Montréal (South Shore, North Shore, Estrie).'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 px-4 md:px-8 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-4">{t('Nos services', 'Our Services')}</h3>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            {t(
              'Des programmes conçus pour répondre aux besoins de votre chien : du chiot au chien d’assistance, en douceur et avec constance.',
              'Programs designed to meet your dog’s needs — from puppies to service-dog preparation, with gentle consistency.'
            )}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                fr: { title: 'Dressage pour chiots', desc: 'Bases solides : socialisation, marche en laisse, propreté, obéissance de base.' },
                en: { title: 'Puppy Training', desc: 'Strong foundations: socialization, leash manners, house training, basic obedience.' },
                img: '[Puppy photo]',
              },
              {
                fr: { title: 'Chiens agressifs ou réactifs', desc: 'Rééducation progressive, désensibilisation et construction de la confiance.' },
                en: { title: 'Aggressive or Reactive Dogs', desc: 'Progressive rehabilitation, desensitization, and confidence building.' },
                img: '[Calm dog photo]',
              },
              {
                fr: { title: 'Chiens d’assistance', desc: 'Fiabilité et obéissance pour rôles d’assistance (mobilité, soutien émotionnel, thérapie).' },
                en: { title: 'Service Dogs', desc: 'Obedience & reliability for assistance roles (mobility, PTSD/ES, therapy).' },
                img: '[Service dog photo]',
              },
              {
                fr: { title: 'Test d’accès public (PAT)', desc: 'Préparation et évaluation selon les standards reconnus du Public Access Test.' },
                en: { title: 'Public Access Test (PAT)', desc: 'Preparation & evaluation per recognized Public Access Test standards.' },
                img: '[Dog in public setting photo]',
              },
            ].map((service, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl p-8 flex flex-col items-center text-center bg-green-50 hover:shadow-md hover:-translate-y-1 transition-transform">
                <div className="h-24 w-24 bg-gray-300 mb-6 rounded-full grid place-items-center text-xs text-gray-500">{service.img}</div>
                <p className="text-xl font-semibold mb-2">{t(service.fr.title, service.en.title)}</p>
                <p className="text-gray-600 text-sm mb-4">{t(service.fr.desc, service.en.desc)}</p>
                <a href="#contact" className="text-green-700 font-medium hover:underline">{t('Réserver une évaluation →', 'Book an evaluation →')}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-20 px-4 md:px-8 bg-green-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-4">{t('Notre parcours', 'Our Process')}</h3>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            {t('Un chemin clair, transparent et progressif — avec des ajustements selon l’évolution de votre chien.', 'Transparent, structured, and adaptable — with adjustments based on your dog’s progress.')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center">
            {[
              {
                fr: { title: 'Évaluation', desc: 'Observation du comportement et de vos objectifs. Compte rendu inclus.' },
                en: { title: 'Evaluation', desc: 'Observe behavior & goals. Written summary provided.' },
                img: '[Evaluation]',
              },
              {
                fr: { title: 'Plan', desc: 'Programme personnalisé : fréquence, objectifs, jalons, suivi.' },
                en: { title: 'Plan', desc: 'Tailored program: frequency, milestones, follow-up.' },
                img: '[Plan]',
              },
              {
                fr: { title: 'Séances', desc: 'Obéissance, socialisation, marche en laisse, travail en public.' },
                en: { title: 'Sessions', desc: 'Obedience, socialization, leash work, public exposure.' },
                img: '[Sessions]',
              },
              {
                fr: { title: 'Suivi', desc: 'Consolider les acquis, prévenir les rechutes, adapter le rythme.' },
                en: { title: 'Follow‑up', desc: 'Consolidate progress, prevent setbacks, adapt pacing.' },
                img: '[Follow-up]',
              },
              {
                fr: { title: 'Test d’accès public', desc: 'Évaluation complète du duo maître‑chien en conditions réelles.' },
                en: { title: 'Public Access Test', desc: 'Comprehensive team assessment in real public settings.' },
                img: '[PAT]',
              },
            ].map((s, i) => (
              <div key={i} className="p-6 border border-gray-200 rounded-2xl bg-white hover:shadow-md">
                <div className="h-14 w-14 bg-gray-300 rounded-full mx-auto mb-4 grid place-items-center text-xs text-gray-500">{s.img}</div>
                <p className="font-semibold text-lg mb-1">{t(s.fr.title, s.en.title)}</p>
                <p className="text-gray-600 text-sm">{t(s.fr.desc, s.en.desc)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-4 md:px-8 bg-white border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-10">FAQ</h3>
          <div className="space-y-6">
            {[
              { frQ: 'Quelle est la durée d’une séance ?', frA: 'Environ 60 minutes, selon le rythme du chien.', enQ: 'How long is each session?', enA: 'About 60 minutes, depending on your dog’s pace.' },
              { frQ: 'Proposez-vous des forfaits ?', frA: 'Oui : évaluation seule, plan 5 séances, ou programme complet avec Test d’accès.', enQ: 'Do you offer packages?', enA: 'Yes: single evaluation, 5-session plan, or full program with Public Access Test.' },
              { frQ: 'Travaillez-vous avec toutes les races ?', frA: 'Absolument — les méthodes s’adaptent à chaque tempérament.', enQ: 'Do you train all breeds?', enA: 'Absolutely — our methods adapt to every temperament.' },
              { frQ: 'Vous déplacez‑vous ?', frA: 'Oui, à domicile ou en lieu public selon le programme.', enQ: 'Do you travel?', enA: 'Yes, in‑home or public‑space sessions depending on the program.' },
              { frQ: 'Utilisez‑vous des punitions ?', frA: 'Non. Renforcement positif et gestion du comportement uniquement.', enQ: 'Do you use punitive methods?', enA: 'No. We use positive reinforcement and behavior management only.' },
            ].map((qa, i) => (
              <details key={i} className="group border border-gray-200 rounded-xl p-4">
                <summary className="cursor-pointer flex items-center justify-between">
                  <span className="font-medium">{t(qa.frQ, qa.enQ)}</span>
                  <span className="text-xl leading-none group-open:rotate-45 transition">+</span>
                </summary>
                <p className="mt-3 text-gray-600">{t(qa.frA, qa.enA)}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT with Netlify Forms */}
      <section id="contact" className="py-24 bg-green-50 px-4 md:px-8 border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-6">{t('Contact', 'Get in touch')}</h3>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
            {t('Discutons des besoins de votre chien. Remplissez le formulaire ou écrivez‑nous directement.', 'Let’s talk about your dog’s goals. Fill out the form or contact us directly.')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" className="bg-white border border-gray-200 rounded-xl p-6 grid gap-4">
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>Don’t fill this out: <input name="bot-field" /></label>
              </p>
              <input className="border rounded px-3 py-2" name="name" placeholder={t('Nom complet', 'Full name')} required />
              <input className="border rounded px-3 py-2" name="email" type="email" placeholder="Email" required />
              <input className="border rounded px-3 py-2" name="phone" placeholder={t('Téléphone', 'Phone')} />
              <input className="border rounded px-3 py-2" name="dog" placeholder={t('Nom et âge du chien', 'Dog’s name & age')} />
              <input className="border rounded px-3 py-2" name="service" placeholder={t('Service recherché', 'Service of interest')} />
              <textarea className="border rounded px-3 py-2 h-28" name="message" placeholder={t('Message', 'Message')} />
              <button className="bg-green-700 text-white px-5 py-2 rounded hover:bg-green-800 w-max" type="submit">{t('Envoyer', 'Send')}</button>
            </form>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <p className="mb-2"><strong>Email:</strong> info@canineo.ca</p>
              <p className="mb-2"><strong>{t('Téléphone', 'Phone')}:</strong> (514) 000-0000</p>
              <p className="mb-2"><strong>{t('Région', 'Region')}:</strong> {t('Montréal, Rive‑Sud, Rive‑Nord, Estrie', 'Greater Montréal, South & North Shore, Estrie')}</p>
              <div className="h-40 mt-4 bg-gray-100 rounded grid place-items-center text-gray-500 text-sm">[Map placeholder]</div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-gray-300 py-8 text-center text-sm text-gray-500">
        <p>© 2025 Canineo. {t('Tous droits réservés.', 'All rights reserved.')}</p>
        <p>info@canineo.ca | (514) 000-0000</p>
      </footer>
    </div>
  )
}
