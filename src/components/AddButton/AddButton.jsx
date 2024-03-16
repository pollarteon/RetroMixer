import classes from "./AddButton.module.css"
import { IoAddCircleSharp } from "react-icons/io5";
import { motion } from "framer-motion";
export default function AddButton({onclickFunction,label}){
  return (
    <motion.button
    initial={{scale:0}}
    whileHover={{scale:1.01}}
    animate={{scale:1}}
    className={classes.addButton} onClick={onclickFunction}><IoAddCircleSharp/>{label}</motion.button>
  )
}