"use strict";

window.addEventListener("DOMContentLoaded", () => {
    const addTask = document.querySelector(".addTask");
    const addBtn = document.querySelector("#task-btn");

    addBtn.addEventListener("click", () => {
        const notComplated = document.querySelector(".notCompleted"),
            complated = document.querySelector(".completed"),
            input = document.querySelector("#task"),
            newLi = document.createElement("li"),
            checkBtn = document.createElement("button"),
            delBtn = document.createElement("button");

        checkBtn.innerHTML = `<i class="fa fa-check"></i>`;
        delBtn.innerHTML = `<i class="fa fa-trash"></i>`;
        if (input.value) {
            newLi.textContent = input.value;
            input.value = "";
            newLi.appendChild(delBtn);
            newLi.appendChild(checkBtn);
            notComplated.appendChild(newLi);
        }

        checkBtn.addEventListener("click", function () {
            const parent = this.parentNode;
            parent.remove();
            complated.appendChild(parent);
            checkBtn.style.display = "none";
        });

        delBtn.addEventListener("click", function () {
            const parent = this.parentNode;
            parent.remove();
        });
    });
});