
function getLoginvalue() {
    document.getElementById("test").innerHTML = loginValue;  
}

function checkLogin() {
    let id_value = document.getElementById("id_text_value").value;
    let pw_value = document.getElementById("pw_text_value").value;
    let loginValue = [id_value, pw_value]

    if (id_value == '1234' && pw_value == '1234') {
        window.location.replace('/Practice/Practice/indexPage/index.html')
    }
    else {
        alert('오류!!!')
    }
}