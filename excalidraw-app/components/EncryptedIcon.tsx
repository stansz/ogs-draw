import { Tooltip } from "@excalidraw/excalidraw/components/Tooltip";
import { shield } from "@excalidraw/excalidraw/components/icons";

export const EncryptedIcon = () => {
  return (
    <span
      className="encrypted-icon tooltip"
      style={{ cursor: "pointer" }}
    >
      <Tooltip
        long={true}
        label={
          "🔒 Your data is stored locally in your browser. " +
          "OGS Draw is based on Excalidraw — an open-source virtual whiteboard. " +
          "No tracking, no ads, no data collection."
        }
      >
        {shield}
      </Tooltip>
    </span>
  );
};
