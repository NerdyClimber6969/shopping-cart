import { describe, it, expect, vi, beforeEach } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes, Link} from "react-router-dom";
import { act } from "react";

import Home from "../component/Home.jsx";
import Shop from "../component/Shop.jsx";
import App from "../App.jsx";

vi.mock("../component/Home.jsx", () => {
    return {
        default: vi.fn(() => (
            <>
                <p data-testid="home">You are in Home</p>
                <Link to='/shop'>Shop</Link>
            </>
        )),
    };
});

vi.mock("../component/Shop.jsx", () => {
    return {
        default: vi.fn(() => (
            <>
                <p data-testid="shop">You are in Shop</p>
            </>
        )),
    };
});

vi.mock("../App.jsx", () => {
    return {
        default: vi.fn(() => (
            <>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/shop"element={<Shop/>}/>
                </Routes>
            </>
        )),
    };
});

describe("HomePage component", () => {
    beforeEach(() => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <App />
            </MemoryRouter>
        )
    });

    describe("rendering of 'HomePage' component", () => {
        it('render home page text sucessfully', () => {
            expect(screen.getByTestId("home")).toBeInTheDocument();
        });

        it('render link to shop page sucessfully', () => {
            expect(screen.getByRole('link')).toBeInTheDocument();
        });
    });

    describe("when user interacts with the 'HomePage' component", () => {
        it("redirect user to shop page when clicks 'Shop'", async () => {
            await act(async () => {
                fireEvent.click(screen.getByRole("link", { name: "Shop" }));
            });

            expect(screen.getByTestId('shop')).toBeInTheDocument();
        });
    });
});