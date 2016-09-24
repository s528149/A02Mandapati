function insure()
{
	var salary = $("#salary").val();
	var insurance = $("#insurance").val();
	var result = (salary*insurance)/100;
	window.alert("The insuranse of this emplyee is $" + result);
};
