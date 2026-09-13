const vm = require('vm');
const fs = require('fs');

const context = { window: {}, console };
vm.createContext(context);
vm.runInContext(fs.readFileSync('js/schemes-data.js', 'utf8'), context);
vm.runInContext(fs.readFileSync('js/partners-data.js', 'utf8'), context);
vm.runInContext(fs.readFileSync('js/rag-knowledge-base.js', 'utf8'), context);
vm.runInContext(fs.readFileSync('js/matching-engine.js', 'utf8'), context);

const engine = new context.window.SchemeMatchingEngine(context.window.SCHEMES_DATA);

console.log('--- TEST 1: User requests ₹25 Lakh Manufacturing (SC Greenfield) in Maharashtra ---');
const p1 = {
  category: 'SC',
  cost: 2500000,
  sector: 'Manufacturing',
  ventureType: 'greenfield',
  income: 380000,
  gender: 'male',
  state: 'Maharashtra',
  areaType: 'rural'
};
const r1 = engine.evaluateAll(p1);
console.log(`Matches found: ${r1.length}`);
r1.forEach((m, i) => {
  console.log(` ${i+1}. [${m.scheme.id}] ${m.scheme.nameEn}`);
  console.log(`    Max: ₹${m.scheme.maxCost.toLocaleString('en-IN')}, Subsidy: ₹${(m.govtSubsidyAmount||0).toLocaleString('en-IN')}, Rate: ${m.scheme.rate}%`);
});

console.log('\n--- TEST 2: User requests ₹30 Lakh Sanitation / Sewer Jetting Vehicle for Safai Karamchari in Delhi ---');
const p2 = {
  category: 'SafaiKaramchari',
  cost: 3000000,
  sector: 'Services',
  ventureType: 'greenfield',
  income: 300000,
  gender: 'male',
  state: 'Delhi',
  areaType: 'urban'
};
const r2 = engine.evaluateAll(p2);
console.log(`Matches found: ${r2.length}`);
r2.forEach((m, i) => {
  console.log(` ${i+1}. [${m.scheme.id}] ${m.scheme.nameEn}`);
  console.log(`    Max: ₹${m.scheme.maxCost.toLocaleString('en-IN')}, Subsidy: ₹${(m.govtSubsidyAmount||0).toLocaleString('en-IN')}, Rate: ${m.scheme.rate}%`);
});

console.log('\n--- TEST 3: User requests ₹80,000 Handicrafts for OBC in West Bengal ---');
const p3 = {
  category: 'OBC',
  cost: 80000,
  sector: 'Handicrafts',
  ventureType: 'greenfield',
  income: 180000,
  gender: 'female',
  state: 'West Bengal',
  areaType: 'rural'
};
const r3 = engine.evaluateAll(p3);
console.log(`Matches found: ${r3.length}`);
r3.forEach((m, i) => {
  console.log(` ${i+1}. [${m.scheme.id}] ${m.scheme.nameEn}`);
  console.log(`    Max: ₹${m.scheme.maxCost.toLocaleString('en-IN')}, Rate: ${m.scheme.rate}%`);
});
