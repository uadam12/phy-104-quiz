export const Welcome = props => (<div className="card m-3">
  <h1 className="card-header text-primary">{props.quiz.title} Mock</h1>

  <div className="card-body">
    <p>This Quiz application consists of {props.quiz.state.questions.length} multiple-choice questions to be answered in {props.quiz.allowedTime/60} minutes. The questions are our <b>{props.quiz.title} assignment/tutorial questions</b> for us to study for the upcoming exam. Good luck!!!</p>
  </div>

  <div className="card-footer">
    <button onClick={() => props.quiz.start()} className="btn btn-primary">Start</button>
  </div>
</div>);
