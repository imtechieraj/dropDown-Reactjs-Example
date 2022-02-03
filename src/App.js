import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Dropdown from './Dropdown';

function App() {
  const [empData,setEmpData]=useState(
    [
      { empId: 'empId-1', name: 'employee 1',age:24,salary:"30000",address:"madurai" },
      { empId: 'empId-2', name: 'employee 2',age:30,salary:"70000",address:"chennai" },
      { empId: 'empId-3', name: 'employee 3',age:27,salary:"60000", address:"america"},
      { empId: 'empId-4', name: 'employee 4',age:24,salary:"30000",address:"covai" },
      { empId: 'empId-5', name: 'employee 5',age:44,salary:"10000000",address:"mumbai" }
    ]
  );
  const [currentEmp,seCurrentEmp]=useState(empData[0])
  const getEmpDetails=(e)=>{
    console.log(e.target.value);
    let findEmp=empData.find((data)=>data.empId===e.target.value);
    seCurrentEmp(findEmp);
}
  return (
    <div className="App">
     <h1>Dropdown example</h1>
     {/* <Dropdown options={empData} multiple /> */}
      <Dropdown options={empData} changeEmp={getEmpDetails}/>
      <br/>
      {currentEmp.name}<br/>
      {currentEmp.age}<br/>
      {currentEmp.salary}<br/>
      {currentEmp.address}<br/>
    </div>
  );
}

export default App;
