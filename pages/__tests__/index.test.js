import pa11y from "pa11y";

import { render } from "../../testUtils.jsx";
import Home from "../index.page";

describe("Home page", () => {
    it("should have no PA11Y issues", async () => {
        const results = await pa11y("http://localhost:3000", {
            runners: ["axe", "htmlcs"],
        });
        expect(results.issues).toHaveLength(0);
    }, 10000);

    it("Should show title", () => {
        const { getByText } = render(<Home />);
        expect(getByText("Welcome to NextProject")).toBeInTheDocument();
    });
});
