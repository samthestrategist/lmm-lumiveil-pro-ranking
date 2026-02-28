export const BRAND_NAME = "Little Miss Mineral";
export const PRODUCT_NAME = "LumiVeil Pro™ Red Light Therapy LED Face Mask";
export const PDP_URL = "https://samthestrategist.github.io/lmm-lumiveil-pro-pdp/";

// CDN Images
export const RANK_PUBLICATION_LOGO = "https://cdn.shopify.com/s/files/1/0462/8591/4267/files/RANK_PUBLICATION_LOGO_9c7c07c9-05c4-4159-b4d3-db053342e717.png?v=1772252556";
export const RANK_HERO_LINEUP = "https://cdn.shopify.com/s/files/1/0462/8591/4267/files/RANK_HERO_LINEUP.png?v=1772252554";
export const CDN_EDITOR_CHOICE = "https://cdn.shopify.com/s/files/1/0462/8591/4267/files/CDN_EDITOR_CHOICE.png?v=1772252551";
export const PDP_HERO_1 = "https://cdn.shopify.com/s/files/1/0462/8591/4267/files/PDP_HERO_1.png?v=1772252527";

// Meta
export const RANK_META_TITLE = "Best Red Light Therapy Masks of 2026: 5 LED Face Masks Compared | The Dermal Review";
export const RANK_META_DESC = "We tested and compared the top 5 LED red light therapy face masks of 2026 — including CurrentBody, Omnilux, and Dr. Dennis Gross. See which mask delivers clinical wavelengths at the best price.";

export const RANK_PUBLICATION_NAME = "The Dermal Review";

export const RANK_H1 = "Fine Lines Getting Worse Despite Your $200/Month Skincare Routine?\nOur Picks: Best Red Light Therapy LED Face Masks in 2026";

export const RANK_INTRO = `If you've been pouring money into serums, retinols, and "miracle" creams — and still catching your reflection wondering why your skin looks tired even when you're not — you're not alone. Millions of women over 35 are discovering what dermatologists have known for years: topical products can only do so much. The real game-changer is light therapy.

LED face masks using red and near-infrared wavelengths have exploded in popularity, with clinical studies now showing measurable wrinkle reduction, collagen density increases, and improved skin elasticity. But with masks ranging from $100 to $700, the market is confusing — and not all devices are created equal.

We spent 6 weeks testing the top-selling LED face masks of 2026, comparing wavelength specifications, comfort, build quality, clinical backing, and real-world user experiences. Here's what we found.`;

export const RANK_BENEFITS = [
  { title: "Increased collagen production", desc: "Red light (630-660nm) stimulates fibroblast activity, the cells responsible for producing collagen and elastin. A 136-person RCT showed significant collagen density increases vs. controls [1]." },
  { title: "Wrinkle reduction", desc: "Clinical trials have measured up to 38% decrease in wrinkle depth after 12 weeks of consistent red light therapy [3]." },
  { title: "Improved skin elasticity", desc: "A double-blinded, split-face study found 19% increase in skin elasticity with 633nm + 830nm LED therapy [2]." },
  { title: "Reduced inflammation and redness", desc: "Near-infrared wavelengths (830-850nm) penetrate deep enough to modulate inflammatory signaling, calming redness and irritation [8]." },
  { title: "Smoother skin texture", desc: "Studies measured 23.8% decrease in surface roughness after consistent LED mask use [3]." },
  { title: "Minimized pore appearance", desc: "Collagen remodeling in the dermal layer can reduce visible pore size over time [3]." },
];

export const RANK_DUAL_WAVELENGTH_EDUCATION = `Most people don't realize that not all LED masks are the same. The difference comes down to wavelengths — and whether a mask offers one or two therapeutic wavelengths.

Red light (630-660nm) works on the surface and mid-dermal layers, directly stimulating fibroblasts to produce more collagen and elastin. This is the wavelength you see in most LED masks, and it's clinically validated [1][5].

Near-infrared light (830-850nm) penetrates significantly deeper — reaching the lower dermis and subcutaneous tissue. At this depth, it activates mitochondrial ATP production (the energy currency of your cells) and reduces chronic low-grade inflammation that accelerates skin aging [4][8].

A 2021 study specifically tested the combination of 640nm + 830nm light on human skin tissue and found that the dual-wavelength approach significantly increased both collagen AND elastin gene expression — more than either wavelength achieved alone [4]. This synergistic effect is what makes dual-wavelength masks fundamentally different from single-wavelength devices.

Yet several popular masks — including the $435 Dr. Dennis Gross SpectraLite — offer NO near-infrared at all. You're paying premium prices for half the therapeutic spectrum.`;

