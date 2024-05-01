const category = document.getElementById("category");
import {
  categoryArray,
  containerArray,
  recentPostArray,
  ProductThatIhaveArray,
} from "./data.js";

for (let i = 0; i < categoryArray.length; i++) {
  const element = categoryArray[i];

  const categoryDiv = document.createElement("div");
  categoryDiv.className = "categoryDiv";

  const categoryTitle = document.createElement("p");
  categoryTitle.textContent = element.categoryName;

  const categoryCount = document.createElement("p");
  categoryCount.textContent = element.count;

  categoryDiv.append(categoryTitle, categoryCount);
  category.appendChild(categoryDiv);
}

const container = document.getElementById("container_right");
for (let i = 0; i < containerArray.length; i++) {
  const element = containerArray[i];

  const flex = document.createElement("div");
  container.appendChild(flex);
  flex.className = "TwoFlex TwoFlex-" + (i + 1);

  const containerDiv = document.createElement("div");
  flex.appendChild(containerDiv);
  containerDiv.className = "container-right container-right-" + (i + 1);

  const containerImage = document.createElement("img");
  containerImage.src = element.image;
  containerImage.className = "container-image container-image-" + (i + 1);

  containerDiv.appendChild(containerImage);

  //!

  const collectDiv = document.createElement("div");
  containerDiv.appendChild(collectDiv);
  collectDiv.className = "collectDiv collectDiv-" + (i + 1);

  const containerData = document.createElement("p");
  containerData.textContent = element.data;
  containerData.className = "container-data container-data-" + (i + 1);

  const containerTitle = document.createElement("h1");
  containerTitle.textContent = element.title;
  containerTitle.className = "container-Title container-Title-" + (i + 1);

  const containerDescription = document.createElement("p");
  containerDescription.textContent = element.description;
  containerDescription.className =
    "container-description container-description-" + (i + 1);

  const containerDivFlex = document.createElement("div");
  containerDiv.appendChild(containerDivFlex);
  containerDivFlex.className = "Flex Flex-" + (i + 1);
  collectDiv.append(
    containerData,
    containerTitle,
    containerDescription,
    containerDivFlex
  );

  const containerDivFlexLocImgLoc = document.createElement("div");
  containerDivFlex.appendChild(containerDivFlexLocImgLoc);
  containerDivFlexLocImgLoc.className =
    "containerDivFlexLocImgLoc containerDivFlexLocImgLoc-" + (i + 1);

  const LocationIconTag = document.createElement("img");
  LocationIconTag.src = element.locationIcon;

  const LocationTag = document.createElement("span");
  LocationTag.textContent = element.location;
  containerDivFlexLocImgLoc.append(LocationIconTag, LocationTag);

  const containerDivFlexLocImgLoc1 = document.createElement("div");
  containerDivFlex.appendChild(containerDivFlexLocImgLoc1);

  containerDivFlexLocImgLoc1.className =
    "containerDivFlexLocImgLoc containerDivFlexLocImgLoc-" + (i + 1);

  const LocationIconTag1 = document.createElement("img");
  LocationIconTag1.src = element.commentIcon;

  const LocationTag1 = document.createElement("p");
  LocationTag1.textContent = element.comment;
  containerDivFlexLocImgLoc1.append(LocationIconTag1, LocationTag1);
}
// !
// *
const PurchaseSomething = document.createElement("div");
container.appendChild(PurchaseSomething);
PurchaseSomething.className = "PurchaseSomething";

const PurchaseSomethingTitle = document.createElement("h1");
PurchaseSomethingTitle.textContent = "Embark on your journey with us today!";

const PurchaseSomethingButton = document.createElement("button");
PurchaseSomethingButton.textContent = "Book NOW";

PurchaseSomething.append(PurchaseSomethingTitle, PurchaseSomethingButton);

//

const recentPostTag = document.getElementById("recentPost");
for (let i = 0; i < recentPostArray.length; i++) {
  const element = recentPostArray[i];

  const PostDivTag = document.createElement("div");
  PostDivTag.className = "mainRecentPostDiv";
  recentPostTag.appendChild(PostDivTag);

  const postImageTag = document.createElement("img");
  PostDivTag.appendChild(postImageTag);
  postImageTag.src = element.image;

  const PostDivTagInside = document.createElement("div");
  PostDivTag.className = "PostDivTagInside";
  PostDivTag.appendChild(PostDivTagInside);

  const postDataTag = document.createElement("p");
  postDataTag.textContent = element.data;
  const postTitleTag = document.createElement("h2");
  postTitleTag.textContent = element.title;

  PostDivTagInside.append(postDataTag, postTitleTag);
}

const ProductThatIhaveTag = document.getElementById("productThatIhave");
for (let i = 0; i < ProductThatIhaveArray.length; i++) {
  const element = ProductThatIhaveArray[i];

  const ProductDiv = document.createElement("div");
  ProductThatIhaveTag.appendChild(ProductDiv);
  ProductDiv.className = "ProductDiv";

  const ProductImage = document.createElement("img");
  ProductImage.src = element.image;
  ProductDiv.appendChild(ProductImage);

  const ProductDivInside = document.createElement("div");
  ProductDiv.appendChild(ProductDivInside);

  const ProductTitle = document.createElement("h2");
  ProductTitle.textContent = element.ProductName;

  const ProductPrice = document.createElement("p");
  ProductPrice.textContent = element.Price;
  ProductDivInside.append(ProductTitle, ProductPrice);
}

document.getElementById("read-more").onclick = function () {
  window.location.href = "about.html";
};

document.querySelector("button").addEventListener("click", function () {
  alert("You have subscribed to the email!");
});
