import React, { Component, createContext } from "react";
import moment from "moment";
import axios from "axios";
export const School = createContext();
export class SchoolProvider extends Component {
  state = {
    date: null,
    focus: "startDate",
    startDate: null,
    endDate: null,
    data: [],
  };
  isDateBlocked = (date) => date.isBefore(moment(), "year");

  onDatesChange = ({ startDate, endDate, focusedInput }) => {
    this.setState({ ...this.state, focus: focusedInput }, () =>
      this.setState({ ...this.state, startDate, endDate })
    );
  };
  convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [day, mnth, date.getFullYear()].join("/");
  }
  componentDidUpdate() {
    if (this.state.startDate && this.state.endDate)
      axios
        .post(`http://183.83.33.156:85/api/SchoolDetails/GetTimeTable`, {
          Facility_Reg_SNo: "13",
          Admission_No: "10060",
          From_Date: this.convert(
            `Thu Jan 01 2020 00:00:00 GMT+0530 (India Standard Time)`
          ),
          To_Date: this.convert(
            `Thu Aug 08 2020 00:00:00 GMT+0530 (India Standard Time)`
          ),
        })
        .then((res) => {
          this.setState({ data: res.data });
          console.log(res.data, "$%&&&&&&&&&&&&&");
        });
  }
  render() {
    return (
      <School.Provider
        value={{
          ...this.state,
          isDateBlockedFunc: this.isDateBlocked,
          onDatesChangeFunc: this.onDatesChange,
        }}
      >
        {this.props.children}
      </School.Provider>
    );
  }
}
