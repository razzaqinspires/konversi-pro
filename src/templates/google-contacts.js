export default {
  name: "google-contacts",
  mapFields: entry => ({
    name: entry.name || "",
    notes: `URL: ${entry.url || ""}, USER: ${entry.username || ""}, PASS: ${entry.password || ""}`
  })
};
