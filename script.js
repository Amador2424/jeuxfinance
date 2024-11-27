const scenarios = [
  {
    question:
      "Vous venez de recevoir votre premier salaire de 3 000 €. Que faites-vous en premier ?",
    choices: [
      "Acheter une voiture de luxe",
      "Investir dans une formation en ligne",
      "Tout garder sur un compte épargne",
    ],
    advice: [
      "Erreur : Une voiture de luxe perd de sa valeur dès que vous quittez le concessionnaire. Priorisez les actifs, pas les passifs. (Robert Kiyosaki)",
      "Bonne décision : Investir en vous-même est l'un des meilleurs moyens de construire votre richesse. (Warren Buffett)",
      "Pas mal : Épargner est bien, mais investir une partie vous permettra de faire croître votre argent. (George S. Clason)",
    ],
  },
  {
    question:
      "Un ami vous propose un investissement avec un rendement garanti de 30 % en une semaine. Que faites-vous ?",
    choices: [
      "J'accepte immédiatement",
      "Je fais des recherches sur l'investissement",
      "Je refuse catégoriquement",
    ],
    advice: [
      "Erreur : Si cela semble trop beau pour être vrai, ça l'est probablement. Évitez les arnaques. (Dave Ramsey)",
      "Bonne décision : Recherchez toujours avant d'investir. Comprendre votre investissement est clé. (Benjamin Graham)",
      "Bonne décision : Refuser sans informations est prudent, mais soyez curieux et apprenez à évaluer les opportunités. (Tony Robbins)",
    ],
  },
];

let currentScenarioIndex = 0;

// Sélection des éléments HTML
const scenarioElement = document.getElementById("scenario");
const choicesContainer = document.querySelector(".choices");
const adviceElement = document.getElementById("advice");
const nextButton = document.getElementById("next-scenario");

// Affiche un scénario
function displayScenario(index) {
  const scenario = scenarios[index];
  scenarioElement.textContent = scenario.question;
  choicesContainer.innerHTML = ""; // Réinitialise les choix

  scenario.choices.forEach((choice, i) => {
    const button = document.createElement("button");
    button.textContent = choice;
    button.className = "choice-btn";
    button.addEventListener("click", () => displayAdvice(index, i));
    choicesContainer.appendChild(button);
  });
}

// Affiche un conseil basé sur le choix
function displayAdvice(scenarioIndex, choiceIndex) {
  const advice = scenarios[scenarioIndex].advice[choiceIndex];
  adviceElement.textContent = advice;
  nextButton.style.display = "block";
}

// Passe au scénario suivant
nextButton.addEventListener("click", () => {
  currentScenarioIndex++;
  if (currentScenarioIndex < scenarios.length) {
    displayScenario(currentScenarioIndex);
    adviceElement.textContent = ""; // Réinitialise le conseil
    nextButton.style.display = "none"; // Cache le bouton suivant
  } else {
    scenarioElement.textContent =
      "Félicitations ! Vous avez terminé tous les scénarios. Continuez à apprendre et à gérer vos finances intelligemment.";
    choicesContainer.innerHTML = ""; // Vide les choix
    adviceElement.textContent = "";
    nextButton.style.display = "none"; // Cache le bouton suivant
  }
});

// Démarre le jeu
displayScenario(currentScenarioIndex);
