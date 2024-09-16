let title = document.querySelector(".title");
let price = document.querySelector(".price");
let discount = document.querySelector(".discount");
let createBtn = document.getElementById("createBtn");
let count = document.querySelector(".count");
let category = document.querySelector(".category");
let search = document.querySelector(".search");
let searchTitle = document.querySelector(".search-title");
let searchCategory = document.querySelector(".search-category");
let viewTable = document.querySelector(".view-table");
let viewCards = document.querySelector(".view-cards");
let countProducts = document.querySelector(".countProducts");
let deleteAll = document.querySelector(".delete-all");
let table = document.querySelector(".table");
let boxGrid = document.querySelector(".boxes-grid");
let updateBtn = document.getElementById("updateBtn");

let arr = [];

viewCards.onclick = function () {
  boxGrid.classList.remove("d-none");
  table.classList.add("d-none");
};

viewTable.onclick = function () {
  boxGrid.classList.add("d-none");
  table.classList.remove("d-none");
};

function createBox(obj) {
  let box = document.createElement("div");
  boxGrid.append(box);
  box.classList.add("card");

  let titleH4 = document.createElement("h4");
  titleH4.classList.add("card-title");
  titleH4.textContent = obj.title;
  box.append(titleH4);

  let priceH5 = document.createElement("h5");
  priceH5.classList.add("card-subtitle", "text-body-secondary");
  priceH5.textContent = `Price: ${obj.price}`;
  box.append(priceH5);

  let discountH5 = document.createElement("h5");
  discountH5.classList.add("card-subtitle", "text-body-secondary");
  discountH5.textContent = `Discount: ${obj.discount}`;
  box.append(discountH5);

  let totalH5 = document.createElement("h5");
  totalH5.classList.add("card-subtitle", "text-body-secondary");
  totalH5.textContent = `Total Price: ${obj.price - obj.discount}`;
  box.append(totalH5);

  let CategoryH5 = document.createElement("h5");
  CategoryH5.classList.add("card-subtitle", "text-body-secondary");
  CategoryH5.textContent = `Category: ${obj.category}`;
  box.append(CategoryH5);

  let buttonsCont = document.createElement("div");
  buttonsCont.classList.add("buttons-cont", "mt-3");
  box.append(buttonsCont);

  let updateButton = document.createElement("input");
  updateButton.type = "button";
  updateButton.value = "Update";
  updateButton.classList.add("btn", "btn-warning");
  buttonsCont.append(updateButton);

  updateButton.onclick = function () {
    title.focus();
    count.classList.add("opacity-0");
    let box = this.parentElement.parentElement;

    let index = Array.prototype.indexOf.call(box.parentElement.children, box);

    updateBtn.classList.remove("d-none");
    createBtn.classList.add("d-none");
    title.value = obj.title;
    price.value = obj.price;
    discount.value = obj.discount;
    category.value = obj.category;

    updateBtn.onclick = function () {
      this.classList.add("d-none");
      createBtn.classList.remove("d-none");

      let thisObj =
        arr[
          arr
            .map((e, index) => {
              return e == obj ? index : null;
            })
            .filter((e) => e != null)[0]
        ];
      thisObj.title = title.value;
      thisObj.price = price.value;
      thisObj.discount = discount.value;
      thisObj.category = category.value;

      box.children[0].textContent = title.value;
      box.children[1].textContent = `Price: ${price.value}`;
      box.children[2].textContent = `Discount: ${discount.value}`;
      box.children[3].textContent = `Total Price: ${
        price.value - discount.value
      }`;
      box.children[4].textContent = `Category: ${category.value}`;

      localStorage.setItem("products", JSON.stringify(arr));

      table.lastElementChild.children[index].children[1].textContent =
        title.value;
      table.lastElementChild.children[index].children[2].textContent =
        price.value;
      table.lastElementChild.children[index].children[3].textContent =
        discount.value;
      table.lastElementChild.children[index].children[4].textContent =
        price.value - discount.value;
      table.lastElementChild.children[index].children[5].textContent =
        category.value;
    };
  };

  let deleteButton = document.createElement("input");
  deleteButton.type = "button";
  deleteButton.value = "Delete";
  deleteButton.classList.add("btn", "btn-danger");
  buttonsCont.append(deleteButton);

  deleteButton.onclick = function () {
    let thisTr = this.parentElement.parentElement;
    let index = Array.prototype.indexOf.call(
      thisTr.parentElement.children,
      thisTr
    );

    console.log(obj);
    arr.splice(
      arr
        .map((e, index) => {
          return e == obj ? index : null;
        })
        .filter((e) => e != null)[0],
      1
    );
    this.parentElement.parentElement.remove();
    table.lastElementChild.children[index].remove();
    localStorage.setItem("products", JSON.stringify(arr));

    countProducts.textContent = `(${arr.length})`;
  };
}

