import classes from "./AddButton.module.css"
import { IoAddCircleSharp } from "react-icons/io5";
export default function AddButton({onclickFunction,label}){
  return (
    <button className={classes.addButton} onClick={onclickFunction}><IoAddCircleSharp/>{label}</button>
  )
}