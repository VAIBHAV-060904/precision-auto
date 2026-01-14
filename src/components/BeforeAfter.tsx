import { useState, useRef } from "react";

const BeforeAfter = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const startDrag = (e) => {
    e.preventDefault();
    isDragging.current = true;
  };

  const stopDrag = () => {
    isDragging.current = false;
  };

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };


  // const handleMouseDown = () => {
  //   isDragging.current = true;
  // };

  // const handleMouseUp = () => {
  //   isDragging.current = false;
  // };

  // const handleMouseMove = (e: React.MouseEvent) => {
  //   if (isDragging.current) {
  //     handleMove(e.clientX);
  //   }
  // };

  // const handleTouchMove = (e: React.TouchEvent) => {
  //   handleMove(e.touches[0].clientX);
  // };

  return (
    <section className="py-24 px-4 bg-background select-none">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
            Transformation
          </span>
          <h2 className="section-heading mb-4">
            Before & <span className="text-primary">After</span>
          </h2>
          <p className="section-subheading">
            Witness the dramatic transformation our expert detailing delivers.
            Drag the slider to reveal the difference.
          </p>
        </div>

        {/* Comparison Slider */}
        <div
          ref={containerRef}
          className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden glass-card select-none"
          onMouseMove={(e) => {
            if (!isDragging.current) return;
            handleMove(e.clientX);
          }}
          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}
          onTouchMove={(e) => {
            if (!isDragging.current) return;
            handleMove(e.touches[0].clientX);
          }}
        >
          {/* After Image (Full) - Dark clean car */}
          {/* After Image */}
          <div className="absolute inset-0">

            <img


              src={`${import.meta.env.BASE_URL}car-after.png`}
              alt="Car after detailing"
              className="w-full h-full object-cover pointer-events-none"
              draggable={false}
            />
          </div>


          {/* Before Image (Clipped) - Dirty car */}
          {/* Before Image */}
          <div
            className="absolute inset-0"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img
              src={`${import.meta.env.BASE_URL}car-before.png`}
              alt="Car before detailing"

              className="w-full h-full object-cover pointer-events-none"
              draggable={false}
            />
          </div>


          {/* Slider Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-primary"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* Handle Circle */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
             w-12 h-12 rounded-full bg-primary
             flex items-center justify-center
             shadow-lg glow-primary
             cursor-grab active:cursor-grabbing"
              onMouseDown={startDrag}
              onTouchStart={startDrag}
            >
              <div className="flex gap-0.5">
                <div className="w-0.5 h-4 bg-primary-foreground rounded-full" />
                <div className="w-0.5 h-4 bg-primary-foreground rounded-full" />
              </div>
            </div>
          </div>

          {/* Labels */}
          <div className="absolute bottom-4 left-4 px-3 py-1 glass-card text-xs font-medium">
            Before
          </div>
          <div className="absolute bottom-4 right-4 px-3 py-1 glass-card text-xs font-medium">
            After
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
