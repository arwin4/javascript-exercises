const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]

// Apparently you can use .map for this.
// At this point in the course, map had not been discussed.

const getTheTitles = function(booklist) {
    let titles = []
    for (let key in booklist) {
        titles.push(booklist[key].title)
    }
    return titles;
};

getTheTitles(books);

// Do not edit below this line
module.exports = getTheTitles;
