import { fireEvent, screen } from "@testing-library/react";
import { Sidebar } from "widgets/Sidebar";
import { renderWithTranslation } from "shared/lib/tests/renderWithTraslation/renderWithTranslation";

describe("Sidebar", function () {
    test("Should be able to create a button", function () {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    });
    test("test toggle",  function () {
        renderWithTranslation(<Sidebar />);
        const toggleBtn = screen.getByTestId("sidebar-toggle");
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
    });
});