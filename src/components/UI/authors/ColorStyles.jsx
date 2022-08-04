export const customColorStyle = (darkVersion) => { 

    return({
  container: (styles) => ({
    ...styles,
    flexGrow: 1,
    maxheight: "100%",
  }),
  control: (styles, { menuIsOpen }) => {
    return {
      ...styles,
      backgroundColor: darkVersion ? "black" : "white",
      borderColor: darkVersion ? "white" : "black",
      "&:hover": {
        borderColor: darkVersion ? "white" : "black",
      },
      height: "100%",
      minHeight: 0,
      borderRadius: menuIsOpen ? "0.5vw 0.5vw 0 0" : "0.5vw",
    };
  },
  singleValue: (styles) => ({
    ...styles,
    color: darkVersion ? "white" : "black",
    fontSize: "0.9vw",
    fontWeight: "700",
    padding: "0.5vw 0 0.5vw 0",
  }),
  placeholder: (styles) => ({
    ...styles,
    color: darkVersion ? "white" : "black",
    fontSize: "0.9vw",
    padding: "0.5vw 0 0.5vw 0",
  }),
  menu: (styles) => ({
    ...styles,
    backgroundColor: darkVersion ? "black" : "white",
    border: `1px solid ${darkVersion ? "white" : "black"}`,
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
      color: darkVersion
        ? isFocused
          ? "black"
          : "white"
        : isFocused
        ? "white"
        : "black",
      backgroundColor: darkVersion
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
      fill: darkVersion
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
      fill: darkVersion
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
})
}