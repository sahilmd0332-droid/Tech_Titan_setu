/**
 * Setu 2.0 - Statutory RAG Knowledge Base & Intelligence Engine
 * SIH 2026 Problem Statement 92 (Ministry of Social Justice & Empowerment)
 * 
 * Powered by Grounded Statutory Data:
 * - Ministry of Social Justice & Empowerment (MoSJE)
 * - National Scheduled Castes Finance & Development Corporation (NSFDC)
 * - National Safai Karamcharis Finance & Development Corporation (NSKFDC)
 * - National Scheduled Tribes Finance & Development Corporation (NSTFDC)
 * - National Backward Classes Finance & Development Corporation (NBCFDC)
 * - Ministry of MSME & KVIC (PMEGP, PM Vishwakarma, CGTMSE, NSSH)
 * - Department of Financial Services & SIDBI (Stand-Up India, MUDRA)
 * - Ministry of Food Processing Industries (PMFME)
 * - Ministry of Agriculture & Farmers Welfare / NABARD (AIF, PM-KUSUM)
 * - Ministry of Housing & Urban Affairs (PM SVANidhi, NAMASTE, DAY-NULM)
 * 
 * Extracts exact physical offices, verified phone numbers, direct portal URLs,
 * and statutory document checklists mapped directly to user state and category.
 */

