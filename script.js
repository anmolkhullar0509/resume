var a=0;

function show1()
{
		
if(a==0)
{

document.getElementById("t6").style.display="inline";
document.getElementById("l1").style.display="inline";
a=1;
}

}
function hide1()
{
		
if(a==1)
{
document.getElementById("t6").style.display="none";
document.getElementById("l1").style.display="none";
a=0;
}
}
function postalcode(value)
{
	var regex = /[A-Za-z]\d[A-Za-z] ?\d[A-Za-z]\d/;
var match = regex.exec(value);
if (match){
    if ( (value.indexOf("-") !== -1 || value.indexOf(" ") !== -1 ) && value.length() == 7 ) {
        return true;
    } else if ( (value.indexOf("-") == -1 || value.indexOf(" ") == -1 ) && value.length() == 6 ) {
        return true;
    }
} else {
        return false;
}

}
function testhour(a)
{
	return isNaN(a-0);
}
function test()
{
	if(!postalcode(f1.t7.value))
	{
		alert("Invalid Postal Code");
		return false;
	}
	else if(testhour(f1.t6.value))
	{
		alert("Please enter numeric value only")
		return false;
	}
}