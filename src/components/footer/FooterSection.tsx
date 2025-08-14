import React, { useState } from "react";

const FooterSection = ({
  title,
  items = [],
}: {
  title: string;
  items: any[];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSub, setOpenSub] = useState<any>(null);
  const [openNestedSub, setOpenNestedSub] = useState(null);

  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <div className="md:mb-0">
      <div
        className="flex justify-between items-center cursor-pointer md:cursor-default"
        onClick={toggle}
      >
        <h3 className="font-semibold text-white mb-2 md:mb-4">{title}</h3>
        <span className="text-teal-400 md:hidden text-xl font-bold">
          {isOpen ? "-" : "+"}
        </span>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} md:block`}>
        {Array.isArray(items) &&
          items.map((item, idx) => {
            const isObject = typeof item === "object" && item !== null;
            const hasSubmenu =
              isObject && Array.isArray(item.submenu || item.items);

            return (
              <div key={idx} className="mb-2">
                <div
                  className="text-gray-300 hover:text-teal-400 cursor-pointer flex justify-between items-center"
                  onClick={() =>
                    hasSubmenu && setOpenSub(openSub === idx ? null : idx)
                  }
                >
                  <span>{isObject ? item.title || item.label : item}</span>
                  {hasSubmenu && (
                    <span className="text-xs text-teal-300 ml-2">
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
                        <div key={subIdx} className="mb-1">
                          <div
                            className="text-gray-400 hover:text-teal-400 text-sm cursor-pointer flex justify-between items-center"
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
                              <span className="text-xs text-teal-300 ml-2">
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
                                  className="text-gray-500 hover:text-teal-400 text-xs block"
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
