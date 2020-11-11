import React from 'react';
import FormList from './FormList';


const Form = () => {
  
    return (
        <div>
    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li className="nav-item" role="presentation">
    <a className="nav-link active track" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Target</a>
  </li>
  <li className="nav-item" role="presentation">
    <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Limit</a>
  </li>
  <li className="nav-item" role="presentation">
    <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Track</a>
  </li>
</ul>
<div className="tab-content" id="pills-tabContent">
  <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
      <FormList 
        ptitle="e.g.Read More" 
        value4="Atleast"  
        value4ph="e.g.Books"
        value5ph="e.g.Book"
        value6ph="e.g.Books"
        value7="Period"
        
      />
  </div>
  <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
      <FormList 
        ptitle="e.g.Smokeless" 
        value4="Atmost" 
        value4ph="0"
        value5ph="e.g.Cigarette"
        value6ph="e.g.Cigarettes"
        value7="Period"

      />
   </div>
  <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
      <FormList 
        ptitle="e.g.Do 60 push-ups" 
        value4="Initial Value" 
        value4ph="0"
        value5ph="e.g.Pushup"
        value6ph="e.g.Pushups"
        value7="Target Value"
        
        />
    </div>
        
</div>
        </div>
    )
}

export default Form;
