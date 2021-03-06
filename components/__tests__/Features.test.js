import { render } from "../../testUtils";
import Features from "../Features";

describe("<Features />", () => {
    it("Should list Jest as a feature", () => {
        const { getByText } = render(<Features />);
        expect(getByText("Jest (with Testing Library)")).toBeInTheDocument();
    });
});
