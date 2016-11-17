var connection = require('./connection');

function db_function() {
  this.get = function(res) {
   connection.acquire(function(err, con) {
     con.query('select * from user', function(err, result) {
       con.release();
       res.send(result);
     });
   });
 };

 this.getByName = function (name,res) {
   connection.acquire(function (err,con) {
     con.query('select * from user where username = ?', [name],function (err,result) {
       con.release();
       if (err){
         res.send({status: 1, message: 'get user failed'});
       }
       if (result.length == 0){
         res.send({status: 1, message: "user does not exist"});
       }else{
         res.send(result)
       }
     });
   });
 };

 this.add = function(user, res) {
    connection.acquire(function(err, con) {
      con.query('insert into user set ?', [user], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'TODO creation failed'});
        } else {
          res.send({status: 0, message: 'TODO created successfully'});
        }
      });
    });
  };

  this.update = function(user, res) {
    connection.acquire(function(err, con) {
      con.query('update user set ? where username = ?', [user, user.username], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'TODO update failed'});
        } else {
          res.send({status: 0, message: 'TODO updated successfully'});
        }
      });
    });
  };

  this.delete = function(name, res) {
    connection.acquire(function(err, con) {
      con.query('delete from user where username = ?', [name], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'Failed to delete'});
        } else {
          res.send({status: 0, message: 'Deleted successfully'});
        }
      });
    });
  };
}
module.exports = new db_function();
