Object.prototype.log = function () {
	console.log(this);
};

const buttons = document.querySelectorAll("[data-button]");

for (let button of buttons) {
	button.onclick = () => {
		document.documentElement.className = "";
		document.documentElement.classList.add(button.dataset.button);
	};
}

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

const gameStartButtons = document.querySelectorAll("[data-game]");

for (let gameStartButton of gameStartButtons) {
	gameStartButton.onclick = () => {
		document.documentElement.className = "";
		document.documentElement.classList.add("game-active");
	};
}
