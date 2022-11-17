export const Timer = props => {
   const progBar = {
     width: props.percentageLeft+"%",
     height: "5px"
   }
   return (<div className="progress" style={{height:"5px"}}>
  <div className="progress-bar" style={progBar}></div>
</div>);
}