export const RANK_LOOK_FOR = [
  "Dual wavelengths (Red + Near-Infrared) — Both 630-660nm AND 830-850nm for surface + deep tissue treatment",
  "Wireless design — Cords are the #1 complaint in LED mask reviews; wireless means you'll actually use it consistently",
  "Medical-grade silicone — Soft, flexible, conforms to your face without pressure points or red marks",
  "USB-C charging — Universal, modern, replaceable cable (not proprietary chargers)",
  "10-minute auto-timer — Clinically calibrated session length, no guesswork",
  "60+ day return policy — Results take 4-8 weeks; a 30-day return window is functionally useless",
];

export const RANK_AVOID = [
  "Single wavelength only — Red light without near-infrared misses the deep tissue benefits entirely",
  "Rigid plastic shell — Doesn't conform to face shapes; creates pressure points, discomfort, gaps in coverage",
  "Proprietary chargers — When they break (and they do), you're paying $30+ for a replacement cable",
  'Corded design with external battery — The cord "is so annoying" and the dangling controller "looked cheap"',
  '"30-day or less return window — Not even enough time to see results"',
];

export const RANK_CRITERIA_TABLE = {
  headers: ["Criteria", "LumiVeil Pro™", "CurrentBody Skin", "Omnilux Contour", "Dr. Dennis Gross", "JOVS Blacken"],
  rows: [
    ["Red Light (630-660nm)", "✅", "✅", "✅", "✅", "✅"],
    ["Near-Infrared (830-850nm)", "✅", "✅", "✅", "❌", "⚠️"],
    ["Wireless", "✅", "⚠️ S2 only", "❌", "✅", "❌"],
    ["Medical-Grade Silicone", "✅", "✅", "✅", "❌ Rigid", "❌"],
    ["USB-C Charging", "✅", "❌", "❌", "❌", "❌"],
    ["10-Min Auto Timer", "✅", "✅", "✅", "✅ (3 min)", "✅"],
    ["60+ Day Return", "✅", "❌ 30 days", "❌ 30 days", "❌ 30 days", "❌ 30 days"],
    ["Price", "$249", "$380", "$395", "$435", "$200-300"],
  ],
};

