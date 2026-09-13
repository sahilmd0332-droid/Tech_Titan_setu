async function fetchSchemes() {
  try {
    const res = await fetch('https://nsfdc.nic.in/scheme');
    const html = await res.text();
    const textOnly = html.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
                         .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
                         .replace(/<[^>]+>/g, ' ')
                         .replace(/\s+/g, ' ');
    console.log('Schemes page text:', textOnly.slice(0, 3000));
  } catch (e) {
    console.error(e);
  }
}
fetchSchemes();
