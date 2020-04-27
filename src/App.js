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
  

//  handleInputChange = event => {
//    const name = event.target.name;
//    const value = event.target.value;
//    this.setState({
//      [name]: value
//    });
//  };

//  handleFormSubmit = event => {
//    event.preventDefault();
//    this.API.getRandomUsers(this.state.search)
//  };

  render() {
    return (
      <div>
        <HomePage />
          <SearchBar
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange} />
            <Header />
              {this.state.employees.map(employee => (
                <EmployeeList
                  id={employee.id}
                  key={employee.key}
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
