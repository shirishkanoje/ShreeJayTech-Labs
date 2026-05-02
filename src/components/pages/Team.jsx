import React from "react";
import styles from "../../style";
import { teamMembers } from "../../constants";

const Team = () => {
  return (
    <div className={`bg-primary ${styles.paddingX} py-10 min-h-screen`}>
      <h1 className="text-white text-3xl font-bold mb-10">Our Team</h1>

      <div className="flex flex-wrap gap-8 justify-center">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="bg-black-gradient p-6 rounded-xl w-[250px] text-center"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-[100px] h-[100px] rounded-full mx-auto mb-4"
            />
            <h3 className="text-white text-lg font-semibold">{member.name}</h3>
            <p className="text-gray-400">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;