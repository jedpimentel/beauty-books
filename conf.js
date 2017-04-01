exports.port = 3000;
exports.defaultFailResponse = { error: "An unexpected error occurred", status: -2 };
exports.DB_OPTIONS = {
  host: ""
  database: "",
  user: "",
  password: "",
  dateStrings: true
};
exports.FB_APP = {
  clientID: "",
  clientSecret: "",
  //callbackURL: 'https://beautybooks.biz/login/facebook/return'
  callbackURL: 'http://beautybooks.biz:3000/login/facebook/return'
};
exports.GOOG_APP = {
  clientID: "",
  clientSecret: "",
  //callbackURL: 'https://beautybooks.biz/login/google/return'
  callbackURL: 'http://beautybooks.biz:3000/login/google/return'
}
