'use client';

import styles from './BlogVideo.module.css';

interface BlogVideoProps {
  src: string;
  caption?: string;
  width?: number; // Optional width in pixels (default: full width)
  controls?: boolean; // Show video controls (default: true)
  autoplay?: boolean; // Autoplay video (default: false)
  loop?: boolean; // Loop video (default: false)
}

export function BlogVideo({ 
  src, 
  caption, 
  width, 
  controls = true, 
  autoplay = false,
  loop = false 
}: BlogVideoProps) {
  return (
    <figure className={styles.container} style={width ? { maxWidth: `${width}px` } : {}}>
      <div className={styles.videoWrapper}>
        <video
          src={src}
          controls={controls}
          autoPlay={autoplay}
          loop={loop}
          style={{
            width: '100%',
            height: 'auto',
          }}
        >
          Your browser does not support the video tag.
        </video>
      </div>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}

