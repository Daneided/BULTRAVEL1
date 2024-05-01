const fitContent = document.getElementById("fitContent");

import { fitContentArray } from "./data.js";

for (let i = 0; i < fitContentArray.length; i++) {
  const element = fitContentArray[i];

  const fitContentDiv = document.createElement("div");
  fitContent.appendChild(fitContentDiv);
  fitContentDiv.className = "fitContentDiv";

  const fitContentPr = document.createElement("p");
  fitContentPr.textContent = element.text;
  const fitContentTitle = document.createElement("h2");
  fitContentTitle.textContent = element.name;

  const fitContentExplorer = document.createElement("h5");
  fitContentExplorer.textContent = element.explorer;

  fitContentDiv.append(fitContentPr, fitContentTitle, fitContentExplorer);
}
