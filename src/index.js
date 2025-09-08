import defaultTemplate from "./templates/default.js";
import bitwarden from "./templates/bitwarden.js";
import googlePasswords from "./templates/google-passwords.js";
import googleContacts from "./templates/google-contacts.js";
import lastpass from "./templates/lastpass.js";
import onepassword from "./templates/onepassword.js";
import keepass from "./templates/keepass.js";

const templates = {
  default: defaultTemplate,
  bitwarden,
  "google-passwords": googlePasswords,
  "google-contacts": googleContacts,
  lastpass,
  onepassword,
  keepass
};

export function getTemplate(name) {
  return templates[name] || templates.default;
}

export { parseTextToJSON, convertToCSV } from "./core/parser.js";
export { default as ConverterApp } from "./web/ConverterApp.jsx";
