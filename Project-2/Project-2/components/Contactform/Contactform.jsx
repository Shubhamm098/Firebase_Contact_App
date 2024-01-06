import React from 'react'
import styles from './Contact.module.css'
import Buttton from '../Buttton/Buttton'
import { MdMessage } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
const Contactform = () => {
  return (
    <div className={styles.container}>
      <div className={styles.Contact_form}>
        <div className={styles.top_btns}>
        <Buttton text='VIA SUPPORT CHAT' icon={<MdMessage  fontSize='24px'/>}/>
        <Buttton text='VIA CALL' icon={<IoCallSharp  fontSize='24px'/>}/>
        </div>
        <Buttton isoutline={true} text='VIA EMAIL FORM' icon={<IoIosMail  fontSize='24px'/>}/>

      

    <form>
      <div className={styles.formcontrol}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="" />
      </div>

      <div className={styles.formcontrol}>
      <label htmlFor="email">E-mail</label>
          <input type="email" name="email" id="" />
      </div>

      <div className={styles.formcontrol}>
      <label htmlFor="text">Text</label>
          <textarea type="text" name="text" id="" />
      </div>

     <div style={{display:'flex',justifyContent:'end'
     
    }}>
     <Buttton text='SUBMIT'/>
     </div>
    </form>


    
      </div>
        <div className={styles.contimg}><img src="/images/imgs/lady.svg" alt="" /></div>
      {/* <button>hello</button> */}
    </div>
  )
}

export default Contactform
