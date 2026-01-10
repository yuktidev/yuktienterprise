import { Toaster } from "react-hot-toast";

const AppToaster = () => {
  return (
    <Toaster
      position="bottom-right"
      containerStyle={{
        zIndex: 999999, 
      }}
      toastOptions={{
        duration: 6000,
        style: {
          borderRadius: "12px",
          background: "#111827",
          color: "#ffffff",
        },
      }}
    />
  );
};

export default AppToaster;
