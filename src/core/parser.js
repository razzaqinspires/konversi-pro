export function parseTextToJSON(text) {
  const blocks = text.split("[+]").filter(b => b.includes("SISTEM"));
  const entries = [];

  const regex = /\*\*SISTEM\*\*\s*:\s*(.+)|\*\*KOORDINAT\*\*\s*:\s*(.+)|\*\*ID_AKSES\*\*\s*:\s*(.+)|\*\*KUNCI_AUTENTIKASI\*\*\s*:\s*(.+)|\*\*LOG_INFO\*\*\s*:\s*(.+)/g;

  for (let block of blocks) {
    let entry = {};
    let match;
    while ((match = regex.exec(block)) !== null) {
      if (match[1]) entry.SISTEM = match[1].trim();
      if (match[2]) entry.KOORDINAT = match[2].trim();
      if (match[3]) entry.ID_AKSES = match[3].trim();
      if (match[4]) entry.KUNCI_AUTENTIKASI = match[4].trim();
      if (match[5]) entry.LOG_INFO = match[5].trim();
    }
    if (Object.keys(entry).length > 0) entries.push(entry);
  }

  return entries;
}