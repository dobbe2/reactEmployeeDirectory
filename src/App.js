import React, { Component } from 'react';
import HomePage from "./pages/HomePage";
import './App.css';
import EmployeeList from "./components/EmployeeList";
import API from "./utils/API";
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"

class App extends Component {

  state = {
    employees: [],
    searchEmployees: []
  };
  

  //when the component mounts, run API function
  componentDidMount() {
    console.log(this.state)
    API.getRandomUsers()
      .then(res => {
        this.setState({ employees: res.data.results })
        console.log(res.data.results);
        console.log(this.state)
      })
      .catch(err => console.log(err));
  };
  
 handleInputChange = event => {
   const value = event.target.value;
   console.log(value);
   const filteredList = this.state.employees.filter(employee => {
     let values = Object.values(employee).join("").toLowerCase()
     return values.indexOf(value.toLowerCase()) !== -1
   })
   this.setState({
     searchEmployees: filteredList
   }, () => {console.log(this.state)})
  };

//  handleFormSubmit = event => {
//    event.preventDefault();
//    this.setState({employees:filteredList})
//  };

  //  var input;
  //  if (!filteredList) {
  //   this.setState({employees: employees})
  //  } else {
  //    this.setState({employees: filteredList})
  //  }
  render() {

    
    return (
      <div>
        <HomePage />
          <SearchBar
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange} />
            <Header />

              {this.state.searchEmployees.length > 0 ? 
                this.state.searchEmployees.map((employee, index) => (
                <EmployeeList
                  id={employee.id}
                  key={index}
                  name={employee.name.first + " " + employee.name.last}
                  phone={employee.phone}
                  email={employee.email}
                  image={employee.picture.medium}
                />
            )) :
              this.state.employees.map((employee, index) => (
                <EmployeeList
                  id={employee.id}
                  key={index}
                  name={employee.name.first + " " + employee.name.last}
                  phone={employee.phone}
                  email={employee.email}
                  image={employee.picture.medium}
                />
            ))}
      </div>
    );
  }
}

export default App;
