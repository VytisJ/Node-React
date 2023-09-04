import Card from "./components/Card";
import FuncButton from "./components/FuncButton";
import FuncDiv from "./components/FuncDiv";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import WelcomeClass from "./components/WelcomeClass";
import lizard from "./assets/lizard.jpeg";
import Avatar from "./components/Avatar";
import UserCard from "./components/UserCard";

const App = () => {
  return (
    <div>
      <Welcome name="Rokas" surname="Rokaitis" />
      <WelcomeClass name="Tomas" />
      <FuncButton title="Help me" />
      <FuncButton title="52" />
      <FuncDiv />
      {/* <FuncButton title={[]} /> */}
      {/* <FuncButton title={{}} /> */}

      <Hero
        imageUrl="https://media.springernature.com/m685/springer-static/image/art%3A10.1038%2Fs41477-019-0374-3/MediaObjects/41477_2019_374_Figa_HTML.jpg"
        title="First hero"
        subtitle="second hero"
        buttonText="Button"
      />
      <br />
      <Hero
        imageUrl="https://environmentamerica.org/wp-content/uploads/2023/05/Flat-Country-credit-Cascadia-Wildlands-DSC_4323.jpeg"
        title="Second hero"
        subtitle="first hero"
        buttonText="Mygtukas"
      />
      <br />
      <Card
        imageUrl="https://cdn.mos.cms.futurecdn.net/6AxBGxrtbSAkmhLmtdvGLX.jpg"
        title="Lizard"
        subtitle="Lizards are a widespread group of squamate reptiles, with over 7,000 species, ranging across all continents except Antarctica, as well as most oceanic"
      />
      <br />
      <Card
        imageUrl={lizard}
        title="Lizard"
        subtitle="Lizards are a widespread group of squamate reptiles, with over 7,000 species, ranging across all continents except Antarctica, as well as most oceanic"
      />
      <Avatar name="Rokas Andreikenas" />
      <Avatar name="Rokas Jaunesnysis Andreikenas" />
      <UserCard name="Rokas" birthDate={new Date("1998-12-31")} height={184} />
      <UserCard name="Tomas" birthDate={new Date("1995-10-10")} />
    </div>
  );
};

export default App;