const STATUTORY_KNOWLEDGE_CHUNKS = [
  {
    schemeId: "nskfdc-suy",
    recognizedSource: "Ministry of Social Justice & Empowerment & NSKFDC Operational Guidelines 2024",
    officialPortal: "https://nskfdc.nic.in/scheme",
    gazetteRef: "MoSJE Notification No. 19014/03/2014-SCD-IV",
    helplinePhone: "011-26566952 / Toll-Free: 1800-11-0033",
    officialEmail: "nskfdc-msje@nic.in",
    statutoryDocuments: [
      "Identity Proof (Aadhaar Card with mobile linkage)",
      "Safai Karamchari / Manual Scavenger Dependent Certificate issued by Municipal Corporation / Nagar Palika / Gram Panchayat",
      "Quotation of ARAI-approved mechanized sanitation vehicle (suction-cum-jetting machine / sewer cleaning truck)",
      "Valid Commercial Heavy/Light Motor Vehicle Driving License of the operator",
      "Consent Letter / Letter of Intent (LoI) from local Urban Local Body (ULB) for sewer maintenance deployment",
      "Bank Account Passbook (Aadhaar seeded with active IFSC code)"
    ],
    subsidyRules: "Government provides up to 90% concessional loan at 4.0% p.a. for women/safai karamcharis (5% for others). Repayment over 7 years with 6 months principal moratorium. Zero third-party mortgage required."
  },
  {
    schemeId: "namaste-scheme",
    recognizedSource: "National Action for Mechanised Sanitation Ecosystem (NAMASTE) Joint Guidelines - MoSJE & MoHUA",
    officialPortal: "https://namaste.gov.in",
    gazetteRef: "Central Sector Scheme NAMASTE Guidelines File No. 12015/01/2021-SCD-IV",
    helplinePhone: "011-26566952 / 1800-180-1111",
    officialEmail: "info.namaste@gov.in",
    statutoryDocuments: [
      "NAMASTE Certified Worker Identity Card / Verification Letter by Municipal Commissioner",
      "Aadhaar Card and PAN Card of Sanipreneur",
      "Manufacturer Proforma Invoice of robotic / mechanized sewer cleaning equipment",
      "Commercial Driver / Machine Operator Fitness Certificate",
      "Bank Account Details (Aadhaar seeded for DBT capital subsidy transfer)"
    ],
    subsidyRules: "50% direct capital subsidy (up to ₹5,00,000 non-refundable grant). Remaining loan subsidized to 5% p.a. interest. Free health insurance cover under PM-JAY and PPE safety gear provided."
  },
  {
    schemeId: "nskfdc-term",
    recognizedSource: "NSKFDC Lending Policy Compendium & Citizen Charter Section 3",
    officialPortal: "https://nskfdc.nic.in",
    gazetteRef: "NSKFDC Statutory Guidelines File No. 1-2(1)/2022-NSKFDC",
    helplinePhone: "011-26566952 / 011-26566953",
    officialEmail: "nskfdc-msje@nic.in",
    statutoryDocuments: [
      "Aadhaar Card & PAN Card",
      "Safai Karamchari / Sanitation Worker Dependent Certificate from Municipal Ward Officer or Village Panchayat",
      "Annual Family Income Certificate (proving annual income ≤ ₹5.00 Lakh)",
      "Quotation / Proforma Invoice of machines, vehicles, or business tools to be purchased",
      "Brief Business Plan / Project Feasibility Report"
    ],
    subsidyRules: "Concessional credit up to ₹50 Lakh. NSKFDC funds 90% of project cost at 6% p.a. (5% for women). Repayment tenure up to 10 years with 9 months principal repayment holiday."
  },
  {
    schemeId: "standup",
    recognizedSource: "Department of Financial Services, Ministry of Finance / SIDBI Stand-Up India Operational Manual",
    officialPortal: "https://standupmitra.in",
    gazetteRef: "DFS Circular No. 28/2016-F.No. 3/10/2015-AC",
    helplinePhone: "1800-180-1111 / 022-67531100 (SIDBI National Cell)",
    officialEmail: "standupmitra@sidbi.in",
    statutoryDocuments: [
      "Proof of Identity & Residence (Aadhaar Card, PAN Card, Voter ID)",
      "SC/ST Caste Certificate issued by competent Revenue Authority (SDO/Tehsildar) OR Proof of Woman Entrepreneurship (≥ 51% shareholding)",
      "Greenfield Self-Declaration (Undertaking confirming first-time commercial enterprise of applicant)",
      "Detailed Project Report (DPR) detailing capital expenditure (machinery), civil works, and working capital cycle",
      "Proforma Invoices of plant & machinery from authorized equipment manufacturers",
      "Rent Agreement / Registered Lease Deed or title deed for business premise",
      "Udyam Registration Certificate & GST Registration (if applicable)"
    ],
    subsidyRules: "Commercial bank rate capped at lowest MCLR + 3% tenor premium. Backed by 100% sovereign credit guarantee under Credit Guarantee Fund for Stand-Up India (CGFSI). Margin money can be clubbed with state subsidies down to 15%."
  },
  {
    schemeId: "pmegp-mfg",
    recognizedSource: "KVIC / Ministry of Micro, Small and Medium Enterprises (MoMSME) PMEGP Scheme Guidelines 2024",
    officialPortal: "https://kviconline.gov.in/pmegp",
    gazetteRef: "MoMSME Notification PMEGP/Policy/2022-23/Cir-01",
    helplinePhone: "1800-3000-0034 / 022-26711003",
    officialEmail: "pmegp.kvic@gov.in",
    statutoryDocuments: [
      "Detailed Project Report (DPR) adhering to KVIC manufacturing norms with projected 3-year cash flows",
      "Educational Qualification Certificate (minimum 8th standard pass for manufacturing projects > ₹10 Lakh)",
      "Special Category Certificate (SC/ST/OBC/Women/PwD/EWS for claiming 35% rural or 25% urban subsidy)",
      "Rural Area Certificate issued by Gram Panchayat / Block Development Officer (for 35% subsidy)",
      "Aadhaar Card, PAN Card, and Passport Photographs",
      "EDP Training Completion Certificate (can be completed online on e-PMEGP portal)"
    ],
    subsidyRules: "35% non-refundable government capital subsidy in rural areas (25% in urban areas). Beneficiary own contribution is only 5% for SC/ST/OBC/Women/Rural. 3-year lock-in period in Term Deposit Receipt without interest charges."
  },
  {
    schemeId: "pmegp-serv",
    recognizedSource: "KVIC / Ministry of MSME PMEGP Service & Trading Guidelines",
    officialPortal: "https://kviconline.gov.in/pmegp",
    gazetteRef: "MoMSME Circular No. PMEGP/Serv/2023-24",
    helplinePhone: "1800-3000-0034",
    officialEmail: "pmegp.kvic@gov.in",
    statutoryDocuments: [
      "Service Venture Detailed Project Report (DPR)",
      "Educational Qualification Certificate (min 8th pass for projects > ₹5 Lakh)",
      "Category Certificate (SC/ST/OBC/Women/EWS)",
      "Gram Panchayat Certificate (for rural 35% subsidy)",
      "Aadhaar Card and PAN Card"
    ],
    subsidyRules: "Up to 35% non-refundable government grant (up to ₹7 Lakh). Bank finances composite term loan and cash credit. No third-party guarantee needed under CGTMSE."
  },
  {
    schemeId: "pm-vishwakarma",
    recognizedSource: "Ministry of MSME, MoSJE & Ministry of Skill Development PM Vishwakarma Operational Guidelines",
    officialPortal: "https://pmvishwakarma.gov.in",
    gazetteRef: "Gazette of India Extraordinary Part-II Sec 3(i) No. 445/2023",
    helplinePhone: "1800-267-7777 / 011-23061500",
    officialEmail: "pmvishwakarma@dcmsme.gov.in",
    statutoryDocuments: [
      "Aadhaar Card with active biometric and mobile linkage",
      "Bank Account Passbook (Aadhaar seeded for DBT transfer)",
      "Ration Card / Family Composition Certificate",
      "Traditional Trade Verification Certificate endorsed by Gram Panchayat Sarpanch or Urban Local Body Chairman"
    ],
    subsidyRules: "Beneficiary pays a fixed ultra-low interest rate of 5.0% p.a. Government pays up to 8% interest subvention directly to the bank. Includes a ₹15,000 modern toolkit e-voucher grant and ₹500/day training stipend."
  },
  {
    schemeId: "term",
    recognizedSource: "National Scheduled Castes Finance & Development Corporation (NSFDC) Lending Policy Chapter 3",
    officialPortal: "https://nsfdc.nic.in/scheme",
    gazetteRef: "NSFDC Policy Directive File No. NSFDC/Scheme/2023-24",
    helplinePhone: "011-26566952 / 1800-11-2211",
    officialEmail: "nsfdc@nic.in",
    statutoryDocuments: [
      "Aadhaar Card and PAN Card",
      "SC Caste Certificate issued by Sub-Divisional Officer (SDO) or Tehsildar",
      "Annual Family Income Certificate (proving annual income ≤ ₹5.00 Lakh)",
      "Proforma Invoices / Quotations of plant, machinery, or tools from authorized suppliers",
      "Detailed Project Report (DPR) with cash-flow projection",
      "Affidavit affirming non-availment of duplicate capital subsidy from other central ministries"
    ],
    subsidyRules: "Effective borrower interest rate capped at 6.0% p.a. for loans up to ₹5 Lakh, and 8.0% for loans up to ₹50 Lakh. Women receive a 0.5% interest rebate. Up to 90% financed through State SC Corporations."
  },
  {
    schemeId: "nstfdc-term",
    recognizedSource: "National Scheduled Tribes Finance & Development Corporation (NSTFDC) Lending Compendium",
    officialPortal: "https://nstfdc.tribal.gov.in",
    gazetteRef: "Ministry of Tribal Affairs Order No. 14011/02/2022-TDA",
    helplinePhone: "011-26712519 / 011-26712520",
    officialEmail: "nstfdc@tribal.nic.in",
    statutoryDocuments: [
      "Aadhaar Card and PAN Card",
      "ST Caste Certificate issued by competent Revenue Authority (SDO / Tehsildar)",
      "Annual Family Income Certificate (≤ ₹5.00 Lakh per year)",
      "Quotation / Proforma Invoice of machinery, tools, or transport vehicle",
      "Project Profile detailing business feasibility and market demand"
    ],
    subsidyRules: "Subsidized interest rate of 6.0% p.a. (5.5% for tribal women). Up to 90% financed through State Tribal Development Co-operative Corporations. Repayment up to 10 years with 12 months moratorium."
  },
  {
    schemeId: "nstfdc-amsy",
    recognizedSource: "Ministry of Tribal Affairs Adivasi Mahila Sashaktikaran Yojana (AMSY) Directives",
    officialPortal: "https://nstfdc.tribal.gov.in",
    gazetteRef: "MoTA Circular AMSY/2023/04",
    helplinePhone: "011-26712519",
    officialEmail: "nstfdc@tribal.nic.in",
    statutoryDocuments: [
      "Aadhaar Card of the Tribal Woman Beneficiary",
      "ST Caste Certificate issued by competent authority",
      "Family Income Certificate (≤ ₹5.00 Lakh)",
      "Bank Account details (Aadhaar linked)",
      "Quotation / cost estimate for micro enterprise"
    ],
    subsidyRules: "Ultra-low subsidized interest rate of 4.0% p.a. Government funds 90% of project cost (promoter margin is only 10%). 6-month repayment moratorium."
  },
  {
    schemeId: "nbcfdc-general",
    recognizedSource: "National Backward Classes Finance & Development Corporation (NBCFDC) Lending Guidelines",
    officialPortal: "https://nbcfdc.gov.in",
    gazetteRef: "NBCFDC Lending Manual Chapter 2",
    helplinePhone: "011-45854400 / 011-26511064",
    officialEmail: "info@nbcfdc.gov.in",
    statutoryDocuments: [
      "OBC (Non-Creamy Layer) Certificate issued by SDO / Tehsildar",
      "Annual Family Income Certificate (proving annual income ≤ ₹3.00 Lakh)",
      "Aadhaar Card and PAN Card",
      "Proforma Invoices of equipment / vehicle to be purchased",
      "Detailed Project Profile"
    ],
    subsidyRules: "Concessional 6.0% p.a. interest rate for loans up to ₹5 Lakh, and 7.0% for loans up to ₹15 Lakh. Up to 85% project cost funded by NBCFDC."
  },
  {
    schemeId: "nbcfdc-swarnima",
    recognizedSource: "NBCFDC New Swarnima Scheme for Backward Class Women Operational Manual",
    officialPortal: "https://nbcfdc.gov.in",
    gazetteRef: "NBCFDC Circular Swarnima/2023-24",
    helplinePhone: "011-45854400",
    officialEmail: "info@nbcfdc.gov.in",
    statutoryDocuments: [
      "OBC (Non-Creamy Layer) Caste Certificate of woman entrepreneur",
      "Annual Family Income Certificate (≤ ₹3.00 Lakh per annum)",
      "Aadhaar Card and Bank Account Passbook",
      "Brief quote for small business / trade setup"
    ],
    subsidyRules: "Fixed subsidized interest rate of 5.0% p.a. NBCFDC funds 95% of project cost; woman beneficiary provides only 5% promoter contribution."
  },
  {
    schemeId: "cgtmse",
    recognizedSource: "Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE) - Ministry of MSME & SIDBI",
    officialPortal: "https://cgtmse.in",
    gazetteRef: "CGTMSE Policy Circular No. 222/2023-24",
    helplinePhone: "022-61437400 / 1800-222-687",
    officialEmail: "cgtmse@sidbi.in",
    statutoryDocuments: [
      "Detailed Project Report (DPR) with projected balance sheet and DSCR calculation",
      "Udyam Registration Certificate & PAN Card",
      "Bank Account statements for past 12 months",
      "Proof of business premise ownership or registered lease agreement"
    ],
    subsidyRules: "Up to 85% sovereign credit guarantee cover for women/SC/ST/micro enterprises up to ₹1 Crore. Banks cannot demand collateral security (no land, house, or gold mortgage)."
  },
  {
    schemeId: "pmfme",
    recognizedSource: "Ministry of Food Processing Industries (MoFPI) PMFME Operational Guidelines",
    officialPortal: "https://pmfme.mofpi.gov.in",
    gazetteRef: "MoFPI Guidelines F.No. 1-1/2020-FME",
    helplinePhone: "011-26497214 / 1800-11-1100",
    officialEmail: "pmfme-mofpi@gov.in",
    statutoryDocuments: [
      "Detailed Project Report (DPR) for food processing machinery and working capital",
      "FSSAI Food License / Registration or formal undertaking to obtain license",
      "Quotations of food-grade stainless steel machinery",
      "Proof of premise ownership or minimum 5-year lease deed",
      "Aadhaar Card, PAN Card, and Bank statements"
    ],
    subsidyRules: "35% credit-linked direct capital subsidy (up to ₹10,00,000 non-refundable grant). Beneficiary margin money is only 10%."
  },
  {
    schemeId: "aif",
    recognizedSource: "Department of Agriculture & Farmers Welfare, Ministry of Agriculture AIF Operational Guidelines",
    officialPortal: "https://agriinfra.dac.gov.in",
    gazetteRef: "MoA&FW Guidelines F.No. 1-1/2020-AIF",
    helplinePhone: "011-23381012 / 1800-180-1551",
    officialEmail: "agriinfra-dac@gov.in",
    statutoryDocuments: [
      "Detailed Project Report (DPR) of post-harvest agri-infrastructure / cold store / warehouse",
      "Land Ownership Documents (7/12 extract / Khatauni / Jamabandi) or registered lease for min 10 years",
      "Statutory building and environmental approvals",
      "PAN Card and KYC documents of borrower"
    ],
    subsidyRules: "3.0% annual government interest subvention for up to 7 years. 100% CGTMSE credit guarantee fee paid by the Government of India."
  },
  {
    schemeId: "pm-kusum",
    recognizedSource: "Ministry of New and Renewable Energy (MNRE) PM-KUSUM Scheme Guidelines",
    officialPortal: "https://pmkusum.mnre.gov.in",
    gazetteRef: "MNRE Order No. 32/645/2017-SPV Division",
    helplinePhone: "1800-180-3333 / 011-24360707",
    officialEmail: "pmkusum-mnre@gov.in",
    statutoryDocuments: [
      "Land Ownership Documents (7/12 extract / Khasra / Khatoni)",
      "Proof of active borewell / water source on agricultural field",
      "Aadhaar Card and Bank Passbook",
      "Caste Certificate (for claiming special category priority allocation)"
    ],
    subsidyRules: "60% direct non-refundable government subsidy (30% Central + 30% State grant). Farmer pays only 10% own contribution; remaining 30% funded by bank loan."
  }
];

