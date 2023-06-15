// code your solution here
function saturdayFun(activity = 'roller-skate') {
    if (activity === undefined) {
        activity = 'roller skate';
    }
    return `This Saturday, I want to ${activity}!`;
}


def mondayWork(activity = 'go to the office') {
    if (activity === undefined) {
        activity = 'go to the office';
    }
    return 'This Monday, I will ${activity}.';
}

function wrapAdjective(flair = '*'){
    return function(adjective) {
        return'you are ${flair}${adjective}${flair}!';
    }
}
