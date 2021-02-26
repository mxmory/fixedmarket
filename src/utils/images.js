const importAll = (r) => {
    let images = {};
    r.keys().map((item) => {
        return (images[item.replace('./', '')] = r(item));
    });
    return images;
};

export const images = importAll(
    require.context('../assets/images', false, /\.(png|jpe?g|svg)$/)
);
