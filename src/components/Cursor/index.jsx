import React, {useEffect} from "react";
import mousecursor from "../../common/mouseEffect";

const Cursor = () => {
  useEffect(() => {
    const cleanup = mousecursor();
    return cleanup;
  }, []);
  return (
    <>
      <div className="mouse-cursor cursor-outer"></div>
      <div className="mouse-cursor cursor-inner"></div>
    </>
  );
};

export default Cursor;
