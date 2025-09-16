// GreenTool.jsx
import './styles/GreenTool.css';
import React, { useState } from 'react';
import cpus from '../data/cpus.json';
import gpus from '../data/gpus.json';

const CategorySelector = ({ label, options, value, onChange }) => (
  <label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">Select {label}...</option>
      {Object.keys(options).map((mfr) => (
        <option key={mfr} value={mfr}>
          {mfr}
        </option>
      ))}
    </select><span className="dropdown">˅</span>
  </label>
);

const ItemSelector = ({ label, itemsByMfr, manufacturer, value, onChange }) => (
  <label >
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={!manufacturer}
    >
      <option value="">Select {label}...</option>
      {manufacturer &&
        itemsByMfr[manufacturer].map((item) => (
          <option key={item.name} value={item.name}>
            {item.name} ({item.year})
          </option>
        ))}
    </select><span className="dropdown">˅</span>
  </label>
);

const GreenTool = () => {
  const [cpuMfr, setCpuMfr] = useState('');
  const [gpuMfr, setGpuMfr] = useState('');
  const [cpuChoice, setCpuChoice] = useState('');
  const [gpuChoice, setGpuChoice] = useState('');

  const findBetter = (list, choice) => {
    if (!choice) return { recommendations: [], strength: '' };
    const allItems = Object.values(list).flat();
    const item = allItems.find((i) => i.name === choice);
    if (!item) return { recommendations: [], strength: '' };


    const age = new Date().getFullYear() - item.year;
    console.log(new Date().getFullYear());
    console.log(item.year);
    console.log(age);
    let strength = '';
    if (age >= 5) strength = 'strong';
    else if (age >= 3) strength = 'moderate';
    else strength = 'low';

    const better = allItems
      .filter((i) => i.ppw > item.ppw && age >= new Date().getFullYear() - i.year)
      .sort((a, b) => b.ppw - a.ppw)
      .slice(0, 3);


    return { recommendations: better, strength };
  };

  const cpuRec = findBetter(cpus, cpuChoice);
  const gpuRec = findBetter(gpus, gpuChoice);

  return (
    <div className="greentoolwrapper">
    <div className='green-tool'>
      <h1>
        Green Optimization Tool
      </h1>
      <div className="card form">
      <h3>
        Enter your current CPU and GPU to get eco-friendly hardware suggestions based on
        performance per watt and component age.
      </h3>
      <div className='in-out'>
      <form>
        <CategorySelector
          label="CPU Manufacturer"
          options={cpus}
          value={cpuMfr}
          onChange={(m) => {
            setCpuMfr(m);
            setCpuChoice('');
          }}
        />
        <ItemSelector
          label="CPU Model"
          itemsByMfr={cpus}
          manufacturer={cpuMfr}
          value={cpuChoice}
          onChange={setCpuChoice}
        />
        <br></br>
        <CategorySelector
          label="GPU Manufacturer"
          options={gpus}
          value={gpuMfr}
          onChange={(m) => {
            setGpuMfr(m);
            setGpuChoice('');
          }}
        />
        <ItemSelector
          label="GPU Model"
          itemsByMfr={gpus}
          manufacturer={gpuMfr}
          value={gpuChoice}
          onChange={setGpuChoice}
        />
      </form>

      {(cpuChoice || gpuChoice) && (
        <div className='results'>
          {cpuChoice && (
            <section>
              <h2>
                Recommended CPUs (better PPW than yours)
              </h2>
              <p>
                For {cpuChoice} with PPW {
                    Object.values(cpus).flat().find(
                        cpu => cpu.name === cpuChoice)?.ppw ?? "N/A"
                }:
              </p>
              <p>
                Recommendation strength: <strong>{cpuRec.strength}</strong>
              </p>
              <ul>
                {cpuRec.recommendations.map((r) => (
                  <li key={r.name}>
                    {r.name} ({r.ppw} PPW, released in {r.year})
                  </li>
                ))}
              </ul>
            </section>
          )}
          {gpuChoice && (
            <section>
              <h2>
                Recommended GPUs (better PPW than yours)
              </h2>
              <p>
                Recommendation strength: <strong>{gpuRec.strength}</strong>
              </p>
              <ul>
                {gpuRec.recommendations.map((r) => (
                  <li key={r.name}>
                    {r.name} ({r.ppw} PPW, released in {r.year})
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      )}
      </div>
      </div>
    </div>
    <div className='card bottom'>
      <h2>Best Practices</h2>
              <h3>In general:</h3>

      <ul>
        <li>Use darkmode whenever possible, especially on OLED displays.</li>
      </ul>
      <h3>Developer-specific:</h3>
      <ul>
        <li>Enable sleep mode on inactive machines.</li>
        <li>Cache API and backend calls to reduce redundant calls.</li>
      </ul>
    </div>
    </div>

  );
};

export default GreenTool;
