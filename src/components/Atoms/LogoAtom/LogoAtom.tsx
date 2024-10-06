import React from "react";
import SVGAtom from "../SVGAtom/SVGAtom";

type Props = {
  size?: number;
};

const LogoAtom = (props: Props) => {
  return (
    <div className={`w-${props.size} h-${props.size}  overflow-hidden`}>
      <SVGAtom
        iconName='logo'
        width={props.size}
        height={props.size}
        className=''
      />
      <p className='mt-2 pb-3 pl-[2%] text-lg text-white'>Proxima</p>
    </div>
  );
};

export default LogoAtom;