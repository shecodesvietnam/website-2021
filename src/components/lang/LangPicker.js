import { Fragment, useContext } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

import LanguageContext from "../../contexts/Language";
import { displayAbbr } from "./../../utils/language";

const langMapping = [
  {
    abbr: "VIE",
    name: "vn",
  },
  {
    abbr: "ENG",
    name: "en",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function LangPicker({ className = "" }) {
  const languageContext = useContext(LanguageContext);

  return (
    <div className={`flex ${className}`}>
      <Listbox value={languageContext.lang} onChange={languageContext.setLang}>
        {({ open }) => (
          <>
            <div className="relative">
              <Listbox.Button
                className="
                relative 
                w-full 
                text-gray-300 
                bg-transparent 
                border 
                border-gray-600 
                rounded-md 
                shadow-sm 
                pl-3 
                pr-10 
                py-2 
                text-left 
                cursor-default 
                focus:outline-none 
                focus:ring-1 
                focus:ring-lavender 
                focus:border-lavender 
                sm:text-sm"
              >
                <span className="flex items-center">
                  <span className="ml-3 block truncate">
                    {displayAbbr(languageContext.lang)}
                  </span>
                </span>
                <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <SelectorIcon
                    className="h-5 w-5 text-gray-600"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options
                  static
                  className="
                    absolute z-10 
                    mt-1 w-full 
                    bg-black 
                    bg-opacity-80 
                    shadow-lg 
                    max-h-56 
                    rounded-md 
                    py-1 
                    text-base 
                    ring-1 
                    ring-black 
                    ring-opacity-5 
                    overflow-auto 
                    focus:outline-none 
                    sm:text-sm"
                >
                  {langMapping.map((item, index) => (
                    <Listbox.Option
                      key={index}
                      className={({ active }) =>
                        classNames(
                          active
                            ? "text-gray-300 bg-gray-700"
                            : "text-gray-900",
                          "cursor-default select-none relative py-2 pl-3 pr-9"
                        )
                      }
                      value={item.name}
                    >
                      {({ selected, active }) => (
                        <>
                          <div className="flex items-center">
                            <span
                              className={classNames(
                                selected ? "font-semibold" : "font-normal",
                                "ml-3 block truncate text-gray-200"
                              )}
                            >
                              {item.abbr}
                            </span>
                          </div>

                          {selected ? (
                            <span
                              className={classNames(
                                active ? "text-white" : "text-gray-100",
                                "absolute inset-y-0 right-0 flex items-center pr-4"
                              )}
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
}

export default LangPicker;
