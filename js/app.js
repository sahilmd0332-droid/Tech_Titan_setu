/**
 * Setu 2.0 - Official National Civic Scheme Portal Controller
 * SIH 2026 Problem Statement 92 (Ministry of Social Justice & Empowerment)
 * 
 * Features:
 * 1. Multi-Language Switcher (English, Hindi, Bengali) with dynamic real-time i18n
 * 2. Strict Sequential Step Gating: 1 -> 2 -> 3 -> 4. None page can be skipped.
 * 3. Verified schemes for all categories (SC, ST, OBC, General, EWS, Safai Karamchari)
 * 4. True verified location channel partners for all Indian States & UTs
 * 5. Capped at ₹1 Crore maximum project cost
 * 6. Mobile-first dynamic touch interactions
 * 7. Dedicated interactive EMI & Government Subsidy Simulator
 */

(function () {
  "use strict";

  // State Management
  let currentLang = "en"; // 'en' | 'hi' | 'bn'
  let activeSection = "profile"; // 'profile' | 'schemes' | 'details' | 'calculator'
  let activeProfile = null;
  let matchingEngine = null;
  let availableMatches = [];
  let selectedSchemeItem = null;
  let toastTimer = null;

  // Indian States & UTs
  const INDIAN_STATES = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
    "Delhi", "Jammu and Kashmir", "Ladakh", "Puducherry", "Chandigarh"
  ];

  // ==========================================================================
  // 1. Comprehensive i18n Multi-Language Dictionary (English, Hindi, Bengali)
  // ==========================================================================
  const I18N_DICT = {
    en: {
      brandTitle: "Setu",
      nationalTag: "National Portal",
      brandSubtitle: "Ministry of Social Justice & Empowerment · Government Scheme Portal",
      langLabelText: "Language:",
      step1Title: "Applicant Profile",
      step1Sub: "Demographics & Location",
      step2Title: "Available Schemes",
      step2Sub: "Verified Central Schemes",
      step3Title: "Application & Partner",
      step3Sub: "Checklist & Local Office",
      step4Title: "EMI & Subsidy Calculator",
      step4Sub: "Monthly Repayment & Moratorium",
      heroHeading: "National Scheme Allocation & Concessional Finance Portal",
      heroDesc: "Discover central and state government schemes tailored to your enterprise and social profile. All interest subventions, capital subsidies, and collateral guarantees are provided directly through official Ministry channels up to ₹1 Crore.",
      pillSih: "✓ SIH 2026 Problem Statement 92",
      pillMoSJE: "✓ MoSJE Statutory Guidelines",
      pillCap: "✓ Capped up to ₹1 Crore (₹1,00,00,000)",
      pillInApp: "✓ 100% In-App Application Guidance",
      card1Title: "Applicant Demographics & Social Category",
      lblCategory: "Social Category *",
      hintCategory: "Primary beneficiary statutory category",
      catSC: "SC (Scheduled Caste)",
      catST: "ST (Scheduled Tribe)",
      catOBC: "OBC (Backward Class)",
      catGen: "General / Open",
      catEWS: "EWS (Economically Weaker)",
      catSK: "Safai Karamchari / Sanitation Worker",
      lblAge: "Age (Years) *",
      hintAge: "Minimum age ≥ 18 for commercial loan facilities",
      lblGender: "Gender *",
      genderMale: "Male",
      genderFemale: "Female",
      genderOther: "Other",
      hintGender: "Women unlock special 4% interest subvention & quotas",
      lblPwD: "Differently Abled (PwD) Applicant — unlocks extra interest concessions and priority quota",
      lblState: "State / UT *",
      hintState: "For assigning official state channel partner",
      lblDistrict: "District / City",
      hintDistrict: "District nodal verification office",
      lblArea: "Location Area Type",
      areaUrban: "Urban",
      areaRural: "Rural (35% Subsidy)",
      hintArea: "Rural locations receive higher capital grants",
      card2Title: "Enterprise & Funding Requirements",
      lblVenture: "Venture Setup Stage *",
      ventureGreen: "Greenfield (New Business)",
      ventureBrown: "Brownfield (Expansion)",
      hintVenture: "Stand-Up India mandates Greenfield; NSFDC/PMEGP supports both",
      lblSector: "Business Sector",
      hintSector: "Industry classification for scheme criteria",
      secMfg: "Manufacturing & Fabrication",
      secServ: "Services (Logistics, Repair, IT, Clinic)",
      secTrade: "Trading & Retail Store",
      secAgri: "Agri-Allied (Food, Dairy, Fisheries)",
      secClean: "Green Energy (Solar, E-Vehicle, Waste)",
      secCraft: "Handicrafts & Traditional Artisans",
      secTech: "Tech Startup & Innovation",
      lblCost: "Estimated Project & Equipment Cost (₹) *",
      hintCost: "Supports from ₹10,000 up to ₹1,00,00,000 (₹1 Crore maximum cap)",
      lblIncome: "Annual Family Income (₹) *",
      hintIncome: "NSFDC/NSTFDC cap at ₹5 Lakh; Stand-Up & PMEGP have zero income cap",
      lblMargin: "Your Available Self-Contribution / Margin (%)",
      hintMargin: "Promoter equity available (typically 5% to 15% required by banks)",
      securityText: "100% Sovereign Credit Guarantee & Statutory Subventions Verified",
      btnSubmitText: "Check Available Government Schemes",
      btnBackProfile: "Edit Profile",
      schemesHeading: "Government Schemes Available for Your Profile",
      schemesSubtitle: "Based on your demographic details, project quantum, and category, the following verified schemes are available for you:",
      subsidyNoticeTitle: "Government-Borne Interest & Subsidies",
      subsidyNoticeDesc: "Under MoSJE and central guidelines, you do not pay high commercial bank rates. The Government subsidizes the interest (e.g. 100% interest subvention during moratorium, up to 35% non-refundable capital grants, or 100% sovereign credit guarantees).",
      btnBackSchemes: "Back to Available Schemes",
      btnEditProfile: "Edit Profile",
      btnGoCalc: "Proceed to Step 4: EMI Calculator →",
      btnBackDetails: "Back to Application Guide",
      calcBadge: "Interactive Loan & Subsidy Simulator",
      calcHeading: "Concessional Loan, EMI & Government Subsidy Calculator",
      calcSubtitle: "Calculate your exact monthly repayment installment factoring in statutory principal moratoriums and government interest subventions up to ₹1 Crore.",
      calcLoanParamsTitle: "Loan Parameters",
      lblSelectScheme: "Selected Government Scheme",
      lblLoanQuantum: "Loan / Investment Quantum (₹)",
      hintEmiAmount: "Supports up to ₹1,00,00,000 (₹1 Crore maximum)",
      lblEmiRate: "Concessional Interest Rate (% p.a.)",
      hintEmiRate: "Subsidized rate under scheme statutory rules",
      lblEmiTenure: "Repayment Tenure (Years)",
      lblEmiMoratorium: "Moratorium (Months)",
      hintEmiMoratorium: "Zero principal repayment",
      lblMonthlyEmi: "Estimated Monthly Installment (EMI)",
      emiSubnote: "Payable post-moratorium period",
      lblFinancedPrincipal: "Financed Principal Amount",
      lblTotalInterest: "Total Interest Payable",
      lblTotalRepayment: "Total Repayment Outflow",
      lblGovtSavings: "Government Interest Savings",
      amortTitle: "Yearly Repayment Schedule",
      thYear: "Year",
      thPrincipal: "Principal Paid",
      thInterest: "Interest Paid",
      thBalance: "Balance",
      footerNote: "Setu 2.0 — Official Prototype developed for SIH 2026 Problem Statement 92 (Ministry of Social Justice & Empowerment).",
      footerDisclaimer: "All official guidelines, required statutory documents, and local partner directory addresses are verified and rendered natively inside this portal.",
      toastStep1Required: "⚠️ Step 1 Incomplete: Please fill in your profile and click 'Check Available Government Schemes' to proceed.",
      toastStep2Required: "⚠️ Step 2 Incomplete: Please select a scheme from the list below to view its application guide.",
      toastStep3Required: "⚠️ Step 3 Incomplete: Please select a scheme first to calculate its exact EMI and subsidy."
    },
    hi: {
      brandTitle: "सेतु",
      nationalTag: "राष्ट्रीय पोर्टल",
      brandSubtitle: "सामाजिक न्याय और अधिकारिता मंत्रालय · सरकारी योजना पोर्टल",
      langLabelText: "भाषा चुनें:",
      step1Title: "आवेदक प्रोफ़ाइल",
      step1Sub: "विवरण एवं निवास स्थान",
      step2Title: "उपलब्ध योजनाएं",
      step2Sub: "सत्यापित केंद्रीय योजनाएं",
      step3Title: "आवेदन एवं साझेदार",
      step3Sub: "दस्तावेज़ एवं संपर्क कार्यालय",
      step4Title: "ईएमआई एवं सब्सिडी कैलकुलेटर",
      step4Sub: "मासिक किस्त एवं मोराटोरियम",
      heroHeading: "राष्ट्रीय योजना आवंटन एवं रियायती वित्त पोषण पोर्टल",
      heroDesc: "अपने उद्यम एवं सामाजिक प्रोफ़ाइल के अनुसार केंद्र एवं राज्य सरकार की योजनाएं खोजें। सभी ब्याज सब्सिडी, पूंजी अनुदान एवं सरकारी गारंटी आधिकारिक मंत्रालय चैनलों द्वारा ₹1 करोड़ तक प्रदान की जाती हैं।",
      pillSih: "✓ एसआईएच 2026 समस्या विवरण 92",
      pillMoSJE: "✓ सामाजिक न्याय मंत्रालय वैधानिक दिशानिर्देश",
      pillCap: "✓ ₹1 करोड़ (₹1,00,00,000) तक सीमित",
      pillInApp: "✓ 100% इन-ऐप आवेदन मार्गदर्शन",
      card1Title: "आवेदक जनसांख्यिकी एवं सामाजिक श्रेणी",
      lblCategory: "सामाजिक श्रेणी *",
      hintCategory: "प्राथमिक लाभार्थी वैधानिक श्रेणी",
      catSC: "अनुसूचित जाति (SC)",
      catST: "अनुसूचित जनजाति (ST)",
      catOBC: "अन्य पिछड़ा वर्ग (OBC)",
      catGen: "सामान्य / खुला वर्ग",
      catEWS: "ईडब्ल्यूएस (आर्थिक रूप से कमजोर)",
      catSK: "सफाई कर्मचारी / स्वच्छता कार्यकर्ता",
      lblAge: "आयु (वर्ष) *",
      hintAge: "व्यावसायिक ऋण सुविधाओं हेतु न्यूनतम आयु ≥ 18 वर्ष",
      lblGender: "लिंग *",
      genderMale: "पुरुष",
      genderFemale: "महिला",
      genderOther: "अन्य",
      hintGender: "महिला उद्यमियों को 4% की विशेष ब्याज छूट एवं कोटा",
      lblPwD: "दिव्यांग (PwD) आवेदक — अतिरिक्त ब्याज छूट एवं प्राथमिकता कोटा",
      lblState: "राज्य / केंद्र शासित प्रदेश *",
      hintState: "आधिकारिक राज्य चैनल पार्टनर आवंटित करने हेतु",
      lblDistrict: "ज़िला / शहर",
      hintDistrict: "ज़िला नोडल सत्यापन कार्यालय",
      lblArea: "क्षेत्र का प्रकार",
      areaUrban: "शहरी",
      areaRural: "ग्रामीण (35% सब्सिडी)",
      hintArea: "ग्रामीण क्षेत्रों में उच्च पूंजी अनुदान देय है",
      card2Title: "उद्यम एवं वित्तीय आवश्यकताएं",
      lblVenture: "उद्यम स्थापना चरण *",
      ventureGreen: "नया उद्यम (ग्रीनफील्ड)",
      ventureBrown: "विस्तार (ब्राउनफील्ड)",
      hintVenture: "स्टैंड-अप इंडिया नया उद्यम अनिवार्य करता है; पीएमईजीपी दोनों का समर्थन करता है",
      lblSector: "व्यवसाय क्षेत्र",
      hintSector: "योजना पात्रता हेतु उद्योग वर्गीकरण",
      secMfg: "विनिर्माण एवं निर्माण",
      secServ: "सेवाएं (लॉजिस्टिक्स, मरम्मत, आईटी, क्लिनिक)",
      secTrade: "व्यापार एवं खुदरा दुकान",
      secAgri: "कृषि-संबद्ध (खाद्य, डेयरी, मत्स्य पालन)",
      secClean: "हरित ऊर्जा (सौर, ई-वाहन, अपशिष्ट)",
      secCraft: "हस्तशिल्प एवं पारंपरिक कारीगर",
      secTech: "प्रौद्योगिकी स्टार्टअप एवं नवाचार",
      lblCost: "अनुमानित परियोजना एवं उपकरण लागत (₹) *",
      hintCost: "₹10,000 से लेकर अधिकतम ₹1,00,00,000 (₹1 करोड़) तक समर्थित",
      lblIncome: "वार्षिक पारिवारिक आय (₹) *",
      hintIncome: "एनएसएफडीसी/एनएसटीएफडीसी की सीमा ₹5 लाख; स्टैंड-अप व पीएमईजीपी में कोई आय सीमा नहीं",
      lblMargin: "उपलब्ध स्वयं का अंशदान / मार्जिन (%)",
      hintMargin: "प्रमोटर शेयर (बैंकों द्वारा सामान्यतः 5% से 15% आवश्यक)",
      securityText: "100% संप्रभु ऋण गारंटी एवं वैधानिक सब्सिडी सत्यापित",
      btnSubmitText: "उपलब्ध सरकारी योजनाएं देखें",
      btnBackProfile: "प्रोफ़ाइल संपादित करें",
      schemesHeading: "आपकी प्रोफ़ाइल के लिए उपलब्ध सरकारी योजनाएं",
      schemesSubtitle: "आपके विवरण, परियोजना लागत एवं श्रेणी के आधार पर निम्नलिखित सत्यापित योजनाएं उपलब्ध हैं:",
      subsidyNoticeTitle: "सरकार द्वारा वहन की जाने वाली ब्याज सब्सिडी एवं वित्तीय सुरक्षा",
      subsidyNoticeDesc: "सामाजिक न्याय मंत्रालय के दिशानिर्देशों के तहत आपको उच्च वाणिज्यिक बैंक दरें नहीं देनी होतीं। सरकार ब्याज का भुगतान करती है (मोराटोरियम में 100% ब्याज सब्सिडी, 35% तक गैर-वापसी योग्य अनुदान, या 100% संप्रभु ऋण गारंटी)।",
      btnBackSchemes: "उपलब्ध योजनाओं पर वापस जाएं",
      btnEditProfile: "प्रोफ़ाइल संपादित करें",
      btnGoCalc: "चरण 4: ईएमआई कैलकुलेटर पर जाएं →",
      btnBackDetails: "आवेदन गाइड पर वापस जाएं",
      calcBadge: "इंटरैक्टिव ऋण एवं सब्सिडी सिम्युलेटर",
      calcHeading: "रियायती ऋण, ईएमआई एवं सरकारी सब्सिडी कैलकुलेटर",
      calcSubtitle: "मूलधन मोराटोरियम और सरकारी ब्याज सब्सिडी को ध्यान में रखते हुए अपनी सटीक मासिक किस्त की गणना करें (₹1 करोड़ तक)।",
      calcLoanParamsTitle: "ऋण पैरामीटर",
      lblSelectScheme: "चयनित सरकारी योजना",
      lblLoanQuantum: "ऋण / निवेश राशि (₹)",
      hintEmiAmount: "अधिकतम ₹1,00,00,000 (₹1 करोड़) तक समर्थित",
      lblEmiRate: "रियायती ब्याज दर (% वार्षिक)",
      hintEmiRate: "योजना नियमों के तहत रियायती दर",
      lblEmiTenure: "पुनर्भुगतान अवधि (वर्ष)",
      lblEmiMoratorium: "मोराटोरियम (महीने)",
      hintEmiMoratorium: "शून्य मूलधन पुनर्भुगतान अवधि",
      lblMonthlyEmi: "अनुमानित मासिक किस्त (ईएमआई)",
      emiSubnote: "मोराटोरियम अवधि के बाद देय",
      lblFinancedPrincipal: "वित्तपोषित मूल राशि",
      lblTotalInterest: "कुल देय ब्याज",
      lblTotalRepayment: "कुल पुनर्भुगतान राशि",
      lblGovtSavings: "सरकारी ब्याज बचत",
      amortTitle: "वार्षिक पुनर्भुगतान अनुसूची",
      thYear: "वर्ष",
      thPrincipal: "चुकाया गया मूलधन",
      thInterest: "चुकाया गया ब्याज",
      thBalance: "शेष राशि",
      footerNote: "सेतु 2.0 — सामाजिक न्याय और अधिकारिता मंत्रालय के लिए एसआईएच 2026 समस्या विवरण 92 हेतु विकसित प्रोटोटाइप।",
      footerDisclaimer: "सभी आधिकारिक दिशानिर्देश, आवश्यक वैधानिक दस्तावेज़ और स्थानीय भागीदार पते इस पोर्टल में सीधे उपलब्ध हैं।",
      toastStep1Required: "⚠️ चरण 1 अधूरा: कृपया अपनी प्रोफ़ाइल भरें और आगे बढ़ने के लिए 'उपलब्ध सरकारी योजनाएं देखें' पर क्लिक करें।",
      toastStep2Required: "⚠️ चरण 2 अधूरा: कृपया आवेदन गाइड देखने के लिए नीचे दी गई सूची में से किसी एक योजना का चयन करें।",
      toastStep3Required: "⚠️ चरण 3 अधूरा: कृपया सटीक ईएमआई और सब्सिडी की गणना करने के लिए पहले किसी योजना का चयन करें।"
    },
    bn: {
      brandTitle: "সেতু",
      nationalTag: "জাতীয় পোর্টাল",
      brandSubtitle: "সামাজিক ন্যায় ও ক্ষমতায়ন মন্ত্রক · সরকারি যোজনা পোর্টাল",
      langLabelText: "ভাষা নির্বাচন:",
      step1Title: "আবেদনকারী প্রোফাইল",
      step1Sub: "ব্যক্তিগত তথ্য ও অবস্থান",
      step2Title: "উপলব্ধ যোজনা",
      step2Sub: "যাচাইকৃত কেন্দ্রীয় যোজনা",
      step3Title: "আবেদন ও পার্টনার",
      step3Sub: "নথিপত্র ও স্থানীয় অফিস",
      step4Title: "ইএমআই ও ভর্তুকি ক্যালকুলেটর",
      step4Sub: "মাসিক কিস্তি ও মোরাটোরিয়াম",
      heroHeading: "জাতীয় যোজনা বরাদ্দ ও স্বল্প সুদে ঋণ পোর্টাল",
      heroDesc: "আপনার উদ্যোগ ও সামাজিক প্রোফাইল অনুযায়ী উপযুক্ত কেন্দ্রীয় ও রাজ্য সরকারের যোজনা খুঁজুন। সমস্ত সুদ ভর্তুকি, মূলধন অনুদান ও গ্যারান্টি সরাসরি সরকারি চ্যানেলের মাধ্যমে ₹১ কোটি পর্যন্ত প্রদান করা হয়।",
      pillSih: "✓ এসআইএইচ ২০২৬ সমস্যা বিবৃতি ৯২",
      pillMoSJE: "✓ সামাজিক ন্যায় মন্ত্রক বিধিবদ্ধ নির্দেশিকা",
      pillCap: "✓ ₹১ কোটি (₹১,০০,০০,০০০) পর্যন্ত সীমাবদ্ধ",
      pillInApp: "✓ ১০০% অ্যাপ নির্দেশিকা",
      card1Title: "আবেদনকারীর তথ্য ও সামাজিক শ্রেণী",
      lblCategory: "সামাজিক শ্রেণী *",
      hintCategory: "প্রাথমিক সুবিধাভোগী শ্রেণী",
      catSC: "তপশিলি জাতি (SC)",
      catST: "তপশিলি উপজাতি (ST)",
      catOBC: "অনগ্রসর শ্রেণী (OBC)",
      catGen: "সাধারণ / উন্মুক্ত শ্রেণী",
      catEWS: "ইডব্লিউএস (অর্থনৈতিকভাবে দুর্বল)",
      catSK: "সাফাই কর্মচারী / পরিচ্ছন্নতাকর্মী",
      lblAge: "বয়স (বছর) *",
      hintAge: "বাণিজ্যিক ঋণের জন্য ন্যূনতম বয়স ≥ ১৮ বছর",
      lblGender: "লিঙ্গ *",
      genderMale: "পুরুষ",
      genderFemale: "মহিলা",
      genderOther: "অন্যান্য",
      hintGender: "মহিলাদের জন্য ৪% বিশেষ সুদ ছাড় ও কোটা",
      lblPwD: "প্রতিবন্ধী (PwD) আবেদনকারী — অতিরিক্ত সুদ ছাড় ও অগ্রাধিকার কোটা",
      lblState: "রাজ্য / কেন্দ্রশাসিত অঞ্চল *",
      hintState: "স্থানীয় সরকারি চ্যানেল পার্টনার নির্ধারণের জন্য",
      lblDistrict: "জেলা / শহর",
      hintDistrict: "জেলা নোডাল যাচাইকরণ কার্যালয়",
      lblArea: "এলাকার ধরন",
      areaUrban: "শহরাঞ্চল",
      areaRural: "গ্রামাঞ্চল (৩৫% ভর্তুকি)",
      hintArea: "গ্রামাঞ্চলের জন্য উচ্চতর মূলধন অনুদান প্রযোজ্য",
      card2Title: "উদ্যোগ ও আর্থিক প্রয়োজনীয়তা",
      lblVenture: "উদ্যোগের ধরন *",
      ventureGreen: "নতুন উদ্যোগ (গ্রিনফিল্ড)",
      ventureBrown: "সম্প্রসারণ (ব্রাউনফিল্ড)",
      hintVenture: "স্ট্যান্ড-আপ ইন্ডিয়ায় নতুন উদ্যোগ আবশ্যক; পিএমইজিপি উভয়ই সমর্থন করে",
      lblSector: "ব্যবসা ক্ষেত্র",
      hintSector: "যোজনা যোগ্যতার জন্য শিল্প শ্রেণীবিভাগ",
      secMfg: "উৎপাদন ও নির্মাণ",
      secServ: "পরিষেবা (লজিস্টিকস, মেরামত, আইটি, ক্লিনিক)",
      secTrade: "বাণিজ্য ও খুচরা দোকান",
      secAgri: "কৃষি-সম্পর্কিত (খাদ্য, দুগ্ধ, মৎস্য)",
      secClean: "সবুজ শক্তি (সৌর, ই-যানবাহন, বর্জ্য)",
      secCraft: "হস্তশিল্প ও ঐতিহ্যবাহী কারিগর",
      secTech: "প্রযুক্তি স্টার্টআপ ও উদ্ভাবন",
      lblCost: "আনুমানিক প্রকল্প ও সরঞ্জাম খরচ (₹) *",
      hintCost: "₹১০,০০০ থেকে সর্বোচ্চ ₹১,০০,০০,০০০ (₹১ কোটি) পর্যন্ত সমর্থিত",
      lblIncome: "বার্ষিক পারিবারিক আয় (₹) *",
      hintIncome: "এনএসএফডিসি/এনএসটিএফডিসির সীমা ₹৫ লাখ; স্ট্যান্ড-আপে আয়ের কোনো ঊর্ধ্বসীমা নেই",
      lblMargin: "আপনার নিজস্ব অবদান / মার্জিন (%)",
      hintMargin: "উদ্যোক্তার নিজস্ব মূলধন (সাধারণত ৫% থেকে ১৫% প্রয়োজন)",
      securityText: "১০০% সরকারি ঋণ গ্যারান্টি ও বিধিবদ্ধ ভর্তুকি নিশ্চিত",
      btnSubmitText: "উপলব্ধ সরকারি যোজনা দেখুন",
      btnBackProfile: "প্রোফাইল পরিবর্তন",
      schemesHeading: "আপনার প্রোফাইলের জন্য উপলব্ধ সরকারি যোজনা",
      schemesSubtitle: "আপনার ব্যক্তিগত তথ্য, প্রকল্পের খরচ ও শ্রেণীর ভিত্তিতে নিম্নলিখিত যাচাইকৃত যোজনাগুলি উপলব্ধ:",
      subsidyNoticeTitle: "সরকারি সুদ ভর্তুকি ও আর্থিক সুরক্ষা",
      subsidyNoticeDesc: "সামাজিক ন্যায় মন্ত্রকের নির্দেশিকা অনুযায়ী আপনাকে উচ্চ বাণিজ্যিক ব্যাংকের সুদ দিতে হবে না। সরকার সরাসরি সুদ ভর্তুকি (মোরাটোরিয়ামে ১০০% সুদ মওকুফ, ৩৫% পর্যন্ত এককালীন অনুদান, বা ১০০% সরকারি গ্যারান্টি) প্রদান করে।",
      btnBackSchemes: "উপলব্ধ যোজনায় ফিরে যান",
      btnEditProfile: "প্রোফাইল পরিবর্তন",
      btnGoCalc: "ধাপ ৪: ইএমআই ক্যালকুলেটরে যান →",
      btnBackDetails: "আবেদন গাইডে ফিরে যান",
      calcBadge: "ইন্টারেক্টিভ লোন ও ভর্তুকি সিমুলেটর",
      calcHeading: "স্বল্প সুদে ঋণ, ইএমআই ও সরকারি ভর্তুকি ক্যালকুলেটর",
      calcSubtitle: "মূলধন মোরাটোরিয়াম ও সরকারি সুদ ভর্তুকি বিবেচনা করে আপনার সঠিক মাসিক কিস্তি হিসাব করুন (₹১ কোটি পর্যন্ত)।",
      calcLoanParamsTitle: "ঋণের তথ্য",
      lblSelectScheme: "নির্বাচিত সরকারি যোজনা",
      lblLoanQuantum: "ঋণ / বিনিয়োগের পরিমাণ (₹)",
      hintEmiAmount: "সর্বোচ্চ ₹১,০০,০০,০০০ (₹১ কোটি) পর্যন্ত হিসাবযোগ্য",
      lblEmiRate: "স্বল্প সুদের হার (% বার্ষিক)",
      hintEmiRate: "সরকারি নিয়ম অনুযায়ী নির্ধারিত স্বল্প সুদ",
      lblEmiTenure: "পরিশোধের মেয়াদ (বছর)",
      lblEmiMoratorium: "মোরাটোরিয়াম (মাস)",
      hintEmiMoratorium: "শূণ্য মূলধন পরিশোধের সময়কাল",
      lblMonthlyEmi: "আনুমানিক মাসিক কিস্তি (ইএমআই)",
      emiSubnote: "মোরাটোরিয়াম সময়সীমা শেষের পর প্রযোজ্য",
      lblFinancedPrincipal: "অনুমোদিত মূল ঋণ",
      lblTotalInterest: "মোট প্রদেয় সুদ",
      lblTotalRepayment: "মোট পরিশোধের পরিমাণ",
      lblGovtSavings: "সরকারি সুদ সাশ্রয়",
      amortTitle: "বার্ষিক পরিশোধ তালিকা",
      thYear: "বছর",
      thPrincipal: "পরিশোধিত মূলধন",
      thInterest: "পরিশোধিত সুদ",
      thBalance: "অবশিষ্ট ঋণ",
      footerNote: "সেতু ২.০ — সামাজিক ন্যায় ও ক্ষমতায়ন মন্ত্রকের এসআইএইচ ২০২৬ সমস্যা বিবৃতি ৯২-এর জন্য প্রস্তুতকৃত সরকারি প্রোটোটাইপ।",
      footerDisclaimer: "সমস্ত সরকারি নির্দেশিকা, প্রয়োজনীয় নথিপত্র এবং স্থানীয় অফিসের ঠিকানা এই পোর্টালে সরাসরি উপলব্ধ।",
      toastStep1Required: "⚠️ ধাপ ১ অসম্পূর্ণ: অনুগ্রহ করে আপনার প্রোফাইল পূরণ করে 'উপলব্ধ সরকারি যোজনা দেখুন' বোতামে ক্লিক করুন।",
      toastStep2Required: "⚠️ ধাপ ২ অসম্পূর্ণ: আবেদন নির্দেশিকা দেখতে নীচের তালিকা থেকে একটি যোজনা নির্বাচন করুন।",
      toastStep3Required: "⚠️ ধাপ ৩ অসম্পূর্ণ: সঠিক ইএমআই ও ভর্তুকি হিসাব করার জন্য প্রথমে একটি যোজনা নির্বাচন করুন।"
    }
  };

  // Language Switcher Function
  function setLanguage(lang) {
    if (!I18N_DICT[lang]) lang = "en";
    currentLang = lang;
    const dict = I18N_DICT[lang];

    // Update all elements with data-i18n
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    // Update html lang attribute
    document.documentElement.lang = lang;

    // Update select dropdown value if needed
    const langSel = document.getElementById("langSelect");
    if (langSel && langSel.value !== lang) {
      langSel.value = lang;
    }

    // Refresh dynamically rendered views if already visible
    if (activeSection === "schemes" && availableMatches.length > 0) {
      renderAvailableSchemes(availableMatches, activeProfile);
    } else if (activeSection === "details" && selectedSchemeItem) {
      renderSchemeDetails(selectedSchemeItem, activeProfile);
    } else if (activeSection === "calculator") {
      populateEMISchemeSelect(window.SCHEMES_DATA || []);
    }

    // Store in localStorage
    try {
      localStorage.setItem("setu_preferred_lang", lang);
    } catch (e) {}
  }

  // Toast Notification for Step Validation
  function showStepToast(message) {
    const toast = document.getElementById("stepToast");
    if (!toast) return;

    if (toastTimer) clearTimeout(toastTimer);

    toast.textContent = message;
    toast.classList.add("show");

    toastTimer = setTimeout(() => {
      toast.classList.remove("show");
    }, 3800);
  }

  // Number & Currency Formatting Helpers
  function formatINR(number) {
    if (isNaN(number) || number === null) return "₹0";
    const num = Math.round(number);
    return "₹" + num.toLocaleString("en-IN");
  }

  function formatLakhCrore(number) {
    if (isNaN(number) || number <= 0) return "₹0";
    if (number >= 10000000) {
      const cr = (number / 10000000).toFixed(2);
      const unit = currentLang === "hi" ? "करोड़" : currentLang === "bn" ? "কোটি" : "Crore";
      return `₹${number.toLocaleString("en-IN")} (${cr} ${unit})`;
    } else if (number >= 100000) {
      const lk = (number / 100000).toFixed(2);
      const unit = currentLang === "hi" ? "लाख" : currentLang === "bn" ? "লাখ" : "Lakh";
      return `₹${number.toLocaleString("en-IN")} (${lk} ${unit})`;
    }
    return `₹${number.toLocaleString("en-IN")}`;
  }

  // ==========================================================================
  // 2. Strict Sequential Step Navigation Gating (Requirement 9)
  // ==========================================================================
  function canNavigateTo(targetSection) {
    const dict = I18N_DICT[currentLang];

    // Step 1: Profile is always accessible
    if (targetSection === "profile") return true;

    // Step 2: Available Schemes requires activeProfile
    if (targetSection === "schemes") {
      if (!activeProfile) {
        showStepToast(dict.toastStep1Required);
        highlightProfileForm();
        return false;
      }
      return true;
    }

    // Step 3: Application Details requires activeProfile AND selectedSchemeItem
    if (targetSection === "details") {
      if (!activeProfile) {
        showStepToast(dict.toastStep1Required);
        highlightProfileForm();
        return false;
      }
      if (!selectedSchemeItem) {
        showStepToast(dict.toastStep2Required);
        return false;
      }
      return true;
    }

    // Step 4: Calculator requires activeProfile AND selectedSchemeItem
    if (targetSection === "calculator") {
      if (!activeProfile) {
        showStepToast(dict.toastStep1Required);
        highlightProfileForm();
        return false;
      }
      if (!selectedSchemeItem) {
        showStepToast(dict.toastStep3Required);
        return false;
      }
      return true;
    }

    return true;
  }

  function highlightProfileForm() {
    const form = document.getElementById("profileForm");
    if (form) {
      form.scrollIntoView({ behavior: "smooth", block: "start" });
      const submitBtn = form.querySelector("button[type='submit']");
      if (submitBtn) {
        submitBtn.style.animation = "shake 0.4s ease-in-out";
        setTimeout(() => { submitBtn.style.animation = ""; }, 500);
      }
    }
  }

  function navigateTo(sectionName) {
    if (!canNavigateTo(sectionName)) return;

    activeSection = sectionName;

    // Toggle Section Panels
    document.querySelectorAll(".portal-section").forEach(sec => {
      sec.classList.toggle("active", sec.id === `section-${sectionName}`);
    });

    // Update Breadcrumb Navigation State
    const navItems = {
      profile: document.getElementById("navItemProfile"),
      schemes: document.getElementById("navItemSchemes"),
      details: document.getElementById("navItemDetails"),
      calculator: document.getElementById("navItemCalc")
    };

    // Step completion tracking
    const isStep1Done = !!activeProfile;
    const isStep2Done = isStep1Done && !!selectedSchemeItem;
    const isStep3Done = isStep2Done && activeSection === "calculator";

    // Update CSS classes on steps
    if (navItems.profile) {
      navItems.profile.classList.toggle("active", sectionName === "profile");
      navItems.profile.classList.toggle("completed", isStep1Done && sectionName !== "profile");
      navItems.profile.classList.remove("locked");
    }

    if (navItems.schemes) {
      navItems.schemes.classList.toggle("active", sectionName === "schemes");
      navItems.schemes.classList.toggle("completed", isStep2Done && (sectionName === "details" || sectionName === "calculator"));
      navItems.schemes.classList.toggle("locked", !isStep1Done);
    }

    if (navItems.details) {
      navItems.details.classList.toggle("active", sectionName === "details");
      navItems.details.classList.toggle("completed", isStep3Done && sectionName === "calculator");
      navItems.details.classList.toggle("locked", !isStep2Done);
    }

    if (navItems.calc) {
      navItems.calc.classList.toggle("active", sectionName === "calculator");
      navItems.calc.classList.toggle("locked", !isStep2Done);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ==========================================================================
  // 3. Initialization & Event Bindings
  // ==========================================================================
  document.addEventListener("DOMContentLoaded", function () {
    // Populate Indian States
    const stateSel = document.getElementById("userState");
    if (stateSel) {
      INDIAN_STATES.forEach(state => {
        const opt = document.createElement("option");
        opt.value = state;
        opt.textContent = state;
        if (state === "Maharashtra") opt.selected = true;
        stateSel.appendChild(opt);
      });
    }

    // Initialize Matching Engine
    if (window.SchemeMatchingEngine && window.SCHEMES_DATA) {
      matchingEngine = new window.SchemeMatchingEngine(window.SCHEMES_DATA);
    }

    initLanguageSelector();
    initLiveCurrencyHints();
    initRadioChips();
    initProfileForm();
    initBreadcrumbClicks();
    initNavigationButtons();
    initEMICalculator();

    // Check saved language
    try {
      const savedLang = localStorage.getItem("setu_preferred_lang");
      if (savedLang && I18N_DICT[savedLang]) {
        setLanguage(savedLang);
      }
    } catch (e) {}
  });

  // Language selector listener
  function initLanguageSelector() {
    const langSel = document.getElementById("langSelect");
    if (langSel) {
      langSel.addEventListener("change", function () {
        setLanguage(this.value);
      });
    }
  }

  // Breadcrumb clicks with strict backend stage validation
  function initBreadcrumbClicks() {
    document.querySelectorAll(".flow-item").forEach(item => {
      item.addEventListener("click", function () {
        const targetSection = this.getAttribute("data-section");
        navigateTo(targetSection);
      });
      // Keyboard Accessibility
      item.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          const targetSection = this.getAttribute("data-section");
          navigateTo(targetSection);
        }
      });
    });

    const brandLogo = document.getElementById("brandLogo");
    if (brandLogo) {
      brandLogo.addEventListener("click", function (e) {
        e.preventDefault();
        navigateTo("profile");
      });
    }
  }

  // Navigation Buttons
  function initNavigationButtons() {
    document.getElementById("btnBackToProfile")?.addEventListener("click", () => navigateTo("profile"));
    document.getElementById("btnBackToSchemes")?.addEventListener("click", () => navigateTo("schemes"));
    document.getElementById("btnEditProfileFromDetails")?.addEventListener("click", () => navigateTo("profile"));
    document.getElementById("btnBackFromCalc")?.addEventListener("click", () => {
      if (selectedSchemeItem) navigateTo("details");
      else if (availableMatches.length > 0) navigateTo("schemes");
      else navigateTo("profile");
    });
    document.getElementById("btnGoToCalcFromDetails")?.addEventListener("click", () => {
      if (selectedSchemeItem) {
        prefillEMICalculator(selectedSchemeItem.scheme, selectedSchemeItem.calculatedLoan);
      }
      navigateTo("calculator");
    });
  }

  // Live Currency Input Watchers
  function initLiveCurrencyHints() {
    const costInput = document.getElementById("userCost");
    const costHint = document.getElementById("costFormattedHint");
    if (costInput && costHint) {
      costInput.addEventListener("input", function () {
        // Enforce max limit of ₹1 Crore (₹1,00,00,000)
        let val = parseFloat(costInput.value) || 0;
        if (val > 10000000) {
          val = 10000000;
          costInput.value = val;
        }
        costHint.textContent = formatLakhCrore(val);
      });
    }

    const incomeInput = document.getElementById("userIncome");
    const incomeHint = document.getElementById("incomeFormattedHint");
    if (incomeInput && incomeHint) {
      incomeInput.addEventListener("input", function () {
        const val = parseFloat(incomeInput.value) || 0;
        incomeHint.textContent = formatLakhCrore(val);
      });
    }
  }

  // Radio Chips
  function initRadioChips() {
    document.querySelectorAll(".radio-chips").forEach(container => {
      container.addEventListener("click", function (e) {
        const label = e.target.closest(".chip-label");
        if (!label) return;
        container.querySelectorAll(".chip-label").forEach(l => l.classList.remove("active"));
        label.classList.add("active");
        const radio = label.querySelector("input[type='radio']");
        if (radio) radio.checked = true;
      });
    });
  }

  // ==========================================================================
  // 4. Profile Intake & Scheme Availability Evaluation (Step 1 -> Step 2)
  // ==========================================================================
  function initProfileForm() {
    const form = document.getElementById("profileForm");
    if (!form) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const genderEl = form.querySelector("input[name='userGender']:checked");
      const areaEl = form.querySelector("input[name='userArea']:checked");
      const ventureEl = form.querySelector("input[name='userVenture']:checked");

      // Read values with strict cap at ₹1 Crore (₹1,00,00,000)
      const rawCost = parseFloat(document.getElementById("userCost")?.value) || 2500000;
      const costCapped = Math.min(10000000, rawCost);

      activeProfile = {
        category: document.getElementById("userCategory")?.value || "SC",
        age: parseInt(document.getElementById("userAge")?.value) || 28,
        gender: genderEl ? genderEl.value : "male",
        isPwD: document.getElementById("userPwD")?.checked || false,
        state: document.getElementById("userState")?.value || "Maharashtra",
        district: document.getElementById("userDistrict")?.value || "Mumbai",
        areaType: areaEl ? areaEl.value : "urban",
        purpose: "business", // Purely enterprise & business ventures
        ventureType: ventureEl ? ventureEl.value : "greenfield",
        cost: costCapped,
        income: parseFloat(document.getElementById("userIncome")?.value) || 380000,
        marginPct: parseFloat(document.getElementById("userMargin")?.value) || 15,
        sector: document.getElementById("userSector")?.value || "Manufacturing"
      };

      if (!matchingEngine && window.SchemeMatchingEngine && window.SCHEMES_DATA) {
        matchingEngine = new window.SchemeMatchingEngine(window.SCHEMES_DATA);
      }

      if (!matchingEngine) return;

      const allEvaluated = matchingEngine.evaluateAll(activeProfile);

      // Filter only schemes marked as isAvailable
      availableMatches = allEvaluated.filter(item => item.isAvailable);

      renderAvailableSchemes(availableMatches, activeProfile);
      populateEMISchemeSelect(window.SCHEMES_DATA || []);
      
      // Advance to Step 2
      navigateTo("schemes");
    });
  }

  // Helper to get localized scheme name & description
  function getSchemeLocaleText(scheme) {
    let name = scheme.nameEn;
    let desc = scheme.descriptionEn;

    if (currentLang === "hi") {
      name = scheme.nameHi || scheme.nameEn;
      desc = scheme.descriptionHi || scheme.descriptionEn;
    } else if (currentLang === "bn") {
      name = scheme.nameBn || scheme.nameEn;
      desc = scheme.descriptionBn || scheme.descriptionEn;
    }

    return { name, desc };
  }

  // ==========================================================================
  // 5. Render Available Schemes (Step 2 - No Percentage Match Numbers)
  // ==========================================================================
  function renderAvailableSchemes(matches, profile) {
    const container = document.getElementById("availableSchemesList");
    const countBadge = document.getElementById("schemesCountBadge");
    if (!container) return;

    container.innerHTML = "";

    const countText = currentLang === "hi"
      ? `${matches.length} सरकारी योजनाएं उपलब्ध`
      : currentLang === "bn"
      ? `${matches.length}টি সরকারি যোজনা উপলব্ধ`
      : `${matches.length} Government Schemes Available`;

    if (countBadge) {
      countBadge.textContent = countText;
    }

    if (matches.length === 0) {
      const noSchemeTitle = currentLang === "hi" ? "वर्तमान मापदंडों के अनुसार कोई योजना उपलब्ध नहीं है" : currentLang === "bn" ? "বর্তমান মানদণ্ড অনুযায়ী কোনো যোজনা পাওয়া যায়নি" : "No Government Schemes Available for Current Criteria";
      const noSchemeDesc = currentLang === "hi" ? "कृपया अपनी श्रेणी, लागत या उद्यम प्रकार समायोजित करें।" : currentLang === "bn" ? "অনুগ্রহ করে আপনার শ্রেণী, খরচ বা উদ্যোগের ধরন পরিবর্তন করুন।" : "Please adjust your category, project cost or venture type.";
      const btnText = currentLang === "hi" ? "← प्रोफ़ाइल मानदंड समायोजित करें" : currentLang === "bn" ? "← প্রোফাইল মানদণ্ড পরিবর্তন" : "← Adjust Profile Criteria";

      container.innerHTML = `
        <div class="card" style="text-align:center; padding:40px 20px;">
          <div style="font-size:40px; margin-bottom:12px;">🔍</div>
          <h3>${noSchemeTitle}</h3>
          <p style="color:var(--text-muted); max-width:540px; margin:8px auto 20px;">
            ${noSchemeDesc}
          </p>
          <button type="button" class="btn btn-primary" onclick="window.setuNavigateTo('profile')">
            ${btnText}
          </button>
        </div>
      `;
      return;
    }

    matches.forEach(item => {
      const s = item.scheme;
      const { name, desc } = getSchemeLocaleText(s);
      const card = document.createElement("div");
      card.className = "scheme-card";

      // Extract Grounded Official Intelligence via RAG Engine
      const ragDossier = (window.RAG_ENGINE) 
        ? window.RAG_ENGINE.getSchemeDossier(s.id, profile)
        : null;

      // Government interest subsidy summary
      const subsidyNotice = (ragDossier && ragDossier.subsidyRules) || s.govtInterestSubsidy || "Government provides statutory interest subvention and sovereign credit guarantee.";

      const availBadge = currentLang === "hi" ? "✓ आपकी प्रोफ़ाइल के लिए उपलब्ध" : currentLang === "bn" ? "✓ আপনার জন্য উপলব্ধ" : "✓ Available for Your Profile";
      const maxFundLbl = currentLang === "hi" ? "अधिकतम वित्तपोषण" : currentLang === "bn" ? "সর্বোচ্চ ঋণ সহায়তা" : "Maximum Funding";
      const rateLbl = currentLang === "hi" ? "रियायती ब्याज दर" : currentLang === "bn" ? "স্বল্প সুদের হার" : "Interest Rate";
      const moratLbl = currentLang === "hi" ? "सरकारी मोराटोरियम" : currentLang === "bn" ? "সরকারি মোরাটোরিয়াম" : "Govt Moratorium";
      const tenureLbl = currentLang === "hi" ? "पुनर्भुगतान अवधि" : currentLang === "bn" ? "পরিশোধের মেয়াদ" : "Repayment Tenure";
      const calcBtnLbl = currentLang === "hi" ? "📊 ईएमआई देखें" : currentLang === "bn" ? "📊 ইএমআই হিসাব" : "📊 Calculate EMI";
      const detailsBtnLbl = currentLang === "hi" ? "आवेदन प्रक्रिया एवं दस्तावेज़ देखें →" : currentLang === "bn" ? "আবেদন প্রক্রিয়া ও নথি দেখুন →" : "View Application Process & Documents →";
      const subsidyTitle = currentLang === "hi" ? "सरकारी सब्सिडी एवं ब्याज छूट प्रावधान" : currentLang === "bn" ? "সরকারি অনুদান ও সুদ ভর্তুকি সুবিধা" : "Government Subsidy / Subvention Provision";

      card.innerHTML = `
        <div class="scheme-card-top">
          <div class="scheme-card-title">
            <span class="badge-available" style="margin-bottom:6px;">${availBadge}</span>
            <h3>${name}</h3>
            <div class="scheme-card-agency">🏛️ ${s.nodalAgency}</div>
          </div>
        </div>

        <!-- RAG Extracted Recognized Source & Local Partner Information -->
        <div class="scheme-source-box">
          <div class="src-row">
            <span>📜 <strong>Recognized Authority:</strong> ${ragDossier ? ragDossier.recognizedSource : s.nodalAgency}</span>
            ${ragDossier && ragDossier.officialPortal ? `
              <a href="${ragDossier.officialPortal}" target="_blank" rel="noopener noreferrer" class="official-portal-link">
                🌐 Official Central Portal ↗
              </a>
            ` : ''}
          </div>
          ${ragDossier && ragDossier.partner ? `
            <div class="scheme-partner-snippet">
              <span>📍 <strong>Verified Partner in ${profile.state}:</strong> ${ragDossier.partner.name} (${ragDossier.partner.city})</span>
              ${ragDossier.partner.phone ? `<span style="margin-left:auto; font-weight:700;">📞 ${ragDossier.partner.phone.split('/')[0]}</span>` : ''}
            </div>
          ` : ''}
        </div>

        <!-- Government Subsidy Callout -->
        <div class="govt-subsidy-card">
          <div class="badge-icon">💰</div>
          <div>
            <h4>${subsidyTitle}</h4>
            <p>${subsidyNotice}</p>
          </div>
        </div>

        <p style="font-size:14px; color:var(--text-muted); margin:12px 0;">${desc}</p>

        <!-- Stats Row -->
        <div class="scheme-stats-row">
          <div class="stat-pill">
            <span class="stat-label">${maxFundLbl}</span>
            <span class="stat-value">${formatLakhCrore(item.calculatedLoan)}</span>
          </div>
          <div class="stat-pill">
            <span class="stat-label">${rateLbl}</span>
            <span class="stat-value">${s.rate === 0 ? "0% (Grant / Free)" : s.rate + "% p.a."}</span>
          </div>
          <div class="stat-pill">
            <span class="stat-label">${moratLbl}</span>
            <span class="stat-value">${s.moratoriumMonths} Months</span>
          </div>
          <div class="stat-pill">
            <span class="stat-label">${tenureLbl}</span>
            <span class="stat-value">${s.tenureYears} Years</span>
          </div>
        </div>

        <!-- Qualified Reasons -->
        ${item.reasons.length > 0 ? `
          <ul class="scheme-reasons-list">
            ${item.reasons.slice(0, 3).map(r => `<li>${r}</li>`).join("")}
          </ul>
        ` : ''}

        <!-- Actions -->
        <div class="scheme-card-actions">
          <button type="button" class="btn btn-outline btn-quick-calc" data-scheme-id="${s.id}">
            ${calcBtnLbl}
          </button>
          <button type="button" class="btn btn-teal btn-view-dossier" data-scheme-id="${s.id}">
            ${detailsBtnLbl}
          </button>
        </div>
      `;

      // Event: View Scheme Details & Roadmap (Advances sequentially to Step 3)
      card.querySelector(".btn-view-dossier")?.addEventListener("click", function () {
        selectedSchemeItem = item;
        renderSchemeDetails(item, profile);
        navigateTo("details");
      });

      // Event: Quick EMI Calculator (Pre-fills and advances sequentially to Step 4)
      card.querySelector(".btn-quick-calc")?.addEventListener("click", function () {
        selectedSchemeItem = item;
        prefillEMICalculator(s, item.calculatedLoan);
        navigateTo("calculator");
      });

      container.appendChild(card);
    });
  }

  // ==========================================================================
  // 6. Render In-App Application Guide & Local Partner Locator (Step 3)
  // ==========================================================================
  function renderSchemeDetails(item, profile) {
    const container = document.getElementById("schemeDetailsContainer");
    if (!container) return;

    const s = item.scheme;
    const { name, desc } = getSchemeLocaleText(s);

    // Find official verified partner for applicant's state & category
    let partner = null;
    if (window.REAL_PARTNERS) {
      // 1. Exact match for state AND specific scheme id handle
      partner = window.REAL_PARTNERS.find(p => p.state === profile.state && p.handles?.includes(s.id));

      // 2. Exact match for state AND applicant's category
      if (!partner) {
        partner = window.REAL_PARTNERS.find(p => p.state === profile.state && p.categories?.includes(profile.category));
      }

      // 3. Fallback to state partner
      if (!partner) {
        partner = window.REAL_PARTNERS.find(p => p.state === profile.state);
      }

      // 4. Fallback to National Lead Bank / Nodal Agency
      if (!partner) {
        partner = window.REAL_PARTNERS.find(p => p.handles?.includes(s.id))
          || window.REAL_PARTNERS.find(p => p.id === "bank-sbi")
          || window.REAL_PARTNERS[0];
      }
    }

    const headingFunding = currentLang === "hi" ? "वित्तपोषण राशि" : currentLang === "bn" ? "ঋণ সহায়তা" : "Funding Quantum";
    const headingRate = currentLang === "hi" ? "रियायती दर" : currentLang === "bn" ? "সুদের হার" : "Concessional Rate";
    const headingMorat = currentLang === "hi" ? "मूलधन मोराटोरियम" : currentLang === "bn" ? "মোরাটোরিয়াম" : "Principal Moratorium";
    const headingTenure = currentLang === "hi" ? "ऋण अवधि" : currentLang === "bn" ? "ঋণের মেয়াদ" : "Repayment Tenure";

    const docSectionTitle = currentLang === "hi" ? "आवश्यक वैधानिक दस्तावेज़ चेकलिस्ट" : currentLang === "bn" ? "প্রয়োজনীয় নথিপত্রের তালিকা" : "Required Statutory Documents Checklist";
    const docSectionDesc = currentLang === "hi" ? "जैसे-जैसे आप दस्तावेज़ व्यवस्थित करें, उन्हें चेक करते जाएं। किसी तीसरे पक्ष के एजेंट की आवश्यकता नहीं है:" : currentLang === "bn" ? "নথিগুলি প্রস্তুত করার সাথে সাথে টিক দিন। কোনো দালাল বা মধ্যস্থতাকারীর প্রয়োজন নেই:" : "Check off the documents as you arrange them. No third-party agents are required:";
    const copyBtnText = currentLang === "hi" ? "📋 चेकलिस्ट कॉपी करें" : currentLang === "bn" ? "📋 তালিকা কপি করুন" : "📋 Copy Checklist";

    const roadmapTitle = currentLang === "hi" ? "चरण-दर-चरण आवेदन प्रक्रिया" : currentLang === "bn" ? "ধাপে ধাপে সরকারি আবেদন প্রক্রিয়া" : "Step-by-Step Official Application Roadmap";
    const partnerTitle = currentLang === "hi" ? `${profile.state} में अधिकृत चैनल पार्टनर एवं कार्यालय` : currentLang === "bn" ? `${profile.state} রাজ্যে অনুমোদিত সরকারি অফিস` : `Official Channel Partner & Office in ${profile.state}`;
    const btnCalcText = currentLang === "hi" ? `चरण 4: ईएमआई एवं सब्सिडी कैलकुलेटर पर जाएं →` : currentLang === "bn" ? `ধাপ ৪: ইএমআই ও ভর্তুকি ক্যালকুলেটরে যান →` : `Proceed to Step 4: EMI & Subsidy Calculator →`;

    container.innerHTML = `
      <!-- Header Banner -->
      <div class="dossier-header-banner">
        <span class="dossier-nodal-tag">🏛️ ${s.nodalAgency}</span>
        <h2>${name}</h2>
        <div style="font-size:14.5px; opacity:0.92; margin-top:6px; line-height:1.5;">${desc}</div>

        <div class="dossier-quick-stats">
          <div class="dossier-quick-stat">
            <div class="lbl">${headingFunding}</div>
            <div class="val">${formatLakhCrore(item.calculatedLoan)}</div>
          </div>
          <div class="dossier-quick-stat">
            <div class="lbl">${headingRate}</div>
            <div class="val">${s.rate === 0 ? "0% (Grant)" : s.rate + "% p.a."}</div>
          </div>
          <div class="dossier-quick-stat">
            <div class="lbl">${headingMorat}</div>
            <div class="val">${s.moratoriumMonths} Months</div>
          </div>
          <div class="dossier-quick-stat">
            <div class="lbl">${headingTenure}</div>
            <div class="val">${s.tenureYears} Years</div>
          </div>
        </div>
      </div>

      <!-- Government Subsidy & Financial Protection -->
      <div class="card" style="border-left: 5px solid var(--accent-gold);">
        <div class="card-title-row">
          <span class="card-title-icon">🏛️</span>
          <h3>Government-Borne Subsidy & Statutory Subvention</h3>
        </div>
        <div class="govt-subsidy-card" style="margin:0 0 12px 0;">
          <div class="badge-icon">💡</div>
          <div>
            <h4>Statutory Protection Notice</h4>
            <p style="font-size:14px;">${s.govtInterestSubsidy}</p>
          </div>
        </div>
        <div style="font-size:14px; color:var(--text-muted); line-height:1.6;">
          <strong>Borrower Protection Mandate:</strong> Under Ministry regulations, you are not subject to commercial lending rates. During the <strong>${s.moratoriumMonths}-month moratorium</strong>, you make zero principal repayments.
        </div>
      </div>

      <!-- Key Scheme Advantages -->
      ${s.keyBenefits && s.keyBenefits.length > 0 ? `
        <div class="card">
          <div class="card-title-row">
            <span class="card-title-icon">⭐</span>
            <h3>Key Advantages & Scope of Coverage</h3>
          </div>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:12px;">
            ${s.keyBenefits.map(b => `
              <div style="background:var(--bg-subtle); padding:14px; border-radius:var(--radius-md); font-size:14px; display:flex; gap:10px;">
                <span style="color:var(--accent-green); font-weight:bold; font-size:16px;">✓</span>
                <span>${b}</span>
              </div>
            `).join("")}
          </div>
        </div>
      ` : ''}

      <!-- Interactive Required Documents Checklist -->
      <div class="card">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:12px;">
          <div class="card-title-row" style="margin-bottom:0; border-bottom:none; padding-bottom:0;">
            <span class="card-title-icon">📋</span>
            <h3>${docSectionTitle}</h3>
          </div>
          <button type="button" class="btn btn-outline" id="btnCopyDocs" style="min-height:38px; padding:6px 14px; font-size:13px;">
            ${copyBtnText}
          </button>
        </div>
        <p style="font-size:14px; color:var(--text-muted); margin-bottom:14px;">
          ${docSectionDesc}
        </p>

        <div id="checklistWrap">
          ${(s.documentsRequired || []).map((doc, idx) => `
            <label class="checklist-item" id="checkItem_${idx}">
              <input type="checkbox" data-idx="${idx}">
              <span>${doc}</span>
            </label>
          `).join("")}
        </div>
      </div>

      <!-- Step-by-Step In-App Application Process -->
      <div class="card">
        <div class="card-title-row">
          <span class="card-title-icon">🧭</span>
          <h3>${roadmapTitle}</h3>
        </div>
        <div class="timeline-steps">
          ${(s.applicationSteps || []).map((st, idx) => `
            <div class="timeline-step">
              <div class="timeline-node">${idx + 1}</div>
              <h4>${st.title}</h4>
              <p>${st.desc}</p>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- Authorized Local Channel Partner in User's State -->
      <div class="card">
        <div class="card-title-row">
          <span class="card-title-icon">📍</span>
          <h3>${partnerTitle}</h3>
        </div>
        <p style="font-size:14px; color:var(--text-muted);">
          Submit your application dossier directly to this authorized government channel:
        </p>

        <div class="partner-contact-box">
          <h4>${partner ? partner.name : (s.whereToSubmit || "District Welfare Office / Lead Bank")}</h4>
          <div class="partner-detail-row">
            <span>🏢</span>
            <span><strong>Agency Type:</strong> ${partner ? partner.type : "Official Government Nodal Office"}</span>
          </div>
          <div class="partner-detail-row">
            <span>📍</span>
            <span><strong>Office Address:</strong> ${partner ? `${partner.address}, ${partner.city}` : `District Office, ${profile.state}`}</span>
          </div>
          ${partner && partner.phone ? `
            <div class="partner-detail-row">
              <span>📞</span>
              <span><strong>Helpline:</strong> ${partner.phone}</span>
            </div>
          ` : ''}
          ${partner && partner.email ? `
            <div class="partner-detail-row">
              <span>✉️</span>
              <span><strong>Official Email:</strong> ${partner.email}</span>
            </div>
          ` : ''}
          ${partner && partner.website ? `
            <div class="partner-detail-row">
              <span>🌐</span>
              <span><strong>Official Portal:</strong> <a href="${partner.website}" target="_blank" rel="noopener noreferrer" style="color:var(--accent-teal); font-weight:700;">${partner.website} ↗</a></span>
            </div>
          ` : ''}
        </div>
      </div>

      <!-- Bottom Step Progression Row -->
      <div style="display:flex; justify-content:space-between; gap:12px; margin-top:24px; flex-wrap:wrap;">
        <button type="button" class="btn btn-outline" onclick="window.setuNavigateTo('schemes')">
          ← Back to Available Schemes
        </button>
        <button type="button" class="btn btn-primary" id="btnCalcFromBottom" style="padding:14px 26px;">
          ${btnCalcText}
        </button>
      </div>
    `;

    // Interactive Checklist Strike-through
    const checklistWrap = container.querySelector("#checklistWrap");
    if (checklistWrap) {
      checklistWrap.querySelectorAll("input[type='checkbox']").forEach(cb => {
        cb.addEventListener("change", function () {
          const item = this.closest(".checklist-item");
          if (item) item.classList.toggle("checked", this.checked);
        });
      });
    }

    // Copy Checklist Button
    const btnCopyDocs = container.querySelector("#btnCopyDocs");
    if (btnCopyDocs) {
      btnCopyDocs.addEventListener("click", function () {
        const text = `Official Document Checklist for ${name}:\n\n` + s.documentsRequired.map((d, i) => `${i + 1}. ${d}`).join("\n");
        navigator.clipboard?.writeText(text).then(() => {
          btnCopyDocs.textContent = "✓ Copied to Clipboard!";
          setTimeout(() => { btnCopyDocs.textContent = copyBtnText; }, 2200);
        }).catch(() => {
          alert("Checklist copied!");
        });
      });
    }

    // EMI Calculator trigger from bottom
    container.querySelector("#btnCalcFromBottom")?.addEventListener("click", function () {
      prefillEMICalculator(s, item.calculatedLoan);
      navigateTo("calculator");
    });
  }

  // ==========================================================================
  // 7. Dedicated Interactive EMI Calculator (Step 4)
  // ==========================================================================
  function initEMICalculator() {
    const amountInput = document.getElementById("emiAmountInput");
    const rateInput = document.getElementById("emiRateInput");
    const tenureInput = document.getElementById("emiTenureInput");
    const morInput = document.getElementById("emiMoratoriumInput");
    const schemeSel = document.getElementById("emiSchemeSelect");
    const amountFormatted = document.getElementById("emiAmountFormatted");

    function runCalculation() {
      let principal = parseFloat(amountInput.value) || 0;
      if (principal > 10000000) {
        principal = 10000000;
        amountInput.value = principal;
      }
      if (amountFormatted) amountFormatted.textContent = formatLakhCrore(principal);

      const rate = parseFloat(rateInput.value) || 0;
      const tenureYrs = parseInt(tenureInput.value) || 5;
      const moratoriumMos = parseInt(morInput.value) || 0;

      const totalMonths = tenureYrs * 12;
      const repayMonths = Math.max(1, totalMonths - moratoriumMos);

      let emi = 0;
      let totalInterest = 0;

      if (rate === 0) {
        emi = Math.round(principal / repayMonths);
        totalInterest = 0;
      } else {
        const r = (rate / 12) / 100;
        const factor = Math.pow(1 + r, repayMonths);
        emi = Math.round((principal * r * factor) / (factor - 1));
        totalInterest = Math.round((emi * repayMonths) - principal);
      }

      const totalPayable = principal + totalInterest;

      // Commercial bank comparison (~13% commercial interest)
      const commRate = 13.0;
      const rComm = (commRate / 12) / 100;
      const factorComm = Math.pow(1 + rComm, repayMonths);
      const commEmi = Math.round((principal * rComm * factorComm) / (factorComm - 1));
      const commTotalInterest = Math.round((commEmi * repayMonths) - principal);
      const govtSavings = Math.max(0, commTotalInterest - totalInterest);

      // Update UI displays
      document.getElementById("emiMonthlyDisplay").textContent = formatINR(emi);
      document.getElementById("emiPrincipalDisplay").textContent = formatINR(principal);
      document.getElementById("emiTotalInterestDisplay").textContent = formatINR(totalInterest);
      document.getElementById("emiTotalPayableDisplay").textContent = formatINR(totalPayable);
      document.getElementById("emiGovtSavingsDisplay").textContent = `${formatINR(govtSavings)} saved via Govt Subvention`;

      // Build Yearly Amortization Table
      buildAmortizationTable(principal, rate, tenureYrs, moratoriumMos, emi);
    }

    [amountInput, rateInput, tenureInput, morInput].forEach(inp => {
      if (inp) inp.addEventListener("input", runCalculation);
    });

    if (schemeSel) {
      schemeSel.addEventListener("change", function () {
        const sid = schemeSel.value;
        const s = (window.SCHEMES_DATA || []).find(item => item.id === sid);
        if (s) {
          rateInput.value = s.rate;
          tenureInput.value = s.tenureYears;
          morInput.value = s.moratoriumMonths;
          runCalculation();
        }
      });
    }

    runCalculation();
  }

  function populateEMISchemeSelect(schemes) {
    const sel = document.getElementById("emiSchemeSelect");
    if (!sel) return;
    sel.innerHTML = `<option value="custom">-- Custom Loan / Scheme Simulator --</option>`;
    schemes.forEach(s => {
      const opt = document.createElement("option");
      opt.value = s.id;
      const { name } = getSchemeLocaleText(s);
      opt.textContent = `${name} (Max ${formatINR(s.maxCost)} @ ${s.rate}% p.a.)`;
      sel.appendChild(opt);
    });
  }

  function prefillEMICalculator(scheme, amount) {
    const schemeSel = document.getElementById("emiSchemeSelect");
    const amountInput = document.getElementById("emiAmountInput");
    const rateInput = document.getElementById("emiRateInput");
    const tenureInput = document.getElementById("emiTenureInput");
    const morInput = document.getElementById("emiMoratoriumInput");

    if (schemeSel) schemeSel.value = scheme.id;
    if (amountInput) {
      amountInput.value = Math.min(10000000, amount || scheme.maxCost);
      const amountFormatted = document.getElementById("emiAmountFormatted");
      if (amountFormatted) amountFormatted.textContent = formatLakhCrore(amountInput.value);
    }
    if (rateInput) rateInput.value = scheme.rate;
    if (tenureInput) tenureInput.value = scheme.tenureYears;
    if (morInput) morInput.value = scheme.moratoriumMonths;

    // Trigger calculation
    const evt = new Event("input");
    amountInput?.dispatchEvent(evt);
  }

  function buildAmortizationTable(principal, annualRate, tenureYrs, moratoriumMos, emi) {
    const tbody = document.getElementById("amortTableBody");
    if (!tbody) return;
    tbody.innerHTML = "";

    let balance = principal;
    const monthlyRate = (annualRate / 12) / 100;

    for (let yr = 1; yr <= tenureYrs; yr++) {
      let yrPrincipal = 0;
      let yrInterest = 0;

      for (let m = 1; m <= 12; m++) {
        const monthNum = ((yr - 1) * 12) + m;
        if (monthNum <= moratoriumMos) {
          // Moratorium phase
          const interest = Math.round(balance * monthlyRate);
          yrInterest += interest;
        } else if (balance > 0) {
          const interest = Math.round(balance * monthlyRate);
          const pPaid = Math.min(balance, Math.round(emi - interest));
          yrInterest += interest;
          yrPrincipal += pPaid;
          balance = Math.max(0, balance - pPaid);
        }
      }

      const row = document.createElement("tr");
      const morLabel = (yr * 12 <= moratoriumMos) 
        ? `<span style="color:var(--accent-gold); font-size:11px; font-weight:700;">(Moratorium)</span>` 
        : '';

      row.innerHTML = `
        <td>Year ${yr} ${morLabel}</td>
        <td>${formatINR(yrPrincipal)}</td>
        <td>${formatINR(yrInterest)}</td>
        <td>${formatINR(balance)}</td>
      `;
      tbody.appendChild(row);
      if (balance <= 0) break;
    }
  }

  // Global helpers
  window.setuNavigateTo = navigateTo;
  window.setuSetLanguage = setLanguage;

})();
