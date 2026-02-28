import { useState } from "react";
import { Helmet } from "react-helmet-async";
import * as C from "./config";

function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return <span className="text-amber-500">{"★".repeat(full)}{half ? "½" : ""}{"☆".repeat(5 - full - (half ? 1 : 0))}</span>;
}

function Accordion({ title, children, open, onClick }: { title: string; children: React.ReactNode; open: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-[#e8ddd4]">
      <button onClick={onClick} className="w-full flex justify-between items-center py-4 text-left font-semibold text-[#1a2744] hover:text-amber-700 transition-colors">
        <span>{title}</span>
        <span className="text-xl">{open ? "−" : "+"}</span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[2000px] pb-4" : "max-h-0"}`}>
        {children}
      </div>
    </div>
  );
}

export default function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const getProductImage = (p: typeof C.RANK_PRODUCTS[0]) => {
    if (p.rank === 1) return C.CDN_EDITOR_CHOICE;
    return C.PDP_HERO_1; // fallback
  };

  const getCtaUrl = (p: typeof C.RANK_PRODUCTS[0]) => {
    return p.ctaUrl === "PDP" ? C.PDP_URL : p.ctaUrl;
  };

  return (
    <>
      <Helmet>
        <title>{C.RANK_META_TITLE}</title>
        <meta name="description" content={C.RANK_META_DESC} />
        <meta property="og:title" content={C.RANK_META_TITLE} />
        <meta property="og:description" content={C.RANK_META_DESC} />
        <meta property="og:image" content={C.RANK_HERO_LINEUP} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="min-h-screen bg-[#FAF6F1] text-gray-900" style={{ fontFamily: "Inter, sans-serif" }}>
        {/* ── S1: Publication Header ── */}
        <header className="bg-white border-b border-[#e8ddd4]">
          <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
            <img src={C.RANK_PUBLICATION_LOGO} alt={C.RANK_PUBLICATION_NAME} className="h-10 md:h-12" />
            <span className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest">Sponsored Advertising Content</span>
          </div>
          <div className="bg-[#1a2744] text-white text-xs py-2">
            <div className="max-w-5xl mx-auto px-4 flex justify-between">
              <span>Latest update: February 2026</span>
              <span className="hidden md:inline">ADVERTISER DISCLOSURE | HOW WE RANK</span>
            </div>
          </div>
        </header>

        {/* ── S2: Hero ── */}
        <section className="max-w-4xl mx-auto px-4 pt-10 pb-6">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight text-[#1a2744] mb-6" style={{ fontFamily: "Georgia, serif" }}>
            {C.RANK_H1.split("\n").map((line, i) => <span key={i}>{line}<br /></span>)}
          </h1>
          <div className="flex flex-wrap gap-3 mb-6">
            {[{ label: "Benefits", id: "benefits" }, { label: "Technology", id: "criteria" }, { label: "Our Choice 2026", id: "products" }].map(p => (
              <button key={p.id} onClick={() => scrollTo(p.id)}
                className="bg-white border border-[#d4c5b3] text-[#1a2744] text-sm font-medium px-4 py-2 rounded-full hover:bg-amber-50 transition-colors">
                {p.label}
              </button>
            ))}
          </div>
          <div className="text-gray-700 leading-relaxed space-y-4 text-[15px]">
            {C.RANK_INTRO.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </section>

        {/* ── S3: Hero Product Lineup ── */}
        <section className="max-w-5xl mx-auto px-4 py-6">
          <img src={C.RANK_HERO_LINEUP} alt="Top 5 LED face masks compared" className="w-full rounded-xl shadow-sm" />
        </section>

        {/* ── S4: Benefits/Education ── */}
        <section id="benefits" className="max-w-4xl mx-auto px-4 py-10">
          <h2 className="text-2xl font-bold text-[#1a2744] mb-6" style={{ fontFamily: "Georgia, serif" }}>
            Potential Benefits of Red Light Therapy for Skin*
          </h2>
          <ul className="space-y-4 mb-8">
            {C.RANK_BENEFITS.map((b, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-green-600 mt-1 shrink-0">●</span>
                <div>
                  <span className="font-semibold">{b.title}</span>
                  <span className="text-gray-600"> — {b.desc}</span>
                </div>
              </li>
            ))}
          </ul>
          <h3 className="text-xl font-bold text-[#1a2744] mb-4" style={{ fontFamily: "Georgia, serif" }}>
            Why Dual-Wavelength Therapy Matters
          </h3>
          <div className="text-gray-700 leading-relaxed space-y-4 text-[15px]">
            {C.RANK_DUAL_WAVELENGTH_EDUCATION.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </section>

        {/* ── S5: Criteria Table ── */}
        <section id="criteria" className="max-w-5xl mx-auto px-4 py-10">
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white rounded-xl p-6 border border-green-200">
              <h3 className="text-lg font-bold text-green-700 mb-4" style={{ fontFamily: "Georgia, serif" }}>What to Look For ✅</h3>
              <ul className="space-y-2 text-sm">
                {C.RANK_LOOK_FOR.map((item, i) => (
                  <li key={i} className="flex gap-2"><span className="text-green-600 shrink-0">✅</span><span>{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 border border-red-200">
              <h3 className="text-lg font-bold text-red-700 mb-4" style={{ fontFamily: "Georgia, serif" }}>What to Avoid ❌</h3>
              <ul className="space-y-2 text-sm">
                {C.RANK_AVOID.map((item, i) => (
                  <li key={i} className="flex gap-2"><span className="text-red-500 shrink-0">❌</span><span>{item}</span></li>
                ))}
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-bold text-[#1a2744] mb-4" style={{ fontFamily: "Georgia, serif" }}>
            How the Top 5 Compare on Key Criteria
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl border border-[#e8ddd4] text-sm">
              <thead>
                <tr className="bg-[#1a2744] text-white">
                  {C.RANK_CRITERIA_TABLE.headers.map((h, i) => (
                    <th key={i} className={`py-3 px-3 text-left font-medium ${i === 0 ? "sticky left-0 bg-[#1a2744] z-10" : ""}`}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {C.RANK_CRITERIA_TABLE.rows.map((row, ri) => (
                  <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    {row.map((cell, ci) => (
                      <td key={ci} className={`py-2.5 px-3 ${ci === 0 ? "font-medium sticky left-0 bg-inherit z-10" : "text-center"} ${ci === 1 ? "text-green-700 font-semibold" : ""}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── S6: Product Cards ── */}
        <section id="products" className="max-w-4xl mx-auto px-4 py-10">
          <h2 className="text-2xl font-bold text-[#1a2744] mb-8" style={{ fontFamily: "Georgia, serif" }}>
            The 5 Best Red Light Therapy LED Face Masks of 2026
          </h2>
          <div className="space-y-8">
            {C.RANK_PRODUCTS.map((p) => (
              <div key={p.rank} className={`bg-white rounded-xl border ${p.highlight ? "border-amber-400 shadow-lg ring-2 ring-amber-200" : "border-[#e8ddd4]"} overflow-hidden`}>
                {p.highlight && (
                  <div className="bg-amber-500 text-white text-center text-sm font-bold py-2">
                    🏆 EDITOR'S CHOICE 2026
                  </div>
                )}
                <div className="flex flex-col md:flex-row p-6 gap-6">
                  <div className="md:w-48 shrink-0">
                    <div className="bg-gray-50 rounded-lg p-2 flex items-center justify-center">
                      <img src={getProductImage(p)} alt={p.name} className="max-h-48 object-contain" />
                    </div>
                    <div className="text-center mt-3">
                      <span className="text-2xl font-extrabold text-[#1a2744]">#{p.rank}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#1a2744]" style={{ fontFamily: "Georgia, serif" }}>{p.name}</h3>
                    <p className="text-sm text-gray-500 mb-2">by {p.brand}</p>
                    <div className="flex items-center gap-3 mb-3">
                      <Stars rating={p.rating} />
                      <span className="text-sm font-medium">{p.rating}/5</span>
                      <span className="text-lg font-bold text-[#1a2744]">{p.price}</span>
                      {p.compareAt && <span className="text-sm text-gray-400 line-through">{p.compareAt}</span>}
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="text-xs font-bold text-green-700 uppercase mb-1">Pros</h4>
                        <ul className="text-sm space-y-1">
                          {p.pros.map((pro, i) => <li key={i} className="flex gap-1.5"><span className="text-green-600 shrink-0">+</span><span>{pro}</span></li>)}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-red-700 uppercase mb-1">Cons</h4>
                        <ul className="text-sm space-y-1">
                          {p.cons.map((con, i) => <li key={i} className="flex gap-1.5"><span className="text-red-500 shrink-0">−</span><span>{con}</span></li>)}
                        </ul>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 mb-4"><strong>Bottom Line:</strong> {p.bottomLine}</p>
                    <a href={getCtaUrl(p)}
                      className={`inline-block font-bold py-3 px-8 rounded-lg text-sm transition-colors ${
                        p.highlight
                          ? "bg-amber-500 hover:bg-amber-600 text-white shadow-md"
                          : "bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300"
                      }`}>
                      {p.ctaText}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── S7: Deep Dive ── */}
        <section className="bg-white py-12">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-[#1a2744] mb-6" style={{ fontFamily: "Georgia, serif" }}>
              Why We Chose LumiVeil Pro™ as Best Overall LED Face Mask
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-4 text-[15px]">
              {C.RANK_DEEP_DIVE.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <div className="mt-8 text-center">
              <a href={C.PDP_URL} className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-md">
                Check Price at Little Miss Mineral →
              </a>
            </div>
          </div>
        </section>

        {/* ── S8: Education ── */}
        <section className="max-w-4xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-[#1a2744] mb-6" style={{ fontFamily: "Georgia, serif" }}>
            What Is Red Light Therapy?
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4 text-[15px] mb-8">
            {C.RANK_EDUCATION_WHAT_IS.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <h3 className="text-lg font-bold text-[#1a2744] mb-4" style={{ fontFamily: "Georgia, serif" }}>Types of Light Used in LED Masks</h3>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl border border-[#e8ddd4] text-sm">
              <thead>
                <tr className="bg-[#1a2744] text-white">
                  <th className="py-3 px-4 text-left">Light Type</th>
                  <th className="py-3 px-4 text-left">Wavelength</th>
                  <th className="py-3 px-4 text-left">Penetration</th>
                  <th className="py-3 px-4 text-left">Primary Benefit</th>
                </tr>
              </thead>
              <tbody>
                {C.RANK_LIGHT_TYPES.map((lt, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="py-2.5 px-4 font-medium">{lt.type}</td>
                    <td className="py-2.5 px-4">{lt.wavelength}</td>
                    <td className="py-2.5 px-4">{lt.penetration}</td>
                    <td className="py-2.5 px-4">{lt.benefit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── S9: Buyer's Guide ── */}
        <section className="bg-white py-12">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-[#1a2744] mb-8" style={{ fontFamily: "Georgia, serif" }}>
              How to Choose an LED Face Mask: A Buyer's Guide
            </h2>
            <div className="space-y-6">
              {C.RANK_BUYERS_GUIDE.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <span className="bg-amber-100 text-amber-700 font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-sm">{i + 1}</span>
                  <div>
                    <h3 className="font-bold text-[#1a2744] mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-700">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── S10: FAQ ── */}
        <section className="max-w-3xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-[#1a2744] mb-8 text-center" style={{ fontFamily: "Georgia, serif" }}>
            Frequently Asked Questions
          </h2>
          {C.RANK_FAQS.map((f, i) => (
            <Accordion key={i} title={f.q} open={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
              <p className="text-sm text-gray-700">{f.a}</p>
            </Accordion>
          ))}
        </section>

        {/* ── S11: References ── */}
        <section className="bg-white py-10">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-lg font-bold text-[#1a2744] mb-4" style={{ fontFamily: "Georgia, serif" }}>References</h2>
            <ol className="text-xs text-gray-500 space-y-1.5">
              {C.RANK_REFERENCES.map((ref, i) => <li key={i}>{ref}</li>)}
            </ol>
          </div>
        </section>

        {/* ── S12: Final CTA ── */}
        <section className="py-12">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-[#1a2744] mb-4" style={{ fontFamily: "Georgia, serif" }}>
              Ready to Try the #1-Rated LED Face Mask of 2026?
            </h2>
            <p className="text-gray-600 mb-2">
              The LumiVeil Pro™ delivers clinical-grade dual-wavelength therapy at $249 — with wireless freedom, medical-grade silicone comfort, and a 60-day results guarantee.
            </p>
            <p className="text-sm text-amber-700 font-semibold mb-6">Use code SECRET25 for an extra $25 off your first order.</p>
            <a href={C.PDP_URL}
              className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-10 rounded-lg text-lg transition-colors shadow-lg">
              Visit Little Miss Mineral → Check Price
            </a>
          </div>
        </section>

        {/* ── S13: Footer ── */}
        <footer className="bg-[#1a2744] text-gray-400 py-8">
          <div className="max-w-5xl mx-auto px-4 text-center text-[11px] space-y-3">
            <p>{C.RANK_DISCLAIMER}</p>
            <p>© {new Date().getFullYear()} {C.RANK_PUBLICATION_NAME}. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
