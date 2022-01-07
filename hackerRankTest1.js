async function getCountryName() {
  let id = 0;
  let isFound = false;

  while ((isFound = false));
  {
    id++;

    function getAPI() {
      const response = await fetch(
        `https://jsonmock.hackerrank.com/api/countries?page=${id}`
      ).then(
        function (valor) {
          const mamute = valor.json();

          console.log(mamute);
        },
        function (motivo) {
          console.log(motivo);
        }
      );
    }

    let xyz = await getAPI();
    console.log(xyz);
    // data.map((obj) => {
    //   console.log(obj);
    // });
  }
}

const button3 = document.querySelector("#btn3");

button3.addEventListener("click", function () {
  getCountryName();
});