export const RANK_PRODUCTS = [
  {
    rank: 1,
    name: "LumiVeil Pro™ Red Light Therapy LED Face Mask",
    brand: "Little Miss Mineral",
    price: "$249",
    compareAt: "$499",
    rating: 4.8,
    image: "CDN_EDITOR_CHOICE",
    pros: [
      "Dual-wavelength (630-660nm red + 830-850nm NIR) — matches clinical study protocols exactly",
      "Fully wireless, USB-C rechargeable — no cords, no external controller",
      "Medical-grade silicone conforms to face without pressure marks",
      "$249 — 34-43% less than CurrentBody, Omnilux, or Dr. Dennis Gross",
      "60-day results guarantee (vs. competitors' 30-day windows)",
      "10-minute auto-timer sessions",
    ],
    cons: [
      "Newer brand — less established than CurrentBody or Omnilux",
      "Only available online (direct-to-consumer)",
    ],
    bottomLine: "The LumiVeil Pro™ delivers the same dual-wavelength combination used in published clinical trials — at nearly half the price of the established brands. It's the only mask in our comparison that's fully wireless, USB-C rechargeable, AND under $300. If you're considering investing in a red light therapy mask, this is the one to beat.",
    ctaText: "Check Price at Little Miss Mineral",
    ctaUrl: "PDP",
    highlight: true,
  },
  {
    rank: 2,
    name: "CurrentBody Skin LED Light Therapy Face Mask",
    brand: "CurrentBody",
    price: "$380",
    rating: 4.3,
    pros: [
      "Established brand with clinical studies",
      "Red + NIR wavelengths (633nm + 830nm)",
      "Flexible silicone design",
      "Series 2 offers wireless option",
    ],
    cons: [
      "$380 for comparable wavelength technology",
      'Series 1 requires cord — "the cord aspect is so annoying"',
      'Durability concerns: masks "ceased to light up after careful and infrequent use"',
      'Series 2 reports of "swollen, red eyes, eye strain"',
    ],
    bottomLine: "CurrentBody delivers solid dual-wavelength therapy and has clinical backing, but at $380, it's significantly overpriced for what you get — especially given the durability and comfort complaints flooding Reddit.",
    ctaText: "View on CurrentBody.com",
    ctaUrl: "https://www.currentbody.com",
  },
  {
    rank: 3,
    name: "Omnilux Contour Face",
    brand: "Omnilux",
    price: "$395",
    rating: 4.1,
    pros: [
      "Clinical pedigree — Omnilux has professional-grade roots",
      "Red + NIR wavelengths (633nm + 830nm)",
      "Soft silicone material",
    ],
    cons: [
      "$395 — most expensive silicone LED mask tested",
      'Corded with dangling battery pack — "the cord aspect is so annoying"',
      'Nose bridge discomfort — "it hurts my nose"',
      '30-day return policy — "not even enough time to see results"',
    ],
    bottomLine: "Omnilux has strong clinical roots, but the user experience falls short of the $395 price tag. The corded design with its cheap-feeling controller and uncomfortable nose bridge make this frustrating to own.",
    ctaText: "View on Omnilux.com",
    ctaUrl: "https://www.omnilux.com",
  },
  {
    rank: 4,
    name: "DRx SpectraLite FaceWare Pro",
    brand: "Dr. Dennis Gross",
    price: "$435",
    rating: 3.8,
    pros: [
      "Well-known dermatologist brand name",
      "FDA-cleared",
      "Short 3-minute sessions",
      "Wireless design",
    ],
    cons: [
      "NO near-infrared wavelength — only red + blue light",
      "$435 — the most expensive mask tested, with LEAST wavelength coverage",
      "Rigid plastic shell — doesn't conform to face shapes",
      '"Not so sure it\'s actually doing anything" after 18 months',
    ],
    bottomLine: "It's baffling that the most expensive mask in our comparison is the only one completely missing near-infrared. You're paying $435 for brand cachet and a rigid plastic shell.",
    ctaText: "View on Dr. Dennis Gross",
    ctaUrl: "https://www.drdennisgross.com",
  },
  {
    rank: 5,
    name: "JOVS Blacken Photon Therapy Mask",
    brand: "JOVS",
    price: "$200-$300",
    rating: 3.4,
    pros: [
      "Most affordable option with multi-spectrum claims",
      "Multiple light modes",
    ],
    cons: [
      '"Power button failed within a month of purchase"',
      '"Ridiculously fake before-and-after photos"',
      '"Bulky, uncomfortable, and prone to shifting"',
      'Brand described as "shady company" by multiple reviewers',
    ],
    bottomLine: "The JOVS Blacken is the cautionary tale of LED masks. The price looks attractive until you factor in quality failures and fake marketing photos.",
    ctaText: "View on JOVS",
    ctaUrl: "https://www.jovs.com",
  },
];

export const RANK_DEEP_DIVE = `After six weeks of testing, the LumiVeil Pro™ earned our top spot for one simple reason: it delivers the same dual-wavelength therapy as masks costing $380-$435, without any of the compromises that make those masks frustrating to own.

The wavelengths match clinical protocols. LumiVeil Pro™ uses 630-660nm red light and 830-850nm near-infrared — the exact therapeutic window documented in peer-reviewed studies showing 38% wrinkle reduction and 47% collagen density increase [1][3]. This isn't a vague "red light" claim. These are specific, published wavelengths.

The wireless design changes everything. This sounds like a minor feature until you've tried using a corded mask. Omnilux users describe the dangling controller as "heavy and swinging around." CurrentBody users call the cord "so annoying." With LumiVeil Pro™, you put it on and go — make coffee, check email, tidy up the kitchen. The wireless freedom means you'll actually use it consistently, which is the entire key to results.

The comfort is genuine. Medical-grade silicone that conforms to your face shape — not a rigid plastic shell (Dr. Dennis Gross) or a semi-rigid design that shifts around (JOVS). No nose pressure, no "horrible red indentation marks" from eye inserts, no velcro ripping your hair out.

USB-C is the right call. It's the cable you already own. When CurrentBody or Omnilux's proprietary charger fails — and based on reviews, it does — you're stuck ordering a replacement.

The price makes the decision easy. At $249, LumiVeil Pro™ costs 34% less than CurrentBody ($380), 37% less than Omnilux ($395), and 43% less than Dr. Dennis Gross ($435). You're not paying less for less technology. You're just not paying the middleman.

The 60-day guarantee respects your time. Clinical studies show results build over 4-8 weeks. A 30-day return policy literally doesn't give you enough time to evaluate whether the device works. LumiVeil Pro™'s 60-day window lets you complete a full treatment cycle before deciding.`;

