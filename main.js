const start = () => {
  let dividOut = document.getElementById("input-dividendo").value;
  let divisOut = document.getElementById("input-divisor").value;

  dividOut = parseInt(dividOut);
  divisOut = parseInt(divisOut);

  if (isNaN(dividOut) || isNaN(divisOut)) {
    Swal.fire({
      icon: "error",
      title: "Solo ingrese números",
    });
  } else if (!isNaN(dividOut)) {
    const russianDivision = (dividend, divisor) => {
      let mulList = document.getElementById("mult-list");

      let doubleMul = 1,
        resulMul = divisor,
        aux = 0,
        aux2 = 0,
        res = 0;
      let array = [],
        arrays2 = [],
        array3 = [],
        vector2 = [],
        array4 = [],
        elementsHTML = [];

      console.log("\n");

      while (dividend >= resulMul) {
        array.push(resulMul);
        array3.push(doubleMul);
        console.log(`${resulMul} -> ${doubleMul}`);
        let p = document.createElement("p");

        p.className = "step-mul";
        p.innerText = `${resulMul} -> ${doubleMul}`;
        mulList.appendChild(p);
        resulMul *= 2;
        doubleMul *= 2;
      }

      arrays2 = powerSet(array);
      array4 = powerSet(array3);

      for (let vector of arrays2) {
        if (vector.length > 0) {
          res = vector.reduce((beforeData, currentData) => {
            return beforeData + currentData;
          }, 0);

          if (res > dividend) break;
          aux2 = res;
          vector2 = vector;
          aux++;
        }
      }

      let quotient = array4[aux].reduce((beforeData, currentData) => {
        return beforeData + currentData;
      }, 0);

      console.log(`\n${vector2} = ${aux2}`);
      console.log(`${array4[aux]} = ${quotient}`);
      console.log(
        `\nDividendo: ${dividend}, Divisor: ${divisor}, Cociente: ${quotient}\n`
      );
      console.log("Residuo");
      console.log(`${dividend} - ${aux2} = ${dividend - aux2}`);

      const p1 = document.createElement("p");
      p1.textContent = `\nDividendo: ${dividend}\n`;

      const p2 = document.createElement("p");
      p2.textContent = `\nDivisor: ${divisor}\n`;
      const p3 = document.createElement("p");
      p3.textContent = `\nCociente: ${quotient}\n`;
      const p4 = document.createElement("p");
      p4.textContent = `\nResiduo: ${dividend - aux2}`;

      mulList.appendChild(p1);
      mulList.appendChild(p2);
      mulList.appendChild(p3);
      mulList.appendChild(p4);
    };
    russianDivision(dividOut, divisOut);
  }

  function powerSet(datos) {
    return datos.reduce((a, v) => a.concat(a.map((d) => [v].concat(d))), [[]]);
  }
};

const removeHTMLTags = () => {
  let fhatherTag = document.getElementById("mult-list");
  fhatherTag.innerHTML = "";
};
