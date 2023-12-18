import { useState } from "react";
import "../css/login.css";

function Login({ msg }) {
    const [email, setEmail] = useState(msg.email);

    const changeEmail = (e) => setEmail(e.target.value);

    return (<div className="login">
    <form action="" method="GET">
        <div style={{height: "40%"}}>
            <label htmlFor="email">Email:
            <br></br><input onChange={changeEmail} type="email" name="email" id="email" value={email}></input></label>
        </div>
        <div style={{height: "20%"}}>
            <label htmlFor="password">Password:
            <br></br><input type="password" name="password" id="password"></input></label>
        </div>
        <div style={{height: "50%"}}>
            <button type="submit" name="login" id="login">LOGIN</button>
        </div>
        <span>{(msg === false ? "" : msg.msg)}</span>
    </form>
</div>);
}

export default Login;