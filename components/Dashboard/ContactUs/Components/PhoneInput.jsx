"use client";
import { Field } from "formik";
import React, { useEffect, useState, useRef } from "react";
import countries from "i18n-iso-countries";
import telephoneData from "country-telephone-data";
import { ChevronDown } from "lucide-react";

countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

const PhoneInput = ({
  name,
  selectedCountry,
  setSelectedCountry,
  touched,
  errors,
}) => {
  const [countryList, setCountryList] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);

  useEffect(() => {
    const allCountries = telephoneData.allCountries.map((c) => ({
      code: c.iso2.toUpperCase(),
      name: countries.getName(c.iso2.toUpperCase(), "en") || c.name,
      dialCode: `+${c.dialCode}`,
    }));

    const sorted = allCountries.sort((a, b) => a.name.localeCompare(b.name));
    setCountryList(sorted);
    setFilteredCountries(sorted);

    // Set default country if not already set
    if (!selectedCountry) {
      setSelectedCountry("US");
    }
  }, [selectedCountry]);

  const handleToggleDropdown = () => setIsOpen(!isOpen);

  const handleSelectCountry = (code) => {
    setSelectedCountry(code);
    setIsOpen(false);
    setSearchTerm("");
    setFilteredCountries(countryList);
  };

  const selected = countryList.find((c) => c.code === selectedCountry);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = countryList.filter((c) => {
      const combined = `${c.name} ${c.dialCode}`.toLowerCase();
      return combined.includes(value);
    });

    setFilteredCountries(filtered);
  };

  return (
    <div>
      <label
        htmlFor={name}
        className="block xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs font-semibold text-gray-700 xl:mb-4 lg:mb-4 md:mb-3 sm:mb-2 mb-1.5"
      >
        Telephone
      </label>
      <div
        className={`flex rounded-xl xl:text-lg lg:text-base md:text-sm sm:text-sm text-xs focus:ring-2 focus:ring-slate-500 transition-colors ${
          touched[name] && errors[name]
            ? "border-red-500 bg-red-50"
            : "bg-[#F7F7F7]"
        }`}
      >
        {/* Country Code Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <div
            className="flex items-center bg-transparent xl:py-3 lg:py-3 md:py-2.5 sm:py-2.5 py-2 xl:px-4 lg:px-4 md:px-3 sm:px-3 px-2.5 text-gray-600 cursor-pointer border-r border-gray-300"
            onClick={handleToggleDropdown}
          >
            <span className="xl:text-sm lg:text-sm md:text-xs sm:text-xs text-xs font-medium">
              {selected ? selected.dialCode : "+1"}
            </span>
            <ChevronDown className="xl:ml-2 lg:ml-2 md:ml-1.5 sm:ml-1.5 ml-1 xl:w-4 xl:h-4 lg:w-4 lg:h-4 md:w-3.5 md:h-3.5 sm:w-3.5 sm:h-3.5 w-3.5 h-3.5 text-gray-500" />
          </div>

          {isOpen && (
            <div className="absolute z-50 bg-white border border-gray-200 mt-1 max-h-60 w-64 rounded-xl shadow-lg overflow-hidden">
              {/* Search Input */}
              <div className="p-3 border-b border-gray-200 bg-gray-50">
                <input
                  type="text"
                  placeholder="Search countries..."
                  value={searchTerm}
                  onChange={handleSearch}
                  className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Country Options */}
              <div className="max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                {filteredCountries.map((country) => (
                  <div
                    key={country.code}
                    onClick={() => handleSelectCountry(country.code)}
                    className="px-4 py-3 hover:bg-gray-100 text-gray-700 cursor-pointer text-sm border-b border-gray-100 last:border-b-0"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{country.name}</span>
                      <span className="text-gray-500">{country.dialCode}</span>
                    </div>
                  </div>
                ))}
                {filteredCountries.length === 0 && (
                  <div className="px-4 py-3 text-sm text-gray-500 text-center">
                    No countries found
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Phone Number Input */}
        <Field
          type="tel"
          name={name}
          placeholder={`${selected ? selected.dialCode : "+1"} (000) 000-0000`}
          className="flex-1 xl:py-3 lg:py-3 md:py-2.5 sm:py-2.5 py-2 xl:px-4 lg:px-4 md:px-3 sm:px-3 px-2.5 focus:outline-none bg-transparent text-gray-700 placeholder-gray-400 xl:text-base lg:text-base md:text-sm sm:text-xs text-xs"
        />
      </div>

      {/* Error Message */}
      {touched[name] && errors[name] && (
        <div className="text-red-500 text-sm mt-1">{errors[name]}</div>
      )}
    </div>
  );
};

export default PhoneInput;
