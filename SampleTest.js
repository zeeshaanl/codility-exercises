// process.stdout.write("\n");

const groupAndSort = arrayOfObjects => {
    return arrayOfObjects.reduce((total, currentValue, index, array) => {
        const { year, ...rest } = currentValue;
        if (!total[year]) {
            total[year] = [];
        }
        total[year].push(rest);
        total[year].sort((a, b) =>
            a.name < b.name ? -1 :
                a.name > b.name ? 1 : 0
        );
        return total;
    }, {})
};

const movies = [
    { 'year': 2010, name: 'A good life' },
    { 'year': 2012, name: 'Top Gun' },
    { 'year': 2012, name: 'Zoolander' },
    { 'year': 2004, name: 'Cinderella' },
    { 'year': 2012, name: 'When harry met sally' },
    { 'year': 2003, name: 'A Bugs Life' },
    { 'year': 2004, name: 'Lion King' },
    { 'year': 2012, name: 'Bourne Identity' }
];

console.log(groupAndSort(movies));
