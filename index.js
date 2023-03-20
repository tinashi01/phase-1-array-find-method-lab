
// code your solution here
function superbowlWin(record) {
    let firstWin = record.find(win => win.result === "W");
    if (firstWin !== undefined) {
        return firstWin.year;
    }
    
}

