import ClientLayout from "../general/clientLayout";
import { useContext, useState, useEffect } from "react";
import { MainContext } from "../context/mainContext";

const Settings = () => {
  const { setSideState } = useContext(MainContext);

  const initialState = {
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  };

  const [settingsData, setSettingsData] = useState(initialState);

  const verificationState = {
    phoneVerification: false,
    securityQuestion: false,
  };

  const [verificationData, setVerificationData] = useState(verificationState);

  const handlePhone = (e) => {
    e.preventDefault();
    setVerificationData({
      phoneVerification: !verificationData.phoneVerification,
    });
  };

  const handleQuestion = (e) => {
    e.preventDefault();
    setVerificationData({
      securityQuestion: !verificationData.securityQuestion,
    });
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setSettingsData({ ...settingsData, [name]: value });
  };

  const submitPhone = (e) => {
    e.preventDefault();
    setVerificationData({
      phoneVerification: !verificationData.phoneVerification,
    });
  };

  useEffect(() => {
    setSideState({
      settings: true,
    });
  }, []);

  return (
    <ClientLayout>
      <div className="settings_header">
        <p>Settings</p>
      </div>
      <div className="shipper_settings_row">
        <div className="details_set_header">
          <p>CHANGE PASSWORD</p>
        </div>
        <div className="settings_column">
          <div className="settings_row flex_row">
            <div className="settings_row_title sm10 flex_row">
              <p>Current Password</p>
            </div>
            <div className="settings_row_input sm10">
              <input
                type="text"
                onChange={handleChange}
                name=""
                placeholder="Current Password"
                id=""
              />
            </div>
          </div>
          <div className="settings_row flex_row">
            <div className="settings_row_title sm10 flex_row">
              <p>New Password</p>
            </div>
            <div className="settings_row_input sm10">
              <input
                type="text"
                onChange={handleChange}
                name=""
                placeholder="New password"
                id=""
              />
            </div>
          </div>
          <div className="settings_row flex_row">
            <div className="settings_row_title sm10 flex_row">
              <p>Confirm Password</p>
            </div>
            <div className="settings_row_input sm10">
              <input
                type="text"
                onChange={handleChange}
                name=""
                placeholder="Confirm password"
                id=""
              />
            </div>
          </div>
          <div className="settings_row_button flex_row">
            <p>Save Changes</p>
          </div>
        </div>
        <div className="settings_column">
          <div className="settings_row flex_row">
            <div className="settings_row_title sm10">
              <p>PHONE VERIFICATION</p>
            </div>
            <div className="settings_row_input sm10 flex_row">
              <div className="settings_content m10">
                {verificationData.phoneVerification == true ? (
                  <input
                    className="m10"
                    type="number"
                    placeholder="phone number"
                  />
                ) : (
                  <p>
                    Your phone is verified with sendit. Click Edit to change
                    your phone number
                  </p>
                )}
              </div>
              <div className="settings_button m-mg-tp5 m4 flex_row">
                {verificationData.phoneVerification ? (
                  <p className="m10" onClick={submitPhone}>
                    Submit
                  </p>
                ) : (
                  <p className="m10" onClick={handlePhone}>
                    Edit
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="settings_row flex_row">
            <div className="settings_row_title sm10">
              <p>SECURITY QUESTION</p>
            </div>
            <div className="settings_row_input sm10 flex_row">
              <div className="settings_content m10">
                <p>
                  By creating a security question, you will add an additional
                  layer of protection for your revenue withdrawals and for
                  changing your password.{" "}
                </p>
              </div>
              <div className="settings_button m-mg-tp5 m4 flex_row">
                <p className="m10" onClick={handleQuestion}>
                  Edit
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ClientLayout>
  );
};

export default Settings;
