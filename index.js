// code your solution here
const saturdayFun = (thing = "roller-skate") => {
    return `This Saturday, I want to ${thing}!`;
}

const mondayWork = (stuff = "go to the office") => {
    return `This Monday, I will ${stuff}.`;
}

const wrapAdjective = (thing = "*") => {
    function first(stuff = "special") {
        return `You are ${thing}${stuff}${thing}!`
    }
    return first
}
wrapAdjective("%")("a dedicated programmer");