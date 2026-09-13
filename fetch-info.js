async function inspect() {
  try {
    const res = await fetch('https://nsfdc.nic.in');
    const html = await res.text();
    const matches = html.match(/href="([^"]*)"/g) || [];
    const filtered = matches
      .map(m => m.replace(/href="|"/g, ''))
      .filter(l => l.includes('scheme') || l.includes('term-loan') || l.includes('mcf') || l.includes('channel') || l.includes('guidelines') || l.includes('contact'));
    console.log('NSFDC Relevant links:', Array.from(new Set(filtered)));
  } catch (err) {
    console.error(err);
  }
}
inspect();
