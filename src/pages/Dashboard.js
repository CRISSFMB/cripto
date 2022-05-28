import Aside from '../components/Dashboard/aside/Aside';
import CriptoList from '../components/Dashboard/cripto/CriptoList';
import List from '../components/Dashboard/list/List';

export default function Dashboard(props) {
  return (
    <>
      <CriptoList info_main={props.info_dashboard} />
      <Aside info_aside={props.info_dashboard} />
      <List info_main_list={props.info_dashboard} />
    </>
  );
}
