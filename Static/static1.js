class Circle{
    static PI = 3.1416;

    static getDiameter(radius){
        return (radius * 2).toFixed(2);
    }

    static getCircumference(radius){
        return (2 * this.PI * radius).toFixed(2);
    }

    static getArea(radius){
        return (this.PI * Math.pow(radius, 2)).toFixed(2);
    }
}

console.log(Circle.PI);
console.log(Circle.getDiameter(10));
console.log(Circle.getCircumference(10));
console.log(Circle.getArea(10));