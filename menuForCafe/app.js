const menu = [
    {
      id: 1,
      title: "pizza",
      category: "flour",
      price: 15.99,
      img: "./images/item-1.jpeg",
      desc: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.`,
    },
    {
      id: 2,
      title: "hamburger",
      category: "burg",
      price: 7.99,
      img: "./images/item-2.jpg",
      desc: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.`,
    },
    {
      id: 3,
      title: "sandwich",
      category: "burg",
      price: 6.99,
      img: "./images/item-3.jpg",
      desc: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.`,
    },
    {
      id: 4,
      title: "chicken twister",
      category: "chick",
      price: 11.99,
      img: "./images/item-4.jpg",
      desc: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.`,
    },
    {
      id: 5,
      title: "chicken wings",
      category: "chick",
      price: 19.99,
      img: "./images/item-5.jpg",
      desc: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.`,
    },
    {
      id: 6,
      title: "french fries",
      category: "snack",
      price: 5.99,
      img: "./images/item-6.jpg",
      desc: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.`,
    },
    {
      id: 7,
      title: "pasta",
      category: "flour",
      price: 13.99,
      img: "./images/item-7.jpg",
      desc: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.`,
    },
    {
      id: 8,
      title: "barbeque sausage",
      category: "meat",
      price: 14.99,
      img: "./images/item-8.jpg",
      desc: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.`,
    },
    {
      id: 9,
      title: "donut",
      category: "snack",
      price: 1.99,
      img: "./images/item-9.jpeg",
      desc: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.`,
    },
  ];

const page = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", function() {
  displayMenu(menu);
  displayMenuBtns();
});

function displayMenu(menuArray) {
  let display = menuArray.map(function(item) {
    return `<article class="menu-item">
    <img src=${item.img} class="photo" alt=${item.title}/>
    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
        <h4 class="price">$${item.price}</h4>
      </header>
      <p class="item-text">${item.desc}</p>
    </div>
  </article>`
  });
  display = display.join('');
  //console.log(display);
  page.innerHTML = display;
};

function displayMenuBtns() {
  const categories = menu.reduce(function(values, item) {
    if(!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  },
  ["all"]
  );
  const categoryBtns = categories
    .map(function(category) {
      return `<button class="filter-btn" data-name=${category}>${category}</button>`;
    })
    .join("")
  //console.log(categoryBtns);
  container.innerHTML = categoryBtns;
  const filterBtns = container.querySelectorAll(".filter-btn");

  filterBtns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
      const categoryEx = e.currentTarget.dataset.name;
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === categoryEx) {
          return menuItem.category;
        }
      });
      // console.log(menuCategory)
      if (categoryEx === "all") {
        displayMenu(menu);
      } else {
        displayMenu(menuCategory);
      }
    })
  })
}
