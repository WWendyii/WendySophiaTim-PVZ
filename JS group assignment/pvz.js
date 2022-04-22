//homepage

function a(aa){
	return aa * 10;
}
function aaa(){
	var num = a(50);
	alert(num + ' mins')
}



function aaaa(e,r){
	return (e*(r**2));
}
function oh(){
	var ee = aaaa(3.14,5);
	alert('area is: ' + ee)
}

function b(){
	var a = ['Wendy','Sophia','Tim'];
	var b = 'I am interesting with '
	var c = parseFloat(prompt('choose a number, 0: Wendy, 1: Sophia, 2: Tim'));
	var e = " 's part."
	var d = a[c];
	alert(b + d + e);
}

function bb(){
	var a = ['Wendy','Sophia','Tim'];
	alert(typeof a[0]);
}

function bbb(){
	var a = ['Wendy','Sophia','Tim'];
	var b = a.push(' are very good');
	alert(a.toString())
}

function c(){
	var f = {
		name:'Wendy',
		age:18,
		gender:'female',
	    garden: true,
		homepage: true,
		maps:false,
		more:false,
		zombies:false,
		plants:false,
	}
    alert('Hi, my name is '+ f.name);
    alert('My age is '+ f.age);
    alert('I am '+ f.gender);
    alert('I did homepage: ' + f.homepage);
    alert('I did garden: ' + f.garden);
    alert('I did maps: ' + f.maps);
    alert('I did more information: ' + f.more);
    alert('I did zombies: ' + f.zombies);
    alert('I did plants: ' + f.plants);	
}

function cc(){
	var a = 'Wendy';
	var b = 'Sophia';
	var c = 'Tim';

	alert(a === b && a === c);
	alert('because they are different person')

}

function d(){
	var g = {
		name:'Sophia',
		age:18,
		gender:'female',
	    garden: false,
		homepage: false,
		maps:true,
		more:true,
		zombies:false,
		plants:false,
	}
    alert('Hi, my name is '+ g.name);
    alert('My age is '+ g.age);
    alert('I am '+ g.gender);
    alert('I did homepage: ' + g.homepage);
    alert('I did garden: ' + g.garden);
    alert('I did maps: ' + g.maps);
    alert('I did more information: ' + g.more);
    alert('I did zombies: ' + g.zombies);
    alert('I did plants: ' + g.plants);	
}

function e(){
	var h = {
		name:'Tim',
		age:17,
		gender:'male',
	    garden: false,
		homepage: false,
		maps:false,
		more:false,
		zombies:true,
		plants:true,
	}
    alert('Hi, my name is '+ h.name);
    alert('My age is '+ h.age);
    alert('I am '+ h.gender);
    alert('I did homepage: ' + h.homepage);
    alert('I did garden: ' + h.garden);
    alert('I did maps: ' + h.maps);
    alert('I did more information: ' + h.more);
    alert('I did zombies: ' + h.zombies);
    alert('I did plants: ' + h.plants);	
}

function f(){
	var css = document.getElementById('change').style;
	css.color = '#c97c60';
	css.fontSize = '60px';
	css.backgroundColor = '#cce0dc'
}

function g(){
	document.getElementById('change').style.color = 'white';
	document.getElementById('change').style.fontSize = '40px';
	document.getElementById('change').style.backgroundColor = '#363636';
}

function h(){
	document.getElementById('dem').src = 'https://i.iplsc.com/-/000281YZXL50JR7Q-C129-F4.jpg';
	document.getElementById('demoo').src = 'https://www.gamersglobal.de/sites/gamersglobal.de/files/test/teaser/10/plantsvszombiesneu.jpg'

}

function i(){
	alert(Date())
}

function j(){
	alert( 'Hour: ' + new Date().getHours());
	alert( 'Mins: ' + new Date().getMinutes());
}

//garden

function k1(){
	var str = 'Zen Garden';
	alert(str.toUpperCase());
}

function k2(){
	var str = 'Zen Garden';
	alert(str.replace("Zen Garden","Mushroom Garden"));
}

