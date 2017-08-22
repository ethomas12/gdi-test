var myObject = {
	name:	"Mr. Fluffy",
	fluzziness: "10/10",
	isMale: true,
	greeting: function() {
		alert( "Hello " +this.name );
	}
}

console.log(myObject.name);
myObject.greeting();