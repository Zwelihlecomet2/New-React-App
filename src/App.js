import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Form from "./Components/Form/Form";
import Notes from "./Components/Notes/Notes";
import Modal from "./Components/Modal/Modal";


function App() {
  const notes = [
    {
      id: "123",
      title: "My Test Title",
      text: "My Test Text"
    },
    {
      id: "124",
      title: "My Test Title2",
      text: "My Test Text2"
    },
    {
      id: "125",
      title: "My Test Title3",
      text: "My Test Text3"
    },
  ]
    
  return (
    <>
      <Navbar />
      <Sidebar />
      <Form />
      <Notes notes={notes}/>
      <Modal />
    </>
  );
}

export default App;
