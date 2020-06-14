import React, { FC, CSSProperties } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { AvailableTheme } from "@/types";

const switchPosition: CSSProperties = {
  top: "1rem",
  right: "1rem",
};

type Props = {
  theme: AvailableTheme;
  onSwitch: () => void;
};

const ThemeSwitch: FC<Props> = ({ theme, onSwitch }) => {
  return (
    <button
      className="fixed select-none focus:outline-none"
      style={switchPosition}
      onClick={() => onSwitch()}
      aria-label="switch theme"
    >
      <FontAwesomeIcon
        icon={theme === "dark" ? faSun : faMoon}
        className="text-primary"
        size="lg"
      />
    </button>
  );
};

export default ThemeSwitch;
