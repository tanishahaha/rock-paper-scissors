let score=JSON.parse(localStorage.getItem('score'))||{
  user:0,
  computer:0
};
scoreRefresh();

function scoreRefresh(){
document.querySelector('.score').innerHTML='You Won : ' +score.user+' Times, Computer Won : '+score.computer+' Times.';
}

document.querySelector('.reset_btn').addEventListener("click",()=>{
  score={
    user:0,
    computer:0
  }
  scoreRefresh();
});

function pass(user_move){
  let result;

  let move='';
  const comp_move=Math.random();
  if(comp_move>=0 && comp_move<1/3){
    move='rock';
  }
  else if(comp_move>=1/3 && comp_move<2/3){
    move='paper';
  }
  else if(comp_move>=2/3 && comp_move<1){
    move='scissors';
  }

  if(user_move==='rock' && move==='rock'){
    result='Tie'
  }
  else if(user_move==='rock' && move==='paper'){
    result='You Loose';
  }
  else if(user_move==='rock' && move==='scissors'){
    result='You Win';
  }
  else if(user_move==='paper' && move==='paper'){
    result='Tie';
  }
  else if(user_move==='paper' && move==='rock'){
    result='You Win';
  }
  else if(user_move==='paper' && move==='scissors'){
    result='You Loose';
  }
  else if(user_move==='scissors' && move==='scissors'){
    result='Tie';
  }
  else if(user_move==='scissors' && move==='paper'){
    result='You Win';
  }
  else if(user_move==='scissors' && move==='rock'){
    result='You Loose';
  }
  
  if(result==='You Win'){
    score.user++;
  }else{
    score.computer++;
  }
  // alert(`You Choose ${user_move}, Computer Choose ${move}\n Hence ${result}`)
  
  scoreRefresh();
  
  localStorage.setItem('score',JSON.stringify(score));

  console.log(result)
  document.querySelector('.result').innerHTML=result;
  document.querySelector('.youchose').innerHTML='You : '+user_move;
  document.querySelector('.compchose').innerHTML='Computer : '+move;
}