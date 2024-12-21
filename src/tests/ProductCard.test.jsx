import { fn, describe, it, expect, vi } from "vitest";
import { fireEvent, render, screen, act } from "@testing-library/react";
import ProductCard from "../component/ProductCard.jsx";

const product = {
    name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    price: 109.95
}

describe("ProductCard component ", () => {
    it("render ProductCard correctly", () => {
        render(<ProductCard product={product}/>);
        expect(screen.getByTestId("product-card")).toBeInTheDocument();
    });

    it("renders product image correctly", () => {
        render(<ProductCard product={product}/>);
        expect(screen.getByTestId("product-image")).toBeInTheDocument();
    });

    it("renders product name correctly", () => {
        render(<ProductCard product={product}/>);
        expect(screen.getByTestId("product-name")).toBeInTheDocument();
    });

    it("renders product price correctly", () => {
        render(<ProductCard product={product}/>);
        expect(screen.getByTestId("product-price")).toBeInTheDocument();
    });
    

    it("renders product quantity correctly", () => {
        render(<ProductCard product={product}/>);
        expect(screen.getByTestId("product-quantity")).toBeInTheDocument();
    });

    it("renders 'Add to cart' button correctly", () => {
        render(<ProductCard product={product}/>);
        expect(screen.getByRole("button", {name: "Add to cart"})).toBeInTheDocument();
    });
});

describe("When user interacts with the product card", () => {
    it("increments product quantity correctly", async () => {
        render(<ProductCard product={product}/>);
        
        await act(async () => {
            fireEvent.click(screen.getByTestId("increment-button"));
        });

        expect(screen.getByTestId("product-quantity").value).toMatch("1");
    });

    it("decrements product quantity correctly", async () => {
        render(<ProductCard product={product}/>);

        await act(async () => {
            fireEvent.click(screen.getByRole("button", {name: "+"}));
        });

        await act(async () => {
            fireEvent.click(screen.getByRole("button", {name: "+"}));
        });

        expect(screen.getByTestId("product-quantity").value).toMatch("2");
    });

    it("does not decrement product quantity below 0", async () => {
        render(<ProductCard product={product}/>);

        await act(async () => {
            fireEvent.click(screen.getByRole("button", {name: "-"}));
        });

        await act(async () => {
            fireEvent.click(screen.getByRole("button", {name: "-"}));
        });

        expect(screen.getByTestId("product-quantity").value).toMatch("0");
    });

    it("calls addToCart function when 'Add to cart' button is clicked", async () => {
        const addToCart = vi.fn()
        render(<ProductCard product={product} addToCart={addToCart}/>);

        await act(async () => {
            fireEvent.click(screen.getByRole("button", {name: "Add to cart"}));
        });

        expect(addToCart).toHaveBeenCalled();
    });
});