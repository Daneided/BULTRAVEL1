import { destinationContainerArray } from "./data.js";

const destinationcontainerTag = document.getElementById("containerDestination");
for (let i = 0; i < destinationContainerArray.length; i++) {
  const element = destinationContainerArray[i];

  const destinationcontainerMainDiv = document.createElement("div");
  destinationcontainerTag.appendChild(destinationcontainerMainDiv);
  destinationcontainerMainDiv.className = "destinationcontainerMainDiv";

  const destinationcontainerDivImage = document.createElement("div");
  destinationcontainerMainDiv.appendChild(destinationcontainerDivImage);
  destinationcontainerDivImage.className = "destinationcontainerDivImage";
  const destinationcontainerImg = document.createElement("img");
  destinationcontainerDivImage.appendChild(destinationcontainerImg);
  destinationcontainerImg.src = element.image;

  const destinationcontainerDiv = document.createElement("div");
  destinationcontainerMainDiv.appendChild(destinationcontainerDiv);
  destinationcontainerDiv.className = "destinationcontainerDiv";
  const destinationcontainerData = document.createElement("h3");
  destinationcontainerData.textContent = element.data;

  const destinationcontainerTitle = document.createElement("h1");
  destinationcontainerTitle.textContent = element.title;

  const hr = document.createElement("hr");

  destinationcontainerDiv.append(
    destinationcontainerData,
    destinationcontainerTitle,
    hr
  );

  const flexContainerDestination = document.createElement("div");
  destinationcontainerDiv.appendChild(flexContainerDestination);
  flexContainerDestination.className = "flexContainerDestination";

  const flexContainerDestinationIconLocation = document.createElement("div");
  const locationIcon = document.createElement("img");
  locationIcon.src = element.locationIcon;
  const location = document.createElement("p");
  location.textContent = element.location;
  flexContainerDestinationIconLocation.append(locationIcon, location);

  const flexContainerDestinationIconComments = document.createElement("div");
  const CommentIcon = document.createElement("img");
  CommentIcon.src = element.commentIcon;
  const comment = document.createElement("p");
  comment.textContent = element.comment;
  flexContainerDestinationIconComments.append(CommentIcon, comment);

  flexContainerDestination.append(
    flexContainerDestinationIconLocation,
    flexContainerDestinationIconComments
  );
}
