import ClientLayout from "../general/clientLayout";
import { useContext, useState, useEffect } from "react";
import { MainContext } from "../context/mainContext";
import { useCreateMutation } from "../functions/customHook";
import { UPDATE_PASSWORD } from "../mutation/user/user";

const Settings = () => {
  const { setSideState, userData, loading, setLoading } = useContext(MainContext);

  const initialState = {
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  };

  const {create} = useCreateMutation(UPDATE_PASSWORD);

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
    setLoading(false);
    setSettingsData({ ...settingsData, [name]: value });
  };

  const submitPhone = (e) => {
    e.preventDefault();
    setVerificationData({
      phoneVerification: !verificationData.phoneVerification,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    const {id} = userData;
    const {currentPassword, newPassword} = settingsData;
    const userDatas = {
      id,
      password: currentPassword, 
      newPassword
    };
    setLoading(true);
   const {data, error} = create({
      variables: {
          userDatas,
      }
  });
  (data != undefined || error != undefined) && (
  setLoading(false), 
  setSettingsData(initialState));
  }

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
                name="currentPassword"
                placeholder="Current Password"
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
                name="newPassword"
                placeholder="New password"
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
                name="confirmPassword"
                placeholder="Confirm password"
              />
            </div>
          </div>
          <div onClick={submit} className="settings_row_button flex_row">
            <button className={ loading == true ? 'loading' : '' }>
            {loading == true && <img className='load' src="/svg/loading.svg" alt="sendit" />}
            {'Save Changes'}
            </button>
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
