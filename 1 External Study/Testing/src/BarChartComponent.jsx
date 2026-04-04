import React from "react";

const BarChartComponent = () => {
  const data = [
    { label: "High", past7: 5, past30: 45 },
    { label: "Fault", past7: 7, past30: 15 },
    { label: "Medium", past7: 5, past30: 10 },
    { label: "Warning", past7: 4, past30: 9 },
    { label: "Low", past7: 14, past30: 16 },
  ];

  const maxHeight = 400;
  const maxDataValue = Math.max(...data.flatMap(d => [d.past7, d.past30]));

  return (
    <>
      <h2>Machine Status Chart</h2>
      <div style={{ marginBottom: "100px" }}>
        <span style={{ backgroundColor: "#357EC7", padding: "5px", marginRight: "10px" }}>Past 7 days</span>
        <span style={{ background: "repeating-linear-gradient(135deg, #12239E, #12239E 10px, #357EC7 10px, #357EC7 20px)", padding: "5px" }}>Past 30 days</span>
      </div>
      <div style={{ textAlign: "center", fontFamily: "Arial", width: "500px", height: '500px', margin: "auto" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "30px", height: `${maxHeight}px`, alignItems: "flex-end" }}>
          {data.map((item, index) => (
            <div key={index} style={{ textAlign: "center" }}>
              <div style={{ display: "flex", alignItems: "flex-end" }}>
                <div>
                  {item.past7}
                  <div
                    style={{
                      width: "40px",
                      height: `${(item.past7 / maxDataValue) * maxHeight}px`,
                      backgroundColor: "#357EC7",
                    }}
                  ></div>
                </div>
                <div>
                  {item.past30}
                  <div
                    style={{
                      width: "40px",
                      height: `${(item.past30 / maxDataValue) * maxHeight}px`,
                      background: "repeating-linear-gradient(135deg, #12239E, #12239E 10px, #f55742 10px, #f55742 20px)",
                    }}
                  ></div>
                </div>
              </div>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BarChartComponent;
