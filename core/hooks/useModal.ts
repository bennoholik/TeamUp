import { RefObject, useEffect } from "react";

export const useModal = ({
  node,
  tg,
  setTg,
}: {
  node: RefObject<HTMLElement>;
  tg: boolean;
  setTg: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  useEffect(() => {
    const clickOutside = (e: MouseEvent): void => {
      if (
        e.target instanceof HTMLElement &&
        !node.current?.contains(e.target as Node)
      ) {
        setTg(false);
      }
    };
    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, [tg]);
};
