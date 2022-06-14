var my=new Array();
my[0]="Junaid";
my[1]="jerry";
my[2]="Lamda";
my[3]="cristiano";
my[4]="Ronaldo";
my[5]="franky";
my[6]="lennings";
my[7]="jason";
my[8]="iniesta";
my[9]="jacob";
for (var i = 0; i < my.length; i++) {
	if(my[i].charAt(0)==='J'|| my[i].charAt(0)==='j'){
        console.log("Goodbye "+ my[i])
	}
	else{
		console.log("Hello "+ my[i])
	}
}