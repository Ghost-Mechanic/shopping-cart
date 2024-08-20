import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import HomeMain from "../components/HomeMain";

describe("Home's main component", () => {
    it("renders correct tagline", () => {
        render(<HomeMain />);
        const taglines = screen.getAllByText("Make Shopping Simpler.");
        expect(taglines[0]).toBeInTheDocument();
    });

    it("renders about section", () => {
        render(<HomeMain />);
        const abouts = screen.getAllByText("About");
        expect(abouts[0]).toBeInTheDocument();
    });

    it("renders satisfaction section",() => {
        render(<HomeMain />);
        expect(screen.getByText("Customer Satisfaction Guaranteed")).toBeInTheDocument();
    })
});