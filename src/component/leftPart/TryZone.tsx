export function TryZone() {
  return <div className="flex flex-col items-center w-5/6">

    <h2 className="mb-5 text-white uppercase font-bold text-lg">Tentives</h2>

    <section>
      <input type="text" className="me-10 p-1 rounded-lg text-center uppercase" maxLength={1}></input>
      <button id="finded" type="button" className="bg-sky-400 p-1 rounded-lg hover:bg-sky-500 hover:scale-105">Valider</button>     
    </section>
 
  </div>
}