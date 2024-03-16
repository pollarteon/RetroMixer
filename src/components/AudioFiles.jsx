import MusicElement from "./MusicElement";
import { IoMdClose } from "react-icons/io";
import classes from "./AudioFiles.module.css";
import { AnimatePresence, motion } from "framer-motion";
export default function AudioFiles({ audioArray, setSrc, closeDropBox }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className={classes["modal-container"]}
    >
      <div className={classes.backdrop} onClick={closeDropBox}></div>
      <div className={classes.modal}>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className={classes.closeButton}
          onClick={closeDropBox}
        >
          <IoMdClose />
        </motion.button>
        <ul className={classes.ulStyle}>
          {audioArray.map((filePath) => {
            return (
              <motion.li
                whileHover={{ scale: 1.05 }}
                key={filePath}
                className={classes.listStyle}
                onClick={closeDropBox}
              >
                <MusicElement filePath={filePath} setSrc={setSrc} />
              </motion.li>
            );
          })}
        </ul>
      </div>
    </motion.div>
  );
}
