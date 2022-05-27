import downarrow from '../../../../assets/downarrow_icon.png';

export const ButtonPlus = () => {
  return (
    <button className="btn btn--icon">
      <span>Sara Hartman</span>
      <img src={downarrow} alt="arrow icon" />
    </button>
  );
};
