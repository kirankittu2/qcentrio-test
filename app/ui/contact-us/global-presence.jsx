import CountryCard from "../global/country-card";
import country1 from "@/public/country-1.svg";
import country2 from "@/public/country-2.svg";
import country3 from "@/public/country-3.svg";
import country4 from "@/public/country-4.svg";
import country5 from "@/public/country-5.svg";
import country6 from "@/public/country-6.svg";

export default function GlobalPresence() {
  return (
    <div className="global-presence-section">
      <h2
        data-option="strip-slide-up"
        className="section-heading animate strip-slide-up strip-slide-black">
        Global Presence, Local Expertise
      </h2>
      <p
        data-option="up"
        className="global-presence-sub-heading animate animate-hidden">
        From our delivery centers worldwide, we offer you the domain <br />
        expertise you need, whenever and wherever you need it.
      </p>
      <div className="all-countries horizontal-scroll-2 ">
        <CountryCard
          num="1"
          image={country1}
          title="USA (Head Quarter)"
          content="405 State Hwy 121, Suite A250 Lewisville, Texas, 75067"
        />
        <CountryCard
          num="2"
          image={country2}
          title="Australia"
          content="Level 10,20 Martin Place Sydney, NSW, 2000"
        />
        <CountryCard
          num="3"
          image={country3}
          title="India"
          content="Unit # 504D, 5th floor, 126(P), PSR Prime Tower, Gachibowli, Hyderabad, India, 500032"
        />
        <CountryCard
          num="4"
          image={country4}
          title="Singapore"
          content="1 Raffles Place, #34-04, One Raffles Place, Singapore, 048616"
        />
        <CountryCard
          num="5"
          image={country5}
          title="United Kingdom"
          content="200 Brook Drive Green Park Reading RG2 6UB United Kingdom"
        />
        <CountryCard
          num="6"
          image={country6}
          title="Switzerland"
          content="15 Chemin de Grange Canal, 1208, Geneva Switzerland"
        />
        <CountryCard
          num="1"
          image={country1}
          title="USA (Head Quarter)"
          content="405 State Hwy 121, Suite A250 Lewisville, Texas, 75067"
        />
        <CountryCard
          num="2"
          image={country2}
          title="Australia"
          content="Level 10,20 Martin Place Sydney, NSW, 2000"
        />
        <CountryCard
          num="3"
          image={country3}
          title="India"
          content="Unit # 504D, 5th floor, 126(P), PSR Prime Tower, Gachibowli, Hyderabad, India, 500032"
        />
        <CountryCard
          num="4"
          image={country4}
          title="Singapore"
          content="1 Raffles Place, #34-04, One Raffles Place, Singapore, 048616"
        />
        <CountryCard
          num="5"
          image={country5}
          title="United Kingdom"
          content="200 Brook Drive Green Park Reading RG2 6UB United Kingdom"
        />
        <CountryCard
          num="6"
          image={country6}
          title="Switzerland"
          content="15 Chemin de Grange Canal, 1208, Geneva Switzerland"
        />
        <CountryCard
          num="1"
          image={country1}
          title="USA (Head Quarter)"
          content="405 State Hwy 121, Suite A250 Lewisville, Texas, 75067"
        />
        <CountryCard
          image={country2}
          num="2"
          title="Australia"
          content="Level 10,20 Martin Place Sydney, NSW, 2000"
        />
        <CountryCard
          num="3"
          image={country3}
          title="India"
          content="Unit # 504D, 5th floor, 126(P), PSR Prime Tower, Gachibowli, Hyderabad, India, 500032"
        />
        <CountryCard
          num="4"
          image={country4}
          title="Singapore"
          content="1 Raffles Place, #34-04, One Raffles Place, Singapore, 048616"
        />
        <CountryCard
          num="5"
          image={country5}
          title="United Kingdom"
          content="200 Brook Drive Green Park Reading RG2 6UB United Kingdom"
        />
        <CountryCard
          num="6"
          image={country6}
          title="Switzerland"
          content="15 Chemin de Grange Canal, 1208, Geneva Switzerland"
        />
      </div>
    </div>
  );
}
