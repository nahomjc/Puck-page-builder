import type { Config } from "@measured/puck";
import { DropZone } from "@measured/puck";
type Props = {
  HeadingBlock: { title: string };
};

export const config: Config<Props> = {
  components: {
    Example: {
      render: () => {
        return (
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
          >
            <DropZone zone="left-column" />
            <DropZone zone="right-column" />
          </div>
        );
      },
    },
    HeadingBlock: {
      render: ({ text }) => <p>{text}</p>,
    },
  },
};

export default config;
