export default {
  name: "bitwarden",
  mapFields: entry => ({
    folder: "",
    favorite: 0,
    type: "login",
    name: entry.name || "",
    notes: "",
    fields: "",
    reprompt: 0,
    login_uri: entry.url || "",
    login_username: entry.username || "",
    login_password: entry.password || "",
    login_totp: ""
  })
};
