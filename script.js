const openModal = document.querySelectorAll(".openModal")
const closeModal = document.querySelectorAll(".closeModal")
const overlays = document.querySelectorAll(".modal__overlay");

openModal.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        const targetSelector = btn.getAttribute("data-target");
        const modal = document.querySelector(targetSelector);
        if (modal) modal.classList.add("active");
    });
});

closeModal.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        const modal = btn.closest(".modal");
        modal.classList.remove("active");
    });
});

overlays.forEach((overlay) => {
    overlay.addEventListener("click", () => {
        overlay.closest(".modal").classList.remove("active");
    });
});



// const optionMenu = document.querySelectorAll(".input-container.select-menu"),
//     selectBtn = optionMenu.querySelector(".input-layout.select-menu"),
//     options = optionMenu.querySelectorAll(".option"),
//     menuText = optionMenu.querySelector(".text")

// selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"))

// options.forEach(option =>{
//     option.addEventListener("click", () =>{
//         let selectedOption = option.querySelector(".option-text").innerText
//         menuText.innerText = selectedOption;
//         console.log(selectedOption)
//     })
// })

document.querySelectorAll(".input-container.select-menu").forEach((optionMenu) => {
    const selectBtn = optionMenu.querySelector(".input-layout.select-menu");
    const options = optionMenu.querySelectorAll(".option");
    const menuText = optionMenu.querySelector(".text");

    selectBtn.addEventListener("click", () => {
        optionMenu.classList.toggle("active");
    });

    options.forEach((option) => {
        option.addEventListener("click", () => {
        let selectedOption = option.querySelector(".option-text").innerText;
        menuText.innerText = selectedOption;
        });
    });
});