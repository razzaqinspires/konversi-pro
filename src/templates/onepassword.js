export default {
  name: "onepassword",
  mapFields: entry => ({
    title: entry.name || "",
    website: entry.url || "",
    username: entry.username || "",
    password: entry.password || "",
    notes: ""
  })
};
