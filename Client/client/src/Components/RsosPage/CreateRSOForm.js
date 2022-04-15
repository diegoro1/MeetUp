import style from './CreateRSOForm.module.css';
import { useState } from 'react';

export default function CreateRSOForm(props) {
    const [email, setEmail] = useState("email@email.com");
    const [rso, setRSO] = useState("Random-RSO");

    function changeEmail(newEmail) {
        setEmail(newEmail);
    }

    function changeRSO(newRSO) {
        setRSO(newRSO);
    }


    function submitRSO() {

    }

    return (
        <div className={style.formContainer}>
            <div className={style.form}>
                <label htmlFor="">
                    <input className={style.inputText} name="email" type="text" placeholder="Email"
                    onChange={e => changeEmail(e.target.value)}/>
                </label>
                <label htmlFor="">
                    <input className={style.inputText} name="rso-name" type="text" placeholder="RSO Name"
                    onChange={e => changeRSO(e.target.value)}/>
                </label>
                <button className={style.loginButton + " " + style.inputText} value="Login" 
                onClick={submitRSO}>Create RSO</button>
                <button className={style.createButton + " " + style.inputText} onClick={()=> props.setCreateRso(false)}>Cancel</button>
            </div>
        </div>
    )
}
