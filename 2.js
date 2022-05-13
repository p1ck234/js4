var r=1;

var img_array = new Array();
for (var i=0; i<8; i++)
	img_array[i] = new Image();
for (var i=0; i< img_array.length; i++)
	img_array[i].src = [i]+'.jpg';
function kartinka(){
	if(r==8){
		r=0;
		document.pic.src=img_array[r].src;
	}
	document.pic.src=img_array[r].src;
	r++;
}

function SladeShow()
{
	setInterval('kartinka()', 1000);
}

function sort()
{
	s=String()
	k=new Array()
	s=form.pole1.value; 
	k=s.split(''); 
	s1=new String();
	k1=new Array();
	s1=form.pole2.value; 
	k1=s1.split('');
	k2=new Array(); 
	if (k.length > k1.length){
		k2 = k.concat(k1);
	}
	if (k.length < k1.length){
		k2 = k1.concat(k);
	}
	for (var i=0; i < k2.length; i+=2){
		k2[i]=k2[i].bold();
	}
	document.getElementById("s").innerHTML=k2;
}
