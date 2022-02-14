import React from "react";
import { minutesToDuration } from "../../utils/duration";

function FocusDuration({
  focusDuration,
  decreaseFocus,
  splatCountHandler,
  splat,
  increaseFocus,
  }) {
  return (
    <div className="row mb-2">
      <div className="col">
        <div className="justify-content-center input-group input-group-lg mb-2">
          <span
            className="input-group-text bg-secondary text-light border border-secondary end-fix"
            data-testid="duration-focus"
          >
            {/* TODO: DONE Update this text to display the current focus session duration */}
            Focus Duration: {minutesToDuration(focusDuration)}
          </span>
          <div className="input-group-append">
            {/* TODO: DONE Implement decreasing focus duration and disable during a focus or break session */}
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="decrease-focus"
              onClick={() => {
                decreaseFocus();
                splat();
                splatCountHandler();
              }}
            >
              <span className="oi oi-minus" />
            </button>
            {/* TODO: DONE Implement increasing focus duration and disable during a focus or break session */}
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="increase-focus"
              onClick={() => {
                increaseFocus();
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
  );
}

export default FocusDuration;
