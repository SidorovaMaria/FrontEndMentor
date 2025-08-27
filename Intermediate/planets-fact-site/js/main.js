import { createElement } from "./helperFunctions.js";

async function getData() {
  try {
    const response = await fetch("./js/data.json");
    const planets = await response.json();
    return planets;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
const planets = await getData();

const createMobileMenu = () => {
  // Mobile menu container
  const mobileMenu = createElement("ul", "mobile-menu", {
    id: "mobile-menu",
  });
  // Loop through each planet and create a menu item
  planets.forEach((planet) => {
    const planetLink = createElement("li", "mobile-link", {
      id: `mobile-link-${planet.name.toLowerCase()}`,
    });

    // Set the inner HTML for the planet link
    planetLink.innerHTML = `
        <div>
            <span class='mobile-circle'></span>
            <p>${planet.name}</p>
        </div>
			<span class='chevron'></span>
		`;

    planetLink.style.setProperty(
      "--planet-mobile-color",
      `var(--${planet.name.toLowerCase()}-mobile)`
    );
    // Append the planet link to the mobile menu
    const divider = createElement("hr");
    planetLink.addEventListener("click", (e) => {
      toggleNavigation();
      chosePlanet(planet);
    });

    mobileMenu.appendChild(planetLink);
    if (planet !== planets[planets.length - 1]) {
      mobileMenu.append(divider);
    }
  });

  // Return the created mobile menu
  return mobileMenu;
};

const createMainNavigation = (planetStart) => {
  const mainMenu = createElement("ul", "main-menu", { id: "main-menu" });
  planets.forEach((planet) => {
    const planetLink = createElement("li", "main-link", {
      id: `main-link-${planet.name.toLowerCase()}`,
    });
    if (planet === planetStart) {
      planetLink.classList.add("selected");
    }
    planetLink.innerText = `${planet.name}`;
    planetLink.style.setProperty(
      "--planet-color",
      `var(--${planet.name.toLowerCase()})`
    );
    planetLink.addEventListener("click", () => {
      const links = document.querySelectorAll(".main-link");
      links.forEach((link) => {
        link.classList.remove("selected");
      });
      planetLink.classList.add("selected");
      chosePlanet(planet);
    });
    mainMenu.appendChild(planetLink);
  });
  return mainMenu;
};
const createHeader = (planet) => {
  const header = createElement("nav", "navigation");
  const hamMenu = createElement("div", "ham-menu");
  hamMenu.innerHTML = `<img src='./assets/icon-hamburger.svg' alt='Ham Menu'/>`;
  hamMenu.addEventListener("click", () => {
    toggleNavigation();
  });
  const title = createElement("p", "title");
  title.innerText = "The Planets";
  header.append(
    title,
    hamMenu,
    createMobileMenu(),
    createMainNavigation(planet)
  );
  return header;
};

const createMobileAboutBtn = (aboutTopic, text) => {
  const aboutBtn = createElement("button", `mobile-about-btn`, {
    id: aboutTopic,
  });
  aboutBtn.style.setProperty(
    "--planet-color",
    `var(--${showcasePlanet.name.toLowerCase()})`
  );
  aboutBtn.innerHTML = `<p>${text}</p>`;
  if (mainTopic === aboutTopic) {
    aboutBtn.classList.add("selected");
  }
  aboutBtn.addEventListener("click", (e) => {
    const about = document.querySelectorAll(".mobile-about-btn");
    about.forEach((element) => {
      element.classList.remove("selected");
    });
    aboutBtn.classList.add("selected");
    changeTopic(e);
  });
  return aboutBtn;
};
const createMobileAboutBtns = () => {
  const mobileaboutBtns = createElement("div", "mobile-about-btns");
  mobileaboutBtns.append(
    createMobileAboutBtn("overview", "overview"),
    createMobileAboutBtn("structure", "structure"),
    createMobileAboutBtn("geology", "surface")
  );
  return mobileaboutBtns;
};

const createPlanetIcon = (planet, topic) => {
  const planetContainer = createElement("div", "planet-img-container");
  const planetImg = createElement("img", "planet-img", { loading: "lazy" });
  if (topic === "overview") {
    planetImg.src = planet.images.planet;
  } else if (topic === "structure") {
    planetImg.src = planet.images.internal;
  } else if (topic === "geology") {
    planetImg.src = planet.images.planet;
    const geologyImg = createElement("img", "geo-img", {
      src: planet.images.geology,
    });
    planetContainer.append(geologyImg);
  } else {
    planetImg.src = "";
  }
  planetContainer.append(planetImg);
  return planetContainer;
};
const createPlanetTopic = (planet, topicKey) => {
  const planetTopicContainer = createElement("div", "planet-topic");
  const topic = planet[topicKey];
  planetTopicContainer.innerHTML = `
    <h1>${planet.name}</h1>
    <p class='content'>${topic.content}</p>
    <p class ='source'>Source: <a href=${topic.source} >Wikipedia</a> <span></span></p>`;
  return planetTopicContainer;
};

const createValue = (planet, topicKey, text) => {
  const topic = planet[topicKey];
  const valueContainer = createElement("div", "value-container");
  valueContainer.innerHTML = `
    <p class='value-text'>${text}</p>
    <p class='value-number'>${topic}</p>
    `;
  return valueContainer;
};
const createValues = (planet) => {
  const valuesContainer = createElement("div", "values-container");
  valuesContainer.append(
    createValue(planet, "rotation", "Rotation Time"),
    createValue(planet, "revolution", "Revolution Time"),
    createValue(planet, "radius", "Radius"),
    createValue(planet, "temperature", "Average Temp.")
  );
  return valuesContainer;
};

const createChooseTopicBtn = (planet, topic, text, number, mainTopic) => {
  const chooseTopicBtn = createElement("button", "choose-topic-btn ", {
    id: topic,
  });
  if (topic === mainTopic) {
    chooseTopicBtn.classList.add("selected");
  }

  chooseTopicBtn.innerHTML = `
    <p class='number'>${number}</p><p class='topic'>${text}</p>`;
  chooseTopicBtn.style.setProperty(
    "--planet-color",
    `var(--${planet.name.toLowerCase()})`
  );
  chooseTopicBtn.addEventListener("click", (e) => {
    const btns = document.querySelectorAll(".choose-topic-btn");
    btns.forEach((el) => {
      el.classList.remove("selected");
    });
    chooseTopicBtn.classList.add("selected");
    changeTopic(e);
  });
  return chooseTopicBtn;
};
const createChooseTopicBtns = (planet, mainTopic) => {
  const chooseTopicsContainer = createElement("div", "choose-topic-btns");
  chooseTopicsContainer.append(
    createChooseTopicBtn(planet, "overview", "overview", "01", mainTopic),
    createChooseTopicBtn(
      planet,
      "structure",
      "Internal Sctructure",
      "02",
      mainTopic
    ),
    createChooseTopicBtn(planet, "geology", "Surface Geology", "03", mainTopic)
  );
  return chooseTopicsContainer;
};
const createPlanetTopicContainer = (planet, topic) => {
  const topicContainer = createElement("div", "topic-container");
  topicContainer.append(
    createPlanetTopic(planet, topic),
    createChooseTopicBtns(planet, topic)
  );
  return topicContainer;
};

const createPlanetContent = (planet, topic) => {
  const planetContent = createElement("div", "planet-content");
  planetContent.append(
    createPlanetIcon(planet, topic),
    createPlanetTopicContainer(planet, topic)
  );
  return planetContent;
};
const mainContent = (planet, topic) => {
  const mainContent = createElement("main", "main-content blur-in-expand");
  mainContent.appendChild(createMobileAboutBtns());
  mainContent.appendChild(createPlanetContent(planet, topic));
  mainContent.appendChild(createValues(planet, topic));
  return mainContent;
};

const body = document.querySelector("body");
let showcasePlanet = planets[0];
let mainTopic = "overview";
const initDisplay = () => {
  body.append(createHeader(showcasePlanet));
  body.append(mainContent(showcasePlanet, mainTopic));
};

const chosePlanet = (planet) => {
  showcasePlanet = planet;
  const main = document.querySelector(".main-content");
  main.classList.remove("blur-out-expand");
  main.classList.add("blur-out-contract");
  setTimeout(() => {
    main.remove();
  }, 400);
  setTimeout(() => {
    body.appendChild(mainContent(showcasePlanet, mainTopic));
  }, 400);
};
const changeTopic = (e) => {
  mainTopic = e.target.id;
  const text = document.querySelector(".content");
  const planetImg = document.querySelector(".planet-img-container");
  planetImg.replaceWith(createPlanetIcon(showcasePlanet, mainTopic));
  const topic = showcasePlanet[mainTopic];
  text.innerText = topic.content;
};
const toggleNavigation = () => {
  const mobileMenu = document.querySelector(".mobile-menu");

  if (mobileMenu.classList.contains("slide-in")) {
    // If the menu is currently sliding in, slide it out
    mobileMenu.classList.remove("slide-in");
    mobileMenu.classList.add("slide-out");

    setTimeout(() => {
      mobileMenu.classList.remove("active");
      mobileMenu.classList.remove("slide-out");
    }, 1000); // Match the duration of the slide-out animation
  } else {
    mobileMenu.classList.add("active");
    // If the menu is not sliding in, slide it in
    mobileMenu.classList.remove("slide-out");
    mobileMenu.classList.add("slide-in");
  }
};
initDisplay();
