const categoryAllEl = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoryAllEl.length}`);

categoryAllEl.forEach((el) =>
  console.log(
    `Category: ${el.firstElementChild.textContent}`,
    `\nElements: ${el.lastElementChild.children.length}`
  )
);
