import data from "../questions.json";
import React from "react";
import { Result } from "./result.js";
import { Welcome } from "./welcome.js";
import { QuizComp } from "./quizComp.js";

export default class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.allowedTime = 1200;
    this.title = "PHY 104";
    this.totalQuestions = 40;
    this.state = {
        started:false,
        submitted:false,
        timeleft: this.allowedTime,
        index: 0,                                         questions: data.sort((a,b)=> 0.5 - Math.random()).slice(0, this.totalQuestions),
	answers:[]
    };
  }
  reset() {
    this.setState({
        started:false,
        submitted:false,
        timeleft: this.allowedTime,
        index: 0,                                         questions: data.sort((a,b)=> 0.5 - Math.random()).slice(0, this.totalQuestions),
	answers:[]                                    });
  }

  timeleft = () => this.state.timeleft / this.allowedTime * 100;

  start() {
      this.setState({started:true});
      this.started = window.setInterval(()=> {
	  const timeleft = this.state.timeleft;
	
	  if(timeleft <= 0)
	      return this.submit();

          this.setState({
	      timeleft: this.state.timeleft-1
	  });
      }, 1000);
  }
  submit() {
      this.setState({
         submitted:true
      });
      window.clearInterval(this.started);
  }
  getQuestion(i=this.state.index) {
    const data = this.state.questions[i];
    return {
	question: data.question,
	statement: data.statement
    }
  }
  getOptions(i=this.state.index) {
     const data = this.state.questions[i];
     return {
	options: data.options,
	choosen: this.state.answers[i]
     }
  }
  selectAnswer(ans) {
     const answers = this.state.answers;
     answers[this.state.index] = ans;
     this.setState({answers:answers});

     const gotoNext = window.setTimeout(()=>{
	this.next();
	window.clearTimeout(gotoNext);
     },500);
  }
  lastQuestion() {
    return this.state.index >= this.state.questions.length-1;
  }
  prev() {
     if(this.state.index <= 0) return;
     this.setState({
	index: this.state.index - 1
     });
  }
  next() {
     if(this.lastQuestion()) return;
     this.setState({                                      index: this.state.index + 1
     });                                            }
  result() {
     const wrongs = [];
     let corrects = 0;

     for(let i in this.state.answers) {
	const answer = this.state.answers[i];
	const q = this.state.questions[i];
	const correct = q.correct;
	const options = q.options;
	
	if(answer === correct)
	   corrects++;
	else {
	   wrongs.push({
              question: this.getQuestion(i),
	      answer: options[answer],
	      correct: options[correct]
	   });
	}
     }
     
     return {
	corrects: corrects,
	inCorrects: wrongs.length,
	wrongs: wrongs
     };
  }
  render() {
    if(this.state.submitted)
       return <Result quiz={this} />;
    if(this.state.started)
       return <QuizComp quiz={this} />;

    return <Welcome quiz={this} />;
  }
}
