import { describe, it, expect, vi, beforeEach } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes} from "react-router-dom";
import { act } from "react";

import App from "../App.jsx";
import Checkout from "../component/Checkout.jsx";
import Shop from "../component/Shop.jsx";
import ProcessPaymentPage from "../component/ProcessPaymentPage.jsx";

const products = [
    {price: 20, quantity: 2},
    {price: 10, quantity: 5},
];

vi.mock("../component/ProcessPaymentPage.jsx", () => {
    return {
        default: vi.fn(() => (
            <p data-testid="process-payment">processing your payment</p>
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

vi.mock("../App.jsx", () => {
    return {
        default: vi.fn(() => (
            <div>
                <Routes>
                    <Route path="/checkout" element={<Checkout products={products}/>}/>
                    <Route path="/shop" element={<Shop/>}/>
                    <Route path="/processpayment" element={<ProcessPaymentPage/>}/>
                </Routes>
            </div>
        )),
    };
});

describe("Checkout component", () => {
    beforeEach(() => {
        render(
            <MemoryRouter initialEntries={['/checkout']}>
                <App />
            </MemoryRouter>
        );
    });

    describe("redering of Checkout component", () => {
        it('render checkout component sucessfully', () => {
            expect(screen.getByTestId("checkout-component")).toBeInTheDocument();
        });
    
        it('render sub total correctly', () => {
            expect(screen.getByTestId("sub-total").textContent).toMatch("$90");
        });
    
        it('render tax correctly', () => {
            expect(screen.getByTestId("tax").textContent).toMatch("$18");
        });
    
        it('render total correctly', () => {
            expect(screen.getByTestId("total").textContent).toMatch("$108");
        });
    });
    
    describe('when user interacts with the checkout component', () => {
        it("redirect user to shop page when user clicks 'Continue Shopping' button", async () => {
            await act (async () => {
                fireEvent.click(screen.getByRole("link", {name: "Continue Shopping"}));
            });
    
            expect(screen.getByTestId("shop")).toBeInTheDocument();
        });
    
        it("redirect user to 'process payment' page when user clicks the 'Process Payment' button", async () => {
            await act(async () => {
                fireEvent.click(screen.getByRole("link", {name: "Process Payment"}));
            });
    
            expect(screen.getByTestId("process-payment")).toBeInTheDocument();
        });
    });
});