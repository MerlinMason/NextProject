import { render } from "../../testUtils";
import Home from "../index.page";

describe("Home page", () => {
    it("Should show title", () => {
        const { getByText } = render(<Home />);
        expect(getByText("Welcome to NextProject")).toBeInTheDocument();
    });
});
