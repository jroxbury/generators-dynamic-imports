let getIdGenny = false;
if (getIdGenny) {
  gennyInit();
} else {
  document.getElementById("container").innerHTML = `
    <div id="load-container">
      <p>You must import a generator file</p>
      <button id="load-genny" type="button">Load Genny</button>
    </div>
  `;
  document.getElementById("load-genny").addEventListener("click", () => {
    document.getElementById("load-container").remove();
    document.getElementById("container").innerHTML = `
      <h1>Id Genny</h1>
      <button id="genny-button" type="button">Generate ID</button>
      <p>Current Id: <span id="current-id"></span></p>
    `;
    gennyInit();
  });
}

function renderId(newValue = 0) {
  document.getElementById("current-id").innerText = newValue;
}

function gennyInit() {
  const button = document.getElementById("genny-button");
  const iterateSpeed = 500;
  renderId();
  import("./genny.js").then(({ default: myGenny }) => {
    const yieldIt = myGenny();

    button.addEventListener("click", () => {
      const { value: id } = yieldIt.next();
      renderId(id);
    });

    for (let i = 0; i <= 10; i++) {
      setTimeout(() => {
        const { value: id } = yieldIt.next();
        renderId(id);
      }, i * iterateSpeed);
    }
  });
}
