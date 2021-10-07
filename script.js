//密碼檢驗程式

var password = 123456;
var input;
var entey_count = 0;
var entey_limit = 3;
var out_of_limit = false;

while(password != input && !out_of_limit){
    entey_count++
    if(entey_count <= entey_limit)
    {
        input = prompt("請輸入密碼")
}
    else{
        out_of_limit = true
    }
}
if(out_of_limit){
    alert("超出輸入次數")
}else{alert("登入成功")}
