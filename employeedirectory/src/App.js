import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import EmployeePage from "./components/pages/EmployeePage";
import './App.css';
import Employees from "./employees.json";
import EmployeeList from "./components/EmployeeList"

class App extends Component {

  state = {
    Employees
  };

  render() {
  return (
    <Router>
      <div>
      <HomePage />
        <header>Employee List</header>
        {this.state.Employees.map(employee => (
          <EmployeeList 
            id={employee.id}
            key={employee.key}
            name={employee.name.first + " " + employee.name.last}
            phone={employee.phone}
            email={employee.email}
            image={employee.picture.thumbnail}
          />
        ))}
          
      </div>
    </Router>
  );
}
}

export default App;
