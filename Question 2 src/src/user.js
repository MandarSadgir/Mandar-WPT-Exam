const mysql = reqiure("mysql");
const promise = reqiure("bluebird");
promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo={
host:"localhost",
user:"root",
password="cdac",
database="javascript",
};

const selectAllMsg = async () => {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();

  let sql = `select * from message`;
  const list = await connection.queryAsync(sql);

  await connection.endAsync();
  return list;
};

const addmsg = async (whatmsg) => {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();

  let sql="insert into message(msg) value(?)";
  connection.queryAsync(sql,[whatmsg.msg]);
  console.log("message Added Successfully");
  await connection.endAsync();
};

module.exports={selectAllMsg,addmsg};
