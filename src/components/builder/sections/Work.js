import React from "react";
import Heading from "../../shared/Heading";
import List from "../lists/List";

const Work = ({ id, name, event, state }) => {
  const path = `${id}.items`;

  return (
    <section>
      <Heading>{name}</Heading>

      <List path={path} event={event} titlePath="company" textPath="summary" />
    </section>
  );
};

export default Work;
