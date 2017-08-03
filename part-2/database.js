const promise = require('bluebird');
const options = {
    promiseLib: promise
};
const pgp = require('pg-promise')(options);
const CONNECTION_STRING = `pg://${process.env.USER}@localhost:5432/grocery_store`
const db = pgp( CONNECTION_STRING )

const Groceries = (section)=> {
    return db.any(`
      SELECT grocery_items.name AS Product_name, grocery_items.section AS Section
      FROM grocery_items
      WHERE grocery_items.section=$1
    `,[section]).then( items => { return items} )
}

// Groceries.getAllItems('meat').then( (items)=> {console.log(items)})
module.exports = Groceries
