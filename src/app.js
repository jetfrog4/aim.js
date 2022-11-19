function getRandom(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

Object.prototype.log = function () {
	console.log(this);
};

const html = document.documentElement;

// =============================================== //
// Buttons //
const buttons = document.querySelectorAll("[data-button]");
for (let button of buttons) {
	button.onclick = () => {
		html.className = "";
		html.classList.add(button.dataset.button);
	};
}
// =============================================== //

// =============================================== //
// Discord //
const discord = document.querySelector("button.discord");
discord.onclick = () => {
	navigator.clipboard.writeText("jetfrog4#7569");
	const popup = document.createElement("span");
	popup.textContent = "Discord copied to clipboard";
	popup.classList.add("popup");
	document.body.appendChild(popup);
	popup.classList.add("_active");
	setTimeout(() => {
		popup.classList.remove("_active");
	}, 1500);
	setTimeout(() => {
		document.body.removeChild(popup);
	}, 3000);
};
// =============================================== //

const gameSettings = {
	fieldWidth: 500,
	fieldHeight: 500,
	time: 60,
	gameMode: "default",
	sizeCoefficient: 1,
};

const styleSettings = {};

const gameStartButtons = document.querySelectorAll("[data-mode]");

for (let gameStartButton of gameStartButtons) {
	gameStartButton.onclick = () => {
		gameSettings.gameMode = gameStartButton.dataset.mode;
		html.className = `game`;
		initGameGlobal(gameSettings);
	};
}

function initGameGlobal(gameSettings) {
	const field = document.querySelector(".game__field");
	const { fieldWidth, fieldHeight, gameMode } = gameSettings;

	field.style.width = `${fieldWidth}px`;
	field.style.height = `${fieldHeight}px`;

	field.id = "field";

	if (
		gameSettings.fieldHeight +
			document.querySelector(".game__info").clientHeight >
		window.innerHeight
	) {
		document.querySelector(".game__info").style.position = "absolute";
	}

	switch (gameMode) {
		case "default":
			initDefault();
			break;
		case "reflex":
			initReflex();
			break;
		case "tracking":
			initTracking();
			break;
		case "growing":
			initGrowing();
			break;
		default:
			alert("Error");
	}
}

function initDefault() {
	const field = document.getElementById("field");
	const scoreDOM = document.querySelector(".game__score");
	const timeDOM = document.querySelector(".game__time");
	scoreDOM.textContent = "Score: 0";

	let time = gameSettings.time;
	timeDOM.textContent = `Time: ${time}`;
	const timer = setInterval(function () {
		time--;
		if (time === 0) {
			endDefault();
		} else {
			timeDOM.textContent = `Time: ${time}`;
		}
	}, 1000);

	let score = 0;
	function defaultClicks(event) {
		if (event.target.id === "field") {
			endDefault();
		}
		if (event.target.id === "target") {
			console.log("target");
			gameDefault();
		}
	}
	document.addEventListener("click", defaultClicks);
	field.appendChild(createTargetDefault(field, gameSettings.sizeCoefficient));

	function gameDefault() {
		score += 250;
		scoreDOM.textContent = `Score: ${score}`;
		field.removeChild(document.getElementById("target"));
		field.appendChild(
			createTargetDefault(field, gameSettings.sizeCoefficient)
		);
	}
	function endDefault() {
		clearInterval(timer);
		document.querySelector(
			".over__score"
		).textContent = `Your score was: ${score}`;
		html.className = "over";
		field.removeChild(document.getElementById("target"));
		document.removeEventListener("click", defaultClicks);
	}
}

function initReflex() {
	let score = 0;
	function gameReflex() {}
}

function initTracking() {
	let score = 0;
	function gameTracking() {}
}

function initGrowing() {
	let score = 0;
	function gameGrowing() {}
}

function createTargetDefault(field, sizeCoefficient) {
	const x = parseInt(field.style.width);
	const y = parseInt(field.style.height);
	const size = (x / 10) * sizeCoefficient;
	const target = document.createElement("span");
	target.classList.add("target");
	target.id = "target";
	// target.style.width = `${size}px`;
	// target.style.height = `${size}px`;
	target.style.display = "block";
	const cords = getRandomCords(x, y, size);
	const xDir = getRandom(1, 2) === 1 ? "left" : "right";
	const yDir = getRandom(1, 2) === 1 ? "top" : "bottom";
	target.style.cssText = `${xDir}: ${cords.x}%; ${yDir}: ${cords.y}%; width: ${size}px; height: ${size}px;`;
	return target;
}

function getRandomCords(width, height, size) {
	const xRestriction = Math.ceil((size / width) * 100);
	const yRestriction = Math.ceil((size / height) * 100);
	return (cords = {
		x: getRandom(xRestriction, 100 - xRestriction),
		y: getRandom(yRestriction, 100 - yRestriction),
	});
}

function end(field) {}
