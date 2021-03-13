export default function* myGenny() {
  let id;
  while (true) {
    id = window.crypto.getRandomValues(new Uint32Array(1));
    yield id;
  }
}