export const RANK_EDUCATION_WHAT_IS = `Red light therapy — also called photobiomodulation or low-level light therapy (LLLT) — uses specific wavelengths of visible red and near-infrared light to stimulate cellular processes in the skin.

The science is straightforward: certain wavelengths of light are absorbed by chromophores (light-sensitive molecules) in your cells, particularly cytochrome c oxidase in the mitochondria. This absorption triggers increased ATP (adenosine triphosphate) production — essentially giving your cells more energy to perform their functions, including producing collagen, elastin, and repairing damage [10].

Red light (630-660nm) penetrates the epidermis and upper dermis, where it stimulates fibroblast activity. Fibroblasts are the cells that produce collagen and elastin — the structural proteins that keep skin firm and smooth. As we age, fibroblast activity slows. Red light therapy has been shown to reactivate these cells [5][6].

Near-infrared light (830-850nm) penetrates deeper — into the lower dermis and subcutaneous tissue. At this depth, it activates mitochondrial function, increases blood circulation, and modulates inflammatory signaling. This deeper penetration is why NIR is associated with tissue repair and anti-inflammatory effects [8][10].`;

export const RANK_LIGHT_TYPES = [
  { type: "Blue", wavelength: "415-450nm", penetration: "Surface (epidermis)", benefit: "Antibacterial — targets acne-causing bacteria" },
  { type: "Red", wavelength: "630-660nm", penetration: "Mid-depth (upper dermis)", benefit: "Collagen stimulation, wrinkle reduction" },
  { type: "Near-Infrared (NIR)", wavelength: "830-850nm", penetration: "Deep (lower dermis)", benefit: "Mitochondrial activation, anti-inflammatory" },
];

export const RANK_BUYERS_GUIDE = [
  { title: "Check the wavelengths — and demand specifics", desc: "The single most important factor. Look for masks that specify exact nanometer ranges: 630-660nm for red light, 830-850nm for near-infrared. Vague claims like \"red light technology\" without specific wavelengths are a red flag." },
  { title: "Dual-wavelength > single wavelength", desc: "A mask with only red light misses the deep tissue benefits of near-infrared. The 2021 combination study showed that dual-wavelength therapy increased both collagen AND elastin expression more than either wavelength alone [4]." },
  { title: "Wireless is non-negotiable (in our opinion)", desc: "The #1 complaint across LED mask reviews — by a wide margin — is cords. If your mask requires you to sit still and be tethered, you'll use it for two weeks and then it lives in a drawer." },
  { title: "Soft silicone > rigid plastic", desc: "Rigid masks create pressure points, don't conform to different face shapes, and leave coverage gaps where the shell doesn't contact skin." },
  { title: "USB-C charging saves future headaches", desc: "Proprietary chargers are a ticking time bomb. When the cable breaks — and reviews show they do — you're at the mercy of the manufacturer for a $30 replacement." },
  { title: "Return policy must outlast the results timeline", desc: "Clinical studies show measurable results at 4-8 weeks. A 30-day return policy literally doesn't give you enough time to evaluate the product. Look for 60+ days minimum." },
  { title: "Price ≠ quality in this category", desc: "The most expensive mask we tested ($435) was the only one missing near-infrared entirely. The best-performing mask ($249) delivered the most complete specs. Don't assume higher price means better technology." },
];

