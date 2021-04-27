class RecipeError extends Error{}

class InvalidBody extends RecipeError{
  constructor(fields){
    super()
    this.fields = fields
    this.message = `Invalid body, required field ${this.fields.join(",")}`
    this.errorCode = 400
  }
}
class InvalidCredentials extends RecipeError{
  constructor(){
    super()
    this.message = `Invalid credentials`
    this.errorCode = 403
  }
}
class Unauthorized extends RecipeError{
  constructor(){
    super()
    this.message = `Unauthorized`
    this.errorCode = 401
  }
}
class TokenExpired extends RecipeError{
  constructor(){
    super()
    this.message = `Token expired, please log in again`
    this.errorCode = 401
  }
}


module.exports = {
  RecipeError,
  InvalidBody,
  InvalidCredentials,
  Unauthorized,
  TokenExpired

}