function k3(){
	var str = 'Zen Garden Aquarium Garden';
	alert(str.slice(10,25));
}

function k11(){
	var a ='Zen Garden';
	var b = a.length;
	alert('\" '+ b + ' \"');
}

function k22(){
	var a ='Mushroom Garden';
	alert('\" '+ a.length + ' \"');
}

function k33(){
	var a ='Aquarium Garden';
	alert('\" '+ a.indexOf('n') + ' \"');
}

function l(){
	var player = prompt('Please select your choice (rock, paper or scissor) : ')
	var a = ['rock','paper','scissor'];
	var b = Math.floor(Math.random()*3);
	var computer = a[b];

//if same

	if(player == computer){
		alert('draw (same choice)');
	}

//player is rock

	else if(player == 'rock'){
		if(computer == 'paper'){
			alert('computer wins');
		}
		else if(computer == 'scissor'){
			alert('player wins');
		}
	}

//player is paper

		else if(player == 'paper'){
			if(computer == 'rock'){
				alert('player wins');
			}
			else if(computer == 'scissor'){
				alert('computer wins');
			}}

//player is scissor

			else if(player == 'scissor'){
				if(computer == 'rock'){
					alert('computer wins');
				}
				else if(computer == 'paper'){
				    alert('player wins');
			}
			}

//if write wrong thing		

	else{
		alert('please enter correct choice')
	}
}

//Tim

function plant1(){
	document.getElementById('picture_background1').src='plant1.png';
}

function plant2(){
	document.getElementById('picture_background1').src='plant2.png';
}

function plant3(){
	document.getElementById('picture_background1').src='plant3.png';
}

function plant4(){
	document.getElementById('picture_background1').src='plant4.png';
}

function plant5(){
	document.getElementById('picture_background1').src='plant5.png';
}

function plant6(){
	document.getElementById('picture_background1').src='plant6.png';
}

function plant7(){
	document.getElementById('picture_background1').src='plant7.png';
}

function plant8(){
	document.getElementById('picture_background1').src='plant8.png';
}

function plant9(){
	document.getElementById('picture_background2').src='plant9.png';
}

function plant10(){
	document.getElementById('picture_background2').src='plant10.png';
}

function plant11(){
	document.getElementById('picture_background2').src='plant11.png';
}

function plant12(){
	document.getElementById('picture_background2').src='plant12.png';
}

function plant13(){
	document.getElementById('picture_background2').src='plant13.png';
}

function plant14(){
	document.getElementById('picture_background2').src='plant14.png';
}

function plant15(){
	document.getElementById('picture_background2').src='plant15.png';
}

function plant16(){
	document.getElementById('picture_background2').src='plant16.png';
}

function plant17(){
	document.getElementById('picture_background3').src='plant17.png';
}

function plant18(){
	document.getElementById('picture_background3').src='plant18.png';
}

function plant19(){
	document.getElementById('picture_background3').src='plant19.png';
}

function plant20(){
	document.getElementById('picture_background3').src='plant20.png';
}

function plant21(){
	document.getElementById('picture_background3').src='plant21.png';
}

function plant22(){
	document.getElementById('picture_background3').src='plant22.png';
}

function plant23(){
	document.getElementById('picture_background3').src='plant23.png';
}

function plant24(){
	document.getElementById('picture_background3').src='plant24.png';
}

function plant25(){
	document.getElementById('picture_background4').src='plant25.png';
}

function plant26(){
	document.getElementById('picture_background4').src='plant26.png';
}

function plant27(){
	document.getElementById('picture_background4').src='plant27.png';
}

function plant28(){
	document.getElementById('picture_background4').src='plant28.png';
}

function plant29(){
	document.getElementById('picture_background4').src='plant29.png';
}

function plant30(){
	document.getElementById('picture_background4').src='plant30.png';
}

function plant31(){
	document.getElementById('picture_background4').src='plant31.png';
}

function plant32(){
	document.getElementById('picture_background4').src='plant32.png';
}

function plant33(){
	document.getElementById('picture_background5').src='plant33.png';
}

