import React from "react";
import { MdMessage } from "react-icons/md";
import styles from './Buttton.module.css'
const Buttton = (props) => {

  

  return (
    <button className={props.isoutline ? styles.outlinebtn: styles.primary_btn}>
        {props.icon}
        {props.text}
    </button>
  );
}

export default Buttton;
