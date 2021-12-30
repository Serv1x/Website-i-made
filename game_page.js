player1_name1 = localStorage.getItem("player1_name");
player2_name2 = localStorage.getItem("player2_name");

player1_score1 = 0;
player2_score2 = 0;

player1_turn1 = 0;
player2_turn2 = 0;

//limit_to_points = 5

answer_turn = "player_2"

document.getElementById("player1_name").innerHTML = player1_name1 + " : ";
document.getElementById("player2_name").innerHTML = player2_name2 + " : ";

document.getElementById("player1_score").innerHTML = player1_score1;
document.getElementById("player2_score").innerHTML = player2_score2;

document.getElementById("player_question").innerHTML = " Question Turn - " + player1_name1;
document.getElementById("player_answer").innerHTML = " Answer Turn - " + player2_name2;

function send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("word in lowerCase = ") + word;

    charAt1 = word.charAt(1);
    console.log(charAt1);

    length_divide_2 = Math.floor(word.length / 2);
    charAt2 = word.charAt(length_divide_2);
    console.log(charAt2);

    length_minus_1 = word.length - 1;
    charAt3 = word.charAt(length_minus_1);
    console.log(charAt3);

    remove_charAt1 = word.replace(charAt1, "_");
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");
    console.log(remove_charAt3);


    question_word = "<h4 id='word_display'> Q. " + remove_charAt3 + "</h4>";
    input_box = "<br><p id='answer123'>Answer : </p><input type='text' id='input_check_box'>";
    check_button = "<br><br><button id = 'check_button' class='btn btn-info' onclick='check()'>Check</button>";
    Winner_display = "<h4 id='Winner_display' style='display:none'></h4>"
    next_button = "<button id = 'next_button1' class='btn btn-info' onclick='next()' style='display:none'>Next</button> ";
    answer_display = "<h3 id='Answer_display'></h3>";
   // next_button.style.display="none";
    row = question_word + input_box + check_button + Winner_display + next_button + answer_display;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";

    var o = document.getElementById("send_you_word");
    o.style.display = "none";

    var p = document.getElementById("word");
p.style.display = "none";

var q = document.getElementById("send_button");
q.style.display = "none";


    
}

function check(){






answer_typed = document.getElementById("input_check_box").value;
var x = document.getElementById("check_button")
  if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }


    if (answer_typed.toLowerCase() == word.toLowerCase()){
document.getElementById("Answer_display").innerHTML = "Correct";
if(answer_turn == "player_1")
{
    player1_score1 = player1_score1 + 1;
    document.getElementById("player1_score").innerHTML = player1_score1;

}
if(answer_turn == "player_2")
{
    player2_score2 = player2_score2 + 1;
    document.getElementById("player2_score").innerHTML = player2_score2;
    
}
    }




    if (answer_typed.toLowerCase() != word.toLowerCase()){
document.getElementById("Answer_display").innerHTML = "Wrong";
if (answer_turn == "player_1")
{
    player1_score1 = player1_score1 - 1;
    document.getElementById("player1_score").innerHTML = player1_score1;
    
}
if (answer_turn == "player_2")
{
    player2_score2 = player2_score2 - 1;
    document.getElementById("player2_score").innerHTML = player2_score2;
    
}
    }

    var t = document.getElementById("next_button1");
    t.style.display = "block";



    

    

        

   
    

}
  




     
            




function next(){



    if (answer_turn == "player_1")
    {

        document.getElementById("player_question").innerHTML = " Question Turn - " + player1_name1;
        document.getElementById("player_answer").innerHTML = " Answer Turn - " + player2_name2;

        answer_turn = "player_2";
       

        
    }else if (answer_turn == "player_2")
    {

        document.getElementById("player_question").innerHTML = " Question Turn - " + player2_name2;
        document.getElementById("player_answer").innerHTML = " Answer Turn - " + player1_name1;
        answer_turn = "player_1";
        


        
        
    }


var a = document.getElementById("word_display");
a.style.display = "none";

var b = document.getElementById("input_check_box");
b.style.display = "none";

var c = document.getElementById("check_button");
c.style.display = "none";

var d = document.getElementById("next_button1");
d.style.display = "none";

var e = document.getElementById("Answer_display");
e.style.display = "none";

var f = document.getElementById("answer123");
f.style.display = "none";

var o = document.getElementById("send_you_word");
    o.style.display = "block";

    var p = document.getElementById("word");
p.style.display = "block";

var q = document.getElementById("send_button");
q.style.display = "block";


}

