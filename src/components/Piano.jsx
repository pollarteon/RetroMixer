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
      {/* <div className="piano-keys">
            <button className={classes['key white']}></button>
            <button className={classes['key black']}></button>
            <button className="key white"></button>
            <button className="key black"><span>eb3</span></button>
            <button className="key white"><span>e3</span></button>
            <button className="key white"><span>f3</span></button>
            <button className="key black"><span>gb3</span></button>
            <button className="key white"><span>g3</span></button>
            <button className="key black"><span>ab3</span></button>
            <button className="key white"><span>a3</span></button>
            <button className="key black"><span>bb3</span></button>
            <button className="key white"><span>b3</span></button>
            <button className="key white"><span>c4</span></button>
            <button className="key black"><span>db4</span></button>
            <button className="key white"><span>d4</span></button>
            <button className="key black"><span>eb4</span></button>
            <button className="key white"><span>e4</span></button></div>
        <div className="piano-keys">
            <button className="key white"><span>f4</span></button>
            <button className="key black"><span>gb4</span></button>
            <button className="key white"><span>g4</span></button>
            <button className="key black"><span>ab4</span></button>
            <button className="key white"><span>a4</span></button>
            <button className="key black"><span>bb4</span></button>
            <button className="key white"><span>b4</span></button>
            <button className="key white"><span>c5</span></button>
            <button className="key black"><span>db5</span></button>
            <button className="key white"><span>d5</span></button>
            <button className="key black"><span>eb5</span></button>
            <button className="key white"><span>e5</span></button>
            <button className="key white"><span>f5</span></button>
            <button className="key black"><span>gb5</span></button>
            <button className="key white"><span>g5</span></button>
            <button className="key black"><span>ab5</span></button>
            <button className="key white"><span>a5</span></button>
            <button className="key black"><span>bb5</span></button>
            <button className="key white"><span>b5</span></button>
        </div>
        </div> */} 
    </div>
  );
}
