/**
 * Setu 2.0 - High-Precision Statutory Scheme Eligibility Engine
 * SIH 2026 Problem Statement 92 (Ministry of Social Justice & Empowerment)
 * 
 * High-Precision Multi-Factor Matcher:
 * 1. Statutory Category Alignment (SC, ST, OBC, General, EWS, Safai Karamchari)
 * 2. Industry Sector Alignment (Manufacturing, Services, Trading, Agri-Allied, Clean Energy, Handicrafts, Tech)
 * 3. Strict Project Cost & Quantum Band Matching (No micro loans for large plants, no large debt for tiny kiosks)
 * 4. Venture Type Integrity (Greenfield first-time setup vs Brownfield modernization/expansion)
 * 5. Statutory Family Income Ceilings
 * 6. Gender & Special Affirmative Action Quotas
 */

class SchemeMatchingEngine {
  constructor(schemes) {
    this.schemes = schemes || [];
  }

  /**
   * Evaluates all schemes against a user profile and returns strictly relevant available schemes
   * @param {Object} profile - User input attributes
   * @returns {Array} Array of evaluated schemes marked as isAvailable and ranked by relevance
   */
  evaluateAll(profile) {
    const evaluated = this.schemes.map(scheme => this.evaluateScheme(scheme, profile));
    
    // Filter strictly available schemes
    const available = evaluated.filter(item => item.isAvailable);

    // Rank available schemes:
    // 1. Schemes with non-refundable capital grants (PMEGP 35%, PMFME 35%, KUSUM 60%, SUY 50%)
    // 2. Schemes with ultra-concessional interest rates (4% to 6%)
    // 3. Closest cost alignment to user's requested quantum
    return available.sort((a, b) => {
      // Prioritize capital subsidies
      const aSubsidy = a.govtSubsidyAmount || 0;
      const bSubsidy = b.govtSubsidyAmount || 0;
      if (aSubsidy > 0 && bSubsidy === 0) return -1;
      if (bSubsidy > 0 && aSubsidy === 0) return 1;

      // Prioritize lower concessional interest rate
      if (a.scheme.rate !== b.scheme.rate) {
        return a.scheme.rate - b.scheme.rate;
      }

      // Prioritize best cost alignment
      const cost = profile.cost || 2500000;
      const aDiff = Math.abs(a.scheme.maxCost - cost);
      const bDiff = Math.abs(b.scheme.maxCost - cost);
      return aDiff - bDiff;
    });
  }

