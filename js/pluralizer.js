
function pluralize(thing, count) {
    if (count === 1) {
        console.log(`${count} ${thing}`)
    } else {
        console.log(`${count} ${thing}s`)
    }
}

pluralize("cat", 5)
