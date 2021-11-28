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

  {
    id: 6,
    firstname: "Farhod",
    lastname: "Hamdamov",
    passport_seria: "АB 1255054",
    Tugilgansana: "09.11.1998",
    INN: 580161220,
    JSHIR: 30911985920027,
    phone: 998999732498,
  },
  {
    id: 7,
    firstname: "Otabek",
    lastname: "Ibragimov",
    passport_seria: "АB 8389096",
    Tugilgansana: " 24.12.2001",
    INN: 580161220,
    JSHIR: 30911985920027,
    phone: 998993063341,
  },

  {
    id: 8,
    firstname: "Davronbek",
    lastname: "Qo'shboqov",
    passport_seria: "АB 7494388",
    Tugilgansana: " 25.08.2000",
    INN: 61187875,
    JSHIR: 52508005480036,
    phone: 998943441316,
  },
  {
    id: 9,
    firstname: "Ziyodjon",
    lastname: "Zokirov",
    passport_seria: "АB 8701755",
    Tugilgansana: " 11.04.2001",
    INN: "yo'q",
    JSHIR: 51104017020010,
    phone: 998935789464,
  },
  {
    id: 10,
    firstname: "Zokirali",
    lastname: "Ibrohimov",
    passport_seria: "АB 1264798",
    Tugilgansana: " 02.09.1999",
    INN: 549606683,
    JSHIR: 30209996970015,
    phone: "almashgan",
  },

  {
    id: 11,
    firstname: "Juratbek",
    lastname: "Qambaraliyev",
    passport_seria: "АB 6903372",
    Tugilgansana: " 27.05.2001",
    INN: 621207909,
    JSHIR: 5270501510072,
    phone: "998934412722",
  },
  {
    id: 12,
    firstname: "Iqboljon",
    lastname: "Jumaboyev",
    passport_seria: "АА 2838642",
    Tugilgansana: " 03.09.1997",
    INN: 549864411,
    JSHIR: 30309977010014,
    phone: "99 367 83 97",
  },
  {
    id: 13,
    firstname: "Javohir",
    lastname: "Bozorboyev",
    passport_seria: "АB 9060434",
    Tugilgansana: " 11.02.2002",
    INN: 621238459,
    JSHIR: 51102025970064,
    phone: 998993912505,
  },
  {
    id: 14,
    firstname: "Bobomurod",
    lastname: "Usmonaliyev",
    passport_seria: "АC 0319272",
    Tugilgansana: " 12.08.2002",
    INN: "Yoq",
    JSHIR: 51208025900019,
    phone: 998940477327,
  },
  {
    id: 15,
    firstname: "Shahzodbek",
    lastname: "Mirzazoda",
    passport_seria: "АА 4957204",
    Tugilgansana: " 27.03.1997",
    INN: 559569424,
    JSHIR: 32703977030027,
    phone: "Almashtirgan",
  },
  {
    id: 16,
    firstname: "Muhammadjon",
    lastname: "Sayfuddinov",
    passport_seria: "АА 5590479",
    Tugilgansana: " 01.01.2000",
    INN: 588261479,
    JSHIR: 32308995130065,
    phone: "Almashtirgan",
  },
  {
    id: 17,
    firstname: "Abror ",
    lastname: "Solijonov",
    passport_seria: "АА 4316223",
    Tugilgansana: " 01.09.1996",
    INN: 543904490,
    JSHIR: 30109965970041,
    phone: "Almashtirgan",
  },

  {
    id: 18,
    firstname: "Abdulboriyev ",
    lastname: "Muhammadali",
    passport_seria: "АB 0944355",
    Tugilgansana: "30.08.1997",
    INN: 554976753,
    JSHIR: 33008975920048,
    phone: 998976839797,
  },

  {
    id: 19,
    firstname: "Dostonboy ",
    lastname: "Normatov",
    passport_seria: "АB 4019256",
    Tugilgansana: "06.03.1999",
    INN: 591291465,
    JSHIR: 30603995920020,
    phone: "Almashtirgan",
  },
  {
    id: 20,
    firstname: "Hayotjon",
    lastname: "Ortiqov",
    passport_seria: "АB 8701799 ",
    Tugilgansana: "25.11.2001",
    INN: "yo'q",
    JSHIR: 52511017020022,
    phone: 998905658166,
  },
];

const btns = document.querySelector(".btn");
const h1 = document.querySelector(".h1");

let arr = [];

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
