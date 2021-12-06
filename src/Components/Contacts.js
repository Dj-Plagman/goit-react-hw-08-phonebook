import Filter from "./Filter/Filter";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactsList/ContactsList";
import s from "./Contacts.module.css";

export default function Contacts() {
  return (
    <div className={s.container}>
      <div className={s.form}>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
}