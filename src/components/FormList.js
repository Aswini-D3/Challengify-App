

import React, {useState} from 'react';
import {getTodaysDate} from "./Date";

// import { useForm } from "react-hook-form";

const FormList = (props) => {
  // const todays = new Date();
  // console.log(todays);
  const [title,setTitle] = useState("");
  const [sdate,setSdate] = useState(getTodaysDate());
  const [edate,setEdate] = useState(getTodaysDate());
  const [atleast,setAtleast] = useState("1");
  const [singular,setSingular] = useState("");
  const [plural,setPlural] = useState("");
  const oneDay = 24*60*60*1000;
  const starDate = new Date(sdate);
  const endDate = new Date(edate); 
  const differenceDates = Math.round(Math.abs((starDate - endDate)/oneDay));
  console.log(differenceDates);

  
  // var opVal
  // for(var i=0; i<= 8; i++){
    //   opVal = periodSelection[i].value;
    // }
    // console.log(opVal);
    const submitHandler = (e)=>{
      var periodSelection = document.getElementById("datePeriod").getElementsByTagName("option");
    e.preventDefault();
    // console.log(title);
    // console.log(sdate);
    // console.log(edate);
    // console.log(atleast);
    // console.log(singular);
    // console.log(plural);
  if(title===""){
    document.getElementById("title").innerText="Title should not be blank";
  }
  else if(edate<sdate){
    document.getElementById("edate").innerText="End date should not be less than current date";
  }
  else if(atleast===""){
    document.getElementById("atleast").innerText="Atleast should not be blank";
    
    
  }
  else if(singular===""){
    document.getElementById("title").innerText="";
    document.getElementById("singular").innerText="Singular should not be blank";
  }
  else if(plural===""){
    
    document.getElementById("plural").innerText="Plural should not be blank";
  }
  
  }
    return (
        <div>
            <form onSubmit={submitHandler}>
  <div className="form-group">
    <label for="exampleFormControlInput1">Title</label>
    <input type="text" name="Title" value={title} className="form-control" id="exampleFormControlInput1" placeholder={props.ptitle} onChange={event=>setTitle(event.target.value)}/>
    <p id="title"></p>
  </div>

  <div className="form-group">
    <div className="row">
        <div className="col-6">
        <label for="exampleFormControlSelect1">Start Date</label>
    <input type="Date" value={sdate} className="form-control" disabled />
        </div>
        <div className="col-6">
        <label for="exampleFormControlSelect1">End Date</label>
        <input type="Date" value={edate} className="form-control" onChange={event=>setEdate(event.target.value)} />
        <p id="edate"></p>
        </div>
    </div>
    
  </div>
  <div className="form-group">
      <div className="row">
          <div className="col-3">
          <label for="exampleFormControlSelect1">{props.value4}</label>
          <input type="number" className="form-control" value={atleast} placeholder={props.value4ph} onChange={event=>setAtleast(event.target.value)} min="1" />
          <p id="atleast"></p>
          </div>
          <div className="col-3">
          <label for="exampleFormControlSelect1">unit(singular)</label>
        <input type="text" className="form-control" value={singular} placeholder={props.value5ph} onChange={event=>setSingular(event.target.value)}  />
          <p id="singular"></p>
          </div>
          <div className="col-3">
          <label for="exampleFormControlSelect1">unit(plural)</label>
        <input type="text" className="form-control" value={plural} placeholder={props.value6ph} onChange={event=>setPlural(event.target.value)} />
          <p id="plural"></p>
          </div>

          <div className="col-3">
          <label for="exampleFormControlSelect2">{props.value7}</label>
          {(props.value7 == "Period") ? 
          <select className="form-control" id="datePeriod">
            <option value="0" disabled = "true">Every Day</option>
            <option value="1" disabled = "true">Every Other Day</option>
            <option value="7" disabled = "true">Every Week</option>
            <option value="14" disabled = "true">Every Two Weeks</option>
            <option value="30" disabled = "true">Every Month</option>
            <option value="60" disabled = "true">Every Two Months</option>
            <option value="90" disabled = "true">Every Three Months</option>
            <option value="180" disabled = "true">Every Six Months</option>
            <option value="365" disabled = "true">Every Year</option>
            </select>
            : 
              <input type="number" className="form-control" placeholder="0"/>
            }
            </div>
            
          </div>
      </div>
      <input class="btn btn-primary" type="submit" value="Create Challenge"/>
      <input class="btn btn-primary" type="reset" value="Discard"/>

  </form>

            
</div>
    )
}

export default FormList;
