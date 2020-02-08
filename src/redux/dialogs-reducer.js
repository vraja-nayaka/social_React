const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
  dialogs: [
    { id: 1, name: "Alexei" },
    { id: 2, name: "George" },
    { id: 3, name: "Valentine" },
    { id: 4, name: "Toni" },
    { id: 5, name: "Winston" }
  ],
  messages: [
    { id: 1, message: "Привет" },
    { id: 2, message: "Хеллоу" },
    { id: 3, message: "Как жизнь?" },
    { id: 4, message: "Нормально!" },
    { id: 5, message: "Ок...." }
  ]
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        id: 6,
        message: action.newMassage,
      };
      return {
        ...state,
        messages: [...state.messages, newMessage]
      };
    default:
      return state;
  }
};

export const sendMessage = (newMassage) => ({ type: SEND_MESSAGE, newMassage });

export default dialogsReducer