export default {
  name: "lastpass",
  mapFields: entry => ({
    url: entry.url || "",
    username: entry.username || "",
    password: entry.password || "",
    extra: "",
    name: entry.name || "",
    grouping: "",
    fav: 0
  })
};