  /**
   * Evaluates a single scheme against user profile with strict multi-factor criteria
   */
  evaluateScheme(scheme, profile) {
    // Project cost capped at ₹1,00,00,000 (₹1 Crore)
    const rawCost = parseFloat(profile.cost) || 0;
    const cost = Math.min(10000000, rawCost); 
    const income = parseFloat(profile.income) || 0;
    const userCategory = (profile.category || "SC");
    const userGender = (profile.gender || "male").toLowerCase();
    const userSector = (profile.sector || "Manufacturing");
    const userVenture = (profile.ventureType || "greenfield");
    const isPwD = !!profile.isPwD;

    const reasons = [];
    const deficiencies = [];
    let isEligible = true;

    // ========================================================================
    // 1. STATUTORY CATEGORY CHECK
    // ========================================================================
    const allowed = scheme.allowedCategories || [];
    let categoryMatch = allowed.includes(userCategory);

    // Stand-Up India Statutory Rule: Mandated for SC, ST, OR women of ANY category (General, OBC, EWS women)
    if (scheme.id === "standup" && userGender === "female") {
      categoryMatch = true;
    }

    if (!categoryMatch) {
      isEligible = false;
      deficiencies.push(`Reserved for ${allowed.join(", ")} category (applicant: ${userCategory}).`);
    } else {
      reasons.push(`Statutory eligibility for ${userCategory} category under Ministry guidelines.`);
    }

    // ========================================================================
    // 2. SECTOR ALIGNMENT (CRITICAL: Only show schemes that genuinely finance this industry)
    // ========================================================================
    const schemeSectors = scheme.sectors || [];
    const sectorMatch = schemeSectors.includes(userSector);

    if (!sectorMatch) {
      isEligible = false;
      deficiencies.push(`Scheme does not finance ${userSector} (covers: ${schemeSectors.join(", ")}).`);
    } else {
      reasons.push(`Directly covers your ${userSector} enterprise requirements.`);
    }

    // ========================================================================
    // 3. PROJECT COST & QUANTUM BAND MATCHING (CRITICAL: Eliminate mismatched loan sizes)
    // ========================================================================
    // Rule A: The scheme must be able to fund at least 25% of the user's project cost
    if (scheme.maxCost < cost * 0.25) {
      isEligible = false;
      deficiencies.push(`Scheme ceiling of ₹${scheme.maxCost.toLocaleString('en-IN')} is insufficient for your ₹${cost.toLocaleString('en-IN')} project.`);
    }
    // Rule B: The user's project cost should not exceed 160% of the scheme's max limit
    else if (cost > scheme.maxCost * 1.6) {
      isEligible = false;
      deficiencies.push(`Project cost of ₹${cost.toLocaleString('en-IN')} exceeds maximum limit of ₹${scheme.maxCost.toLocaleString('en-IN')}.`);
    }
    // Rule C: The user's project cost must meet at least 50% of the scheme's minimum threshold
    else if (cost < scheme.minCost * 0.5) {
      isEligible = false;
      deficiencies.push(`Project cost is below the scheme's minimum investment floor of ₹${scheme.minCost.toLocaleString('en-IN')}.`);
    } else {
      const financedCap = Math.min(cost, scheme.maxCost);
      reasons.push(`Eligible for funding quantum up to ₹${financedCap.toLocaleString('en-IN')}.`);
    }

    // ========================================================================
    // 4. VENTURE TYPE INTEGRITY (Greenfield vs Brownfield)
    // ========================================================================
    if (scheme.ventureType && !scheme.ventureType.includes(userVenture)) {
      isEligible = false;
      deficiencies.push(`Requires a ${scheme.ventureType.join(" or ")} enterprise.`);
    } else if (scheme.ventureType) {
      reasons.push(`Complies with ${userVenture === 'greenfield' ? 'new setup (Greenfield)' : 'expansion (Brownfield)'} mandate.`);
    }

    // ========================================================================
    // 5. STATUTORY FAMILY INCOME CEILING
    // ========================================================================
    if (scheme.incomeCeiling && income > scheme.incomeCeiling) {
      isEligible = false;
      deficiencies.push(`Annual family income (₹${income.toLocaleString('en-IN')}) exceeds statutory ceiling of ₹${scheme.incomeCeiling.toLocaleString('en-IN')}.`);
    } else if (scheme.incomeCeiling) {
      reasons.push(`Annual family income complies with statutory ceiling of ₹${scheme.incomeCeiling.toLocaleString('en-IN')}.`);
    } else if (scheme.noIncomeCeiling) {
      reasons.push("No family income ceiling applies to this central scheme.");
    }

    // ========================================================================
    // 6. GENDER PRIORITY / GATE
    // ========================================================================
    if (scheme.allowedGenders && !scheme.allowedGenders.includes(userGender)) {
      isEligible = false;
      deficiencies.push(`Reserved exclusively for ${scheme.allowedGenders.join(", ")} entrepreneurs.`);
    } else if (userGender === "female" && (scheme.id === "msy" || scheme.id === "nbcfdc-swarnima" || scheme.id === "tread" || scheme.id === "may" || scheme.id === "nstfdc-amsy" || scheme.id === "nskfdc-msy" || scheme.id === "day-nrlm")) {
      reasons.push("Concessional interest subvention applicable for women entrepreneurs.");
    }

    // ========================================================================
    // FINANCIAL CALCULATIONS: LOAN & GOVERNMENT SUBSIDY
    // ========================================================================
    let calculatedLoan = 0;
    let govtSubsidyAmount = 0;

    if (scheme.id.startsWith("pmegp")) {
      const isRural = (profile.areaType === "rural");
      let subsidyPct = 0.25;
      if (isRural) {
        subsidyPct = (userCategory === "General" && userGender === "male") ? 0.25 : 0.35;
      } else {
        subsidyPct = (userCategory === "General" && userGender === "male") ? 0.15 : 0.25;
      }
      const effectiveCost = Math.min(cost, scheme.maxCost);
      govtSubsidyAmount = Math.round(effectiveCost * subsidyPct);
      calculatedLoan = Math.round(effectiveCost - govtSubsidyAmount);
    } else if (scheme.id === "pmfme") {
      const effectiveCost = Math.min(cost, scheme.maxCost);
      govtSubsidyAmount = Math.min(1000000, Math.round(effectiveCost * 0.35));
      calculatedLoan = Math.round(effectiveCost - govtSubsidyAmount);
    } else if (scheme.id === "pm-kusum") {
      const effectiveCost = Math.min(cost, scheme.maxCost);
      govtSubsidyAmount = Math.round(effectiveCost * 0.60); // 60% Govt Subsidy
      calculatedLoan = Math.round(effectiveCost * 0.30); // 30% Bank Loan
    } else if (scheme.id === "namaste-scheme") {
      const effectiveCost = Math.min(cost, scheme.maxCost);
      govtSubsidyAmount = Math.min(500000, Math.round(effectiveCost * 0.50)); // 50% Capital subsidy up to ₹5L
      calculatedLoan = Math.round(effectiveCost - govtSubsidyAmount);
    } else if (scheme.id === "pmmsy") {
      const effectiveCost = Math.min(cost, scheme.maxCost);
      const isSpecial = (userCategory === "SC" || userCategory === "ST" || userGender === "female" || userCategory === "SafaiKaramchari");
      govtSubsidyAmount = Math.round(effectiveCost * (isSpecial ? 0.60 : 0.40));
      calculatedLoan = Math.round(effectiveCost - govtSubsidyAmount);
    } else if (scheme.id === "tread") {
      const effectiveCost = Math.min(cost, scheme.maxCost);
      govtSubsidyAmount = Math.round(effectiveCost * 0.30);
      calculatedLoan = Math.round(effectiveCost - govtSubsidyAmount);
    } else if (scheme.id === "nssh-subsidy") {
      const effectiveCost = Math.min(cost, scheme.maxCost);
      govtSubsidyAmount = Math.round(effectiveCost * 0.25);
      calculatedLoan = Math.round(effectiveCost - govtSubsidyAmount);
    } else if (scheme.isEquity || scheme.rate === 0) {
      calculatedLoan = Math.min(cost, scheme.maxCost);
    } else {
      calculatedLoan = Math.min(cost * (scheme.coverPct || 0.90), (scheme.maxCost || cost));
    }

    // Monthly EMI Calculation
    const rate = scheme.rate || 0;
    const tenureYears = scheme.tenureYears || 5;
    const moratorium = scheme.moratoriumMonths || 0;
    const months = Math.max(1, (tenureYears * 12) - moratorium);
    let emi = 0;

    if (rate === 0 || scheme.isEquity) {
      emi = 0;
    } else {
      const r = (rate / 12) / 100;
      const factor = Math.pow(1 + r, months);
      emi = (r > 0 && factor > 1) 
        ? Math.round((calculatedLoan * r * factor) / (factor - 1)) 
        : Math.round(calculatedLoan / months);
    }

    return {
      scheme,
      isAvailable: isEligible,
      reasons,
      deficiencies,
      calculatedLoan,
      govtSubsidyAmount,
      indicativeEmi: emi
    };
  }
}

if (typeof window !== "undefined") {
  window.SchemeMatchingEngine = SchemeMatchingEngine;
}