function createTr(obj) {
  let tr = document.createElement("tr");
  table.lastElementChild.append(tr);

  let idTd = document.createElement("td");
  tr.append(idTd);
  idTd.textContent = "";

  let titleTd = document.createElement("td");
  tr.append(titleTd);
  titleTd.textContent = obj.title;

  let priceTd = document.createElement("td");
  tr.append(priceTd);
  priceTd.textContent = obj.price;

  let discountTd = document.createElement("td");
  tr.append(discountTd);
  discountTd.textContent = obj.discount;

  let totalTd = document.createElement("td");
  tr.append(totalTd);
  totalTd.textContent = obj.price - obj.discount;

  let categoryTd = document.createElement("td");
  tr.append(categoryTd);
  categoryTd.textContent = obj.category;

  let updateTd = document.createElement("td");
  tr.append(updateTd);

  let updateButton = document.createElement("input");
  updateButton.type = "button";
  updateButton.value = "Update";
  updateButton.classList.add("btn", "btn-warning");
  updateTd.append(updateButton);

  updateButton.onclick = function () {
    title.focus();
    count.classList.add("invisible");
    let thisTr = this.parentElement.parentElement;

    console.log(thisTr.parentElement.children);
    let index = Array.prototype.indexOf.call(
      thisTr.parentElement.children,
      thisTr
    );

    updateBtn.classList.remove("d-none");
    createBtn.classList.add("d-none");
    title.value = obj.title;
    price.value = obj.price;
    discount.value = obj.discount;
    category.value = obj.category;

    updateBtn.onclick = function () {
      this.classList.add("d-none");
      createBtn.classList.remove("d-none");

      let thisObj =
        arr[
          arr
            .map((e, index) => {
              return e == obj ? index : null;
            })
            .filter((e) => e != null)[0]
        ];
      thisObj.title = title.value;
      thisObj.price = price.value;
      thisObj.discount = discount.value;
      thisObj.category = category.value;

      thisTr.children[1].textContent = title.value;
      thisTr.children[2].textContent = price.value;
      thisTr.children[3].textContent = discount.value;
      thisTr.children[5].textContent = category.value;
      thisTr.children[4].textContent = price.value - discount.value;

      localStorage.setItem("products", JSON.stringify(arr));

      boxGrid.children[index].children[0].textContent = title.value;
      boxGrid.children[index].children[1].textContent = `Price: ${price.value}`;
      boxGrid.children[
        index
      ].children[4].textContent = `Category: ${category.value}`;
      boxGrid.children[
        index
      ].children[2].textContent = `Discount: ${discount.value}`;
      boxGrid.children[index].children[3].textContent = `Total Price: ${
        price.value - discount.value
      }`;
    };
  };

  let deleteTd = document.createElement("td");
  tr.append(deleteTd);

  let deleteButton = document.createElement("input");
  deleteButton.type = "button";
  deleteButton.value = "Delete";
  deleteButton.classList.add("btn", "btn-danger");
  deleteTd.append(deleteButton);

  deleteButton.onclick = function () {
    let thisTr = this.parentElement.parentElement;
    let index = Array.prototype.indexOf.call(
      thisTr.parentElement.children,
      thisTr
    );
    console.log(index);
    console.log(
      arr
        .map((e, index) => {
          return e == obj ? index : null;
        })
        .filter((e) => e != null)[0]
    );
    arr.splice(
      arr
        .map((e, index) => {
          return e == obj ? index : null;
        })
        .filter((e) => e != null)[0],
      1
    );
    this.parentElement.parentElement.remove();
    boxGrid.children[index].remove();
    localStorage.setItem("products", JSON.stringify(arr));

    countProducts.textContent = `(${arr.length})`;
  };
  countProducts.textContent = `(${arr.length})`;
}

