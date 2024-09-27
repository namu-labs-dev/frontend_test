import { useRouter } from "next/navigation";
import { useState } from "react";
import { PageWithModalTemplate } from "~/components/Templates/PageWithModal/PageWithModalTemplate";
import ModalStore from "~/store/ModalStore";

export const DashboardContainer = () => {
  const router = useRouter();

  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);

  const pagewithmodalTemplateProps: React.ComponentProps<
    typeof PageWithModalTemplate
  > = {
    pageWithModalHeaderModuleProps: {
      title: "Proxima OS",
      onClickLeftIcon: () => router.back(),
      onClickRightIcon: () => setIsCustomModalOpen(true),
    },
    pageWithModalContentModuleProps: {
      modalProps: {
        modalProps: {
          isModalOpen: isCustomModalOpen,
          setModalOpen: setIsCustomModalOpen,
        },
      },
    },
    emptyFooterModuleProps: {
      footerProps: {},
    },
  };

  return <PageWithModalTemplate {...pagewithmodalTemplateProps} />;
};
