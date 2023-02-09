function changemoney(){
    let Amount=document.getElementById('amount').value;
    let f=document.getElementById('from').value;
    let t=document.getElementById('to').value;
    let Result;
    if (f == "VND" && t == "USD"){
        Result="Result:"+ (Amount/23000)+"$"
    }
    else {
        if (f == "USD" && t == "VND"){
            Result="Result:"+ (Amount*23000)+"Đ"
        }
        else{
            if (f == "VND" && t == "VND"){
                Result="Result:"+ Amount + "Đ"    
            }
           else{ Result="Result:"+ Amount + "$"}
        }
    }
    document.getElementById('r').innerHTML= Result
}
