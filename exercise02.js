for (var i=1;i<=10;i++){
	var riga = "";
	for (var j=1;j<=10;j++){
		valore = i*j;
		if (j!==10){
		riga = riga + valore + "," + "\t";
			}
			else riga = riga + valore + "\t";
		}
		console.log(riga);
}