type EventType = "click" | "keydown";

type CallBackFn = () => void;

type Listener = {
	type: EventType;
	callback: CallBackFn;
};

class Button {
	public listeners: Listener[] = [];
	/**
   * [
      {
        type: "click",
        callback: () => {
          console.log("Increment button clicked");
        },
      },
    ]
   */

	constructor(public label: string) {}

	click() {
		this.listeners
			.filter((listener) => listener.type === "click")
			.forEach((listener) => listener.callback());
	}

	keydown() {
		this.listeners
			.filter((listener) => listener.type === "keydown")
			.forEach((listener) => listener.callback());
	}

	addEventListener(eventType: EventType, callbackFn: CallBackFn) {
		this.listeners.push({
			type: eventType,
			callback: callbackFn,
		});
	}
}

const incrementBtn = new Button("Increment");

incrementBtn.addEventListener("click", () => {
	console.log("Increment button clicked");
});

incrementBtn.addEventListener("keydown", () => {
	console.log("Increment button keydown");
});

// Browser calls click when the button is clicked
incrementBtn.click();
incrementBtn.keydown();
