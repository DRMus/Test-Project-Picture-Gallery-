import React, { Component } from "react";
import Select from "react-select";
import "./Location.scss";
import axios from "axios";

export default class Location extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectOptions: [],
      colorStyle: {},
    };
  }

  setColors() {
    this.setState({
      colorStyle: {
        container: (styles) => ({
          ...styles,
          flexGrow: 1,
          maxHeight: "100%",
        }),
        control: (styles, { menuIsOpen }) => {
          return {
            ...styles,
            backgroundColor: this.props.darkVersion ? "black" : "white",
            borderColor: this.props.darkVersion ? "white" : "black",
            "&:hover": {
              borderColor: this.props.darkVersion ? "white" : "black",
            },
            height: "100%",
            minHeight: 0,
            borderRadius: menuIsOpen ? "0.5vw 0.5vw 0 0" : "0.5vw",
          };
        },
        singleValue: (styles) => ({
          ...styles,
          color: this.props.darkVersion ? "white" : "black",
          fontSize: "0.9vw",
          fontWeight: "700",
          padding: "0.5vw 0 0.5vw 0",
        }),
        placeholder: (styles) => ({
          ...styles,
          color: this.props.darkVersion ? "white" : "black",
          fontSize: "0.9vw",
          padding: "0.5vw 0 0.5vw 0",
        }),
        menu: (styles) => ({
          ...styles,
          backgroundColor: this.props.darkVersion ? "black" : "white",
          border: `1px solid ${this.props.darkVersion ? "white" : "black"}`,
          height: "auto",
          borderRadius: "0 0 0.5vw 0.5vw",
        }),
        menuList: (styles) => ({
          ...styles,
          height: "15.6vw",
        }),
        option: (styles, { isFocused }) => {
          return {
            ...styles,
            color: this.props.darkVersion
              ? isFocused
                ? "black"
                : "white"
              : isFocused
              ? "white"
              : "black",
            backgroundColor: this.props.darkVersion
              ? isFocused
                ? "white"
                : "black"
              : isFocused
              ? "black"
              : "white",
            fontSize: "0.9vw",
            padding: "0.7vw",
            fontWeight: "700",
          };
        },
        dropdownIndicator: (styles) => ({
          ...styles,
          svg: {
            fill: this.props.darkVersion
              ? "rgba(255, 255, 255, 0.3)"
              : "rgba(0, 0, 0, 0.3)",
            width: "1vw",
            height: "1vw",
          },
          padding: "0.5vw 0.7vw 0.5vw 0.7vw",
        }),
        clearIndicator: (styles) => ({
          ...styles,
          svg: {
            fill: this.props.darkVersion
              ? "rgba(255, 255, 255, 0.3)"
              : "rgba(0, 0, 0, 0.3)",
            width: "1vw",
            height: "1vw",
          },
          padding: "0.5vw 0.7vw 0.5vw 0.7vw",
        }),
        indicatorSeparator: (styles) => ({
          ...styles,
          display: "none",
        }),
        valueContainer: (styles) => ({
          ...styles,
          width: "2vw",
          padding: "0 0.7vw 0 0.7vw",
          alignItems: "flex-start",
        }),
      },
    });
  }

  async getOptions() {
    const res = await axios.get("https://test-front.framework.team/locations");
    const data = res.data;

    const options = data.map((el) => ({
      value: el.id,
      label: el.location,
    }));

    this.setState({ selectOptions: options });
  }

  componentDidMount() {
    this.getOptions();
    this.setColors();
  }

  componentDidUpdate(prevProps) {
    if (this.props.darkVersion !== prevProps.darkVersion) {
      this.setColors();
    }
  }

  render() {
    return (
      <Select
        classNamePrefix="custom-select"
        placeholder="Location"
        options={this.state.selectOptions}
        isClearable={true}
        isSearchable={false}
        onChange={this.props.getLocationId}
        styles={this.state.colorStyle}
      />
    );
  }
}
