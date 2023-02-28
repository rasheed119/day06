class circle{
    constructor(radius,color){
        this.radius = radius;
        this.color = color
    }
    getArea(){
        return 3.14 * this.radius * this.radius;
    }
    getCircumference(){
        return 2 * 3.14 * this.radius;
    }
}
var c = new circle(10,"red");