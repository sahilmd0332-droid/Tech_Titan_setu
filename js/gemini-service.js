/**
 * Setu 2.0 - Gemini AI Advisor Service
 * Connects to Google Gemini API (gemini-1.5-flash) with User Context Injection
 * Features ultra-concise responses (2-3 short bullet points) and intelligent contextual fallback.
 */

class GeminiService {
  constructor() {
    this.apiKey = localStorage.getItem("setu_gemini_api_key") || "";
    this.model = "gemini-1.5-flash";
  }

  setApiKey(key) {
    this.apiKey = (key || "").trim();
    if (this.apiKey) {
      localStorage.setItem("setu_gemini_api_key", this.apiKey);
    } else {
      localStorage.removeItem("setu_gemini_api_key");
    }
  }

  getApiKey() {
    return this.apiKey;
  }

  hasApiKey() {
    return !!this.apiKey;
  }

  /**
   * Calls Google Gemini API or intelligent context-aware local engine
   */
  async askAssistant(userQuery, profile, scheme) {
    const q = (userQuery || "").toLowerCase();

    // If Gemini API Key is available, make a live API request
    if (this.apiKey) {
      try {
        const pCategory = profile?.category || "SC";
        const pState = profile?.state || "India";
        const pCost = profile?.cost ? `₹${Number(profile.cost).toLocaleString('en-IN')}` : "₹25 Lakh";
        const pVenture = profile?.ventureType || "Greenfield";
        const schemeName = scheme ? scheme.nameEn : "Government Schemes";

        const systemPrompt = `
You are Setu AI, an expert civic advisor for Ministry of Social Justice & Empowerment (MoSJE) and Government of India schemes.
Applicant Profile:
- Social Category: ${pCategory}
- State / UT: ${pState}
- Funding Required: ${pCost}
- Venture Type: ${pVenture}
- Active Scheme Context: ${schemeName}

MANDATORY INSTRUCTION:
Provide an expert, highly specific answer directly addressing the query.
Keep your response SHORT and CONCISE: Maximum 2 to 3 crisp bullet points or sentences.
State exact statutory facts, government interest subvention rules (e.g. government pays the interest/subsidy), and local authorities. Do not give boilerplate intros or links.`;

        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${this.model}:generateContent?key=${this.apiKey}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  { text: systemPrompt },
                  { text: `User Question: ${userQuery}` }
                ]
              }
            ],
            generationConfig: {
              temperature: 0.2,
              maxOutputTokens: 250
            }
          })
        });

        if (response.ok) {
          const data = await response.json();
          const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
          if (text) return text.trim();
        }
      } catch (err) {
        console.warn("Gemini API call failed, switching to local knowledge engine:", err);
      }
    }

    // Intelligent context-aware local response engine (varies for every topic)
    return this.getIntelligentLocalResponse(q, profile, scheme);
  }

  /**
   * Topic-aware response engine that delivers short, precise answers tailored to the user's profile
   */
  getIntelligentLocalResponse(q, profile, scheme) {
    const category = profile?.category || "SC";
    const state = profile?.state || "your state";
    const schemeName = scheme ? scheme.nameEn : "Government Schemes";

    if (q.includes("interest") || q.includes("who pays") || q.includes("subvention") || q.includes("rate")) {
      return `• <strong>Government Interest Subvention:</strong> Under MoSJE and central rules, the Government of India absorbs commercial interest costs, capping borrower interest to a deeply subsidized 4% - 6% p.a.<br>
• <strong>Moratorium Relief:</strong> During study or project gestation periods, 100% of the interest is paid directly by the Government.<br>
• <strong>Capital Grants:</strong> Schemes like PMEGP and PMFME provide 35% non-refundable capital subsidies that you never have to repay.`;
    }

    if (q.includes("collateral") || q.includes("guarantee") || q.includes("security") || q.includes("property")) {
      return `• <strong>Zero Property Mortgage:</strong> Under CEGSSC, CGTMSE, and Stand-Up India, you do NOT need to pledge land, home, or gold.<br>
• <strong>Sovereign Guarantee:</strong> The Government of India provides a 75% to 100% sovereign credit guarantee directly to the financing bank on your behalf.`;
    }

    if (q.includes("caste") || q.includes("certificate") || q.includes("revenue") || q.includes("sdo") || q.includes("tehsildar")) {
      return `• <strong>Competent Authority:</strong> In ${state}, valid ${category} community certificates are issued by the Sub-Divisional Officer (SDO), Revenue Divisional Officer (RDO), or Tehsildar.<br>
• <strong>Digital Verification:</strong> Digital caste certificates with a verifiable barcode/QR code are directly accepted by State Channelising Agencies (SCAs) without physical attestation.`;
    }

    if (q.includes("pmegp") || q.includes("kvic") || q.includes("dic")) {
      return `• <strong>PMEGP Subsidy:</strong> SC/ST and rural women entrepreneurs receive a 35% direct non-refundable capital subsidy (25% in urban areas).<br>
• <strong>Margin & Ceiling:</strong> Own promoter contribution is only 5%. Maximum project cost is ₹50 Lakh for manufacturing and ₹20 Lakh for services.<br>
• <strong>Application:</strong> Processed through the District Industries Centre (DIC) or KVIC e-portal.`;
    }

    if (q.includes("stand up") || q.includes("standup")) {
      return `• <strong>Mandatory Quota:</strong> Every bank branch in ${state} must sanction at least 1 SC/ST and 1 woman borrower loan between ₹10 Lakh and ₹1 Crore.<br>
• <strong>Greenfield Mandate:</strong> Strictly intended for new commercial enterprises (first-time business venture of the applicant).<br>
• <strong>Margin:</strong> Bank loans cover 85% of project cost; promoter puts 15% (can be clubbed with state subsidies).`;
    }

    if (q.includes("mudra") || q.includes("shishu") || q.includes("kishore") || q.includes("tarun")) {
      return `• <strong>Three Borrowing Tiers:</strong> Shishu (up to ₹50,000), Kishore (₹50,000 to ₹5 Lakh), and Tarun / Tarun Plus (₹5 Lakh to ₹20 Lakh).<br>
• <strong>Zero Collateral:</strong> 100% covered under the Credit Guarantee Fund for Micro Units (CGFMU).<br>
• <strong>Where to Apply:</strong> Any Public Sector Bank, Regional Rural Bank, or Microfinance institution in ${state}.`;
    }

    if (q.includes("women") || q.includes("mahila") || q.includes("female") || q.includes("shg")) {
      return `• <strong>Mahila Samriddhi Yojana (MSY):</strong> Provides micro loans up to ₹1.40 Lakh at an ultra-low 4.0% p.a. interest rate for SC women.<br>
• <strong>New Swarnima (NBCFDC):</strong> Provides loans up to ₹2 Lakh at 5.0% p.a. for Backward Class women.<br>
• <strong>Margin Money:</strong> Government funds 95% of project expenditure; beneficiary contributes only 5%.`;
    }

    if (q.includes("education") || q.includes("study") || q.includes("college") || q.includes("abroad")) {
      return `• <strong>100% Course Moratorium:</strong> Zero interest is payable while studying. Full interest is borne by the Government under Central Sector schemes.<br>
• <strong>Loan Limits:</strong> Up to ₹20 Lakh for courses in India, and up to ₹40 Lakh for professional degrees abroad.<br>
• <strong>Repayment:</strong> Commences only 1 year after graduation or 6 months after getting employment, at a nominal 4% rate.`;
    }

    if (q.includes("dpr") || q.includes("project report") || q.includes("quotation")) {
      return `• <strong>Required Elements:</strong> Your DPR must detail plant/machinery quotations, working capital needs, 3-year projected sales, and promoter share.<br>
• <strong>Handholding:</strong> District Industries Centre (DIC) and Lead District Managers offer free DPR preparation assistance for SC/ST and rural entrepreneurs.`;
    }

    // Default targeted short guidance
    return `• <strong>Eligibility for ${category}:</strong> You are eligible for priority central financing under ${schemeName} with government interest subvention.<br>
• <strong>Channel Agency:</strong> In ${state}, you can submit your verified caste certificate and project quotation directly to your District Welfare Office or Lead Bank branch.<br>
• <strong>Next Action:</strong> Select 'View Application Process & Documents' on your scheme card to view the exact document checklist and partner office address.`;
  }
}

if (typeof window !== "undefined") {
  window.GeminiService = new GeminiService();
}
