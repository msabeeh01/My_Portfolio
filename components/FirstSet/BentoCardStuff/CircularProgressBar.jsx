const CircularProgressBar = ({ progress }) => {
    return (
        <div className="w-[40px] h-[40px] relative">
            <svg viewBox="0  0  36  36" className="w-full h-full">
                <path
                    fill="none"
                    d="M18  2.0845
                        a  15.9155  15.9155  0  0  1  0  31.831
                        a  15.9155  15.9155  0  0  1  0 -31.831"
                    className="donut"
                    strokeDasharray={`${progress},  100`}
                    strokeWidth="4"
                    // stroke is green above 70%, yellow between 50-70, red below 50
                    stroke={progress > 70 ? "#4BDB61" : progress > 50 ? "#ffc107" : "#dc3545"}
                    strokeLinecap="round"
                     />
            </svg>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <p className="text-center text-xs">{progress}</p>
            </div>
        </div>
    );
};

export default CircularProgressBar;