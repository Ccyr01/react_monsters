import Card from "../card/card.component"
import './card-list.styles.css';
const CardList = ({ monsters }) => (
    <div className="card-list-container">
        {monsters.map(({ name, email, id }, idx) => (
            <Card key={`${name}-${idx}`} name={name} email={email} id={id} />
        ))}
    </div>
)

export default CardList;