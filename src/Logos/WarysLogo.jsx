function WarysLogo({ size = 300 }) {
  return (
    <svg
      width={700}
      height={size / 2}
      viewBox="10 0 400 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="warysCurve"
        d="M 80 220 Q 200 80 360 220"
        fill="transparent"
      />

      <text
        fill="white"
        fontSize="64"
        fontFamily="Cinzel, serif"
        letterSpacing="6"
      >
        <textPath
          href="#warysCurve"
          startOffset="50%"
          textAnchor="middle"
        >
          WARYS
        </textPath>
      </text>
    </svg>
  )
}

export default WarysLogo
