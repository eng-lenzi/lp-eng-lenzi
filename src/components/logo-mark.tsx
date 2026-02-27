type LogoMarkProps = {
  className?: string;
  alt?: string;
};

export function LogoMark({ className = "", alt = "Logo Eng. Fernando Eugênio Lenzi" }: LogoMarkProps) {
  return (
    <img
      src="/brand/logo.svg"
      alt={alt}
      className={className}
      loading="eager"
      decoding="async"
      draggable={false}
    />
  );
}
