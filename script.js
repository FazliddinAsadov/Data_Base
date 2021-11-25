const Users = [
  {
    id: 1,
    firstname: "Muhammad",
    lastname: "Salimov",
    passport_seria: "АB 7225028",
    Tugilgansana: "18.09.2000",
    INN: 621323266,
    JSHIR: 51809005310060,
    phone: 998916450803,
  },
  {
    id: 2,
    firstname: "Fazliddin",
    lastname: "Asadov",
    passport_seria: "АB 3481742",
    Tugilgansana: "28.01.1998",
    INN: 577520873,
    JSHIR: 32801985350044,
    phone: 998973030793,
  },

  {
    id: 3,
    firstname: "Doniyor",
    lastname: "Arslonov",
    passport_seria: "АB 7666820",
    Tugilgansana: "03.09.2001",
    INN: 594377085,
    JSHIR: 5030901510012,
    phone: 998990077345,
  },
  {
    id: 4,
    firstname: "Solijon",
    lastname: "Nusratullayev",
    passport_seria: "АB 6369940",
    Tugilgansana: "14.03.2001",
    INN: 607581689,
    JSHIR: 51403015980015,
    phone: "998942744718",
  },

  {
    id: 5,
    firstname: "Nodir",
    lastname: "Ahmadaliyev",
    passport_seria: "АB 4125788 ",
    Tugilgansana: "18.03.2000",
    INN: 584719676,
    JSHIR: 51803006070033,
    phone: 998930870699,
  },
];

const btns = document.querySelector(".btn");
const h1 = document.querySelector(".h1");

// let input = 4;

function add(e) {
  return e.map((iteam) => {
    if (input.value == iteam.firstname) {
      return `<div class="container">
      <div class="bo1">
         <p class="p"> ${iteam.id} </p>
      </div>

      <div class="bo2">
          <p class="p"> ${iteam.lastname} </p>
      </div>

      
      <div class="bo3">
          <p class="p"> ${iteam.firstname} </p>
      </div>

      
      <div class="bo4">
          <p class="p"> ${iteam.passport_seria} </p>
      </div>
    

      <div class="bo5">
          <p class="p"> ${iteam.Tugilgansana} </p>
      </div>

      
      <div class="bo6">
          <p class="p"> ${iteam.INN} </p>
      </div>

      
      <div class="bo7">
          <p class="p"> ${iteam.JSHIR} </p>
      </div>

      
      <div class="bo8">
          <p class="p"> ${iteam.phone} </p>
      </div>
    </div>`;
    }
  });
}
console.log(add(Users));

// document.getElementById("root").innerHTML;

btns.addEventListener("click", () => {
  h1.innerHTML = add(Users).join("");
});
