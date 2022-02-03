import React from "react";

function Dropdown(props) {
   
    return <>
        <select {...props} onChange={props.changeEmp} value={"empId-1"}>
            {props.options &&
                props.options.map(o =>
                    <option key={o.empId} value={o.empId}>
                        {o.name}
                    </option>)
            }
        </select>
    </>;
}
export default Dropdown;