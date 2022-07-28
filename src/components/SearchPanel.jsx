import React, { useState, useEffect } from "react";
import { Input } from "fwt-internship-uikit";
import "../styles/SearchPanel.scss";
import Authors from "./UI/authors/Authors";
import Location from "./UI/location/Location";
import CustomRange from "./UI/range/CustomRange";

const SearchPanel = ({ getSearchSettings, darkVersion }) => {
  const [authorId, setAuthorId] = useState(null);
  const [locationId, setLocationId] = useState(null);
  const [searchName, setSearchName] = useState(null);
  const [rangeFrom, setRangeFrom] = useState(null);
  const [rangeBefore, setRangeBefore] = useState(null);

  const getAuthorId = (authorId) => {
    try {
      setAuthorId(authorId.value);
    } catch (e) {
      setAuthorId(null);
    }
  };

  const getLocationId = (locationId) => {
    try {
      setLocationId(locationId.value);
    } catch (e) {
      setLocationId(null);
    }
  };

  const getRange = (rangeFrom, rangeBefore) => {
    getRangeFrom(rangeFrom);
    getRangeBefore(rangeBefore);
  };

  const getRangeFrom = (rangeFrom) => {
    try {
      rangeFrom ? setRangeFrom(rangeFrom) : setRangeFrom(null);
    } catch (e) {
      setRangeFrom(null);
    }
  };

  const getRangeBefore = (rangeBefore) => {
    try {
      rangeBefore ? setRangeBefore(rangeBefore) : setRangeBefore(null);
    } catch (e) {
      setRangeBefore(null);
    }
  };

  const getName = (searchName) => {
    setSearchName(searchName.target.value ? searchName.target.value : null);
  };

  useEffect(() => {
    getSearchSettings({
      authorId: authorId,
      locationId: locationId,
      searchName: searchName,
      rangeBefore: rangeBefore,
      rangeFrom: rangeFrom,
    });
  }, [authorId, locationId, searchName, rangeBefore, rangeFrom]);

  return (
    <div className="search_panel">
      <Input
        className={
          darkVersion ? "custom custom_input__dark " : "custom custom_input"
        }
        placeholder="Name"
        onChange={getName}
      />
      <Authors getAuthorId={getAuthorId} darkVersion={darkVersion} />
      <Location getLocationId={getLocationId} darkVersion={darkVersion} />
      <CustomRange getRange={getRange} darkVersion={darkVersion} />
    </div>
  );
};

export default SearchPanel;
