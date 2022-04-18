import { HiOutlineDownload } from "react-icons/hi";
import Skill from "../components/Skill";
import { framewords, languages } from "../constants/data";
import { SkillType } from "../constants/types";

export default function resume() {
  return (
    <div className="p-4">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Computer Science</h5>
            <p className="font-semibold">2015-2020</p>
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Backend developer</h5>
            <p className="font-semibold">2020-2021</p>
          </div>
          <div>
            <h5 className="my-2 text-xl font-bold">Frontend developer</h5>
            <p className="font-semibold">2021</p>
          </div>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages</h5>
          <div className="my-2">
            {languages.map((language: SkillType, key: number) => {
              return <Skill key={key} skill={language} />;
            })}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Frameworks</h5>
          <div className="my-2">
            {framewords.map((framework: SkillType, key: number) => {
              return <Skill key={key} skill={framework} />;
            })}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center ">
        <a
          className="flex items-center justify-center p-2 pr-3 bg-gray-800 rounded-full"
          href="#"
        >
          <HiOutlineDownload className="w-6" />
          My Resume
        </a>
      </div>
    </div>
  );
}
