import { Link } from "react-router-dom";

export const Login = () => {
    return (
        <>
            <fieldset>
                <legend>Login</legend>

                Voter-Id / Email-Id: <input type={"text"} placeholder={"enter email=Id / voter-Id"}/><br/>

                Password: <input type={"password"} placeholder={"enter password"}/><br/><br/>
                <button>Login</button>

                <p>Not registered yet?
                    <Link to="/registration"> Click here</Link>
                </p>

            </fieldset>
        </>
    )
}