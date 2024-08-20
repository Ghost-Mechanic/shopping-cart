import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

describe("Header component", () => {
    it("renders correct heading", () => {
        render(<Header />);
        expect(screen.getByRole("heading").textContent).toMatch(/Ghost's Shop/i);
    });

    it("renders correct button texts", () => {
        render(<Header />);
        expect(screen.getByText("Home")).toBeInTheDocument();
        expect(screen.getByText("Shop")).toBeInTheDocument();
    });
});