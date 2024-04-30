import React, { ReactNode, CSSProperties } from 'react';
import styles from './Typography.module.css'; // Import the CSS module

interface TypographyProps {
  variant?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption';
  className?: string;
  children: ReactNode;
  style?: CSSProperties; 
}

const Typography: React.FC<TypographyProps> = ({ variant = 'body1', className = '', style: propStyle = {}, children }) => {
  const style = { ...propStyle };

  return <span style={style} className={`${styles[variant]} ${styles.typographyContainer} ${className}`}>{children}</span>;
};

export default Typography;
