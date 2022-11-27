import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import Button from "../Button";

import "./styles.css";

const TaskDetails = () => {
  const params = useParams();
  const history = useNavigate();

  const handleBackButtonClick = () => {
    history("/");
  };

  return (
    <>
      <div className='back-button-container'>
        <Button onClick={handleBackButtonClick}>Voltar</Button>
      </div>
      <div className='task-details-container'>
        <h2>{params.taskTitle}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, aperiam
          quae, numquam porro magnam velit id provident sapiente eos
          consequuntur eaque, animi culpa. Aliquid similique non error amet sit
          nostrum?
        </p>
      </div>
    </>
  );
};

export default TaskDetails;
