import {StatusType} from "../type/status-type";

const DEFAULT_MESSAGE = 'Something went wrong while submitting the form. Try again later.'
export const statusToMessageMap = new Map<StatusType, string>([
  [
    'success', 'Successfully submitted the invitee form. In case you have a +1, fill in the form once again.'
  ],
  [
    'error', 'Failed to submit the invitee form. Try again later, please.'
  ],
  [
    'validation-error', 'You might have filled already the form with used number or email. Please, try again.'
  ],
  [
    'warning', "You might have forgotten to fill some fields or some fields might be invalid. Please, check all the fields and fill the form again."
  ]
])

const getMessageForStatus = (status: StatusType): string => {
  const message = statusToMessageMap.get(status)
  if (!message) {
    return DEFAULT_MESSAGE
  }
  return message
}

export default getMessageForStatus
