export function mapStateToProps(state) {
  return {
    loggedInUser:state.loggedInUser,
    nameUser:state.nameUser,
    ldidUser:state.ldidUser,
    requestKey:state.requestKey,
    loggedIn:state.loggedIn,
    name:state.name,
    urlPic:state.urlPic,

   }
}
