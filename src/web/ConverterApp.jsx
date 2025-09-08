import React, { useState } from "react";
import { parseTextToJSON, convertToCSV } from "../core/parser.js";
import { getTemplate } from "../index.js";

export default function ConverterApp() {
  const [data, setData] = useState([]);
  const [csv, setCsv] = useState("");
  const [template, setTemplate] = useState("bitwarden");

  const handleFile = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const text = await file.text();
    const parsed = parseTextToJSON(text);
    setData(parsed);
    const tpl = getTemplate(template);
    const csvData = convertToCSV(parsed, tpl);
    setCsv(csvData);
  };

  const downloadCSV = () => {
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "output.csv";
    a.click();
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Konversi-Pro Web</h1>
      <input type="file" onChange={handleFile} className="mb-4" />
      <select value={template} onChange={(e) => setTemplate(e.target.value)} className="mb-4 border p-2">
        <option value="default">Default</option>
        <option value="bitwarden">Bitwarden</option>
        <option value="google-passwords">Google Passwords</option>
        <option value="google-contacts">Google Contacts</option>
        <option value="lastpass">LastPass</option>
        <option value="onepassword">1Password</option>
        <option value="keepass">KeePass</option>
      </select>
      {csv && (
        <div>
          <button onClick={downloadCSV} className="px-4 py-2 bg-blue-500 text-white rounded">Download CSV</button>
          <pre className="mt-4 p-2 bg-gray-100 overflow-x-auto text-sm">
            {csv.split("\n").slice(0, 6).join("\n")}
          </pre>
        </div>
      )}
    </div>
  );
}
