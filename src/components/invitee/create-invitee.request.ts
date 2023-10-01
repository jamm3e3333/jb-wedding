import axios from 'axios'
const CREATE_INVITEE_URL = import.meta.env.VITE_CREATE_INVITEE_URL ?? ''
export interface CreateInviteeInterface {
  name: string;
  surname: string;
  phone: string;
  email: string;
  isAttending: boolean;
  personDescription?: string;
  foodRestriction?: string;
  questionOrComment?: string;
}

export const createInviteeRequest = async (message: CreateInviteeInterface) => {
  return axios({
    url: CREATE_INVITEE_URL,
    method: 'post',
    data: message,
    headers: {
      'Content-Type': 'application/json',
    }
  })
}
