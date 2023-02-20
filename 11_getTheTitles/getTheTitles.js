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

// const getTheTitles = function(booklist) {
//     let titles = []
//     for (let key in booklist) {
//         titles.push(booklist[key].title)
//     }
//     return titles;
// };


// Solution with .map

const getTheTitles = function(booklist) {
  return booklist.map(book => book.title);
}

getTheTitles(books);

// Do not edit below this line
module.exports = getTheTitles;
