import GruposMusicales from "./componentes/Musica";

const App = () => {

  const bienvenida = "Bienvenid@s a la app de grupos musicales";
  const numeros = [1,2,3]

  return (
    <div className="App">
      <h1> {bienvenida} </h1>

      {
        numeros.map(numero => {
          return (
          <p> Numero: {numero}</p>
          );

        })
      }
      <GruposMusicales nombre="Tool" estilo="rock" />
      <GruposMusicales nombre="Cultura Profetica" estilo="reggae" />
    </div>
  )

}
export default App;
