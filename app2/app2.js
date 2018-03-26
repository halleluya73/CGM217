var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'Mtgame'
})
connection.connect(function (err) {
    if (err) {
        console.log('Error Connecting', err.stack);
        return;
    }
    console.log('Connected as id', connection.threadId)
})
connection.query('SELECT * FROM user', function(err,rows,fields){
    if(err) throw err

    for(var i in rows){
        console.log('user : ',rows[i].name)
    }
})
connection.end(function (err) {
    console.log('Terminated Connection')
})

console.log('App2 : test mysql running')