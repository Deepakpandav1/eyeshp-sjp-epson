import React, { useState } from "react";

const FooterSection = ({
  title,
  items = [],
}: {
  title: string;
  items: any[];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSub, setOpenSub] = useState<number | null>(null);
  const [openNestedSub, setOpenNestedSub] = useState<number | null>(null);

  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <div className="md:mb-0 w-full">
      {/* Title */}
      <div
        className="flex justify-between items-center cursor-pointer md:cursor-default"
        onClick={toggle}
      >
        <h3 className="font-semibold text-white mb-2 md:mb-4 text-[clamp(0.9rem,2vw,1.2rem)]">
          {title}
        </h3>
        <span className="text-teal-400 md:hidden text-xl font-bold">
          {isOpen ? "−" : "+"}
        </span>
      </div>

      {/* Items */}
      <div className={`${isOpen ? "block" : "hidden"} md:block w-full`}>
        {Array.isArray(items) &&
          items.map((item, idx) => {
            const isObject = typeof item === "object" && item !== null;
            const hasSubmenu =
              isObject && Array.isArray(item.submenu || item.items);

            return (
              <div key={idx} className="mb-2 w-full">
                <div
                  className="text-gray-300 hover:text-teal-400 cursor-pointer flex justify-between items-center text-[clamp(0.8rem,1.5vw,1rem)]"
                  onClick={() =>
                    hasSubmenu && setOpenSub(openSub === idx ? null : idx)
                  }
                >
                  <span>{isObject ? item.title || item.label : item}</span>
                  {hasSubmenu && (
                    <span className="text-xs text-teal-300 ml-2 md:hidden">
                      {openSub === idx ? "−" : "+"}
                    </span>
                  )}
                </div>

                {/* Submenu */}
                {hasSubmenu && openSub === idx && (
                  <div className="pl-4 mt-1 space-y-1">
                    {(item.submenu || item.items).map((subItem, subIdx) => {
                      const isSubObject =
                        typeof subItem === "object" && subItem !== null;
                      const hasNestedSubmenu =
                        isSubObject && Array.isArray(subItem.items);

                      return (
                        <div key={subIdx} className="mb-1 w-full">
                          <div
                            className="text-gray-400 hover:text-teal-400 text-[clamp(0.75rem,1.2vw,0.95rem)] cursor-pointer flex justify-between items-center"
                            onClick={() =>
                              hasNestedSubmenu &&
                              setOpenNestedSub(
                                openNestedSub === subIdx ? null : subIdx
                              )
                            }
                          >
                            <a
                              href={subItem.path || "#"}
                              className="hover:underline"
                            >
                              →{" "}
                              {isSubObject
                                ? subItem.title || subItem.label
                                : subItem}
                            </a>
                            {hasNestedSubmenu && (
                              <span className="text-xs text-teal-300 ml-2 md:hidden">
                                {openNestedSub === subIdx ? "−" : "+"}
                              </span>
                            )}
                          </div>

                          {/* Nested Submenu */}
                          {hasNestedSubmenu && openNestedSub === subIdx && (
                            <div className="pl-4 mt-1 space-y-1">
                              {subItem.items.map((nested, i) => (
                                <a
                                  key={i}
                                  href={nested.path || "#"}
                                  className="text-gray-500 hover:text-teal-400 text-[clamp(0.7rem,1vw,0.85rem)] block"
                                >
                                  ↳ {nested.title || nested.label}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default FooterSection;
