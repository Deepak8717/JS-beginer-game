function playGame(){
    var userInput = confirm("Are you sure you want to play the game ?");
    if(userInput == 1){
        var num = prompt("Type a number between 1 to 10");
        if(isNaN(num)){
            alert("This is not a number. Bye!");
        }
        else if(num <1 || num>10){
            alert("The number must be between 1 to 10. GoodBye");
        }
        else{
            var guess = 1+Math.floor(Math.random())*10;
            test(num, guess);
        }
    }
}
function test(n,g){
    for(i=1;i<4; i++){
        if(n==g){
            alert("You won");
            break;
        }
        else if(i==3){
            alert("No more try. The number was"+g);
        }
        else if(n<g){
           n = prompt("low! try a little higher");
        }
        else{
           n= prompt("high! try a little low");
        }
    }
}