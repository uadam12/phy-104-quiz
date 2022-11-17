import { Question } from "./question.js";

export const Result = props => {
  const result = props.quiz.result();
  const total = props.quiz.state.questions.length;
  const score = Math.round(result.corrects / total * 100);
  const corrects = result.corrects;
  const wrongs = result.inCorrects;
  const skips = total - (corrects + wrongs);
  const correction = result.wrongs.map(q => (<div>
    <hr />
    <Question data={q.question} />
    <p>Your answer: <span className="text-danger">{q.answer}</span></p>
    <p>Correct answer: <span className="text-success">{q.correct}</span></p>
  </div>));
  
  return (<div className='card m-3'>
    <h1 className="card-header text-primary">Your Result</h1>
    
    <div className="card-body text-start">
	<h3 className="text-info">You score: {score}%</h3>
	<p>You answered {corrects} question(s) correctly, {wrongs} question(s) wrongly and skip {skips} question(s).</p>
	
	<h2 className="text-center text-success">Correction</h2>
	{correction}
    </div>

    <div className="card-footer">
	<button onClick={() => props.quiz.reset()} className="btn btn-primary">Try again</button>
    </div>
  </div>);
}
