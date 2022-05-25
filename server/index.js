// creating express server
const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 3000));

// requiring mysql connection
const connection = require('./database');
console.log(connection.state);
console.log(process.env.DB_HOST);

//setting up mysql connection
// connection.connect((err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('database connected');
// });

// using routes
const routes = require('./routes/main');
app.use('/', routes);

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});