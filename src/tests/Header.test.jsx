import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { MemoryRouter } from "react-router-dom";

describe("Header component", () => {
    it("renders correct heading", () => {
        render(
            <MemoryRouter>
                <Header cart={[]} />
            </MemoryRouter>);
        expect(screen.getByRole("heading").textContent).toMatch(/Ghost's Shop/i);
    });

    it("renders correct button texts", () => {
        render(
            <MemoryRouter>
                <Header cart={[]} />
            </MemoryRouter>
        );
        expect(screen.getByText("Home")).toBeInTheDocument();
        expect(screen.getByText("Shop")).toBeInTheDocument();
    });
});