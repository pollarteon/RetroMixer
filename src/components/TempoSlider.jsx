import { motion } from "framer-motion";
import classes from "./TempoSlider.module.css"
export default function TempoSlider({tempo,setTempo}){
  
  const handeTempoChange = (event) => {
    const newTempo = parseFloat(event.target.value);
    setTempo(newTempo)
  };
  return (
    <motion.div
      initial={{scale:0}}
      animate={{scale:1}}
    className={classes.inputWrapper}>
    <label className={classes.tempoLabel} htmlFor="tempo">Tempo:</label>
    <input className={classes.progressBar}
        type="range"
        id="tempo"
        min="0.5"
        max="2"
        step="0.01"
        value={tempo}
        onChange={handeTempoChange}
      />
      <p className={classes.value}>{tempo}</p>
    </motion.div>
    
  )
}