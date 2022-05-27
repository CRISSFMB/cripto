import Aside from '../components/Dashboard/aside/Aside';
import CriptoList from '../components/Dashboard/cripto/CriptoList';
export default function Dashboard(props) {
  return (
    <>
      <CriptoList info_main={props.info_dashboard} />

      <Aside info_aside={props.info_dashboard} />

      {/* <div>
        <MainList info_main_list={props.info_dashboard} />
      </div>{' '} */}
    </>
  );
}
