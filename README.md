# ⚡ Konversi Pro

![npm](https://img.shields.io/npm/v/konversi-pro?color=blue)
![license](https://img.shields.io/npm/l/konversi-pro)
![build](https://img.shields.io/github/actions/workflow/status/razzaqinspires/konversi-pro/release.yml?branch=main)

**Konversi Pro** adalah toolkit open-source untuk konversi data berbasis teks menjadi format siap pakai (CSV, JSON, dll) dengan dukungan template seperti **Google Password Manager**, **LastPass**, dsb.  
Dilengkapi CLI (terminal) dan Web UI (React + drag & drop).

---

## 🚀 Fitur Utama
- 🔄 **CLI cepat & ringan** (pakai Node.js)
- 🖥️ **Web UI React** dengan drag & drop + preview
- 📦 **Template siap pakai** (Google Passwords, LastPass, Custom JSON, dll)
- 🛠️ Mudah dikembangkan & dikustomisasi
- ⚡ Didukung **ESM (ECMAScript Module)** modern

---

## 📦 Instalasi

### Global
```bash
npm install -g konversi-pro
```

### Local (per project)
```bash
npm install konversi-pro
```

---

## 🖥️ Penggunaan CLI

Format umum:
```bash
npx konversi-pro <input.txt> <output.csv> --template=<nama-template>
```

Contoh:
```bash
npx konversi-pro data.txt hasil.csv --template=google-passwords
```

👉 Template yang tersedia:
- `google-passwords`
- `lastpass`
- `json`
- `custom`

---

## 🌐 Web UI

Jalankan development server:
```bash
npm run dev
```

Buka di browser: [http://localhost:5173](http://localhost:5173)  

Fitur:
- Drag & drop file `.txt`
- Preview hasil parsing
- Download hasil CSV

---

## 📂 Struktur Project

```
konversi-pro/
├── bin/cli.js           # CLI entrypoint
├── src/
│   ├── core/            # Parser & engine
│   ├── templates/       # Template (Google, LastPass, JSON, dll)
│   └── web/             # React Web UI
├── package.json
├── README.md
└── CHANGELOG.md
```

---

## 🤝 Kontribusi

1. Fork repo ini
2. Buat branch fitur baru:  
   ```bash
   git checkout -b fitur/awesome
   ```
3. Commit dengan format **Conventional Commit**:  
   ```bash
   git commit -m "feat: tambah template lastpass"
   ```
4. Push & buat Pull Request

> Pastikan commit linting lolos:
```bash
npm run lint
```

---

## 📜 Release

Release otomatis via GitHub Actions:  
- Changelog (`CHANGELOG.md`) diperbarui otomatis
- Tag & versi baru dibuat saat merge ke `main`

Manual bump versi:
```bash
npm version patch
npm publish
git push --follow-tags
```

---

## 📄 Lisensi

MIT © [Arifi Razzaq](https://github.com/razzaqinspires)
