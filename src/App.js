import React, { Component } from 'react';
import HomePage from "./pages/HomePage";
import './App.css';
import EmployeeList from "./components/EmployeeList";
import API from "./utils/API";
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"

let employees= [{name:"James"}, {name:"Bob"}, {name:"Adam"}]

function dynamicSort(property){
  let sortOrder = 1;

  if(property[0] === "-") {
    sortOrder = -1;
    property = property.substr(1);
  }

  return function(a,b) {
    if (sortOrder === -1){
      return b[property].localeCompare(a[property]);
    } else {
      return a[property].localeCompare(b[property]);
    }
  }
}

employees.sort(dynamicSort("name"));
console.log(employees)

class App extends Component {

  state = {
    employees: [],
    searchEmployees: []
  };

  //when the component mounts, run API function
  componentDidMount() {
    API.getRandomUsers()
      .then(res => {
        this.setState({ employees: res.data.results })
        // console.log(res.data.results)
      })
      .catch(err => console.log(err));
  };

  dynamicSort = property => {
    let sortOrder = 1;
  
    if(property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
  
    return function(a,b) {
      if (sortOrder === -1){
        return b[property].localeCompare(a[property]);
      } else {
        return a[property].localeCompare(b[property]);
      }
    }
  }
  
  // handleFormSubmit = event => {
  //   //prevent default from form
  //   event.preventDefault();
  //   if (!this.state.searchEmployees) {
  //     alert("Please enter a name to find");
  //   }
  // }

  render() {
    return (
      <div>
        <HomePage />
          <SearchBar />
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