if (
  localStorage.getItem("products") != "" &&
  localStorage.getItem("products") != null
) {
  arr = JSON.parse(localStorage.getItem("products"));
  arr.forEach((e) => {
    createTr(e);
    createBox(e);
  });
} else {
  localStorage.setItem("products", JSON.stringify(arr));
}
if (arr.length == 0) {
  deleteAll.classList.add("d-none");
}

deleteAll.onclick = function () {
  for (let i = 0; i < arr.length; i++) {
    table.lastElementChild.children[0].remove();
    boxGrid.children[0].remove();
  }
  arr = [];
  localStorage.setItem("products", JSON.stringify(arr));
  this.classList.add("d-none");
};

createBtn.onclick = function () {
  if (
    category.value != "" &&
    title.value != "" &&
    price.value != "" &&
    discount.value != ""
  ) {
    deleteAll.classList.remove("d-none");
    let obj = new Object();
    document.querySelectorAll(".given").forEach((e) => {
      obj[e.getAttribute("func")] = e.value;
    });
    if (count.value > 0 && count.value != "") {
      for (let i = 0; i < count.value; i++) {
        arr.push(obj);
        createTr(obj);
        createBox(obj);
      }
    } else {
      arr.push(obj);

      createTr(obj);
      createBox(obj);
    }
    localStorage.setItem("products", JSON.stringify(arr));
    console.log(obj);

    title.value = "";
    price.value = "";
    count.value = "";
    discount.value = "";
    category.value = "";
    title.focus();
  }
};

search.onkeyup = function () {
  console.log(search.value);
};

document.querySelectorAll(".choose").forEach((e) => {
  e.querySelectorAll("input").forEach((element) => {
    element.addEventListener("click", function () {
      e.querySelectorAll("input").forEach((all) => {
        all.classList.remove("active");
      });
      element.classList.add("active");
    });
  });
});

search.onkeyup = function () {
  if (search.value != "") {
    deleteAll.classList.add("d-none");
  } else {
    deleteAll.classList.remove("d-none");
  }
  if (searchTitle.classList.contains("active")) {
    let results = arr.filter((e) => {
      return e.title.includes(search.value);
    });
    console.log(results);
    if (results.length == 0) {
      boxGrid.innerHTML = "";
      table.lastElementChild.innerHTML = "";
      // arr.forEach((e) => {
      //   createTr(e)
      //   createBox(e)
      // })
    } else {
      for (let i = 0; i < arr.length; i++) {
        boxGrid.innerHTML = "";
        table.lastElementChild.innerHTML = "";
      }
      results.forEach((e) => {
        createTr(e);
        createBox(e);
      });
    }
  } else {
    let results = arr.filter((e) => {
      return e.category.includes(search.value);
    });
    console.log(results);
    if (results.length == 0) {
      boxGrid.innerHTML = "";
      table.lastElementChild.innerHTML = "";
      // arr.forEach((e) => {
      //   createTr(e)
      //   createBox(e)
      // })
    } else {
      for (let i = 0; i < arr.length; i++) {
        boxGrid.innerHTML = "";
        table.lastElementChild.innerHTML = "";
      }
      results.forEach((e) => {
        createTr(e);
        createBox(e);
      });
    }
  }
};
