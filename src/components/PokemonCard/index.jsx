import pokemonType from '../../styles/pokemonType';
import './styles.modules.scss';

const PokemonCard = props => {
  return (
    <>
      <div className="container">
        <div className="profile-pokemon">
          <img
            className="pokemon-img"
            src={props.image}
            alt="pokemon profile"
          />
          <h2>{props.name}</h2>
        </div>
        <div className="container2">
          <div className="container3">
            <div id="number-id">
              <h2>Nº</h2>
              <p>{props.number}</p>
            </div>

            <div id="abilities">
              <h2>Abilities</h2>
              <p>{props.abilities}</p>
            </div>
          </div>
        </div>

        <div className="container4">
          <div id="height">
            <h2>Height</h2>
            <p>{props.height} m</p>
          </div>

          <div id="weight">
            <h2>Weight</h2>
            <p>{props.weight} Kg</p>
          </div>
        </div>

        <div className="container5">
          <div
            id="type-pokemon1"
            style={{
              backgroundColor: pokemonType.types[props.type?.toLowerCase()],
            }}
          >
            <p>{props.type}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonCard;
