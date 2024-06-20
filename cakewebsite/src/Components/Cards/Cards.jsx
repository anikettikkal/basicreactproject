import React from 'react';
import './Cards.css';

const CakeCard = ({ image, name, description, price }) => (
    <div className="cake-card">
        <img src={image} alt={name} className="cake-image" />
        <div className="cake-info">
            <h3 className="cake-name">{name}</h3>
            <p className="cake-description">{description}</p>
            <p className="cake-price"> ₹{price}</p>
            <button className="order-button">Order Now</button>
        </div>
    </div>
);

const CakeCards = () => {
    const cakes = [
        {
            image: "https://www.fnp.com/assets/images/custom/cakes_23/flavour/Chocolate-Cakes-web_2.jpg",
            name: "Chocolate Delight",
            description: "Rich, moist chocolate cake with creamy frosting",
            price: 400
        },
        {
            image: "https://www.fnp.com/assets/images/custom/cakes_23/flavour/Black-Forest-Cakes_web.jpg",
            name: "Strawberry Dream",
            description: "Light sponge cake with fresh strawberries and cream",
            price: 500
        },
        {
            image: "https://www.fnp.com/assets/images/custom/cakes_23/featured/Cream-Cakes_web.jpg",
            name: "Vanilla Bliss",
            description: "Classic vanilla cake with smooth buttercream frosting",
            price: 449
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSioUzNMKaVks1gJIQLIPutuGmQ-0WYrzn69w&s",
            name: "Vanilla Bliss",
            description: "Classic vanilla cake with smooth buttercream frosting",
            price: 449
        },
        {
            image: "https://assets.winni.in/product/primary/2023/3/83221.jpeg?dpr=1&w=500",
            name: "Vanilla Bliss",
            description: "Classic vanilla cake with smooth buttercream frosting",
            price: 449
        },
        {
            image: "https://i1.fnp.com/images/pr/l/v20190520192511/black-forest-cake-half-kg_1.jpg",
            name: "Vanilla Bliss",
            description: "Classic vanilla cake with smooth buttercream frosting",
            price: 449
        },
        {
            image: "https://i7.fnp.com/images/pr/l/v20210323125839/fresh-vanilla-cake-half-kg_1.jpg",
            name: "Vanilla Bliss",
            description: "Classic vanilla cake with smooth buttercream frosting",
            price: 449
        },
        {
            image: "https://butterry.com/image/cache/catalog/buttery/sq-choco-vanilla-cake0006chva-AA-1000x1000.jpg",
            name: "Vanilla Bliss",
            description: "Classic vanilla cake with smooth buttercream frosting",
            price: 449
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8NGR2qq8NhAeEzGOl-j0zgqz3qTr_jo5Dvg&s",
            name: "Vanilla Bliss",
            description: "Classic vanilla cake with smooth buttercream frosting",
            price: 449
        },
        {
            image: "https://mrbrownbakery.com/image/images/Hc3JdMR3NEPdspNUxdyTb0iEJnOfK9fRhIHXLuth.jpeg?p=full",
            name: "Vanilla Bliss",
            description: "Classic vanilla cake with smooth buttercream frosting",
            price: 449
        },
        {
            image: "https://stordfkenticomedia.blob.core.windows.net/df-us/rms/media/recipesmedia/recipes/retail/desktopimages/2018/sep/rainbow-cake600x600_2.jpg?ext=.jpg",
            name: "Vanilla Bliss",
            description: "Classic vanilla cake with smooth buttercream frosting",
            price: 449
        },
        {
            image: "https://bakingamoment.com/wp-content/uploads/2023/07/IMG_2051-ice-cream-cake.jpg",
            name: "Vanilla Bliss",
            description: "Classic vanilla cake with smooth buttercream frosting",
            price: 449
        }
    ];

    

    return (
        <div className="cake-cards-container">
            {cakes.map((cake, index) => (
                <CakeCard key={index} {...cake} />
            ))}
        </div>
    );
};

export default CakeCards;
