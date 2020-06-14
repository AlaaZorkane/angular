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
    <div
      className="fixed select-none cursor-pointer"
      style={switchPosition}
      onClick={() => onSwitch()}
    >
      <FontAwesomeIcon
        icon={theme === "dark" ? faSun : faMoon}
        className="text-primary"
        size="lg"
      />
    </div>
  );
};

export default ThemeSwitch;
