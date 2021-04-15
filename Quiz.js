class Quiz {
    constructor(){}
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        contestant = new Contestant();
        var contestantCountRef = await database.ref('contestantCount').once("value");
        if(contestantCountRef.exists()){
          contestantCount = contestantCountRef.val();
          contestant.getCount();
        }
        question = new Question()
        question.display();
      }
    }
  
    play(){
      this.title.hide();
      this.input1.hide();
      this.button.hide();
      this.input2.hide();
      background("pink")
      this.title.html(" Game Results");
      this.title.position(330, 0);
       getContestantInfo( ) 
     if(allcontestant!== undefined ){
  fill ("blue")
  textSize(20)
  text("Note: names will get highlighted as red if answer is wrong and green if answer is correct",130,230)
     }
      for(var plr in allContestants){
        var correctAns = "3"
        if (correctAns === allContestants[plr].answer){
          fill ("green")
        }
        else{
          fill("red")
        }
      }
    }
  
  }
  