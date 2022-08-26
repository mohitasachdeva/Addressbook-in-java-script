class Contact{
    constructor(...params){
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.email = params[7];        
    }

    get firstName(){ return this._firstName}
    set firstName(firstName){
    let regex  = RegExp('^[A-Z]{1}[a-z]{2,}$'); 
    if(regex.test(firstName))
        this._firstName = firstName; 
    else 
        throw "FirstName is incorrect";     
    
}
      

    get lastName(){ return this._lastName}
    set lastName(lastName){
        let regex = RegExp('^[A-Z]{1}[a-z]{2,}$'); 
        if(regex.test(lastName))
            this._lastName = lastName; 
        else 
            throw "lastname is incorrect";     
        } 

    get address(){ return this._address}
    set address(address){
        let regex = RegExp('^[A-Za-z0-9]{4,}$') 
        if(regex.test(address))
            this._address = address    
        else throw 'Address is incorrect'
        } 

    get city(){ return this._city}
    set city(city){
        let regex = RegExp('^[A-Za-z]{4,}$') 
        if(regex.test(city))
            this._city = city    
        else throw 'City is incorrect'
    } 

    get state(){ return this._state}
    set state(state){
        let regex = RegExp('^[A-Za-z]{4,}$') 
        if(regex.test(state))
            this._state = state    
        else throw 'State is incorrect'
    }

    get zip(){ return this._zip}
    set zip(zip){
        let regex = RegExp('^[0-9]{6}$') 
        if(regex.test(zip))
            this._zip = zip    
        else throw 'Zip is incorrect'
        } 

    get phoneNumber(){ return this._phoneNumber}
    set phoneNumber(phoneNumber){        
        let regex = RegExp('^[9][1]\s[6-9][0-9]{9}$') 
        if(regex.test(phoneNumber))
            this._phoneNumber = phoneNumber    
        else throw 'Phone Number is incorrect'
        } 
    get email(){ return this._email}
    set email(email){
        let regex = RegExp('^\\w+([.-]?\\w+)*@\\w+([.-]?\\w+)*(\\.\\w{2,3})+$') 
        if(regex.test(email))
            this._email = email  
        else throw 'Email is incorrect'
       } 
    toString(){
        return "FirstName = "+this.firstName+", LastName = "+this.lastName+
        "Address = "+this.address+", City = "+this.city+
        "State = "+this.state+", Zip = "+this.zip+
        "PhoneNumber = "+this.phoneNumber+", Email = "+this.email
    }
}
   // let data = new Contact("mohita" , "khurana", 85/2 ,"panipat" ,"haryana", 25846, "@mohi");
    //console.log(data)
    let contact = new Contact(); 
try{    
    contact.firstName = "Mohita";
    contact.lastName = 'Khurana'
    console.log(contact.toString());
}
catch(e){
    console.error(e)
}


 
