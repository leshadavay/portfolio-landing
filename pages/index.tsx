import Service from "../components/Service";
import { GetServerSidePropsContext } from "next";
import { ServiceType } from "../constants/types";

function App({ services }) {
  return (
    <div>
      <h5>
        Adventurous bilingual web developer adept at building web based
        projects, finding solutions, determining customer satisfaction. <br />
        2+ years of experience in creating elegant web solutions, building,
        testing and maintenance of webservers. Passionate about solving
        real-world problems, creating solutions, design scalable back-ends,
        APIs, also collaborating with other developers.
        <br /> Always try learn new things by sharing different ideas and
        knowledge with each other.
      </h5>
      <div>
        {services.map((service: ServiceType, key: number) => (
          <Service key={key} service={service} />
        ))}
      </div>
    </div>
  );
}

export default App;

//runs every time when user refresh page
/* export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const response = await fetch("http://localhost:3000/api/services");
  const { services } = await response.json();
  console.log("getServerSideProps: ");

  return {
    props: {
      services,
    },
  };
}; */

//runs only one time (during build time)
export const getStaticProps = async (context: GetServerSidePropsContext) => {
  const response = await fetch("http://localhost:3000/api/services");
  const { services } = await response.json();
  console.log("getServerSideProps: ");

  return {
    props: {
      services,
    },
  };
};
