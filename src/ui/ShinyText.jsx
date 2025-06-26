/* eslint-disable react/prop-types */
const ShinyText = ({ text, disabled = false, speed = 5, className = '' }) => {
  const animationDuration = `${speed}s`;

  return (
    <div className={`group inline-block ${className}`}>
      <div
        className={`text-[#b5b5b5a4] bg-clip-text transition-all duration-300 ${disabled ? '' : 'group-hover:animate-shine'
          }`}
        style={{
          backgroundImage:
            'linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)',
          backgroundSize: '200% 100%',
          WebkitBackgroundClip: 'text',
          animationDuration: animationDuration,
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default ShinyText;
