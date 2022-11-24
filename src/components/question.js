import { text } from "../text.js";

export const Question = props => {
  const stms = props.data.statement;
  let statements = ""
  
  if(stms) 
    statements = stms.map(stm => (
      <li>{ text(stm) }</li>
    ));
  return (<div className="text-start">
  <h3>{ text(props.data.question) }</h3>
  <ol type="I">{statements}</ol>
</div>);
}
