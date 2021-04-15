class Question {

    constructor() {
      this.title = createElement('h1')
      this.input1 = createInput("Enter Your Name Here....");
      this.input2 = createInput("Enter Correct Option No..");
      this.button = createButton('Submit');
      this.question = createElement('h3');
      this.option1 = createElement('h4');
      this.option2 = createElement('h4');
      this.option3 = createElement('h4');
      this.option4 = createElement('h4');
    }
  
    hide(){
      this.title.hide();
      this.input1.hide();
      this.button.hide();
      this.input2.hide();
    }
  
    display(){
      this.title.html("MyQuiz Game");
      this.title.position(330, 0);
  
      this.question.html("Question:- There is an ancient invention, still used in some parts of the world today,<br> that allows people to see through walls. What is it" );
      this.question.position(150, 100);
      this.option1.html("1: telescope " );
      this.option1.position(150, 140);
      this.option2.html("2: invisibility cloak" );
      this.option2.position(150, 160);
      this.option3.html("3: window " );
      this.option3.position(150, 180);
      this.option4.html("4: mirror/glass" );
      this.option4.position(150, 200);
  
      this.input1.position(200, 250);
      this.input2.position(400, 250);
      this.button.position(350, 300);
  
      this.button.mousePressed(()=>{
        this.title.hide();
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
        contestant.name = this.input1.value();
        contestant.answer = this.input2.value();
        contestantCount+=1;
        contestant.index = contestantCount;
        contestant.update();
        contestant.updateCount(contestantCount);
      });
    }
  }
  