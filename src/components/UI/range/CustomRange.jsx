import React, { useEffect, useState } from "react";
import "./CustomRange.scss";

function CustomRange({ getRange, darkVersion }) {
  const [beforeValue, setBeforeValue] = useState(null);
  const [afterValue, setAfterValue] = useState(null);
  const [showBlock, setShowBlock] = useState(false);

  useEffect(() => {
    getRange(afterValue, beforeValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [beforeValue, afterValue]);

  return (
    <div
      className={
        (showBlock
          ? "custom custom_range range_is_open"
          : "custom custom_range") + (darkVersion ? " range__dark" : "")
      }
    >
      <div
        className="range__click"
        onClick={() => setShowBlock(!showBlock)}
      ></div>
      <div className="range__input">
        <div className="range__placeholder">
          <span className="range__placeholder__value">Created</span>
          <svg
            className={
              showBlock
                ? "range__placeholder__svg arrow__open"
                : "range__placeholder__svg"
            }
            viewBox="0 0 20 20"
            onClick={() => setShowBlock(!showBlock)}
          >
            <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
          </svg>
        </div>

        {showBlock ? (
          <div className="range__open">
            <div className="range__open__inputs">
              <input
                type="text"
                className="range__open__inputs__after"
                placeholder="from"
                onChange={(e) => setAfterValue(e.target.value)}
                value={afterValue === null ? "" : afterValue}
              />

              <div className="range__open__inputs__line">
                <svg
                  width="12"
                  height="1"
                  viewBox="0 0 12 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line y1="0.5" x2="12" y2="0.5" stroke="black" />
                </svg>
              </div>

              <input
                type="text"
                className="range__open__inputs__after"
                placeholder="before"
                onChange={(e) => setBeforeValue(e.target.value)}
                value={beforeValue === null ? "" : beforeValue}
              />
            </div>
          </div>
        ) : undefined}
      </div>
    </div>
  );
}

export default CustomRange;
