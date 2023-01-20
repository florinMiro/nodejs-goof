var txtField = "field1";
var txtUserInput = "'test@csnc.ch';alert(1);";
eval(
   "document.forms[0]." + txtField + ".value =" + txtUserInput
);
