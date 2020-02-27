const SEND_MESSAGE = 'SEND_MESSAGE';

export type DialogsType = {
  id: number
  name: string
}
type MessageType = {
  id: number
  message: string
}

export type InitialStateType = typeof initialState

let initialState = {
  dialogs: [
    { id: 1, name: "Alexei" },
    { id: 2, name: "George" },
    { id: 3, name: "Valentine" },
    { id: 4, name: "Toni" },
    { id: 5, name: "Winston" }
  ] as Array<DialogsType>,
  messages: [
    { id: 1, message: "Привет" },
    { id: 2, message: "Хеллоу" },
    { id: 3, message: "Как жизнь?" },
    { id: 4, message: "Нормально!" },
    { id: 5, message: "Ок...." }
  ] as Array<MessageType>
};

const dialogsReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        id: 6,
        message: action.newMessage,
      };
      return {
        ...state,
        messages: [...state.messages, newMessage]
      };
    default:
      return state;
  }
};
type sendMessageActionType = {
  type: typeof SEND_MESSAGE,
  newMessage: string
}
export const sendMessage = (newMessage: string): sendMessageActionType => ({ type: SEND_MESSAGE, newMessage });

export default dialogsReducer