// call and apply

// a way to specify the execution environment of a function

// func.call(env, arguments)
// func.apply(env, argument list)

function introduce() {
	console.log('Hi everybody! I am ' + this.name + ' and I study ' + this.major + ' at USTC.');
}

introduce.call({name: 'Feinstein', major:'Qhysics'});
introduce.apply({name: 'Geynmann', major:'Qhysics'});
