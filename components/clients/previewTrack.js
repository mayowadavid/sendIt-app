import React, { useState } from "react";
import { useContext, useEffect } from "react";
import { MainContext } from "../context/mainContext";
import ClientLayout from "../general/clientLayout";

const PreviewTrack = () => {
  const { setSideState, router } = useContext(MainContext);
  const { trackNumber, setTrackNumber } = useState("");

  useEffect(() => {
    setSideState({
      track: true,
    });
  }, []);

  const submitTracking = (e) => {
    e.preventDefault();
  };

  return (
    <ClientLayout>
      <div className="transaction_track m-mg-tp10 xl-mg-tp10 flex_row">
        <div className="track_input">
          <input
            type="text"
            placeholder="Tracking number"
            value={trackNumber}
          />
        </div>
        <div onClick={submitTracking} className="track_button sm3 flex_row">
          <p>Track</p>
        </div>
      </div>
      <div className="track_preview m-mg-tp10 xl-mg-tp10">
        <div className="track_row flex_row">
          <div className="track_rack flex_column">
            <div className="track_circle flex_row">
              <div className="track_circle_inner"></div>
            </div>
            <div className="track_horizon_length"></div>
          </div>
          <div className="track_content">
            <p>Package Processed</p>
            <p>United Kingdom</p>
            <p>July 11, 2022 9:58pm</p>
          </div>
        </div>
        <div className="track_row flex_row">
          <div className="track_rack flex_column">
            <div className="track_circle flex_row">
              <div className="track_circle_inner"></div>
            </div>
            <div className="track_horizon_length"></div>
          </div>
          <div className="track_content">
            <p>Package Processed</p>
            <p>United Kingdom</p>
            <p>July 11, 2022 9:58pm</p>
          </div>
        </div>
        <div className="track_row flex_row">
          <div className="track_rack flex_column">
            <div className="track_circle flex_row">
              <div className="track_circle_inner"></div>
            </div>
            <div className="track_horizon_length"></div>
          </div>
          <div className="track_content">
            <p>Package Processed</p>
            <p>United Kingdom</p>
            <p>July 11, 2022 9:58pm</p>
          </div>
        </div>
        <div className="track_row flex_row">
          <div className="track_rack flex_column">
            <div className="track_circle flex_row">
              <div className="track_circle_inner"></div>
            </div>
            <div className="track_horizon_length"></div>
          </div>
          <div className="track_content">
            <p>Awaiting Receiver</p>
            <p>United Kingdom</p>
            <p>July 11, 2022 8:00am</p>
          </div>
        </div>
        <div className="track_row flex_row">
          <div className="track_rack flex_column">
            <div className="track_circle_off flex_row">
              <div className="track_circle_inner"></div>
            </div>
            <div className="track_horizon_length_off"></div>
          </div>
          <div className="track_content">
            <p>Awaiting Receiver</p>
            <p>Lagos, NG</p>
            <p>July 16, 2022 8:00am</p>
          </div>
        </div>
      </div>
    </ClientLayout>
  );
};

export default PreviewTrack;
