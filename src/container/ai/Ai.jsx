import React from 'react';
import './ai.css';
import main from '../../assets/images/main.png';

function Ai() {
  return (
    <div className="section-ai" id="ai">
      <div className="header-text">
        <h1 className="main-text">
          AI
          <br /> WHAT IS ALL ABOUT?
        </h1>
        <p>
          Artificial intelligence is often presented as the driving force behind
          today's technology. So it naturally inspires excitement and high
          expectations. Computers that use neural network models inspired by the
          human brain excel in many areas that could not be imagined in the
          past. It even made us think that artificial intelligence would become
          as smart as us and solve all our problems.
        </p>
        <div className="mini-text-ai">
          To help you get started, I put together a list of must-read data
          analytics books covering machine learning, data science, business
          intelligence, deep learning, and more.
        </div>
      </div>

      <div className="ai-image">
        <img src={main} alt="ai-img" />
      </div>
    </div>
  );
}
export default Ai;
