import { useState } from "react";
import ExpandedView from "./ExpandedView";

function PokemonCard(props) {
  const [isModalVisible, setModalVisibility] = useState(false);

  const { pokemon } = props;

  const { id, name, image, type, pro1, pro2, height, weight } = pokemon;

  // Get all the stats in here .....

  function getStatistics() {
    // bad coding ... // map ??
    const nameStat1 = pokemon.stats[0].stat.name;
    const Stat1Point = pokemon.stats[0].base_stat;

    const nameStat2 = pokemon.stats[1].stat.name;
    const Stat2Point = pokemon.stats[1].base_stat;

    const nameStat3 = pokemon.stats[2].stat.name;
    const Stat3Point = pokemon.stats[2].base_stat;

    const nameStat4 = pokemon.stats[3].stat.name;
    const Stat4Point = pokemon.stats[3].base_stat;

    const nameStat5 = pokemon.stats[4].stat.name;
    const Stat5Point = pokemon.stats[4].base_stat;

    const nameStat6 = pokemon.stats[5].stat.name;
    const Stat6Point = pokemon.stats[5].base_stat;

    const statsObj = {
      nameStat1,
      nameStat2,
      nameStat3,
      nameStat4,
      nameStat5,
      nameStat6,

      Stat1Point,
      Stat2Point,
      Stat3Point,
      Stat4Point,
      Stat5Point,
      Stat6Point
    };

    return statsObj;
  }

  //

  const handleModalOpen = () => {
    if (!isModalVisible) {
      setModalVisibility(true);
    }
  };

  return (
    <>
      <div className={`card-container ${type}`}>
        {/* <div className={`card-container`}> */}
        <div className="number">#{id}</div>
        {/* </div> */}
        <img src={image} alt={name} />

        <div className={"detail-container"}>
          <h3>{name.toUpperCase()}</h3>
          <h4>Type: {type}</h4>
        </div>

        <button className="pokeInfo" onClick={handleModalOpen}>
          {" "}
          Poke Info
        </button>
      </div>

      {isModalVisible === true ? (
        <ExpandedView
          height={height}
          weight={weight}
          type={type}
          setVisible={setModalVisibility}
          data={getStatistics()}
          visble={isModalVisible}
          image={image}
          name={name}
        />
      ) : null}
    </>
  );
}

export default PokemonCard;
