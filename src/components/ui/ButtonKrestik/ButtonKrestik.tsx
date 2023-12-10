import { ButtonHTMLAttributes, FC } from "react";
import KrestikIcon from "@/assets/icons/krestik.svg?react";
import cls from "./ButtonKrestik.module.css";

interface IButtonKrestik extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const ButtonKrestik: FC<IButtonKrestik> = ({ className, ...otherProps }) => {
  return (
    <button className={`${cls.button} ${className}`} {...otherProps}>
      <KrestikIcon />
    </button>
  );
};

export default ButtonKrestik;
