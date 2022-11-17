export const Question = props => {
  const stms = props.data.statement;
  let statements = ""
  
  if(stms) 
    statements = stms.map(stm => (
      <li>{stm}</li>
    ));
  return (<div className="text-start">
  <h3>{props.data.question}</h3>
  <ol type="I">{statements}</ol>
</div>);
}
