
const arrMovies = [];
let counter = 0;
//pushes an object of the movie stats on to an array

$('button').on('click', function (e) {
    e.preventDefault();

    arrMovies.push({
        name: $('#movieName').val(),
        rating: $('#movieRating').val(),
        Id: counter
    });
    const appendMovie = appendToTable(arrMovies[counter]);
    $('tbody').append(appendMovie);
    
    counter++;
});

function appendToTable(data) {
    console.log('working');
    return `
    <tr>
      <td>${data.name}</td>
      <td>${data.rating}</td>
      <td>
        <button data-delete-id=${data.Id}>
          Delete
        </button>
      </td>
    <tr>
  `;
}