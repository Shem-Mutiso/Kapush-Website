interface LogoProps {
  size?: number
}

export default function Logo({ size = 40 }: LogoProps) {
  return (
    <img
      src="/favicon.svg"
      alt="Kapush"
      width={size}
      height={size}
      style={{ width: size, height: size, objectFit: 'contain' }}
    />
  )
}
