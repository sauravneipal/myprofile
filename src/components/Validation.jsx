

const validation = (name,email,message)=>{
    let errors = {};
    let e = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
    if(!name) {
      errors.name = "name required";
    }else if(name.length < 3){
      errors.name = "Name must be more than 3 characters"
    }else{
      errors.name="";
    }
  
    if(!email) {
      errors.email = "email required";
    }else if(email.match(e)){
      errors.email="";
  }else{errors.email = "Invalid email"}
  
  if(!message) {
    errors.message = "message must have at least 1 character"
  }else{
    errors.message="";
  }
    return errors;
  }
  export default validation;