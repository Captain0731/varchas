
import "./moremovment.scss";
import f1 from "../../assets/images/f1.png";
import { useState } from "react";

const categories = [
	"Sports",
	"Fun",
	"Celebration",
	"Community",
	"Games",
	"Group"
];

const movmentDataByCategory: { [key: string]: { img: string; title: string; desc: string }[] } = {
	Sports: [
		{ img: f1, title: "Movement Moment 1", desc: "A special moment from our movement activities." },
		{ img: f1, title: "Sports Moment 2", desc: "Team spirit in action." },
		{ img: f1, title: "Sports Moment 3", desc: "Victory and celebration." },
	],
	Fun: [
		{ img: f1, title: "Movement Moment 2", desc: "Teamwork and energy on display." },
		{ img: f1, title: "Fun Moment 2", desc: "Laughter and games." },
		{ img: f1, title: "Fun Moment 3", desc: "Unforgettable fun times." },
	],
	Celebration: [
		{ img: f1, title: "Movement Moment 3", desc: "Celebrating achievements together." },
		{ img: f1, title: "Celebration Moment 2", desc: "Special awards and honors." },
		{ img: f1, title: "Celebration Moment 3", desc: "Dancing and music." },
	],
	Community: [
		{ img: f1, title: "Movement Moment 4", desc: "A snapshot of our vibrant community." },
		{ img: f1, title: "Community Moment 2", desc: "Working together for a cause." },
		{ img: f1, title: "Community Moment 3", desc: "Building lasting bonds." },
	],
	Games: [
		{ img: f1, title: "Movement Moment 5", desc: "Fun and games for everyone." },
		{ img: f1, title: "Games Moment 2", desc: "Competitive spirit." },
		{ img: f1, title: "Games Moment 3", desc: "Winners and smiles." },
	],
	Group: [
		{ img: f1, title: "Movement Moment 6", desc: "Memorable group activities." },
		{ img: f1, title: "Group Moment 2", desc: "Teamwork at its best." },
		{ img: f1, title: "Group Moment 3", desc: "Unity and friendship." },
	],
};


const Moremovment = () => {
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
	const [zoomImg, setZoomImg] = useState<string | null>(null);
	const [zoomIdx, setZoomIdx] = useState<{cat: string, idx: number} | null>(null);

	// Helper to get current images array
	const getCurrentImages = () => {
		if (selectedCategory) return movmentDataByCategory[selectedCategory];
		return categories.flatMap(cat => movmentDataByCategory[cat]);
	};

	// Open zoom modal with index
	const openZoom = (cat: string, idx: number) => {
		setZoomImg(getCurrentImages()[idx].img);
		setZoomIdx({cat, idx});
	};

	// Next/Prev navigation
	const handleNext = () => {
		if (!zoomIdx) return;
		const images = getCurrentImages();
		let nextIdx = zoomIdx.idx + 1;
		if (nextIdx >= images.length) nextIdx = 0;
		setZoomImg(images[nextIdx].img);
		setZoomIdx({cat: zoomIdx.cat, idx: nextIdx});
	};
	const handlePrev = () => {
		if (!zoomIdx) return;
		const images = getCurrentImages();
		let prevIdx = zoomIdx.idx - 1;
		if (prevIdx < 0) prevIdx = images.length - 1;
		setZoomImg(images[prevIdx].img);
		setZoomIdx({cat: zoomIdx.cat, idx: prevIdx});
	};



	return (
		<section className="more-movment">
			<div className="more-movment-header">
				<h2>More Movement Moments</h2>
				<p>Discover more highlights and memories from our movement events.</p>
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
			<div className="more-movment-grid">
				{selectedCategory
					? movmentDataByCategory[selectedCategory].map((item, idx) => (
						<div className="more-movment-card" key={item.title + idx} onClick={() => openZoom(selectedCategory, idx)} style={{cursor:'zoom-in'}}>
							<img src={item.img} alt={item.title} />
						</div>
					))
					: categories.flatMap((cat) =>
						movmentDataByCategory[cat].map((item, idx) => (
							<div className="more-movment-card" key={cat + item.title + idx} onClick={() => openZoom(cat, idx)} style={{cursor:'zoom-in'}}>
								<img src={item.img} alt={item.title} />
							</div>
						))
					)}
			</div>

			{/* Modal for zoomed image */}
			{zoomImg && zoomIdx && (
				<div
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
						onClick={() => {
							setZoomImg(null);
							setZoomIdx(null);
						}}
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
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'center',
							animation: 'zoomInImg 0.35s cubic-bezier(.4,1.6,.6,1)',
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
	);
};

export default Moremovment;
