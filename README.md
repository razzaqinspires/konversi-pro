# 🔐 Konversi-Pro

Utility untuk mengubah file TXT (list akun) menjadi CSV siap impor ke:
- Bitwarden
- Google Passwords
- LastPass
- KeePass
- 1Password
- Google Contacts

## 🚀 Install
```bash
npm install -g konversi-pro
```

## 💻 CLI Usage
```bash
konversi-pro input.txt output.csv --template=bitwarden
```

## 🌐 Web UI (React)
```jsx
import { ConverterApp } from "konversi-pro";
export default function App(){ return <ConverterApp /> }
```
