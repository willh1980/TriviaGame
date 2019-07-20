// Create Variables for the time counters in each questions
var time =10

var time2 =10

var time3 =10

var time4 =10

var time5 =10

var time6 =10

var time7 =10

var time8 =10

//Create a Variable to restart the game
var restart;

//Create an Object Variable Array for all of the questions and conjoining answers.
var questions={
  question:["What Franchise Has The Most NBA Championships?", "Who Has The Most Rushing Yards In NFL History?", "Who Has The Most Rebounds In NBA History?", "Who Has The Most Sacks In An NFL Season", "Who Has The Most Hits In MLB History?", "Who Has The Most Goals In NHL History?", "Who Has The Most Assists In NBA History?", "Who Has The Most Passing Touchdowns In NFL History?"],
  badAnswer1:["The Los Angeles Lakers", "Barry Sanders", "Dennis Rodman", "Deacon Jones", "Babe Ruth", "Gordie Howe", "Magic Johnson", "Drew Brees"],
  badAnswer2: ["The Chicago Bulls", "Eric Dickerson", "Bill Russell", "Bruce Smith", "Hank Aaron", "Alex Ovechkin", "Steve Nash", "Tom Brady"],
  badAnswer3: ["The San Antonio Spurs", "Walter Payton", "Kareem Abdul Jabbar", "Reggie White", "Barry Bonds", "Brett Hull", "Jason Kidd", "Brett Farve"],
  correct: ["The Boston Celtics", "Emmitt Smith", "Wilt Chamberlain", "Michael Strahan", "Pete Rose", "Wayne Gretzky", "John Stockton", "Peyton Manning"],
}




