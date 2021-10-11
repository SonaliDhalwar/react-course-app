const path = require('path');
console.log();


console.log(__dirname);

module.exports = {
 entry: './src/playground/React-Course_app.js',
 output: {
     path: path.join(__dirname,'public'),
     filename: 'bundle.js'
 }
};
