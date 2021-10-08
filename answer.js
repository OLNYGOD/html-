//製作問答程式

var questions = [
    {
        prompt:"香蕉是什麼顏色?\n(a)紅色\n(b)綠色\n(c)黃色",
        answer:"c"
    },
    {
        prompt:"草莓是什麼顏色?\n(a)紅色\n(b)紫色\n(c)黃色",
        answer:"c"
    },
    {
        prompt:"1公尺等於幾公分?\n(a)1\n(b)10\n(c)100",
        answer:"c"
    }
]

var scroe = 0;
for( var i=0; i<questions.length; i++){
    var input = prompt(questions[i].prompt);
    if(input == questions[i].answer){
        alert("答對了")
        scroe++
    }else{
        alert("答錯了")
    }
}document.write("恭喜答對"+scroe+"題，共得"+scroe+"分。")