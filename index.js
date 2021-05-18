
results= function(element) {
    if (element.result==="W") {
    return (element.result) 
    }
}

function superbowlWin(array) {
    const wins= array.find(results)
    if (wins) {
    return wins.year;
    }

}

