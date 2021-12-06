import { useSelector } from "react-redux";
import Loader from "react-loader-spinner";
import { useGetContactsQuery } from "../../redux/operation";
import ContactListItem from "./ContactItem";
import selectors from "../../redux/selectors";
//import s from "./ContactList.module.css";

function ContactList() {
  const filter = useSelector(selectors.getFilter);
  const { data, isLoading: contactsIsLoading } = useGetContactsQuery();
  return (
    <div>
      {contactsIsLoading && (
        <Loader type="TailSpin" color="#00BFFF" height={100} width={100} />
      )}
      {data &&
        data
          .filter((obj) =>
            obj.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map((el) => <ContactListItem key={el.id} el={el} />)}
    </div>
  );
}

export default ContactList;