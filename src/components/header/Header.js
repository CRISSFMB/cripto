import { Buttons } from './buttons/Buttons';
import { Nav } from './nav/Nav';

export default function Header() {
  return (
    <header className="header">
      <Buttons />
      <Nav />
    </header>
  );
}
