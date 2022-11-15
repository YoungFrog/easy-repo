const ACCESS_LVL_INPUT_EID = "lvl-select";

const defaultAccessLvl = "Developer";

const accessLvl = new Map([
    ["No access", 0],
    ["Minimal access", 5],
    ["Guest", 10],
    ["Reporter", 20],
    ["Developer", 30],
    ["Maintainer", 40],
    ["Owner", 50],
]);

function getAccessLvl() {
    return document.getElementById(ACCESS_LVL_INPUT_EID).value;
}

function initAccessLevelInput() {
    const lvlSelect = document.getElementById(ACCESS_LVL_INPUT_EID);
    [...accessLvl.keys()].forEach(
        lvl => {
            const newOption = document.createElement("option");
            newOption.setAttribute("value", accessLvl.get(lvl));
            if (lvl === defaultAccessLvl) {
                newOption.setAttribute("selected", true);
            }
            newOption.innerText = lvl;
            lvlSelect.append(newOption);
        });
}
