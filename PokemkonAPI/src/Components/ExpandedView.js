function ExpandedView(props) {
  console.log(props, "ExpandedView");
  const {
    type,
    visible,
    setVisible,
    image,
    name,
    weight,
    height,
    data
  } = props;

  return (
    <div className={`expanded-overlay ${type}`}>
      <button className={`close-button`} onClick={() => setVisible(false)}>
        X
      </button>

      {/* left portion -> image  */}

      <div className="expanded-left">
        <img className="expanded-image" src={image} alt={name} />
        <h3 className="expanded-name">{name}</h3>
      </div>

      {/* Right portion  -> statistics */}
      <div className={`expanded-right ${type}`}>
        <table className={`expanded-table ${type}`}>
          <tbody>
            <tr>
              <td></td>
              <td>
                <table>
                  <tbody>
                    <tr>
                      <td>Weight:</td>
                      <td>{weight}</td>
                    </tr>

                    <tr>
                      <td>Height:</td>
                      <td>{height}</td>
                    </tr>
                  </tbody>
                </table>
              </td>

              <td>
                {/* stat */}

                <table>
                  <tbody>
                    <tr>
                      <td>Stat1</td>
                      <td>{data.nameStat1}</td>
                    </tr>
                    <tr>
                      <td>Stat2</td>
                      <td>{data.nameStat2}</td>
                    </tr>
                    <tr>
                      <td>Stat3</td>
                      <td>{data.nameStat3}</td>
                    </tr>
                    <tr>
                      <td>Stat4</td>
                      <td>{data.nameStat4}</td>
                    </tr>
                    <tr>
                      <td>Stat5</td>
                      <td>{data.nameStat5}</td>
                    </tr>
                    <tr>
                      <td>Stat6</td>
                      <td>{data.nameStat6}</td>
                    </tr>
                  </tbody>
                </table>
              </td>

              <td>
                {/* BS points */}

                <table>
                  <tbody>
                    <tr>
                      <td>BS1:</td>
                      <td>{data.Stat1Point}</td>
                    </tr>
                    <tr>
                      <td>BS2:</td>
                      <td>{data.Stat2Point}</td>
                    </tr>
                    <tr>
                      <td>BS3:</td>
                      <td>{data.Stat3Point}</td>
                    </tr>
                    <tr>
                      <td>BS4:</td>
                      <td>{data.Stat4Point}</td>
                    </tr>
                    <tr>
                      <td>BS5:</td>
                      <td>{data.Stat5Point}</td>
                    </tr>
                    <tr>
                      <td>BS6:</td>
                      <td>{data.Stat6Point}</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ExpandedView;
