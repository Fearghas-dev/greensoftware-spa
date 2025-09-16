// DataVis.jsx
import './styles/DataVis.css';
import ClimateMap from './backend/ClimateMap';

const DataVis = () => {
  return (
    <div className="data-vis">
      <h1>Data Visualization</h1>
      <h2>
        Explore emissions and efficiency data related to hardware and usage patterns.
      </h2>
      <div className="visualization">
        {/* Map rendered here */}
        <ClimateMap />
      </div>
      <div className="card">
        <section className="data-vis-summary">
          <h2>Carbon Emissions per Capita</h2>
          <p>
            &nbsp;The above map visualises carbon emissions per capita around the world. In the future, it's planned
            to correlate and coordinate these data and those from other sources to isolate emissions due to 
            computing and to more precisely identify regions within countries.
            Industry actors may find such data useful to inform decisions about where to host data or use cloud 
            computing services.          
          </p>
        </section>
      </div>
    </div>
  );
};

export default DataVis;
