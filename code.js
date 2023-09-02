/**Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.

*/
// make you of the typeof method to check datatype
//create a function
//here we make use of (typeof method to check data types and returns true if boolean else false....
function booWho(bool) {
  return typeof bool === "boolean" ? true : false; // checks data type to see if it is boolean and returns true or false....
}

booWho(null);
