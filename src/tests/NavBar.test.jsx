import { describe, it, expect, vi } from "vitest";
import { fireEvent, render, screen, act } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import NavBar from "../component/NavBar.jsx";

import Home from "../component/Home.jsx";
import Shop from "../component/Shop.jsx";
import Cart from "../component/Cart.jsx";
import App from "../App.jsx";

vi.mock("../component/Home.jsx", () => {
    return {
        default: vi.fn(() => (
            <>
                <p data-testid="home">You are in Home Page</p>
            </>
        )),
    };
});

vi.mock("../component/Shop.jsx", () => {
    return {
        default: vi.fn(() => (
            <p data-testid="shop">You are in Shop</p>
        )),
    };
});

vi.mock("../component/Cart.jsx", () => {
    return {
        default: vi.fn(() => (
            <p data-testid="cart">You are in Cart</p>
        )),
    };
});

vi.mock("../App.jsx", () => {
    return {
        default: vi.fn(() => (
            <>
                <NavBar numberOfProducts={3}/>
                <Routes>
                    <Route path="/"element={<Home/>}/>
                    <Route path="/shop"element={<Shop/>}/>
                    <Route path="/cart"element={<Cart/>}/>
                </Routes>
            </>
        )),
    };
});

describe("Navigation bar component", () => {
    beforeEach(() => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <App />
            </MemoryRouter>
        )
    });

    describe("redering of navigation bar", ()=> {
        it("render navigation bar sucessfully", () => {
            expect(screen.getByTestId("nav-bar")).toBeInTheDocument();
        });
    
        it("render heading sucessfully", () => {
            expect(screen.getByRole("heading", {name: "Online Shop"})).toBeInTheDocument();
        });
    
        it("render 'Home' sucessfully", () => {
            expect(screen.getByRole("link", {name: "Home"})).toBeInTheDocument();
        });
    
        it("render 'Shop' sucessfully", () => {
            expect(screen.getByRole("link", {name: "Shop"})).toBeInTheDocument();
        });
    
        it("render 'Cart' sucessfully", () => {
            expect(screen.getByRole("link", {name: "Cart"})).toBeInTheDocument();
        });

        it("render number of product in cart correctly when there are products added", () => {
            expect(screen.getByTestId("num-of-item-in-cart").textContent).toMatch("3");
        });
    })

    describe('when user interacts with the nav bar component', () => {
        it("redirect user to home", async () => {
            await act(async () => {
                fireEvent.click(screen.getByRole("link", {name: "Home"}))
            });

            expect(screen.getByTestId("home")).toBeInTheDocument();
        });

        it("redirect user to shop", async () => {
            await act(async () => {
                fireEvent.click(screen.getByRole("link", {name: "Shop"}))
            });

            expect(screen.getByTestId("shop")).toBeInTheDocument();
        });

        it("redirect user to cart", async () => {
            await act(async () => {
                fireEvent.click(screen.getByRole("link", {name: "Cart"}))
            });

            expect(screen.getByTestId("cart")).toBeInTheDocument();
        });
    })
});