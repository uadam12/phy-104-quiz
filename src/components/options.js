import { text } from "../text.js";

export const Options = props => {
  const data = props.quiz.getOptions();
  const options = Object.keys(data.options).map(opt => {
     const option = data.options[opt];
     let item = "list-group-item";
     
     if(opt === data.choosen)
	item += " active";
     return <li onClick={()=> props.quiz.selectAnswer(opt)} className={item}>{opt.toUpperCase()}. { text(option) }</li>;
  }); 
  return (<ol type="A" className="list-group text-start">
    {options}
</ol>);
}
