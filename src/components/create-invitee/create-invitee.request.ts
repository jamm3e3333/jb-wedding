import axios from 'axios'
const CREATE_INVITEE_URL = 'https://api-k4nbgqqtqq-uc.a.run.app/invitee'
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

export const createInviteeRequest = (message: CreateInviteeInterface) => {
  return axios({
    url: CREATE_INVITEE_URL,
    method: 'post',
    data: message,
    headers: {
      'Content-Type': 'application/json',
    }
  })
}
