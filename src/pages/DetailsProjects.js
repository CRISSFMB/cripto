import { useParams } from 'react-router-dom';

import Statistics from '../components/detailsPorjects/statistics/Statistics';
import Description from '../components/detailsPorjects/description/Description';
import MainDetail from '../components/detailsPorjects/mainDetails/MainDetail';
import AsideDetail from '../components/detailsPorjects/asideDetail/AsideDetail';

export default function DetailsProjects(props) {
  const params = useParams();
  const filter_info = props.info_detail.filter(
    (element) => element.id === params.cripto
  );

  return (
    <div className="DetailsProjects">
      <AsideDetail info_aside={filter_info} />

      <Statistics info_statistics={filter_info} />

      {/* <div className={classes.Logo}><Main info_main={filter_info}/></div> */}

      <MainDetail info_main={filter_info} />

      <Description info_description={filter_info} />
    </div>
  );
}
