import { ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.css";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

/**
 * Foi aplicada desestruturação nos parametros da funcao, para acessar as props
 * Dessa forma a prop hasBorder ja vai com um valor padrão true, e caso nao seja
 * passado nenhum valor para essa propriedade ela assume valor true
 */
export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
  return (
    <div>
      <img
        className={hasBorder ? styles.avatarWithBorder : styles.avatar}
        {...props}
      />
    </div>
  );
}
