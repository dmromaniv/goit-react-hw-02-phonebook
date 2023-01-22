import PropTypes from 'prop-types';
import s from './ContactItem.module.css';

export const ContactItem = ({ name, number, deleteContact }) => {
  const onDeleteBtnClick = event => {
    deleteContact(event.target.value);
  };
  return (
    <li className={s.listItem}>
      {name} - {number}
      <button value={name} className={s.button} onClick={onDeleteBtnClick}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