//Setup function for start page
  window.onload = function restart() {
    //Create html to load to main div for start page
    $("#main").html("<p><br><br><br><br><br><button id=start>START!</button></p>");
     
     //Create variables for correct and wrong guesses total 
      var questionsRight =0

      var questionsWrong =0

      
      //Create a function for the start of the game after pressing start button and uploading of the first question.
      $("#start").on('click', function () {
          $("#main").html("<h2 id=timeremain>Time Remaining : <span id=time>10</span> seconds</h2><p><br><br><br><span id=question>" + questions.question[0] + "</span><br><br><br><br><br><button class=choice id=choice1>" + questions.badAnswer1[0] + "</button><br><br><button class=choice id=choice2>" + questions.badAnswer2[0] + "</button><br><br><button class=choice id=choice3>" + questions.correct[0] + "</button><br><br><button class=choice id=choice4>" + questions.badAnswer3[0] + "</button></p>")
          
          //Create a variable for when time expires on player's guess, setup timed call for uploading of second question function. 
          //Add to questions wrong function.
          var timesUp = function() {
            $("#main").html("<p id=TUcomment>Oooops! Times Up! The correct answer is the <span id=Answer>" + questions.correct[0] + "</span>. <br><br><br><br></p><img src='https://media.giphy.com/media/l378Aotu8uRBKYWHe/source.gif'>")
            setTimeout(secondQuestion, 1000*6)
            clearInterval(countDown)
            questionsWrong++;
          }

          //set 10 second timeout for times up function
          var timeExpire = setTimeout(timesUp, 1000*10)

          //set timer variable for 10 second countdown clock
          var timer = function() {
            time--;
            $("#time").html(time)
          }

          //set interval for each second countdown of clock
          var countDown = setInterval(timer, 1000)
          
          //on player click, setup functions for wrong guess and correct guess. Setup timed call for fuction of 2nd question.
          $(".choice").on('click', function () {  
            var rightAnswer = function() {
              $("#main").html("<p id=TUcomment>Congradulations! <span id=Answer>" + questions.correct[0] + "</span> is the correct answer!!!! <br><br><br><br></p><img src='https://media.giphy.com/media/26tknCqiJrBQG6bxC/source.gif'>")
              setTimeout(secondQuestion, 1000*5)
              questionsRight++;
              clearInterval(countDown)
            }
            
            var wrongAnswer = function() {
              $("#main").html("<p id=TUcomment>Oooops! That is incorrect!!! The correct answer is <span id=Answer>" + questions.correct[0] + "</span>. <br><br><br><br></p><img src='https://media.giphy.com/media/hPPx8yk3Bmqys/source.gif'>")
              setTimeout(secondQuestion, 1000*5)
              clearTimeout(timeExpire)
              questionsWrong++;
              clearInterval(countDown)
            }

            //setup if else statement if button value is equal to correct answer or not, call correct function based on guess.
            if(this.innerHTML === questions.correct[0]) {
              setTimeout(rightAnswer, 200)
              clearTimeout(timeExpire)
            }
            
            else {
              setTimeout(wrongAnswer, 200)
              clearTimeout(timeExpire)
            }
          
          })
        
      })

      //Setup function for 2nd question and repeat steps within first question, repeat all functions. 
      //change names of functions from 1st question so system is not confused. Repeat steps for all 8 questions
      var secondQuestion = function() {
        $("#main").html("<h2 id=timeremain>Time Remaining : <span id=time2>10</span> seconds</h2><p><br><br><br><span id=question>" + questions.question[1] + "</span><br><br><br><br><br><button class=choice20 id=choice1>" + questions.correct[1] + "</button><br><br><button class=choice20 id=choice2>" + questions.badAnswer2[1] + "</button><br><br><button class=choice20 id=choice3>" + questions.badAnswer1[1] + "</button><br><br><button class=choice20 id=choice4>" + questions.badAnswer3[1] + "</button></p>")
      
        var timesUpSecond = function() {
          $("#main").html("<p id=TUcomment>Oooops! Times Up! The correct answer is <span id=Answer>" + questions.correct[1] + "</span>. <br><br><br><br></p><img src='https://media.giphy.com/media/l378Aotu8uRBKYWHe/source.gif'>")
          setTimeout(thirdQuestion, 1000*4)
          questionsWrong++;
          clearInterval(countDown2)
        }
        
        var timeExpireSecond = setTimeout(timesUpSecond, 1000*10)

        var timer2 = function() {
            time2--;
            $("#time2").html(time2)
          }

          var countDown2 = setInterval(timer2, 1000)


        $(".choice20").on('click', function () {  
          var rightAnswerSecond = function() {
            $("#main").html("<p id=TUcomment>Congradulations! <span id=Answer>" + questions.correct[1] + "</span> is the correct answer!!!! <br><br><br><br></p><img src='https://media.giphy.com/media/26FPnsRww5DbqoPuM/giphy.gif'>")
            setTimeout(thirdQuestion, 1000*4)
            questionsRight++;
            clearInterval(countDown2)
          }

          var wrongAnswerSecond = function() {
            $("#main").html("<p id=TUcomment>Oooops! That is incorrect!!! The correct answer is <span id=Answer>" + questions.correct[1] + "</span>. <br><br><br><br></p><img src='https://media.giphy.com/media/l396QUa4k8rFVK2xW/source.gif'>")
            setTimeout(thirdQuestion, 1000*4)
            questionsWrong++;
            clearInterval(countDown2)
          }
          
          if(this.innerHTML === questions.correct[1]) {
            setTimeout(rightAnswerSecond, 200)
            clearTimeout(timeExpireSecond)
          }

          else {
            setTimeout(wrongAnswerSecond, 200)
            clearTimeout(timeExpireSecond)
          }

        }) 
      }

      var thirdQuestion = function() {
        $("#main").html("<h2 id=timeremain>Time Remaining : <span id=time3>10</span> seconds</h2><p><br><br><br><span id=question>" + questions.question[2] + "</span><br><br><br><br><br><button class=choice30 id=choice1>" + questions.badAnswer1[2] + "</button><br><br><button class=choice30 id=choice2>" + questions.badAnswer2[2] + "</button><br><br><button class=choice30 id=choice3>" + questions.badAnswer3[2] + "</button><br><br><button class=choice30 id=choice4>" + questions.correct[2] + "</button></p>")


        var timesUpThird = function() {
          $("#main").html("<p id=TUcomment>Oooops! Times Up! The correct answer is the <span id=Answer>" + questions.correct[2] + "</span>. <br><br><br><br></p><img src='https://media.giphy.com/media/l378Aotu8uRBKYWHe/source.gif'>")
          setTimeout(fourthQuestion, 1000*4);
          questionsWrong++;
          clearInterval(countDown3);
        }
        
        var timeExpireThird = setTimeout(timesUpThird, 1000*10)

        var timer3 = function() {
            time3--;
            $("#time3").html(time3)
          }

          var countDown3 = setInterval(timer3, 1000)
        
        $(".choice30").on('click', function () {
          var rightAnswerThird = function() {
            $("#main").html("<p id=TUcomment>Congradulations! <span id=Answer>" + questions.correct[2] + "</span> is the correct answer!!!! <br><br><br><br></p><img src='https://media.giphy.com/media/3oEdv3Ul8g6BCngQ36/source.gif'>")
            setTimeout(fourthQuestion, 1000*4);
            questionsRight++;
            clearInterval(countDown3);
          }

          var wrongAnswerThird = function() {
            $("#main").html("<p id=TUcomment>Oooops! That is incorrect!!! The correct answer is <span id=Answer>" + questions.correct[2] + "</span>. <br><br><br><br></p><img src='https://media.giphy.com/media/l4pLY0zySvluEvr0c/source.gif'>")
            setTimeout(fourthQuestion, 1000*4)
            questionsWrong++;
            clearInterval(countDown)
          }
          
          if(this.innerHTML === questions.correct[2]) {
            setTimeout(rightAnswerThird, 200)
            clearTimeout(timeExpireThird)
          }
          else {
            setTimeout(wrongAnswerThird, 200)
            clearTimeout(timeExpireThird)
          }
          
        })
      }

      var fourthQuestion = function() {
        $("#main").html("<h2 id=timeremain>Time Remaining : <span id=time4>10</span> seconds</h2><p><br><br><br><span id=question>" + questions.question[3] + "</span><br><br><br><br><br><button class=choice40 id=choice1>" + questions.badAnswer1[3] + "</button><br><br><button class=choice40 id=choice2>" + questions.badAnswer2[3] + "</button><br><br><button class=choice40 id=choice3>" + questions.correct[3] + "</button><br><br><button class=choice40 id=choice4>" + questions.badAnswer3[3] + "</button></p>")

        var timesUpFourth = function() {
          $("#main").html("<p id=TUcomment>Oooops! Times Up! The correct answer is the <span id=Answer>" + questions.correct[3] + "</span>. <br><br><br><br></p><img src='https://media.giphy.com/media/l378Aotu8uRBKYWHe/source.gif'>")
          setTimeout(fifthQuestion, 1000*4)
          questionsWrong++;
          clearInterval(countDown4)
        }

        var timeExpireFourth = setTimeout(timesUpFourth, 1000*10)

        var timer4 = function() {
            time4--;
            $("#time4").html(time4)
          }

          var countDown4 = setInterval(timer4, 1000)

        
        $(".choice40").on('click', function () {   
            
          var rightAnswerFourth = function() {
            $("#main").html("<p id=TUcomment>Congradulations! <span id=Answer>" + questions.correct[3] + "</span> is the correct answer!!!! <br><br><br><br></p><img src='https://media.giphy.com/media/3oEdv3Ul8g6BCngQ36/source.gif'>")
            setTimeout(fifthQuestion, 1000*4)
            questionsRight++;
            clearInterval(countDown4)
          }

          var wrongAnswerFourth = function() {
            $("#main").html("<p id=TUcomment>Oooops! That is incorrect!!! The correct answer is <span id=Answer>" + questions.correct[3] + "</span>. <br><br><br><br></p><img src='https://media.giphy.com/media/hPPx8yk3Bmqys/source.gif'>")
            setTimeout(fifthQuestion, 1000*4)
            questionsWrong++;
            clearInterval(countDown4)
          }
            
          if(this.innerHTML === questions.correct[3]) {
            setTimeout(rightAnswerFourth, 200)
            clearTimeout(timeExpireFourth)
          }
          else {
            setTimeout(wrongAnswerFourth, 200)
            clearTimeout(timeExpireFourth)
          }

            
        })
      }

      var fifthQuestion = function() {
        $("#main").html("<h2 id=timeremain>Time Remaining : <span id=time5>10</span> seconds</h2><p><br><br><br><span id=question>" + questions.question[4] + "</span><br><br><br><br><br><button class=choice50 id=choice1>" + questions.correct[4] + "</button><br><br><button class=choice50 id=choice2>" + questions.badAnswer2[4] + "</button><br><br><button class=choice50 id=choice3>" + questions.badAnswer1[4] + "</button><br><br><button class=choice50 id=choice4>" + questions.badAnswer3[4] + "</button></p>")
        
        var timesUpFifth = function() {
          $("#main").html("<p id=TUcomment>Oooops! Times Up! The correct answer is <span id=Answer>" + questions.correct[4] + "</span>. <br><br><br><br></p><img src='https://media.giphy.com/media/l378Aotu8uRBKYWHe/source.gif'>")
          setTimeout(sixthQuestion, 1000*4)
          questionsWrong++;
          clearInterval(countDown5)
        }

        var timeExpireFifth = setTimeout(timesUpFifth, 1000*10)

        var timer5 = function() {
            time5--;
            $("#time5").html(time5)
          }

        var countDown5 = setInterval(timer5, 1000)
        
        
        $(".choice50").on('click', function () {    
          
          var rightAnswerFifth = function() {
            $("#main").html("<p id=TUcomment>Congradulations! <span id=Answer>" + questions.correct[4] + "</span> is the correct answer!!!! <br><br><br><br></p><img src='https://media.giphy.com/media/26tknCqiJrBQG6bxC/source.gif'>")
            setTimeout(sixthQuestion, 1000*4)
            questionsRight++;
            clearInterval(countDown5)
          }

          var wrongAnswerFifth = function() {
            $("#main").html("<p id=TUcomment>Oooops! That is incorrect!!! The correct answer is <span id=Answer>" + questions.correct[4] + "</span>. <br><br><br><br></p><img src='https://media.giphy.com/media/l396QUa4k8rFVK2xW/source.gif'>")
            setTimeout(sixthQuestion, 1000*4)
            questionsWrong++;
            clearInterval(countDown5)
          }
          
          if(this.innerHTML === questions.correct[4]) {
            setTimeout(rightAnswerFifth, 200)
            clearTimeout(timeExpireFifth)
          }
          
          else {
            setTimeout(wrongAnswerFifth, 200)
            clearTimeout(timeExpireFifth)
          }
          
        })

      }

      var sixthQuestion = function() {
        $("#main").html("<h2 id=timeremain>Time Remaining : <span id=time6>10</span> seconds</h2><p><br><br><br><span id=question>" + questions.question[5] + "</span><br><br><br><br><br><button class=choice60 id=choice1>" + questions.badAnswer1[5] + "</button><br><br><button class=choice60 id=choice2>" + questions.badAnswer2[5] + "</button><br><br><button class=choice60 id=choice3>" + questions.correct[5] + "</button><br><br><button class=choice60 id=choice4>" + questions.badAnswer3[5] + "</button></p>")

        var timesUpSixth= function() {
          $("#main").html("<p id=TUcomment>Oooops! Times Up! The correct answer is <span id=Answer>" + questions.correct[5] + "</span>. <br><br><br><br></p><img src='https://media.giphy.com/media/l378Aotu8uRBKYWHe/source.gif'>")
          setTimeout(seventhQuestion, 1000*4)
          questionsWrong++;
          clearInterval(countDown6)
        }
        
        var timeExpireSixth = setTimeout(timesUpSixth, 1000*10)

        var timer6 = function() {
            time6--;
            $("#time6").html(time6)
          }

          var countDown6 = setInterval(timer6, 1000)

        $(".choice60").on('click', function () {    
          
          var rightAnswerSixth = function() {
            $("#main").html("<p id=TUcomment>Congradulations! <span id=Answer>" + questions.correct[5] + "</span> is the correct answer!!!! <br><br><br><br></p><img src='https://media.giphy.com/media/26tknCqiJrBQG6bxC/source.gif'>")
            setTimeout(seventhQuestion, 1000*4)
            questionsRight++;
            clearInterval(countDown6)
          }

          var wrongAnswerSixth = function() {
            $("#main").html("<p id=TUcomment>Oooops! That is incorrect!!! The correct answer is <span id=Answer>" + questions.correct[5] + "</span>. <br><br><br><br></p><img src='https://media.giphy.com/media/l4pLY0zySvluEvr0c/source.gif'>")
            setTimeout(seventhQuestion, 1000*4)
            questionsWrong++;
            clearInterval(countDown6)
          }
          
          if(this.innerHTML === questions.correct[5]) {
            setTimeout(rightAnswerSixth, 200)
            clearTimeout(timeExpireSixth)
          }
          
          else {
            setTimeout(wrongAnswerSixth, 200)
            clearTimeout(timeExpireSixth)
          }

          
        })
      }

      var seventhQuestion = function() {
        $("#main").html("<h2 id=timeremain>Time Remaining : <span id=time7>10</span> seconds</h2><p><br><br><br><span id=question>" + questions.question[6] + "</span><br><br><br><br><br><button class=choice70 id=choice1>" + questions.badAnswer1[6] + "</button><br><br><button class=choice70 id=choice2>" + questions.correct[6] + "</button><br><br><button class=choice70 id=choice3>" + questions.badAnswer2[6] + "</button><br><br><button class=choice70 id=choice4>" + questions.badAnswer3[6] + "</button></p>")

        var timesUpSeventh= function() {
          $("#main").html("<p id=TUcomment>Oooops! Times Up! The correct answer is the <span id=Answer>" + questions.correct[6] + "</span>. <br><br><br><br></p><img src='https://media.giphy.com/media/l378Aotu8uRBKYWHe/source.gif'>")
          setTimeout(eighthQuestion, 1000*4)
          questionsWrong++;
          clearInterval(countDown7)
        }
        
        var timeExpireSeventh = setTimeout(timesUpSeventh, 1000*10)

        var timer7 = function() {
            time7--;
            $("#time7").html(time7)
          }

        var countDown7 = setInterval(timer7, 1000)

        $(".choice70").on('click', function () {   
          
          var rightAnswerSeventh = function() {
            $("#main").html("<p id=TUcomment>Congradulations! <span id=Answer>" + questions.correct[6] + "</span> is the correct answer!!!! <br><br><br><br></p><img src='https://media.giphy.com/media/3oEdv3Ul8g6BCngQ36/source.gif'>")
            setTimeout(eighthQuestion, 1000*4)
            questionsRight++;
            clearInterval(countDown7)
          }

          var wrongAnswerSeventh = function() {
            $("#main").html("<p id=TUcomment>Oooops! That is incorrect!!! The correct answer is <span id=Answer>" + questions.correct[6] + "</span>. <br><br><br><br></p><img src='https://media.giphy.com/media/l396QUa4k8rFVK2xW/source.gif'>")
            setTimeout(eighthQuestion, 1000*4)
            questionsWrong++;
            clearInterval(countDown7)
          }
          
          if(this.innerHTML === questions.correct[6]) {
            setTimeout(rightAnswerSeventh, 200)
            clearTimeout(timeExpireSeventh)
          }
          else {
            setTimeout(wrongAnswerSeventh, 200)
            clearTimeout(timeExpireSeventh)
          }
          
        })
      }

      //In eight and final question setup call for final screen with the times up, right, and wrong answer functions.
      var eighthQuestion = function() {
        $("#main").html("<h2 id=timeremain>Time Remaining : <span id=time8>10</span> seconds</h2><p><br><br><br><span id=question>" + questions.question[7] + "</span><br><br><br><br><br><button class=choice80 id=choice1>" + questions.badAnswer1[7] + "</button><br><br><button class=choice80 id=choice2>" + questions.badAnswer2[7] + "</button><br><br><button class=choice80 id=choice3>" + questions.badAnswer3[7] + "</button><br><br><button class=choice80 id=choice4>" + questions.correct[7] + "</button></p>")

        var timesUpEighth= function() {
          $("#main").html("<p id=TUcomment>Oooops! Times Up! The correct answer is the <span id=Answer>" + questions.correct[7] + "</span>. <br><br><br><br></p><img src='https://media.giphy.com/media/l378Aotu8uRBKYWHe/source.gif'>")
          setTimeout(finalScreen, 1000*4)
          questionsWrong++;
          clearInterval(countDown8)
        }
        
        var timeExpireEighth = setTimeout(timesUpEighth, 1000*10)

        var timer8 = function() {
            time8--;
            $("#time8").html(time8)
          }

        var countDown8 = setInterval(timer8, 1000)
        
        $(".choice80").on('click', function () { 
          
          var rightAnswerEighth = function() {
            $("#main").html("<p id=TUcomment>Congradulations! <span id=Answer>" + questions.correct[7] + "</span> is the correct answer!!!! <br><br><br><br></p><img src='https://media.giphy.com/media/26FPnsRww5DbqoPuM/giphy.gif'>")
            setTimeout(finalScreen, 1000*4)
            questionsRight++;
            clearInterval(countDown8)
          }

          var wrongAnswerEighth = function() {
            $("#main").html("<p id=TUcomment>Oooops! That is incorrect!!! The correct answer is <span id=Answer>" + questions.correct[7] + "</span>. <br><br><br><br></p><img src='https://media.giphy.com/media/hPPx8yk3Bmqys/source.gif'>")
            setTimeout(finalScreen, 1000*4)
            questionsWrong++;
            clearInterval(countDown8)
          }
          
          if(this.innerHTML === questions.correct[7]) {
            setTimeout(rightAnswerEighth, 200)
            clearTimeout(timeExpireEighth)
          }
          else {
            setTimeout(wrongAnswerEighth, 200)
            clearTimeout(timeExpireEighth)
          }

        })
      }

      //Setup game over function on final scree with quiz results and timeout to restart game function.
      var finalScreen = function () {
        $("#main").html("<p id=TUcomment>Game Is Over!!!!<br>Thank You For Playing.<br><br><br>Questions Right:    " + questionsRight + "<br><br><br>Questions Wrong:    " + questionsWrong + "<br><br><br><br><span id=newgame>New Game Loading. . . .</span></p>")

        setTimeout(restart, 1000*6)

      }
  }  