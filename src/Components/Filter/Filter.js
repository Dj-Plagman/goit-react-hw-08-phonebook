import shortid from "shortid";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/slice";
import selectors from "../../redux/selectors";
import s from "./Filter.module.css";

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectors.getFilter);
  const filterInputId = shortid.generate();
  return (
    <div>
      <label htmlFor={filterInputId}>Find contacts by name</label>
      <input
        id={filterInputId}
        type="text"
        name="filter"
        value={filter}
        className={s.filterInput}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Casnumbermore d'Artagnan и т. п."
        onChange={(e) => dispatch(setFilter(e.currentTarget.value))}
      />
    </div>
  );
}

export default Filter;