"use client"
import Image from "next/image";

type ButtonProps = {
    type: 'button' |'submit';
    title: string;
    onClickId?: string;
    icon?: string;
    variant: string;
    full?: boolean;
}

const Button = ({type, title, onClickId, icon, variant, full}: ButtonProps) => {
 
  const handleClick = ()=> {
    const section = document.getElementById(onClickId!);

    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth' 
      });
    }
  }

  return (
    <button
        type={type}
        className={`flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'}`}
        onClick={handleClick}
    >
        {icon && <Image src={icon} alt={title} width={24} height={24}/>}
        <label className="bold-16 whitespace-nowrap cursor-pointer">
            {title}
        </label>
    </button>
  )
}

export default Button