// JavaScript Document

function item1 (pro,img,p,t,c,h,pin,eer,col,type,smode,tmode)
{
	document.getElementById('p_1').innerHTML = pro;
	document.getElementById('image-one').style.backgroundImage = img;
	document.getElementById('price_1').innerHTML = p;
	document.getElementById('ton_1').innerHTML = t;
	document.getElementById('cooling_1').innerHTML = c;
	document.getElementById('heating_1').innerHTML = h;
	document.getElementById('power_1').innerHTML = pin;
	document.getElementById('eer_1').innerHTML = eer;
	document.getElementById('color_1').innerHTML = col;
	document.getElementById('type_1').innerHTML = type;
	document.getElementById('sleep_1').innerHTML = smode;
	document.getElementById('turbo_1').innerHTML = tmode;
}
function item2 (pro,img,p,t,c,h,pin,eer,col,type,smode,tmode)
{
	document.getElementById('p_2').innerHTML = pro;
	document.getElementById('image-two').style.backgroundImage = img
	document.getElementById('price_2').innerHTML = p
	document.getElementById('ton_2').innerHTML = t
	document.getElementById('cooling_2').innerHTML = c
	document.getElementById('heating_2').innerHTML = h
	document.getElementById('power_2').innerHTML = pin
	document.getElementById('eer_2').innerHTML = eer
	document.getElementById('color_2').innerHTML = col
	document.getElementById('type_2').innerHTML = type
	document.getElementById('sleep_2').innerHTML = smode
	document.getElementById('turbo_2').innerHTML = tmode
}

