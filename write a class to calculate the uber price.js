class uber{
    constructor(name,from,to,time,distance){
        this.name = name;
        this.from = from;
        this.to = to;
        this.distance = distance; 
        this.time = time;
    }
    price(){
        return this.distance*18;
    }
}
var u1 = new uber("M.Abdur Rasheed","Home","Bus stand","6:45",10);
console.log(u1.price());