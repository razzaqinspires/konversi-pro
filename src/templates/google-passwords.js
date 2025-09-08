export default {
  name: "google-passwords",
  map: (entry) => ({
    name: entry.SISTEM || "",
    url: entry.KOORDINAT || "",
    username: entry.ID_AKSES || "",
    password: entry.KUNCI_AUTENTIKASI || "",
  }),
};