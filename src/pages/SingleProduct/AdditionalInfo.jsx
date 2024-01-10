/* eslint-disable react/prop-types */
import "../../styles/AdditionalInfo.css"
import { decode } from "html-entities";

function InfoBlock({ title, list }) {
  return (
    <div className="info-block-container">
      <h3 className="info-block-title">{title}</h3>
      <ul className="info-block-ul">{list}</ul>
    </div>
  );
}

export function AdditionalInfo({ features, included, details }) {
  const formatFeatures = (f, index) => {
    const features = f.feature.split("\n");

    const content =
      features.length > 1 ? (
        <>
          <h3 className="feature-title">{decode(features[0])}</h3>
          {decode(features[1])}
        </>
      ) : (
        decode(features[0])
      );
    return (
      <li key={index} className="list-item">
        {content}
      </li>
    );
  };

  return (
    <section className="additional-info-container">
      <h2 className="section-title">Overview</h2>

      {features && features.length > 0 && (
        <InfoBlock title="Features" list={features.map(formatFeatures)} />
      )}

      {included && included.length > 0 && (
        <InfoBlock
          title="What's included?"
          list={included.map((i, index) => {
            return (
              <li key={index} className="list-item">
                {decode(i.includedItem)}
              </li>
            );
          })}
        />
      )}

      {details && details.length > 0 && (
        <>
          <h2 className="section-title">Specifications</h2>
          <InfoBlock
            title="Details"
            list={details.map((d, index) => {
              return (
                <li key={index} className="list-item">
                  <div className="flex">
                    <span className="left-item">{d.name}</span>
                    <span className="right-item">{d.values.map((detail) => detail)}</span>
                  </div>
                </li>
              );
            })}
          />
        </>
      )}
    </section>
  );
}