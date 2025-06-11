import Css from "./App.module.css";
// Components
import Form from "./components/Form";
import ContactList from "./components/ContactList";
const App = () => {
  return (
    <div className={Css.App}>
      <h1 className={Css.Title}>Phone Contacts</h1>
      <Form />
      <ContactList />
    </div>
  );
};

export default App;
// theme : https://colorhunt.co/palette/0000002222221dcd9f169976
