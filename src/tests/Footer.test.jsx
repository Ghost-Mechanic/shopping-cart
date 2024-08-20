import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";

describe("Footer component", () => {
    it("renders correct heading", () => {
        render(<Footer />);
        expect(screen.getByRole("heading", {level: 1}).textContent).toMatch("Questions? Comments?");
    });

    it("renders correct contact us title", () => {
        render(<Footer />);
        expect(screen.getByText("Contact Us")).toBeInTheDocument();
    });

    it("renders correct contact info", () => {
        render(<Footer />);
        expect(screen.getByText("123-456-7890")).toBeInTheDocument();
        expect(screen.getByText("ghostshop@gmail.com")).toBeInTheDocument();
    });
});