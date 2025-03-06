

// تفعيل الوضع الداكن
document.addEventListener("DOMContentLoaded", function () {
    let darkModeToggle = document.createElement("button");
    darkModeToggle.innerText = "تبديل الوضع الداكن";
    darkModeToggle.classList.add("button");
    darkModeToggle.onclick = function () {
        document.body.classList.toggle("dark-mode");
    };
    document.body.prepend(darkModeToggle);
});

// إضافة مستخدم جديد
function addUser() {
    let table = document.getElementById("usersTable");
    let rowCount = table.rows.length;
    let row = table.insertRow(rowCount);
    
    row.insertCell(0).innerHTML = rowCount; // ترقيم المستخدمين
    row.insertCell(1).innerHTML = document.getElementById("nameInput").value;
    row.insertCell(2).innerHTML = document.getElementById("emailInput").value;
    row.insertCell(3).innerHTML = '<button class="button" onclick="editUser(this)">تعديل</button> <button class="button" onclick="deleteUser(this)">حذف</button>';

    document.getElementById("nameInput").value = "";
    document.getElementById("emailInput").value = "";
}

// حذف مستخدم
function deleteUser(btn) {
    let row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
    updateUserNumbers();
}

// تعديل مستخدم
function editUser(btn) {
    let row = btn.parentNode.parentNode;
    let name = row.cells[1].innerHTML;
    let email = row.cells[2].innerHTML;

    let newName = prompt("تعديل الاسم:", name);
    let newEmail = prompt("تعديل البريد:", email);

    if (newName && newEmail) {
        row.cells[1].innerHTML = newName;
        row.cells[2].innerHTML = newEmail;
    }
}

// تحديث أرقام المستخدمين بعد الحذف
function updateUserNumbers() {
    let table = document.getElementById("usersTable");
    for (let i = 1; i < table.rows.length; i++) {
        table.rows[i].cells[0].innerHTML = i;
    }
}
