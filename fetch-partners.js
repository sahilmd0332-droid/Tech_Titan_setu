async function fetchChannelPartners() {
  try {
    const res = await fetch('https://nsfdc.nic.in/our-channel-partners');
    const html = await res.text();
    console.log('Channel partners page length:', html.length);
    // Find text inside table or list
    const textOnly = html.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
                         .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
                         .replace(/<[^>]+>/g, ' ')
                         .replace(/\s+/g, ' ');
    console.log('Sample text:', textOnly.slice(0, 2000));
  } catch (e) {
    console.error(e);
  }
}
fetchChannelPartners();
