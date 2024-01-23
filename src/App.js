import { useState } from "react";
import "./index.css";
import PropTypes from "prop-types";

TextExpander.propTypes = {
  collapsedNumWords: PropTypes.number,
  expandButtonText: PropTypes.string,
  collapseButtonText: PropTypes.string,
  buttonColor: PropTypes.string,
  expanded: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.string
}

export default function App() {
  return (
    <div>
      <TextExpander>
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>

      <TextExpander
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        ButtonColor="#ff6622"
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      <TextExpander expanded={true} className="box">
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </div>
  );
}

function TextExpander({
  collapsedNumWords = 10,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  ButtonColor = "#1f09cd",
  expanded = false,
  className = "",
  children
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);
  const [collapseNum, setcollapseNum] = useState(collapsedNumWords);

  const style = {
    color: ButtonColor,
    background: "none",
    border: "none",
    font: "inherit",
    cursor: "pointer",
    marginLeft: "4px"
  }

  function handleShowMoreOrLessButton() {
    setIsExpanded(s => !s)
  }

  return (
    <div className={className}>
      {isExpanded ? children : `${children.split(" ").slice(0, collapseNum).join(" ") + "..."}`}
      <ShowMoreOrLess
        collapseButtonText={collapseButtonText}
        expandButtonText={expandButtonText}
        style={style}
        isExpanded={isExpanded}
        onExpansion={handleShowMoreOrLessButton}
      />
    </div>
  );
}

function ShowMoreOrLess({ expandButtonText, collapseButtonText, style, isExpanded, onExpansion }) {
  return (
    <button style={style} onClick={onExpansion}>
      {isExpanded
        ? collapseButtonText
        : expandButtonText
      }
    </button>
  )
}
