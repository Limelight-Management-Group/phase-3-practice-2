const express = require( 'express' );
const bodyparser = require( 'body-parser' )
const app = express()
const port = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded
app.use( bodyparser.urlencoded( { extended: false } ) )

app.get( '/api/days/:day', ( request, response ) => {
  let day = request.params.day
  day = day.toString()
  let daysOfWeek = {
    monday:1,
    tuesday:2,
    wednesday:3,
    thursday:4,
    friday:5,
    saturday:6,
    sunday:7,}

  let code
  let result

  if( !daysOfWeek[day] ) {
    result = `'${day}' is not a valid day!`;
    code = 400
  } else {
    daysOfWeek[day]
    code = 200
  }
  response.status(code).json(result)
})

app.post( '/api/array/concat', ( request, response ) => {
  let params = request.body

  if ( !Array.isArray( JSON.parse(params.array1) ) || !Array.isArray( JSON.parse(params.array2) )) {
    let answer = {"error": "Input data should be of type Array."}
    response.status(400).json(answer)
  } else {
    let array1 = JSON.parse(params.array1)
    let array2 = JSON.parse(params.array2)
    let result = array1.concat(array2)
    let answer = {"result": result}
    response.set('Content-Type', 'application/json')
    response.send(answer)
  }
})






app.listen( port , function () {
  console.log(`Example app listening on port ${port}!`)
})
