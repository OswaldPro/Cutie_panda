import PrimaryBtn from "../buttons/primaryBtn";
import Header from "../header/header";

export default function HomePage() {
  return (
    <div className="home-page-wrapper">
      <Header></Header>
      <img
        src="/images/joie.png"
        alt="Cartoon illustration of a smiling panda sitting down with its arms raised and cheeks blushing. The background is plain white."
      />
      <p>
        Aide <span className="bold-inter">Cutie Panda</span> s'épanouir dans la
        vie, nourris le , fais le travailler, dormir et jouer, en évitant les
        embûches, <span className="bold-inter">prêt ?</span>
      </p>
      <PrimaryBtn to="/MainPage">Jouer</PrimaryBtn>
    </div>
  );
}
