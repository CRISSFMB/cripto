import { Avatar } from './avatar/Avatar';
import { ButtonPlus } from './button-plus-icon/ButtonPlus';
import { IconAlert } from './icon-alert/IconAlert';

export const Nav = () => {
  return (
    <nav className="nav">
      <IconAlert />
      <Avatar />
      <ButtonPlus />
    </nav>
  );
};
