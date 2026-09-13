# Setu 2.0 — National Civic Scheme Allocation & Concessional Credit Portal

> **Official Prototype for Smart India Hackathon (SIH 2026) — Problem Statement 92**  
> **Nodal Ministry:** Ministry of Social Justice & Empowerment (MoSJE), Government of India.

---

## 🌟 Overview
**Setu 2.0** is an all-device responsive, multilingual civic tech platform designed to eliminate information asymmetry in government financial support. It connects entrepreneurs, artisans, and citizens directly with verified, authentic Central and State Government schemes up to **₹1 Crore (₹1,00,00,000)**.

Unlike broad or generic portals, Setu 2.0 employs:
1. **Multi-Factor Input Matching Engine**: Strictly matches beneficiary category, commercial sector, investment quantum, venture stage (greenfield vs brownfield), and statutory income criteria.
2. **Grounded Statutory RAG & Knowledge Extraction Engine**: Directly retrieves recognized ministry authorities (MoSJE, NSTFDC, NBCFDC, NSKFDC, MSME/KVIC, DFS/SIDBI), official central portals, helpline numbers, and gazette document checklists.
3. **State Channelising Agency (SCA) Directory**: Recommends the exact physical office address, phone number, and official contact for the applicant's state and category across 46+ verified government nodal partners.
4. **All-Device Responsive Design**: Fully responsive across mobile phones (iOS & Android), tablets, and high-resolution desktops.
5. **Multilingual Architecture**: Instant toggling between **English**, **हिन्दी (Hindi)**, and **বাংলা (Bengali)**.

---

## 🗂️ Project Directory Structure

```text
setu-sih-app/
├── index.html               # Main semantic HTML5 application shell & navigation
├── styles.css               # Clean vanilla CSS design system & responsive media queries
├── server.js                # Lightweight Node.js local HTTP static server
├── README.md                # Project documentation and quickstart guide
└── js/
    ├── app.js               # Application coordinator, state management, i18n & sequential step controller
    ├── matching-engine.js   # Deterministic multi-dimensional scheme matching engine
    ├── rag-knowledge-base.js# Grounded statutory RAG knowledge chunks and extraction engine
    ├── schemes-data.js      # Authentic central government schemes database with multi-lang copy
    └── partners-data.js     # 46+ verified State Channel Partner & Nodal Agency directory
```

---

## 🚀 Quick Start (Run Locally)

### Prerequisites
- Any modern web browser (Chrome, Edge, Firefox, Safari).
- [Optional] [Node.js](https://nodejs.org/) (v16+) to run the local server.

### Option 1: Using Node.js
```bash
# 1. Start the local server
node server.js

# 2. Open in your browser
http://localhost:3000
```

### Option 2: Pure Browser (No Dependencies)
Simply double click on `index.html` or open it directly in any desktop or mobile browser.

---

## 📱 Mobile & Responsive Support
Setu 2.0 uses fluid grids and responsive breakpoints:
- **Desktops (> 992px)**: Dual-card grid layouts and interactive timeline navigation.
- **Tablets (768px – 992px)**: Adaptive horizontal scrolling steps and stacked panels.
- **Mobile Phones (< 768px & < 480px)**: Single-column touch-friendly cards, high-contrast touch targets, and bottom-docked validation notifications.

---

## 🏛️ Grounded Recognized Sources
All schemes and institutional parameters in this portal are grounded in published operational guidelines from:
- **Ministry of Social Justice & Empowerment (MoSJE)**
- **National Scheduled Tribes Finance & Development Corporation (NSTFDC)**
- **National Backward Classes Finance & Development Corporation (NBCFDC)**
- **National Safai Karamcharis Finance & Development Corporation (NSKFDC)**
- **Ministry of Micro, Small and Medium Enterprises (MSME / KVIC)**
- **Department of Financial Services (DFS) & Small Industries Development Bank of India (SIDBI)**
