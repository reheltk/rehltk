import React from "react";
import Carousel from "react-material-ui-carousel";

function Header() {
    return (
        <>
            <Carousel
                swipe={true}
                height={600}
                sx={{
                    width: "100%",
                }}
            >
                <img
                    src="images/Artboard-3.jpg"
                    alt=""
                    style={{
                        height: 600,
                        width: "100%",
                        objectFit: "fill",
                    }}
                />
                <img
                    src="images/Artboard-1.jpg"
                    alt=""
                    style={{
                        height: 600,
                        width: "100%",
                        objectFit: "fill",
                    }}
                />
                <img
                    src="images/Artboard-2.jpg"
                    alt=""
                    style={{
                        height: 600,
                        width: "100%",
                        objectFit: "fill",
                    }}
                />
            </Carousel>
        </>
    );
}

export default Header;
