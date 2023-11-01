function save_password() {
    let password = document.getElementById("password").value;
    let password_about =document.getElementById("password-about").value;

    if (password != ""){
        passwords_count = 0
        for (el in Object.keys(localStorage)) {
            passwords_count += 1;
        }
        localStorage.setItem(passwords_count + 1, `${password} | ${password_about}`);
        
        if (password_about == "") {
            alert(`Пароль сохранен!\nПароль: ${password}\nОписание: Без описания`)
        } else {
            alert(`Пароль сохранен!\nПароль: ${password}\nОписание: ${password_about}`)
        }
    } else {
        alert("Укажите пароль!")
    }
}

function get_passwords() {
    document.querySelector(".passwords-list").innerHTML = ""
    passwords = "Ваши сохраненные пароли:\n"
    passwords_count = 0
    for(let i = 0 ; i<localStorage.length ; i++) {
        passwords_count += 1
        let key = localStorage.key(i);
        let el = localStorage.getItem(key);
        document.querySelector(".passwords-list").innerHTML += `<p>${passwords_count}. ${el}</p>`;
    }

    if (passwords_count == 0) {
        document.querySelector(".passwords-list").innerHTML += `<p>У вас нет паролей</p>`;
    }
}

function delete_passwords() {
    localStorage.clear()
    document.querySelector(".passwords-list").innerHTML = "<p>Пароли очищены</p>"
}

function gen_password() {
    const chars = "abcdefghijklmnopqrstuvwxyz123456789";
    let password = "";
    let password_length = document.getElementById("password-length").value;
    for (let i = 0; i < password_length; i++) {
        password += chars[Math.floor(Math.random() * chars.length)]
    }

    let input = document.getElementById("password")
    input.value = password;
}

function clear_password() {
    let input = document.getElementById("password");
    let input_2 =document.getElementById("password-about");

    input.value = "";
    input_2.value = "";
}
