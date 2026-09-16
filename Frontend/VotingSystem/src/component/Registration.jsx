import {Link} from "react-router-dom";
import {useState} from "react";
import stateDistricts from "../API/state-district.json";

export const Registration = () => {

    const [selectState, setSelectedState] = useState("");

    const handleStateChange = (event) => {
        setSelectedState(event.target.value);
    }

    return (
        <>
            <fieldset>
                <legend>Registration</legend>

                <label>First name: </label>
                <input type="text" placeholder="First name" /><br/>

                <label>Last name: </label>
                <input type="text" placeholder="Last name" /><br/>

                <label>Email: </label>
                <input type="text" placeholder="Email" /><br/>

                <label>Password: </label>
                <input type="text" placeholder="Password" /><br/>

                {/*state*/}

                <select value={selectState}
                        onChange={handleStateChange}>

                    <option value="">Select State</option>

                    {Object.keys(stateDistricts).map((state) => (
                        <option key={state} value={state}>
                            {state}
                        </option>
                    ))}

                </select>

                <br/>

                {/*District*/}

                <label>District: </label>

                <select disabled={!selectState}>

                    <option value="">
                        {selectState
                            ? "Select District"
                            : "Select State First"}
                    </option>

                    {selectState &&
                        stateDistricts[selectState].map((district) => (
                            <option
                                key={district}
                                value={district}
                            >
                                {district}
                            </option>
                        ))
                    }
                </select>

                <label>Select Gender: </label> <br/>
                <input type={"radio"} name="gender" id="male" value="Male" />Male

                <input type={"radio"} name="gender" id="female" value="Female" />Female


                <Link to={"/login"}>Login Here</Link>

            </fieldset>
        </>
    )
}
