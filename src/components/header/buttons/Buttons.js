import { Link } from 'react-router-dom';

export const Buttons = () => {
  return (
    <div className="wrapper-button">
      <Link to={'/'}>
        <button className="btn">Dashboard</button>
      </Link>
      <button className="btn">Help</button>
    </div>
  );
};
