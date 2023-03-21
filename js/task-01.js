/*
Напиши скрипт, який:
Порахує і виведе в консоль кількість категорій в ul#categories,
тобто елементів li.item.
Для кожного элемента li.item у списку ul#categories, знайде і виведе
в консоль текст заголовку елемента(тегу < h2 >) і кількість елементів 
в категорії(усіх < li >, вкладених в нього).
Для виконання цього завдання потрібно використати метод forEach() 
і властивості навігації по DOM.
*/
const categoriesList = document.querySelector("ul#categories");
const categoriesItems = categoriesList.querySelectorAll("li.item");
console.log(`Number of categories: ${categoriesItems.length}`);

const categoriesLi = document.querySelector("#categories");
const categoriesItem = categoriesLi.querySelectorAll("li.item");

categoriesItem.forEach((item) => {
  const categoriesNameTitle = item.querySelector("h2").textContent;
  const categoriesNumLi = item.querySelectorAll("li").length;
  console.log(
    `Category: ${categoriesNameTitle} 
     Elements: ${categoriesNumLi}`
  );
});
