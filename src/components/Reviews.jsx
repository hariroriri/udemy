import dp from '../../constants/images';

export const Reviews = () => {
  return (
    <>
    <h2 className="section-head">Reviews</h2>
    <div className="review-section">
      <div className="review-imgage">
        <img src={dp} className="review-img" alt="review-img" />
      </div>
      <div className="review-contents">
        <div className="review-stars">
          ★★★★★
        </div>
        <h2>Hari</h2>
        <p className="review-para">Excellent Course</p>
        <p className="review-para-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod beatae numquam at voluptate necessitatibus modi explicabo nihil? Velit sit unde fugiat libero vitae praesentium ipsa laboriosam repellendus eum. Repellendus, obcaecati.</p>
      </div>
    </div>
  </>
  )
}
