const mysql = require('mysql')
const dbConfig = require('./connConfig')

const conn = {  // mysql 접속 설정, 포트 포워딩을 통해 9811을 통해 4567로 연결
    host: dbConfig.host,
    port: dbConfig.port,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database
}

function showBooks() {
    connection.query("select * from Book where bookid > 10", (error, results, fields) => {
        if (error) throw error;
    
        console.log("result : ", results)
    });
}

let connection = mysql.createConnection(conn)
connection.connect()

showBooks()

connection.query("insert into Book(bookid, bookname, publisher, price) VALUES (20, 'database system', 'No Lab', 9000000)", (error, results) => {
    if (error) throw error;

    console.log("record inserted")
});

showBooks();

connection.query("delete from Book where bookid = '20'", (error, results) => {
    if (error) throw error;

    console.log("record deleted")
});

showBooks();

connection.end()