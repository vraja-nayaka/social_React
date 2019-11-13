const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
  dialogs: [
    { id: 1, name: "Леха" },
    { id: 2, name: "Игорь" },
    { id: 3, name: "Никита" },
    { id: 4, name: "Хари" },
    { id: 5, name: "Василий" }
  ],
  messages: [
    { id: 1, message: "Привет" },
    { id: 2, message: "Хеллоу" },
    { id: 3, message: "Как жизнь?" },
    { id: 4, message: "Нормально!" },
    { id: 5, message: "Ок...." }
  ],
  newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      debugger
      let newMessage = {
        id: 6,
        message: state.newMessageBody,
      };
      state.messages.push(newMessage);
      state.newMessageBody = '';
      return state;
    default:
      return state;
  }
};

export const updateNewMessageBodyAC = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });
export const sendMessageAC = () => ({ type: SEND_MESSAGE });

export default dialogsReducer