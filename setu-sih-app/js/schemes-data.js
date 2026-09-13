/**
 * Setu 2.0 - Verified Government Scheme Database
 * SIH 2026 Problem Statement 92 (Ministry of Social Justice & Empowerment)
 * 
 * High-Precision Sector & Quantum Tagging:
 * - Manufacturing: Industrial fabrication, machinery, processing units, workshops
 * - Services: Commercial transport, sanitation equipment, IT, logistics, repair hubs, diagnostic clinics
 * - Trading: Retail stores, wholesale distribution, inventory stock
 * - Agri-Allied: Food processing, cold storage, dairy, fisheries, poultry, agro-infrastructure
 * - Clean Energy: Solar water pumps, commercial electric vehicles, waste recycling, green energy
 * - Handicrafts: Handloom weaving, pottery, carpentry, traditional artisanal crafts
 * - Tech / Innovation: Technology startups, prototypes, patents, incubated ventures
 * 
 * All schemes capped at ₹1,00,00,000 (₹1 Crore maximum cap).
 */

const SCHEMES_DATA = [
  // ==========================================================================
  // 1. SAFAI KARAMCHARI / SANITATION WORKERS (NSKFDC / MoSJE)
  // ==========================================================================
  {
    id: "nskfdc-suy",
    nameEn: "Swachhta Udyami Yojana (SUY) - Cleanliness & Mechanization",
    nameHi: "स्वच्छता उद्यमी योजना (SUY)",
    nameBn: "স্বচ্ছতা উদ্যমী যোজনা (এসইউওয়াই)",
    nodalAgency: "National Safai Karamcharis Finance & Development Corporation (MoSJE)",
    officialPortal: "https://nskfdc.nic.in/scheme",
    gazetteRef: "MoSJE Notification No. 19014/03/2014-SCD-IV",
    minCost: 500000,
    maxCost: 5000000, // ₹50 Lakh
    coverPct: 0.90,
    rate: 4.0, // Concessional rate for sanitation equipment
    tenureYears: 7,
    moratoriumMonths: 6,
    purpose: ["business"],
    allowedCategories: ["SafaiKaramchari"],
    noIncomeCeiling: true,
    ventureType: ["greenfield", "brownfield"],
    sectors: ["Services", "Clean Energy"],
    govtInterestSubsidy: "Super-Subsidized 4% Rate & Capital Subsidy: Beneficiary pays an ultra-low 4.0% p.a. interest rate for women/safai karamcharis. Promoters obtain up to 90% financing to procure sewer cleaning trucks, jetting suction machines, and garbage compactors.",
    keyBenefits: [
      "Funding up to ₹50 Lakh to procure mechanized sanitation vehicles and modern sewer cleaning machines",
      "Super-concessional 4.0% interest rate with 6-month principal moratorium",
      "Eliminates manual scavenging by converting workers into mechanized sanitation entrepreneurs",
      "Guaranteed operation tie-ups with Municipal Corporations and Urban Local Bodies"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Select Mechanized Sanitation Vehicle", desc: "Choose authorized suction-jetting truck, desludging vehicle, or pay-and-use community toilet model." },
      { step: "Step 2", title: "Submit to NSKFDC State Partner", desc: "Submit application with ULB tie-up recommendation and driver KYC." },
      { step: "Step 3", title: "Sanction & Vehicle Handover", desc: "Direct vendor payment and vehicle delivered with official municipal commercial permit." }
    ],
    descriptionEn: "Up to ₹50 Lakh at 4% interest for procuring mechanized sanitation equipment, suction machines, and operating community hygiene complexes.",
    descriptionHi: "सफाई कर्मचारियों द्वारा सीवर सफाई उपकरण, सक्शन मशीन एवं स्वच्छता परिसर स्थापित करने हेतु 4% ब्याज पर ₹50 लाख तक का ऋण।",
    descriptionBn: "নিকাশি নালা পরিষ্কারের আধুনিক মেশিন, সাকশন গাড়ি ও কমিউনিটি শৌচাগার পরিচালনার জন্য ৪% সুদে ₹৫০ লাখ পর্যন্ত ঋণ।",
    documentsRequired: [
      "Safai Karamchari / Sanitation Worker Dependent Certificate from Municipal Corporation or Gram Panchayat",
      "Aadhaar Card and PAN Card",
      "Quotation of ARAI-approved mechanized cleaning unit / suction-cum-jetting truck",
      "Commercial Heavy/Light Driving License of operator",
      "Consent letter / MoU from local Urban Local Body (ULB)"
    ],
    whereToSubmit: "Local Municipal Corporation Nodal Cell or State Safai Karamchari Channelising Agency"
  },
  {
    id: "namaste-scheme",
    nameEn: "NAMASTE Scheme (Mechanised Sanitation Ecosystem)",
    nameHi: "नमस्ते योजना (NAMASTE - यंत्रीकृत स्वच्छता पारिस्थितिकी तंत्र)",
    nameBn: "নমস্তে যোজনা (যান্ত্রিক নিকাশি ব্যবস্থা)",
    nodalAgency: "Ministry of Social Justice & Empowerment & MoHUA",
    officialPortal: "https://namaste.gov.in",
    gazetteRef: "Central Sector Scheme NAMASTE Guidelines File No. 12015/01/2021-SCD-IV",
    minCost: 200000,
    maxCost: 5000000, // Up to ₹50 Lakh
    coverPct: 0.90,
    rate: 5.0,
    tenureYears: 7,
    moratoriumMonths: 6,
    purpose: ["business"],
    allowedCategories: ["SafaiKaramchari"],
    noIncomeCeiling: true,
    ventureType: ["greenfield", "brownfield"],
    sectors: ["Services"],
    govtInterestSubsidy: "50% Direct Capital Subsidy + Interest Subvention: Government provides up to 50% non-refundable capital subsidy (up to ₹5,00,000) for sewer/septic tank sanitation workers to purchase modern mechanised desludging units. Remaining loan subsidized to 5% p.a.",
    keyBenefits: [
      "Up to 50% direct capital subsidy (up to ₹5,00,000 non-refundable grant)",
      "Loan facility up to ₹50 Lakh for mechanized sewer cleaning vehicles at 5% rate",
      "Free PPE protective suits, safety equipment kits, and health insurance cover",
      "Priority empanelment with Municipal Corporations as official sanitation vendors"
    ],
    applicationSteps: [
      { step: "Step 1", title: "NAMASTE Profiling Camp", desc: "Register at local Municipal Corporation NAMASTE profiling camp with biometric Aadhaar." },
      { step: "Step 2", title: "Safety & Machinery Training", desc: "Undergo free certified training on operating robotic/mechanized sanitation equipment." },
      { step: "Step 3", title: "Subsidy Credit & Vehicle Delivery", desc: "50% capital subsidy credited and bank finances balance at 5% rate." }
    ],
    descriptionEn: "50% capital subsidy (up to ₹5 Lakh) and subsidized loans up to ₹50 Lakh for sewer and septic tank workers to own mechanised sanitation vehicles.",
    descriptionHi: "सीवर एवं सेप्टिक टैंक सफाई कर्मियों हेतु ₹5 लाख तक 50% सीधी पूंजी सब्सिडी तथा 5% ब्याज पर मशीनों के लिए ₹50 लाख तक का ऋण।",
    descriptionBn: "নিকাশি নালা কর্মীদের জন্য ৫০% সরকারি ভর্তুকি (₹৫ লাখ পর্যন্ত) এবং ৫% সুদে আধুনিক যন্ত্রের জন্য ₹৫০ লাখ পর্যন্ত ঋণ।",
    documentsRequired: [
      "NAMASTE Survey Identity Card / Verification by Urban Local Body (ULB)",
      "Aadhaar Card and Driving License of operator",
      "Quotation of ARAI-approved mechanized cleaning unit",
      "Bank Account details"
    ],
    whereToSubmit: "Urban Local Body (ULB) / Municipal Corporation Sanitation Cell"
  },
  {
    id: "nskfdc-term",
    nameEn: "NSKFDC General Term Loan Scheme",
    nameHi: "एनएसकेएफडीसी सामान्य सावधि ऋण योजना",
    nameBn: "এনএসকেএফডিসি সাধারণ মেয়াদী ঋণ যোজনা",
    nodalAgency: "National Safai Karamcharis Finance & Development Corporation (MoSJE)",
    officialPortal: "https://nskfdc.nic.in",
    gazetteRef: "NSKFDC Statutory Guidelines File No. 1-2(1)/2022-NSKFDC",
    minCost: 100000,
    maxCost: 5000000, // ₹50 Lakh
    coverPct: 0.90,
    rate: 6.0,
    tenureYears: 10,
    moratoriumMonths: 9,
    purpose: ["business"],
    allowedCategories: ["SafaiKaramchari"],
    incomeCeiling: 500000,
    ventureType: ["greenfield", "brownfield"],
    sectors: ["Services", "Manufacturing", "Trading", "Clean Energy"],
    govtInterestSubsidy: "Direct Concessional Interest Subvention: Effective interest rate is capped at just 6% p.a. (women beneficiaries receive an additional 1% rebate to 5% p.a.). 90% of project cost is funded by NSKFDC through state agencies.",
    keyBenefits: [
      "Low-interest loan up to ₹50 Lakh at government-subsidized rates from 5% to 6% p.a.",
      "Up to 90% of project cost funded by NSKFDC through State Channelising Agencies",
      "Promoter self-contribution capped at only 10%",
      "Long repayment period up to 10 years with 9 months principal holiday"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Apply at District SCA / Municipal Nodal Office", desc: "Submit project application to State Safai Karamchari Channelising Agency or District Social Welfare Officer." },
      { step: "Step 2", title: "Occupation Verification", desc: "Verification of Safai Karamchari / Manual Scavenger dependent status certificate." },
      { step: "Step 3", title: "Technical & Financial Appraisal", desc: "Evaluation of equipment proforma invoices and enterprise viability." },
      { step: "Step 4", title: "Fund Disbursement", desc: "Loan disbursed directly for purchasing commercial vehicle, machines, or business stock." }
    ],
    descriptionEn: "Concessional credit up to ₹50 Lakh for viable income-generating business ventures for Safai Karamcharis and their dependents.",
    descriptionHi: "सफाई कर्मचारियों एवं उनके आश्रितों हेतु आय-सृजक उद्यमों के लिए 6% की रियायती ब्याज दर पर ₹50 लाख तक का सावधि ऋण।",
    descriptionBn: "সাফাই কর্মচারী ও তাঁদের পোষ্যদের জন্য স্বনির্ভর ব্যবসার উদ্দেশ্যে ৬% সুদে ₹৫০ লাখ পর্যন্ত মেয়াদী ঋণ।",
    documentsRequired: [
      "Aadhaar Card & PAN Card",
      "Safai Karamchari / Sanitation Worker Identity Certificate from Municipality / Gram Panchayat",
      "Family Income Certificate (proving annual income ≤ ₹5.00 Lakh)",
      "Quotation / Proforma Invoice of equipment, vehicles, or tools to be purchased",
      "Bank Account Passbook (Aadhaar seeded)"
    ],
    whereToSubmit: "State Safai Karamchari Finance & Dev. Corp. (SCA) or District Social Welfare Office (DSWO)"
  },
  {
    id: "nskfdc-green",
    nameEn: "Green Business Scheme for Safai Karamcharis (E-Vehicles & Solar)",
    nameHi: "सफाई कर्मचारियों के लिए हरित व्यवसाय योजना",
    nameBn: "সাফাই কর্মচারীদের জন্য সবুজ ব্যবসা যোজনা",
    nodalAgency: "NSKFDC / State Channelising Agencies",
    officialPortal: "https://nskfdc.nic.in",
    gazetteRef: "NSKFDC Green Initiative Circular 2023",
    minCost: 200000,
    maxCost: 3000000, // ₹30 Lakh
    coverPct: 0.90,
    rate: 6.0,
    tenureYears: 8,
    moratoriumMonths: 6,
    purpose: ["business"],
    allowedCategories: ["SafaiKaramchari"],
    incomeCeiling: 500000,
    ventureType: ["greenfield", "brownfield"],
    sectors: ["Clean Energy", "Services"],
    govtInterestSubsidy: "Climate Action Interest Subvention: Concessional 6% interest rate to acquire battery-operated electric garbage collection vans, e-loaders, and solar street cleaning equipment.",
    keyBenefits: [
      "Up to ₹30 Lakh credit for electric waste collection vehicles and eco-friendly machinery",
      "Subsidized rate of 6.0% p.a. with 6-month moratorium",
      "90% of equipment cost funded by NSKFDC",
      "Operate commercial contracts for door-to-door green waste collection"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Select Electric Vehicle / Solar Unit", desc: "Obtain quotation for authorized battery e-tipper or electric collection loader." },
      { step: "Step 2", title: "Submit to SCA Office", desc: "Provide application along with sanitation worker certificate." },
      { step: "Step 3", title: "Vehicle Delivery", desc: "Direct payment to EV dealer upon municipal road tax registration." }
    ],
    descriptionEn: "Up to ₹30 Lakh at 6% interest to acquire battery electric waste collection vehicles, e-rickshaws, and solar sanitation units.",
    descriptionHi: "ई-कचरा वाहन, इलेक्ट्रिक लोडर एवं सौर स्वच्छता उपकरण खरीदने हेतु 6% ब्याज पर ₹30 लाख तक का रियायती ऋण।",
    descriptionBn: "ব্যাটারি চালিত বর্জ্য সংগ্রহের গাড়ি ও ই-রিকশার জন্য ৬% সুদে ₹৩০ লাখ পর্যন্ত ঋণ।",
    documentsRequired: [
      "Authorized Quotation for commercial electric vehicle / green equipment",
      "Safai Karamchari Certificate & Family Income Certificate (≤ ₹5 Lakh)",
      "Driving License of applicant or commercial driver partner",
      "Aadhaar Card and PAN Card"
    ],
    whereToSubmit: "State Safai Karamchari Development Corporation (SCA) Office"
  },
  {
    id: "nskfdc-msy",
    nameEn: "NSKFDC Mahila Samriddhi Yojana (Sanitation Women)",
    nameHi: "एनएसकेएफडीसी महिला समृद्धि योजना",
    nameBn: "এনএসকেএফডিসি মহিলা সমৃদ্ধি যোজনা",
    nodalAgency: "NSKFDC / State Women Development Corporations",
    officialPortal: "https://nskfdc.nic.in",
    gazetteRef: "NSKFDC Women Empowerment Directive 2023",
    minCost: 10000,
    maxCost: 140000, // ₹1.40 Lakh
    coverPct: 0.95,
    rate: 4.0,
    tenureYears: 3.5,
    moratoriumMonths: 4,
    purpose: ["business"],
    allowedCategories: ["SafaiKaramchari"],
    allowedGenders: ["female"],
    incomeCeiling: 500000,
    ventureType: ["greenfield", "brownfield"],
    sectors: ["Services", "Trading", "Handicrafts"],
    govtInterestSubsidy: "Women's Super-Subvention: Beneficiary pays only 4.0% p.a. interest. Government funds 95% of project cost with only 5% promoter margin money required.",
    keyBenefits: [
      "Exclusive micro-credit up to ₹1.40 Lakh for Safai Karamchari women and SHGs",
      "Ultra-low 4.0% per annum interest rate",
      "Government funds 95% of the total project expenditure",
      "Minimal documentation with 15-day sanction timeline"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Apply at District Women's Cell", desc: "Submit simple 1-page form to District Social Welfare Office or Mahila Vikas Nigam." },
      { step: "Step 2", title: "Verification", desc: "Local officer verifies Safai Karamchari dependent proof and trade choice." },
      { step: "Step 3", title: "Disbursement", desc: "Funds credited with 4-month principal repayment pause." }
    ],
    descriptionEn: "Micro-credit up to ₹1.40 Lakh at 4% interest for Safai Karamchari women entrepreneurs to establish micro shops and tailoring units.",
    descriptionHi: "सफाई कर्मचारी महिलाओं के लिए छोटे व्यवसाय, सिलाई केंद्र एवं किराना दुकान हेतु मात्र 4% ब्याज पर ₹1.40 लाख तक का ऋण।",
    descriptionBn: "সাফাই কর্মী মহিলাদের ক্ষুদ্র ব্যবসা ও স্বনির্ভরতার জন্য মাত্র ৪% সুদে ₹১.৪০ লাখ পর্যন্ত ঋণ।",
    documentsRequired: [
      "Aadhaar Card of the Woman Beneficiary",
      "Safai Karamchari Dependent Certificate",
      "Family Income Certificate (≤ ₹5.00 Lakh)",
      "Bank Account Passbook (Aadhaar linked)"
    ],
    whereToSubmit: "District Social Welfare Office or State SC/Safai Karamchari Corporation"
  },
  {
    id: "nskfdc-mcf",
    nameEn: "NSKFDC Micro Credit Finance (MCF)",
    nameHi: "एनएसकेएफडीसी माइक्रो क्रेडिट वित्त योजना",
    nameBn: "এনএসকেএফডিসি ক্ষুদ্র ঋণ যোজনা",
    nodalAgency: "NSKFDC / Regional Rural Banks",
    officialPortal: "https://nskfdc.nic.in",
    gazetteRef: "NSKFDC Micro Finance Circular 2023",
    minCost: 10000,
    maxCost: 100000, // ₹1 Lakh
    coverPct: 0.90,
    rate: 5.0,
    tenureYears: 3,
    moratoriumMonths: 3,
    purpose: ["business"],
    allowedCategories: ["SafaiKaramchari"],
    incomeCeiling: 500000,
    ventureType: ["greenfield", "brownfield"],
    sectors: ["Trading", "Services", "Handicrafts"],
    govtInterestSubsidy: "Affordable Micro-Credit Subvention: Government caps interest at 5.0% p.a. to protect sanitation workers from predatory local moneylenders.",
    keyBenefits: [
      "Fast micro-loans up to ₹1 Lakh for small shops, artisan kiosks, and repair hubs",
      "Nominal 5.0% annual interest rate",
      "Fast track approval through Regional Rural Banks and State SCAs",
      "90% funded by NSKFDC"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Submit Micro Form", desc: "Submit simple form to Regional Rural Bank or District Welfare Office." },
      { step: "Step 2", title: "Instant KYC", desc: "Aadhaar authentication and dependent certificate review." },
      { step: "Step 3", title: "Sanction", desc: "Disbursed within 10 working days." }
    ],
    descriptionEn: "Quick microcredit up to ₹1 Lakh at 5% interest for setting up small retail and service enterprises for sanitation workers.",
    descriptionHi: "सफाई कर्मचारियों हेतु त्वरित ₹1 लाख तक का माइक्रो-लोन मात्र 5% वार्षिक ब्याज पर।",
    descriptionBn: "সাফাই কর্মীদের ছোট দোকান ও ব্যবসার জন্য মাত্র ৫% সুদে ₹১ লাখ পর্যন্ত দ্রুত ক্ষুদ্র ঋণ।",
    documentsRequired: [
      "Aadhaar Card / Ration Card",
      "Safai Karamchari certificate from Municipal Ward / Gram Panchayat",
      "Self-declaration of income (≤ ₹5 Lakh)",
      "Bank Passbook copy with active IFSC"
    ],
    whereToSubmit: "Regional Rural Bank branch or District Welfare Office"
  },

  // ==========================================================================
  // 2. SCHEDULED TRIBES (NSTFDC / MoTA)
  // ==========================================================================
  {
    id: "nstfdc-term",
    nameEn: "NSTFDC Term Loan Scheme for Scheduled Tribes",
    nameHi: "एनएसटीएफडीसी अनुसूचित जनजाति सावधि ऋण योजना",
    nameBn: "এনএসটিএফডিসি তপশিলি উপজাতি মেয়াদী ঋণ যোজনা",
    nodalAgency: "National Scheduled Tribes Finance & Development Corporation (MoTA)",
    officialPortal: "https://nstfdc.tribal.gov.in",
    gazetteRef: "Ministry of Tribal Affairs Order No. 14011/02/2022-TDA",
    minCost: 100000,
    maxCost: 5000000, // ₹50 Lakh
    coverPct: 0.90,
    rate: 6.0,
    tenureYears: 10,
    moratoriumMonths: 12,
    purpose: ["business"],
    allowedCategories: ["ST"],
    incomeCeiling: 500000,
    ventureType: ["greenfield", "brownfield"],
    sectors: ["Manufacturing", "Services", "Trading", "Agri-Allied", "Clean Energy"],
    govtInterestSubsidy: "Direct Concessional Interest Subvention: Government caps borrower interest rate at only 6.0% p.a. (5.5% for women beneficiaries). Up to 90% of the project expenditure is funded through State Tribal Corporations.",
    keyBenefits: [
      "Low-interest loan up to ₹50 Lakh at government-subsidized rates from 6.0% p.a.",
      "Up to 90% project cost financed through State Tribal Development Co-operative Corporations",
      "Only 10% promoter self-contribution needed",
      "12-month principal repayment moratorium during project gestation"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Apply at District Tribal Welfare Office", desc: "Submit project proposal to your State Tribal Development Corporation (e.g. Shabari Corp, GCC, TRICOR, OSFDC)." },
      { step: "Step 2", title: "Tribe & Income Verification", desc: "District Tribal Welfare Officer scrutinizes ST caste certificate and income (≤ ₹5 Lakh)." },
      { step: "Step 3", title: "Project Appraisal", desc: "Feasibility review of equipment and business plan." },
      { step: "Step 4", title: "Fund Release", desc: "NSTFDC releases funds directly to business account or machinery supplier." }
    ],
    descriptionEn: "Concessional credit up to ₹50 Lakh at 6% interest for viable self-employment and commercial business ventures for ST entrepreneurs.",
    descriptionHi: "अनुसूचित जनजाति (ST) के उद्यमियों हेतु व्यावसायिक उपक्रमों के लिए मात्र 6% ब्याज पर ₹50 लाख तक का रियायती ऋण।",
    descriptionBn: "তপশিলি উপজাতি (এসটি) উদ্যোক্তাদের ব্যবসার জন্য মাত্র ৬% সুদে ₹৫০ লাখ পর্যন্ত মেয়াদী ঋণ।",
    documentsRequired: [
      "Aadhaar Card & PAN Card",
      "Valid ST Caste Certificate issued by competent Revenue Authority (SDO / Tehsildar)",
      "Annual Family Income Certificate (proving annual income ≤ ₹5.00 Lakh)",
      "Quotation / Proforma Invoice of machinery, tools, or transport vehicle",
      "Detailed Project Profile (DPR)"
    ],
    whereToSubmit: "State Tribal Development Co-operative Corporation (STDCC) or District Tribal Welfare Office"
  },
  {
    id: "nstfdc-amsy",
    nameEn: "Adivasi Mahila Sashaktikaran Yojana (AMSY)",
    nameHi: "आदिवासी महिला सशक्तिकरण योजना (AMSY)",
    nameBn: "আদিবাসী মহিলা সশক্তিকরণ যোজনা (এএমএসওয়াই)",
    nodalAgency: "National Scheduled Tribes Finance & Development Corporation (MoTA)",
    officialPortal: "https://nstfdc.tribal.gov.in",
    gazetteRef: "MoTA Circular AMSY/2023/04",
    minCost: 10000,
    maxCost: 200000, // ₹2 Lakh
    coverPct: 0.90,
    rate: 4.0,
    tenureYears: 5,
    moratoriumMonths: 6,
    purpose: ["business"],
    allowedCategories: ["ST"],
    allowedGenders: ["female"],
    incomeCeiling: 500000,
    ventureType: ["greenfield", "brownfield"],
    sectors: ["Agri-Allied", "Handicrafts", "Services", "Trading"],
    govtInterestSubsidy: "Super-Subsidized 4% Interest Rate: Tribal Affairs Ministry provides funds at an extraordinary 4.0% p.a. interest rate for scheduled tribe women entrepreneurs.",
    keyBenefits: [
      "Exclusive tribal women empowerment scheme offering loans up to ₹2 Lakh",
      "Rock-bottom interest rate of just 4.0% per annum",
      "Government funds 90% of total project cost (promoter share only 10%)",
      "Ideal for dairy units, poultry, weaving, honey collection, small retail, and processing"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Visit District Tribal Office / SHG Cell", desc: "Submit 1-page form to State Tribal Corporation or Project Officer (ITDA)." },
      { step: "Step 2", title: "Trade & Identity Scrutiny", desc: "Officer checks ST certificate and proposed micro venture." },
      { step: "Step 3", title: "Direct Sanction", desc: "Disbursed directly into tribal woman entrepreneur's account with 6-month pause." }
    ],
    descriptionEn: "Concessional micro-credit up to ₹2 Lakh at 4% interest exclusively for Scheduled Tribe women entrepreneurs.",
    descriptionHi: "अनुसूचित जनजाति की महिलाओं के स्वरोजगार हेतु मात्र 4% वार्षिक ब्याज पर ₹2 लाख तक का रियायती ऋण।",
    descriptionBn: "তপশিলি উপজাতি মহিলাদের স্বনির্ভরতার জন্য মাত্র ৪% সুদে ₹২ লাখ পর্যন্ত বিশেষ ঋণ।",
    documentsRequired: [
      "Aadhaar Card of the Tribal Woman Beneficiary",
      "ST Caste Certificate issued by competent authority",
      "Family Income Certificate (≤ ₹5.00 Lakh)",
      "Bank Account details (Aadhaar seeded)",
      "Brief quote / plan for small enterprise"
    ],
    whereToSubmit: "Integrated Tribal Development Agency (ITDA) or State Tribal Development Corporation"
  },
  {
    id: "nstfdc-forest",
    nameEn: "NSTFDC Minor Forest Produce (MFP) & Agro Processing Scheme",
    nameHi: "एनएसटीएफडीसी लघु वनोपज एवं कृषि प्रसंस्करण योजना",
    nameBn: "এনএসটিএফডিসি ক্ষুদ্র বনজ সম্পদ ও খাদ্য প্রক্রিয়াকরণ যোজনা",
    nodalAgency: "NSTFDC / TRIFED / State Forest Corporations",
    officialPortal: "https://nstfdc.tribal.gov.in",
    gazetteRef: "TRIFED / MoTA Operational Guidelines 2023",
    minCost: 200000,
    maxCost: 5000000, // ₹50 Lakh
    coverPct: 0.90,
    rate: 6.0,
    tenureYears: 8,
    moratoriumMonths: 12,
    purpose: ["business"],
    allowedCategories: ["ST"],
    incomeCeiling: 500000,
    ventureType: ["greenfield", "brownfield"],
    sectors: ["Agri-Allied"],
    govtInterestSubsidy: "Value Addition Subvention: 6% p.a. concessional rate for procurement, cold storage, sorting, packaging, and processing of wild honey, mahua, lac, tamarind, herbal roots, and bamboo.",
    keyBenefits: [
      "Up to ₹50 Lakh funding for tribal food processing and herbal packaging centers",
      "Low interest of 6.0% p.a. with 12 months moratorium",
      "Direct buy-back linkages through TRIFED Tribes India retail outlets",
      "Can be converged with PM Van Dhan Vikas Kendras"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Formulate MFP Processing Plan", desc: "Draft business plan for honey extraction, spices, bamboo crafts, or herbal aggregation." },
      { step: "Step 2", title: "Submit to TRIFED / State Tribal Corp", desc: "Submit DPR and land/premise arrangement." },
      { step: "Step 3", title: "Sanction & Facility Setup", desc: "Funds disbursed for processing machinery installation." }
    ],
    descriptionEn: "Up to ₹50 Lakh at 6% interest for tribal entrepreneurs to set up agro-processing and minor forest produce value addition plants.",
    descriptionHi: "लघु वनोपज (शहद, महुआ, लाख, जड़ी-बूटी) प्रसंस्करण एवं पैकेजिंग इकाई स्थापित करने हेतु 6% ब्याज पर ₹50 लाख तक का ऋण।",
    descriptionBn: "ক্ষুদ্র বনজ সম্পদ (মধু, মহুয়া, ভেষজ) প্রক্রিয়াকরণ ও প্যাকেজিং কেন্দ্র গড়ার জন্য ৬% সুদে ₹৫০ লাখ পর্যন্ত ঋণ।",
    documentsRequired: [
      "ST Caste Certificate & Income Certificate",
      "Detailed Project Report on Minor Forest Produce processing",
      "Machinery Proforma Invoices",
      "Premise lease / title proof"
    ],
    whereToSubmit: "State Forest Development Corporation or TRIFED Regional Office"
  },
  {
    id: "pm-janman",
    nameEn: "PM-JANMAN Tribal Enterprise & Livelihood Scheme (PVTG)",
    nameHi: "पीएम-जनमन जनजातीय उद्यम एवं आजीविका योजना (PVTG)",
    nameBn: "প্রধানমন্ত্রী জনমন উপজাতি উদ্যোগ যোজনা",
    nodalAgency: "Ministry of Tribal Affairs / NSTFDC",
    officialPortal: "https://tribal.nic.in/PMJANMAN.aspx",
    gazetteRef: "Cabinet Committee on Economic Affairs Approval PM-JANMAN 2023",
    minCost: 100000,
    maxCost: 2500000, // ₹25 Lakh
    coverPct: 1.0,
    rate: 4.0,
    tenureYears: 7,
    moratoriumMonths: 12,
    purpose: ["business"],
    allowedCategories: ["ST"],
    noIncomeCeiling: true,
    ventureType: ["greenfield"],
    sectors: ["Agri-Allied", "Handicrafts", "Services", "Trading"],
    govtInterestSubsidy: "100% Sovereign Guarantee + 4% Concessional Interest: Designed specifically for Particularly Vulnerable Tribal Groups (PVTGs). 100% credit guarantee provided by Central Government; interest capped at 4% p.a.",
    keyBenefits: [
      "Up to ₹25 Lakh for establishing enterprises in notified PVTG tribal habitations",
      "Ultra-low 4.0% interest rate with 100% government credit guarantee",
      "Free road, electrification, solar, and mobile connectivity convergence",
      "Zero margin money required from poor tribal families"
    ],
    applicationSteps: [
      { step: "Step 1", title: "PVTG Habitation Enrollment", desc: "Enroll through local District Collector / ITDA Special Officer PVTG cell." },
      { step: "Step 2", title: "Village Enterprise Plan", desc: "Select livestock, agro-forestry, or traditional artisan activity." },
      { step: "Step 3", title: "Direct Benefit Disbursement", desc: "Sanctioned and machinery delivered directly to tribal cluster." }
    ],
    descriptionEn: "Subsidized credit up to ₹25 Lakh at 4% interest with 100% sovereign guarantee for Particularly Vulnerable Tribal Groups (PVTGs).",
    descriptionHi: "विशेष रूप से कमजोर जनजातीय समूहों (PVTG) के लिए 100% सरकारी गारंटी एवं मात्र 4% ब्याज पर ₹25 लाख तक का उद्यम ऋण।",
    descriptionBn: "বিশেষভাবে দুর্বল আদিবাসী জনগোষ্ঠীর (PVTG) জন্য ১০০% সরকারি গ্যারান্টি ও ৪% সুদে ₹২৫ লাখ পর্যন্ত ব্যবসা ঋণ।",
    documentsRequired: [
      "PVTG Tribal Community Certificate",
      "Aadhaar Card and Jan Dhan Bank Account Passbook",
      "Recommendation of Gram Sabha / ITDA Officer"
    ],
    whereToSubmit: "District Collectorate / ITDA Special Officer (PVTG Division)"
  },

  // ==========================================================================
  // 3. BACKWARD CLASSES (NBCFDC / MoSJE)
  // ==========================================================================
  {
    id: "nbcfdc-general",
    nameEn: "NBCFDC General Term Loan Scheme",
    nameHi: "एनबीसीएफडीसी सामान्य सावधि ऋण योजना",
    nameBn: "এনবিসিএফডিসি সাধারণ মেয়াদী ঋণ যোজনা",
    nodalAgency: "National Backward Classes Finance & Development Corporation (MoSJE)",
    officialPortal: "https://nbcfdc.gov.in",
    gazetteRef: "NBCFDC Lending Manual Chapter 2",
    minCost: 100000,
    maxCost: 1500000, // ₹15 Lakh
    coverPct: 0.85,
    rate: 6.0,
    tenureYears: 8,
    moratoriumMonths: 6,
    purpose: ["business"],
    allowedCategories: ["OBC"],
    incomeCeiling: 300000,
    ventureType: ["greenfield", "brownfield"],
    sectors: ["Manufacturing", "Services", "Trading", "Agri-Allied"],
    govtInterestSubsidy: "Concessional Lending Subvention: Government caps interest rate at 6.0% p.a. for loans up to ₹5 Lakh, and 7.0% for loans up to ₹15 Lakh for OBC beneficiaries.",
    keyBenefits: [
      "Up to ₹15 Lakh term loan for viable business, manufacturing, or service ventures",
      "Deeply subsidized interest rate starting from 6.0% p.a.",
      "Up to 85% project cost funded by NBCFDC through State SCAs and Regional Rural Banks",
      "Long repayment tenure up to 8 years"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Submit to District SCA Office", desc: "Apply at your state Backward Classes Development Corporation." },
      { step: "Step 2", title: "Appraisal & Verification", desc: "Verification of OBC (Non-Creamy Layer) certificate, family income, and machinery quotations." },
      { step: "Step 3", title: "Disbursement", desc: "Payment released directly to machinery vendors or business account." }
    ],
    descriptionEn: "Term loan up to ₹15 Lakh for OBC entrepreneurs at subsidized interest rates starting from 6% per annum.",
    descriptionHi: "ओबीसी उद्यमियों हेतु मात्र 6% से 7% ब्याज दर पर ₹15 लाख तक का रियायती सावधि ऋण।",
    descriptionBn: "অনগ্রসর শ্রেণীর (ওবিসি) উদ্যোক্তাদের জন্য মাত্র ৬% থেকে ৭% সুদে ₹১৫ লাখ পর্যন্ত মেয়াদী ঋণ।",
    documentsRequired: [
      "OBC Certificate (Non-Creamy Layer)",
      "Annual Family Income Certificate (≤ ₹3.00 Lakh per annum)",
      "Detailed Project Profile with machinery quotes",
      "Aadhaar Card and PAN Card"
    ],
    whereToSubmit: "State Backward Classes Development Corporation (SCA) or Regional Rural Bank"
  },
  {
    id: "nbcfdc-swarnima",
    nameEn: "NBCFDC New Swarnima Scheme for Backward Class Women",
    nameHi: "एनबीसीएफडीसी नई स्वर्णिमा योजना (पिछड़ा वर्ग महिलाएं)",
    nameBn: "এনবিসিএফডিসি নতুন স্বর্ণিমা যোজনা (ওবিসি মহিলা)",
    nodalAgency: "National Backward Classes Finance & Development Corporation (MoSJE)",
    officialPortal: "https://nbcfdc.gov.in",
    gazetteRef: "NBCFDC Circular Swarnima/2023-24",
    minCost: 50000,
    maxCost: 200000, // ₹2 Lakh
    coverPct: 0.95,
    rate: 5.0,
    tenureYears: 8,
    moratoriumMonths: 6,
    purpose: ["business"],
    allowedCategories: ["OBC"],
    allowedGenders: ["female"],
    incomeCeiling: 300000,
    ventureType: ["greenfield", "brownfield"],
    sectors: ["Services", "Trading", "Handicrafts", "Agri-Allied"],
    govtInterestSubsidy: "Super-Concessional 5% Interest Rate: The Ministry subsidizes commercial interest burdens, delivering credit at a fixed 5.0% per annum for OBC women. Beneficiary contributes only 5% margin.",
    keyBenefits: [
      "Concessional loan up to ₹2 Lakh exclusively for women belonging to Backward Classes",
      "Fixed 5.0% p.a. subsidized interest rate",
      "95% project cost funded by NBCFDC through State Channelising Agencies",
      "No third-party mortgage required"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Apply at State OBC Corporation", desc: "Submit simple form to your State Backward Classes Development Corporation." },
      { step: "Step 2", title: "Income & Caste Check", desc: "District officer verifies OBC (Non-Creamy Layer) certificate and income (within ₹3 Lakh)." },
      { step: "Step 3", title: "Fund Release", desc: "Funds credited directly to woman entrepreneur's account." }
    ],
    descriptionEn: "Concessional credit up to ₹2 Lakh at 5% interest for women belonging to Backward Classes to establish self-employment ventures.",
    descriptionHi: "अन्य पिछड़ा वर्ग (ओबीसी) की महिलाओं हेतु 5% की रियायती ब्याज दर पर ₹2 लाख तक का स्वरोजगार ऋण।",
    descriptionBn: "অনগ্রসর শ্রেণীর (ওবিসি) মহিলাদের জন্য ৫% সুদে ₹২ লাখ পর্যন্ত স্বনির্ভর ঋণ।",
    documentsRequired: [
      "OBC (Non-Creamy Layer) Caste Certificate",
      "Annual Family Income Certificate (proving annual income ≤ ₹3.00 Lakh)",
      "Aadhaar Card and Bank Passbook copy",
      "Brief quote / plan for small enterprise"
    ],
    whereToSubmit: "State Backward Classes Development Corporation (SCA) District Office"
  },
  {
    id: "nbcfdc-shilpsampada",
    nameEn: "NBCFDC Shilp Sampada (OBC Artisans & Craftspersons)",
    nameHi: "एनबीसीएफडीसी शिल्प संपदा योजना (ओबीसी शिल्पकार)",
    nameBn: "এনবিসিএফডিসি শিল্প সম্পদ যোজনা (ওবিসি কারিগর)",
    nodalAgency: "National Backward Classes Finance & Development Corporation (MoSJE)",
    officialPortal: "https://nbcfdc.gov.in",
    gazetteRef: "NBCFDC Craft Artisan Scheme Norms 2023",
    minCost: 50000,
    maxCost: 1000000, // ₹10 Lakh
    coverPct: 0.90,
    rate: 5.0, // 5% for women, 6% for men
    tenureYears: 8,
    moratoriumMonths: 6,
    purpose: ["business"],
    allowedCategories: ["OBC"],
    incomeCeiling: 300000,
    ventureType: ["greenfield", "brownfield"],
    sectors: ["Handicrafts", "Trading"],
    govtInterestSubsidy: "Traditional Craft Heritage Subvention: Ultra-low 5% interest rate for female OBC artisans and 6% for male artisans to purchase modern tools, raw material, and exhibition stalls.",
    keyBenefits: [
      "Up to ₹10 Lakh credit for traditional OBC craftspersons (potters, weavers, metalworkers, carpenters)",
      "Concessional interest rate of 5.0% for women (6.0% for men)",
      "Exhibition and marketing support at national Shilp Utsavs and fairs",
      "90% of project expenditure financed by NBCFDC"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Artisan Card Verification", desc: "Present Pehchan Artisan Card or certificate from DC (Handicrafts/Handlooms)." },
      { step: "Step 2", title: "Submit Craft DPR", desc: "Submit raw material and tool procurement list." },
      { step: "Step 3", title: "Sanction", desc: "Loan disbursed through State SCA or cooperative bank." }
    ],
    descriptionEn: "Up to ₹10 Lakh at 5-6% interest for OBC artisans and craftspersons to modernize tools and scale craft production.",
    descriptionHi: "पारंपरिक ओबीसी दस्तकारों एवं शिल्पकारों हेतु औजार एवं कच्चा माल खरीदने के लिए 5% से 6% ब्याज पर ₹10 लाख तक का ऋण।",
    descriptionBn: "ওবিসি কারিগর ও হস্তশিল্পীদের আধুনিক যন্ত্রপাতি ও কাঁচামালের জন্য ৫% থেকে ৬% সুদে ₹১০ লাখ পর্যন্ত ঋণ।",
    documentsRequired: [
      "Pehchan Artisan Card / Weaver ID or trade verification",
      "OBC (Non-Creamy Layer) Certificate",
      "Income Certificate (≤ ₹3.00 Lakh)",
      "Bank Account details"
    ],
    whereToSubmit: "State Backward Classes Development Corporation or District Industries Centre (DIC)"
  },
  {
    id: "nbcfdc-saksham",
    nameEn: "NBCFDC Saksham Scheme for Young OBC Professionals",
    nameHi: "एनबीसीएफडीसी सक्षम योजना (युवा ओबीसी पेशेवर)",
    nameBn: "এনবিসিএফডিসি সক্ষম যোজনা (ওবিসি পেশাদার)",
    nodalAgency: "National Backward Classes Finance & Development Corporation (MoSJE)",
    officialPortal: "https://nbcfdc.gov.in",
    gazetteRef: "NBCFDC Saksham Professional Directives 2023",
    minCost: 100000,
    maxCost: 1500000, // ₹15 Lakh
    coverPct: 0.85,
    rate: 6.0,
    tenureYears: 8,
    moratoriumMonths: 6,
    purpose: ["business"],
    allowedCategories: ["OBC"],
    incomeCeiling: 300000,
    ventureType: ["greenfield"],
    sectors: ["Services", "Tech / Innovation"],
    govtInterestSubsidy: "Professional Start-Up Subvention: Government caps interest at 6.0% p.a. for professionally qualified OBC youth (engineers, doctors, IT consultants, pharmacists) to set up their own clinics, labs, and consultancy offices.",
    keyBenefits: [
      "Up to ₹15 Lakh loan at subsidized 6% rate for setting up professional practice",
      "Covers professional equipment, clinic machines, IT software, and office interior",
      "8-year flexible repayment with 6-month moratorium",
      "Promoter self-contribution only 15%"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Submit Professional Proposal", desc: "Submit degree/license and equipment quotation to State OBC Corporation." },
      { step: "Step 2", title: "Appraisal", desc: "Verification of professional degree and OBC NCL certificate." },
      { step: "Step 3", title: "Disbursement", desc: "Credit sanctioned for setting up practice/office." }
    ],
    descriptionEn: "Up to ₹15 Lakh at 6% interest for professionally qualified OBC youth (engineers, doctors, lawyers, IT) to establish their independent practice.",
    descriptionHi: "पेशेवर रूप से योग्य ओबीसी युवाओं (इंजीनियर, डॉक्टर, वकील) हेतु अपना क्लिनिक व कार्यालय स्थापित करने के लिए 6% ब्याज पर ₹15 लाख तक का ऋण।",
    descriptionBn: "পেশাদার যোগ্যতাসম্পন্ন ওবিসি যুবকদের (ইঞ্জিনিয়ার, ডাক্তার, আইটি) নিজস্ব চেম্বার বা অফিস গড়ার জন্য ৬% সুদে ₹১৫ লাখ পর্যন্ত ঋণ।",
    documentsRequired: [
      "Professional Degree / Registration Certificate (MBBS, B.Tech, B.Pharm, LLB, etc.)",
      "OBC (Non-Creamy Layer) Certificate",
      "Family Income Certificate (≤ ₹3.00 Lakh)",
      "Quotation of professional equipment and premise rent deed"
    ],
    whereToSubmit: "State Backward Classes Development Corporation (SCA) Office"
  },

  // ==========================================================================
  // 4. SCHEDULED CASTES (NSFDC / MoSJE / IFCI)
  // ==========================================================================
  {
    id: "term",
    nameEn: "NSFDC Term Loan Scheme",
    nameHi: "एनएसएफडीसी सावधि ऋण योजना (Term Loan)",
    nameBn: "এনএসএফডিসি মেয়াদী ঋণ যোজনা",
    nodalAgency: "National SC Finance & Development Corporation (MoSJE)",
    officialPortal: "https://nsfdc.nic.in/scheme",
    gazetteRef: "NSFDC Policy Directive File No. NSFDC/Scheme/2023-24",
    minCost: 100000,
    maxCost: 5000000, // ₹50 Lakh
    coverPct: 0.90,
    rate: 6.0,
    tenureYears: 10,
    moratoriumMonths: 9,
    purpose: ["business"],
    allowedCategories: ["SC"],
    incomeCeiling: 500000,
    ventureType: ["greenfield", "brownfield"],
    sectors: ["Manufacturing", "Services", "Trading", "Agri-Allied"],
    govtInterestSubsidy: "Direct Concessional Subvention: The Government absorbs commercial interest costs, capping your effective interest rate at just 6% p.a. (women get an additional 0.5% rebate).",
    keyBenefits: [
      "Low-interest loan up to ₹50 Lakh at government-subsidized rates from 6% p.a.",
      "Up to 90% of project cost funded by NSFDC through State Channelising Agencies",
      "Only 10% promoter margin money required",
      "Long repayment period up to 10 years with 9 months principal holiday"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Apply at District SCA Office", desc: "Submit project proposal to your State SC Development Corporation (e.g. Mahapreit, TAHDCO, DSCFDC) or District Welfare Office." },
      { step: "Step 2", title: "Caste & Income Scrutiny", desc: "District Welfare Officer verifies SC certificate and family income (within ₹5 Lakh)." },
      { step: "Step 3", title: "Project Appraisal", desc: "Technical evaluation of machinery quotes and business feasibility." },
      { step: "Step 4", title: "Disbursement", desc: "NSFDC releases funds directly to your business account or equipment supplier." }
    ],
    descriptionEn: "Concessional credit up to ₹50 Lakh for viable income-generating business ventures for SC entrepreneurs.",
    descriptionHi: "आय-सृजक उद्यमों हेतु ₹50 लाख तक का रियायती ऋण। 90% तक सरकारी वित्तपोषण मात्र 6% की रियायती ब्याज दर पर।",
    descriptionBn: "তপশিলি জাতি (এসসি) উদ্যোক্তাদের ব্যবসার জন্য ৬% সুদে ₹৫০ লাখ পর্যন্ত মেয়াদী ঋণ।",
    documentsRequired: [
      "Aadhaar Card & PAN Card",
      "SC Caste Certificate issued by Sub-Divisional Officer (SDO) or Tehsildar",
      "Annual Family Income Certificate (proving annual income ≤ ₹5.00 Lakh)",
      "Quotation / Proforma Invoice of machinery, tools, or vehicles to be purchased",
      "Brief Project Profile / Detailed Project Report (DPR)"
    ],
    whereToSubmit: "District SC Development Corporation (SCA) or District Social Welfare Officer (DSWO)"
  },
  {
    id: "green",
    nameEn: "NSFDC Green Business Scheme (GBS)",
    nameHi: "एनएसएफडीसी हरित व्यवसाय योजना (GBS)",
    nameBn: "এনএসএফডিসি সবুজ ব্যবসা যোজনা",
    nodalAgency: "NSFDC / State SC Development Corporations",
    officialPortal: "https://nsfdc.nic.in",
    gazetteRef: "NSFDC Green Business Guidelines 2023",
    minCost: 200000,
    maxCost: 3000000, // ₹30 Lakh
    coverPct: 0.90,
    rate: 6.5,
    tenureYears: 8,
    moratoriumMonths: 6,
    purpose: ["business"],
    allowedCategories: ["SC"],
    incomeCeiling: 500000,
    ventureType: ["greenfield", "brownfield"],
    sectors: ["Clean Energy", "Services"],
    govtInterestSubsidy: "Climate Action Interest Subvention: Concessional 6.5% interest rate to support solar equipment, e-rickshaws, and clean energy commercial activities.",
    keyBenefits: [
      "Financial assistance up to ₹30 Lakh for climate-friendly and clean tech businesses",
      "Covers 90% of equipment cost for solar units, battery EV transport, and recycling",
      "Subsidized rate of 6.5% p.a. with 6-month moratorium",
      "Can be combined with Central and State solar capital subsidies"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Obtain Green Tech Quotation", desc: "Get authorized quotation for solar installation, e-rickshaws, or waste plant." },
      { step: "Step 2", title: "Submit to SCA Office", desc: "Provide quotation along with caste and income certificate." },
      { step: "Step 3", title: "Sanction & Asset Delivery", desc: "Payment released directly to authorized equipment vendor upon delivery." }
    ],
    descriptionEn: "Financial support up to ₹30 Lakh for clean energy ventures including solar power, electric transport, and waste composting.",
    descriptionHi: "सौर ऊर्जा, ई-रिक्शा, अपशिष्ट प्रबंधन जैसी हरित गतिविधियों हेतु ₹30 लाख तक का रियायती ऋण।",
    descriptionBn: "সৌরশক্তি, ই-রিকশা ও বর্জ্য ব্যবস্থাপনার মতো পরিবেশবান্ধব উদ্যোগের জন্য ₹৩০ লাখ পর্যন্ত ঋণ।",
    documentsRequired: [
      "Authorized Quotation for green energy machinery / commercial electric vehicle",
      "Caste Certificate & Family Income Certificate (≤ ₹5 Lakh)",
      "Aadhaar Card & PAN Card",
      "Site feasibility report or license for green installation"
    ],
    whereToSubmit: "State SC Development Corporation (SCA)"
  },
  {
    id: "asiim",
    nameEn: "Ambedkar Social Innovation & Incubation Mission (ASIIM)",
    nameHi: "अम्बेडकर सामाजिक नवाचार और ऊष्मायन मिशन (ASIIM)",
    nameBn: "আম্বেদকর সামাজিক উদ্ভাবন ও ইনকিউবেশন মিশন",
    nodalAgency: "MoSJE / IFCI Venture / DST Technology Business Incubators",
    officialPortal: "https://vcfsc.in/asiim",
    gazetteRef: "MoSJE ASIIM Scheme Guidelines Notification 2020",
    minCost: 500000,
    maxCost: 3000000, // Up to ₹30 Lakh equity grant over 3 years
    coverPct: 1.0,
    rate: 0.0,
    tenureYears: 5,
    moratoriumMonths: 36,
    purpose: ["business"],
    allowedCategories: ["SC"],
    noIncomeCeiling: true,
    isEquity: true,
    ventureType: ["greenfield"],
    sectors: ["Tech / Innovation"],
    govtInterestSubsidy: "100% Interest-Free Grant / Equity: Beneficiaries pay ZERO interest (0% rate). The Government provides up to ₹30 Lakh in milestone-based equity grant assistance over 3 years.",
    keyBenefits: [
      "Up to ₹30 Lakh equity grant assistance over 3 years",
      "Zero interest (0%) and zero collateral burden",
      "Incubation and laboratory access at premier DST/AICTE incubators (IITs, NITs, IIMs)",
      "Mentorship from institutional venture capital leaders"
    ],
    applicationSteps: [
      { step: "Step 1", title: "TBI Incubation Endorsement", desc: "Connect with any DST-recognized Technology Business Incubator to host your startup." },
      { step: "Step 2", title: "Pitch to MoSJE Selection Panel", desc: "Present your prototype, technology deck, and patent status." },
      { step: "Step 3", title: "Tranche Grant Release", desc: "Disbursed in ₹10 Lakh annual milestones directly to the incubated entity." }
    ],
    descriptionEn: "Supports SC youth with innovative tech concepts through TBIs, granting up to ₹30 Lakh over 3 years with zero interest.",
    descriptionHi: "प्रौद्योगिकी इनक्यूबेटरों के माध्यम से अनुसूचित जाति के युवाओं को नवाचार हेतु 3 वर्षों में ₹30 लाख तक की 100% ब्याज-मुक्त सहायता।",
    descriptionBn: "প্রযুক্তি ইনকিউবেটরের মাধ্যমে উদ্ভাবনী ধারণার জন্য ৩ বছরে ₹৩০ লাখ পর্যন্ত ১০০% সুদবিহীন অনুদান।",
    documentsRequired: [
      "Endorsement letter from DST/AICTE recognized Technology Business Incubator (TBI)",
      "Pitch Deck & Executive Summary of technology innovation / prototype",
      "SC Certificate of Student / Youth Founder (Age 18-35)",
      "Patent / Prototype / Proof-of-Concept documentation",
      "DPIIT Startup Recognition Certificate / Company Incorporation Certificate"
    ],
    whereToSubmit: "DST Recognized Technology Business Incubator (TBI) / IFCI Venture"
  },
  {
    id: "vcfsc-cap",
    nameEn: "Venture Capital Fund for Scheduled Castes (VCF-SC - Tier 1)",
    nameHi: "अनुसूचित जाति उद्यम पूंजी कोष (VCF-SC)",
    nameBn: "তপশিলি জাতি ভেঞ্চার ক্যাপিটাল ফান্ড (ভিসিএফ-এসসি)",
    nodalAgency: "IFCI Venture Capital Funds Ltd. (MoSJE)",
    officialPortal: "https://vcfsc.in",
    gazetteRef: "MoSJE VCF-SC Guidelines Section 4",
    minCost: 1000000,
    maxCost: 10000000, // Capped at ₹1 Crore as requested
    coverPct: 0.75,
    rate: 4.0,
    tenureYears: 8,
    moratoriumMonths: 36,
    purpose: ["business"],
    allowedCategories: ["SC"],
    noIncomeCeiling: true,
    isEquity: true,
    ventureType: ["greenfield", "brownfield"],
    sectors: ["Manufacturing", "Services", "Tech / Innovation", "Clean Energy"],
    govtInterestSubsidy: "Government Equity Risk Capital: Government provides risk equity rather than debt. Beneficiary pays no monthly interest during the initial 3-year incubation phase; nominal coupon rate of 4% p.a. for women/PwD and 8% for general SC.",
    keyBenefits: [
      "Growth funding up to ₹1 Crore in equity and quasi-equity assistance",
      "Govt-borne risk capital with up to 36 months principal repayment holiday",
      "No mortgage or hard collateral required for government equity participation",
      "Professional governance and financial management support from IFCI Venture"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Formulate Detailed Project Report (DPR)", desc: "Prepare DPR demonstrating >51% SC shareholding and viable business model." },
      { step: "Step 2", title: "Submit to IFCI Venture Cell", desc: "Submit through state channel partner or directly to IFCI Venture investment committee." },
      { step: "Step 3", title: "Due Diligence & Sanction", desc: "Technical evaluation committee vets the company's valuation and disburses equity." }
    ],
    descriptionEn: "Equity and quasi-equity growth capital up to ₹1 Crore for enterprises owned and controlled by SC entrepreneurs (>51% SC shareholding).",
    descriptionHi: "51% या अधिक अनुसूचित जाति शेयरधारिता वाले उद्यमों हेतु ₹1 करोड़ तक की विकास पूंजी एवं सह-निवेश सहायता।",
    descriptionBn: "৫১% এর বেশি এসসি মালিকানাধীন কোম্পানির জন্য ₹১ কোটি পর্যন্ত বৃদ্ধির মূলধন ও ইক্যুইটি সহায়তা।",
    documentsRequired: [
      "Company Incorporation Certificate (ROC) / Registered Partnership Deed",
      "Proof of at least 51% Scheduled Caste shareholding for past 12 months",
      "Caste Certificates of all SC Promoters/Directors issued by competent Revenue Authority",
      "Detailed Project Report (DPR) with 3-year financial projections",
      "Udyam Registration Certificate & GST Registration",
      "Bank Account Statements of the Enterprise for the past 6 months"
    ],
    whereToSubmit: "IFCI Venture Capital Funds Ltd. / State Nodal Cell"
  },
  {
    id: "cegssc-cap",
    nameEn: "Credit Enhancement Guarantee Scheme for SCs (CEGSSC - Tier 1)",
    nameHi: "अनुसूचित जाति ऋण संवर्धन गारंटी योजना (CEGSSC)",
    nameBn: "ক্রেডিট এনহ্যান্সমেন্ট গ্যারান্টি স্কিম (সিইজিএসএসসি)",
    nodalAgency: "IFCI Ltd. / Ministry of Social Justice & Empowerment",
    officialPortal: "https://cegssc.in",
    gazetteRef: "MoSJE CEGSSC Guidelines Notification No. 11014/01/2014-SCD-V",
    minCost: 1500000,
    maxCost: 10000000, // Capped at ₹1 Crore as requested
    coverPct: 1.0,
    rate: 8.5,
    tenureYears: 7,
    moratoriumMonths: 12,
    purpose: ["business"],
    allowedCategories: ["SC"],
    noIncomeCeiling: true,
    isGuarantee: true,
    ventureType: ["greenfield", "brownfield"],
    sectors: ["Manufacturing", "Services", "Trading", "Tech / Innovation"],
    govtInterestSubsidy: "100% Sovereign Guarantee Cover: The Government of India provides a 100% guarantee cover for loans up to ₹1 Crore. Banks cannot ask for residential property or third-party collateral.",
    keyBenefits: [
      "Collateral-free bank financing up to ₹1 Crore",
      "100% sovereign guarantee cover provided by MoSJE through IFCI Ltd.",
      "Accepted by all Public Sector Banks (SBI, PNB, Bank of Baroda, etc.)",
      "12-month principal moratorium during initial factory/business set-up"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Prepare Bank Proposal", desc: "Draft capital expenditure and working capital requirements for your enterprise." },
      { step: "Step 2", title: "Submit to Member Lending Institution", desc: "Approach any Public Sector Bank branch applying under the CEGSSC scheme code." },
      { step: "Step 3", title: "Guarantee Issuance & Disbursement", desc: "IFCI issues 100% guarantee certificate and the bank disburses funds without collateral." }
    ],
    descriptionEn: "100% sovereign guarantee cover for collateral-free bank loans up to ₹1 Crore sanctioned to SC-promoted enterprises.",
    descriptionHi: "बिना किसी अतिरिक्त संपत्ति बंधक के ₹1 करोड़ तक के बैंक ऋण हेतु 100% सरकारी गारंटी कवर।",
    descriptionBn: "কোনো সম্পত্তি বন্ধক ছাড়াই ₹১ কোটি পর্যন্ত ব্যাংক ঋণের জন্য ১০০% সরকারি গ্যারান্টি কভার।",
    documentsRequired: [
      "Bank Loan Sanction Application Form with project details",
      "SC Caste Certificate of promoter(s) holding >51% equity",
      "Detailed Project Report (DPR) detailing plant, machinery, and working capital needs",
      "Udyam Registration & PAN Card of Enterprise",
      "Proof of business premise ownership or registered lease deed"
    ],
    whereToSubmit: "Any Public Sector Bank branch (SBI, PNB, Canara Bank, BoB, etc.)"
  },
  {
    id: "nssh-subsidy",
    nameEn: "National SC-ST Hub (NSSH) Special Capital Subsidy",
    nameHi: "राष्ट्रीय अनुसूचित जाति/जनजाति हब (NSSH) पूंजी सब्सिडी योजना",
    nameBn: "জাতীয় এসসি-এসটি হাব মূলধন ভর্তুকি যোজনা",
    nodalAgency: "National Small Industries Corporation (NSIC) / MoMSME",
    officialPortal: "https://scsthub.in",
    gazetteRef: "MoMSME Guidelines NSSH/Scheme/2022-23",
    minCost: 500000,
    maxCost: 10000000, // Up to ₹1 Crore
    coverPct: 0.25,
    rate: 7.5,
    tenureYears: 7,
    moratoriumMonths: 12,
    purpose: ["business"],
    allowedCategories: ["SC", "ST"],
    noIncomeCeiling: true,
    ventureType: ["greenfield", "brownfield"],
    sectors: ["Manufacturing", "Services"],
    govtInterestSubsidy: "25% Direct Non-Refundable Capital Subsidy: The Ministry of MSME provides 25% direct upfront capital subsidy on institutional credit for procurement of modern plant and machinery by SC/ST entrepreneurs.",
    keyBenefits: [
      "25% direct capital subsidy deposited into your loan account",
      "Procurement of modern technology, testing tools, and plant equipment",
      "Special tender exemption and 4% mandatory procurement quota in Public Sector Undertakings (PSUs)",
      "Free exhibition stalls and marketing assistance across India"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Procure Bank Loan for Machinery", desc: "Obtain term loan for machinery from any commercial bank." },
      { step: "Step 2", title: "Submit NSSH Subsidy Claim", desc: "Bank submits online subsidy claim through NSIC NSSH portal." },
      { step: "Step 3", title: "Subsidy Release", desc: "Ministry releases 25% capital subsidy into borrower's loan account." }
    ],
    descriptionEn: "25% direct capital subsidy on institutional credit for plant and machinery procurement by SC/ST entrepreneurs.",
    descriptionHi: "अनुसूचित जाति/जनजाति के उद्यमियों हेतु मशीनरी एवं संयंत्र खरीद पर 25% सीधी गैर-वापसी योग्य सरकारी पूंजी सब्सिडी।",
    descriptionBn: "মেশিনারি ও সরঞ্জাম ক্রয়ের ওপর ২৫% সরকারি মূলধন ভর্তুকি তপশিলি জাতি ও উপজাতিদের জন্য।",
    documentsRequired: [
      "SC/ST Caste Certificate of the entrepreneur / majority partners",
      "Bank Term Loan Sanction Letter for machinery purchase",
      "Original machinery purchase invoices and payment proof",
      "Udyam Registration Certificate"
    ],
    whereToSubmit: "Nearest NSIC National SC-ST Hub (NSSH) Office or Financing Bank"
  },
  {
    id: "micro",
    nameEn: "NSFDC Micro Credit Finance (MCF)",
    nameHi: "एनएसएफडीसी माइक्रो क्रेडिट फाइनेंस (MCF)",
    nameBn: "এনএসএফডিসি ক্ষুদ্র ঋণ অর্থায়ন",
    nodalAgency: "NSFDC / State Channelising Agencies",
    officialPortal: "https://nsfdc.nic.in/scheme",
    gazetteRef: "NSFDC Micro Credit Policy 2023",
    minCost: 10000,
    maxCost: 140000, // ₹1.40 Lakh
    coverPct: 0.90,
    rate: 6.5,
    tenureYears: 3,
    moratoriumMonths: 3,
    purpose: ["business"],
    allowedCategories: ["SC"],
    incomeCeiling: 500000,
    ventureType: ["greenfield", "brownfield"],
    sectors: ["Trading", "Services", "Handicrafts"],
    govtInterestSubsidy: "Affordable Micro-Financing: Government caps interest at 6.5% p.a. to protect tiny vendors and artisans from unorganized moneylenders.",
    keyBenefits: [
      "Fast microcredit up to ₹1.40 Lakh for small shops, artisan kiosks, and rural services",
      "Minimal documentation — processed within 15 working days",
      "Subsidized rate of 6.5% p.a. with no hidden bank charges",
      "Promoter self-contribution capped at only 10%"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Submit Micro Application", desc: "Submit simple 1-page form to District Welfare Office or Regional Rural Bank." },
      { step: "Step 2", title: "Document Verification", desc: "Field officer verifies Aadhaar and community certificate." },
      { step: "Step 3", title: "Instant Sanction", desc: "Sanction letter issued and funds disbursed for inventory or tools." }
    ],
    descriptionEn: "Small-scale microcredit up to ₹1.40 Lakh for rapid livelihood generation, tiny shops, and artisans.",
    descriptionHi: "छोटे व्यापार, ग्रामीण कारीगरों और सूक्ष्म आजीविका हेतु त्वरित ₹1.40 लाख तक का माइक्रो-लोन मात्र 6.5% ब्याज पर।",
    descriptionBn: "ক্ষুদ্র দোকান ও জীবিকার জন্য ৬.৫% সুদে ₹১.৪০ লাখ পর্যন্ত দ্রুত মাইক্রো লোন।",
    documentsRequired: [
      "Aadhaar Card / Ration Card",
      "SC Community Certificate",
      "Self-declaration / Income Certificate (≤ ₹5 Lakh per year)",
      "Bank Passbook copy with active IFSC code"
    ],
    whereToSubmit: "Local District Welfare Office or Regional Rural Bank Branch"
  },
  {
    id: "msy",
    nameEn: "NSFDC Mahila Samriddhi Yojana (MSY)",
    nameHi: "एनएसएफडीसी महिला समृद्धि योजना (MSY)",
    nameBn: "এনএসএফডিসি মহিলা সমৃদ্ধি যোজনা",
    nodalAgency: "NSFDC / State Women Development Corporations",
    officialPortal: "https://nsfdc.nic.in/scheme",
    gazetteRef: "NSFDC MSY Directive 2023",
    minCost: 10000,
    maxCost: 140000,
    coverPct: 0.95,
    rate: 4.0,
    tenureYears: 3.5,
    moratoriumMonths: 4,
    purpose: ["business"],
    allowedCategories: ["SC"],
    allowedGenders: ["female"],
    incomeCeiling: 500000,
    ventureType: ["greenfield", "brownfield"],
    sectors: ["Services", "Trading", "Handicrafts"],
    govtInterestSubsidy: "Women's Super-Subvention: The Ministry subsidizes nearly the entire interest load, delivering funds at an ultra-low 4.0% p.a. Beneficiary puts only 5% margin.",
    keyBenefits: [
      "Exclusive women-empowerment scheme offering loans up to ₹1.40 Lakh",
      "Rock-bottom interest rate of just 4.0% per annum",
      "Government covers 95% of total project cost",
      "Available for individual SC women or women Self-Help Groups (SHGs)"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Contact District Women's Cell", desc: "Visit your district Mahila Arthik Vikas Mahamandal or State SC Corporation." },
      { step: "Step 2", title: "Enrollment", desc: "Submit KYC and trade choice (tailoring, dairy, grocery, handicrafts)." },
      { step: "Step 3", title: "Disbursement", desc: "Funds credited with a 4-month principal repayment pause." }
    ],
    descriptionEn: "Exclusive women-empowerment micro-credit offering loans up to ₹1.40 Lakh at 4% interest for SC women entrepreneurs.",
    descriptionHi: "अनुसूचित जाति की महिलाओं के लिए मात्र 4% वार्षिक ब्याज पर ₹1.40 लाख तक का विशेष रियायती ऋण।",
    descriptionBn: "তপশিলি জাতি (এসসি) মহিলাদের স্বনির্ভরতার জন্য মাত্র ৪% সুদে ₹১.৪০ লাখ পর্যন্ত ঋণ।",
    documentsRequired: [
      "Aadhaar Card of the Woman Beneficiary",
      "SC Caste Certificate",
      "Family Income Certificate (proving annual income ≤ ₹5.00 Lakh)",
      "Bank Account details in beneficiary's own name"
    ],
    whereToSubmit: "District Mahila Arthik Vikas Mahamandal or State SC Development Corporation"
  },
  {
    id: "may",
    nameEn: "NSFDC Mahila Adhikarita Yojana (MAY)",
    nameHi: "एनएसएफडीसी महिला अधिकारिता योजना (MAY)",
    nameBn: "এনএসএফডিসি মহিলা অধিকারিতা যোজনা",
    nodalAgency: "NSFDC / State Channelising Agencies",
    officialPortal: "https://nsfdc.nic.in/scheme",
    gazetteRef: "NSFDC MAY Guidelines 2023",
    minCost: 100000,
    maxCost: 2000000, // ₹20 Lakh
    coverPct: 0.90,
    rate: 4.0,
    tenureYears: 8,
    moratoriumMonths: 6,
    purpose: ["business"],
    allowedCategories: ["SC"],
    allowedGenders: ["female"],
    incomeCeiling: 500000,
    ventureType: ["greenfield", "brownfield"],
    sectors: ["Manufacturing", "Services", "Trading"],
    govtInterestSubsidy: "Targeted Women Entrepreneur Subvention: Subsidized 4% p.a. interest rate for SC women establishing small to medium enterprises.",
    keyBenefits: [
      "Up to ₹20 Lakh credit for women-owned enterprises",
      "Subsidized rate of 4.0% p.a. with long 8-year repayment tenure",
      "Promoter margin only 10%",
      "Priority assistance under state affirmative action mandates"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Prepare Project Profile", desc: "Formulate business plan for service center, boutique, food unit, or transport." },
      { step: "Step 2", title: "Submit to SCA Women's Cell", desc: "Submit application with revenue certificates." },
      { step: "Step 3", title: "Sanction & Asset Financing", desc: "Funds sanctioned and machinery purchased via vendor direct payment." }
    ],
    descriptionEn: "Term loan up to ₹20 Lakh for SC women entrepreneurs at a subsidized interest rate of 4% per annum.",
    descriptionHi: "अनुसूचित जाति की महिला उद्यमियों के लिए मात्र 4% ब्याज दर पर ₹20 लाख तक का सावधि ऋण।",
    descriptionBn: "তপশিলি জাতি নারী উদ্যোক্তাদের জন্য ৪% সুদে ₹২০ লাখ পর্যন্ত মেয়াদী ঋণ।",
    documentsRequired: [
      "Aadhaar Card and PAN Card of Woman Entrepreneur",
      "Caste Certificate & Income Certificate (≤ ₹5 Lakh)",
      "Detailed Project Profile with machinery quotes",
      "Bank Passbook copy"
    ],
    whereToSubmit: "State Channelising Agency (SCA) District Office"
  },

  // ==========================================================================
  // 5. MSME, GENERAL & ALL CITIZEN ENTREPRENEURS
  // ==========================================================================
  {
    id: "standup",
    nameEn: "Stand-Up India Scheme",
    nameHi: "स्टैंड-अप इंडिया योजना",
    nameBn: "স্ট্যান্ড-আপ ইন্ডিয়া যোজনা",
    nodalAgency: "Department of Financial Services / SIDBI",
    officialPortal: "https://standupmitra.in",
    gazetteRef: "DFS Circular No. 28/2016-F.No. 3/10/2015-AC",
    minCost: 1000000,
    maxCost: 10000000, // ₹1 Crore
    coverPct: 0.85,
    rate: 8.0,
    tenureYears: 7,
    moratoriumMonths: 18,
    purpose: ["business"],
    allowedCategories: ["SC", "ST", "General", "OBC", "EWS"], // Mandated for SC, ST OR Women of ANY category
    genderPriority: ["female", "male", "transgender"],
    noIncomeCeiling: true,
    ventureType: ["greenfield"],
    sectors: ["Manufacturing", "Services", "Trading", "Agri-Allied", "Clean Energy"],
    govtInterestSubsidy: "Guaranteed Lowest Interest & NCGTC Cover: Government mandates commercial banks to offer their lowest interest rate (MCLR + 3% tenor premium). Backed by Credit Guarantee Fund (CGFSI) ensuring zero third-party guarantee.",
    keyBenefits: [
      "Bank credit from ₹10 Lakh up to ₹1 Crore for greenfield (new) enterprises",
      "Mandatory quota: Every bank branch must finance at least one SC/ST borrower and one woman borrower",
      "Promoter margin money can be converged with state subsidy schemes down to 15%",
      "Long 18-month principal moratorium during initial startup phase"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Register on Stand-Up Mitra", desc: "Select 'Ready Borrower' and enter proposed greenfield enterprise details." },
      { step: "Step 2", title: "Branch Allotment", desc: "Application is routed directly to the designated Public Sector Bank branch in your district." },
      { step: "Step 3", title: "Appraisal & Sanction", desc: "Bank sanctions composite loan (term loan + cash credit) backed by government guarantee." }
    ],
    descriptionEn: "Mandatory bank loans between ₹10 Lakh and ₹1 Crore for SC/ST and women entrepreneurs (including General/OBC women) for greenfield ventures.",
    descriptionHi: "प्रत्येक बैंक शाखा द्वारा कम से कम एक एससी/एसटी तथा एक महिला उद्यमी को नया उद्यम शुरू करने हेतु ₹10 लाख से ₹1 करोड़ तक का बैंक ऋण।",
    descriptionBn: "প্রতিটি ব্যাংক শাখা থেকে এসসি/এসটি এবং যেকোনো শ্রেণীর নারী উদ্যোক্তাদের জন্য ₹১০ লাখ থেকে ₹১ কোটি পর্যন্ত ব্যাংক ঋণ।",
    documentsRequired: [
      "Proof of Identity (Aadhaar Card, PAN Card)",
      "Valid Caste Certificate (SC/ST) OR Proof of Woman Entrepreneurship (≥51% shareholding)",
      "Greenfield Self-Declaration (First-time commercial enterprise of applicant)",
      "Detailed Project Report (DPR) with capital expenditure and working capital estimates",
      "Trade License / NOC from local authority",
      "Rent Agreement / Registered Lease Deed for business location"
    ],
    whereToSubmit: "Nearest Public Sector Bank Branch or Lead District Manager (LDM)"
  },
  {
    id: "pmegp-mfg",
    nameEn: "PMEGP Manufacturing Sector Scheme",
    nameHi: "पीएमईजीपी विनिर्माण क्षेत्र योजना",
    nameBn: "পিএমইজিপি উৎপাদন ক্ষেত্র যোজনা",
    nodalAgency: "KVIC / KVIB / District Industries Centre (DIC) / MoMSME",
    officialPortal: "https://kviconline.gov.in/pmegp",
    gazetteRef: "MoMSME Notification PMEGP/Policy/2022-23/Cir-01",
    minCost: 500000,
    maxCost: 5000000, // Up to ₹50 Lakh for manufacturing
    coverPct: 0.95,
    subsidyPctRural: 0.35,
    subsidyPctUrban: 0.25,
    rate: 8.0,
    tenureYears: 7,
    moratoriumMonths: 6,
    purpose: ["business"],
    allowedCategories: ["SC", "ST", "OBC", "General", "EWS", "SafaiKaramchari"],
    noIncomeCeiling: true,
    ventureType: ["greenfield"],
    sectors: ["Manufacturing", "Clean Energy"],
    govtInterestSubsidy: "Up to 35% Non-Refundable Government Capital Subsidy: Government deposits up to ₹17.5 Lakh directly into a subsidy reserve fund. Beneficiary self-contribution is only 5% for SC/ST/Women/Rural/Safai Karamchari entrepreneurs (10% for General Urban).",
    keyBenefits: [
      "Up to ₹50 Lakh funding for setting up new manufacturing plants and factories",
      "35% non-refundable government subsidy in rural areas (25% in urban areas)",
      "Beneficiary own margin contribution is just 5% to 10% of total project cost",
      "Collateral-free credit covered under CGTMSE trust"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Apply Online via KVIC e-Portal", desc: "Select sponsoring agency (DIC, KVIC, or KVIB) and enter DPR data." },
      { step: "Step 2", title: "District Task Force Committee (DTFC)", desc: "DTFC interviews applicant and recommends proposal to chosen bank branch." },
      { step: "Step 3", title: "EDP Training & Sanction", desc: "Undergo mandatory Entrepreneurship Development Programme (EDP) online or offline." },
      { step: "Step 4", title: "Direct Subsidy Credit", desc: "Government deposits 25-35% subsidy into Term Deposit Receipt (TDR) account." }
    ],
    descriptionEn: "Credit-linked capital subsidy programme offering up to ₹50 Lakh with a 35% direct non-refundable government grant in rural areas.",
    descriptionHi: "विनिर्माण इकाइयों हेतु ₹50 लाख तक का ऋण, जिसमें 35% तक की सीधी गैर-वापसी योग्य सरकारी सब्सिडी।",
    descriptionBn: "নতুন উৎপাদনকারী কারখানা গড়ার জন্য ₹৫০ লাখ পর্যন্ত ঋণ এবং ৩৫% পর্যন্ত সরকারি সরাসরি অনুদান।",
    documentsRequired: [
      "Detailed Project Report (DPR) aligned with KVIC manufacturing guidelines",
      "Educational Qualification Certificate (minimum 8th standard pass for manufacturing projects > ₹10 Lakh)",
      "Special Category Certificate (SC/ST/OBC/Women/PwD/EWS if claiming higher subsidy)",
      "Rural Area Certificate issued by Gram Panchayat / Block Development Officer (for 35% subsidy)",
      "EDP Training Completion Certificate"
    ],
    whereToSubmit: "District Industries Centre (DIC) or KVIC / KVIB District Office"
  },
  {
    id: "pmegp-serv",
    nameEn: "PMEGP Service & Business Sector Scheme",
    nameHi: "पीएमईजीपी सेवा एवं व्यवसाय क्षेत्र योजना",
    nameBn: "পিএমইজিপি পরিষেবা ও ব্যবসা যোজনা",
    nodalAgency: "KVIC / DIC / MoMSME",
    officialPortal: "https://kviconline.gov.in/pmegp",
    gazetteRef: "MoMSME Circular No. PMEGP/Serv/2023-24",
    minCost: 200000,
    maxCost: 2000000, // Up to ₹20 Lakh for services
    coverPct: 0.95,
    subsidyPctRural: 0.35,
    subsidyPctUrban: 0.25,
    rate: 8.0,
    tenureYears: 7,
    moratoriumMonths: 6,
    purpose: ["business"],
    allowedCategories: ["SC", "ST", "OBC", "General", "EWS", "SafaiKaramchari"],
    noIncomeCeiling: true,
    ventureType: ["greenfield"],
    sectors: ["Services", "Trading"],
    govtInterestSubsidy: "Up to 35% Non-Refundable Government Capital Subsidy: Government deposits up to ₹7 Lakh directly into subsidy reserve. Beneficiary margin contribution is just 5% for SC/ST/Women/Special categories (10% for General).",
    keyBenefits: [
      "Up to ₹20 Lakh for service enterprises (clinics, testing labs, IT services, repair hubs, logistics)",
      "35% direct capital subsidy for rural applicants (25% in urban areas)",
      "Beneficiary own contribution is only 5% to 10%",
      "No third-party guarantee needed"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Submit Service DPR", desc: "Submit project report for service venture on KVIC e-portal." },
      { step: "Step 2", title: "Task Force Approval", desc: "District Task Force approves and forwards to your bank branch." },
      { step: "Step 3", title: "Loan Disbursement", desc: "Composite loan disbursed and subsidy locked for 3 years without interest." }
    ],
    descriptionEn: "Up to ₹20 Lakh financing for service and business units with up to 35% direct non-refundable government capital subsidy.",
    descriptionHi: "सेवा एवं व्यवसाय उद्यमों हेतु ₹20 लाख तक का ऋण, जिसमें 35% तक की गैर-वापसी योग्य सरकारी सब्सिडी।",
    descriptionBn: "পরিষেবা ও বাণিজ্যিক উদ্যোগের জন্য ₹২০ লাখ পর্যন্ত ঋণ এবং ৩৫% পর্যন্ত সরকারি অনুদান।",
    documentsRequired: [
      "Service Project Profile / DPR",
      "Education Certificate (min 8th pass for projects > ₹5 Lakh)",
      "Category Certificate (if applicable)",
      "Rural Certificate from Sarpanch / Gram Panchayat (if rural)",
      "Aadhaar and PAN Card"
    ],
    whereToSubmit: "General Manager, District Industries Centre (DIC)"
  },
  {
    id: "cgtmse",
    nameEn: "CGTMSE Collateral-Free Credit Guarantee Scheme",
    nameHi: "सूक्ष्म एवं लघु उद्यम क्रेडिट गारंटी योजना (CGTMSE)",
    nameBn: "সিজিটিএমএসই জামানতমুক্ত ঋণ গ্যারান্টি যোজনা",
    nodalAgency: "Ministry of MSME / SIDBI",
    officialPortal: "https://cgtmse.in",
    gazetteRef: "CGTMSE Policy Circular No. 222/2023-24",
    minCost: 1000000,
    maxCost: 10000000, // Capped at ₹1 Crore
    coverPct: 0.85,
    rate: 8.5,
    tenureYears: 7,
    moratoriumMonths: 12,
    purpose: ["business"],
    allowedCategories: ["SC", "ST", "OBC", "General", "EWS", "SafaiKaramchari"],
    noIncomeCeiling: true,
    isGuarantee: true,
    ventureType: ["greenfield", "brownfield"],
    sectors: ["Manufacturing", "Services", "Trading", "Tech / Innovation"],
    govtInterestSubsidy: "85% Sovereign Credit Guarantee: The trust provides up to 85% credit guarantee cover for women/SC/ST/micro enterprises, allowing banks to lend up to ₹1 Crore without demanding land, building, or gold collateral.",
    keyBenefits: [
      "Collateral-free bank loan up to ₹1 Crore for manufacturing and services",
      "85% guarantee cover for women, SC/ST, and aspirational district borrowers",
      "Concessional guarantee fee reduction for micro enterprises",
      "Available through all commercial banks, NBFCs, and Small Finance Banks"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Prepare Bank DPR", desc: "Prepare detailed project report showing viable debt-service coverage ratio (DSCR)." },
      { step: "Step 2", title: "Apply under CGTMSE at Bank", desc: "Request the bank manager to route the loan under the CGTMSE guarantee window." },
      { step: "Step 3", title: "Guarantee Approval", desc: "Bank locks guarantee online with SIDBI CGTMSE portal and disburses funds." }
    ],
    descriptionEn: "Collateral-free bank loans up to ₹1 Crore backed by up to 85% sovereign guarantee cover from Central Government trust.",
    descriptionHi: "बिना किसी संपत्ति गारंटी के ₹1 करोड़ तक का बैंक ऋण, जिसमें 85% तक की सरकारी गारंटी सुरक्षा।",
    descriptionBn: "কোনো স্থাবর সম্পত্তি বন্ধক ছাড়াই কেন্দ্রীয় সরকারের ৮৫% গ্যারান্টিতে ₹১ কোটি পর্যন্ত ব্যাংক ঋণ।",
    documentsRequired: [
      "Detailed Project Report (DPR) with 3-year projected cash flows",
      "Udyam Registration Certificate & PAN Card",
      "Bank Account statements for past 12 months",
      "Proof of business premise lease or title deed"
    ],
    whereToSubmit: "Any Member Lending Bank Branch (SBI, PNB, Canara, BoB, etc.)"
  },
  {
    id: "pm-vishwakarma",
    nameEn: "PM Vishwakarma Scheme (18 Traditional Trades)",
    nameHi: "पीएम विश्वकर्मा योजना (18 पारंपरिक शिल्प)",
    nameBn: "প্রধানমন্ত্রী বিশ্বকর্মা যোজনা",
    nodalAgency: "Ministry of MSME / MoSJE / Skill Development",
    officialPortal: "https://pmvishwakarma.gov.in",
    gazetteRef: "Gazette of India Extraordinary Part-II Sec 3(i) No. 445/2023",
    minCost: 10000,
    maxCost: 300000, // Up to ₹3 Lakh (₹1L Tier-1 + ₹2L Tier-2)
    coverPct: 1.0,
    rate: 5.0,
    tenureYears: 5,
    moratoriumMonths: 6,
    purpose: ["business"],
    allowedCategories: ["SC", "ST", "OBC", "General", "EWS", "SafaiKaramchari"],
    noIncomeCeiling: true,
    ventureType: ["greenfield", "brownfield"],
    sectors: ["Handicrafts"],
    govtInterestSubsidy: "Massive 8% Government Interest Subvention: Beneficiary pays an ultra-low fixed interest rate of just 5.0% p.a. The Government of India pays up to 8% interest subvention directly to the bank. Also includes a ₹15,000 free toolkit e-voucher.",
    keyBenefits: [
      "Collateral-free loan up to ₹3 Lakh at an extraordinary 5.0% fixed interest rate",
      "₹15,000 free advanced modern toolkit e-voucher / grant",
      "Free basic & advanced training with ₹500/day daily stipend",
      "Covers 18 traditional crafts: Carpenters, Blacksmiths, Potters, Cobblers, Masons, Tailors, Barbers, Washermen, etc."
    ],
    applicationSteps: [
      { step: "Step 1", title: "Register at Common Service Centre (CSC)", desc: "Biometric Aadhaar authentication and trade verification at any local CSC." },
      { step: "Step 2", title: "Gram Panchayat / ULB Verification", desc: "Sarpanch or Urban Local Body Chairman verifies traditional artisan trade." },
      { step: "Step 3", title: "Skill Training & Toolkit", desc: "Undergo 5 to 7-day training, receive ₹15,000 toolkit voucher and certificate." },
      { step: "Step 4", title: "Credit Disbursement", desc: "Tier 1 loan of ₹1 Lakh disbursed immediately at 5% rate; ₹2 Lakh upon repayment." }
    ],
    descriptionEn: "Comprehensive support for 18 traditional artisan trades offering ₹15,000 toolkit grant, training stipend, and loans up to ₹3 Lakh at 5% interest.",
    descriptionHi: "18 पारंपरिक दस्तकारों व कारीगरों हेतु ₹15,000 टूलकिट अनुदान तथा 5% रियायती ब्याज दर पर ₹3 लाख तक का ऋण।",
    descriptionBn: "১৮টি ঐতিহ্যবাহী পেশার কারিগরদের জন্য ₹১৫,০০০ আধুনিক টুলকিট অনুদান এবং ৫% সুদে ₹৩ লাখ পর্যন্ত জামানতমুক্ত ঋণ।",
    documentsRequired: [
      "Aadhaar Card with active mobile linkage",
      "Bank Account Passbook (Aadhaar seeded)",
      "Ration Card / Family Declaration",
      "Traditional trade verification from Gram Panchayat / Nagar Palika"
    ],
    whereToSubmit: "Local Common Service Centre (CSC) or District Industries Centre (DIC)"
  },
  {
    id: "pmfme",
    nameEn: "PM Formalisation of Micro Food Processing Enterprises (PMFME)",
    nameHi: "प्रधानमंत्री सूक्ष्म खाद्य उद्योग उन्नयन योजना (PMFME)",
    nameBn: "প্রধানমন্ত্রী ক্ষুদ্র খাদ্য প্রক্রিয়াকরণ উদ্যোগ যোজনা",
    nodalAgency: "Ministry of Food Processing Industries (MoFPI) / State Food Missions",
    officialPortal: "https://pmfme.mofpi.gov.in",
    gazetteRef: "MoFPI Guidelines F.No. 1-1/2020-FME",
    minCost: 100000,
    maxCost: 3000000, // Up to ₹30 Lakh
    coverPct: 0.90,
    rate: 8.0,
    tenureYears: 7,
    moratoriumMonths: 12,
    purpose: ["business"],
    allowedCategories: ["SC", "ST", "OBC", "General", "EWS", "SafaiKaramchari"],
    noIncomeCeiling: true,
    ventureType: ["greenfield", "brownfield"],
    sectors: ["Agri-Allied"],
    govtInterestSubsidy: "35% Credit-Linked Capital Subsidy: The Central Government gives a direct 35% non-refundable subsidy (up to ₹10 Lakh per unit) on project cost. Beneficiary margin money is only 10%.",
    keyBenefits: [
      "35% direct non-refundable capital subsidy (up to ₹10,00,000)",
      "Covers bakery, spices, flour mill, pickles, fruit juices, dairy, and cold-pressed oils",
      "FSSAI food license, packaging design, and branding support provided free",
      "Credit guarantee available through CGTMSE"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Apply on MoFPI PMFME Portal", desc: "Fill online application and select your One District One Product (ODOP) food category." },
      { step: "Step 2", title: "District Resource Person (DRP) Handholding", desc: "Government District Resource Person assists you in drafting your DPR and bank submission." },
      { step: "Step 3", title: "Bank Sanction & Subsidy Credit", desc: "Bank sanctions loan and the 35% subsidy is credited into your subsidy account." }
    ],
    descriptionEn: "35% credit-linked capital subsidy up to ₹10 Lakh for setting up or modernizing micro food processing units (flour mills, spice units, bakeries, juice plants).",
    descriptionHi: "खाद्य प्रसंस्करण इकाइयों (मसाले, आटा चक्की, बेकरी, अचार, तेल) हेतु ₹10 लाख तक की 35% सीधी सरकारी पूंजी सब्सिडी।",
    descriptionBn: "খাদ্য প্রক্রিয়াকরণ কারখানা (আটা কল, মশলা, বেকারি, আচার) স্থাপনের জন্য ৩৫% সরাসরি সরকারি অনুদান (সর্বোচ্চ ₹১০ লাখ)।",
    documentsRequired: [
      "Detailed Project Report (DPR) for food processing machinery and working capital",
      "FSSAI Food License / Registration or formal undertaking to obtain license",
      "Quotations of food-grade stainless steel machinery",
      "Proof of premise ownership or minimum 5-year lease deed",
      "Aadhaar Card, PAN Card, and Bank statements"
    ],
    whereToSubmit: "District Resource Person (DRP) / State Food Processing Mission or Lead Bank"
  },
  {
    id: "aif",
    nameEn: "Agriculture Infrastructure Fund (AIF)",
    nameHi: "कृषि अवसंरचना कोष (AIF)",
    nameBn: "কৃষি পরিকাঠামো তহবিল (এআইএফ)",
    nodalAgency: "Department of Agriculture & Farmers Welfare / NABARD",
    officialPortal: "https://agriinfra.dac.gov.in",
    gazetteRef: "MoA&FW Guidelines F.No. 1-1/2020-AIF",
    minCost: 1000000,
    maxCost: 10000000, // Capped at ₹1 Crore
    coverPct: 0.90,
    rate: 6.0,
    tenureYears: 7,
    moratoriumMonths: 24,
    purpose: ["business"],
    allowedCategories: ["SC", "ST", "OBC", "General", "EWS", "SafaiKaramchari"],
    noIncomeCeiling: true,
    ventureType: ["greenfield", "brownfield"],
    sectors: ["Agri-Allied"],
    govtInterestSubsidy: "3% Government Interest Subvention for 7 Years: The Central Government pays a direct 3.0% interest subvention into your loan account for up to 7 years. Credit guarantee fee under CGTMSE is also paid 100% by the Government.",
    keyBenefits: [
      "Long-term debt up to ₹1 Crore for post-harvest agri-infrastructure",
      "Direct 3.0% interest subvention for 7 years reducing borrowing rate down to 5-6% p.a.",
      "100% credit guarantee fee borne by the Government of India",
      "Covers warehouses, cold storage, sorting/grading units, solar dryers, and custom hiring centers"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Register on Agri Infra Portal", desc: "Submit project proposal on agriinfra.dac.gov.in." },
      { step: "Step 2", title: "Ministry Verification", desc: "Project is verified online within 10 working days and sent to chosen bank." },
      { step: "Step 3", title: "Sanction & Subvention Activation", desc: "Bank sanctions loan with automatic 3% interest subvention adjustment." }
    ],
    descriptionEn: "Subsidized farm credit up to ₹1 Crore with 3% annual interest subvention for warehouses, cold stores, and primary processing centers.",
    descriptionHi: "गोदाम, कोल्ड स्टोरेज एवं ग्रेडिंग इकाइयों हेतु 3% ब्याज सब्सिडी के साथ ₹1 करोड़ तक का कृषि अवसंरचना ऋण।",
    descriptionBn: "গুদাম, কোল্ড স্টোরেজ ও কৃষি প্রক্রিয়াকরণ কেন্দ্র গড়ার জন্য ৩% বার্ষিক সুদ ভর্তুকি সহ ₹১ কোটি পর্যন্ত ঋণ।",
    documentsRequired: [
      "Detailed Project Report (DPR) of post-harvest agri project",
      "Land Ownership Record (7/12 extract / Khatauni / Jamabandi) or registered lease for min 10 years",
      "Statutory building and environmental approvals",
      "PAN Card and KYC documents of borrower"
    ],
    whereToSubmit: "Agriculture Infrastructure Portal (agriinfra.dac.gov.in) & Participating Banks"
  },
  {
    id: "pm-kusum",
    nameEn: "PM-KUSUM (Component B - Standalone Solar Agriculture Pumps)",
    nameHi: "प्रधानमंत्री कुसुम योजना (घटक-बी: सौर कृषि पंप)",
    nameBn: "প্রধানমন্ত্রী কুসুম যোজনা (সৌর পাম্প)",
    nodalAgency: "Ministry of New and Renewable Energy (MNRE) / State Discoms",
    officialPortal: "https://pmkusum.mnre.gov.in",
    gazetteRef: "MNRE Order No. 32/645/2017-SPV Division",
    minCost: 150000,
    maxCost: 750000,
    coverPct: 0.90,
    rate: 6.0,
    tenureYears: 5,
    moratoriumMonths: 3,
    purpose: ["business"],
    allowedCategories: ["SC", "ST", "OBC", "General", "EWS", "SafaiKaramchari"],
    noIncomeCeiling: true,
    ventureType: ["greenfield"],
    sectors: ["Clean Energy", "Agri-Allied"],
    govtInterestSubsidy: "60% Direct Non-Refundable Government Subsidy: Central Government provides 30% subsidy and State Government provides 30% subsidy (total 60% free grant). Farmer contributes only 10% cash, remaining 30% by bank loan.",
    keyBenefits: [
      "60% direct government grant for solar water pumps (up to 7.5 HP)",
      "Farmer pays only 10% own contribution",
      "Zero monthly electricity bills — operates 100% on solar power",
      "5-year comprehensive warranty and remote solar maintenance included"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Register on State Renewable Energy Portal", desc: "Apply on state renewable agency (e.g. MEDA, HAREDA, UPNEDA) portal." },
      { step: "Step 2", title: "Site Verification", desc: "Discom officer checks borewell depth and water source availability." },
      { step: "Step 3", title: "Installation", desc: "Authorized solar vendor installs solar panel array and submersible pump." }
    ],
    descriptionEn: "60% non-refundable government subsidy for installing standalone off-grid solar agriculture pumps up to 7.5 HP.",
    descriptionHi: "सौर कृषि पंप लगाने हेतु केंद्र एवं राज्य सरकार द्वारा 60% सीधी मुफ्त सब्सिडी, किसान को मात्र 10% अंशदान देना होगा।",
    descriptionBn: "সৌর কৃষি পাম্প বসানোর জন্য কেন্দ্র ও রাজ্য সরকার মিলিয়ে ৬০% সরাসরি অনুদান, কৃষককে দিতে হবে মাত্র ১০%।",
    documentsRequired: [
      "Land Ownership Documents (7/12 extract / Khasra / Khatoni)",
      "Proof of active borewell / water source on farm",
      "Aadhaar Card and Bank Passbook",
      "Caste Certificate (for special category priority allocation)"
    ],
    whereToSubmit: "State Renewable Energy Development Agency (NEDA / MEDA / HAREDA) Office"
  },
  {
    id: "mudra-tarun",
    nameEn: "Pradhan Mantri MUDRA Yojana (Tarun Tier)",
    nameHi: "प्रधानमंत्री मुद्रा योजना (तरुण श्रेणी)",
    nameBn: "প্রধানমন্ত্রী মুদ্রা যোজনা (তরুণ পর্যায়)",
    nodalAgency: "MUDRA Ltd. / Scheduled Commercial Banks",
    officialPortal: "https://mudra.org.in",
    gazetteRef: "PMMY Operational Guidelines 2024",
    minCost: 500001,
    maxCost: 2000000, // Enhanced to ₹20 Lakh (Tarun Plus)
    coverPct: 0.85,
    rate: 9.0,
    tenureYears: 5,
    moratoriumMonths: 6,
    purpose: ["business"],
    allowedCategories: ["SC", "ST", "OBC", "General", "EWS", "SafaiKaramchari"],
    noIncomeCeiling: true,
    ventureType: ["greenfield", "brownfield"],
    sectors: ["Manufacturing", "Services", "Trading"],
    govtInterestSubsidy: "Government Refinanced Credit Line: Refinanced by SIDBI with CGFMU credit guarantee cover, eliminating any need for residential or commercial property mortgage.",
    keyBenefits: [
      "Enhanced funding up to ₹20 Lakh (Tarun Plus) for established micro enterprises",
      "Collateral-free financing backed by national guarantee trust",
      "Term loan for plant & machinery plus working capital limits",
      "Concessional interest rate structure"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Submit Business Financials", desc: "Submit 1-year sales records, ITR (if available), and asset quotations." },
      { step: "Step 2", title: "Bank Credit Assessment", desc: "Bank examines repayment capability and issues in-principle sanction." },
      { step: "Step 3", title: "Loan Execution", desc: "Loan disbursed and MUDRA debit card issued for day-to-day operations." }
    ],
    descriptionEn: "Collateral-free business credit up to ₹20 Lakh for growing micro and small commercial enterprises.",
    descriptionHi: "स्थापित सूक्ष्म एवं लघु उद्यमों के आधुनिकीकरण हेतु ₹20 लाख तक का संपार्श्विक-मुक्त ऋण।",
    descriptionBn: "প্রতিষ্ঠিত ক্ষুদ্র ব্যবসায়ের আধুনিকীকরণ ও বৃদ্ধির জন্য ₹২০ লাখ পর্যন্ত জামানতমুক্ত ঋণ।",
    documentsRequired: [
      "Udyam Registration Certificate & GST Registration (if applicable)",
      "Identity and Address Proof of all partners/proprietor",
      "Bank statements of the past 12 months",
      "Projected balance sheet / sales estimate for loan tenure"
    ],
    whereToSubmit: "Commercial Bank Branch (MSME Division)"
  },
  {
    id: "mudra-kishore",
    nameEn: "Pradhan Mantri MUDRA Yojana (Kishore Tier)",
    nameHi: "प्रधानमंत्री मुद्रा योजना (किशोर श्रेणी)",
    nameBn: "প্রধানমন্ত্রী মুদ্রা যোজনা (কিশোর পর্যায়)",
    nodalAgency: "MUDRA Ltd. / Commercial Banks",
    officialPortal: "https://mudra.org.in",
    gazetteRef: "PMMY Guidelines Section 2",
    minCost: 50001,
    maxCost: 500000, // ₹50,001 to ₹5 Lakh
    coverPct: 0.90,
    rate: 8.5,
    tenureYears: 5,
    moratoriumMonths: 6,
    purpose: ["business"],
    allowedCategories: ["SC", "ST", "OBC", "General", "EWS", "SafaiKaramchari"],
    noIncomeCeiling: true,
    ventureType: ["greenfield", "brownfield"],
    sectors: ["Manufacturing", "Services", "Trading", "Agri-Allied"],
    govtInterestSubsidy: "CGFMU Collateral Guarantee: 100% guarantee cover provided under Credit Guarantee Fund for Micro Units. Government refinance keeps interest rates concessional.",
    keyBenefits: [
      "Collateral-free business credit between ₹50,000 and ₹5 Lakh",
      "No mortgage required — credit guarantee provided by Central Government",
      "Combination of Term Loan (for machinery) and Working Capital MUDRA Card",
      "Available across all commercial and rural banks"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Submit Quotations & Form", desc: "Submit application with machinery/equipment proforma invoices." },
      { step: "Step 2", title: "Bank Verification", desc: "Branch assesses business cash flows and validates Udyam Registration." },
      { step: "Step 3", title: "Disbursement", desc: "Term loan paid to vendor and overdraft limit set on MUDRA card." }
    ],
    descriptionEn: "Collateral-free credit from ₹50,000 to ₹5 Lakh for expanding small retail, services, and manufacturing units.",
    descriptionHi: "छोटे व्यापार, सेवा और उत्पादन इकाइयों के विस्तार हेतु ₹50,000 से ₹5 लाख तक का बिना गारंटी ऋण।",
    descriptionBn: "ব্যবসার সম্প্রসারণ ও যন্ত্রপাতি কেনার জন্য ₹৫০,০০০ থেকে ₹৫ লাখ পর্যন্ত জামানতমুক্ত ঋণ।",
    documentsRequired: [
      "Udyam Registration Certificate",
      "Identity Proof & Address Proof (Aadhaar, PAN)",
      "Bank Account statement of the last 6 months",
      "Quotations for machinery or stock to be purchased"
    ],
    whereToSubmit: "Any Public or Private Sector Bank Branch"
  },
  {
    id: "mudra-shishu",
    nameEn: "Pradhan Mantri MUDRA Yojana (Shishu Tier)",
    nameHi: "प्रधानमंत्री मुद्रा योजना (शिशु श्रेणी)",
    nameBn: "প্রধানমন্ত্রী মুদ্রা যোজনা (শিশু পর্যায়)",
    nodalAgency: "MUDRA Ltd. / Scheduled Commercial Banks",
    officialPortal: "https://mudra.org.in",
    gazetteRef: "PMMY Shishu Micro Lending Norms",
    minCost: 10000,
    maxCost: 50000, // Up to ₹50,000
    coverPct: 1.0,
    rate: 7.5,
    tenureYears: 5,
    moratoriumMonths: 3,
    purpose: ["business"],
    allowedCategories: ["SC", "ST", "OBC", "General", "EWS", "SafaiKaramchari"],
    noIncomeCeiling: true,
    ventureType: ["greenfield", "brownfield"],
    sectors: ["Trading", "Services", "Handicrafts"],
    govtInterestSubsidy: "Zero Processing Fees & 2% Interest Subvention (PMMY): Beneficiaries pay zero processing fee and zero collateral. Prompt repayment unlocks a 2% interest subvention paid by Government.",
    keyBenefits: [
      "Instant business loan up to ₹50,000 for tiny vendors and home businesses",
      "Zero collateral, zero margin money requirement (100% financed)",
      "Zero bank processing charges",
      "Available across all commercial banks, cooperative banks, and microfinance institutions"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Fill 1-Page MUDRA Form", desc: "Submit simple form to any commercial bank branch." },
      { step: "Step 2", title: "Instant KYC Check", desc: "Bank verifies Aadhaar and business premise/vending location." },
      { step: "Step 3", title: "Disbursement", desc: "Amount credited directly to savings/current account." }
    ],
    descriptionEn: "Collateral-free micro loans up to ₹50,000 for small shops, fruit vendors, artisans, and home enterprise.",
    descriptionHi: "छोटे दुकानदारों, फेरीवालों और गृह उद्योगों हेतु बिना गारंटी ₹50,000 तक का त्वरित मुद्रा ऋण।",
    descriptionBn: "ক্ষুদ্র দোকানদার, হকার ও ছোট ব্যবসার জন্য কোনো জামানত ছাড়াই ₹৫০,০০০ পর্যন্ত মুদ্রা ঋণ।",
    documentsRequired: [
      "Aadhaar Card and Voter ID Card",
      "Proof of business address / Vending certificate / Trade license",
      "Passport size photographs (2 copies)"
    ],
    whereToSubmit: "Any Commercial Bank, Regional Rural Bank (RRB), or Micro Finance Institution"
  },
  {
    id: "pmsvanidhi-1",
    nameEn: "PM SVANidhi (Street Vendor Micro Credit - 1st Tranche)",
    nameHi: "पीएम स्वनिधि योजना (प्रथम किश्त)",
    nameBn: "পিএম স্বনিধি যোজনা (প্রথম কিস্তি)",
    nodalAgency: "Ministry of Housing and Urban Affairs (MoHUA) / SIDBI",
    officialPortal: "https://pmsvanidhi.mohua.gov.in",
    gazetteRef: "MoHUA Notification No. K-12018/1/2020-UPA-II",
    minCost: 5000,
    maxCost: 10000, // ₹10,000
    coverPct: 1.0,
    rate: 7.0,
    tenureYears: 1,
    moratoriumMonths: 1,
    purpose: ["business"],
    allowedCategories: ["SC", "ST", "OBC", "General", "EWS", "SafaiKaramchari"],
    noIncomeCeiling: true,
    ventureType: ["greenfield", "brownfield"],
    sectors: ["Trading", "Services"],
    govtInterestSubsidy: "7% Government Interest Subvention: Government pays a 7.0% interest subvention directly into the vendor's bank account on prompt repayment. Also includes up to ₹1,200 annual cash-back on digital payments.",
    keyBenefits: [
      "Instant working capital loan of ₹10,000 without any collateral or guarantee",
      "7% annual interest subvention credited directly into savings account",
      "Monthly cash-back rewards up to ₹100 for receiving customer UPI payments",
      "Timely repayment automatically qualifies you for a ₹20,000 second tranche loan"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Check Vending ID / LOR", desc: "Obtain Vending ID or Letter of Recommendation (LOR) from Urban Local Body (ULB)." },
      { step: "Step 2", title: "Apply at Bank or CSC", desc: "Submit 1-page form via pmsvanidhi.mohua.gov.in." },
      { step: "Step 3", title: "Direct Credit", desc: "₹10,000 credited within 7 working days." }
    ],
    descriptionEn: "Collateral-free working capital loan of ₹10,000 for urban street vendors with 7% interest subvention and digital cashback.",
    descriptionHi: "शहरी रेहड़ी-पटरी विक्रेताओं हेतु बिना गारंटी ₹10,000 का कार्यशील पूंजी ऋण, 7% ब्याज सब्सिडी के साथ।",
    descriptionBn: "শহরের হকার ও ক্ষুদ্র বিক্রেতাদের জন্য ৭% সুদ ভর্তুকি সহ ₹১০,০০০ জামানতমুক্ত ঋণ।",
    documentsRequired: [
      "Urban Local Body (ULB) Vending Certificate or Letter of Recommendation (LOR)",
      "Aadhaar Card linked with active mobile number",
      "Bank Account details (Aadhaar seeded)"
    ],
    whereToSubmit: "Local Municipal Corporation / Municipality Office or Common Service Centre (CSC)"
  },
  {
    id: "pmsvanidhi-2",
    nameEn: "PM SVANidhi (Street Vendor Loan - 2nd Tranche)",
    nameHi: "पीएम स्वनिधि योजना (द्वितीय किश्त)",
    nameBn: "পিএম স্বনিধি যোজনা (দ্বিতীয় কিস্তি)",
    nodalAgency: "MoHUA / Commercial Banks",
    officialPortal: "https://pmsvanidhi.mohua.gov.in",
    gazetteRef: "MoHUA Notification No. K-12018/1/2020-UPA-II",
    minCost: 10000,
    maxCost: 20000, // ₹20,000
    coverPct: 1.0,
    rate: 7.0,
    tenureYears: 1.5,
    moratoriumMonths: 1,
    purpose: ["business"],
    allowedCategories: ["SC", "ST", "OBC", "General", "EWS", "SafaiKaramchari"],
    noIncomeCeiling: true,
    ventureType: ["brownfield"],
    sectors: ["Trading", "Services"],
    govtInterestSubsidy: "7% Interest Subvention & Higher Limit: Government continues 7% interest subvention for vendors who repaid their 1st tranche on time.",
    keyBenefits: [
      "Enhanced ₹20,000 working capital loan with no collateral",
      "7% interest subvention paid quarterly by Ministry directly to your bank",
      "Pre-approved based on prompt repayment of 1st loan",
      "Enables expansion of vending stock, fruit carts, or tea kiosks"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Complete 1st Loan Repayment", desc: "Ensure all monthly EMIs of ₹10,000 loan are cleared." },
      { step: "Step 2", title: "Instant Portal Renewal", desc: "Apply for 2nd tranche on pmsvanidhi.mohua.gov.in." },
      { step: "Step 3", title: "Direct Credit", desc: "₹20,000 credited directly by the financing bank." }
    ],
    descriptionEn: "Enhanced ₹20,000 loan for urban street vendors who successfully repaid their first tranche with 7% interest subvention.",
    descriptionHi: "प्रथम ऋण के सफल पुनर्भुगतान पर रेहड़ी-पटरी विक्रेताओं हेतु ₹20,000 का संवर्धित ऋण।",
    descriptionBn: "প্রথম ঋণ সঠিক সময়ে পরিশোধকারী হকারদের জন্য ৭% সুদ ভর্তুকি সহ ₹২০,০০০ দ্বিতীয় কিস্তি ঋণ।",
    documentsRequired: [
      "Aadhaar Card",
      "No-dues certificate or passbook showing clearance of 1st PM SVANidhi loan",
      "Vending ID / Certificate"
    ],
    whereToSubmit: "Financing Bank Branch or Municipal ULB Nodal Officer"
  },
  {
    id: "pmsvanidhi-3",
    nameEn: "PM SVANidhi (Street Vendor Loan - 3rd Tranche)",
    nameHi: "पीएम स्वनिधि योजना (तृतीय किश्त)",
    nameBn: "পিএম স্বনিধি যোজনা (তৃতীয় কিস্তি)",
    nodalAgency: "MoHUA / Commercial Banks",
    officialPortal: "https://pmsvanidhi.mohua.gov.in",
    gazetteRef: "MoHUA Notification No. K-12018/1/2020-UPA-II",
    minCost: 20000,
    maxCost: 50000, // ₹50,000
    coverPct: 1.0,
    rate: 7.0,
    tenureYears: 3,
    moratoriumMonths: 1,
    purpose: ["business"],
    allowedCategories: ["SC", "ST", "OBC", "General", "EWS", "SafaiKaramchari"],
    noIncomeCeiling: true,
    ventureType: ["brownfield"],
    sectors: ["Trading", "Services"],
    govtInterestSubsidy: "7% Interest Subvention for Micro Vendors: Government provides 7% interest subvention on the full ₹50,000 loan amount.",
    keyBenefits: [
      "Maximum ₹50,000 business loan for graduating street vendors",
      "Flexible 36-month repayment period",
      "7% government-paid interest subvention",
      "Assists vendors in setting up permanent semi-pucca kiosks and shops"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Clear 2nd Tranche", desc: "Repay ₹20,000 second tranche on schedule." },
      { step: "Step 2", title: "Apply for 3rd Tranche", desc: "Portal automatically unlocks ₹50,000 loan request." },
      { step: "Step 3", title: "Disbursement", desc: "₹50,000 disbursed to bank account." }
    ],
    descriptionEn: "Maximum ₹50,000 collateral-free credit for urban micro vendors with 7% government interest subvention.",
    descriptionHi: "रेहड़ी-पटरी विक्रेताओं को स्थायी दुकान व व्यवसाय विस्तार हेतु ₹50,000 तक का अंतिम किश्त ऋण।",
    descriptionBn: "হকার ও ক্ষুদ্র ব্যবসায়ীদের স্থায়ী দোকান গড়ার জন্য ৭% সুদ ভর্তুকি সহ সর্বোচ্চ ₹৫০,০০০ ঋণ।",
    documentsRequired: [
      "Aadhaar Card and Bank Passbook",
      "Record of timely repayment of 2nd tranche loan",
      "Vending ID / ULB Certificate"
    ],
    whereToSubmit: "Bank Branch or Municipal Urban Local Body (ULB) Office"
  },
  {
    id: "day-nrlm",
    nameEn: "Deendayal Antyodaya Yojana - NRLM (Women SHG Linkage)",
    nameHi: "दीनदयाल अंत्योदय योजना - राष्ट्रीय ग्रामीण आजीविका मिशन (DAY-NRLM)",
    nameBn: "দীনদয়াল অন্ত্যোদয় যোজনা - এনআরএলএম",
    nodalAgency: "Ministry of Rural Development (MoRD) / State SRLMs",
    officialPortal: "https://aajeevika.gov.in",
    gazetteRef: "MoRD Master Circular DAY-NRLM 2023-24",
    minCost: 100000,
    maxCost: 2000000, // Up to ₹20 Lakh collateral free
    coverPct: 1.0,
    rate: 7.0,
    tenureYears: 5,
    moratoriumMonths: 3,
    purpose: ["business"],
    allowedCategories: ["SC", "ST", "OBC", "General", "EWS", "SafaiKaramchari"],
    allowedGenders: ["female"],
    noIncomeCeiling: true,
    ventureType: ["greenfield", "brownfield"],
    sectors: ["Trading", "Services", "Handicrafts", "Agri-Allied"],
    govtInterestSubsidy: "Interest Subvention to 7% (Further 3% Subvention for Prompt Repayment): Government subsidizes bank interest rate down to 7.0% p.a. on loans up to ₹3 Lakh. Prompt repayment earns an extra 3% subvention, slashing the effective interest rate to just 4.0% p.a.!",
    keyBenefits: [
      "Collateral-free credit up to ₹20 Lakh for women Self-Help Groups (SHGs)",
      "Effective interest rate slashed to just 4.0% p.a. upon prompt repayment",
      "Community Investment Support Fund (CIF) grant provided to every SHG",
      "Training in enterprise management, packaging, and Government e-Marketplace (GeM) sales"
    ],
    applicationSteps: [
      { step: "Step 1", title: "SHG Formation & Panchasutra Compliance", desc: "Women group complies with 5 principles (regular meetings, savings, inter-loaning, repayment, record keeping)." },
      { step: "Step 2", title: "Micro Credit Plan (MCP) Preparation", desc: "Prepare enterprise investment plan with Village Organization (VO) animator." },
      { step: "Step 3", title: "Bank Credit Linkage", desc: "Bank sanctions collateral-free credit line directly to the SHG account." }
    ],
    descriptionEn: "Collateral-free credit up to ₹20 Lakh for rural women Self-Help Groups with interest rate slashed down to 4% p.a. on prompt repayment.",
    descriptionHi: "ग्रामीण महिला स्वयं सहायता समूहों हेतु ₹20 लाख तक का बिना गारंटी ऋण, समय पर भुगतान करने पर मात्र 4% प्रभावी ब्याज दर।",
    descriptionBn: "গ্রামীণ মহিলা স্বনির্ভর দলগুলির জন্য জামানতমুক্ত ₹২০ লাখ পর্যন্ত ঋণ এবং সময়মতো পরিশোধে মাত্র ৪% সুদের হার।",
    documentsRequired: [
      "SHG Resolution Letter signed by all members",
      "SHG Savings Account Passbook with 6-month operation record",
      "Micro Credit Plan (MCP) certified by Village Organization (VO)",
      "KYC documents of SHG office bearers (President, Secretary, Treasurer)"
    ],
    whereToSubmit: "Block Mission Management Unit (BMMU) / State Rural Livelihood Mission or Lead Bank"
  },
  {
    id: "day-nulm-sep-i",
    nameEn: "DAY-NULM Self Employment Programme (SEP-I - Individual)",
    nameHi: "दीनदयाल अंत्योदय योजना - एनयूएलएम व्यक्तिगत स्वरोजगार (SEP-I)",
    nameBn: "এনইউএলএম ব্যক্তিগত স্বনির্ভর কর্মসংস্থান প্রকল্প",
    nodalAgency: "Ministry of Housing and Urban Affairs (MoHUA)",
    officialPortal: "https://nulm.gov.in",
    gazetteRef: "MoHUA DAY-NULM Mission Guidelines",
    minCost: 50000,
    maxCost: 200000, // ₹2 Lakh individual
    coverPct: 0.95,
    rate: 7.0,
    tenureYears: 5,
    moratoriumMonths: 6,
    purpose: ["business"],
    allowedCategories: ["SC", "ST", "OBC", "General", "EWS", "SafaiKaramchari"],
    incomeCeiling: 300000,
    ventureType: ["greenfield"],
    sectors: ["Services", "Trading"],
    govtInterestSubsidy: "Interest Subvention Above 7%: The Central Government pays all interest charged by the financing bank over and above 7% p.a. directly to the bank as an interest subsidy.",
    keyBenefits: [
      "Bank credit up to ₹2 Lakh for urban poor individuals to establish micro enterprises",
      "Government absorbs all interest above 7% p.a.",
      "Beneficiary margin contribution only 5%",
      "No collateral or third-party guarantee required for loans up to ₹2 Lakh"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Apply at Urban Local Body (ULB)", desc: "Submit application to City Mission Management Unit (CMMU) at your Municipality." },
      { step: "Step 2", title: "Task Force Committee Approval", desc: "ULB Task Force interviews candidate and forwards proposal to chosen bank branch." },
      { step: "Step 3", title: "Loan Disbursement", desc: "Bank releases funds and government credits interest subvention quarterly." }
    ],
    descriptionEn: "Subsidized bank loan up to ₹2 Lakh for urban poor individuals with government paying all interest over 7% p.a.",
    descriptionHi: "शहरी गरीबों हेतु ₹2 लाख तक का स्वरोजगार ऋण, जिसमें 7% से अधिक का समस्त ब्याज सरकार द्वारा देय।",
    descriptionBn: "শহরের দরিদ্র ব্যক্তিদের জন্য ₹২ লাখ পর্যন্ত স্বনির্ভর ঋণ, যেখানে ৭% এর উপরের সমস্ত সুদ সরকার প্রদান করে।",
    documentsRequired: [
      "Aadhaar Card and Urban Residence Proof",
      "Income Certificate (confirming family income ≤ ₹3 Lakh / BPL status)",
      "Brief Project Report for micro venture",
      "Bank Account details"
    ],
    whereToSubmit: "City Mission Management Unit (CMMU) at Municipal Corporation / Council Office"
  },
  {
    id: "pm-daksh",
    nameEn: "PM-DAKSH (Pradhan Mantri Dakshta Aur Kushalta Hitgrahi)",
    nameHi: "पीएम-दक्ष योजना (कौशल एवं स्वरोजगार संवर्धन)",
    nameBn: "প্রধানমন্ত্রী দক্ষ যোজনা",
    nodalAgency: "MoSJE / NSFDC / NBCFDC / NSKFDC",
    officialPortal: "https://pmdaksh.dosje.gov.in",
    gazetteRef: "MoSJE PM-DAKSH Operational Directives 2021",
    minCost: 10000,
    maxCost: 200000,
    coverPct: 1.0,
    rate: 0.0,
    tenureYears: 1,
    moratoriumMonths: 6,
    purpose: ["business"],
    allowedCategories: ["SC", "OBC", "SafaiKaramchari", "EWS"],
    incomeCeiling: 300000,
    ventureType: ["greenfield"],
    sectors: ["Services", "Handicrafts"],
    govtInterestSubsidy: "100% Free Skill Training & Wage Stipend: Free government skill training with ₹1,000 to ₹1,500/month stipend, followed by subsidized post-training business loan linkage at 4-6% interest.",
    keyBenefits: [
      "Free certified upskilling and entrepreneurial development courses",
      "Direct monthly wage compensation stipend deposited into Aadhaar-linked account",
      "Guaranteed institutional credit linkage for setting up trade ventures upon course completion",
      "Toolkits and starter equipment assistance"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Enroll on PM-DAKSH Portal", desc: "Select preferred skill course (electrical, apparel, automotive, digital services)." },
      { step: "Step 2", title: "Training Completion", desc: "Undergo certified training and receive toolkits and completion certificate." },
      { step: "Step 3", title: "Microcredit Sanction", desc: "District SCA sanctions microcredit to establish independent trade unit." }
    ],
    descriptionEn: "Comprehensive skill development and subsidized self-employment credit linkage for SC, OBC, and sanitation workers.",
    descriptionHi: "कौशल उन्नयन एवं स्वरोजगार हेतु पूर्णतः निःशुल्क प्रशिक्षण, छात्रवृत्ति एवं रियायती ऋण सहायता।",
    descriptionBn: "দক্ষতা বৃদ্ধি ও ব্যবসার উদ্দেশ্যে বিনামূল্যে প্রশিক্ষণ, মাসিক ভাতা এবং সহজ শর্তে ঋণ সহায়তা।",
    documentsRequired: [
      "Aadhaar Card",
      "Caste Certificate (SC/OBC/EWS) or Sanitation Worker certificate",
      "Annual Family Income Certificate (≤ ₹3.00 Lakh)",
      "Bank Account details (Aadhaar seeded)"
    ],
    whereToSubmit: "District Skill Development Office or State SC/BC Development Corporation"
  },
  {
    id: "tread",
    nameEn: "TREAD Scheme for Women (Trade Related Assistance)",
    nameHi: "ट्रीड योजना (महिला उद्यमिता सहायता)",
    nameBn: "ট্রিড যোজনা (মহিলা বাণিজ্য সহায়তা)",
    nodalAgency: "Ministry of MSME / Lending Institutions",
    officialPortal: "https://dcmsme.gov.in",
    gazetteRef: "MoMSME TREAD Guidelines",
    minCost: 100000,
    maxCost: 3000000, // Up to ₹30 Lakh
    coverPct: 0.95,
    rate: 7.0,
    tenureYears: 5,
    moratoriumMonths: 6,
    purpose: ["business"],
    allowedCategories: ["SC", "ST", "OBC", "General", "EWS", "SafaiKaramchari"],
    allowedGenders: ["female"],
    noIncomeCeiling: true,
    ventureType: ["greenfield", "brownfield"],
    sectors: ["Services", "Trading", "Handicrafts"],
    govtInterestSubsidy: "30% Direct Non-Refundable Government Grant: Government of India provides a 30% direct grant (up to ₹9 Lakh) through promoting NGOs, while banks finance the remaining 70% as loan.",
    keyBenefits: [
      "30% non-refundable government grant provided directly for women entrepreneur groups",
      "Financial assistance up to ₹30 Lakh per enterprise project",
      "Free counseling, market survey, and product development training",
      "No mortgage required from poor women entrepreneurs"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Connect with Sponsoring NGO / Institution", desc: "Register through an experienced registered NGO / Self-Help Group federation." },
      { step: "Step 2", title: "Submit Joint Proposal to MSME-DFO", desc: "Submit DPR to local MSME Development & Facilitation Office." },
      { step: "Step 3", title: "Grant & Loan Release", desc: "30% grant credited by Ministry and bank disburses remaining 70%." }
    ],
    descriptionEn: "30% direct government grant on project costs for poor women entrepreneurs establishing micro enterprises in trading, manufacturing, and crafts.",
    descriptionHi: "निर्धन महिला उद्यमियों के व्यावसायिक प्रोजेक्ट हेतु 30% सीधी गैर-वापसी योग्य सरकारी अनुदान सहायता।",
    descriptionBn: "দরিদ্র মহিলা উদ্যোক্তাদের ব্যবসার জন্য ৩০% পর্যন্ত সরাসরি অ-ফেরতযোগ্য সরকারি অনুদান।",
    documentsRequired: [
      "Detailed Project Report for women's enterprise",
      "Sponsoring NGO / Agency Registration and track record",
      "KYC documents and bank accounts of women beneficiaries",
      "Group resolution and trade plan"
    ],
    whereToSubmit: "Local MSME Development & Facilitation Office (MSME-DFO) / Sponsoring Agency"
  }
];

if (typeof window !== "undefined") {
  window.SCHEMES_DATA = SCHEMES_DATA;
}
