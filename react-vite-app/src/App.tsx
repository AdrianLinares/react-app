import CardBody from "./components/CardBody";
import Card from "./components/Card";
import List from "./components/List";

function App() {
  const list = [
    'Goku', 'Tanjiro', 'Eren'
  ]
  return <div>
    <Card>
      <CardBody title="Hola Mundo" text="Este es el texto" />
      <List data={list} />
    </Card>
  </div>
}

export default App