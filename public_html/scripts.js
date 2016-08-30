// var name = "Si'mon Gato";
// var age = 2
//
// console.log('here is the console log');
//
// alert('Holy smokes!!');
//
// document.write( "Hello "+ name +", it's a wonderful day today.");
//
// document.write( "Nice job, "+ name +", you have no more tasks for today.");
//
// document.write( "Username: "+ name + "");
//
// document.write( name + " is " + age + " years old right now.");

//
// var username = 'simongato';
// //
// // console.log( '@' + username);
// //
// // document.write( '@' + username);
//
// function make_twitter_username(name) {
// 	return "@" + name;
// }
//
// console.log( make_twitter_username(username));

// var string = "Si'mon";
// var number = "14";

// var calories = [23, 5, 8, "Si'mon Gatito Guito", 87, [99, 9, 199], "Bob" ];

// var calories = [123, 145, 154,167 ];

// calories.push ( 100 );
// calories.push( 220 );
// console.log (calories.length );

//
//
// var calories = [23, 5, 8, "Si'mon Gatito Guito", 87, [99, 9, 199], "Bob" ];
// document.write( "<ul>" );
// calories.map( function (value){
// 	document.write( "<li>" + value + "</li>");
// });
//
// document.write( "</ul>" );


var myObject = {
	name:	"Si'mon",
	fluzziness: "10/10",
	isMale: true,
	greeting: function() {
		alert( "Hello " +this.name );
	}
}

console.log(myObject.name);
myObject.greeting();