type Props = { name: string; alt: string; className?: string; eager?: boolean; sizes?: string };
export function Photo({ name, alt, className, eager = false, sizes = '(max-width: 700px) 100vw, 50vw' }: Props) {
  const widths = name === 'granada' ? [640, 1280, 1920] : [480, 960];
  return <img className={className} src={'/media/' + name + '-' + widths[0] + '.webp'}
    srcSet={widths.map(w => '/media/' + name + '-' + w + '.webp ' + w + 'w').join(', ')} sizes={sizes}
    width={name === 'masaya' ? 3484 : name === 'granada' ? 3306 : 1024} height={name === 'masaya' ? 2323 : name === 'granada' ? 2204 : 684}
    alt={alt} loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : 'auto'} decoding="async" />;
}
