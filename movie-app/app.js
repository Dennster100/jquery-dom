
const arrMovies = [];
let counter = 0;
//pushes an object of the movie stats on to an array

$('button').on('click', function (e) {
    e.preventDefault();

    arrMovies.push({
        title: $('#movieTitle').val(),
        rating: $('#movieRating').val(),
        Id: counter
    });
    const appendMovie = toHtmlData(arrMovies[counter]);
    $('tbody').append(appendMovie);
    
  // clear inputs
  $('#movieTitle').val('');
  $('#movieRating').val('');
  
    counter++;
});

$('th').on('click', function (e) {
  const key = $(e.target).children('span').attr('id');
  const direction = $(e.target).children('span').attr('class');

  if (key === 'title') {
    $(e.target).children('span').toggleClass('up');
    $(e.target).children('span').toggleClass('down');
    
  }

  if (key === 'rating') {
    $(e.target).children('span').toggleClass('up');
    $(e.target).children('span').toggleClass('down');

  }

  sortArr(arrMovies, key, direction);

  $('tbody').children('tr').remove();

  counter = 0;
  for (movie of arrMovies) {
    const htmlData = toHtmlData(movie);
    $('tbody').append(htmlData);
    movie.Id = counter;
    counter++;
  }

});

$('tbody').on('click','button', function (e) {
  console.log('working');
  const deleteId = $(e.target).attr('id');
  arrMovies.splice(deleteId, 1);

  for (movie of arrMovies) {
    movie.Id = arrMovies.indexOf(movie);

  }

  $(e.target).closest('tr').remove();
  counter--;
  // console.log($(e.target).parent('tr'));
})


function sortArr(array, key, direction) {
  return array.sort(function (a, b) {
    let valueA = a[key];
    let valueB = b[key];

    // if rating then covert object string value into a nubmer
    if (key === 'rating') {
      valueA = +valueA;
      valueB = +valueB;
    }

    //sort based on direction
    if (valueA > valueB) {
      return direction.includes('up') ? 1 : -1;
    } else if (valueA < valueB) {
      return direction.includes('up') ? -1 : 1;
    }

    return 0;
  });
}

function toHtmlData(data) {

    return `
    <tr>
      <td>${data.title}</td>
      <td>${data.rating}</td>
      <td>
        <button id="delete" >
          Delete
        </button>
      </td>
    <tr>
  `;
}

