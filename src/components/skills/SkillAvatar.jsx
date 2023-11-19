import {skill} from "../../assets"

const SkillAvatar = () => {
  const imgClass = "w-16 h-16 md:w-32 md:h-32 lg:w-52 lg:h-52";

  return (
    <div>
        <img src={skill} alt="skill" className={imgClass} />
    </div>
  )
}

export default SkillAvatar