var AC = [
	//Haier Start here................................................................
	{
	Name: 'HSU–12LKE8A',
	img:"url(image/Car/car1.png)",
	price : '37,000/-',
	ton : '1',
	c_capacity : '12000 BTU',
	h_capacity : '/',
	p_input : '1190 W',
	eer : '2.75',
	color : 'Gray',
	type : 'Wall Mounted Split AC',
	s_mode : 'Yes',
	t_mode : '/'
	},
	{
	Name: 'HSU-12LKE8C',
	img:"url(image/Car/car2.png)",
	price : '37,000/-',
	ton : '1',
	c_capacity : '12000 BTU',
	h_capacity : '/',
	p_input : '1190 W',
	eer : '2.75',
	color : 'Red',
	type : 'Wall Mounted Split AC',
	s_mode : 'Yes',
	t_mode : '/'
	},
	{
	Name: 'HSU-12LKE10',
	img:"url(image/Car/car3.png)",
	price : '37,500/-',
	ton : '1',
	c_capacity : '12000 BTU',
	h_capacity : '/',
	p_input : '1190 W',
	eer : '2.74',
	color : 'White',
	type : 'Wall Mounted Split AC',
	s_mode : 'Yes',
	t_mode : '/'
	},
	{
	Name: 'HSU-18LKE8A',
	img:"url(image/Car/car3.png)",
	price : '46,000/-',
	ton : '1.5',
	c_capacity : '18000 BTU',
	h_capacity : '/',
	p_input : '1600 W',
	eer : '2.73',
	color : 'Grey',
	type : 'Wall Mounted Split AC',
	s_mode : 'Yes',
	t_mode : '/'
	},
	{
	Name: 'HSU-18LKE8C',
	img:"url(image/Car/car3.png)",
	price : '46,000/-',
	ton : '1.5',
	c_capacity : '18000 BTU',
	h_capacity : '/',
	p_input : '1518 W',
	eer : '3.1',
	color : 'Red',
	type : 'Wall Mounted Split AC',
	s_mode : 'Yes',
	t_mode : '/'
	},
	{
	Name: 'HSU-18LKE10',
	img:"url(image/Car/car3.png)",
	price : '46,500/-',
	ton : '1.5',
	c_capacity : '18000 BTU',
	h_capacity : '/',
	p_input : '1600 W',
	eer : '2.73',
	color : 'White',
	type : 'Wall Mounted Split AC',
	s_mode : 'Yes',
	t_mode : '/'
	},
	{
	Name: 'HBU-18CA03',
	img:"url(image/Car/car3.png)",
	price : '113,000/-',
	ton : '1.5',
	c_capacity : '18000 BTU',
	h_capacity : '/',
	p_input : '1.73 KW',
	eer : '700',
	color : 'White and Black',
	type : '4-Way Cassette',
	s_mode : '/',
	t_mode : '/'
	},
	{
	Name: 'HBU-24CA03',
	img:"url(image/Car/car3.png)",
	price : '120,500/-',
	ton : '2',
	c_capacity : '24000 BTU',
	h_capacity : '/',
	p_input : '2.21 KW',
	eer : '1300',
	color : 'White and Black',
	type : '4-Way Cassette',
	s_mode : '/',
	t_mode : '/'
	},
	{
	Name: 'HBU-48CH03',
	img:"url(image/Car/car3.png)",
	price : '182,500/-',
	ton : '4',
	c_capacity : '48000 BTU',
	h_capacity : '/',
	p_input : '4.75 KW',
	eer : '1800',
	color : 'White and Black',
	type : '4-Way Cassette',
	s_mode : '/',
	t_mode : '/'
	},
	{
	Name: 'HSU-12HQA-R2',
	img:"url(image/Car/car3.png)",
	price : '66,000/-',
	ton : '1',
	c_capacity : '12000 BTU',
	h_capacity : '17000 BTU',
	p_input : '800(160-1320) W',
	eer : '4.38',
	color : 'White',
	type : 'Wall Mounted Split AC',
	s_mode : 'Yes',
	t_mode : '/'
	},
	{
	Name: 'HSU-12HZE-R2',
	img:"url(image/Car/car3.png)",
	price : '63,500/-',
	ton : '1',
	c_capacity : '12000 BTU',
	h_capacity : '17000 BTU',
	p_input : '800(160-1320) W',
	eer : '4.38',
	color : 'White',
	type : 'Wall Mounted Split AC',
	s_mode : 'Yes',
	t_mode : '/'
	},
	{
	Name: 'HSU-18HZE-R2',
	img:"url(image/Car/car3.png)",
	price : '85,500/-',
	ton : '1.5',
	c_capacity : '18000 BTU',
	h_capacity : '20000 BTU',
	p_input : '1488(140-2170) W',
	eer : '3.36',
	color : 'White',
	type : 'Wall Mounted Split AC',
	s_mode : 'Yes',
	t_mode : '/'
	},
	{
	Name: 'HDU-48CJ03-H',
	img:"url(image/Car/car3.png)",
	price : '175,000/-',
	ton : '4',
	c_capacity : '45700 BTU',
	h_capacity : '/',
	p_input : '4.87 W',
	eer : '1700',
	color : 'Black',
	type : 'Duct AC',
	s_mode : '/',
	t_mode : '/'
	},
	{
	Name: 'HPU-24C03E1',
	img:"url(image/Car/car3.png)",
	price : '94,000/-',
	ton : '2',
	c_capacity : '7200 BTU',
	h_capacity : '1100 BTU',
	p_input : '2780 W',
	eer : '2.59',
	color : 'White',
	type : 'Cabnet AC',
	s_mode : 'Yes',
	t_mode : '/'
	},
	{
	Name: 'HPU-24H03E1',
img:"url(image/Car/car3.png)",
	price : '105,000/-',
	ton : '2',
	c_capacity : '7200 BTU',
	h_capacity : '1100 BTU',
	p_input : '2780 W',
	eer : '2.59',
	color : 'White',
	type : 'Cabnet AC',
	s_mode : 'Yes',
	t_mode : '/'
	},
	{
	Name: 'HPU-48CJ03',
	img:"url(image/Car/car3.png)",
	price : '127,000/-',
	ton : '4',
	c_capacity : '46700 BTU',
	h_capacity : '/',
	p_input : '5.37 KW',
	eer : '1560',
	color : 'White',
	type : 'Cabnet AC',
	s_mode : '/',
	t_mode : '/'
	},
	{
	Name: 'HPU-50HN03',
	img:"url(image/Car/car3.png)",
	price : '168,000/-',
	ton : '4',
	c_capacity : '47000 BTU',
	h_capacity : '50000 BTU',
	p_input : '3.96/4.2 KW',
	eer : '1570',
	color : 'White',
	type : 'Cabnet AC',
	s_mode : '/',
	t_mode : '/'
	},
	{
	Name: 'HPU-60CA03',
	img:"url(image/Car/car3.png)",
	price : '185,000/-',
	ton : '5',
	c_capacity : '57000 BTU',
	h_capacity : '/',
	p_input : '5.8 KW',
	eer : '1700',
	color : 'White',
	type : 'Cabnet AC',
	s_mode : '/',
	t_mode : '/'
	},
	{
	Name: 'HSU-12LXA03ZA',
	img:"url(image/Car/car3.png)",
	price : '42,500/-',
	ton : '1',
	c_capacity : '12000 BTU',
	h_capacity : '/',
	p_input : '1150 W',
	eer : '2.89',
	color : 'White',
	type : 'Wall mounted Split AC',
	s_mode : 'Yes',
	t_mode : '/'
	},
	{
	Name: 'HSU-18LXA03ZA',
	img:"url(image/Car/car3.png)",
	price : '51,500/-',
	ton : '1.5',
	c_capacity : '18000 BTU',
	h_capacity : '/',
	p_input : '1750 W',
	eer : '2.90',
	color : 'White',
	type : 'Wall mounted Split AC',
	s_mode : 'Yes',
	t_mode : '/'
	},
	{
	Name: 'HSU-12LEK-150V',
	img:"url(image/Car/car3.png)",
	price : '42,500/-',
	ton : '1',
	c_capacity : '12000 BTU',
	h_capacity : '/',
	p_input : '1300 W',
	eer : '2.52',
	color : 'White',
	type : 'Wall mounted Split AC',
	s_mode : 'Yes',
	t_mode : '/'
	},
	{
	Name: 'HSU-18LEK-150V',
	img:"url(image/Car/car3.png)",
	price : '52,500/-',
	ton : '1.5',
	c_capacity : '18000 BTU',
	h_capacity : '/',
	p_input : '1775 W',
	eer : '2.78',
	color : 'White',
	type : 'Wall mounted Split AC',
	s_mode : 'Yes',
	t_mode : '/'
	},
	{
	Name: 'HSU-12LEK-E1',
	img:"url(image/Car/car3.png)",
	price : '35,500/-',
	ton : '1',
	c_capacity : '12000 BTU',
	h_capacity : '/',
	p_input : '1320 W',
	eer : '2.58',
	color : 'White',
	type : 'wall mounted Split AC',
	s_mode : 'Yes',
	t_mode : '/'
	},
	{
	Name: 'HSU-12LEK-E2',
	img:"url(image/Car/car3.png)",
	price : '37,500/-',
	ton : '1',
	c_capacity : '12000 BTU',
	h_capacity : '/',
	p_input : '1400 W',
	eer : '2.42',
	color : 'White',
	type : 'wall mounted Split AC',
	s_mode : 'Yes',
	t_mode : '/'
	},
	{
	Name: 'HSU-12LEK-E3',
	img:"url(image/Car/car3.png)",
	price : '35,500/-',
	ton : '1',
	c_capacity : '12000 BTU',
	h_capacity : '/',
	p_input : '1400 W',
	eer : '2.42',
	color : 'White',
	type : 'wall mounted Split AC',
	s_mode : 'Yes',
	t_mode : '/'
	},
	{
	Name: 'HSU-12LEK-E6',
	img:"url(image/Car/car3.png)",
	price : '35,500/-',
	ton : '1',
	c_capacity : '12000 BTU',
	h_capacity : '/',
	p_input : '1400 W',
	eer : '2.42',
	color : 'White',
	type : 'wall mounted Split AC',
	s_mode : 'Yes',
	t_mode : '/'
	},
	{
	Name: 'HSU-18LEK-E1',
	img:"url(image/Car/car3.png)",
	price : '44,000/-',
	ton : '1.5',
	c_capacity : '18000 BTU',
	h_capacity : '/',
	p_input : '2000 W',
	eer : '2.45',
	color : 'White',
	type : 'wall mounted Split AC',
	s_mode : 'Yes',
	t_mode : '/'
	},
	{
	Name: 'HSU-18LEK-E2',
	img:"url(image/Car/car3.png)",
	price : '46,500/-',
	ton : '1.5',
	c_capacity : '18000 BTU',
	h_capacity : '/',
	p_input : '2000 W',
	eer : '2.45',
	color : 'White',
	type : 'wall mounted Split AC',
	s_mode : 'Yes',
	t_mode : '/'
	},
	{
	Name: 'HSU-18LEK-E3',
	img:"url(image/Car/car3.png)",
	price : '44,500/-',
	ton : '1.5',
	c_capacity : '18000 BTU',
	h_capacity : '/',
	p_input : '2000 W',
	eer : '2.45',
	color : 'White',
	type : 'wall mounted Split AC',
	s_mode : 'Yes',
	t_mode : '/'
	},
	{
	Name: 'HSU-18LEK-E6',
	img:"url(image/Car/car3.png)",
	price : '44,500/-',
	ton : '1.5',
	c_capacity : '18000 BTU',
	h_capacity : '/',
	p_input : '1914 W',
	eer : '2.51',
	color : 'White',
	type : 'wall mounted Split AC',
	s_mode : 'Yes',
	t_mode : '/'
	},
	{
	Name: 'HSU-24LEK-E1',
	img:"url(image/Car/car3.png)",
	price : '60,500/-',
	ton : '2',
	c_capacity : '24000 BTU',
	h_capacity : '/',
	p_input : '2500 W',
	eer : '2.6',
	color : 'White',
	type : 'wall mounted Split AC',
	s_mode : 'Yes',
	t_mode : '/'
	},
	//Haier End here................................................................

	//Acson Start here................................................................
	{
	Name: 'ALC15C',
	img:"url(../images/AcsonAC/ALC15C.jpg)",
	price : '46,500/-',
	ton : '1',
	c_capacity : '18000 BTU',
	h_capacity : '/',
	p_input : '/',
	eer : '2.93',
	color : 'Golden',
	type : 'Wall mounted split AC',
	s_mode : '/',
	t_mode : '/'
	},
	{
	Name: 'ALC18C',
	img:"url(../images/AcsonAC/ALC15C.jpg)",
	price : '61,500/-',
	ton : '1.5',
	c_capacity : '18000 BTU / hr',
	h_capacity : '/',
	p_input : '/',
	eer : '2.93',
	color : 'Golden',
	type : 'Wall mounted split AC',
	s_mode : '/',
	t_mode : '/'
	},
	{
	Name: 'ALC18CR',
	img:"url(../images/AcsonAC/ALC15C.jpg)",
	price : '72,000/-',
	ton : '1.5',
	c_capacity : '18000 BTU',
	h_capacity : '/',
	p_input : '/',
	eer : '2.93',
	color : 'Golden',
	type : 'Wall mounted split AC',
	s_mode : '/',
	t_mode : '/'
	},
	{
	Name: 'ALC25C',
	img:"url(../images/AcsonAC/ALC15C.jpg)",
	price : '74,500/-',
	ton : '2',
	c_capacity : '24000 BTU',
	h_capacity : '/',
	p_input : '/',
	eer : '/',
	color : 'Golden',
	type : 'Wall mounted split AC',
	s_mode : '/',
	t_mode : '/'
	},
	{
	Name: 'ALC25CR',
	img:"url(../images/AcsonAC/ALC15C.jpg)",
	price : '84,000/-',
	ton : '2',
	c_capacity : '24000 BTU',
	h_capacity : '/',
	p_input : '/',
	eer : '/',
	color : 'Golden',
	type : 'Wall mounted split AC',
	s_mode : '/',
	t_mode : '/'
	},
	{
	Name: 'A5WMY15LR',
	img:"url(../images/AcsonAC/Inverter.jpg)",
	price : '83,000/-',
	ton : '1',
	c_capacity : '12,100 BTU',
	h_capacity : '/',
	p_input : '/',
	eer : '/',
	color : 'White',
	type : 'Wall mounted split AC',
	s_mode : '/',
	t_mode : '/'
	},
	{
	Name: 'A5WMY18LR',
	img:"url(../images/AcsonAC/Inverter.jpg)",
	price : '125,000/-',
	ton : '1.5',
	c_capacity : '18000 BTU',
	h_capacity : '/',
	p_input : '/',
	eer : '/',
	color : 'White',
	type : 'Wall mounted split AC',
	s_mode : '/',
	t_mode : '/'
	},
	//Acson End here................................................................
	
	//Mitsubishi Start here................................................................
	{
	Name: 'SRK13_CIK',
	img:"url(../images/MitsubishiAC/SRK.jpg)",
	price : '52,000/-',
	ton : '1',
	c_capacity : '12000 BTU',
	h_capacity : '/',
	p_input : '/',
	eer : '/',
	color : 'White',
	type : 'Wall mounted split AC',
	s_mode : '/',
	t_mode : '/'
	},
	{
	Name: 'SRK20',
	img:"url(../images/MitsubishiAC/SRK.jpg)",
	price : '64,000/-',
	ton : '1.5',
	c_capacity : '18000 BTU',
	h_capacity : '/',
	p_input : '/',
	eer : '/',
	color : 'White',
	type : 'Wall mounted split AC',
	s_mode : '/',
	t_mode : '/'
	},
	{
	Name: 'SRK25',
	img:"url(../images/MitsubishiAC/SRK.jpg)",
	price : '82,500/-',
	ton : '2',
	c_capacity : '24000 BTU',
	h_capacity : '/',
	p_input : '/',
	eer : '/',
	color : 'White',
	type : 'Wall mounted split AC',
	s_mode : '/',
	t_mode : '/'
	},
	{
	Name: 'MS-13_VC',
	img:"url(../images/MitsubishiAC/MS13VC_HSU18LKE8A.jpg)",
	price : '51,500/-',
	ton : '1',
	c_capacity : '12000 BTU',
	h_capacity : '/',
	p_input : '1220 W',
	eer : '9.7',
	color : 'White',
	type : 'Wall mounted split AC',
	s_mode : '/',
	t_mode : '/'
	},
	{
	Name: 'MS-18_VC',
	img:"url(../images/MitsubishiAC/MS13VC_HSU18LKE8A.jpg)",
	price : '63,500/-',
	ton : '1.5',
	c_capacity : '18000 BTU',
	h_capacity : '/',
	p_input : '1220 W',
	eer : '9.5',
	color : 'White',
	type : 'Wall mounted split AC',
	s_mode : '/',
	t_mode : '/'
	},
	{
	Name: 'MS-24_VC',
	img:"url(../images/MitsubishiAC/MS24VC.jpg)",
	price : '82,000/-',
	ton : '2',
	c_capacity : '24000 BTU',
	h_capacity : '/',
	p_input : '1220 W',
	eer : '9.5',
	color : 'White',
	type : 'Wall mounted split AC',
	s_mode : '/',
	t_mode : '/'
	},
	//Mitsubishi End here................................................................
	
	//Sharp Start here................................................................
	{
	Name: 'AH-AP18MMV',
	img:"url(../images/SharpAC/AP18MMV.jpg)",
	price : '59,500/-',
	ton : '1.5',
	c_capacity : '5.01 KW',
	h_capacity : '/',
	p_input : '1740-1790 W',
	eer : '2.88',
	color : 'White',
	type : 'Wall mounted split AC',
	s_mode : 'Yes',
	t_mode : '/'
	},
	{
	Name: 'AH-AP24MMV',
	img:"url(../images/SharpAC/AP18MMV.jpg)",
	price : '78,000/-',
	ton : '2',
	c_capacity : '6.70 KW',
	h_capacity : '/',
	p_input : '2400-2500 W',
	eer : '2.79',
	color : 'White',
	type : 'Wall mounted split AC',
	s_mode : 'Yes',
	t_mode : '/'
	},
	{
	Name: 'AH-XP10NRV',
	img:"url(../images/SharpAC/AHcXP13NRV.jpg)",
	price : '46,500/-',
	ton : '0.81',
	c_capacity : '2.8 kW',
	h_capacity : '/',
	p_input : '890 W',
	eer : '3.15',
	color : 'White',
	type : 'Wall mounted split AC',
	s_mode : 'Yes',
	t_mode : '/'
	},
	{
	Name: 'AH-XP13NRV',
	img:"url(../images/SharpAC/AHcXP13NRV.jpg)",
	price : '56,500/-',
	ton : '1.1',
	c_capacity : '3.4 kW',
	h_capacity : '/',
	p_input : '1150 W',
	eer : '2.75',
	color : 'White',
	type : 'Wall mounted split AC',
	s_mode : 'Yes',
	t_mode : '/'
	},
	{
	Name: 'AH-XP18MV',
	img:"url(../images/SharpAC/AP18MMV.jpg)",
	price : '88,000/-',
	ton : '1.5',
	c_capacity : '5.27 kW',
	h_capacity : '/',
	p_input : '1440 W',
	eer : '3.66',
	color : 'White',
	type : 'Wall mounted split AC',
	s_mode : 'Yes',
	t_mode : '/'
	},
	{
	Name: 'AH-XP24MV',
	img:"url(../images/SharpAC/AP18MMV.jpg)",
	price : '110,000/-',
	ton : '2',
	c_capacity : '6.25(1.70 - 7.10)kW',
	h_capacity : '/',
	p_input : '1880 W',
	eer : '3.32',
	color : 'White',
	type : 'Wall mounted split AC',
	s_mode : 'Yes',
	t_mode : '/'
	},
	//Sharp End here................................................................
	
	//LG Start here................................................................
	{
	Name: 'S126_DC',
	img:"url(../images/LGAC/S126DC.jpg)",
	price : '51,000/-',
	ton : '1',
	c_capacity : '/',
	h_capacity : '/',
	p_input : '/',
	eer : '/',
	color : 'White',
	type : 'Wall mounted split AC',
	s_mode : '/',
	t_mode : '/'
	},
	{
	Name: 'S186_DC',
	img:"url(../images/LGAC/S126DC.jpg)",
	price : '68,000/-',
	ton : '1.5',
	c_capacity : '/',
	h_capacity : '/',
	p_input : '/',
	eer : '/',
	color : 'White',
	type : 'Wall mounted split AC',
	s_mode : '/',
	t_mode : '/'
	},
	{
	Name: 'S246_DC',
	img:"url(../images/LGAC/S126DC.jpg)",
	price : '79,000/-',
	ton : '2',
	c_capacity : '/',
	h_capacity : '/',
	p_input : '/',
	eer : '/',
	color : 'White',
	type : 'Wall mounted split AC',
	s_mode : '/',
	t_mode : '/'
	},
	//LG End here................................................................
	
	//PEL Start here................................................................
	{
	Name: '12KDM',
	img:"url(../images/PELAC/12KDM.jpg)",
	price : '39,500/-',
	ton : '1',
	c_capacity : '12000 BTU',
	h_capacity : '/',
	p_input : '/',
	eer : '/',
	color : 'Black',
	type : 'Wall mounted split AC',
	s_mode : '/',
	t_mode : '/'
	},
	{
	Name: '18KDM',
	img:"url(../images/PELAC/12KDM.jpg)",
	price : '49,500/-',
	ton : '1.5',
	c_capacity : '18000 BTU',
	h_capacity : '/',
	p_input : '/',
	eer : '/',
	color : 'Black',
	type : 'Wall mounted split AC',
	s_mode : '/',
	t_mode : '/'
	},
	{
	Name: '24KDM',
	img:"url(../images/PELAC/12KDM.jpg)",
	price : '65,500/-',
	ton : '2',
	c_capacity : '24000 BTU',
	h_capacity : '/',
	p_input : '/',
	eer : '/',
	color : 'Black',
	type : 'Wall mounted split AC',
	s_mode : '/',
	t_mode : '/'
	},
	//PEL End here................................................................
	
	//Gree Start here................................................................
	{
	Name: '12C1TH2',
	img:"url(../images/GreeAC/12CITH2.jpg)",
	price : '64,000/-',
	ton : '1',
	c_capacity : '12000 BTU',
	h_capacity : '/',
	p_input : '/',
	eer : '/',
	color : 'Black',
	type : 'Wall mounted split AC',
	s_mode : 'Yes',
	t_mode : '/'
	},
	{
	Name: '18C1TH2',
	img:"url(../images/GreeAC/12CITH2.jpg)",
	price : '84,000/-',
	ton : '1.5',
	c_capacity : '18000 BTU',
	h_capacity : '/',
	p_input : '/',
	eer : '/',
	color : 'Black',
	type : 'Wall mounted split AC',
	s_mode : 'Yes',
	t_mode : '/'
	},
	{
	Name: '24C1TH2',
	img:"url(../images/GreeAC/12CITH2.jpg)",
	price : '105,000/-',
	ton : '2',
	c_capacity : '24000 BTU',
	h_capacity : '/',
	p_input : '/',
	eer : '/',
	color : 'Black',
	type : 'Wall mounted split AC',
	s_mode : 'Yes',
	t_mode : '/'
	},
	{
	Name: '12CZ9',
	img:"url(../images/GreeAC/12CZ9_18cz9_24CZ9.jpg)",
	price : '41,500/-',
	ton : '1',
	c_capacity : '12000 BTU',
	h_capacity : '/',
	p_input : '/',
	eer : '/',
	color : 'Black',
	type : 'Wall mounted split AC',
	s_mode : 'Yes',
	t_mode : '/'
	},
	{
	Name: '18CZ9',
	img:"url(../images/GreeAC/12CZ9_18cz9_24CZ9.jpg)",
	price : '51,500/-',
	ton : '1.5',
	c_capacity : '18000 BTU',
	h_capacity : '/',
	p_input : '/',
	eer : '/',
	color : 'Black',
	type : 'Wall mounted split AC',
	s_mode : 'Yes',
	t_mode : '/'
	},
	{
	Name: '24CZ9',
	img:"url(../images/GreeAC/12CZ9_18cz9_24CZ9.jpg)",
	price : '64,500/-',
	ton : '2',
	c_capacity : '24000 BTU',
	h_capacity : '/',
	p_input : '/',
	eer : '/',
	color : 'Black',
	type : 'Wall mounted split AC',
	s_mode : 'Yes',
	t_mode : '/'
	},
	{
	Name: 'GS-12CZ8A',
	img:"url(../images/GreeAC/CZ8.jpg)",
	price : '41,500/-',
	ton : '1',
	c_capacity : '12000 BTU',
	h_capacity : '/',
	p_input : '/',
	eer : '/',
	color : 'Black',
	type : 'Wall mounted split AC',
	s_mode : 'Yes',
	t_mode : '/'
	},
	{
	Name: 'GS-12CZ8W',
	img:"url(../images/GreeAC/CZ8.jpg)",
	price : '41,500/-',
	ton : '1',
	c_capacity : '12000 BTU',
	h_capacity : '/',
	p_input : '/',
	eer : '/',
	color : 'Black',
	type : 'Wall mounted split AC',
	s_mode : 'Yes',
	t_mode : '/'
	},
	{
	Name: 'GS-18CZ8W',
	img:"url(../images/GreeAC/CZ8.jpg)",
	price : '51,500/-',
	ton : '1.5',
	c_capacity : '18000 BTU',
	h_capacity : '/',
	p_input : '/',
	eer : '/',
	color : 'Black',
	type : 'Wall mounted split AC',
	s_mode : 'Yes',
	t_mode : '/'
	},
	{
	Name: 'GS-12CZ8S',
	img:"url(../images/GreeAC/CZ8.jpg)",
	price : '41,500/-',
	ton : '1',
	c_capacity : '12000 BTU',
	h_capacity : '/',
	p_input : '/',
	eer : '/',
	color : 'Black',
	type : 'Wall mounted split AC',
	s_mode : 'Yes',
	t_mode : '/'
	},
	{
	Name: 'GS-24CZ8S',
	img:"url(../images/GreeAC/CZ8.jpg)",
	price : '64,500/-',
	ton : '2',
	c_capacity : '24000 BTU',
	h_capacity : '/',
	p_input : '/',
	eer : '/',
	color : 'Black',
	type : 'Wall mounted split AC',
	s_mode : 'Yes',
	t_mode : '/'
	},
	//Gree End here................................................................
	
	//Kenwood Start here................................................................
	{
	Name: 'KEC-12S',
	img:"url(../images/KenWoodAC/Crystal.jpg)",
	price : '36,000/-',
	ton : '1',
	c_capacity : '12000 BTU',
	h_capacity : '/',
	p_input : '/',
	eer : '/',
	color : 'Gray',
	type : 'Wall mounted split AC',
	s_mode : '/',
	t_mode : 'Yes'
	},
	{
	Name: 'KEC-18S',
	img:"url(../images/KenWoodAC/Crystal.jpg)",
	price : '44,000/-',
	ton : '1.5',
	c_capacity : '18000 BTU',
	h_capacity : '/',
	p_input : '/',
	eer : '/',
	color : 'Gray',
	type : 'Wall mounted split AC',
	s_mode : '/',
	t_mode : 'Yes'
	},
	{
	Name: 'KEI-12S',
	img:"url(../images/KenWoodAC/Icon.jpg)",
	price : '36,000/-',
	ton : '1',
	c_capacity : '12000 BTU',
	h_capacity : '/',
	p_input : '/',
	eer : '/',
	color : 'Silver',
	type : 'Wall mounted split AC',
	s_mode : '/',
	t_mode : 'Yes'
	},
	{
	Name: 'KEI-18S',
	img:"url(../images/KenWoodAC/Icon.jpg)",
	price : '43,500/-',
	ton : '1.5',
	c_capacity : '18000 BTU',
	h_capacity : '/',
	p_input : '/',
	eer : '/',
	color : 'Silver',
	type : 'Wall mounted split AC',
	s_mode : '/',
	t_mode : 'Yes'
	},
	{
	Name: 'KED-24F',
	img:"url(../images/KenWoodAC/Sense_FS.jpg)",
	price : '81,500/-',
	ton : '2',
	c_capacity : '24000 BTU',
	h_capacity : '/',
	p_input : '/',
	eer : '/',
	color : 'White',
	type : 'Cabnet AC',
	s_mode : '/',
	t_mode : 'Yes'
	},
	{
	Name: 'KEE-12S',
	img:"url(../images/KenWoodAC/Sense.jpg)",
	price : '35,000/-',
	ton : '1',
	c_capacity : '12000 BTU',
	h_capacity : '/',
	p_input : '/',
	eer : '/',
	color : 'White',
	type : 'Wall mounted split AC',
	s_mode : '/',
	t_mode : 'Yes'
	},
	{
	Name: 'KEE-18S',
	img:"url(../images/KenWoodAC/Sense.jpg)",
	price : '42,000/-',
	ton : '1.5',
	c_capacity : '18000 BTU',
	h_capacity : '/',
	p_input : '/',
	eer : '/',
	color : 'White',
	type : 'Wall mounted split AC',
	s_mode : '/',
	t_mode : 'Yes'
	},
	{
	Name: 'KEE-24S',
	img:"url(../images/KenWoodAC/Sense.jpg)",
	price : '50,000/-',
	ton : '2',
	c_capacity : '24000 BTU',
	h_capacity : '/',
	p_input : '/',
	eer : '/',
	color : 'White',
	type : 'Wall mounted split AC',
	s_mode : '/',
	t_mode : 'Yes'
	},
	{
	Name: 'KET-12S',
	img:"url(../images/KenWoodAC/Star.jpg)",
	price : '38,500/-',
	ton : '1',
	c_capacity : '12000 BTU',
	h_capacity : '/',
	p_input : '/',
	eer : '/',
	color : 'White and Silver',
	type : 'Wall mounted split AC',
	s_mode : '/',
	t_mode : 'Yes'
	},
	{
	Name: 'KET-18S',
	img:"url(../images/KenWoodAC/Star.jpg)",
	price : '48,000/-',
	ton : '1.5',
	c_capacity : '18000 BTU',
	h_capacity : '/',
	p_input : '/',
	eer : '/',
	color : 'White and Silver',
	type : 'Wall mounted split AC',
	s_mode : '/',
	t_mode : 'Yes'
	},
	{
	Name: 'KEV-12S',
	img:"url(../images/KenWoodAC/Viva.jpg)",
	price : '36,000/-',
	ton : '1',
	c_capacity : '12000 BTU',
	h_capacity : '/',
	p_input : '/',
	eer : '/',
	color : 'Black',
	type : 'Wall mounted split AC',
	s_mode : '/',
	t_mode : 'Yes'
	},
	{
	Name: 'KEV-18S',
	img:"url(../images/KenWoodAC/Viva.jpg)",
	price : '43,500/-',
	ton : '1.5',
	c_capacity : '18000 BTU',
	h_capacity : '/',
	p_input : '/',
	eer : '/',
	color : 'Black',
	type : 'Wall mounted split AC',
	s_mode : '/',
	t_mode : 'Yes'
	},
	{
	Name: 'KEV-24S',
	img:"url(../images/KenWoodAC/Viva.jpg)",
	price : '54,500/-',
	ton : '2',
	c_capacity : '24000 BTU',
	h_capacity : '/',
	p_input : '/',
	eer : '/',
	color : 'Black',
	type : 'Wall mounted split AC',
	s_mode : '/',
	t_mode : 'Yes'
	},
	{
	Name: 'KEV-41FH',
	img:"url(../images/KenWoodAC/Viva_FS.jpg)",
	price : '128,500/-',
	ton : '3.5',
	c_capacity : '36000 BTU',
	h_capacity : '/',
	p_input : '/',
	eer : '/',
	color : 'Black',
	type : 'Cabnet AC',
	s_mode : '/',
	t_mode : 'Yes'
	},
	{
	Name: 'KEV-41F',
	img:"url(../images/KenWoodAC/Viva_FS.jpg)",
	price : '121,500/-',
	ton : '3.5',
	c_capacity : '36000 BTU',
	h_capacity : '/',
	p_input : '/',
	eer : '/',
	color : 'Black',
	type : 'Cabnet AC',
	s_mode : '/',
	t_mode : 'Yes'
	},
	//Kenwood End here................................................................
	
	//Orient Start here................................................................
	{
	Name: 'OF-24MS2',
	img:"url(../images/OrientAC/OF_48MS2.jpg)",
	price : '86,000/-',
	ton : '2',
	c_capacity : '24000 BTU',
	h_capacity : '/',
	p_input : '2650 W',
	eer : '9.1-2.65',
	color : 'White',
	type : 'Cabnet AC',
	s_mode : '/',
	t_mode : '/'
	},
	{
	Name: 'OF-48MS2',
	img:"url(../images/OrientAC/OF_48MS2.jpg)",
	price : '134,000/-',
	ton : '4',
	c_capacity : '48000 BTU',
	h_capacity : '/',
	p_input : '1500 W',
	eer : '9.4-2.75',
	color : 'White',
	type : 'Cabnet AC',
	s_mode : '/',
	t_mode : '/'
	},
	{
	Name: 'OSC-24-M4W',
	img:"url(../images/OrientAC/OSC48M4W4.jpg)",
	price : '96,000/-',
	ton : '2',
	c_capacity : '24000 BTU',
	h_capacity : '/',
	p_input : '2600 W',
	eer : '12.1',
	color : 'White',
	type : 'Ceilling Cassette AC',
	s_mode : '/',
	t_mode : '/'
	},
	{
	Name: 'OSC-48-M4W',
	img:"url(../images/OrientAC/OSC48M4W4.jpg)",
	price : '177,000/-',
	ton : '4',
	c_capacity : '48000 BTU',
	h_capacity : '/',
	p_input : '4800 W',
	eer : '8.3',
	color : 'White',
	type : 'Ceilling Cassette AC',
	s_mode : '/',
	t_mode : '/'
	},
	{
	Name: 'OS-19-MR16',
	img:"url(../images/OrientAC/OS19MR16.jpg)",
	price : '45,500/-',
	ton : '1.5',
	c_capacity : '18000 BTU',
	h_capacity : '/',
	p_input : '1920 W',
	eer : '8.87',
	color : 'White',
	type : 'Wall mounted split AC',
	s_mode : 'Yes',
	t_mode : 'Yes'
	},
	{
	Name: 'OS-19-MR27-HC',
	img:"url(../images/OrientAC/OS24MR27HC2.jpg)",
	price : '45,500/-',
	ton : '1.5',
	c_capacity : '18000 BTU',
	h_capacity : '/',
	p_input : '1920 W',
	eer : '8.87',
	color : 'White',
	type : 'Wall mounted split AC',
	s_mode : 'Yes',
	t_mode : 'Yes'
	},
	{
	Name: 'OS-24-MR27',
	img:"url(../images/OrientAC/OS24MR27HC2.jpg)",
	price : '65,000/-',
	ton : '2',
	c_capacity : '24000 BTU',
	h_capacity : '/',
	p_input : '2700 W',
	eer : '8.87',
	color : 'White',
	type : 'Wall mounted split AC',
	s_mode : 'Yes',
	t_mode : 'Yes'
	},
	{
	Name: 'Invertech-Series-1',
	img:"url(../images/OrientAC/Invertech.jpg)",
	price : '58,500/-',
	ton : '1',
	c_capacity : '12000 BTU',
	h_capacity : '/',
	p_input : '/',
	eer : '/',
	color : 'Black',
	type : 'Wall mounted split AC',
	s_mode : 'Yes',
	t_mode : 'Yes'
	},
	{
	Name: 'Invertech-Series-1.5',
	img:"url(../images/OrientAC/Invertech.jpg)",
	price : '80,000/-',
	ton : '1.5',
	c_capacity : '18000 BTU',
	h_capacity : '/',
	p_input : '/',
	eer : '/',
	color : 'Black',
	type : 'Wall mounted split AC',
	s_mode : 'Yes',
	t_mode : 'Yes'
	},
	{
	Name: 'Econotech-19MF08',
	img:"url(../images/OrientAC/Econotech.jpg)",
	price : '45,500/-',
	ton : '1.5',
	c_capacity : '18000 BTU',
	h_capacity : '/',
	p_input : '/',
	eer : '/',
	color : 'White',
	type : 'Wall mounted split AC',
	s_mode : 'Yes',
	t_mode : 'Yes'
	},
	{
	Name: 'Econotech-24MF08',
	img:"url(../images/OrientAC/Econotech.jpg)",
	price : '62,000/-',
	ton : '2',
	c_capacity : '24000 BTU',
	h_capacity : '/',
	p_input : '/',
	eer : '/',
	color : 'White',
	type : 'Wall mounted split AC',
	s_mode : 'Yes',
	t_mode : 'Yes'
	},
	{
	Name: 'Econotech-Series',
	img:"url(../images/OrientAC/Econotech.jpg)",
	price : '35,500/-',
	ton : '1',
	c_capacity : '12000 BTU',
	h_capacity : '/',
	p_input : '/',
	eer : '/',
	color : 'White',
	type : 'Wall mounted split AC',
	s_mode : 'Yes',
	t_mode : 'Yes'
	},
	//Orient End here................................................................
	
	//Samsung Start here................................................................
	{
	Name: 'AS-18VWA',
	img:"url(../images/SamsungAC/AS_18VWA.jpg)",
	price : '58,000/-',
	ton : '1.5',
	c_capacity : '18000 BTU',
	h_capacity : '/',
	p_input : '1900 W',
	eer : '9.47',
	color : 'White',
	type : 'Wall mounted split AC',
	s_mode : '/',
	t_mode : '/'
	},
	{
	Name: 'AS-18FAXUMG',
	img:"url(../images/SamsungAC/AS_18FAXUMG.jpg)",
	price : '58,000/-',
	ton : '1.5',
	c_capacity : '18000 BTU',
	h_capacity : '/',
	p_input : '/',
	eer : '/',
	color : 'White',
	type : 'Wall mounted split AC',
	s_mode : 'Yes',
	t_mode : 'Yes'
	},
	{
	Name: 'AS-24FAXUMG',
	img:"url(../images/SamsungAC/AS_18FAXUMG.jpg)",
	price : '64,500/-',
	ton : '2',
	c_capacity : '24000 BTU',
	h_capacity : '/',
	p_input : '2500 W',
	eer : '/',
	color : 'White',
	type : 'Wall mounted split AC',
	s_mode : 'Yes',
	t_mode : 'Yes'
	},
	{
	Name: 'AR-18HPSDDWK/SG',
	img:"url(../images/SamsungAC/AR_18HPSDDWK.jpg)",
	price : '61,000/-',
	ton : '1.5',
	c_capacity : '18000 BTU',
	h_capacity : '/',
	p_input : '/',
	eer : '/',
	color : 'White',
	type : 'Wall mounted split AC',
	s_mode : 'Yes',
	t_mode : 'Yes'
	}
	//Samsung End here................................................................
	];

function compare(){
	var option_1= document.getElementById('option_1').value;
	var option_2= document.getElementById('option_2').value;
	for(var i =0 ;i<AC.length;i++)
	{
		if((option_1 == '------Select Product------' && option_2 == '------Select Product------') || (option_1 != '------Select Product------' && option_2 == '------Select Product------') || (option_1 == '------Select Product------' && option_2 != '------Select Product------'))
		{
			alert('please select both products')
			break;
		}
		else if(option_1 == option_2)
		{
			alert('Cant compare same product')
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