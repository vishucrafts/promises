// Observer pattern

interface Observer {
	update(data: any): void;
}

class Observable {
	private observers: Observer[] = [];
	/**
   * 
   * [
      {
        update: (data: any) => {
          console.log("Observer 1 received", data);
        },
      },
    ]
  */

	public subscribe(observer: Observer) {
		this.observers.push(observer);
	}

	public unsubscribe(observer: Observer) {
		this.observers = this.observers.filter((obs) => obs !== observer);
	}

	public notify(data: any) {
		this.observers.forEach((observer) => observer.update(data));
	}
}

const weatherStation = new Observable();

const vishalObserver = {
	update: (data: any) => {
		console.log("Vishal received", data);
	},
};
weatherStation.subscribe(vishalObserver);

const rahulObserver = {
	update: (data: any) => {
		console.log("Rahul received", data);
	},
};
weatherStation.subscribe(rahulObserver);

weatherStation.notify("New data");

// Vishal unsubscribes
weatherStation.unsubscribe(vishalObserver);

weatherStation.notify("New data 2");
