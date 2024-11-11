import { Button, ThemeButton } from "shared/ui/Button/Button";
import { render, screen } from "@testing-library/react";

describe("Button", function() {
    test("with only first param", async function() {
        render(<Button>Test</Button>);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });
    test("test clear theme", async function() {
        render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
        expect(screen.getByText("Test")).toHaveClass("clear");
    });
});