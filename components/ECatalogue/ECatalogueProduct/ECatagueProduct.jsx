"use client";
import React, { useState, useMemo, useCallback } from "react";
import {
  Search,
  ChevronDown,
  Star,
  X,
  ArrowRightIcon,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import Image from "next/image";
import SvgIcon from "@/components/Common/SvgIcon";
import { products } from "./data";
import Link from "next/link";

const FilterTag = ({ label, onRemove }) => (
  <div className="inline-flex items-center gap-3 px-3 py-2 font-archivo text-sm rounded-lg border border-solid border-theme-color/22 text-[#777777]">
    {label}
    <button onClick={onRemove} className="bg-[#F3F3F3] p-1.5 rounded-full">
      <X size={14} color="#29485F" />
    </button>
  </div>
);

const ProductCard = ({ product, isGridView }) => (
  <div
    className={`${
      isGridView ? "grid sm:gap-6 gap-4" : "sm:flex grid sm:gap-6 gap-4"
    } bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group sm:p-6 p-4 font-archivo`}
  >
    <div className="relative overflow-hidden rounded-xl ">
      <Image
        src={product.ImgSrc}
        width={362}
        height={266}
        alt={product.title}
        className={` ${
          isGridView ? "w-full h-full" : "w-[362px] h-[266px]"
        } object-cover rounded-xl group-hover:scale-105 transition-transform duration-300 `}
      />
      <div className="absolute top-3 left-3">
        <span className="px-3 py-1 bg-white text-theme-color text-sm rounded-full font-semibold">
          {product.category}
        </span>
      </div>
    </div>

    <div className="w-full grid gap-3">
      <div className="flex sm:gap-6 gap-4 justify-between items-baseline">
        <h5 className="text-theme-color font-medium">{product.material}</h5>
        <div className="px-3 py-1.5 bg-theme-color/8 rounded-2xl flex gap-1 items-center">
          <Star size={16} color="#F7C80D" fill="#F7C80D" />
          <p className="w-fit font-medium text-theme-color text-sm">
            {product.rating + " " + "(" + product.reviews + ")"}{" "}
          </p>
        </div>
      </div>

      <div className="grid gap-2">
        <h3 className="font-semibold text-theme-color lg:text-xl sm:text-lg text-base">
          {product.title}
        </h3>

        <p className="text-[#777777] sm:text-base text-sm">
          {product.description}
        </p>
      </div>

      <div className="grid gap-3">
        <div className="flex flex-wrap gap-2">
          {product.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-[#F3F4F6] text-[#777777] text-sm rounded-2xl"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <Link
        href="/contact-us"
        className="sm:px-7 px-4 py-3 rounded-xl bg-white flex gap-2.5 font-semibold text-theme-color items-center border border-solid justify-center border-theme-color/22"
      >
        View Details
        <div className="p-1 bg-[#F3F3F3] rounded-full">
          <ArrowRightIcon color="#29485F" size="20" />
        </div>
      </Link>
    </div>
  </div>
);

const SearchBar = ({ searchQuery, setSearchQuery, setCurrentPage }) => (
  <div className="flex-1 relative">
    <Search
      className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-theme-color"
      size={20}
    />
    <input
      type="text"
      placeholder="Search Products..."
      value={searchQuery}
      onChange={(e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1);
      }}
      className="w-full pl-12 lg:max-w-[453px] pr-4 py-3 border border-theme-color/22 rounded-xl text-lg font-archivo 
focus:outline-none focus:border-theme-color focus:ring-1 focus:ring-theme-color"
    />
  </div>
);

const FilterCheckbox = ({ label, checked, onChange }) => (
  <label className="flex items-center gap-3 cursor-pointer">
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="peer hidden"
    />
    <span
      className="sm:w-5 w-4 sm:h-5 h-4 flex items-center justify-center rounded border border-theme-color/22 
       peer-checked:bg-theme-color peer-checked:border-theme-color"
    >
      {checked && (
        <SvgIcon
          type="check"
          className="sm:w-[14px] w-3 sm:h-[14px] h-3"
          normalColor="white"
        />
      )}
    </span>
    <span className="lg:text-lg sm:text-base text-sm text-theme-color font-archivo font-medium">
      {label}
    </span>
  </label>
);

const FilterSection = ({ title, items, activeItems, onToggle }) => (
  <div className="grid gap-4 border border-solid border-theme-color/22 rounded-xl p-4">
    <h4 className="font-semibold text-theme-color sm:text-lg text-base pb-4 border-b border-solid border-[#16181D]/20">
      {title}
    </h4>
    <div className="grid gap-6">
      {items.map((item) => (
        <FilterCheckbox
          key={item}
          label={item}
          checked={activeItems.includes(item)}
          onChange={() => onToggle(item)}
        />
      ))}
    </div>
  </div>
);

const FilterDropdown = ({
  showFilters,
  setShowFilters,
  categories,
  materials,
  activeFilters,
  handleFilterToggle,
  handleClearAllFilters,
}) => (
  <div className="relative max-sm:w-full">
    <button
      onClick={() => setShowFilters(!showFilters)}
      className="flex items-center gap-6 px-4 py-3 bg-white border border-gray-300 rounded-lg transition-colors"
    >
      <div className="flex items-center gap-2">
        <SvgIcon type="filter" className="w-5 h-5" normalColor="#29485F" />
        <span className="font-medium text-theme-color font-archivo">
          Filters
        </span>
      </div>
      <ChevronDown
        className={`h-5 w-5 transition-transform ${
          showFilters ? "rotate-180" : ""
        }`}
        color="#29485F"
      />
    </button>
    {showFilters && (
      <div className="max-w-[472px] sm:min-w-[400px] min-w-[230px] max-sm:w-full bg-white border border-theme-color/22 rounded-2xl sm:p-6 p-4 grid sm:gap-6 gap-4 absolute top-16 lg:right-0 max-lg:left-0 z-50">
        <div className="flex gap-3 items-center">
          <SvgIcon
            type="filter"
            className="sm:w-6 w-5 sm:h-6 h-5"
            normalColor="#29485F"
          />
          <h3 className="font-semibold font-archivo text-2xl-responsive text-theme-color">
            Filter
          </h3>
        </div>
        <div className="grid gap-4">
          <FilterSection
            title="Categories"
            items={categories}
            activeItems={activeFilters.categories}
            onToggle={(category) => handleFilterToggle("categories", category)}
          />
          <FilterSection
            title="Materials"
            items={materials}
            activeItems={activeFilters.materials}
            onToggle={(material) => handleFilterToggle("materials", material)}
          />
        </div>
        <div className="sm:flex grid sm:gap-6 gap-3">
          <button
            onClick={handleClearAllFilters}
            className="sm:py-4 py-3 border border-solid border-theme-color/22 rounded-xl text-theme-color font-semibold w-full"
          >
            Clear All
          </button>
          <button
            onClick={() => setShowFilters(false)}
            className="sm:py-4 py-3 border border-solid border-theme-color/22 rounded-xl text-white bg-theme-color font-semibold w-full"
          >
            Apply Filter
          </button>
        </div>
      </div>
    )}
  </div>
);

const ViewToggle = ({ isGridView, setIsGridView }) => (
  <div className="hidden sm:flex border border-gray-300 rounded-lg overflow-hidden">
    <button
      onClick={() => setIsGridView(true)}
      className={`p-3 transition-colors ${
        isGridView ? "bg-theme-color" : "bg-white "
      }`}
    >
      <SvgIcon
        type="grid"
        className="h-6 w-6"
        normalColor={isGridView ? "white" : "#29485F"}
      />
    </button>
    <button
      onClick={() => setIsGridView(false)}
      className={`p-3 border-l border-gray-300 transition-colors ${
        isGridView ? "bg-white" : "bg-theme-color "
      }`}
    >
      <SvgIcon
        type="list"
        className="h-6 w-6"
        normalColor={isGridView ? "#29485F" : "white"}
      />
    </button>
  </div>
);

const ActiveFilters = ({
  activeFilterTags,
  handleRemoveFilter,
  handleClearAllFilters,
}) => {
  if (activeFilterTags.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-6 justify-between items-center mb-6">
      <div className="flex flex-wrap gap-3">
        {activeFilterTags.map((filter, index) => (
          <FilterTag
            key={index}
            label={filter.label}
            onRemove={() => handleRemoveFilter(filter.type, filter.value)}
          />
        ))}
      </div>
      <button
        onClick={handleClearAllFilters}
        className="px-5 py-2.5 font-semibold font-archivo text-base border-theme-color border border-solid rounded-lg text-theme-color hover:text-white hover:bg-theme-color"
      >
        Clear All
      </button>
    </div>
  );
};

const NoResults = ({ handleClearAllFilters }) => (
  <div className="text-center py-16">
    <div className="text-gray-400 mb-4">
      <Search className="h-16 w-16 mx-auto" />
    </div>
    <h3 className="text-xl font-medium text-gray-900 mb-2">
      No products found
    </h3>
    <p className="text-gray-600 mb-6">
      Try adjusting your search or filter criteria
    </p>
    <button
      onClick={handleClearAllFilters}
      className="px-6 py-3 bg-[--color-theme-color] text-white rounded-lg hover:opacity-90 transition-opacity"
    >
      Clear all filters
    </button>
  </div>
);

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const showPages = 5;

  const getRange = () => {
    let start = Math.max(1, currentPage - Math.floor(showPages / 2));
    let end = Math.min(totalPages, start + showPages - 1);

    if (end - start + 1 < showPages) {
      start = Math.max(1, end - showPages + 1);
    }

    const pages = [];
    for (let i = start; i <= end; i++) pages.push(i);
    return { pages, start, end };
  };

  const { pages, start, end } = getRange();

  const goTo = (page) => {
    const p = Math.min(totalPages, Math.max(1, page));
    if (p !== currentPage) onPageChange(p);
  };

  return (
    <div className="md:flex grid items-center md:justify-between gap-2 mt-12">
      <button
        onClick={() => goTo(currentPage - 1)}
        disabled={currentPage === 1}
        className="md:flex hidden items-center gap-2.5 px-6 py-3 text-theme-color disabled:text-gray-400 hover:shadow-sm border border-solid border-theme-color/22 transition-colors rounded-[10px] font-archivo font-semibold text-sm"
        aria-label="Previous page"
      >
        <div className="p-1 bg-[#F3F3F3] rounded-full">
          <ArrowLeft className="w-[18px] h-[18px]" />
        </div>
        Previous
      </button>

      <div className="sm:flex hidden items-center justify-center gap-2">
        {start > 1 && (
          <>
            <button
              onClick={() => goTo(1)}
              className="w-10 h-10 rounded-lg text-gray-700 hover:bg-gray-100 font-medium transition-colors"
            >
              1
            </button>
            {start > 2 && <span className="text-gray-400 px-2">...</span>}
          </>
        )}

        {pages.map((page) => (
          <button
            key={page}
            onClick={() => goTo(page)}
            aria-current={page === currentPage ? "page" : undefined}
            className={`w-10 h-10 rounded-lg font-medium transition-colors ${
              page === currentPage
                ? "bg-theme-color text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            {page}
          </button>
        ))}

        {end < totalPages && (
          <>
            {end < totalPages - 1 && (
              <span className="text-gray-400 px-2">...</span>
            )}
            <button
              onClick={() => goTo(totalPages)}
              className="w-10 h-10 rounded-lg text-gray-700 hover:bg-gray-100 font-medium transition-colors"
            >
              {totalPages}
            </button>
          </>
        )}
      </div>

      <div className="flex justify-between flex-wrap gap-4">
        <button
          onClick={() => goTo(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex md:hidden items-center gap-2.5 px-6 py-3 text-theme-color disabled:text-gray-400 hover:shadow-sm border border-solid border-theme-color/22 transition-colors rounded-[10px] font-archivo font-semibold text-sm max-sm:w-full max-sm:justify-center"
          aria-label="Previous page"
        >
          <div className="p-1 bg-[#F3F3F3] rounded-full">
            <ArrowLeft className="w-[18px] h-[18px]" />
          </div>
          Previous
        </button>

        <button
          onClick={() => goTo(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex items-center gap-2.5 px-6 py-3 text-theme-color disabled:text-gray-400 hover:shadow-sm border border-solid border-theme-color/22 transition-colors rounded-[10px] font-archivo font-semibold text-sm max-sm:w-full max-sm:justify-center"
          aria-label="Next page"
        >
          Next
          <div className="p-1 bg-[#F3F3F3] rounded-full">
            <ArrowRight className="w-[18px] h-[18px]" />
          </div>
        </button>
      </div>
    </div>
  );
};

const ProductGrid = ({ products, isGridView }) => (
  <div
    className={
      isGridView
        ? "grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        : "space-y-4"
    }
  >
    {products.map((product, index) => (
      <ProductCard key={index} product={product} isGridView={isGridView} />
    ))}
  </div>
);

const ECatalogueProduct = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isGridView, setIsGridView] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeFilters, setActiveFilters] = useState({
    categories: [],
    materials: [],
  });

  const itemsPerPage = 6;
  const categories = ["Windows", "Doors", "Folding Systems", "Glass Facades"];
  const materials = ["Aluminum", "Wood", "uPVC", "Composite"];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        !searchQuery ||
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.material.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        activeFilters.categories.length === 0 ||
        activeFilters.categories.includes(product.category);

      const matchesMaterial =
        activeFilters.materials.length === 0 ||
        activeFilters.materials.includes(product.material);

      return matchesSearch && matchesCategory && matchesMaterial;
    });
  }, [searchQuery, activeFilters]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleFilterToggle = useCallback((filterType, value) => {
    setActiveFilters((prev) => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter((item) => item !== value)
        : [...prev[filterType], value],
    }));
    setCurrentPage(1);
  }, []);

  const handleRemoveFilter = useCallback((filterType, value) => {
    setActiveFilters((prev) => ({
      ...prev,
      [filterType]: prev[filterType].filter((item) => item !== value),
    }));
  }, []);

  const handleClearAllFilters = useCallback(() => {
    setActiveFilters({ categories: [], materials: [] });
    setSearchQuery("");
    setCurrentPage(1);
  }, []);

  const activeFilterTags = [
    ...activeFilters.categories.map((cat) => ({
      type: "categories",
      label: cat,
      value: cat,
    })),
    ...activeFilters.materials.map((mat) => ({
      type: "materials",
      label: mat,
      value: mat,
    })),
  ];

  return (
    <section className="section-container">
      <div className="flex flex-col lg:flex-row gap-4 sm:mb-8 mb-6">
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setCurrentPage={setCurrentPage}
        />

        <div className="flex sm:justify-between items-center gap-3">
          <FilterDropdown
            showFilters={showFilters}
            setShowFilters={setShowFilters}
            categories={categories}
            materials={materials}
            activeFilters={activeFilters}
            handleFilterToggle={handleFilterToggle}
            handleClearAllFilters={handleClearAllFilters}
          />

          <ViewToggle isGridView={isGridView} setIsGridView={setIsGridView} />
        </div>
      </div>

      <ActiveFilters
        activeFilterTags={activeFilterTags}
        handleRemoveFilter={handleRemoveFilter}
        handleClearAllFilters={handleClearAllFilters}
      />

      <ProductGrid products={paginatedProducts} isGridView={isGridView} />

      {filteredProducts.length === 0 && (
        <NoResults handleClearAllFilters={handleClearAllFilters} />
      )}

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </section>
  );
};

export default ECatalogueProduct;
