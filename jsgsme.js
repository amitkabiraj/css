
let sign = "X";
let display = document.getElementById("player")
function printx(number)
{
    let boxelement = document.getElementById("b" + number);
    console.log(boxelement);
    if(boxelement.innerText == "")
     {  boxelement.innerHTML = sign;
         winer(); 
         checksign();
         display.innerHTML="<font size='5'> <b>" + sign + " It's your Turn</b></font>";
     }
}

function checksign()
{
    if(sign == "X")  sign = "O";
   
    else
          sign = "X";    
    
}

function getbox(no)
{
 return document.getElementById("b" + no).innerHTML;
}

function checkmove(a,b,c,m)
{
  if (getbox(a)== m && getbox(b)== m && getbox(c)== m)
  return true;
  else
  return false;
}

function winer()
{
    if(checkmove(1,2,3,sign) || checkmove(4,5,6,sign) || checkmove(7,8,9,sign) || checkmove(1,4,7,sign) || checkmove(2,5,8,sign) || checkmove(3,6,9,sign) || checkmove(1,5,9,sign) || checkmove(3,5,7,sign))
    {
        display.innerHTML = "<font size ='5'<b>" + sign + "Win the match</b></font>"
        for(let i=1; i<=9; i++)
        {
            document.getElementById("b" + i).innerHTML="";
        }
        throw "game end"
    }
    else
    {
        if(getbox(1)!="" && getbox(2)!="" && getbox(3)!="" && getbox(4)!="" && getbox(5)!="" && getbox(6)!="" && getbox(7)!="" && getbox(8)!="" && getbox(9)!="")
        {
              display.innerHTML ="<font sixe ='5'> <b> It's a Tie </b></font>";
              for(let i=1; i<=9; i++)
              {
                  document.getElementById("b" + i).innerHTML="";
              }
              throw "It's a tie" 
        }
    }
}