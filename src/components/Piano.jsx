import TonesButton from "./RemixButtons/TonesButton";
import classes from "./Piano.module.css"
export default function Piano() {
  return (
    <div classNameName="piano">
      <div classNameName={classes['piano-keys']}>
        
      <TonesButton  color={'white'} keybutton={"c3"}/>
      <TonesButton  color={'black'} keybutton={"db3"} />
      <TonesButton  color={'white'} keybutton={"d3"} />
      <TonesButton  color={'black'} keybutton={"eb3"} />
      <TonesButton  color={'white'} keybutton={"e3"} />
      <TonesButton  color={'white'} keybutton={"f3"} />
      <TonesButton  color={'black'} keybutton={"gb3"} />
      <TonesButton  color={'white'}  keybutton={"g3"} />
      <TonesButton  color={'black'}  keybutton={"ab3"} />
      <TonesButton  color={'white'}  keybutton={"a3"} />
      <TonesButton   color={'black'} keybutton={"bb3"} />
      <TonesButton   color={'white'} keybutton={"b3"} />

      <TonesButton color={'white'} keybutton={"c4"} />
      <TonesButton color={'black'} keybutton={"db4"} />
      <TonesButton color={'white'} keybutton={"d4"} />
      <TonesButton color={'black'} keybutton={"eb4"} />
      <TonesButton color={'white'} keybutton={"e4"} />
      <TonesButton color={'white'} keybutton={"f4"} />
      <TonesButton color={'black'} keybutton={"gb4"} />
      <TonesButton color={'white'} keybutton={"g4"} />
      <TonesButton color={'black'} keybutton={"ab4"} />
      <TonesButton color={'white'} keybutton={"a4"} />
      <TonesButton color={'black'} keybutton={"bb4"} />
      <TonesButton color={'white'} keybutton={"b4"} />
                      
      <TonesButton color={'white'} keybutton={"c5"} />
      <TonesButton color={'black'} keybutton={"db5"} />
      <TonesButton color={'white'} keybutton={"d5"} />
      <TonesButton color={'black'} keybutton={"eb5"} />
      <TonesButton color={'white'} keybutton={"e5"} />
      <TonesButton color={'white'} keybutton={"f5"} />
      <TonesButton color={'black'} keybutton={"gb5"} />
      <TonesButton color={'white'} keybutton={"g5"} />
      <TonesButton color={'black'} keybutton={"ab5"} />
      <TonesButton color={'white'} keybutton={"a5"} />
      <TonesButton color={'black'} keybutton={"bb5"} />
      <TonesButton color={'white'} keybutton={"b5"} />
      </div>
    </div>
  );
}
