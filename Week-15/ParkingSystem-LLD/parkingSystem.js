const readline = require("readline");
const fs = require('fs');
let parkingSlot = new Map();
let script;
parkingSlot.set(0, "Welcome");
console.log(parkingSlot.get(0));

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

fs.readFile('commands.txt', 'utf8', (err, data) => {
    if (data) {
        script = data.split(/\r?\n/);
    }
});

rl.on('line', (input) => {

    let [inCommand, number, col] = input.split(" ");

    // Operations for Script commands
    if (inCommand == "script") {

        for (let i = 0; i < script.length; i++) {

            let [sc0, sc1, sc2] = script[i].split(" ");

            if (sc0.toLowerCase() == "park") {
                if (sc1 && sc2) {
                    for (let i = 0; i < 7; i++) {
                        if (parkingSlot.get(i) == undefined) {
                            parkingSlot.set(i, `${sc1} ${sc2}`);
                            console.log(`Allocated slot number: ${i} to ${sc1} ${sc2}`);
                            break;
                        } else if (i == 6) {
                            console.log("Sorry, parking lot is full");
                        }
                    }
                } else { console.log("Need to provide park command, Registration number & car colour") }
            }

            if (sc0.toLowerCase() == "leave") {
                let type = parseInt(sc1);
                if (type != sc1) {
                    console.log("provide slot number after leave command")
                } else {
                    parkingSlot.delete(parseInt(sc1));
                    console.log(`slot number ${sc1} is free`);
                }
            }

            if (sc0.toLowerCase() == "status") {
                for (let i = 1; i < 7; i++) {
                    if (parkingSlot.get(i) != undefined) {
                        console.log(`slot ${i} - ${parkingSlot.get(i)}`);
                    }
                }
            }

            if ("registration_numbers_for_cars_with_colour" == sc0) {
                let getCol;
                let getCars = "";
                for (const carColour of parkingSlot.values()) {
                    getCol = carColour.split(" ");
                    if (getCol[1] == sc1) {
                        getCars += `${getCol[0]} `;
                    }
                }
                if (getCars != "" && getCars) {
                    console.log(getCars);
                } else {
                    console.log("Not found");
                }
            }

            if ('slot_numbers_for_cars_with_colour' == sc0) {
                let getCol;
                let getSlots = "";
                for (const slots of parkingSlot.keys()) {
                    getCol = parkingSlot.get(slots).split(" ");
                    if (getCol[1] == sc1) {
                        getSlots += `${slots} `;
                    }
                }
                if (getSlots != "" && getSlots) {
                    console.log(getSlots);
                } else {
                    console.log("Not found");
                }
            }

            if ('slot_number_for_registration_number' == sc0) {
                let getCol;
                let getSlots = "";
                for (const slots of parkingSlot.keys()) {
                    getCol = parkingSlot.get(slots).split(" ");
                    if (getCol[0] == sc1) {
                        getSlots += `${slots} `;
                    }
                }
                if (getSlots != "" && getSlots) {
                    console.log(getSlots);
                } else {
                    console.log("Not found");
                }
            }

            if (sc0.toLowerCase() == "exit") {
                rl.close();
            }

        }
    }

    // Operations for CLI commands
    if (inCommand.toLowerCase() == "park") {
        if (number && col) {
            for (let i = 0; i < 7; i++) {
                if (parkingSlot.get(i) == undefined) {
                    parkingSlot.set(i, `${number} ${col}`);
                    console.log(`Allocated slot number: ${i} to ${number} ${col}`);
                    return;
                }
            }
            console.log("Sorry, parking lot is full");
        } else { console.log("Need to provide park command, Registration number & car colour") }
    }


    if (inCommand.toLowerCase() == "leave") {
        let type = parseInt(number);
        if (type != number) {
            console.log("provide slot number after leave command")
        } else {
            parkingSlot.delete(parseInt(number));
            console.log(`slot number ${number} is free`);
        }
    }

    if (input.toLowerCase() == "status") {
        console.log(`slot: ${input}`);
        for (let i = 1; i < 7; i++) {
            if (parkingSlot.get(i) != undefined) {
                console.log(`slot ${i} - ${parkingSlot.get(i)}`);
            }
        }
    }

    if ("registration_numbers_for_cars_with_colour" == inCommand) {
        let getCol;
        let getCars = "";
        for (const carColour of parkingSlot.values()) {
            getCol = carColour.split(" ");
            if (getCol[1] == number) {
                getCars += `${getCol[0]} `;
            }
        }
        if (getCars != "" && getCars) {
            console.log(getCars);
        } else {
            console.log("Not found");
        }
    }

    if ('slot_numbers_for_cars_with_colour' == inCommand) {
        let getCol;
        let getSlots = "";
        for (const slots of parkingSlot.keys()) {
            getCol = parkingSlot.get(slots).split(" ");
            if (getCol[1] == number) {
                getSlots += `${slots} `;
            }
        }
        if (getSlots != "" && getSlots) {
            console.log(getSlots);
        } else {
            console.log("Not found");
        }
    }

    if ('slot_number_for_registration_number' == inCommand) {
        let getCol;
        let getSlots = "";
        for (const slots of parkingSlot.keys()) {
            getCol = parkingSlot.get(slots).split(" ");
            if (getCol[0] == number) {
                getSlots += `${slots} `;
            }
        }
        if (getSlots != "" && getSlots) {
            console.log(getSlots);
        } else {
            console.log("Not found");
        }
    }

    if (input.toLowerCase() == "exit") {
        rl.close();
    }
});
