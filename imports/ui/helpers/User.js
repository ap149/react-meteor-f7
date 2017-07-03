const LOCAL_STORE_NAME = 'datePollApp'

const User = {
  createUser() {
    console.log("create user");
  },

  setLocalStore(obj){
    localStorage.setItem(LOCAL_STORE_NAME, JSON.stringify(obj));
  },

  getLocalStore(){
    return JSON.parse(localStorage.getItem(LOCAL_STORE_NAME));
  }
}

export default User;