import styles from "../submit-message.module.scss";
import {StatusType} from "../type/status-type";

const statusToSubmitStyle = new Map<StatusType, string>([
  ['success', styles['submit-message-successful']],
  ['error', styles['submit-message-failed']],
  ['validation-error', styles['submit-message-failed']],
  ['warning', styles['submit-message-warning']],
])

const getSubmitStyleForStatus = (status: StatusType): string => {
  const submitStyle = statusToSubmitStyle.get(status)
  if (!submitStyle) {
    return ''
  }
  return submitStyle
};

export default getSubmitStyleForStatus
