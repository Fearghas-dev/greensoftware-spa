// Resources.jsx
import './styles/Resources.css';

const Resources = () => {
  return (
    <div className="resources">
      <h1>Resources & References</h1>
      <h2>
        A curated list of tools, articles, and data sources relevant to green computing.
      </h2>
      {/* Placeholder for resource list */}
      <div  className="card">
        <ul>
            <li>
              <h3>Green Software Foundation</h3>
              <p>A great entry point to green computing whether one is concerned with metrics, practices, or philosophy.</p>
              <br></br>
              <p>Learn more <a href="https://greensoftware.foundation/" target='_blank'>here.</a></p>
            </li>

            
            <li>
              <h3>Our World in Data</h3>
              <p>A robust resource for all kinds of data on countries around the world, 
                including but not limited to climate, energy, and emissions data.</p>
              <br></br>
              <p>Dive in <a href="https://ourworldindata.org/" target='_blank'>here.</a></p>
            </li>

            
            <li>
              <h3>European Union Corporate Sustainability Reporting</h3>
              <p>This resource from the EU details how the union is engaging with large business entities to source reliable metrics
                 as well as enforce sustainability directives.</p>
              <br></br>
              <p>Access resource <a href="https://finance.ec.europa.eu/capital-markets-union-and-financial-markets/company-reporting-and-auditing/company-reporting/corporate-sustainability-reporting_en" target='_blank'>here.</a></p>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default Resources;
