
import React, { PureComponent } from  'react';
import "./Style.css"

class AgeCalculator extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isValidate: false,
    };
  }

  handleInputDay = (e) => {
    const input_day = e.target.value;
    const error_day = document.querySelector(".error-day");

    if (+input_day > 31) {
      error_day.textContent = "must be a valid day";
      this.setState({ isValidate: false });
    } else if (+input_day >31 || input_day <= 0 ) {
      error_day.textContent = "this field is required";
      this.setState({ isValidate: false });
    } else {
      error_day.textContent = "";
      this.setState({ isValidate: true });
    }
  };

  handleInputMonth = (e) => {
    const input_month = e.target.value;
    const error_month = document.querySelector(".error-month");

    if (+input_month > 12) {
      error_month.textContent = "must be a valid Month";
      this.setState({ isValidate: false });
    } else if (+input_month === 0 || +input_month < 0 ) {
      error_month.textContent = "this field is required";
      this.setState({ isValidate: false });
    } else {
      error_month.textContent = "";
      this.setState({ isValidate: true });
    }
  };

  handleInputYear = (e) => {
    const input_year = e.target.value;
    const error_year = document.querySelector(".error-year");
  
    if (+input_year > new Date().getFullYear()) {
      error_year.textContent = "must be a valid Year";
      this.setState({ isValidate: false });
    } else if (+input_year === 0) {
      error_year.textContent = "this field is required";
      this.setState({ isValidate: false });
    } else {
      error_year.textContent = "";
      this.setState({ isValidate: true });
    }
  };

  calculateDate = () => {
    if (this.state.isValidate) {
      const input_year = document.querySelector("#year");
      const input_month = document.querySelector("#month");
      const input_day = document.querySelector("#day");
      const output_day = document.querySelector(".output-day");
      const output_month = document.querySelector(".output-month");
      const output_year = document.querySelector(".output-year");
  
      const birthday = `${input_month.value}/${input_day.value}/${input_year.value}`;
      const birthdayobj = new Date(birthday);
      const currentDate = new Date();
      const ageDiff = currentDate - birthdayobj;
      const ageDate = new Date(ageDiff);
  
      const ageYears = currentDate.getFullYear() - birthdayobj.getFullYear();
      const ageMonths = ageDate.getMonth();
      const ageDays = ageDate.getDate() - 1; // Use getDate() instead of getDay()
      output_day.textContent = ageDays;
      output_month.textContent = ageMonths;
      output_year.textContent = ageYears;
    } else {
      alert("Must be a valid Date");
    }
  };
  
  

  render() {
    return (
      <div>
 <div className='container'>
<div className='input-flex'>
    <div className='input-container'>
        <span>DAY</span>
        <input type="number" id='day' onChange={this.handleInputDay} />
        <small className='error-day'></small> 
    </div>

    <div className='input-container'>
        <span>MONTH</span>
        <input type="number" id='month' onChange={this.handleInputMonth}/>
        <small className='error-month'></small> 
    </div>

    <div className='input-container'>
        <span>YEAR</span>
        <input type="number" id='year' onChange={this.handleInputYear} />
        <small className='error-year'></small> 
    </div>
</div>

<button className='submit-btn' onClick={this.calculateDate}>
        <img src="https://cdn-icons-png.flaticon.com/128/9471/9471918.png" height={50} width={50} alt="" />
</button>
<div className='output'>
    <h1><span className='output-year'>----</span>years</h1>
    <h1><span className='output-month'>----</span>month</h1>
    <h1><span className='output-day'>----</span>days</h1>
</div>

</div> 
      </div>
    );
  }
}

export default AgeCalculator;
