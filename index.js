class Animal {
    constructor(species, family, nickname) {
        this.species = species;
        this.family = family;
        this.nickname = nickname;
    }
}

class Zoo {
    constructor(name) {
        this.name = name;
        this.zooAnimals = [];
        this.playerZoos = [];
    }

    /*addAnimal(animal) {
        if (animal instanceof Animal) {
            this.zooAnimals.push(animal);
        }
    }*/
}
//Here we go...
class Menu extends Zoo {

    mainMenuOptions() {
        

        let userInput = prompt(`
        N) New Zoo
        L) Load Zoo
        D) Delete Zoo
        Q) Quit Program`);
        
        switch (userInput.toUpperCase()) {
            case 'N': this.newZoo();
            break;
            case 'L': this.loadZoo();
            break;
            case 'D': this.deleteZoo();
            break;
            case 'Q': this.alert('Bye bye!');
            break;
            default: alert('Command not recognized');
            this.mainMenuOptions();
        }
    }

    newZoo() {
        let zooName = prompt('Name your new zoo!');
        this.playerZoos.push(new Zoo(zooName));
        mainMenu.addAnimal();
    }

    addAnotherOption() {
        let anotherAnimalResponse = prompt(`Success! Add another animal?
                Y) Yes
                N) No`);
                if (anotherAnimalResponse.toUpperCase() === 'Y') {
                    this.addAnimal();
                } else if (anotherAnimalResponse.toUpperCase() === 'N') {
                    alert(`Returning to main menu. Check out your new zoo by navigating to "Load Zoo".`)
                    this.mainMenuOptions();
                } else {
                    alert('Command not recognized');
                    this.addAnotherOption();
                }

    }

    addAnimal() {
        let animalNickname = 'Unnamed';
        let chosenAnimal = prompt(`Choose an animal to add to your zoo.
        0) Cancel
        1) Tiger
        2) Lion
        3) Wolf
        4) Kangaroo`);
         //Add more code! Give option to name the animal and then push it. Then make conditional offering to add another animal.

        switch (chosenAnimal) {
            case '0': 
                alert(`Returning to main menu. You can view your zoo by navigating to "Load Zoo".`);
                this.mainMenuOptions();
            break;
            case '1':
                animalNickname = prompt('Give the new animal a name.');
                this.zooAnimals.push(new Animal ('Tiger', 'Felidae', animalNickname));
                this.addAnotherOption();
            break;
            case '2':
                animalNickname = prompt('Give the new animal a name.');
                this.zooAnimals.push(new Animal ('Lion', 'Felidae', animalNickname));
                this.addAnotherOption();
            break;
            case '3':
                animalNickname = prompt('Give the new animal a name.');
                this.zooAnimals.push(new Animal ('Wolf', 'Canidae', animalNickname));
                this.addAnotherOption();
            break;
            case '4':
                animalNickname = prompt('Give the new animal a name.');
                this.zooAnimals.push(new Animal ('Kangaroo', 'Macropodidae', animalNickname));
                this.addAnotherOption();
            break;
            default:
                alert('Command not recognized');
                this.addAnimal();
        }
    }
}
let mainMenu = new Menu;
mainMenu.mainMenuOptions();