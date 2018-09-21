const initialState = {
  
  //INFO USER SPORTIF (GEONAUTE ACCOUNT...)
  loggedInUser:false,
  nameUser:"",
  ldidUser:"",
  requestKey:"",

  //INFO DKT MEMBER (GOOGLE CONNECT)
  loggedIn:false,
  name:"",
  urlPic:"",

};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,loggedIn:action.loggedIn,name:action.name,urlPic:action.urlPic
      };

    case 'LOGINUSER':
      return {
        ...state,loggedInUser:action.loggedInUser,nameUser:action.nameUser,ldidUser:action.ldidUser,requestKey:action.requestKey
      };

      default:
      return state;
    }

}

export default reducer;
