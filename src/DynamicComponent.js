import { useState } from 'react';
import drug from './drug2.json';
import './DynamicComponent.css';

const DynamicComponent = () => {
  const [drugs] = useState([]);
  drugs.push(drug.fields);

  return (
    <div className='dynamicComponent'>
      <h1 className='dynamicComponent__heading'>Health Care App</h1>
      <table className='dynamicComponent__table'>
        {drugs[0].map((drug) =>
          Object.keys(drug).map((keys, index) => (
            <tbody key={index}>
              <tr>
                <td>{keys}</td>
                {(typeof drug[keys] === 'boolean' &&
                  ((drug[keys] && <td>true</td>) || <td>false</td>)) ||
                  (typeof drug[keys] === 'object' &&
                    drug[keys].map((elementKey) =>
                      Object.keys(elementKey).map((elementValue, elemIndex) => (
                        <tr key={elemIndex}>
                          <td>{elementValue}</td>
                          <td>{elementKey[elementValue]}</td>
                        </tr>
                      ))
                    )) || <td>{drug[keys]}</td>}
              </tr>
            </tbody>
          ))
        )}
      </table>
    </div>
  );
};

export default DynamicComponent;