function plant34(){
	document.getElementById('picture_background5').src='plant34.png';
}

function plant35(){
	document.getElementById('picture_background5').src='plant35.png';
}

function plant36(){
	document.getElementById('picture_background5').src='plant36.png';
}

function plant37(){
	document.getElementById('picture_background5').src='plant37.png';
}

function plant38(){
	document.getElementById('picture_background5').src='plant38.png';
}

function plant39(){
	document.getElementById('picture_background5').src='plant39.png';
}

function plant40(){
	document.getElementById('picture_background5').src='plant40.png';
}

function plant41(){
	document.getElementById('picture_background6').src='plant41.png';
}

function plant42(){
	document.getElementById('picture_background6').src='plant42.png';
}

function plant43(){
	document.getElementById('picture_background6').src='plant43.png';
}

function plant44(){
	document.getElementById('picture_background6').src='plant44.png';
}

function plant45(){
	document.getElementById('picture_background6').src='plant45.png';
}

function plant46(){
	document.getElementById('picture_background6').src='plant46.png';
}

function plant47(){
	document.getElementById('picture_background6').src='plant47.png';
}

function plant48(){
	document.getElementById('picture_background6').src='plant48.png';
}

function zombie1(){
	document.getElementById('picture_background7').src='zombie1.png';
}

function zombie2(){
	document.getElementById('picture_background7').src='zombie2.png';
}

function zombie3(){
	document.getElementById('picture_background7').src='zombie3.png';
}

function zombie4(){
	document.getElementById('picture_background7').src='zombie4.png';
}

function zombie5(){
	document.getElementById('picture_background7').src='zombie5.png';
}

function zombie6(){
	document.getElementById('picture_background8').src='zombie6.png';
}

function zombie7(){
	document.getElementById('picture_background8').src='zombie7.png';
}

function zombie8(){
	document.getElementById('picture_background8').src='zombie8.png';
}

function zombie9(){
	document.getElementById('picture_background8').src='zombie9.png';
}

function zombie10(){
	document.getElementById('picture_background8').src='zombie10.png';
}

function zombie11(){
	document.getElementById('picture_background9').src='zombie11.png';
}

function zombie12(){
	document.getElementById('picture_background9').src='zombie12.png';
}

function zombie13(){
	document.getElementById('picture_background9').src='zombie13.png';
}

function zombie14(){
	document.getElementById('picture_background9').src='zombie14.png';
}

function zombie15(){
	document.getElementById('picture_background9').src='zombie15.png';
}

function zombie16(){
	document.getElementById('picture_background10').src='zombie16.png';
}

function zombie17(){
	document.getElementById('picture_background10').src='zombie17.png';
}

function zombie18(){
	document.getElementById('picture_background10').src='zombie18.png';
}

function zombie19(){
	document.getElementById('picture_background10').src='zombie19.png';
}

function zombie20(){
	document.getElementById('picture_background10').src='zombie20.png';
}

function zombie21(){
	document.getElementById('picture_background11').src='zombie21.png';
}

function zombie22(){
	document.getElementById('picture_background11').src='zombie22.png';
}

function zombie23(){
	document.getElementById('picture_background11').src='zombie23.png';
}

function zombie24(){
	document.getElementById('picture_background11').src='zombie24.png';
}

function zombie25(){
	document.getElementById('picture_background11').src='zombie25.png';
}

function zombie26(){
	document.getElementById('picture_background11').src='zombie26.png';
}


//sophia

function a28(){
    alert('Swimming pool');
}
function a29(){
    alert('Midnight');
}
function a30(){
    alert('Roof');
}
function a31(){
    alert('Foggy day');
}
function a32(){
    alert('Normal');
}


function a40(){
    var num1=parseFloat(prompt('first price:'));
    var op=prompt('please enter the operator:');
    var num2=parseFloat(prompt('second price:'));
    if(op == "+"){
        alert(num1 + num2);
    }

    else if(op == "-"){
        alert(num1 - num2);
    }
    else if(op == "/"){
        alert(num1 / num2);
    }

    else{
        alert(num1 * num2);
    }
}







