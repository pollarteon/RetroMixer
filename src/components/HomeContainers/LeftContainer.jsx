import classes from "./LeftContainer.module.css"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
export default function LeftContainer(){
  return(
    <div className={classes.leftContainer}>
      <header>
        <motion.h1
          initial={{ x: -300 }}
          transition={{duration:1}}
          animate={{ x: 0 }}
          className={classes.heading}
        >
          RETRO-THEMED
        </motion.h1>
        <hr />
        <motion.h1
          initial={{ x: 300 }}
          transition={{duration:1}}
          animate={{ x: 0 }}
          className={classes.heading}
        >
          MUSIC PLAYER
        </motion.h1>
        <motion.h2
        initial={{opacity:0}}
        transition={{duration:1}}
        animate={{opacity:1}}
         className={classes.heading2}>CODE.INIT() 2024</motion.h2>
      </header>
      <Link to={"/mixer"}>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className={classes.navButton}
        >
          VIEW PLAYER
        </motion.button>
      </Link>
    </div>
  )
}