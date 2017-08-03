let Groceries = require('./database.js')
let func = process.argv[2]
let section = process.argv[3]

let operate;
    switch (func) {
        case "product-list":
            operate = function( section ) {
                      Groceries(section, console.log)
            }
            break;
        case "shopper-orders":
            // operate = function( section ) {
            //   Groceries.getAllItems(section).then( (items)=> { console.log(items) } )
            // }

            break;
        case "real-shoppers":
            // operate = function( section ) {
            //   Groceries.getAllItems(section).then( (items)=> { console.log(items) } )
            // }

            break;
        default:
            "Looking forward to the Weekend";
   }

operate(section)
