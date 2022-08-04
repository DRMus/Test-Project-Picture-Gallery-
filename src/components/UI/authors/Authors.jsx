import React, { useState, useEffect } from "react";
import Select from "react-select";
import "./Authors.scss";
import axios from "axios";
import { customColorStyle } from "./ColorStyles"

function Authors({ darkVersion, getAuthorId }) {
  const [selectOptions, setSelectOptions] = useState([]);
  const [colorStyle, setColorStyle] = useState({});

  async function getOptions() {
    const res = await axios.get("https://test-front.framework.team/authors");
    const data = res.data;

    const options = data.map((el) => ({
      value: el.id,
      label: el.name,
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
      placeholder="Authors"
      options={selectOptions}
      isClearable={true}
      isSearchable={false}
      onChange={getAuthorId}
      styles={colorStyle}
    />
  );
}

export default Authors;
