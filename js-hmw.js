// ფუნქცია დაწერს ლუწ რიცხვებს 1-დან 20-მდე
function numbers(){
    var n = 1;
    while(n<=20){
        if (n%2==0)
        document.write(n + "<br>" );
        n++;
    }
}

numbers();