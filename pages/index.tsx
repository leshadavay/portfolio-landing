import Service from "../components/Service";
import { GetServerSidePropsContext } from "next";
import { ServiceType } from "../constants/types";
import Link from "next/link";

function App({ services }) {
  return (
    <>
      <div className="flex flex-col px-5 py-1 pb-5">
        <h5>
          I'm an adventurous bilingual web developer adept at building web based
          projects, finding solutions, determining customer satisfaction. <br />
          Passionate about solving real-world problems, creating solutions,
          design scalable back-ends, APIs, also collaborating with other
          developers.
          <br /> Always try learn new things by sharing different ideas and
          knowledge with each other.
        </h5>
      </div>

      <div className="flex flex-col px-5 py-5 dark:bg-gray-900">
        <div className="my-3 ">
          <h3>What I do</h3>
          <p>
            2+ years of experience in creating elegant web solutions, building,
            testing and maintenance of webservers for clients basically in South
            Korea. Want to find out more about my experience? Check out my
            <Link href={"/portfolio"}>project portfolio.</Link>
          </p>
        </div>
        <div className="my-3 ">
          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((service: ServiceType, key: number) => (
              <div
                key={key}
                className="grid grid-cols-2 rounded-lg dark:bg-gray-800 lg:col-span-1"
              >
                <Service service={service} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
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
