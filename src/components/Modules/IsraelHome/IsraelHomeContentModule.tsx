import SVGAtom from "../../Atoms/SVGAtom/SVGAtom";
import { MessageList } from "~/components/Components/MessageList/MessageList";
import * as svgs from "public/svgs";
import eth from "./../../../../public/pngs/eth.png";
import nvir from "./../../../../public/pngs/nvir.png";
import { Messages } from "~/components/Tabs/Messages";
import { Tab } from "~/components/Atoms/IsraelFooterAtom/IsraelFooterAtom";

// type Message = {
//   id: string;
//   image?: keyof typeof svgs;
//   title: string;
//   content: string;
//   timestamp: string;
// };

// type Props = {
//   messages: Message[];
// };

type Props = {
  onClick: (isTrue: boolean) => void;
  tabs: Tab[];
  activeTabId: string;
  setActiveTabId: React.Dispatch<React.SetStateAction<string>>;
};

export const IsraelHomeContentModule = (props: Props) => {
  const { tabs, activeTabId } = props;

  const activeTabContent = tabs.find((tab) => tab.id === activeTabId)?.content;

  return <>{activeTabContent}</>;
};
