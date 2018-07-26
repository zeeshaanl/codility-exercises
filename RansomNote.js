// Ransom Note
const checkMagazine = (magazine, note) => {
    const isPossible = note.every(word => {
        if (magazine.includes(word)) {
            delete magazine[magazine.indexOf(word)];
            return true;
        }
    });

    return isPossible ? 'Yes' : 'No'
};

console.log(checkMagazine(['This', 'is', 'a', 'magazine', 'note'], ['This', 'is', 'a', 'note']));