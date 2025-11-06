'use client';

import Image from 'next/image';
import styles from './BlogImageLeft.module.css';

interface BlogImageLeftProps {
  src: string;
  alt?: string;
  caption?: string;
  width?: number; // Optional width in pixels (default: 300)
}

export function BlogImageLeft({ src, alt = '', caption, width = 300 }: BlogImageLeftProps) {
  return (
    <figure className={styles.container} style={{ width: `${width}px` }}>
      <div className={styles.imageWrapper}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={width * 1.5} // Maintain aspect ratio
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
          }}
        />
      </div>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}

