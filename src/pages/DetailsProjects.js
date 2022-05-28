import { useParams } from 'react-router-dom';
import Aside from '../components/Dashboard/aside/Aside';
import MainDetail from '../components/MainDetail';
import Statistics from '../components/Statistics';
import Description from '../components/Description';

export default function DetailsProjects(props) {
  const params = useParams();
  const filter_info = props.info_detail.filter(
    (element) => element.id === params.cripto
  );

  return (
    <div className="DetailsProjects">
      <Aside info_aside={filter_info} />

      <Statistics info_statistics={filter_info} />

      {/* <div className={classes.Logo}><Main info_main={filter_info}/></div> */}

      <MainDetail info_main={filter_info} />

      <Description info_description={filter_info} />
    </div>
  );
}
