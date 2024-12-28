export function round(value, place) {
    if (place === 0) {
        return Math.round(value);
    };

    return Math.round(value * (10 ** place)) / 10 ** place;
};