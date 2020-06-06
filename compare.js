// JavaScript Document

function item1 (pro,img,p,t,c,h,pin,eer,col,type,smode,tmode)
{
	document.getElementById('p_1').innerHTML = pro;
	document.getElementById('image-one').style.backgroundImage = img;
	document.getElementById('price_1').innerHTML = p;
	document.getElementById('ton_1').innerHTML = t;
	document.getElementById('cooling_1').innerHTML = c;
	document.getElementById('heating_1').innerHTML = h;
	
	
}
function item2 (pro,img,p,t,c,h,pin,eer,col,type,smode,tmode)
{
	document.getElementById('p_2').innerHTML = pro;
	document.getElementById('image-two').style.backgroundImage = img
	document.getElementById('price_2').innerHTML = p
	document.getElementById('ton_2').innerHTML = t
	document.getElementById('cooling_2').innerHTML = c
	document.getElementById('heating_2').innerHTML = h
	
	
}

var AC = [
	//Cars & Jeep Start here................................................................
	{
	Name: 'Race Car',
	img:"url(image/Car/car1.png)",
	price : '$57.00/-',
	ton : 'out of stock',
	c_capacity : 'Light',
	h_capacity : 'HotWheels',
	},
	{
	Name: 'Designed Car',
	img:"url(image/Car/car2.png)",
	price : '$84.00/-',
	ton : '6',
	c_capacity : 'Light',
	h_capacity : 'Mattel',
	},
	{
	Name: 'Hot Car',
	img:"url(image/Car/car3.png)",
	price : '$87.00/-',
	ton : '12',
	c_capacity : 'Light',
	h_capacity : 'teddy Herman',
	},
	{
	Name: 'Lamborgni Car',
	img:"url(image/Car/car4.png)",
	price : '$89.00/-',
	ton : '1',
	c_capacity : 'Light',
	h_capacity : 'HotWheels',
	},
	{
	Name: 'Classic Car',
	img:"url(image/Car/car5.png)",
	price : '$85.00/-',
	ton : '3',
	c_capacity : 'light ',
	h_capacity : 'Mattel',
	},
	{
	Name: 'Blue Car',
	img:"url(image/Car/car6.png)",
	price : '$95.00/-',
	ton : '9',
	c_capacity : 'Light',
	h_capacity : 'teddy Herman',
	},
	{
	Name: 'Stylish Jeep',
	img:"url(image/Car/jeep.jpeg)",
	price : '$313.99/-',
	ton : '7',
	c_capacity : 'Heavy',
	h_capacity : 'HotWheels',
	},
	{
	Name: 'Blue Jeep',
	img:"url(image/Car/jeep2.jpg)",
	price : '$53.99/-',
	ton : '4',
	c_capacity : 'Heavy',
	h_capacity : 'Mattel',
	},
	{
	Name: 'New Model Jeep',
	img:"url(image/Car/jeep3.png)",
	price : '$58.45/-',
	ton : '6',
	c_capacity : 'Heavy',
	h_capacity : 'teddy Herman',
	},
	{
	Name: 'Police Jeep',
	img:"url(image/Car/jeep4.jpg)",
	price : '$78.45/-',
	ton : '6',
	c_capacity : 'Heavy',
	h_capacity : 'teddy Herman',
	},
	{
	Name: 'New Stylish Jeep',
	img:"url(image/Car/jeep5.png)",
	price : '$78.45/-',
	ton : '6',
	c_capacity : 'Heavy',
	h_capacity : 'teddy Herman',
	},
	{
	Name: 'Shining Jeep',
	img:"url(image/Car/jeep6.jpg)",
	price : '$78.45/-',
	ton : '6',
	c_capacity : 'Heavy',
	h_capacity : 'teddy Herman',
	},

	//Cars & Jeep................................................................

	
	//Dolls Start here................................................................
	{
	Name: 'Barbie Doll',
	img:"url(image/dolls/doll1.png)",
	price : '$44.99/-',
	ton : '21',
	c_capacity : '/',
	h_capacity : 'teddy Herman',
	},
	{
	Name: 'New Collection Doll',
	img:"url(image/dolls/doll2.jpg)",
	price : '$59.99/-',
	ton : '11',
	c_capacity : '/',
	h_capacity : 'HotWheels',
	},
	{
	Name: 'Glasses Doll',
	img:"url(image/dolls/doll3.png)",
	price : '$17.99/-',
	ton : '9',
	c_capacity : '/',
	h_capacity : 'Mattel',
	},
	{
	Name: 'New Barabie Doll',
	img:"url(image/dolls/doll4.png)",
	price : '$76.99/-',
	ton : '4',
	c_capacity : '/',
	h_capacity : 'teddy Herman',
	},
	{
	Name: 'Mini Dolls',
	img:"url(image/dolls/doll5.png)",
	price : '$18.99/-',
	ton : '7',
	c_capacity : '/',
	h_capacity : 'HotWheels',
	},
	{
	Name: 'Group Doll',
	img:"url(image/dolls/doll6.png)",
	price : '$81.98/-',
	ton : '2',
	c_capacity : '/',
	h_capacity : 'Mattel',
	},
	

	//Dolls End here................................................................
	
//Soft Toys Start here................................................................
	{
	Name: 'Cute Teddy Bear',
	img:"url(image/softtoys/softtoy1.png)",
	price : '$86.99/-',
	ton : '3',
	c_capacity : '/',
	h_capacity : 'Mattel',
	},
	{
	Name: 'Cute Teddy Bear 2',
	img:"url(image/softtoys/softtoy2.jpg)",
	price : '$70.99/-',
	ton : '1',
	c_capacity : '/',
	h_capacity : 'HotWheels',
	},
	{
	Name: 'Cute Teddy Bear 3',
	img:"url(image/softtoys/softtoy3.jpeg)",
	price : '$109.99/-',
	ton : '7',
	c_capacity : '/',
	h_capacity : 'teddy Herman',
	},
	{
	Name: 'Cute Teddy Bear 4',
	img:"url(image/softtoys/softtoy4.jpg)",
	price : '$97.99/-',
	ton : '1',
	c_capacity : '/',
	h_capacity : 'Mattel',
	},
	{
	Name: 'Cute Teddy Bear 5',
	img:"url(image/softtoys/softtoy5.jpg)",
	price : '$80.99/-',
	ton : '3',
	c_capacity : '/',
	h_capacity : 'HotWheels',
	},
	{
	Name: 'Cute Teddy Bear 6',
	img:"url(image/softtoys/softtoy6.jpg)",
	price : '$88.35/-',
	ton : '6',
	c_capacity : '/',
	h_capacity : 'teddy Herman',
	},
	{
	Name: 'Panda',
	img:"url(image/softtoys/panda.jpg)",
	price : '$89.22/-',
	ton : '5',
	c_capacity : '/',
	h_capacity : 'Mattel',
	},
	
	//Soft Toys End here................................................................
	
	
	//Remote Control Starts here................................................................
	{
	Name: 'Chootu Rebort',
	img:"url(image/Remoto/remote7-p1.jpg)",
	price : '$408.99/-',
	ton : '9',
	c_capacity : '/',
	h_capacity : 'teddy Herman',
	
	},
	{
	Name: 'Dog Rebort',
	img:"url(image/Remoto/remote2.jpg)",
	price : '$438.00/-',
	ton : 'Out of Stock',
	c_capacity : '/',
	h_capacity : 'Mattel',
	},
	{
	Name: 'Cat Rebort',
	img:"url(image/Remoto/remote3.jpg)",
	price : '$499.99/-',
	ton : '1',
	c_capacity : '/',
	h_capacity : 'Hotwheels',
	},
	{
	Name: 'New Rebort',
	img:"url(image/Remoto/remote4.jpg)",
	price : '$329.99/-',
	ton : '3',
	c_capacity : '/',
	h_capacity : 'teddy Herman',
	},
	{
	Name: 'Andriod Rebort',
	img:"url(image/Remoto/remote5.png)",
	price : '$508.99/-',
	ton : '9',
	c_capacity : '/',
	h_capacity : 'teddy Herman',
	},
	{
	Name: 'Iron Rebort',
	img:"url(image/Remoto/remote6.png)",
	price : '$318.00/-',
	ton : '6',
	c_capacity : '/',
	h_capacity : 'Mattel',
	},
	{
	Name: 'Remote Control Car White',
	img:"url(image/Remoto/romote1.jpg)",
	price : '$729.99/-',
	ton : '3',
	c_capacity : '/',
	h_capacity : 'teddy Herman',
	},
	{
	Name: 'Remote Control Car Yellow',
	img:"url(image/Remoto/remote8.jpg)",
	price : '$499.99/-',
	ton : '8',
	c_capacity : '/',
	h_capacity : 'HotWheels',
	},
	{
	Name: 'Remote Control Car Adidias',
	img:"url(image/Remoto/remote9.jpg)",
	price : '$474.99/-',
	ton : '16',
	c_capacity : '/',
	h_capacity : 'Mattel',
	},

	{
	Name: 'Remote Control Car Red',
	img:"url(image/Remoto/remote10.jpg)",
	price : '$474.99/-',
	ton : '16',
	c_capacity : '/',
	h_capacity : 'Mattel',
		},
	{
	Name: 'Remote Control Car Black',
	img:"url(image/Remoto/remote11.png)",
	price : '$474.99/-',
	ton : '16',
	c_capacity : '/',
	h_capacity : 'Mattel',
	},
	{
	Name: 'Remote Control Car Designend',
	img:"url(image/Remoto/remote12.png)",
	price : '$474.99/-',
	ton : '16',
	c_capacity : '/',
	h_capacity : 'Mattel',
	},
	//Remote Control End here................................................................
		
//Six Months  old Start here................................................................
{
	Name: 'Sleeping Bed',
	img:"url(image/Age/6-month-old/6-month-old1.jpg)",
	price : '$86.99/-',
	ton : '3',
	c_capacity : '/',
	h_capacity : 'Mattel',
	},
	{
	Name: 'Box Game',
	img:"url(image/Age/6-month-old/6-month-old2.jpg)",
	price : '$70.99/-',
	ton : '1',
	c_capacity : '/',
	h_capacity : 'HotWheels',
	},
	{
	Name: 'New Game',
	img:"url(image/Age/6-month-old/6-month-old3.jpg)",
	price : '$109.99/-',
	ton : '7',
	c_capacity : '/',
	h_capacity : 'teddy Herman',
	},
	{
	Name: 'Toy Family',
	img:"url(image/Age/6-month-old/6-month-old4.jpg)",
	price : '$97.99/-',
	ton : '1',
	c_capacity : '/',
	h_capacity : 'Mattel',
	},
	{
	Name: 'Cow Toy',
	img:"url(image/Age/6-month-old/6-month-old5.jpg)",
	price : '$80.99/-',
	ton : '3',
	c_capacity : '/',
	h_capacity : 'HotWheels',
	},
	{
	Name: 'Jhinh jhing',
	img:"url(image/Age/6-month-old/6-month-old6.jpg)",
	price : '$88.35/-',
	ton : '6',
	c_capacity : '/',
	h_capacity : 'teddy Herman',
	},
	

	
	//6 Months old End here................................................................
			
//1 Years old  Start here................................................................
{
	Name: 'Kids train',
	img:"url(image/Age/1-year-old/1-year-old1.jpg)",
	price : '$86.99/-',
	ton : '3',
	c_capacity : '/',
	h_capacity : 'Mattel',
	},
	{
	Name: 'Home Vehicle',
	img:"url(image/Age/1-year-old/1-year-old2.jpg)",
	price : '$70.99/-',
	ton : '1',
	c_capacity : '/',
	h_capacity : 'HotWheels',
	},
	{
	Name: 'Home Game',
	img:"url(image/Age/1-year-old/1-year-old3.jpg)",
	price : '$109.99/-',
	ton : '7',
	c_capacity : '/',
	h_capacity : 'teddy Herman',
	},
	{
	Name: 'Kids Carte',
	img:"url(image/Age/1-year-old/1-year-old4.jpg)",
	price : '$97.99/-',
	ton : '1',
	c_capacity : '/',
	h_capacity : 'Mattel',
	},
	{
	Name: 'Walker',
	img:"url(image/Age/1-year-old/1-year-old5.jpg)",
	price : '$80.99/-',
	ton : '3',
	c_capacity : '/',
	h_capacity : 'HotWheels',
	},
	{
	Name: 'Home Blocks',
	img:"url(image/Age/1-year-old/1-year-old6.jpg)",
	price : '$88.35/-',
	ton : '6',
	c_capacity : '/',
	h_capacity : 'teddy Herman',
	},
	

	
	//1 Year old End here................................................................
				
//2 Years old  Start here................................................................
{
	Name: 'Kids Train Big',
	img:"url(image/Age/2-year-old/2-year-old1.jpg)",
	price : '$86.99/-',
	ton : '3',
	c_capacity : '/',
	h_capacity : 'Mattel',
	},
	{
	Name: 'Hand Holder',
	img:"url(image/Age/2-year-old/2-year-old2.jpg)",
	price : '$70.99/-',
	ton : '1',
	c_capacity : '/',
	h_capacity : 'HotWheels',
	},
	{
	Name: 'Hammer Game',
	img:"url(image/Age/2-year-old/2-year-old3.jpg)",
	price : '$109.99/-',
	ton : '7',
	c_capacity : '/',
	h_capacity : 'teddy Herman',
	},
	{
	Name: 'Soccer Game',
	img:"url(image/Age/2-year-old/2-year-old4.jpg)",
	price : '$97.99/-',
	ton : '1',
	c_capacity : '/',
	h_capacity : 'Mattel',
	},
	{
	Name: 'Home Alphabets',
	img:"url(image/Age/2-year-old/2-year-old5.jpg)",
	price : '$80.99/-',
	ton : '3',
	c_capacity : '/',
	h_capacity : 'HotWheels',
	},
	{
	Name: 'Dog Home',
	img:"url(image/Age/2-year-old/2-year-old6.jpg)",
	price : '$88.35/-',
	ton : '6',
	c_capacity : '/',
	h_capacity : 'teddy Herman',
	},
	

	
	//2 Year old End here................................................................
	//4 Years old  Start here................................................................
{
	Name: 'Jumping Pade',
	img:"url(image/Age/4-year-old/4-year-old1.jpg)",
	price : '$86.99/-',
	ton : '3',
	c_capacity : '/',
	h_capacity : 'Mattel',
	},
	{
	Name: 'Automatic Car',
	img:"url(image/Age/4-year-old/4-year-old2.jpg)",
	price : '$70.99/-',
	ton : '1',
	c_capacity : '/',
	h_capacity : 'HotWheels',
	},
	{
	Name: 'Small Vehicles',
	img:"url(image/Age/4-year-old/4-year-old3.jpg)",
	price : '$109.99/-',
	ton : '7',
	c_capacity : '/',
	h_capacity : 'teddy Herman',
	},
	{
	Name: 'Titanic Ship',
	img:"url(image/Age/4-year-old/4-year-old4.jpg)",
	price : '$97.99/-',
	ton : '1',
	c_capacity : '/',
	h_capacity : 'Mattel',
	},
	{
	Name: 'Charging Bike',
	img:"url(image/Age//4-year-old/4-year-old5.jpg)",
	price : '$80.99/-',
	ton : '3',
	c_capacity : '/',
	h_capacity : 'HotWheels',
	},
	{
	Name: 'Blocks',
	img:"url(image/Age/4-year-old/4-year-old6.jpg)",
	price : '$88.35/-',
	ton : '6',
	c_capacity : '/',
	h_capacity : 'teddy Herman',
	},
	

	
	//4 Year old End here................................................................
	
	//6 Years old  Start here................................................................
{
	Name: 'Sand Truck',
	img:"url(image/Age/6-year-old/6-year-old1.jpg)",
	price : '$86.99/-',
	ton : '3',
	c_capacity : '/',
	h_capacity : 'Mattel',
	},
	{
	Name: 'Big Rebort',
	img:"url(image/Age/6-year-old/6-year-old2.jpg)",
	price : '$70.99/-',
	ton : '1',
	c_capacity : '/',
	h_capacity : 'HotWheels',
	},
	{
	Name: 'Bicycle',
	img:"url(image/Age/6-year-old/6-year-old3.jpg)",
	price : '$109.99/-',
	ton : '7',
	c_capacity : '/',
	h_capacity : 'teddy Herman',
	},
	{
	Name: 'Batmen Car',
	img:"url(image/Age/6-year-old/6-year-old4.jpg)",
	price : '$97.99/-',
	ton : '1',
	c_capacity : '/',
	h_capacity : 'Mattel',
	},
	{
	Name: 'Small Bicycle',
	img:"url(image/Age/6-year-old/6-year-old5.jpg)",
	price : '$80.99/-',
	ton : '3',
	c_capacity : '/',
	h_capacity : 'HotWheels',
	},
	{
	Name: 'Cultivation Truck',
	img:"url(image/Age/6-year-old/6-year-old6.jpg)",
	price : '$88.35/-',
	ton : '6',
	c_capacity : '/',
	h_capacity : 'teddy Herman',
	},
	

	
	//6 Year old End here................................................................
	
	];

