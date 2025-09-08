export default {
  name: "google-passwords",
  mapFields: entry => ({
    name: entry.name || "",
    url: entry.url || "",
    username: entry.username || "",
    password: entry.password || ""
  })
};
