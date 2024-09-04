import { FaStar } from "react-icons/fa";

export const Rating = () => {
    return (
        <>
            <div className="rating-section">
                <div className="rating-overview">
                    <div className="rating-number">
                        <h2>4.5</h2>
                    </div>
                    <div className="rating-stars">
                        ★★★★☆
                        <p>3 Ratings</p>
                    </div>
                </div>
                <div className="rating-breakdown">
                    <div className="rating-bar">
                        <span className="rating-no">5</span>
                        <span className="rating-star">
                            <FaStar />
                        </span>
                        <div className="rating-bar-fill" style={{ width: "60%" }}></div>
                    </div>
                    <div className="rating-bar">
                        <span className="rating-no">4</span>
                        <span className="rating-star">
                            <FaStar />
                        </span>
                        <div className="rating-bar-fill" style={{ width: "30%" }}></div>
                    </div>
                    <div className="rating-bar">
                        <span className="rating-no">3</span>
                        <span className="rating-star">
                            <FaStar />
                        </span>
                        <div className="rating-bar-fill" style={{ width: "10%" }}></div>
                    </div>
                    <div className="rating-bar">
                        <span className="rating-no">2</span>
                        <span className="rating-star">
                            <FaStar />
                        </span>
                        <div className="rating-bar-fill" style={{ width: "0%" }}></div>
                    </div>
                    <div className="rating-bar">
                        <span className="rating-no">1</span>
                        <span className="rating-star">
                            <FaStar />
                        </span>
                        <div className="rating-bar-fill" style={{ width: "0%" }}></div>
                    </div>
                </div>
            </div>
        </>
    )
}
