export default {
  name: "keepass",
  mapFields: entry => ({
    Group: "General",
    Title: entry.name || "",
    Username: entry.username || "",
    Password: entry.password || "",
    URL: entry.url || "",
    Notes: ""
  })
};
