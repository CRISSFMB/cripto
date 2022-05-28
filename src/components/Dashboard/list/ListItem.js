import arrowleft from '../../../assets/arrowleft_icon.png';
import { Link } from 'react-router-dom';

export default function ListItem(props) {
  const link_route = 'details/' + props.info.id;
  return (
    <div className="itemList">
      <img
        className="itemList__image"
        src={props.info.image}
        alt=" ethereum icon"
      />
      <p className="itemList__symbol">{props.info.symbol}</p>
      <p className="itemList__name">{props.info.name}</p>
      <p className="itemList__info">
        {props.info.last_updated.substring(0, 10)}
      </p>
      <Link to={link_route}>
        <button className=" btn btn--icon itemList__button">
          <span>Details</span>
          <img className="itemList__img" src={arrowleft} alt=" arrow icon" />
        </button>
      </Link>
    </div>
  );
}
