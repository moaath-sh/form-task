import{useState} from 'react';

function App() {
  const initVal={
                  firsname:"",
                  lastname:"",
                  Education:"",
                  Email:"",
                  phone:"",
                  Experince:"",
                  Address:""
  };
  const [formValues,setFormValues]= useState(initVal);
  const handleChange = (e)=>
  {
    let name = e.target.name;
    let val = e.target.value;
    setFormValues({...formValues,[name]:val});
    

  }
  const handlesub = (e)=>{
    e.preventDefault();
    console.log(formValues);


  }
  
  return (
    <div className="container up">
     <form onSubmit={handlesub}>
  <div className="form-group row">
    <label className="col-sm-2 col-form-label">first name :</label>
    <div className="col-sm-10">
      <input  className=" form-control b" name='firsname' value={formValues.firsname} onChange={handleChange}/>
    </div>
  </div>
  <div className="form-group row">
    <label  className="col-sm-2 col-form-label">last name :</label>
    <div className="col-sm-10">
      <input type="text" className="form-control b" name='lastname'value={formValues.lastname} onChange={handleChange}/>
    </div>
  </div>
  <div className="form-group row">
    <label  className="col-sm-2 col-form-label">Education :</label>
    <div className="col-sm-10">
      <input type="text" className="form-control b" name='Education' value={formValues.Education} onChange={handleChange}/>
    </div>
  </div>
  <div className="form-group row">
    <label  className="col-sm-2 col-form-label">Email :</label>
    <div className="col-sm-10">
      <input type="email" className="form-control b" name='Email' value={formValues.Email} onChange={handleChange} />
    </div>
  </div>
  <div className="form-group row">
    <label  className="col-sm-2 col-form-label">phone :</label>
    <div className="col-sm-10">
      <input type="text" className="form-control b" name='phone' value={formValues.phone} onChange={handleChange} />
    </div>
  </div>
  <div className="form-group row">
    <label  className="col-sm-2 col-form-label">Experince :</label>
    <div className="col-sm-10">
      <input type="text" className="form-control b" name='Experince' value={formValues.Experince} onChange={handleChange} />
    </div>
  </div>
  <div className="form-group row">
    <label  className="col-sm-2 col-form-label">Address :</label>
    <div className="col-sm-10">
      <input type="text" className="form-control b" name='Address' value={formValues.Address} onChange={handleChange} />
    </div>
  </div>

  
  
    
  <div className="form-group row">
  <label  className="col-sm-2 col-form-label"></label>
    <div className="col-sm-10">
      <button type="submit" className="btn btn-primary b orang">submit</button>
    </div>
  </div>
</form>
      
    </div>
  );
}

export default App;
