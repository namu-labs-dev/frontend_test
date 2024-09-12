import { message } from "antd";
import { HomeTemplate } from "~/components/Templates/Home/HomeTemplate";

export const HomeContainer = () => {
  const headerLeftIconClicked = () => {
    void message.info("can't go back");
  };

  const headerRightIconClicked = () => {
    void message.info("can't go Settings");
  };

  const homeTemplateProps: React.ComponentProps<typeof HomeTemplate> = {
    homeHeaderModuleProps: {
      headerProps: {
        title: "Proxima OS",
        onClickLeftIcon: headerLeftIconClicked,
        onClickRightIcon: headerRightIconClicked,
      },
    },
    homeContentModuleProps: {
      sampleLinks: [

      ],
    },
    homeFooterModuleProps: { title: "HomeFooterModule" },
  };

  return <HomeTemplate {...homeTemplateProps} />;
};
