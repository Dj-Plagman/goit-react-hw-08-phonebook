import Loader from "react-loader-spinner";
import { useDeleteContactMutation } from "../../redux/operation";
import s from "./ContactList.module.css";

export default function ContactListItem({ el }) {
  const [deleteContact, { isLoading: deleteIsLoading }] =
    useDeleteContactMutation();
  return (
    <p className={s.contactDescription} >
      {el.name}: {el.number}
      <button
        type="button"
        className={s.deleteBtn}
        data-id={el.id}
        onClick={() => {
          deleteContact(el.id);
        }}
        disabled={deleteIsLoading}
      >
        {deleteIsLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={15} width={45} />
        ) : (
          "Delete"
        )}
      </button>
    </p>
  );
}