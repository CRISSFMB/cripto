import { useParams } from 'react-router-dom';
import Header from '../components/header/Header';
import Sidebar from '../components/sidebar/Sidebar';
import Aside from '../components/Aside';
import MainDetail from '../components/MainDetail';
import Statistics from '../components/Statistics';
import Description from '../components/Description';

export default function DetailsProjects(props) {
  const params = useParams();
  const filter_info = props.info_detail.filter(
    (element) => element.id === params.cripto
  );

  return (
    <>
      <div>
        <div>
          <Header />
        </div>
        <div>
          <Sidebar />
        </div>
        <div>
          <Aside info_aside={filter_info} />
        </div>
        <div>
          <Statistics info_statistics={filter_info} />
        </div>
        {/* <div className={classes.Logo}><Main info_main={filter_info}/></div> */}
        <div>
          <MainDetail info_main={filter_info} />
        </div>
        <div>
          <Description info_description={filter_info} />
        </div>
      </div>
    </>
  );
}
