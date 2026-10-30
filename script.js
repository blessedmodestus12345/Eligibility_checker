function myFunction(){
    let voteable;
    let inputData = document.getElementById("age").value;
    let age = Number(inputData);
    if(age>=18){
        voteable = "Eligible to vote";
    }else if(age<18){
        voteable = "Not eligible to vote";
    }else{
        voteable = "invalid input";
    }
    document.getElementById("demo").innerHTML = voteable;
    }