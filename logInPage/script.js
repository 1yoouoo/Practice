
function getLoginvalue() {
    let id_value = document.getElementById("id_text_value").value;
    let pw_value = document.getElementById("pw_text_value").value;
    let loginValue = [id_value, pw_value]
    document.getElementById("test").innerHTML = loginValue;  
}