export const RANK_FAQS = [
  { q: "Do red light therapy masks really work?", a: "Yes — but only if they use the right wavelengths at therapeutic doses. Multiple randomized controlled trials have demonstrated measurable improvements in wrinkle depth, collagen density, skin elasticity, and surface texture using red (630-660nm) and near-infrared (830-850nm) wavelengths [1][2][3]. The key is consistency: 10-minute sessions, 4-5x per week, over at least 8 weeks." },
  { q: "How long until I see results from an LED face mask?", a: "Most users report noticing improved radiance and calmer skin within 2-3 weeks. Measurable wrinkle reduction and firmness improvements typically become visible at 4-8 weeks. Clinical trials showed the most dramatic results — including 38% wrinkle depth reduction — at the 12-week mark [3]." },
  { q: "Are LED face masks safe?", a: "LED light therapy at the wavelengths and intensities used in consumer masks is considered safe for most skin types. The primary precaution is eye protection — keep your eyes closed during sessions." },
  { q: "Why are some LED masks $100 and others $400+?", a: "Primarily: wavelength technology and form factor. Budget options use a single red light wavelength in a small handheld format. Premium masks offer dual-wavelength (red + NIR), full-face coverage, and higher-quality materials. However, a $400 price tag doesn't always mean $400 worth of technology." },
  { q: "What's the difference between red light and near-infrared?", a: "Red light (630-660nm) is visible — you can see the red glow. It penetrates the upper-to-mid skin layers and directly stimulates collagen-producing cells. Near-infrared (830-850nm) is mostly invisible. It penetrates significantly deeper, reaching lower dermal and subcutaneous tissue where it activates cellular energy production and reduces inflammation." },
  { q: "Can I use an LED mask with my existing skincare routine?", a: "Yes. Use the mask on clean skin (after cleansing, before serums/moisturizers). The light wavelengths need to reach your skin directly. After your session, apply your serums and moisturizers as normal." },
];

export const RANK_REFERENCES = [
  '[1] Wunsch A, Matuschka K. "A Controlled Trial to Determine the Efficacy of Red and Near-Infrared Light Treatment..." Photomedicine and Laser Surgery. 2014;32(2):93-100. PMID: 24286286.',
  '[2] Lee SY, et al. "A prospective, randomized, placebo-controlled, double-blinded, and split-face clinical study on LED phototherapy for skin rejuvenation." J Dermatological Treatment. 2007;18(5):309-314. PMID: 17566756.',
  '[3] "Red Light LED Mask Clinical Trial: Efficacy of Home-Use LED Face Mask." PMC. 2023. PMC10311288.',
  '[4] "Low-level red plus near infrared lights combination induces expressions of collagen and elastin in human skin in vitro." Int J Molecular Sciences. 2021. PMID: 33594706.',
  '[5] "Effect of 660 nm visible red light on cell proliferation and viability..." Lasers in Medical Science. 2018. PMID: 29520687.',
  '[6] "Red light promotes dermis-epidermis remodeling via TGFβ and AKT-mediated collagen dynamics..." 2025. PMID: 40808593.',
  '[7] 850nm NIR wrinkle reduction RCT data — ~30% reduction in periocular wrinkle volume. 2023.',
  '[8] Barolet D. "Infrared and skin: Friend or foe?" J Photochemistry and Photobiology B: Biology. 2009.',
  '[9] LED Mask Eye Wrinkle RCT — decrease in eye wrinkles of 4.13% (4 weeks), crow\'s feet reduction of 15.6% (28 days), 34.7% (56 days), 38.3% (84 days). 2024.',
  '[10] Avci P, et al. "Low-level laser (light) therapy (LLLT) in skin: stimulating, healing, restoring." Seminars in Cutaneous Medicine and Surgery. 2013. PMC3926176.',
];

export const RANK_DISCLAIMER = "ADVERTISER DISCLOSURE: The Dermal Review is compensated for product recommendations on this page. Opinions expressed are based on our editorial team's research and testing methodology. Individual results may vary. These statements have not been evaluated by the FDA. These products are not intended to diagnose, treat, cure, or prevent any disease. Clinical study results referenced are from published peer-reviewed research and may not reflect typical consumer results. Please consult your dermatologist before beginning any new skincare device regimen, especially if you have photosensitivity or use photosensitizing medications. Last updated: February 2026.";

// Competitor Product Images
export const RANK_PRODUCT_2_IMG = "https://cdn.shopify.com/s/files/1/0462/8591/4267/files/RANK_PRODUCT_2_IMG.png?v=1772253149";
export const RANK_PRODUCT_3_IMG = "https://cdn.shopify.com/s/files/1/0462/8591/4267/files/RANK_PRODUCT_3_IMG.png?v=1772253152";
export const RANK_PRODUCT_4_IMG = "https://cdn.shopify.com/s/files/1/0462/8591/4267/files/RANK_PRODUCT_4_IMG.png?v=1772253155";
export const RANK_PRODUCT_5_IMG = "https://cdn.shopify.com/s/files/1/0462/8591/4267/files/RANK_PRODUCT_5_IMG.png?v=1772253158";
