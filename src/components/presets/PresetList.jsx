
import PresetItem from "./PresetItem";
import classes from "./PresetList.module.css"
export default function PresetList({ presetArray,color}) {
 
  return (
    <div className={classes.presetContainer}>
      <ul className={classes.ulStyle}>
      {presetArray.map((filePath, index) => {
        return <li className={classes.liStyle} key={filePath} ><PresetItem  filePath={filePath} color={color}/></li>
      })}
      </ul>
    </div>
  );
}
