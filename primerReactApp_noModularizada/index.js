console.log("Archivo enlazado...")

// Crear un componente que se llama BotonEjemplo
class BotonEjemplo extends React.Component{
    constructor(props){
        super(props);
        this.state = { fueCliqueado: false };
    }

    render(){
        if (this.state.fueCliqueado){
            return "Has dado clic en el boton";

        }
        return React.createElement(
            'button', 
            {onClick: () => this.setState({fueCliqueado:true})},
            "Haz clic!"
        );
    }
}

// Seleccionar el bloque div de id root
const contenedorDOM = document.getElementById("root");
// Crear la seccion root de React
const raiz = ReactDOM.createRoot(contenedorDOM);
// Llamar al metodo render para renderizar la componente
raiz.render(React.createElement(BotonEjemplo))
