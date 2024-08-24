const testFn = () => {
  console.log("Hello World");
};

const testIbj = {
  key1: "value1",
  key2: "value2",
};

const saveUserInfo = (data) => {
  localStorage.setItem("cred", JSON.stringify(data));
};

const clearUserInfo = () => {
  localStorage.removeItem("cred");
};

const isLogedIn = () => {
    try{
    const val=JSON.parse(localStorage.getItem('cred'));
    return !!val;
    }catch{
        return false
    }
};

export { testFn, saveUserInfo, clearUserInfo, isLogedIn };

export default testIbj;
