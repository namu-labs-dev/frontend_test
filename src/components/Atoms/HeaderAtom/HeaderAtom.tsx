import { SettingOutlined } from "@ant-design/icons";
import SVGAtom from "../SVGAtom/SVGAtom";

type Props = {
  title: string;
  onClickLeftIcon?: () => void;
  onClickRightIcon?: () => void;
  bgColor?: string;
  titleColor?: string;
};

export const HeaderAtom = (props: Props) => {
  return (
    <div
    className={`relative flex h-full w-full items-center justify-center`}
    style={{ backgroundColor: props.bgColor || "#262626" }} 
  >
      {/* Sample using custom svg */}
      {props.onClickLeftIcon && (
        <div
          className="absolute left-0 z-[1] flex w-[50px] cursor-pointer items-center justify-center"
          onClick={props.onClickLeftIcon}
        >
          <SVGAtom iconName="arrowLeft" width={20} height={20} color="#CACACA" />
        </div>
      )}

<div
        className="text-[16px] font-medium"
        style={{ color: props.titleColor || "#FFFFFF" }} // Use titleColor or default to white
      >
        {props.title}
      </div>
      {/* Sample using Antd icon */}
      {props.onClickRightIcon && (
        <div
          className="absolute right-0 z-[1] flex w-[50px] cursor-pointer items-center justify-center text-[#CACACA]"
          onClick={props.onClickRightIcon}
        >
          <SettingOutlined className="!text-gray-header cursor-pointer text-[20px]" />
        </div>
      )}
    </div>
  );
};
