import ListItem from './ListItem';
import madrid from '../assets/madrid.jpg';
import barcelona from '../assets/barcelona.jpg';

const clickFn = (name) => alert(`${name} es la mejor ciudad del mundo`);

const cities = [
  {
    title: 'Madrid',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum accusantium expedita maiores nam temporibus facilis consectetur possimus odit, porro sapiente minus ipsum nostrum neque officia? Voluptates laudantium exercitationem tenetur voluptatem.',
    image: madrid,
  },
  {
    title: 'Barcelona',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum accusantium expedita maiores nam temporibus facilis consectetur possimus odit, porro sapiente minus ipsum nostrum neque officia? Voluptates laudantium exercitationem tenetur voluptatem.',
    image: barcelona,
  },
]

const List = () => {
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      <div className="col">
        {/* <ListItem
          title="Madrid"
          description="kfajfldjas fklsdj flskdjf lsd"
          image={madrid}
        /> */}

        {/* <ListItem
          title={cities[0].title}
          description={cities[0].description}
          image={cities[0].image}
        /> */}
        <ListItem {...cities[0]} onClick={clickFn} />
      </div>
      <div className="col">
        {/* <ListItem
          title="Barcelona"
          description="kfajfldjas fklsdj flskdjf lsd"
          image={barcelona}
        /> */}

        <ListItem {...cities[1]} onClick={clickFn} />
      </div>
    </div>
  )
}

export default List;