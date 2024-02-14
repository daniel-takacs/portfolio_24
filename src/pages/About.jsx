import { skills, experiences } from "../constans/index";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Connect from "../components/Connect";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 font-semibold drop-shadow-lg">
          Daniel
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Innovative Software Developer with hands-on experience in modern web
          technologies, including Vue, React, and Express.js. Skilled in
          full-stack development, problem-solving, and customer engagement.
          Currently pursuing a Bachelor&rsquo;s degree in Information and
          Communication Technology. Adept at leveraging technical skills to
          deliver user-centric solutions in a dynamic team environment.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 leading-normal mt-8 mb-4 tracking-wide">
          Skills
        </h2>

        <div className="flex flex-wrap gap-14 mt-16">
          {skills.map((skill, index) => {
            return (
              <div key={`skill-${index}`} className="block-container w-20 h-20">
                <div className="btn-back rounded-xl" />
                <div className="btn-front shadow-md rounded-xl flex justify-center items-center transition duration-300 ease-in-out transform hover:scale-110">
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="w-16 h-16 object-contain"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="py-16">
        <h3 className="text-3xl lg:text-4xl font-semibold text-gray-900 leading-normal mt-8 mb-4 tracking-wide">
          Work Experience
        </h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500"></div>
        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium font-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experiences-point-${index}`}
                      className="text-black-500/50"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <Connect />
    </section>
  );
};

export default About;
