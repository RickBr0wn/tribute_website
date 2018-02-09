$(document).ready(function(){
    let i = 1;
    setInterval(function(){
        let fact = facts[i];
        document.getElementById('quickFact').innerHTML = fact;
        i++
        if(i >= facts.length){
            i = 0;
        }
    }, 5000);
}); // End of DOCUMENT.READY