function compare(){
	var option_1= document.getElementById('option_1').value;
	var option_2= document.getElementById('option_2').value;
	for(var i =0 ;i<AC.length;i++)
	{
		if((option_1 == '------Select Product------' && option_2 == '------Select Product------') || (option_1 != '------Select Product------' && option_2 == '------Select Product------') || (option_1 == '------Select Product------' && option_2 != '------Select Product------'))
		{
			alert('Please select both Products')
			break;
		}
		else if(option_1 == option_2)
		{
			alert('Cannot compare same Products')
			item1("","","","","","","","","","","");
			item2("","","","","","","","","","","");
			break;
		}
		else if(option_1 == AC[i].Name)
		{
			item1(AC[i].Name,AC[i].img,AC[i].price,AC[i].ton,AC[i].c_capacity,AC[i].h_capacity,AC[i].p_input,AC[i].eer,AC[i].color,AC[i].type,AC[i].s_mode,AC[i].t_mode);
			document.getElementById('image-one').style.opacity = '1'
		}
		
		else if(option_2 == AC[i].Name)
		{
			item2(AC[i].Name,AC[i].img,AC[i].price,AC[i].ton,AC[i].c_capacity,AC[i].h_capacity,AC[i].p_input,AC[i].eer,AC[i].color,AC[i].type,AC[i].s_mode,AC[i].t_mode);
			document.getElementById('image-two').style.opacity = '1'
		}
	}

}