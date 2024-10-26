import { Fragment } from "react";
import { twMerge } from "tailwind-merge";
import TechIcon from "./TechIcon";
function ToolBoxItems({
  toolboxItems,
  className,
  itemsWrapper,
}: {
  toolboxItems: {
    title: string;
    iconType: React.ElementType;
  }[];
  className?: string;
  itemsWrapper?: string;
}) {
  return (
    <div
      className={twMerge(
        "flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div
        className={twMerge("flex flex-none py-0.5 gap-6 pr-6", itemsWrapper)}
      >
        {[
          ...new Array(2).fill(0).map((_, idx) => (
            <Fragment key={idx}>
              {toolboxItems.map((items) => (
                <div
                  key={items.title}
                  className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg"
                >
                  <TechIcon component={items.iconType} />
                  <span className="font-semibold">{items.title}</span>
                </div>
              ))}
            </Fragment>
          )),
        ]}
      </div>
    </div>
  );
}

export default ToolBoxItems;
