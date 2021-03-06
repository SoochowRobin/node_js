// evaluate the perimeter and area of rectangle

// import module
var rect = require('./rectangle');

function solveRect(l, b){
	console.log("solving for rectangle with l = " + l + " and b = " + b);
	
	rect(l, b, (err, rectangle) => {
		if (err){
			console.log("ERROR: ", err.message);
		}else{
			console.log("The area of the rectangle of dimensions l = " 
			+ l +" and b = " + b + " is " + rectangle.area());

			//  perimeter
			console.log("The perimeter of the rectangle of dimensions l = " 
			+ l +" and b = " + b + " is " + rectangle.perimeter());
		}
	});
	console.log(" This statement is after the call to rect()");
};


solveRect(2, 4);
solveRect(-1, 4);
solveRect(9, 8);