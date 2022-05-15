// https://jsonmock.hackerrank.com/api/countries?page=<pageNumber>
// https://jsonmock.hackerrank.com/api/countries?page=1

// A APi acima tem um código com todos os paises do mundo.
// Complete a função abaixo: entre com o código e retorne a string do país.

async function getCountryName(code) {
  const resposta = await fetch(
    `https://jsonmock.hackerrank.com/api/countries?page=1`
  )
    .then((response) => response.json())
    .then((data) => cobsole.log(data));

  return resposta;
}

getCountryName("BR");
