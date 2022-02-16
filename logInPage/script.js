
function isLogin() {
    return localStorage.getItem("idKey") !== null;
}

function logout() {
    console.log("logout");
    localStorage.removeItem("idKey", null);
    localStorage.removeItem("pwKey", null);
}

function getPostList() {
    return [{title: 'jito', content: 'hello'}]
}