import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";
import { customColorStyle } from "../authors/ColorStyles"

function Location({ darkVersion, getLocationId }) {
  const [selectOptions, setSelectOptions] = useState([]);
  const [colorStyle, setColorStyle] = useState({});

  async function getOptions() {
    const res = await axios.get("https://test-front.framework.team/locations");
    const data = res.data;

    const options = data.map((el) => ({
      value: el.id,
      label: el.location,
    }));

    setSelectOptions(options);
  }

  function setColors() {
    setColorStyle(customColorStyle(darkVersion))
  }

  useEffect(() => {
    getOptions();
    setColors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setColors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [darkVersion]);

  return (
    <Select
      classNamePrefix={darkVersion ? "custom-select" : "custom-select"}
      placeholder="Location"
      options={selectOptions}
      isClearable={true}
      isSearchable={false}
      onChange={getLocationId}
      styles={colorStyle}
    />
  );
}

export default Location;