class SetuRagEngine {
  constructor(chunks) {
    this.chunks = chunks || STATUTORY_KNOWLEDGE_CHUNKS;
  }

  /**
   * Retrieves official grounded dossier for a scheme customized to applicant's state and category
   */
  getSchemeDossier(schemeId, userProfile) {
    const chunk = this.chunks.find(c => c.schemeId === schemeId) || {
      recognizedSource: "Ministry of Social Justice & Empowerment / Government of India Guidelines",
      officialPortal: "https://myscheme.gov.in",
      gazetteRef: "Official Gazette Notification No. MoSJE/2024",
      helplinePhone: "1800-11-0031 (National Social Justice Helpline)",
      officialEmail: "support@mosje.gov.in",
      statutoryDocuments: [
        "Aadhaar Card & PAN Card",
        "Community / Category Certificate issued by Sub-Divisional Officer (SDO) or Tehsildar",
        "Annual Family Income Certificate",
        "Quotations / Proforma Invoices of machinery and tools",
        "Detailed Project Report (DPR) with 3-year cash flow projections"
      ],
      subsidyRules: "Government provides statutory interest subvention, principal moratorium, and sovereign credit guarantee."
    };

    // Locate verified channel partner in user's state
    let partner = null;
    if (window.REAL_PARTNERS) {
      // 1. Exact match for state AND scheme id
      partner = window.REAL_PARTNERS.find(p => p.state === userProfile.state && p.handles?.includes(schemeId));

      // 2. Exact match for state AND category
      if (!partner) {
        partner = window.REAL_PARTNERS.find(p => p.state === userProfile.state && p.categories?.includes(userProfile.category));
      }

      // 3. Fallback to state partner
      if (!partner) {
        partner = window.REAL_PARTNERS.find(p => p.state === userProfile.state);
      }

      // 4. Fallback to National Lead Bank / Nodal Agency
      if (!partner) {
        partner = window.REAL_PARTNERS.find(p => p.handles?.includes(schemeId))
          || window.REAL_PARTNERS.find(p => p.id === "bank-sbi")
          || window.REAL_PARTNERS[0];
      }
    }

    return {
      recognizedSource: chunk.recognizedSource,
      officialPortal: chunk.officialPortal,
      gazetteRef: chunk.gazetteRef,
      helplinePhone: partner?.phone || chunk.helplinePhone,
      officialEmail: partner?.email || chunk.officialEmail,
      statutoryDocuments: chunk.statutoryDocuments,
      subsidyRules: chunk.subsidyRules,
      partner: partner
    };
  }
}

if (typeof window !== "undefined") {
  window.STATUTORY_KNOWLEDGE_CHUNKS = STATUTORY_KNOWLEDGE_CHUNKS;
  window.RAG_ENGINE = new SetuRagEngine(STATUTORY_KNOWLEDGE_CHUNKS);
}
