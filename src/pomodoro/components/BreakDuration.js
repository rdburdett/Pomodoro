import React from "react";
import { minutesToDuration } from "../../utils/duration";

function BreakDuration({
  breakDuration,
  decreaseBreak,
  splatCountHandler,
  splat,
  increaseBreak,
  }) {
  return (
    <div className="row mb-2">
      <div className="col">
        <div>
          <div className="justify-content-center input-group input-group-lg mb-2">
            <span
              className="input-group-text bg-secondary text-light border border-secondary end-fix"
              data-testid="duration-break"
            >
              {/* TODO: DONE Update this text to display the current break session duration */}
              Break Duration: {minutesToDuration(breakDuration)}
            </span>
            <div className="input-group-append">
              {/* TODO: DONE Implement decreasing break duration and disable during a focus or break session*/}
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="decrease-break"
                onClick={() => {
                  decreaseBreak();
                  splat();
                  splatCountHandler();
                }}
              >
                <span className="oi oi-minus" />
              </button>
              {/* TODO: DONE Implement increasing break duration and disable during a focus or break session*/}
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="increase-break"
                onClick={() => {
                  increaseBreak();
                  splat();
                  splatCountHandler();
                }}
              >
                <span className="oi oi-plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BreakDuration;
