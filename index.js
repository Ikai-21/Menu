const UssdMenu = require('ussd-menu-builder');
let menu = new UssdMenu();
 

menu.startState( 'registration'{
    run: () => {
            
        menu.con('Welcome. Please provide:' +
            '\n1. First Name' +
			'\n2. Second Name' +
            '\n2. Age');
    },
   
    next: {
        '1': 'First Name',
        '2': 'Second Name',
		'3': 'Age'
    }
	defaultNext: 'InvalidOption'
});
 
menu.state('First Name', {
    run: () => {
        menu.con('Enter your First Name');
    },
    next: {
        '*[a-zA-Z]+': 'First Name'
    }
});
 
 
menu.state('Second Name', {
	run: () => {
		menu.con('Enter your Second Name')
	},
	next: {
		 '*[a-zA-Z]+': 'Second Name'
	}
});

menu.state('Age', {
    run: () => {
        menu.con('Enter your age:');
    },
    next: {
        '*\\d+': 'Age'
    }
});
 
menu.state('Age.retire', {
    run: () => {
        
        var age = Number(menu.val);
		
    next: {
            if(Age => 65){
                return 'Please retire';
            } else {
                return 'Continue working';
            }
        }
    }
            menu.end('Registration successful');
        });
    });
 
 

app.post('/ussd', (req, res) => {
    let args = {
        First Name: req.body.First Name,
        Second Name: req.body.Second Name,
        Age: req.body.Age,
      
    };
    menu.run(args, resMsg => {
        res.send(resMsg);
    });
})