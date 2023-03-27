import React from "react";
import ClientLayout from "./clientLayout";

const Notification = () => {
  return (
    <ClientLayout>
      <div className="message_header">
        <p>Notifications</p>
      </div>
      <div class="notificationWrap xl10">
        <div class="recentNotification xl10">
          <div class="notifcationHead remove_margin border">
            <p>Recent Notifications</p>
          </div>
          <div class="notifcation_row border flex_row">
            <div class="notification_no_action flex_row">
              <div class="icon_section flex_row xl1 sm2">
                <img alt="sendit" src="/svg/notifcationFull.svg" />
              </div>
              <div class="icon_section xl8 remove_margin sm8">
                <p>[Achievement Name] You’ve earned an achievement!</p>
                <p>7:38 Am</p>
              </div>
            </div>
            <div class="notification_action flex_row">
              <div class="notification_button remove_margin">
                <p>Open</p>
              </div>
              <div class="notification_close sm-off">
                <img alt="sendit" src="/svg/close_small.svg" />
              </div>
            </div>
          </div>
          <div class="notifcation_row border flex_row">
            <div class="notification_no_action flex_row">
              <div class="icon_section flex_row xl1 sm2">
                <img alt="sendit" src="/svg/notifcationFull.svg" />
              </div>
              <div class="icon_section xl8 remove_margin sm8">
                <p>[Achievement Name] You’ve earned an achievement!</p>
                <p>7:38 Am</p>
              </div>
            </div>
            <div class="notification_action flex_row">
              <div class="notification_button remove_margin">
                <p>Open</p>
              </div>
              <div class="notification_close sm-off">
                <img alt="sendit" src="/svg/close_small.svg" />
              </div>
            </div>
          </div>
        </div>
        <div class="earlierNotification xl10">
          <div class="notifcationHead remove_margin border">
            <p>Earlier Notifications</p>
          </div>
          <div class="notifcation_row border flex_row">
            <div class="notification_no_action flex_row">
              <div class="icon_section flex_row xl1 sm2">
                <img alt="sendit" src="/svg/notifcationFull.svg" />
              </div>
              <div class="icon_section xl8 remove_margin sm8">
                <p>Congratulations! You’ve received your first order today!</p>
                <p>7:38 Am</p>
              </div>
            </div>
            <div class="notification_action flex_row">
              <div class="notification_button remove_margin">
                <p>Open</p>
              </div>
              <div class="notification_close sm-off">
                <img alt="sendit" src="/svg/close_small.svg" />
              </div>
            </div>
          </div>
          <div class="notifcation_row border flex_row">
            <div class="notification_no_action flex_row">
              <div class="icon_section flex_row xl1 sm2">
                <img alt="sendit" src="/svg/notifcationFull.svg" />
              </div>
              <div class="icon_section xl8 remove_margin sm8">
                <p>Congratulations! You’ve received your first order today!</p>
                <p>7:38 Am</p>
              </div>
            </div>
            <div class="notification_action flex_row">
              <div class="notification_button remove_margin">
                <p>Open</p>
              </div>
              <div class="notification_close sm-off">
                <img alt="sendit" src="/svg/close_small.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ClientLayout>
  );
};

export default Notification;
