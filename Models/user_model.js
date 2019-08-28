var db = require("../dbconnection");

var user = {
  getAllUsers: function(callback) {
    return db.query("Select * from user_tbl", callback);
  },
  getUserById: function(id,callback) {
    return db.query("Select * from user_tbl where user_id=?", [id], callback);
  },
  insertUser: function(userObj, callback) {    
    return db.query(
      "Insert into user_tbl values(?,?,?,?,?,?,?,?)",
      [userObj.user_id,userObj.user_name,userObj.user_email,userObj.user_password,userObj.user_phone
        ,userObj.user_gender,userObj.user_hobbies,userObj.user_city],
      callback
    );
  }
};
module.exports = user;
