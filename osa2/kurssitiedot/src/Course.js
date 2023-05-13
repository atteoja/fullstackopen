const Header = (props) => {

    return (
      <div>
        <h2>{props.name}</h2>
      </div>
    );
};
  
const Part = (props) => {

    return (
        <div>
        <p>
            {props.part} {props.exercise}
        </p>
        </div>
    );
};

const Content = (props) => {

    const parts = props.parts;

    const partsMap = parts.map(part => 
        <Part key={part.id} part={part.name} exercise={part.exercises} />
        )

    return (
        <div>
        {partsMap}
        </div>
    );
};

const Total = (props) => {

    const parts = props.parts;

    const initial = 0;
    const sum = parts.reduce(
        (accumulator, value) => accumulator + value.exercises,
        initial
    )

    return (
        <div>
        <p><strong>total of {sum} exercises</strong></p>
        </div>
    );
};

const Course = (props) => {

    const name = props.name
    const parts = props.parts

    return (
        <div>
        <Header name={name} />
        <Content parts={parts} />
        <Total parts={parts} />
        </div>
    );
};

export default Course;