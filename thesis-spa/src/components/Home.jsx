import './styles/Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <><div className="hero">
        <div className="hero-headers">
            <h1>Green Computing</h1>
            <h2>Welcome to Fergus Carlin's master's thesis companion site.</h2>
        </div>
      <ul>
        <li>
          Inform visitors of the main thrust of Fergus' thesis,&nbsp;
          <a href="#thesis">
            <em>"Greenware: An Entry Point to Green IT for Industry Professionals"</em>
          </a>
        </li>
        <li>
          Collect and present data that supports the conclusions of said thesis.&nbsp;
          <Link to="/datavis">See data visualizations</Link>
        </li>
        <li>
          Provide a tool to help users adopt some of the green computing practices advocated.&nbsp;
          <Link to="/greentool">Try the Green Tool</Link>
        </li>
        <li>
          Present a list of references and resources relevant to the thesis and its conclusions as well as the beneficial practices detailed therein.&nbsp;
          <Link to="/resources">Explore resources</Link>
        </li>
      </ul>
    </div>
    <div className="card">
      <section className="abstract">
        <h2 id="thesis">Thesis Abstract</h2>
        <p>
          &nbsp;Tsunamis are barely distinguishable in the open ocean, their destructive potential is only realised as 
          they approach the shore. This metaphor symbolises the rapidly growing climate crisis, in which the global 
          ICT sector is already a significant contributor and has the potential to become an even greater contributor.
          In this technologically enabled age, the question arises: where is the tipping point, what can protect us 
          from ourselves, and what are the consequences of unchecked digital expansion? The steps to reverse this 
          course must be as drastic as those that brought us here. Green computing represents one essential piece 
          of the solution.
          <br></br>
          <br></br>
          &nbsp;This study reviewed the current state of the IT industry’s power consumption and environmental impact, 
          focusing on three domains of Green IT: Green Hardware, Green Software, and Green Cloud Computing. The 
          chosen areas represent the historical, contemporary, and future directions of sustainable computing. 
          A literature review evaluated existing research, practices, and gaps. In parallel, a prototype web 
          application (Greenware) was developed as a companion tool to illustrate the findings, enable hardware 
          comparisons and visualise energy intensity across regions, while serving as an educational resource for 
          ICT professionals.
          <br></br>
          <br></br>
          &nbsp;The results indicate that IT already exerts a substantial environmental burden, with no unified or 
          standardised approach currently in place to mitigate this impact effectively. If current growth continues 
          unchecked, the problem may become significantly worse. The project highlights the importance of integrated, 
          multi-dimensional approaches to assessing IT’s total environmental impact. It demonstrates the potential of 
          accessible management tools for supporting awareness and decision-making. This study provides an entry point 
          for new professionals and a foundation for future research into comprehensive Green IT management systems. 
        </p>
      </section>
    </div>
    <div className="card">
      <section className="site-info">
        <h2>Site Structure</h2>
        <p>
          &nbsp;This site is built using <span className="accent">React</span> with <span className="accent">Vite</span> for fast development and optimized builds. 
          It's hosted on <span className="accent">Azure</span> for seamless CI/CD deployment. 
          Interactive data visualizations are powered by <span className="accent">Leaflet</span>, 
          and all styles are managed with <span className="accent">CSS</span>.
          Version control is handled through <span className="accent">git</span> and hosted on <span className="accent">GitHub</span>.
        </p>
        <br></br>
        
        <p>
          &nbsp;To reduce environmental impact, the site defaults to <span className="accent">dark mode</span> for OLED power 
          savings, uses <span className="accent">lazy loading</span> for all images and components, and caches responses 
          from public APIs for reduced network overhead. Bundling is optimized and dependencies are kept minimal to 
          keep the site fast and lightweight.
        </p>
      </section>
    </div>
    </>
  );
}
