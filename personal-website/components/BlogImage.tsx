'use client';

import Image from 'next/image';
import styles from './BlogImage.module.css';

interface BlogImageProps {
  src: string;
  alt?: string;
  caption?: string;
}

export function BlogImage({ src, alt = '', caption }: BlogImageProps) {
  return (
    <figure className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={600}
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
          }}
        />
      </div>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}
