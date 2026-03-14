import "./moregallery.scss";

import f1 from "../../assets/images/f1.png";
import { useState } from "react";


const MoreGallery = () => {
  const categories = [
    "Cultural",
    "Technical",
    "Sports",
    "Workshop",
    "Seminar",
    "Fun",
    "Music",
    "Dance",
    "Art",
    "Drama",
    "Photography",
    "Other",
  ];

  const cardsByCategory: { [key: string]: { img: string; title: string }[] } = {
    Cultural: [
      { img: f1, title: "Cultural Event 1" },
      { img: f1, title: "Cultural Event 2" },
      { img: f1, title: "Cultural Event 3" },
    ],
    Technical: [
      { img: f1, title: "Technical Event 1" },
      { img: f1, title: "Technical Event 2" },
      { img: f1, title: "Technical Event 3" },
    ],
    Sports: [
      { img: f1, title: "Sports Event 1" },
      { img: f1, title: "Sports Event 2" },
      { img: f1, title: "Sports Event 3" },
    ],
    Workshop: [
      { img: f1, title: "Workshop 1" },
      { img: f1, title: "Workshop 2" },
      { img: f1, title: "Workshop 3" },
    ],
    Seminar: [
      { img: f1, title: "Seminar 1" },
      { img: f1, title: "Seminar 2" },
      { img: f1, title: "Seminar 3" },
    ],
    Fun: [
      { img: f1, title: "Fun 1" },
      { img: f1, title: "Fun 2" },
      { img: f1, title: "Fun 3" },
    ],
    Music: [
      { img: f1, title: "Music 1" },
      { img: f1, title: "Music 2" },
      { img: f1, title: "Music 3" },
    ],
    Dance: [
      { img: f1, title: "Dance 1" },
      { img: f1, title: "Dance 2" },
      { img: f1, title: "Dance 3" },
    ],
    Art: [
      { img: f1, title: "Art 1" },
      { img: f1, title: "Art 2" },
      { img: f1, title: "Art 3" },
    ],
    Drama: [
      { img: f1, title: "Drama 1" },
      { img: f1, title: "Drama 2" },
      { img: f1, title: "Drama 3" },
    ],
    Photography: [
      { img: f1, title: "Photography 1" },
      { img: f1, title: "Photography 2" },
      { img: f1, title: "Photography 3" },
    ],
    Other: [
      { img: f1, title: "Other 1" },
      { img: f1, title: "Other 2" },
      { img: f1, title: "Other 3" },
    ],
  };

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Modal state
  const [zoomIdx, setZoomIdx] = useState<{cat: string, idx: number} | null>(null);

  // Helper to get current images array
  const getCurrentImages = () => {
    if (selectedCategory) return cardsByCategory[selectedCategory];
    return categories.flatMap(cat => cardsByCategory[cat]);
  };

  // Open zoom modal with index
  const openZoom = (cat: string, idx: number) => {
    setZoomIdx({cat, idx});
  };

  // Next/Prev navigation
  const handleNext = () => {
    if (!zoomIdx) return;
    const images = getCurrentImages();
    let nextIdx = zoomIdx.idx + 1;
    if (nextIdx >= images.length) nextIdx = 0;
    setZoomIdx({cat: zoomIdx.cat, idx: nextIdx});
  };
  const handlePrev = () => {
    if (!zoomIdx) return;
    const images = getCurrentImages();
    let prevIdx = zoomIdx.idx - 1;
    if (prevIdx < 0) prevIdx = images.length - 1;
    setZoomIdx({cat: zoomIdx.cat, idx: prevIdx});
  };

  // Get images for modal
  const imagesForModal = getCurrentImages();
  const zoomImg = zoomIdx ? imagesForModal[zoomIdx.idx]?.img : null;

  return (
    <>
      <section className="more-gallery">
        <div className="more-gallery-header">
          <h2>More Gallery Photos</h2>
          <p>Explore additional moments and memories from our events.</p>
        </div>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={
                "gallery-category-btn" + (selectedCategory === cat ? " active" : "")
              }
              style={{
                margin: "0 8px 12px 0",
                padding: "8px 18px",
                borderRadius: 20,
                border: "none",
                background: selectedCategory === cat ? "var(--accent-gold)" : "#eee",
                color: selectedCategory === cat ? "#fff" : "#222",
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: 'Outfit, sans-serif',
                fontSize: 15,
                boxShadow: selectedCategory === cat ? "0 2px 8px rgba(0,0,0,0.08)" : "none",
                outline: "none",
              }}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="more-gallery-grid">
          {selectedCategory
            ? cardsByCategory[selectedCategory].map((card, idx) => (
                <div className="more-gallery-card" key={card.title + idx} onClick={() => openZoom(selectedCategory, idx)} style={{cursor:'zoom-in'}}>
                  <img src={card.img} alt={card.title} />
                </div>
              ))
            : categories.flatMap((cat) =>
                cardsByCategory[cat].map((card, idx) => (
                  <div className="more-gallery-card" key={cat + card.title + idx} onClick={() => openZoom(cat, idx)} style={{cursor:'zoom-in'}}>
                    <img src={card.img} alt={card.title} />
                  </div>
                ))
              )}
        </div>
        {/* Modal for zoomed image */}
        {zoomImg && zoomIdx && (
          <div
            className="gallery-zoom-modal"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(20,16,12,0.92)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000,
              transition: 'background 0.3s',
              animation: 'fadeInBg 0.3s',
            }}
          >
            <button
              onClick={() => setZoomIdx(null)}
              className="gallery-zoom-close"
              aria-label="Close"
            >
              <span style={{fontSize: 32, fontWeight: 700, lineHeight: 1}}>&#10005;</span>
            </button>
            {/* Desktop prev/next buttons */}
            <button
              onClick={handlePrev}
              className="gallery-zoom-prev gallery-zoom-desktop"
              aria-label="Previous"
            >
              &#8592;
            </button>
            <div
              className="gallery-zoom-modal-content"
              style={{
                position: 'relative',
                animation: 'zoomInImg 0.35s cubic-bezier(.4,1.6,.6,1)',
                display: 'block',
              }}
            >
              <img
                src={zoomImg}
                alt="Zoomed"
                className="gallery-zoom-modal-img"
                style={{
                  maxWidth: '92vw',
                  maxHeight: '82vh',
                  borderRadius: 22,
                  boxShadow: '0 12px 48px 0 rgba(0,0,0,0.28)',
                  border: '6px solid #fff',
                  background: '#fff',
                  transition: 'transform 0.3s',
                  display: 'block',
                }}
              />
              {/* Mobile prev/next buttons below image */}
              <div className="gallery-zoom-controls-row">
                <button
                  onClick={handlePrev}
                  className="gallery-zoom-prev gallery-zoom-mobile"
                  aria-label="Previous"
                >
                  &#8592;
                </button>
                <button
                  onClick={handleNext}
                  className="gallery-zoom-next gallery-zoom-mobile"
                  aria-label="Next"
                >
                  &#8594;
                </button>
              </div>
            </div>
            <button
              onClick={handleNext}
              className="gallery-zoom-next gallery-zoom-desktop"
              aria-label="Next"
            >
              &#8594;
            </button>
            <style>{`
              @keyframes fadeInBg {
                from { background: rgba(20,16,12,0); }
                to { background: rgba(20,16,12,0.92); }
              }
              @keyframes zoomInImg {
                from { transform: scale(0.7) translateY(40px); opacity: 0; }
                to { transform: scale(1) translateY(0); opacity: 1; }
              }
              /* Hide mobile prev/next on desktop, hide desktop prev/next on mobile */
              .gallery-zoom-controls-row { display: none; }
              .gallery-zoom-mobile { display: none !important; }
              .gallery-zoom-desktop { display: inline-flex !important; }
              @media (max-width: 600px) {
                .gallery-zoom-controls-row { display: flex !important; }
                .gallery-zoom-mobile { display: inline-flex !important; }
                .gallery-zoom-desktop { display: none !important; }
              }
            `}</style>
          </div>
        )}
      </section>
    </>
  );
};

export default MoreGallery;
