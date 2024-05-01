import { TipsContainerArray } from "./data.js";

const containerTag = document.getElementById("container");

for (let i = 0; i < TipsContainerArray.length; i++) {
  const element = TipsContainerArray[i];

  const containerDiv = document.createElement("div");
  containerTag.appendChild(containerDiv);
  containerDiv.className = "containerDiv";

  const containerDivImage = document.createElement("div");
  containerDiv.appendChild(containerDivImage);

  const containerImage = document.createElement("img");
  containerImage.src = element.image;
  containerDivImage.appendChild(containerImage);

  const DivTag = document.createElement("div");
  containerDiv.appendChild(DivTag);
  DivTag.className = "DivTag";

  const DataContainer = document.createElement("h3");
  DataContainer.textContent = element.data;

  const TitleContainer = document.createElement("h1");
  TitleContainer.textContent = element.title;
  DivTag.append(DataContainer, TitleContainer);

  const containerDivinside = document.createElement("div");
  DivTag.appendChild(containerDivinside);
  containerDivinside.className = "containerDivinside";

  const containerDivinsideTogether = document.createElement("div");
  containerDivinside.appendChild(containerDivinsideTogether);

  const locationIcon = document.createElement("img");
  locationIcon.src = element.locationIcon;

  const locationtext = document.createElement("h5");
  locationtext.textContent = element.location;

  containerDivinsideTogether.append(locationIcon, locationtext);

  const containerDivinsideTogetherComment = document.createElement("div");

  const CommentIcon = document.createElement("img");
  CommentIcon.src = element.commentIcon;

  const commentT = document.createElement("h5");
  commentT.textContent = element.comment;

  containerDivinsideTogetherComment.append(CommentIcon, commentT);

  const containerDivinsideTogetherStar = document.createElement("div");

  const starIcon = document.createElement("img");
  starIcon.src = element.StarIcon;

  const starT = document.createElement("h5");
  starT.textContent = element.star;

  containerDivinsideTogetherStar.append(starIcon, starT);

  containerDivinside.append(
    containerDivinsideTogether,
    containerDivinsideTogetherComment,
    containerDivinsideTogetherStar
  );
}
