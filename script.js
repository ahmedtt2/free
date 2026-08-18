let selectedPackage = "";

// اختيار الباقة
const packageButtons = document.querySelectorAll(".package-btn");

packageButtons.forEach(button => {

    button.addEventListener("click", () => {

        packageButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        selectedPackage = button.dataset.name;

    });

});

// زر الشحن
document.getElementById("buyDiamonds").addEventListener("click", () => {

    const playerId = document.querySelector("input").value.trim();

    if (playerId === "") {
        alert("أدخل معرف اللاعب أولاً");
        return;
    }

    if (selectedPackage === "") {
        alert("اختر الباقة أولاً");
        return;
    }

    document.getElementById("playerID").textContent =
        `${playerId} | ${selectedPackage}`;

    const modal = new bootstrap.Modal(
        document.getElementById("successModal")
    );

    modal.show();

});let selectedMember = "";

const memberButtons = document.querySelectorAll(".member-btn");

memberButtons.forEach(button => {

    button.addEventListener("click", () => {

        memberButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        selectedMember = button.dataset.name;

    });

});

document.getElementById("buyMember").addEventListener("click", () => {

    const playerId = document.querySelector("input").value.trim();

    if (playerId === "") {
        alert("أدخل معرف اللاعب أولاً");
        return;
    }

    if (selectedMember === "") {
        alert("اختر العضوية أولاً");
        return;
    }

    document.getElementById("playerID").textContent =
        `${playerId} | ${selectedMember}`;

    const modal = new bootstrap.Modal(
        document.getElementById("successModal")
    );

    modal.show();

});
let selectedBooyah = "";

const booyahBtn = document.querySelector(".booyah-btn");

booyahBtn.addEventListener("click", () => {

    booyahBtn.classList.toggle("active");

    selectedBooyah = booyahBtn.classList.contains("active")
        ? booyahBtn.dataset.name
        : "";

});

document.getElementById("buyBooyah").addEventListener("click", () => {

    const playerId = document.querySelector("input").value.trim();

    if (playerId === "") {
        alert("أدخل معرف اللاعب أولاً");
        return;
    }

    if (selectedBooyah === "") {
        alert("اختر Booyah Pass أولاً");
        return;
    }

    document.getElementById("playerID").textContent =
        `${playerId} | ${selectedBooyah}`;

    new bootstrap.Modal(
        document.getElementById("successModal")
    ).show();

});