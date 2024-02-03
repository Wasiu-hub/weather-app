/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { render } from "@testing-library/react";
import SearchForm from "../../components/SearchForm";

describe("SearchForm", () => {
  const validProps = {
    setSearchText: () => {},
    handleCitySearch: () => {},
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <SearchForm
        searchText="Manchester"
        setSearchText={validProps.setSearchText}
        onSubmit={validProps.handleCitySearch}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
