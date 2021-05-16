import {notification} from 'antd';
import {message} from "antd";

export const openNotificationWithIcon = (type, title, description) => {
    notification[type]({
        message: title + `${"topLeft"}`,
        description: description,
        placement: "topLeft",
    });
};

export const openSuccessNotificationWithIcon = (title, description) => {
    openNotificationWithIcon("success", title, description)
};
export const openInfoNotificationWithIcon = (title, description) => {
    openNotificationWithIcon("info", title, description)
};
export const openWarningNotificationWithIcon = (title, description) => {
    openNotificationWithIcon("warning", title, description)
};
export const openErrNotificationWithIcon = (title, description) => {
    openNotificationWithIcon("error", title, description)
};

export const success = (msg) => {
    message.success(msg);
};

export const error = (msg) => {
    message.error(msg);
};

export const warning = (msg) => {
    message.warning(msg);
};
